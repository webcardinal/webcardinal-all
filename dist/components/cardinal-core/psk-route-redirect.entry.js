import { r as registerInstance } from './index-180d3095.js';
import './active-router-bc8d79ba.js';
import { i as injectHistory } from './index-ddcab13e.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

const PskRouteRedirect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    if (this.url) {
      this.history.push(this.url, {});
    }
    else {
      console.error("Url was not provided");
    }
  }
};
injectHistory(PskRouteRedirect);

export { PskRouteRedirect as psk_route_redirect };
