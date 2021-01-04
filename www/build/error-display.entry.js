import { r as registerInstance, h } from './index-81f7b2f5.js';

const ErrorDisplay = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    if (!this.errors) {
      return null;
    }
    return (h("ul", { class: "error-messages" }, Object.keys(this.errors).map(k => this.errors[k].map(e => (h("li", null, k, " ", e))))));
  }
};

export { ErrorDisplay as error_display };
