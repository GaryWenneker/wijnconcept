import './index-81f7b2f5.js';
import { A as ActiveRouter } from './active-router-f6ab37ed.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}

// export { Components, JSX } from './components';
