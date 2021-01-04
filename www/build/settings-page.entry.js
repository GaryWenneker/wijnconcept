import { r as registerInstance, h } from './index-81f7b2f5.js';
import './utils-54e66ad4.js';
import { u as updateUser } from './auth-7efe28eb.js';

const inputFields = [
  { id: 'image', placeholder: 'URL of profile picture', type: 'text' },
  { id: 'username', placeholder: 'Your Name', type: 'text', required: true },
  {
    id: 'bio',
    placeholder: 'Short bio about you',
    isTextArea: true,
    type: 'text',
  },
  { id: 'email', placeholder: 'Email', type: 'email', required: true },
  { id: 'password', placeholder: 'Password', type: 'password' },
];
const SettingsPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.username = '';
    this.email = '';
    this.bio = '';
    this.image = '';
    this.password = '';
    this.disabled = false;
    this.handleSubmit = async (e) => {
      e.preventDefault();
      this.disabled = true;
      const { username, email, image, bio, user: { token }, } = this;
      if (!username || !email) {
        return;
      }
      const user = {
        username,
        email,
        password: this.password || undefined,
        image,
        bio,
      };
      const res = await updateUser(user, token);
      if (res.success && res.user) {
        this.setUser(res.user);
      }
      else {
        this.errors = res.errors;
      }
      this.disabled = false;
    };
    this.handleChange = e => {
      const name = e.target.getAttribute('data-settings-id');
      const value = e.target.value;
      if (name && value) {
        this[name] = value;
      }
    };
  }
  componentDidLoad() {
    this.username = this.user.username;
    this.email = this.user.email;
    this.bio = this.user.bio;
    this.image = this.user.image;
    document.title = 'Settings - WijnConcept Title';
  }
  render() {
    return (h("main", { class: "settings-page" }, h("div", { class: "container page" }, h("div", { class: "row" }, h("div", { class: "col-md-6 offset-md-3 col-xs-12" }, h("h1", { class: "text-xs-center" }, "Your Settings"), h("error-display", { errors: this.errors }), h("form", { onSubmit: this.handleSubmit }, h("fieldset", { disabled: this.disabled }, inputFields.map(i => {
      const props = {
        'class': 'form-control form-control-lg',
        'placeholder': i.placeholder,
        'type': i.type || 'text',
        'value': this[i.id],
        'onInput': this.handleChange,
        'required': i.required || false,
        'data-settings-id': i.id,
      };
      return h("fieldset", { class: "form-group" }, i.isTextArea ? h("textarea", Object.assign({}, props, { rows: 8 })) : h("input", Object.assign({}, props)));
    }), h("button", { class: "btn btn-lg btn-primary pull-xs-right" }, "Update Settings"))))))));
  }
};

export { SettingsPage as settings_page };
