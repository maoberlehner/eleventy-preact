const { html, render } = require(`htm/preact`);

const whenVisible = require(`./utils/when-visible`);

const componentMap = {};

const $components = document.querySelectorAll(`[data-child-props]`);

Array.from($components).forEach(($component) => {
  whenVisible($component, () => {
    const childProps = JSON.parse($component.dataset.childProps);
    const Component = componentMap[childProps.data.component];

    render(html`<${Component} ...${childProps}/>`, $component.parentNode, $component);
  });
});
