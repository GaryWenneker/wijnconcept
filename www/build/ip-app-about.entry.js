import { r as registerInstance, h } from './index-81f7b2f5.js';

const IpAppAbout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("h1", null, "About Page :-)"), h("stencil-route-link", { url: "/" }, "Go to home page")));
  }
};

export { IpAppAbout as ip_app_about };
