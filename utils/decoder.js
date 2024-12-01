// Функция для декодирования заголовка Proxy Protocol v2 для UDP с IPv4
function decodeProxyProtocolV2UDP(buffer) {
    if (buffer.length < 16 || buffer[0] !== 0x0D || buffer[1] !== 0x0A || buffer[2] !== 0x0D || buffer[3] !== 0x0A) {
        throw new Error('Invalid Proxy Protocol Header');
    }

    // Проверка версии и команды
    if (buffer[12] !== 0x21 || buffer[13] !== 0x01) {
        throw new Error('Invalid Proxy Protocol Command or Version');
    }

    // Проверка семейства адресов (IPv4)
    if (buffer[14] !== 0x11) {
        throw new Error('Unsupported Address Family');
    }

    // Получаем длину структуры
    const length = buffer.readUInt16BE(15);
    if (length !== 12) {
        throw new Error('Invalid length for IPv4');
    }

    // Декодируем исходный и целевой адреса (IPv4)
    const srcAddr = `${buffer[16]}.${buffer[17]}.${buffer[18]}.${buffer[19]}`;
    const dstAddr = `${buffer[20]}.${buffer[21]}.${buffer[22]}.${buffer[23]}`;

    // Декодируем порты
    const srcPort = buffer.readUInt16BE(24);
    const dstPort = buffer.readUInt16BE(26);

    return {
        srcAddr,
        srcPort,
        dstAddr,
        dstPort
    };
}

// Пример использования
const buffer = Buffer.from('0D0A0D0A000D0A515549540A11000C7F0000017F00000150023900', 'hex');
const decoded = decodeProxyProtocolV2UDP(buffer);
console.log(decoded);
