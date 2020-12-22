import { r as registerInstance, h } from './index-a8e04894.js';
import './utils-54e66ad4.js';
import { a as getArticleList } from './articles-e303e5a5.js';

const perPage = 10;
const tabLabels = {
  global: 'Global Feed',
  feed: 'Your Feed',
  authored: 'My Articles',
  favorited: 'Favorited Articles',
};
const TabbedFeed = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.possibleTabs = ['global'];
    this.currentPage = 0;
    this.articles = [];
    this.articlesCount = 0;
    this.isLoading = true;
    this.listArticles = async () => {
      const { user } = this;
      this.isLoading = true;
      const offset = this.currentPage > 0 ? `offset=${this.currentPage * perPage}&` : '';
      const tag = this.activeTag && this.activeTab === 'tag' ? `tag=${this.activeTag}&` : '';
      const author = this.activeTab === 'authored' && this.profile ? `author=${this.profile.username}&` : '';
      const favorited = this.activeTab === 'favorited' && this.profile ? `favorited=${this.profile.username}&` : '';
      const params = `limit=${perPage}&${offset}${tag}${author}${favorited}`;
      const articleList = await getArticleList({
        token: user && user.token,
        isFeed: this.activeTab === 'feed',
        params,
      });
      const { articles, articlesCount, errors, success } = articleList;
      if (success) {
        this.articles = articles;
        this.articlesCount = articlesCount;
      }
      else {
        this.errors = errors;
      }
      this.isLoading = false;
    };
    this.toggleTab = e => {
      const name = e.target.getAttribute('data-tab-id');
      if (name) {
        this.activeTab = name;
      }
    };
    this.goToPage = e => {
      const num = e.target.getAttribute('data-page-num');
      if (num) {
        this.currentPage = parseInt(num);
        this.fetchArticles();
      }
    };
  }
  fetchArticles() {
    if (this.activeTab !== 'tag') {
      this.clearTag && this.clearTag();
    }
    this.listArticles();
  }
  goToTagTab(newValue) {
    if (newValue && this.activeTab !== 'tag') {
      this.activeTab = 'tag';
    }
    else if (newValue) {
      this.listArticles();
    }
  }
  componentWillLoad() {
    this.activeTab = this.possibleTabs[0];
  }
  componentDidLoad() {
    this.listArticles();
  }
  render() {
    const { activeTab, activeTag } = this;
    const wrapperClass = this.isProfile ? 'articles-toggle' : 'feed-toggle';
    const count = this.articlesCount || 0;
    const pagesArray = Array(Math.ceil(this.articlesCount / perPage)).fill(1);
    return [
      h("div", { class: wrapperClass }, h("ul", { class: "nav nav-pills outline-active" }, this.possibleTabs.map(t => (h("li", { class: "nav-item" }, h("button", { onClick: this.toggleTab, "data-tab-id": t, class: `nav-link ${activeTab === t ? 'active disabled' : ''}`, type: "button", "aria-label": `Button to toggle your ${t} feed`, disabled: activeTab === t }, tabLabels[t])))), activeTag && (h("li", { class: "nav-item" }, h("span", { class: `nav-link ${activeTab === 'tag' ? 'active disabled' : ''}` }, h("ion-icon", { name: "ion-pound" }), " ", activeTag))))),
      this.isLoading ? (h("loading-spinner", null)) : ([
        h("article-list", { listedArticles: this.articles, errors: this.errors, user: this.user }),
        count > perPage && (h("ul", { class: "pagination" }, pagesArray.map((p, i) => (h("li", {
          // The `p` below is, unfortunately, only to escape typescript's
          // compiler, else it'll say `p` is declared but never used
          class: `page-item ${i === this.currentPage && p ? 'active' : ''}`
        }, h("button", { class: "page-link", onClick: this.goToPage, "data-page-num": i }, i + 1)))))),
      ]),
    ];
  }
  static get watchers() { return {
    "activeTab": ["fetchArticles"],
    "activeTag": ["goToTagTab"]
  }; }
};

export { TabbedFeed as tabbed_feed };
