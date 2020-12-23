import { r as registerInstance, h } from './index-a8e04894.js';

const HomePage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.setTag = (tag) => {
      this.activeTag = tag;
    };
  }
  componentDidLoad() {
    document.title = 'WijnConcept Title';
  }
  render() {
    return (h("main", { class: "home-page" }, h("div", { class: "container page" }, h("div", { class: "row" }, h("gl-background-video", { src: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/V7hI1imKeijyy0rxl/videoblocks-napa-valley-vineyard-at-sunset-tracking-shot_smosefatg__80c8c1c56e847d27868b023963dc160a__P360.mp4", poster: "/assets/images/homepage.jpg", class: "o-video" })))));
  }
};

export { HomePage as home_page };
