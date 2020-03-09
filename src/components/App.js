const { html } = require(`htm/preact`);

const LayoutDefault = require(`./LayoutDefault`);

module.exports = ({ page }) => html`
  <${LayoutDefault}>
    <p>${page.name}</p>
  <//>
`;
