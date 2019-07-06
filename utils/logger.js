const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
const LOG_FILE = Object.freeze('/opt/book-purple/orders-node/order-node.log');
let env = 'dev';

function getTransports() {

    // console
    let consoleTransport = new (winston.transports.Console)({
        level: 'debug',
        handleExceptions: true,
        colorize: true,
        timestamp: function timeStampCallback() {
            return new Date().toLocaleString();
        }
    });

    // file
    let fileTransport = new winston.transports.File({
        level: 'info',
        filename: LOG_FILE,
        handleExceptions: true,
        json: false,
        colorize: false,
        timestamp: function timeStampCallback() {
            return new Date().toLocaleString();
        }
    });

    let transport = [];
    if (env !== 'production') {
       transport.push(consoleTransport);
    }
    transport.push(fileTransport);
    return transport;
}

const myFormat = printf(({ level, message, timestamp }) => {
    timestamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    return `${timestamp} ${level}: ${message}`;
  });

const logger = winston.createLogger({
    format: combine(
        timestamp(),
        myFormat
      ),
    transports: getTransports(),
    exitOnError: false
});

module.exports.stream = {
    write: function (message, encoding) {
        logger.info(message.slice(0, -1));
    }
}

module.exports = logger;