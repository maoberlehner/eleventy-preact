const { html } = require(`htm/preact`);

const isServer = require(`../utils/is-server`);

module.exports = ({ component, childProps, children }) => html`
  <div
    data-component=${isServer && component}
    data-child-props=${isServer && JSON.stringify(childProps)}
  >
    ${children}
  </div>
`;
