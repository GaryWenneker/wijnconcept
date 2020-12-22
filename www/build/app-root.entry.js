import { r as registerInstance, h, e as Host } from './index-a8e04894.js';
import './utils-54e66ad4.js';
import { g as getUser } from './auth-093463f1.js';

const AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.setUser = (user) => {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    };
    this.signOut = () => {
      localStorage.removeItem('user');
      this.user = undefined;
    };
    this.getUser = async () => {
      if (!this.user || !this.user.token) {
        return;
      }
      const res = await getUser(this.user.token);
      if (res.success) {
        this.user = res.user;
        localStorage.setItem('user', JSON.stringify(res.user));
      }
      else {
        this.errors = res.errors;
        // When we fail to get a user, this could mean their token has expired, // so, as a guarantee, we sign them out
        this.signOut();
      }
    };
  }
  componentWillLoad() {
    const user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    }
  }
  // To make sure we have the user's latest info, we fetch their profile
  // when the app loads
  async componentDidLoad() {
    if (this.user && this.user.token) {
      this.getUser();
    }
  }
  render() {
    const { user } = this;
    const isLogged = user && user.id ? true : false;
    return (h(Host, null, h("app-header", { class: "sticky", user: user, signOut: this.signOut }), h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: "/", component: "home-page", exact: true, componentProps: { user } }), h("stencil-route", { url: "/profile/:username", component: "profile-page", exact: true, componentProps: { user } }), h("stencil-route", { url: "/article/:slug", component: "article-page", exact: true, componentProps: { user } }), h("stencil-route", { url: "/settings", component: isLogged ? 'settings-page' : 'not-found', exact: true, componentProps: {
        setUser: this.setUser,
        user,
      } }), h("stencil-route", { url: ['/editor', '/editor/:slug'], component: isLogged ? 'editor-page' : 'not-found', exact: true, componentProps: { user } }), h("stencil-route", { url: ['/login', '/register'], component: isLogged ? 'not-found' : 'auth-page', componentProps: { setUser: this.setUser }, exact: true }), h("stencil-route", { component: "not-found" }))), h("app-footer", null)));
  }
};

export { AppRoot as app_root };
