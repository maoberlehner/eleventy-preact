const { html } = require(`htm/preact`);

const LayoutDefault = require(`./LayoutDefault`);
const SectionContent = require(`./SectionContent`);
const SectionHero = require(`./SectionHero`);
const SectionMasonry = require(`./SectionMasonry`);
const SectionTeaser = require(`./SectionTeaser`);

const sections = {
  content: SectionContent,
  hero: SectionHero,
  masonry: SectionMasonry,
  teaser: SectionTeaser,
};

module.exports = ({ page }) => html`
  <${LayoutDefault}>
    <div class="App">
      ${page.sections.map(({ data, name }) => html`
        <${sections[name]} data=${data}/>
      `)}
    </div>
  <//>
`;
