const dgram = require('dgram');
const { log } = require('./logger.js')
const logger = new log()
const { Buffer } = require('node:buffer');
const replace = require('buffer-replace');
const { encodeProxyProtocolV2UDP } = require('./utils/enchder.js');

const server = dgram.createSocket('udp4');
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

    console.log({
        remoteFamily: 'IPv4',
        remoteAddress: serverip,
        remotePort: serverPort,
        localAddress: rinfo.addres,
        localPort: rinfo.port,
        protocol: 'udp'
    })
    var buf = require('proxy-protocol-v2').v2_encode({
        remoteFamily: 'IPv4',
        remoteAddress: serverip,
        remotePort: serverPort,
        localAddress: rinfo.addres,
        localPort: rinfo.port,
        protocol: 'udp'
    });
    console.log('ProxyHeader:', proxyHeader, 'buf: ', buf);

    return Buffer.concat([proxyHeader, buffer]);
}

function changePort(buffer) {
    return replace(buffer, serverPort, proxyPort)
}

function packetReceive(msg, rinfo, sendPort) {
    console.log(msg, rinfo, sendPort);
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
        }
        else {
            ipArray[rinfo.port]['time'] = portTime.getTime();
        }
    }
    if (rinfo.address !== serverip) {
        logger.info(`0x${type} packet received from client: ${rinfo.address}`)
        console.log(addProxyHeader(msg, rinfo))
        ipArray[rinfo.port].socket.send(addProxyHeader(msg, rinfo), 0, msg.length, serverPort,
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
            server.send(changePort(msg), 0, msg.length, ipArray[sendPort]['port'], ipArray[sendPort]['ip']);
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