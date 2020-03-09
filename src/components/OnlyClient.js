const isBrowser = require(`../utils/is-browser`);

module.exports = ({ children }) => isBrowser && children;
