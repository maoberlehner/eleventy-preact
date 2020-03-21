const { html } = require(`htm/preact`);
const { useState } = require(`preact/hooks`);

const ClientHydration = require(`./ClientHydration`);

function LikeForm({ id }) {
  const [likes, setLikes] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    setLikes(likes + 1);
  };

  return html`
    <${ClientHydration} component="LikeForm" childProps=${{ id }}>
      <form
        action=${`/like/${id}`}
        method="post"
        class="LikeForm"
      >
        <button
          aria-label="Like this image"
          class="LikeForm__button"
          onClick=${handleClick}
        >
          ❤️
        </button>
        ${likes}
      </form>
    <//>
  `;
}

module.exports = LikeForm;
