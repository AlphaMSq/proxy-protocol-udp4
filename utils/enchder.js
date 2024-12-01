function encodeProxyProtocolV2UDP(clientAddress, clientPort, serverAddress, serverPort, version = 2, command = 1, protocol = 0x12) {
    // Signature block (12 bytes)
    const sig = Buffer.from([0x0D, 0x0A, 0x0D, 0x0A, 0x00, 0x0D, 0x0A, 0x51, 0x55, 0x49, 0x54, 0x0A]);

    // Version (2) and command (1) (13th byte)
    const verCmd = (version << 4) | command;

    // Family (IPv4 = 0x1) and protocol (UDP = 0x12) (14th byte)
    const fam = (0x1 << 4) | protocol;

    // Address length (source address and port, destination address and port)
    const addressLength = 2 * 4 + 2 * 2; // For UDP over IPv4 (source/destination addresses + ports)

    // Addresses (client and server)
    const clientIP = Buffer.from(clientAddress.split('.').map(x => parseInt(x)));
    const serverIP = Buffer.from(serverAddress.split('.').map(x => parseInt(x)));

    // Source and destination ports (2 bytes each, network byte order)
    const clientPortBuffer = Buffer.alloc(2);
    const serverPortBuffer = Buffer.alloc(2);
    clientPortBuffer.writeUInt16BE(clientPort);
    serverPortBuffer.writeUInt16BE(serverPort);

    // Construct the header
    const header = Buffer.alloc(16 + addressLength);

    // Signature
    sig.copy(header, 0);

    // Version/Command
    header[12] = verCmd;

    // Family/Protocol
    header[13] = fam;

    // Address length (16th byte, little-endian)
    header.writeUInt16BE(addressLength, 14);

    // Addresses (IPv4)
    clientIP.copy(header, 16, 0, 4);      // Client IP (source)
    serverIP.copy(header, 20, 0, 4);      // Server IP (destination)

    // Ports
    clientPortBuffer.copy(header, 24);    // Client port (source)
    serverPortBuffer.copy(header, 26);    // Server port (destination)

    return header;
}

module.exports = { encodeProxyProtocolV2UDP };