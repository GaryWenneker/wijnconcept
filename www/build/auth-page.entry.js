import { r as registerInstance, h } from './index-a8e04894.js';
import './utils-54e66ad4.js';
import { r as registerUser, l as logUser } from './auth-093463f1.js';

const AuthPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.disabled = false;
    this.changeUserState = async (res) => {
      if (res.success && res.user) {
        this.setUser(res.user);
      }
      else {
        this.errors = res.errors;
      }
    };
    this.handleSubmit = async (e) => {
      e.preventDefault();
      this.disabled = true;
      const isRegister = this.match.url.match(/\/register/i);
      const { name, email, password } = this;
      if (!email || !password || (!name && isRegister)) {
        return;
      }
      if (isRegister) {
        const res = await registerUser({ name, email, password });
        this.changeUserState(res);
      }
      else {
        const res = await logUser({ email, password });
        this.changeUserState(res);
      }
      this.disabled = false;
    };
    this.handleChange = e => {
      const name = e.target.getAttribute('data-auth-id');
      const value = e.target.value;
      if (name && value) {
        this[name] = value;
      }
    };
    this.setPageTitle = () => {
      const isRegister = this.match.url.match(/\/register/i);
      document.title = `${isRegister ? 'Sign Up' : 'Sign In'} - WijnConcept Title`;
    };
  }
  updateTitle() {
    this.setPageTitle();
  }
  componentDidLoad() {
    this.setPageTitle();
  }
  render() {
    const isRegister = this.match.url.match(/\/register/i);
    const title = `Sign ${isRegister ? 'up' : 'in'}`;
    return (h("main", { class: "auth-page" }, h("div", { class: "container page" }, h("div", { class: "row" }, h("div", { class: "col-md-6 offset-md-3 col-xs-12" }, h("h1", { class: "text-xs-center" }, title), h("p", { class: "text-xs-center" }, h("stencil-route-link", { url: isRegister ? '/login' : '/register' }, isRegister ? 'Have an account?' : 'Need an account?')), h("error-display", { errors: this.errors }), h("form", { onSubmit: this.handleSubmit }, isRegister && (h("fieldset", { class: "form-group", disabled: this.disabled }, h("input", { class: "form-control form-control-lg", type: "text", placeholder: "Your Name", value: this.name, onInput: this.handleChange, "data-auth-id": "name", required: true }))), h("fieldset", { class: "form-group", disabled: this.disabled }, h("input", { class: "form-control form-control-lg", type: "email", placeholder: "Email", value: this.email, onInput: this.handleChange, "data-auth-id": "email", required: true })), h("fieldset", { class: "form-group", disabled: this.disabled }, h("input", { class: "form-control form-control-lg", type: "password", placeholder: "Password", value: this.password, onInput: this.handleChange, "data-auth-id": "password", required: true })), h("button", { class: "btn btn-lg btn-primary pull-xs-right", type: "submit", disabled: this.disabled }, title)))))));
  }
  static get watchers() { return {
    "match": ["updateTitle"]
  }; }
};

export { AuthPage as auth_page };
