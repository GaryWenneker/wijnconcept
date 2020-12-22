import { r as registerInstance } from './index-a8e04894.js';

const NotFound = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    // TODO (optional): navigate without the history prop, as it shouldn't be necessary
    // Where art thou, navigate?
    this.history.push('/');
  }
  render() {
    return null;
  }
};

export { NotFound as not_found };
