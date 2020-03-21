const { html } = require(`htm/preact`);
const { useState } = require(`preact/hooks`);

const withHydration = require(`./with-hydration`);

function LikeForm({ id }) {
  const [likes, setLikes] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    setLikes(likes + 1);
  };

  return html`
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
  `;
}

module.exports = withHydration(LikeForm);
