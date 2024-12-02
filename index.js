const dgram = require('dgram');
const { log } = require('./logger.js')
const logger = new log()
const { Buffer } = require('node:buffer');
const replace = require('buffer-replace');
const { encodeProxyProtocolV2UDP } = require('./utils/enchder.js');

const server = dgram.createSocket('udp4');

/**
 * @typedef {Object} ClientInfo
 * @property {number} port - Порт клиента.
 * @property {string} ip - IP-адрес клиента.
 * @property {number} time - Временная метка последней активности.
 * @property {boolean} headerSent - Отправлен ли заголовок.
 * @property {import('dgram').Socket} socket - UDP-сокет клиента.
 */

/** 
 * @type {Record<number, ClientInfo>} 
 */
let ipArray = {};

let serverip = "65.21.175.138"
let serverPort = 19132

server.on('error', (err) => {
    logger.error(`server error:\n${err.stack}`);
    server.close();
});

/**
 * 
 * @param {Buffer} buffer 
 * @param {dgram.RemoteInfo} rinfo 
 * @returns 
 */
const addProxyHeader = (buffer, rinfo) => {
    const proxyHeader = encodeProxyProtocolV2UDP(rinfo.address, rinfo.port, serverip, serverPort);
    console.log(proxyHeader);
    return Buffer.concat([proxyHeader, buffer]);
}

function packetReceive(msg, rinfo, sendPort) {
    type = msg.toString('hex').substr(0, 2)
    if (rinfo.address !== serverip) {
        var portTime = new Date();
        if (typeof (ipArray[rinfo.port]) === 'undefined') {
            ipArray[rinfo.port] = {
                'port': rinfo.port, 'ip': rinfo.address,
                'time': portTime.getTime(), 'socket': dgram.createSocket("udp4")
            };
            ipArray[rinfo.port].socket.bind(rinfo.port);
            ipArray[rinfo.port].socket.on("message", function (msgg, rinfoo) {
                packetReceive(msgg, rinfoo, ipArray[rinfo.port]['port']);
            });
            ipArray[rinfo.port].socket.on("close", () => {
                logger.warn(`Socket ${rinfo.port} cosed!`)
            })
        }
        else {
            ipArray[rinfo.port]['time'] = portTime.getTime();
        }
    }
    if (rinfo.address !== serverip) {
        logger.info(`0x${type} packet received from client: ${rinfo.address}`)

        console.log(type.indexOf('0x01') != -1, type.indexOf('0x05') != -1, ipArray[rinfo.port].headerSent == false)
        if (ipArray[rinfo.port].headerSent == false && (type.indexOf('0x01') != -1 || type.indexOf('0x05') != -1)) {
            logger.warn('Send with header!');
            const messageWithHeader = addProxyHeader(msg, rinfo);

            ipArray[rinfo.port].socket.send(messageWithHeader, 0, messageWithHeader.length, serverPort,
                serverip);
            ipArray[rinfo.port].headerSent = true;
        } else {
            ipArray[rinfo.port].socket.send(msg, 0, msg.length, serverPort,
                serverip);
        }
    }

    else if (rinfo.port == serverPort) {
        type = msg.toString('hex').substr(0, 2)
        logger.info(`0x${type} packet received from server: ${rinfo.address}`)

        var currentTime = new Date().getTime();
        if ((currentTime - ipArray[sendPort]['time']) > 30000) {
            ipArray[sendPort].socket.close();
            delete ipArray[sendPort];
        }
        else {
            server.send(replace(msg, '19132', '19133'), 0, replace(msg, '19132', '19133').length, ipArray[sendPort]['port'], ipArray[sendPort]['ip']);
        }
    }
}

server.on('message', (msg, info) => {
    packetReceive(msg, info, info.port)
});

server.on('listening', () => {
    const address = server.address();
    logger.info(`server listening ${address.address}:${address.port}`);
});

server.on("close", () => {
    logger.warn('Server closed!')
})


server.bind({ address: '0.0.0.0', port: 19133 });