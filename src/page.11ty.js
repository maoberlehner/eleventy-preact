/* eslint-disable class-methods-use-this */
const { html } = require(`htm/preact`);
const render = require(`preact-render-to-string`);

const App = require(`./components/App`);

module.exports = class Page {
  data() {
    return {
      title: `Setting up Eleventy with Preact and htm`,
      layout: `layout.njk`,
      pagination: {
        data: `pages`,
        size: 1,
        alias: `page`,
        addAllPagesToCollections: true,
      },
      permalink: ({ page }) => `/${page.slug}/index.html`,
    };
  }

  render(data) {
    return render(html`<${App} page=${data.page}/>`);
  }
};
