import { r as registerInstance, h } from './index-a8e04894.js';

const Header = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { user } = this;
    return (h("nav", { class: "header", id: "myHeader" }, h("div", { class: "container" }, h("stencil-route-link", { class: "navbar-brand", url: "/" }, "WijnConcept"), h("ul", { class: "nav navbar-nav pull-xs-right" }, h("li", { class: "nav-item" }, h("stencil-route-link", { anchorClass: "nav-link", url: "/", activeClass: "active", exact: true }, "Hoe werkt het")), h("li", { class: "nav-item" }, h("stencil-route-link", { anchorClass: "nav-link", url: "/", activeClass: "active", exact: true }, "Voordelen")), h("li", { class: "nav-item" }, h("stencil-route-link", { anchorClass: "nav-link", url: "/", activeClass: "active", exact: true }, "Onze wijnhuizen")), h("li", { class: "nav-item" }, h("stencil-route-link", { anchorClass: "nav-link", url: "/", activeClass: "active", exact: true }, "Fack")), this.user
      ? [
        h("li", { class: "nav-item" }, h("stencil-route-link", { anchorClass: "nav-link", url: "/editor" }, h("ion-icon", { name: "compose" }), "\u00A0New Post")),
        h("li", { class: "nav-item" }, h("stencil-route-link", { anchorClass: "nav-link", url: "/settings" }, h("ion-icon", { name: "gear-a" }), "\u00A0Settings")),
        h("li", { class: "nav-item" }, h("stencil-route-link", { anchorClass: "nav-link", url: `/profile/${this.user.username}` }, user.image && h("img", { class: "user-pic", src: user.image, alt: "user profile image" }), user.username)),
        h("li", { class: "nav-item" }, h("button", { class: "nav-link", onClick: this.signOut }, "Sign out")),
      ]
      : [
        h("li", { class: "nav-item" }, h("stencil-route-link", { anchorClass: "nav-link", url: "/login", activeClass: "active" }, "Mijn account")),
        h("li", { class: "nav-item" }, h("stencil-route-link", { anchorClass: "nav-link", url: "/register", activeClass: "active" }, "Aanmelden")),
      ]))));
  }
};

export { Header as app_header };
