exports.deny = function(res) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Access Denied 🚫');
};

exports.allow = function(res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Request allowed ✅');
};
