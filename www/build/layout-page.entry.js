import { r as registerInstance, h } from './index-81f7b2f5.js';

const LayoutPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.setTag = (tag) => {
      this.activeTag = tag;
    };
  }
  componentDidLoad() {
    document.title = 'Layout Page - WijnConcept Title';
  }
  render() {
    return (h("main", { class: "layout-page" }, h("section", { class: "m-section" }, h("div", { class: "m-grid" }, h("div", { class: "m-grid__M12" }, "Wijn", h("div", { class: "container pagea" }, h("div", { class: "row" })))))));
  }
};

export { LayoutPage as layout_page };
