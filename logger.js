function getime() {
    timeStamp = new Date()

    if (timeStamp.getHours() <= 9) {
        hour = '0' + timeStamp.getHours()
    }
    else {
        hour = timeStamp.getHours()
    }
    if (timeStamp.getMinutes() <= 9) {
        min = '0' + timeStamp.getMinutes()
    }
    else {
        min = timeStamp.getMinutes()
    }
    if (timeStamp.getSeconds() <= 9) {
        sec = '0' + timeStamp.getSeconds()
    }
    else {
        sec = timeStamp.getSeconds()
    }

    timeStamp = hour + ':' + min + ':' + sec
    return timeStamp
}

function logger() { }

logger.prototype.info = function (msg) {
    console.log(getime() + ' \u001b[36m[DEBUG] \u001b[0m' + msg.replaceAll("65.21.175.138", "*.*.*.138").replaceAll("146.103.25.36", "*.*.*.36"))
}

logger.prototype.warn = function (msg) {
    console.log(getime() + ' \u001b[33m[WARN] \u001b[0m' + msg)
}

logger.prototype.error = function (msg) {
    console.log(getime() + ' \u001b[31m[ERROR] \u001b[0m' + msg)
}

logger.prototype.text = function (msg) {
    console.log(msg)
};

module.exports.log = logger;