import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-180d3095.js';
import './index-d5f82560.js';
import { g as globalScripts } from './app-globals-2b0d3564.js';

/*
 Stencil Client Patch Browser v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find(s => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-424264d0.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["psk-default-renderer",[[1,"psk-default-renderer",{"mobileLayout":[4,"mobile-layout"],"disableSidebar":[4,"disable-sidebar"],"appVersion":[32]}]]],["psk-mobile",[[33,"psk-mobile",{"title":[1],"disableHeader":[4,"disable-header"],"disableSidebar":[4,"disable-sidebar"],"enableBack":[4,"enable-back"],"controllerName":[1,"controller-name"],"history":[16],"controller":[32],"coreType":[32],"aside":[32],"options":[32],"header":[32],"toggleSidebar":[64],"toggleOptions":[64]},[[0,"click","onClickEvent"]]]]],["psk-button-link",[[1,"psk-button-link",{"page":[1],"name":[1],"icon":[1],"eventName":[1,"event-name"],"eventData":[8,"event-data"],"eventDispatcher":[1,"event-dispatcher"]}]]],["sidebar-renderer",[[1,"sidebar-renderer",{"value":[16],"historyType":[1,"history-type"],"active":[516]}]]],["psk-page-not-found",[[1,"psk-page-not-found",{"basePath":[1,"base-path"],"urlDestination":[1,"url-destination"],"pageRenderer":[1,"page-renderer"]}]]],["query-pages-router",[[1,"query-pages-router",{"history":[16],"pages":[16],"location":[16],"redirectTo":[1,"redirect-to"],"routes":[32],"currentRoute":[32]}]]],["context-consumer",[[0,"context-consumer",{"context":[16],"renderer":[16],"subscribe":[16],"unsubscribe":[32]}]]],["dropdown-renderer",[[4,"dropdown-renderer",{"active":[516],"url":[8],"somethingChanged":[4,"something-changed"],"isOpened":[32],"dropDownHasChildActive":[32]},[[10,"click","handleClick"],[10,"menuClicked","handleMenuClick"],[8,"routeChanged","routeChanged"]]]]],["expandable-renderer",[[4,"expandable-renderer",{"active":[516],"url":[8],"somethingChanged":[4,"something-changed"],"firstMenuChild":[8,"first-menu-child"],"history":[16],"isOpened":[32],"dropDownHasChildActive":[32]},[[8,"sectionChange","routeChanged"]]]]],["mobile-profile-renderer",[[1,"mobile-profile-renderer",{"userInfo":[8,"user-info"]}]]],["psk-app-root",[[1,"psk-app-root",{"controller":[8],"disableSidebar":[4,"disable-sidebar"],"mobileLayout":[32],"historyType":[32],"componentCode":[32],"hasSlot":[32],"htmlLoader":[32],"disconnected":[32]},[[11,"resize","checkLayout"]]]]],["psk-menu-item-renderer",[[1,"psk-menu-item-renderer",{"value":[16],"active":[516],"historyType":[1,"history-type"]}]]],["psk-page-loader",[[1,"psk-page-loader",{"pageUrl":[1,"page-url"],"type":[1],"pageContent":[32],"errorLoadingPage":[32]}]]],["psk-page-not-found-renderer",[[1,"psk-page-not-found-renderer"]]],["psk-route-redirect",[[0,"psk-route-redirect",{"url":[8],"history":[16]}]]],["psk-ssapp",[[0,"psk-ssapp",{"appName":[1,"app-name"],"seed":[1,"key-ssi"],"landingPath":[1,"landing-path"],"params":[1],"history":[16],"match":[16],"digestKeySsiHex":[32],"parsedParams":[32]}]]],["psk-user-profile-renderer",[[1,"psk-user-profile-renderer",{"userInfo":[8,"user-info"]}]]],["query-page-link",[[4,"query-page-link",{"url":[1],"urlMatch":[1,"url-match"],"activeClass":[1,"active-class"],"exact":[4],"strict":[4],"custom":[1],"anchorClass":[1,"anchor-class"],"anchorRole":[1,"anchor-role"],"anchorTitle":[1,"anchor-title"],"anchorTabIndex":[1,"anchor-tab-index"],"anchorId":[1,"anchor-id"],"history":[16],"location":[16],"ariaHaspopup":[1,"aria-haspopup"],"ariaPosinset":[1,"aria-posinset"],"ariaSetsize":[2,"aria-setsize"],"ariaLabel":[1,"aria-label"],"match":[32]}]]],["stencil-async-content",[[0,"stencil-async-content",{"documentLocation":[1,"document-location"],"content":[32]}]]],["stencil-route-title",[[0,"stencil-route-title",{"titleSuffix":[1,"title-suffix"],"pageTitle":[1,"page-title"]}]]],["stencil-router-prompt",[[0,"stencil-router-prompt",{"when":[4],"message":[1],"history":[16],"unblock":[32]}]]],["stencil-route-switch",[[4,"stencil-route-switch",{"group":[513],"scrollTopOffset":[2,"scroll-top-offset"],"location":[16],"routeViewsUpdated":[16]}]]],["stencil-router",[[4,"stencil-router",{"root":[1],"historyType":[1,"history-type"],"titleSuffix":[1,"title-suffix"],"scrollTopOffset":[2,"scroll-top-offset"],"location":[32],"history":[32]}]]],["stencil-route",[[0,"stencil-route",{"group":[513],"componentUpdated":[16],"match":[1040],"url":[1],"component":[1],"componentProps":[16],"exact":[4],"routeRender":[16],"scrollTopOffset":[2,"scroll-top-offset"],"routeViewsUpdated":[16],"location":[16],"history":[16],"historyType":[1,"history-type"]}]]],["psk-app-router",[[1,"psk-app-router",{"routesItems":[16],"historyType":[1,"history-type"],"notFoundRoute":[32],"landingPage":[32]}]]],["event-expandable-renderer",[[0,"event-expandable-renderer",{"active":[516],"url":[8],"somethingChanged":[4,"something-changed"],"firstMenuChild":[8,"first-menu-child"],"history":[16],"item":[8],"isOpened":[32],"dropDownHasChildActive":[32],"isClosed":[32],"lazyItems":[32],"eventWasResolved":[32]}]]],["psk-link",[[1,"psk-link",{"page":[1],"tag":[1],"chapter":[1],"error":[32],"destinationUrl":[32]}]]],["psk-button",[[4,"psk-button",{"label":[1],"buttonClass":[1,"button-class"],"eventName":[1,"event-name"],"doubleClickEventName":[1,"double-click-event-name"],"touchEventName":[1,"touch-event-name"],"eventData":[8,"event-data"],"disabled":[8],"type":[1],"eventDispatcher":[1,"event-dispatcher"]}]]],["psk-app-menu",[[1,"psk-app-menu",{"itemRenderer":[1,"item-renderer"],"menuItems":[16],"hamburgerMaxWidth":[2,"hamburger-max-width"],"historyType":[1,"history-type"],"showHamburgerMenu":[32],"showNavBar":[32]},[[11,"resize","checkIfHamburgerIsNeeded"]]]]],["psk-ui-loader",[[1,"psk-ui-loader",{"shouldBeRendered":[4,"should-be-rendered"]}]]],["psk-user-profile",[[0,"psk-user-profile",{"userInfo":[8,"user-info"],"profileRenderer":[8,"profile-renderer"]}]]],["stencil-router-redirect",[[0,"stencil-router-redirect",{"history":[16],"root":[1],"url":[1]}]]],["stencil-route-link",[[4,"stencil-route-link",{"url":[1],"urlMatch":[1,"url-match"],"activeClass":[1,"active-class"],"exact":[4],"strict":[4],"custom":[1],"anchorClass":[1,"anchor-class"],"anchorRole":[1,"anchor-role"],"anchorTitle":[1,"anchor-title"],"anchorTabIndex":[1,"anchor-tab-index"],"anchorId":[1,"anchor-id"],"history":[16],"location":[16],"root":[1],"ariaHaspopup":[1,"aria-haspopup"],"ariaPosinset":[1,"aria-posinset"],"ariaSetsize":[2,"aria-setsize"],"ariaLabel":[1,"aria-label"],"match":[32]}]]]], options);
});
