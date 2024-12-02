function encodeProxyProtocolV2UDP(clientAddress, clientPort, serverAddress, serverPort, version = 2, command = 1, protocol = 0x12) {
    if (!clientAddress || !serverAddress || !clientPort || !serverPort) {
        throw new Error("Invalid data.");
    }

    // Proxy Protocol V2 signature
    const signatureBytes = Buffer.from([
        0x0D, 0x0A, 0x0D, 0x0A,
        0x00, 0x0D, 0x0A, 0x51,
        0x55, 0x49, 0x54, 0x0A
    ]);

    // Version and command byte (4 high bits = version, 4 low bits = command)
    const verAndCmdByte = (version << 4) | command;

    // Family and protocol byte (4 high bits = family, 4 low bits = protocol)
    const famAndProtByte = (0x1 << 4) | protocol; // IPv4 + UDP

    // Address length for IPv4/UDP
    const addressLength = 12; // 4 bytes (source IP) + 4 bytes (destination IP) + 2 bytes (source port) + 2 bytes (destination port)

    // Convert IP addresses and ports to buffers
    const clientIPBytes = Buffer.from(clientAddress.split('.').map(Number));
    const serverIPBytes = Buffer.from(serverAddress.split('.').map(Number));
    const clientPortBuffer = Buffer.alloc(2);
    const serverPortBuffer = Buffer.alloc(2);
    clientPortBuffer.writeUInt16BE(clientPort);
    serverPortBuffer.writeUInt16BE(serverPort);

    // Create the full header buffer
    const header = Buffer.alloc(16 + addressLength);

    // Fill header
    signatureBytes.copy(header, 0); // Signature
    header[12] = verAndCmdByte;     // Version and command
    header[13] = famAndProtByte;    // Family and protocol
    header.writeUInt16BE(addressLength, 14); // Address length
    clientIPBytes.copy(header, 16); // Source IP
    serverIPBytes.copy(header, 20); // Destination IP
    clientPortBuffer.copy(header, 24); // Source port
    serverPortBuffer.copy(header, 26); // Destination port

    return header;
}

module.exports = { encodeProxyProtocolV2UDP };
