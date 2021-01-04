import { r as registerInstance, h } from './index-81f7b2f5.js';
import './utils-54e66ad4.js';
import { c as createComment } from './comments-9a10e4f8.js';

const CommentForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.body = '';
    this.disabled = false;
    this.handleSubmit = async (e) => {
      e.preventDefault();
      if (!this.user) {
        return;
      }
      this.disabled = true;
      const commentInfo = await createComment(this.slug, this.body, this.user.token);
      const { comment, errors, success } = commentInfo;
      if (success) {
        this.body = '';
        this.addComment(comment);
      }
      else {
        this.errors = errors;
      }
      this.disabled = false;
    };
    this.handleChange = e => {
      this.body = e.target.value;
    };
  }
  render() {
    if (this.errors) {
      return h("error-display", { errors: this.errors });
    }
    if (!this.user) {
      return (h("p", null, "Please ", h("stencil-route-link", { url: "/login" }, "sign in"), " or ", h("stencil-route-link", { url: "/register" }, "register"), " to comment."));
    }
    return (h("form", { class: "card comment-form", onSubmit: this.handleSubmit }, h("fieldset", { disabled: this.disabled }, h("div", { class: "card-block" }, h("textarea", { class: "form-control", placeholder: "Write a comment...", rows: 3, value: this.body, onInput: this.handleChange, required: true })), h("div", { class: "card-footer" }, h("img", { src: this.user.image, class: "comment-author-img", alt: "comment author image" }), h("button", { class: "btn btn-sm btn-primary", type: "submit" }, "Post Comment")))));
  }
};

export { CommentForm as comment_form };
