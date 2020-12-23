import { r as registerInstance, h } from './index-a8e04894.js';

const Header = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    // const { user } = this;
    return (h("nav", { class: "o-page-header", id: "myHeader" }, h("div", { class: "m-page-wrap" }, h("div", { class: "o-header-bottom__inner-wrap" }, h("div", { class: "m-flex-columns__col o-header-bottom__col" }, h("ul", { class: "m-primary-navigation" }, h("li", { class: "m-primary-navigation__item " }, h("a", { href: "#" }, "Hoe werkt het?")), h("li", { class: "m-primary-navigation__item " }, h("a", { href: "#" }, "Voordelen")), h("li", { class: "m-primary-navigation__item " }, "LOGO"), h("li", { class: "m-primary-navigation__item " }, h("a", { href: "#" }, "Onze wijnhuizen")), h("li", { class: "m-primary-navigation__item " }, h("a", { href: "#" }, "FAQ")))), h("div", { class: "m-flex-columns__col o-header-bottom__col" }, h("div", { class: "o-header-bottom__account__button" }, "Mijn account"))))));
  }
};

export { Header as app_header };
