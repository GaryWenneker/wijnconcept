import { r as registerInstance, h } from './index-a8e04894.js';
import { s as standardReq } from './utils-54e66ad4.js';

const getTags = async () => {
  const tagList = await standardReq({
    path: 'tags',
    method: 'GET',
  });
  const { tags, errors } = tagList;
  return {
    success: Array.isArray(tags) ? true : false,
    tags,
    errors,
  };
};

const HomeTags = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tags = [];
    this.listTags = async () => {
      const tagList = await getTags();
      const { success, tags } = tagList;
      if (success) {
        this.tags = tags;
      }
    };
    this.handleClick = e => {
      const name = e.target.getAttribute('data-tag-id');
      if (name) {
        this.setTag(name);
      }
    };
  }
  componentDidLoad() {
    this.listTags();
  }
  render() {
    if (this.tags.length === 0) {
      return h("div", { class: "sidebar" });
    }
    return (h("div", { class: "sidebar" }, h("p", null, "Popular Tags"), h("div", { class: "tag-list" }, this.tags.map(t => (h("button", { type: "button", class: "tag-pill tag-default", "data-tag-id": t, onClick: this.handleClick }, t))))));
  }
};

export { HomeTags as home_tags };
