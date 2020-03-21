const { html, render } = require(`htm/preact`);

const whenVisible = require(`./utils/when-visible`);

const LikeForm = require(`./components/LikeForm`);

const componentMap = {
  LikeForm,
};

const componentData = window.__STATE__.components;
const $componentMarkers = document.querySelectorAll(`[data-cmp-id]`);

Array.from($componentMarkers).forEach(($marker) => {
  const $component = $marker.nextElementSibling;

  whenVisible($component, () => {
    const { name, props } = componentData.find(c => c.id === $marker.dataset.cmpId);
    const Component = componentMap[name];

    render(html`<${Component} ...${props}/>`, $component.parentNode, $component);
  });
});
