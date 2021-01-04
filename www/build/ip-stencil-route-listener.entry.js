import { r as registerInstance, e as createEvent, h } from './index-81f7b2f5.js';

let lastKey = '';
let lastEvent = '';
let props;
const IpStencilRouteListener = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pageEnter = createEvent(this, "pageEnter", 7);
    this.pageLeave = createEvent(this, "pageLeave", 7);
    this.localPageSegments = null;
  }
  get currentPageLocation() {
    var _a, _b;
    return (_b = (_a = (this.props || props)) === null || _a === void 0 ? void 0 : _a.history) === null || _b === void 0 ? void 0 : _b.location;
  }
  _callEvent(event, location) {
    console.log('_callEvent', event, location);
    if (lastEvent === event && lastKey === (location === null || location === void 0 ? void 0 : location.key))
      return;
    if (event === 'pageEnter' && location !== null) {
      this.pageEnter.emit(location);
    }
    else if (event === 'pageLeave' && location !== null) {
      this.pageLeave.emit(location);
    }
    lastEvent = event;
    lastKey = location === null || location === void 0 ? void 0 : location.key;
  }
  componentWillLoad() {
    var _a;
    console.log('componentWillLoad', this);
    if (!this.props) {
      return;
      // throw Error('Please add props to <ip-stencil-route-listener />!');
    }
    props = this.props;
    if (this.props.component === null || this.props.component === undefined) {
      this.props.component = 'ip-app-home';
    }
    this.localPageSegments = this.currentPageLocation;
    lastKey = (_a = this.currentPageLocation) === null || _a === void 0 ? void 0 : _a.key;
  }
  componentDidLoad() {
    var _a;
    console.log('componentDidLoad', this);
    if (lastKey === ((_a = this.currentPageLocation) === null || _a === void 0 ? void 0 : _a.key)) {
      this._callEvent('pageEnter', this.currentPageLocation);
    }
  }
  disconnectedCallback() {
    var _a;
    console.log('disconnectedCallback', this);
    if (lastKey !== ((_a = this.currentPageLocation) === null || _a === void 0 ? void 0 : _a.key)) {
      this._callEvent('pageLeave', this.localPageSegments);
    }
  }
  componentWillUpdate() {
    var _a;
    console.log('componentWillUpdate', this);
    if (lastKey !== ((_a = this.currentPageLocation) === null || _a === void 0 ? void 0 : _a.key)) {
      this._callEvent('pageLeave', this.localPageSegments);
    }
  }
  componentDidUpdate() {
    var _a, _b;
    console.log('componentDidUpdate', this);
    if (lastKey !== ((_a = this.currentPageLocation) === null || _a === void 0 ? void 0 : _a.key)) {
      this._callEvent('pageEnter', this.currentPageLocation);
      this.localPageSegments = this.currentPageLocation;
      lastKey = (_b = this.currentPageLocation) === null || _b === void 0 ? void 0 : _b.key;
    }
  }
  render() {
    var _a;
    return ((_a = this.props) === null || _a === void 0 ? void 0 : _a.component) ? h(this.props.component, Object.assign({}, this.props)) : null;
  }
};

export { IpStencilRouteListener as ip_stencil_route_listener };
