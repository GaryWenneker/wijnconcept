import { r as registerInstance, h } from './index-81f7b2f5.js';

const IpAppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("h1", null, "Home Page!!"), h("stencil-route-link", { url: "/about" }, "Go to about page")));
  }
};

export { IpAppHome as ip_app_home };
