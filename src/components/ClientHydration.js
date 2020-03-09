const { html } = require(`htm/preact`);

const isServer = require(`../utils/is-server`);

module.exports = ({ childProps, children }) => html`
  <div data-child-props=${isServer && JSON.stringify(childProps)}>
    ${children}
  </div>
`;
