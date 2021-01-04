import { r as registerInstance, h } from './index-81f7b2f5.js';

const IpAppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pageState = [];
  }
  onPageEnter(e) {
    this.pageState = [...this.pageState, `Page enter ${e.detail.pathname}`];
  }
  onPageLeave(e) {
    this.pageState = [...this.pageState, `Page leave ${e.detail.pathname}`];
  }
  render() {
    return (h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: "/", component: "ip-app-home", exact: true, routeRender: props => h("ip-stencil-route-listener", { props: props }) }), h("stencil-route", { url: "/about", exact: true, component: "ip-app-about", routeRender: props => h("ip-stencil-route-listener", { props: props }) }))), h("ul", null, this.pageState.map(page => (h("li", null, page))))));
  }
};

export { IpAppRoot as ip_app_root };
