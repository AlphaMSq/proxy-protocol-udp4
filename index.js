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
 * @property {import('dgram').Socket} socket - UDP-сокет клиента.
 */

/** 
 * @type {Record<number, ClientInfo>} 
 */
let ipArray = {};

let serverip = "65.21.175.138"
let serverPort = 19132

let proxyip = "0.0.0.0"
let proxyPort = 19133

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

    var buf = require('proxy-protocol-v2').v2_encode({
        remoteFamily: 'IPv4',
        remoteAddress: rinfo.address,
        remotePort: rinfo.port,
        localAddress: serverip,
        localPort: serverPort,
        protocol: 'udp'
    });
    console.log('pro: ', proxyHeader);
    console.log('buf: ', buf)

    return Buffer.concat([proxyHeader, buffer]);
}

function changePort(buffer) {
    return replace(buffer, serverPort, proxyPort)
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
                console.log('\x1b[33mResponse from server:\x1b[0m ', msgg, rinfoo, ipArray[rinfo.port]['port'])
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
        const messageWithHeader = addProxyHeader(msg, rinfo);
        ipArray[rinfo.port].socket.send(messageWithHeader, 0, messageWithHeader.length, serverPort,
            serverip);
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
            server.send(msg, 0, msg.length, ipArray[sendPort]['port'], ipArray[sendPort]['ip']);
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


server.bind({ address: '0.0.0.0', port: 19133 });