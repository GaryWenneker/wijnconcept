import { r as registerInstance, h } from './index-a8e04894.js';
import './utils-54e66ad4.js';
import { g as getProfile, f as followProfile } from './profiles-33427a3c.js';

const ProfilePage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.following = false;
    this.isLoading = true;
    this.notFound = false;
    this.fetchProfile = async () => {
      this.isLoading = true;
      const { username } = this.match.params;
      document.title = `${username}'s profile - WijnConcept Title`;
      if (!username) {
        this.notFound = true;
        this.isLoading = false;
      }
      const token = this.user ? this.user.token : undefined;
      const articleInfo = await getProfile(username, token);
      const { success, errors, profile } = articleInfo;
      if (success) {
        this.profile = profile;
      }
      else {
        this.errors = errors;
      }
      this.isLoading = false;
    };
    this.followProfile = async () => {
      const { profile, user } = this;
      if (!profile || !user) {
        return;
      }
      // `profile` is the current profile image
      // We want to invert its `following` property right away while we fetch
      // the followProfile request. Only if this return errors will we revert it
      this.profile = Object.assign(Object.assign({}, profile), { following: !profile.following });
      const res = await followProfile(profile.username, user.token, profile.following);
      const { success, errors } = res;
      if (!success) {
        console.error(errors);
        this.profile = profile;
      }
    };
  }
  getNewUser() {
    this.fetchProfile();
  }
  componentDidLoad() {
    this.fetchProfile();
  }
  render() {
    if (this.isLoading) {
      return h("loading-spinner", null);
    }
    if (this.errors) {
      return [h("h1", null, "Something went wrong"), h("error-display", { errors: this.errors })];
    }
    if (this.notFound || !this.profile) {
      return h("not-found", null);
    }
    const { username, image, bio, following } = this.profile;
    return (h("main", { class: "profile-page" }, h("div", { class: "user-info" }, h("div", { class: "container" }, h("div", { class: "row" }, h("div", { class: "col-xs-12 col-md-10 offset-md-1" }, h("img", { src: image, class: "user-img", alt: "user image" }), h("h4", null, username), bio && h("p", null, bio), this.user && this.user.username !== username && (h("button", { class: `btn btn-sm action-btn ${following ? 'btn-secondary' : 'btn-outline-secondary'}`, onClick: this.followProfile }, !following && h("ion-icon", { name: "ion-plus-round" }), "\u00A0 ", following ? 'Unfollow' : 'Follow', " ", username)))))), h("div", { class: "container" }, h("div", { class: "row" }, h("div", { class: "col-xs-12 col-md-10 offset-md-1" }, h("tabbed-feed", { class: "col-md-9", user: this.user, profile: this.profile, possibleTabs: ['authored', 'favorited'], isProfile: true }))))));
  }
  static get watchers() { return {
    "match": ["getNewUser"]
  }; }
};

export { ProfilePage as profile_page };
