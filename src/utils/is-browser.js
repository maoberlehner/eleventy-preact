const isServer = require(`./is-server`);

module.exports = !isServer;
