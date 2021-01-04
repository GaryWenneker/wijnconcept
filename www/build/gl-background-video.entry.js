import { r as registerInstance, h, g as getElement } from './index-81f7b2f5.js';

const glBackgroundVideoCss = "video{position:fixed;top:50%;left:50%;min-width:100%;min-height:100%;width:auto;height:auto;transform:translateX(-50%) translateY(-50%)}:host-context(.plt-android) video[poster]{object-fit:none}";

const GLBackgroundVideoComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.muted = true;
  }
  componentDidLoad() {
    // sometimes, as the component is loaded dynamically, the video starts with sound, even if muted property is set to true
    if (this.muted) {
      this.videoElement.muted = true;
    }
  }
  render() {
    return h("video", { autoplay: true, loop: true, playsinline: true, preload: "auto", muted: this.muted, src: this.src, poster: this.poster });
  }
  get videoElement() { return getElement(this); }
};
GLBackgroundVideoComponent.style = glBackgroundVideoCss;

export { GLBackgroundVideoComponent as gl_background_video };
