import { r as registerInstance, h, g as getElement } from './index-180d3095.js';
import { S as SubMenuItemsEvent } from './index-d5f82560.js';
import './active-router-bc8d79ba.js';
import { i as injectHistory } from './index-ddcab13e.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

const ExpandableRenderer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isOpened = false;
    this.dropDownHasChildActive = false;
    this.somethingChanged = false;
    this.isClosed = true;
    this.lazyItems = [];
    this.eventWasResolved = false;
  }
  loadSubMenuItems() {
    let eventCallbackHandler = (err, items) => {
      if (err) {
        throw new Error(err);
      }
      let arr = [];
      items.forEach(item => {
        arr.push(h("stencil-route-link", { url: item.path, activeClass: "active", exact: false }, h("div", { class: "wrapper_container" }, h("div", { class: "item_container" }, h("span", { class: `icon fa ${item.icon}` }), h("span", { class: "item_name" }, item.name)))));
      });
      this.lazyItems = arr;
      this.eventWasResolved = true;
    };
    if (this.item.children.event) {
      let event = new SubMenuItemsEvent(this.item.children.event, {
        pathPrefix: this.item.path,
        callback: eventCallbackHandler
      }, {
        cancelable: true,
        composed: true,
        bubbles: true,
      });
      this._host.dispatchEvent(event);
    }
  }
  componentDidLoad() {
    this._host.addEventListener("click", () => {
      this.isClosed = false;
      this.loadSubMenuItems();
    });
  }
  render() {
    return (h("div", { class: "children" }, this.isClosed ? null : this.lazyItems.length ? this.lazyItems : this.eventWasResolved ?
      h("div", { class: "menu-loader" }, h("i", { class: "small" }, "No item found.")) : h("div", { class: "menu-loader" }, "Loading...")));
  }
  get _host() { return getElement(this); }
};
injectHistory(ExpandableRenderer);

export { ExpandableRenderer as event_expandable_renderer };
