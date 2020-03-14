const { html } = require(`htm/preact`);

const BaseWrapper = require(`./BaseWrapper`);

module.exports = ({ children }) => html`
  <div class="LayoutDefault">
    <main>
      ${children}
    </main>
    <footer class="LayoutDefault__footer">
      <${BaseWrapper}>
        © Markus Oberlehner
      <//>
    </footer>
  </div>
`;
