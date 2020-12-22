import { r as registerInstance, h } from './index-a8e04894.js';

const loadingSpinnerCss = "loading-spinner{display:block}.loader{animation:animate 1.5s linear infinite;clip:rect(0, 80px, 80px, 40px);height:80px;width:80px;position:absolute;left:calc(50% - 40px);top:100px}@keyframes animate{0%{transform:rotate(0deg)}100%{transform:rotate(220deg)}}.loader:after{animation:animate2 1.5s ease-in-out infinite;clip:rect(0, 80px, 80px, 40px);content:'';border-radius:50%;height:80px;width:80px;position:absolute}@keyframes animate2{0%{box-shadow:inset #5cb85c 0 0 0 17px;transform:rotate(-140deg)}50%{box-shadow:inset #5cb85c 0 0 0 2px}100%{box-shadow:inset #5cb85c 0 0 0 17px;transform:rotate(140deg)}}";

const LoadingSpinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("div", { class: "loader" });
  }
};
LoadingSpinner.style = loadingSpinnerCss;

export { LoadingSpinner as loading_spinner };
