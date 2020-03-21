const { html, render } = require(`htm/preact`);

const whenVisible = require(`./utils/when-visible`);

const LikeForm = require(`./components/LikeForm`);

const componentMap = {
  LikeForm,
};

const $components = document.querySelectorAll(`[data-component]`);

Array.from($components).forEach(($component) => {
  whenVisible($component, () => {
    const childProps = JSON.parse($component.dataset.childProps);
    const Component = componentMap[$component.dataset.component];

    render(html`<${Component} ...${childProps}/>`, $component.parentNode, $component);
  });
});
