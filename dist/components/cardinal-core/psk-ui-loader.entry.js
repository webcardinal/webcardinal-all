import { r as registerInstance, h, g as getElement } from './index-180d3095.js';
import { C as CustomTheme, T as TableOfContentProperty } from './index-d5f82560.js';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const PskUiLoader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.shouldBeRendered = false;
  }
  render() {
    if (!this.htmlElement.isConnected)
      return null;
    if (this.shouldBeRendered) {
      return (h("div", { class: "loader-container" }, h("div", { class: "sk-fading-circle" }, h("div", { class: "sk-circle1 sk-circle" }), h("div", { class: "sk-circle2 sk-circle" }), h("div", { class: "sk-circle3 sk-circle" }), h("div", { class: "sk-circle4 sk-circle" }), h("div", { class: "sk-circle5 sk-circle" }), h("div", { class: "sk-circle6 sk-circle" }), h("div", { class: "sk-circle7 sk-circle" }), h("div", { class: "sk-circle8 sk-circle" }), h("div", { class: "sk-circle9 sk-circle" }), h("div", { class: "sk-circle10 sk-circle" }), h("div", { class: "sk-circle11 sk-circle" }), h("div", { class: "sk-circle12 sk-circle" }))));
    }
  }
  get htmlElement() { return getElement(this); }
  static get watchers() { return {
    "shouldBeRendered": ["render"]
  }; }
};
__decorate([
  CustomTheme(),
  TableOfContentProperty({
    description: `This is the property that gives the state of the loader, if it is displayed or not. The possible values are true or false.`,
    isMandatory: false,
    propertyType: 'boolean',
    defaultValue: 'false'
  })
], PskUiLoader.prototype, "shouldBeRendered", void 0);

export { PskUiLoader as psk_ui_loader };
