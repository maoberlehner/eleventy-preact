const { html } = require(`htm/preact`);

module.exports = ({ children }) => html`
  <div class="BaseWrapper">
    ${children}
  </div>
`;
