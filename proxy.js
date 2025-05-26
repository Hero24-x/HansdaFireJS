const http = require('http');
const url = require('url');
const rules = require('./rules');
const logger = require('./logger');
const response = require('./response');

module.exports.start = function(port) {
    const server = http.createServer((req, res) => {
        let body = [];

        req.on('data', chunk => body.push(chunk));
        req.on('end', () => {
            const payload = Buffer.concat(body).toString();
            const headers = req.headers;
            const ip = req.socket.remoteAddress;

            if (rules.detect(payload, headers, ip)) {
                logger.logBlock(ip, req.url);
                return response.deny(res);
            }

            logger.logAllow(ip, req.url);
            return response.allow(res);
        });
    });

    server.listen(port, () => {
        console.log(`🔥 HansdaFireJS running on port ${port}`);
    });
};
