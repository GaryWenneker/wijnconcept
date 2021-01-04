import { r as registerInstance, h } from './index-81f7b2f5.js';

const Footer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("footer", null, h("div", { class: "container" }, h("stencil-route-link", { url: "/", anchorClass: "logo-font" }, "WijnConcept"), h("span", { class: "attribution" }, "An interactive learning project from ", h("a", { href: "https://thinkster.io" }, "Thinkster"), ". Code & design licensed under MIT."))));
  }
};

export { Footer as app_footer };
