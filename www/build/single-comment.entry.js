import { r as registerInstance, h } from './index-81f7b2f5.js';
import './utils-54e66ad4.js';
import { d as deleteComment } from './comments-9a10e4f8.js';

const SingleComment = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.deleteComment = async () => {
      const { user, comment, slug } = this;
      if (!user || user.username !== comment.author.username || !window.confirm('Are you sure you want to delete your comment?')) {
        return;
      }
      const res = await deleteComment(slug, comment.id, user.token);
      if (res.success) {
        this.removeComment(comment.id);
      }
    };
  }
  render() {
    const { author, body, updatedAt } = this.comment;
    const authorURL = `/profile/${author.username}`;
    return (h("div", { class: "card" }, h("div", { class: "card-block" }, h("p", { class: "card-text" }, body)), h("div", { class: "card-footer" }, h("stencil-route-link", { url: authorURL, anchorClass: "comment-author" }, h("img", { class: "comment-author-img", src: author.image, alt: "comment author image" })), "\u00A0", h("stencil-route-link", { url: authorURL, anchorClass: "comment-author" }, author.username), h("span", { class: "date-posted" }, "Dec 29th"), h("span", { class: "date-posted" }, new Date(updatedAt).toLocaleDateString('en', {
      month: 'short',
      day: 'numeric',
    })), this.user && this.user.username === author.username && (h("span", { class: "mod-options" }, h("button", { "aria-label": "Button to delete your comment", onClick: this.deleteComment }, h("ion-icon", { name: "ion-trash-a" })))))));
  }
};

export { SingleComment as single_comment };
