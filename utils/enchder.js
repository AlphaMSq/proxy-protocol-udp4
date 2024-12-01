// Функция для создания заголовка Proxy Protocol v2 для UDP с IPv4
function encodeProxyProtocolV2UDP(srcAddr, srcPort, dstAddr, dstPort) {
    const header = Buffer.alloc(16 + 12); // 12 байт для IPv4
    const sig = Buffer.from([0x0D, 0x0A, 0x0D, 0x0A, 0x00, 0x0D, 0x0A, 0x51, 0x55, 0x49, 0x54, 0x0A]);

    // Добавляем сигнатуру PROXY
    sig.copy(header, 0);

    // Версия и команда (версии 2, команда PROXY)
    header[12] = 0x21; // Версия 2, команда PROXY
    header[13] = 0x01; // Команда PROXY

    // Семейство адресов (IPv4)
    header[14] = 0x11; // AF_INET (IPv4)

    // Длина структуры (12 байт для IPv4)
    header.writeUInt16BE(12, 15);

    // Исходный и целевой адрес и порты для IPv4
    const srcAddrParts = srcAddr.split('.').map(Number);
    const dstAddrParts = dstAddr.split('.').map(Number);

    // Копируем исходный и целевой адрес в заголовок
    header.writeUInt8(srcAddrParts[0], 16);
    header.writeUInt8(srcAddrParts[1], 17);
    header.writeUInt8(srcAddrParts[2], 18);
    header.writeUInt8(srcAddrParts[3], 19);
    header.writeUInt8(dstAddrParts[0], 20);
    header.writeUInt8(dstAddrParts[1], 21);
    header.writeUInt8(dstAddrParts[2], 22);
    header.writeUInt8(dstAddrParts[3], 23);

    // Копируем порты (16-битные)
    header.writeUInt16BE(srcPort, 24);
    header.writeUInt16BE(dstPort, 26);

    return header;
}

module.exports = { encodeProxyProtocolV2UDP };