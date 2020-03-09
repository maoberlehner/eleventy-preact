const { html } = require(`htm/preact`);

const OnlyClient = require(`./OnlyClient`);

module.exports = ({ children }) => html`
  <header>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    ${children}
    <${OnlyClient}>
      <button onClick=${() => console.log(`log`)}>
        Log to console
      </button>
    <//>
  </main>
  <footer>
    © Markus Oberlehner
  </footer>
`;
