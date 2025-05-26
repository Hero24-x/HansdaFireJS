const fs = require('fs');
const path = require('path');
const logFile = path.join(__dirname, '..', 'firewall.log');

function log(msg) {
    const logEntry = `[${new Date().toISOString()}] ${msg}\n`;
    fs.appendFileSync(logFile, logEntry);
}

exports.logBlock = (ip, url) => log(`BLOCKED: ${ip} tried ${url}`);
exports.logAllow = (ip, url) => log(`ALLOWED: ${ip} accessed ${url}`);
