import { r as registerInstance, h } from './index-a8e04894.js';
import './utils-54e66ad4.js';
import { u as updateArticle, c as createArticle, g as getSingleArticle } from './articles-e303e5a5.js';

const inputFields = [
  { id: 'title', placeholder: 'Article Title', required: true, large: true },
  {
    id: 'description',
    placeholder: "What's this article about",
    required: true,
  },
  {
    id: 'body',
    placeholder: 'Write your article (in markdown)',
    isTextArea: true,
    required: true,
  },
  {
    id: 'tags',
    placeholder: 'Enter tags (separated by comma)',
    required: true,
  },
];
const EditorPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.title = '';
    this.description = '';
    this.body = '';
    this.tags = '';
    this.disabled = false;
    this.isLoading = false;
    this.handleChange = e => {
      const name = e.target.getAttribute('data-settings-id');
      const value = e.target.value;
      if (name && value) {
        this[name] = value;
      }
    };
    this.handleSubmit = async (e) => {
      this.disabled = true;
      e.preventDefault();
      const { user, article, title, description, body, tags } = this;
      if (!user || !title || !description || !body) {
        this.disabled = false;
        return;
      }
      const tagList = tags.split(',').map(t => t.trim());
      const newArticle = { title, description, body, tagList };
      // If we're editing a specific article, we want to use its slug to
      // update it
      const res = article
        ? await updateArticle({
          slug: article.slug,
          token: user && user.token,
          article,
        })
        : await createArticle(newArticle, user.token);
      const { success, errors } = res;
      if (success) {
        // TODO (optional): avoid unnecessary requests by including the article info
        // in the history transition
        this.history.push(`/article/${res.article.slug}`);
      }
      else {
        this.errors = errors;
      }
      this.disabled = false;
    };
  }
  componentWillLoad() {
    // If the route includes a slug, we want to fetch the
    // corresponding article before anything else, hence the
    // loading state set to true
    const { slug } = this.match.params;
    if (slug) {
      this.isLoading = true;
    }
  }
  async componentDidLoad() {
    document.title = 'Editor - WijnConcept Title';
    const { slug } = this.match.params;
    if (slug && this.isLoading) {
      const res = await getSingleArticle(slug, this.user && this.user.token);
      const { success, article, errors } = res;
      if (success) {
        this.article = article;
        this.title = article.title;
        this.description = article.description;
        this.body = article.body;
        this.tags = article.tagList.join(' , ');
      }
      else {
        this.errors = errors;
      }
      this.isLoading = false;
    }
  }
  render() {
    if (this.isLoading) {
      return h("loading-spinner", null);
    }
    if (this.errors) {
      return [h("h1", null, "Something went wrong"), h("error-display", { errors: this.errors })];
    }
    // TODO: dynamic tag-list
    return (h("main", { class: "editor-page" }, h("div", { class: "container page" }, h("div", { class: "row" }, h("div", { class: "col-md-10 offset-md-1 col-xs-12" }, h("form", { onSubmit: this.handleSubmit }, h("fieldset", { disabled: this.disabled }, inputFields.map(i => {
      const props = {
        'class': `form-control ${i.large ? 'form-control-lg' : ''}`,
        'placeholder': i.placeholder,
        'type': 'text',
        'value': this[i.id],
        'onInput': this.handleChange,
        'required': i.required || false,
        'data-settings-id': i.id,
      };
      return h("fieldset", { class: "form-group" }, i.isTextArea ? h("textarea", Object.assign({}, props, { rows: 8 })) : h("input", Object.assign({}, props)));
    }), h("button", { class: "btn btn-lg pull-xs-right btn-primary", type: "submit" }, "Publish Article"))))))));
  }
};

export { EditorPage as editor_page };
