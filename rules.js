const fs = require('fs');
const blacklist = require('../config/blacklist.json');

const patterns = [
    /<script>/i,
    /UNION\s+SELECT/i,
    /(\.\.\/)+/i,
    /etc\/passwd/i,
    /cmd=/i
];

exports.detect = function(payload, headers, ip) {
    if (blacklist.includes(ip)) return true;

    return patterns.some(pattern => pattern.test(payload)) ||
           patterns.some(pattern => pattern.test(JSON.stringify(headers)));
};
