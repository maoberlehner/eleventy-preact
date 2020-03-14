const { html } = require(`htm/preact`);

const BaseWrapper = require(`./BaseWrapper`);

module.exports = ({ data }) => html`
  <${BaseWrapper}>
    <div
      dangerouslySetInnerHTML=${{ __html: data.html }}
      class="s-content"
    />
  <//>
`;
