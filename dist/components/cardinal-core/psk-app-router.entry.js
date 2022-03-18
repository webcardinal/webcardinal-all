import { r as registerInstance, f as createEvent, h } from './index-180d3095.js';
import { C as CustomTheme, T as TableOfContentProperty, b as TableOfContentEvent } from './index-d5f82560.js';

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
function areBaseUrlAndSeedPresent() {
  return (window["$$"] &&
    $$.SSAPP_CONTEXT &&
    $$.SSAPP_CONTEXT.BASE_URL &&
    $$.SSAPP_CONTEXT.SEED);
}
const PskAppRouter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.needRoutesEvt = createEvent(this, "needRoutes", 7);
    this.getHistoryType = createEvent(this, "getHistoryType", 7);
    this.getCustomLandingPage = createEvent(this, "getCustomLandingPage", 7);
    this.routesItems = [];
    this.notFoundRoute = null;
    this.landingPage = "";
  }
  componentWillLoad() {
    let promise = Promise.resolve();
    promise.then(() => {
      return new Promise((resolve) => {
        this.needRoutesEvt.emit((err, data) => {
          if (err) {
            console.log(err);
          }
          this.routesItems = data;
          resolve();
        });
      });
    });
    promise.then(() => {
      return new Promise((resolve) => {
        this.getHistoryType.emit((err, data) => {
          if (err) {
            console.log(err);
          }
          this.historyType = data;
          resolve();
        });
      });
    });
    promise.then(() => {
      return new Promise((resolve) => {
        this.getCustomLandingPage.emit((err, redirectPath) => {
          if (err) {
            console.log(err);
          }
          if (redirectPath) {
            if (areBaseUrlAndSeedPresent()) {
              // if we have a BASE_URL then we prefix the redirectPath url with BASE_URL
              const baseUrlPathname = new URL($$.SSAPP_CONTEXT.BASE_URL)
                .pathname;
              redirectPath = `${baseUrlPathname}${redirectPath.indexOf("/") === 0
                ? redirectPath.substring(1)
                : redirectPath}`;
            }
            this.landingPage = redirectPath;
          }
          resolve();
        });
      });
    });
    return promise;
  }
  renderItems(items) {
    let routes = [];
    if (typeof items === "object") {
      routes = items.map((item) => {
        if (item.name == "404") {
          this.notFoundRoute = item.path;
        }
        if (item.children) {
          if (item.children.type === "event") {
            return (h("stencil-route", { url: `${item.path}/:${item.propName}`, exact: true, component: item.component }));
          }
          return this.renderItems(item.children.items);
        }
        else {
          return (h("stencil-route", { url: item.path, component: item.component, componentProps: item.componentProps }));
        }
      });
    }
    return routes;
  }
  render() {
    let routes = this.renderItems(this.routesItems);
    if (routes.length === 0) {
      return h("psk-ui-loader", { shouldBeRendered: true });
    }
    let basePathname = new URL(window["basePath"]).pathname;
    if (areBaseUrlAndSeedPresent()) {
      // if we have a BASE_URL then remove this from basePathname
      basePathname = basePathname.replace(new URL($$.SSAPP_CONTEXT.BASE_URL).pathname, "");
    }
    let landingPagePaths = [basePathname];
    if (basePathname.length > 1 && basePathname.endsWith("/")) {
      basePathname = basePathname.substring(0, basePathname.length - 1);
      landingPagePaths.push(basePathname);
    }
    let landingPagesRoutes = landingPagePaths.map((path) => {
      const registeredMatchRoute = this.routesItems.find((route) => route.path === this.landingPage);
      const url = registeredMatchRoute
        ? registeredMatchRoute.path
        : this.routesItems[0].path;
      return (h("stencil-route", { url: path, exact: true, component: "psk-route-redirect", componentProps: { url } }));
    });
    if (!this.notFoundRoute) {
      this.notFoundRoute = basePathname;
    }
    return (h("div", { class: "app_container" }, h("stencil-router", { historyType: this.historyType === "query" ? "browser" : this.historyType }, h("stencil-route-switch", { scrollTopOffset: 0 }, this.historyType === "query"
      ? [
        h("stencil-route", { component: "query-pages-router", componentProps: { pages: this.routesItems } }),
        this.landingPage ? (h("stencil-router-redirect", { url: this.landingPage })) : null,
      ]
      : [
        ...landingPagesRoutes,
        ...routes,
        this.landingPage ? (h("stencil-router-redirect", { url: this.landingPage })) : (h("stencil-route", { component: "psk-page-not-found", componentProps: { urlDestination: this.notFoundRoute } })),
      ]), this.landingPage ? (h("stencil-router-redirect", { url: this.landingPage })) : null)));
  }
};
__decorate([
  CustomTheme(),
  TableOfContentProperty({
    description: `This parameter holds the datasource for the creation of the application routes. If this property is not provided, the component will emit an event (needMenuItems) in order to fetch this information.`,
    specialNote: `The same configuration file is used in generating the App Menu component`,
    isMandatory: false,
    propertyType: `Array of MenuItem types(MenuItem[])`,
  })
], PskAppRouter.prototype, "routesItems", void 0);
__decorate([
  TableOfContentProperty({
    description: `This is the history type that will be passed along to the stencil-router`,
    isMandatory: false,
    propertyType: `string`,
    defaultValue: `browser`,
  })
], PskAppRouter.prototype, "historyType", void 0);
__decorate([
  TableOfContentEvent({
    eventName: `needRoutes`,
    controllerInteraction: {
      required: true,
    },
    description: `This event gets the data as parameter and it is emitted immediately after the component is loaded in order to create the application routes `,
  })
], PskAppRouter.prototype, "needRoutesEvt", void 0);
__decorate([
  TableOfContentEvent({
    eventName: `getHistoryType`,
    controllerInteraction: {
      required: true,
    },
    description: `This event gets the history type `,
  })
], PskAppRouter.prototype, "getHistoryType", void 0);
__decorate([
  TableOfContentEvent({
    eventName: `hasCustomLandingPage`,
    controllerInteraction: {
      required: true,
    },
    description: `Check if a custom landing page is requested`,
  })
], PskAppRouter.prototype, "getCustomLandingPage", void 0);

export { PskAppRouter as psk_app_router };
