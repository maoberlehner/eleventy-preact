const { html } = require(`htm/preact`);

const isServer = require(`../utils/is-server`);

let id = 0;

module.exports = Component => (props) => {
  id += 1;

  const scriptSrc = `
    window.__STATE__.components[${id}]={name:${JSON.stringify(Component.name)},props:${JSON.stringify(props)}}
  `;

  return html`
    ${isServer && html`<script dangerouslySetInnerHTML=${{ __html: scriptSrc }} data-cmp-id=${id}></script>`}
    <${Component} ...${props}/>
  `;
};
