import { r as registerInstance, h } from './index-81f7b2f5.js';
import './utils-54e66ad4.js';
import { f as favoriteArticle } from './articles-e303e5a5.js';

const ArticleList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.favoriteArticle = async (e) => {
      const button = e.currentTarget;
      if (!button) {
        return;
      }
      const slug = button.getAttribute('data-article-slug');
      const favorited = button.getAttribute('data-article-favorited') === '1';
      const index = parseInt(button.getAttribute('data-article-index'));
      const token = this.user && this.user.token;
      const { articles } = this;
      if (!slug || !token || typeof index !== 'number') {
        return;
      }
      // We figure out how the new article is going to look like
      const newArticle = Object.assign(Object.assign({}, articles[index]), { favorited: !favorited, favoritesCount: articles[index].favoritesCount + (favorited ? -1 : 1) });
      // Then make a copy of the articles array
      const newList = [...articles];
      newList[index] = newArticle;
      this.articles = newList;
      // And only then do we run the server request to keep things snappy
      const res = await favoriteArticle(slug, token, favorited);
      if (!res.success) {
        // If the request isn't sucessful, we return to the previous articles list
        this.articles = articles;
        console.error(res.errors);
      }
    };
  }
  componentWillLoad() {
    this.articles = this.listedArticles;
  }
  render() {
    if (this.errors || !Array.isArray(this.articles)) {
      return [h("p", null, "There was an error fetching recent articles, details below"), h("error-display", { errors: this.errors })];
    }
    if (this.articles.length === 0) {
      return h("p", null, "No results found");
    }
    return this.articles.map((a, i) => (h("div", { class: "article-preview" }, h("div", { class: "article-meta" }, h("stencil-route-link", { url: `/profile/${a.author.username}` }, h("img", { src: a.author.image, alt: "author image" })), h("div", { class: "info" }, h("stencil-route-link", { url: `/profile/${a.author.username}`, anchorClass: "author" }, a.author.username), h("span", { class: "date" }, new Date(a.updatedAt).toLocaleDateString('en', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    }))), h("button", { class: `btn btn-sm pull-xs-right ${a.favorited ? 'btn-primary' : 'btn-outline-primary'}`, "data-article-slug": a.slug, "data-article-favorited": a.favorited ? '1' : '0', "data-article-index": i, disabled: !this.user, onClick: this.favoriteArticle }, h("ion-icon", { name: "heart" }), " ", a.favoritesCount)), h("stencil-route-link", { url: `/article/${a.slug}`, anchorClass: "preview-link" }, h("h1", null, a.title), h("p", null, a.description), h("span", null, "Read more..."), a.tagList && (h("ul", { class: "tag-list" }, a.tagList.map(t => (h("li", { class: "tag-default tag-pill tag-outline" }, t)))))))));
  }
};

export { ArticleList as article_list };
