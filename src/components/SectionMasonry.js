const { html } = require(`htm/preact`);

const BaseWrapper = require(`./BaseWrapper`);
const LikeForm = require(`./LikeForm`);

module.exports = ({ data }) => html`
  <${BaseWrapper}>
    <div class="SectionMasonry">
      ${data.images.map(({ alt, id, src }) => html`
        <div class="SectionMasonry__item">
          <img
            src=${src}
            alt=${alt}
            class="SectionMasonry__image"
            loading="lazy"
          />
          <${LikeForm} id=${id}/>
        </div>
      `)}
    </div>
  <//>
`;
