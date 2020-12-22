import './index-a8e04894.js';
import { A as ActiveRouter } from './active-router-c0e7430c.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
