import { r as registerInstance, f as createEvent, h } from './index-180d3095.js';
import { M as MOBILE_MAX_WIDTH, C as CustomTheme } from './index-d5f82560.js';

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
const AppRootDefaultRender = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.getAppVersion = createEvent(this, "getAppVersion", 7);
    this.mobileLayout = false;
    this.disableSidebar = false;
  }
  componentWillLoad() {
    return new Promise((resolve) => {
      this.getAppVersion.emit((err, appVersion) => {
        if (!err) {
          this.appVersion = appVersion;
        }
        // @ts-ignore
        resolve();
      });
    });
  }
  render() {
    let appMenuCmpt = h("psk-app-menu", { "item-renderer": "sidebar-renderer", hamburgerMaxWidth: MOBILE_MAX_WIDTH });
    let versionCmpt = h("div", { class: "nav-footer" }, "version ", this.appVersion);
    let asideComponents = [];
    if (this.mobileLayout) {
      asideComponents = [h("psk-user-profile", { "profile-renderer": "mobile-profile-renderer" }), appMenuCmpt];
    }
    else {
      asideComponents = [h("psk-user-profile", null), appMenuCmpt, versionCmpt];
    }
    return (h("div", { class: `global_container ${this.mobileLayout ? "is-mobile" : ""}` }, this.disableSidebar === false ? h("aside", null, asideComponents) : null, h("section", null, h("psk-app-router", null), this.mobileLayout === true ? versionCmpt : null)));
  }
};
__decorate([
  CustomTheme()
], AppRootDefaultRender.prototype, "mobileLayout", void 0);

export { AppRootDefaultRender as psk_default_renderer };
