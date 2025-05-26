const proxy = require('./core/proxy');
const config = require('./config/settings.json');

proxy.start(config.port || 8080);
