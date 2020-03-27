const { html } = require(`htm/preact`);

const BaseWrapper = require(`./BaseWrapper`);

module.exports = ({ data }) => html`
  <${BaseWrapper}>
    <div class="SectionTeaser">
      ${data.map(teaser => html`
        <div class="SectionTeaser__item">
          <img
            class="SectionTeaser__image"
            src=${teaser.image}
            alt=${teaser.title}
          />
          <div class="s-content">
            <h2>
              ${teaser.title}
            </h2>
            <p>
              ${teaser.text}
            </p>
            <a href=${teaser.link}>
              read more »
            </a>
          </div>
        </div>
      `)}
    </div>
  <//>
`;
