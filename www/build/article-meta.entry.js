import { r as registerInstance, h } from './index-a8e04894.js';
import './utils-54e66ad4.js';
import { d as deleteArticle } from './articles-e303e5a5.js';

const ArticleMeta = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.followAuthor = () => this.followFavorite(true);
    this.favoriteArticle = () => this.followFavorite(false);
    this.deleteArticle = async () => {
      if (window.confirm('Are you sure you want to delete this article?')) {
        await deleteArticle(this.article.slug, this.user && this.user.token);
        this.history.push(`/profile/${this.user.username}`);
      }
    };
  }
  render() {
    const { author: { username, image, following }, updatedAt, slug, favorited, favoritesCount, } = this.article;
    const isOwner = this.user && username === this.user.username;
    return (h("div", { class: "article-meta" }, h("stencil-route-link", { url: `/profile/${username}` }, h("img", { src: image, alt: "author image" })), h("div", { class: "info" }, h("stencil-route-link", { url: `/profile/${username}`, anchorClass: "author" }, username), h("span", { class: "date" }, new Date(updatedAt).toLocaleDateString('en', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    }))), isOwner
      ? [
        h("stencil-route-link", { anchorClass: "btn btn-outline-secondary btn-sm", url: `/editor/${slug}` }, h("ion-icon", { name: "ion-edit" }), " Edit Article"),
        h("button", { class: "btn btn-outline-danger btn-sm", "aria-label": `Click to delete this article`, onClick: this.deleteArticle }, h("ion-icon", { name: "ion-trash-a" }), " Delete Article"),
      ]
      : this.user && [
        h("button", { class: `btn btn-sm ${following ? 'btn-outline-secondary' : 'btn-secondary'}`, "aria-label": `Click to follow ${username}`, onClick: this.followAuthor }, !following && h("ion-icon", { name: "ion-plus-round" }), "\u00A0 ", !following ? 'Follow' : 'Unfollow', " ", username),
        h("button", { class: `btn btn-sm ${favorited ? 'btn-primary' : 'btn-outline-primary'}`, "aria-label": `Click to favorite this article`, onClick: this.favoriteArticle }, h("ion-icon", { name: "heart" }), "\u00A0 ", favorited ? 'Unfavorite' : 'Favorite', " Article ", h("span", { class: "counter" }, "(", favoritesCount, ")")),
      ]));
  }
};

export { ArticleMeta as article_meta };
