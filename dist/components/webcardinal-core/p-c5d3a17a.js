import{V as e,d as n,P as t,U as o,i,R as r,W as s,Y as a,j as u}from"./p-f5c9fd96.js";import"./p-e506992e.js";bindableModelRequire=function e(n,t,o){function i(s,a){if(!t[s]){if(!n[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(r)return r(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var c=t[s]={exports:{}};n[s][0].call(c.exports,(function(e){return i(n[s][1][e]||e)}),c,c.exports,e,n,t,o)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({"D:\\privatesky\\builds\\tmp\\bindableModel.js":[function(e){(function(n){(function(){"undefined"!=typeof window&&void 0===window.process&&(window.process={}),"undefined"==typeof File&&(n.File=function(){}),e("./bindableModel_intermediar")}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./bindableModel_intermediar":"D:\\privatesky\\builds\\tmp\\bindableModel_intermediar.js"}],"D:\\privatesky\\builds\\tmp\\bindableModel_intermediar.js":[function(e){(function(n){(function(){n.bindableModelLoadModules=function(){void 0===$$.__runtimeModules["overwrite-require"]&&($$.__runtimeModules["overwrite-require"]=e("overwrite-require")),void 0===$$.__runtimeModules.queue&&($$.__runtimeModules.queue=e("queue")),void 0===$$.__runtimeModules.soundpubsub&&($$.__runtimeModules.soundpubsub=e("soundpubsub")),void 0===$$.__runtimeModules["psk-bindable-model"]&&($$.__runtimeModules["psk-bindable-model"]=e("psk-bindable-model"))},n.bindableModelRequire=e,"undefined"!=typeof $$&&$$.requireBundle("bindableModel")}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"overwrite-require":"overwrite-require","psk-bindable-model":"psk-bindable-model",queue:"queue",soundpubsub:"soundpubsub"}],"D:\\privatesky\\modules\\overwrite-require\\moduleConstants.js":[function(e,n){n.exports={BROWSER_ENVIRONMENT_TYPE:"browser",MOBILE_BROWSER_ENVIRONMENT_TYPE:"mobile-browser",WEB_WORKER_ENVIRONMENT_TYPE:"web-worker",SERVICE_WORKER_ENVIRONMENT_TYPE:"service-worker",ISOLATE_ENVIRONMENT_TYPE:"isolate",THREAD_ENVIRONMENT_TYPE:"thread",NODEJS_ENVIRONMENT_TYPE:"nodejs"}},{}],"D:\\privatesky\\modules\\overwrite-require\\standardGlobalSymbols.js":[function(e){(function(n){(function(){let t=console;if(void 0===$$.Buffer&&($$.Buffer=e("buffer").Buffer),void 0===n.$$.uidGenerator&&($$.uidGenerator={},$$.uidGenerator.safe_uuid=e("swarmutils").safe_uuid),n.process&&"true"===process.env.NO_LOGS)console.log("Environment flag NO_LOGS is set, logging to console");else try{e("zeromq");const n=e("psklogger");t=n.PSKLogger.getLogger(),console.log("Logger init successful",process.pid)}catch(e){-1!==e.message.indexOf("psklogger")||-1!==e.message.indexOf("zeromq")?(console.log("Logger not available, using console"),t=console):console.log(e)}$$.registerGlobalSymbol=function(e,n){void 0===$$[e]?Object.defineProperty($$,e,{value:n,writable:!1}):t.error("Refusing to overwrite $$."+e)},console.warn=(...e)=>{console.log(...e)},$$.registerGlobalSymbol("autoThrow",(function(e){if(!e)throw e})),$$.registerGlobalSymbol("propagateError",(function(e,n){if(e)throw n(e),e})),$$.registerGlobalSymbol("logError",(function(e){e&&(console.log(e),$$.err(e))})),$$.registerGlobalSymbol("fixMe",(function(...e){console.log("Fix this:",...e)})),$$.registerGlobalSymbol("exception",(function(e){throw new Error(e)})),$$.registerGlobalSymbol("throw",(function(e){throw new Error(e)})),$$.incomplete=function(...e){e.unshift("Incomplete feature touched:"),t.warn(...e)},$$.notImplemented=$$.incomplete,$$.registerGlobalSymbol("assert",(function(e,n){if(!e)throw new Error("Assert false "+n)})),$$.registerGlobalSymbol("flags",(function(){$$.incomplete("flags handling not implemented")})),$$.registerGlobalSymbol("obsolete",(function(...e){e.unshift("Obsolete feature:"),t.log(...e),console.log(...e)})),$$.registerGlobalSymbol("log",(function(...e){e.unshift("Log:"),t.log(...e)})),$$.registerGlobalSymbol("info",(function(...e){e.unshift("Info:"),t.log(...e),console.log(...e)})),$$.registerGlobalSymbol("err",(function(...e){e.unshift("Error:"),t.error(...e),console.error(...e)})),$$.registerGlobalSymbol("error",(function(...e){e.unshift("Error:"),t.error(...e),console.error(...e)})),$$.registerGlobalSymbol("warn",(function(...e){e.unshift("Warn:"),t.warn(...e),console.log(...e)})),$$.registerGlobalSymbol("syntaxError",(function(...e){e.unshift("Syntax error:"),t.error(...e);try{throw new Error("Syntax error or misspelled symbol!")}catch(n){console.error(...e),console.error(n.stack)}})),$$.invalidMemberName=function(e,n){let o="unknown";n&&n.meta&&(o=n.meta.swarmTypeName);const i="Invalid member name "+e+"in swarm "+o;console.error(i),t.err(i)},$$.registerGlobalSymbol("invalidSwarmName",(function(e){const n="Invalid swarm name "+e;console.error(n),t.err(n)})),$$.registerGlobalSymbol("unknownException",(function(...e){e.unshift("unknownException:"),t.err(...e),console.error(...e)})),$$.registerGlobalSymbol("event",(function(e,...n){t.hasOwnProperty("event")?t.event(e,...n):"status.domains.boot"===e&&console.log("Failing to console...",e,...n)})),$$.registerGlobalSymbol("redirectLog",(function(e,n){t.hasOwnProperty("redirect")&&t.redirect(e,n)})),$$.registerGlobalSymbol("throttlingEvent",(function(...e){t.log(...e)}))}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{buffer:!1,psklogger:!1,swarmutils:!1}],"D:\\privatesky\\modules\\psk-bindable-model\\lib\\PskBindableModel.js":[function(e,n){const t=e("soundpubsub").soundPubSub,o="chainChanged",i=".",r=["copyWithin","fill","pop","push","reverse","shift","slice","sort","splice","unshift"];t.registerCompactor(o,(function(e,n){if(e.type===o)return n}));let s=0;const a={};n.exports=class{static setModel(e){let n=void 0,u="Model."+s+i,l=new Set,c=[];function f(e,n){return e?e+i+n:n}function d(e){return u+e}function h(e){return function(t,o,i){let r=f(e,o);return t[o]=i&&"object"==typeof i?p(i,r):i,n.notify(r),!0}}function p(e,s){if("object"!=typeof e||e instanceof File)return e;let a,u,b,$,w,y,v=!s;a=function(e){(function(e){"string"!=typeof e&&(e=""+e);let n=new Set;n.add("*");let t=e.split(i).map((e=>e.trim())),o="";for(let e=0;e<t.length;e++)0!==e?o+=i+t[e]:o=t[e],n.add(o);return l.forEach((t=>{t.startsWith(e)&&n.add(t)})),n})(e).forEach((n=>{t.publish(d(n),{type:o,chain:n,targetChain:e})}))},$=function(e){return e?e.split(i).map((e=>e.trim())).reduce(((e,n)=>{if(null!=e)return e[n]}),n):n},w=function(e,t){return e.split(i).map((e=>e.trim())).reduce(((e,n,o,i)=>{if(null!=e)return o===i.length-1?(e[n]=t,!0):e=e[n]}),n)},u=function(e,n){l.add(e),t.subscribe(d(e),n),c.push({chain:e,callback:n})},b=function(e,n){if(l.has(e)){let o=c.findIndex((e=>e.callback===n));-1!==o&&c.splice(o,1),t.unsubscribe(d(e),n)}},y=function(){for(let e=0;e<c.length;e++){let{chain:n,callback:t}=c[e];b.call(this,n,t)}};let g=h(s),m={apply:function(){throw new Error("A function call was not expected inside proxy!")},constructor:function(){throw new Error("A constructor call was not expected inside proxy!")},isExtensible:function(e){return Reflect.isExtensible(e)},preventExtensions:function(e){return Reflect.preventExtensions(e)},get:function(e,n){if(v)switch(n){case"onChange":return u;case"offChange":return b;case"notify":return a;case"getChainValue":return $;case"setChainValue":return w;case"cleanReferencedChangeCallbacks":return y}else switch(n){case"onChange":return(e,...n)=>{const t=f(s,e);return u(t,...n)};case"offChange":return(e,...n)=>{const t=f(s,e);return b(t,...n)};case"notify":return(e,...n)=>{const t=f(s,e);return a(t,...n)};case"getChainValue":return(e,...n)=>{const t=f(s,e);return $(t,...n)};case"setChainValue":return(e,...n)=>{const t=f(s,e);return w(t,...n)};case"cleanReferencedChangeCallbacks":return y}return"__isProxy"===n||(e instanceof Promise&&"function"==typeof e[n]?e[n].bind(e):e[n])},set:h(s),deleteProperty:function(e,n){return n in e&&(delete e[n],!0)},ownKeys:function(e){return Reflect.ownKeys(e)},has:function(e,n){return n in e},defineProperty:function(e,n,t){let o=Object.assign({},t);return o.set=function(e,n,o){t.hasOwnProperty("set")&&t.set(e,n,o),g(e,n,o)},Object.defineProperty(e,n,o)},getOwnPropertyDescriptor:function(e,n){return Object.getOwnPropertyDescriptor(e,n)},getPrototypeOf:function(e){return Reflect.getPrototypeOf(e)},setPrototypeOf:function(e,n){Reflect.setPrototypeOf(e,n)}};return Array.isArray(e)&&(m.get=function(e){const t=["toObject","addExpression","evaluateExpression","hasExpression","onChangeExpressionChain","offChangeExpressionChain"];return function(o,i){if(v)switch(i){case"onChange":return u;case"offChange":return b;case"notify":return a;case"getChainValue":return $;case"setChainValue":return w;case"cleanReferencedChangeCallbacks":return y;default:if(t.includes(i))return o[i]}else switch(i){case"onChange":return u;case"offChange":return b;case"notify":return a;case"getChainValue":return $;case"setChainValue":return w;case"cleanReferencedChangeCallbacks":return y;default:if(t.includes(i))return o[i]}if("__isProxy"===i)return!0;const s=o[i];if("function"==typeof s)switch(i){case"push":return function(e,t){return function(...o){try{let i=Array.prototype.push.apply(e,o);for(let n=i-o.length;n<i;n++)e[n]=p(e[n],f(t,n.toString()));return n.notify(f(t,i-1)),i}catch(e){throw console.log("An error occurred in Proxy"),e}}}(o,e);default:return function(e,t,o){return function(...i){try{const s=-1!==r.indexOf(e);s&&t.forEach(((e,i)=>{"object"==typeof t[i]&&(t[i]=n.toObject(f(o,i.toString())))}));let a=Array.prototype[e].apply(t,i);if(s)for(let e=0;e<t.length;e++)t[e]=p(t[e],f(o,e.toString()));return s&&n.notify(o),a}catch(e){throw console.log("An error occurred in Proxy"),e}}}(i,o,e)}return s}}(s||"")),Object.keys(e).forEach((n=>{e[n]&&(e[n]=p(e[n],f(s,n)))})),e.__isProxy?e:new Proxy(e,m)}return s++,n=p(e),n.toObject=function(e){let t={};return e?"string"==typeof e&&(t=n.getChainValue(e)):t=n,t&&"object"==typeof t?JSON.parse(JSON.stringify(t)):t},n.addExpression=function(e,t,...o){if("string"!=typeof e||!e.length)throw new Error("Expression name must be a valid string");if("function"!=typeof t)throw new Error("Expression must have a callback");let i=[];if(o.length){let e=o;Array.isArray(e[0])&&(e=e[0]),i=e.filter((e=>"string"==typeof e&&e.length))}a[e]={watchChain:i,callback:function(){return t.call(n)}}},n.evaluateExpression=function(e){if(!this.hasExpression(e))throw new Error(`Expression "${e}" is not defined`);return a[e].callback()},n.hasExpression=function(e){return"object"==typeof a[e]&&"function"==typeof a[e].callback},n.onChangeExpressionChain=function(e,n){if(!this.hasExpression(e))throw new Error(`Expression "${e}" is not defined`);const t=a[e];if(t.watchChain.length)for(let e=0;e<t.watchChain.length;e++)this.onChange(t.watchChain[e],n)},n.offChangeExpressionChain=function(e,n){if(!this.hasExpression(e))return;const t=a[e];if(t.watchChain.length)for(let e=0;e<t.watchChain.length;e++)this.offChange(t.watchChain[e],n)},n}}},{soundpubsub:"soundpubsub"}],"D:\\privatesky\\modules\\soundpubsub\\lib\\soundPubSub.js":[function(e,n,t){const o=e("queue");t.soundPubSub=new function(){let e=new function(){let e,n="function"==typeof FinalizationRegistry&&"function"==typeof WeakRef;n&&(e=new FinalizationRegistry((()=>{}))),this.setSubscriberCallback=function(t,o,i){n?(t.callBack=new WeakRef(i),e.register(t.callBack,o)):t.callBack=i},this.getSubscriberCallback=function(e){return n?e.callBack?e.callBack.deref():void 0:e.callBack}};this.publish=function(e,n){return f(e)||function(e){var n=!1;return e&&"object"==typeof e||(n=!0,console.log("Invalid messages types: "+e)),n}(n)||void 0===t[e]?null:(function(e,n){var t=!1,a=i[e];if(void 0===a&&(a=new o,i[e]=a),n&&void 0!==n.type){var u=r[n.type];if(void 0!==u)for(let e of a)if(u(n,e)===e&&void 0===e.__transmisionIndex){t=!0;break}}!t&&n&&(a.push(n),s.push(e))}(e,n),setTimeout(u,0),t[e].length)},this.subscribe=function(n,o,i,r){if(!f(n)&&!d(o)){let s={waitForMore:i,filter:r};void 0===t[n]&&(t[n]=[]),e.setSubscriberCallback(s,n,o),t[n].push(s)}},this.unsubscribe=function(n,o,i){if(!d(o)&&t[n])for(let r=0;r<t[n].length;r++){let s=t[n][r];e.getSubscriberCallback(s)!==o||void 0!==i&&s.filter!==i||(s.forDelete=!0,s.callBack=void 0,s.filter=void 0)}},this.blockCallBacks=function(){a++},this.releaseCallBacks=function(){for(a--;0===a&&u(!0););for(;0===a&&c(););},this.afterAllEvents=function(e){d(e)||l.push(e),this.blockCallBacks(),this.releaseCallBacks()},this.hasChannel=function(e){return!f(e)&&void 0!==t[e]},this.addChannel=function(e){f(e)||this.hasChannel(e)||(t[e]=[])};var n=this,t={},i={},r={},s=new o,a=0;function u(o){if(a>0)return!1;const r=s.front();if(void 0!==r){n.blockCallBacks();try{let n;if(i[r].isEmpty()||(n=i[r].front()),void 0===n)i[r].isEmpty()||console.log("Can't use as message in a pub/sub channel this object: "+n),s.pop();else{if(void 0===n.__transmisionIndex){n.__transmisionIndex=0;for(var u=t[r].length-1;u>=0;u--){var l=t[r][u];!0===l.forDelete&&t[r].splice(u,1)}}else n.__transmisionIndex++;if(void 0===n.__transmisionIndex&&console.log("Can't use as message in a pub/sub channel this object: "+n),void 0===(l=t[r][n.__transmisionIndex]))delete n.__transmisionIndex,i[r].pop();else if((null==l.filter||!d(l.filter)&&l.filter(n))&&!l.forDelete){let t=e.getSubscriberCallback(l);void 0===t?l.forDelete=!0:(t(n),!l.waitForMore||d(l.waitForMore)||l.waitForMore(n)||(l.forDelete=!0))}}}catch(e){console.log("Event callback failed: "+l.callBack+"error: "+e.stack)}return o?a--:n.releaseCallBacks(),!0}return!1}this.registerCompactor=function(e,n){d(n)||(r[e]=n)};var l=new o;function c(){return l.isEmpty()||l.pop()(),!l.isEmpty()}function f(e){var n=!1;return(!e||"string"!=typeof e&&"number"!=typeof e)&&(n=!0,console.log("Invalid channel name: "+e)),n}function d(e){var n=!1;return e&&"function"==typeof e||(n=!0,console.log("Expected to be function but is: "+e)),n}}},{queue:"queue"}],"overwrite-require":[function(e,n){(function(t){(function(){n.exports={enableForEnvironment:function(n){const o=e("./moduleConstants");switch(n){case o.BROWSER_ENVIRONMENT_TYPE:t=window;break;case o.WEB_WORKER_ENVIRONMENT_TYPE:case o.SERVICE_WORKER_ENVIRONMENT_TYPE:t=self;break;default:Error.stackTraceLimit=1/0}void 0===t.$$&&(t.$$={}),void 0===$$.__global&&($$.__global={}),void 0===t.wprint&&(t.wprint=console.warn),Object.defineProperty($$,"environmentType",{get:function(){return n},set:function(){throw Error("Environment type already set!")}}),void 0===$$.__global.requireLibrariesNames&&($$.__global.currentLibraryName=null,$$.__global.requireLibrariesNames={}),void 0===$$.__runtimeModules&&($$.__runtimeModules={}),void 0===t.functionUndefined&&(t.functionUndefined=function(){throw console.log("Called of an undefined function!!!!"),new Error("Called of an undefined function")},void 0===t.webshimsRequire&&(t.webshimsRequire=t.functionUndefined),void 0===t.domainRequire&&(t.domainRequire=t.functionUndefined),void 0===t.pskruntimeRequire&&(t.pskruntimeRequire=t.functionUndefined));const i={};function r(e){return $$.__runtimeModules[e]}function s(e,n){let o,r;e?(o=$$.__requireFunctionsChain.slice(),o.push(e)):o=$$.__requireFunctionsChain,function(e){if(i[e]){const n=new Error("Preventing recursive require for "+e);throw n.type="PSKIgnorableError",n}}(n),function(e){i[e]=!0}(n);let s=!1;$$.__global.currentLibraryName||($$.__global.currentLibraryName=n,void 0===$$.__global.requireLibrariesNames[n]&&($$.__global.requireLibrariesNames[n]={}),s=!0);for(let e=0;e<o.length;e++){const i=o[e];try{if(i===t.functionUndefined)continue;if(r=i(n),r)break}catch(e){"PSKIgnorableError"!==e.type&&("SyntaxError"==typeof e?console.error(e):"zeromq"===n?console.warn("Failed to load module ",n," with error:",e.message):console.error("Failed to load module ",n," with error:",e))}}if(!r)throw Error("Failed to load module "+n);return function(e){i[e]=!1}(n),s&&($$.__global.currentLibraryName=null),r}if($$.__registerModule=function(e,n){$$.__runtimeModules[e]=n},e("./standardGlobalSymbols.js"),void 0===$$.require)switch($$.__requireList=["webshimsRequire"],$$.__requireFunctionsChain=[],$$.requireBundle=function(e){$$.__requireList.push(e+="Require");const n=[r];$$.__requireList.forEach((function(e){const o=function(e){const n=t[e];return void 0===n||n===t.functionUndefined?null:function(e){const t=n(e);return $$.__runtimeModules[e]=t,t}}(e);o&&n.push(o)})),$$.__requireFunctionsChain=n},$$.requireBundle("init"),$$.environmentType){case o.BROWSER_ENVIRONMENT_TYPE:case o.WEB_WORKER_ENVIRONMENT_TYPE:case o.SERVICE_WORKER_ENVIRONMENT_TYPE:console.log("Defining global require in browser"),t.require=function(e){return s(null,e)},$$.require=e;break;case o.ISOLATE_ENVIRONMENT_TYPE:!function(){$$.requireBundle("sandboxBase");const n=t.require;t.crypto=e("crypto"),t.require=function(e){const t=this;let o;return o=s((function(...o){let i;try{i=n.apply(t,o)}catch(o){if("MODULE_NOT_FOUND"!==o.code)throw o;{const o=path.join(process.cwd(),e);i=n.apply(t,[o]),e=o}}return i}),e),o}}(),$$.require=e;break;default:$$.require=function(){const n=e("path");$$.__runtimeModules.crypto=e("crypto"),$$.__runtimeModules.util=e("util");const t=e("module");$$.__runtimeModules.module=t,console.log("Redefining require for node"),$$.__originalRequire=t._load;const o=t.prototype.require;function i(e){const t=this;return s((function(...i){let r;try{r=o.apply(t,i)}catch(i){if("MODULE_NOT_FOUND"!==i.code)throw i;{let i=e;(i.startsWith("/")||i.startsWith("./")||i.startsWith("../"))&&(i=n.join(process.cwd(),e)),r=o.call(t,i),e=i}}return r}),e)}return t.prototype.require=i,i}()}$$.promisify=function(e){return function(...n){return new Promise(((t,o)=>{e(...n,((e,...n)=>{e?o(e):t(...n)}))}))}},$$.makeSaneCallback=function(e){let n=!1;return(t,o,...i)=>{if(n)throw t&&console.log("Sane callback error:",t),new Error(`Callback called 2 times! Second call was stopped. Function code:\n${e.toString()}\n`);return n=!0,e(t,o,...i)}}},constants:e("./moduleConstants")}}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./moduleConstants":"D:\\privatesky\\modules\\overwrite-require\\moduleConstants.js","./standardGlobalSymbols.js":"D:\\privatesky\\modules\\overwrite-require\\standardGlobalSymbols.js"}],"psk-bindable-model":[function(e,n){n.exports=e("./lib/PskBindableModel")},{"./lib/PskBindableModel":"D:\\privatesky\\modules\\psk-bindable-model\\lib\\PskBindableModel.js"}],queue:[function(e,n){function t(e){this.content=e,this.next=null}function o(){this.head=null,this.tail=null,this.length=0,this.push=function(e){const n=new t(e);this.head?(this.tail.next=n,this.tail=n):(this.head=n,this.tail=n),this.length++},this.pop=function(){if(!this.head)return null;const e=this.head;return this.head=this.head.next,this.length--,0===this.length&&(this.tail=null),e.content},this.front=function(){return this.head?this.head.content:void 0},this.isEmpty=function(){return null===this.head},this[Symbol.iterator]=function*(){let e=this.head;for(;null!==e;)yield e.content,e=e.next}.bind(this)}o.prototype.inspect=o.prototype.toString=function(){let e="",n=this.head;for(;n;)e+=JSON.stringify(n.content)+" ",n=n.next;return e},n.exports=o},{}],soundpubsub:[function(e,n){n.exports={soundPubSub:e("./lib/soundPubSub").soundPubSub}},{"./lib/soundPubSub":"D:\\privatesky\\modules\\soundpubsub\\lib\\soundPubSub.js"}]},{},["D:\\privatesky\\builds\\tmp\\bindableModel.js"]),function(e){e.bundlePaths={webshims:"D:\\privatesky\\psknode\\bundles\\webshims.js",pskruntime:"D:\\privatesky\\psknode\\bundles\\pskruntime.js",pskWebServer:"D:\\privatesky\\psknode\\bundles\\pskWebServer.js",consoleTools:"D:\\privatesky\\psknode\\bundles\\consoleTools.js",blockchain:"D:\\privatesky\\psknode\\bundles\\blockchain.js",openDSU:"D:\\privatesky\\psknode\\bundles\\openDSU.js",nodeBoot:"D:\\privatesky\\psknode\\bundles\\nodeBoot.js",testsRuntime:"D:\\privatesky\\psknode\\bundles\\testsRuntime.js",bindableModel:"D:\\privatesky\\psknode\\bundles\\bindableModel.js",loaderBoot:"D:\\privatesky\\psknode\\bundles\\loaderBoot.js",swBoot:"D:\\privatesky\\psknode\\bundles\\swBoot.js",iframeBoot:"D:\\privatesky\\psknode\\bundles\\iframeBoot.js",launcherBoot:"D:\\privatesky\\psknode\\bundles\\launcherBoot.js",testRunnerBoot:"D:\\privatesky\\psknode\\bundles\\testRunnerBoot.js"}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const l=bindableModelRequire("psk-bindable-model"),c=new Set;let f=!1;function d(e,n,t){if("string"!=typeof e||0===e.trim().length)throw Error(`\n      Argument eventName is not valid. It must be a non-empty string.\n      Provided value: ${e}\n    `);if("function"!=typeof n)throw Error(`\n      Argument listener is not valid, it must be a function.\n      Provided value: ${n}\n    `);if(t&&"boolean"!=typeof t&&"object"!=typeof t)throw Error(`\n      Argument options is not valid, it must a boolean (true/false) in case of capture, or an options object.\n      If no options are needed, this argument can be left empty.\n      Provided value: ${t}\n    `)}function h(){return window.$$&&$$.require}function p(){const{state:e}=window.WebCardinal||{};return e&&e.skin&&"string"==typeof e.skin}function b(e,n){"string"==typeof n&&(n=n.split("."));const t=n.shift();return n.length?b(e[t],n):e[t]}function $(e){if(e&&"object"==typeof e)return void 0===e.onChangeExpressionChain?l.setModel(e):e;console.warn("A model must be an object!")}function w(){if(!r())return;let{translations:e}=window.WebCardinal;const n=s(),t=a(),o=e[n],i=e.default;if(!o&&!i)return void console.warn(`No translations found for skins: "${n}"${"default"!==n?' and "default"':""}`);let u=o?.[t];return u||(u=i?.[t],u||void console.warn(`No translations found for page: "${t}" (skins: "${n}"${"default"!==n?' and "default"':""}`))}function y(e,n){if(!r())return void console.warn(['Function "translate" must be called only when translations are enabled!',"Check WebCardinal.state"].join("\n"));const t=s(),o=a();if(!n)return console.warn(`No translations found for page: "${o}" (skins: "${t}"${"default"!==t?' and "default"':""})`),e;e.startsWith("$")&&(e=e.slice(1));return b(n,e)||(console.warn(`No translations found for chain: "${e}" (page: "${o}", skins: "${t}"${"default"!==t?' and "default"':""})`),e)}class v{constructor(t,o,i,r){let s;if(this.element=t,this.history=o,this.tagEventListeners=[],this._dsuStorage=void 0,i&&this.element.hasAttribute(e)){let t=this.element.getAttribute(e);t.startsWith(n)?(t=t.slice(1),s=t?l.setModel(i):i):s=l.setModel(i)}Object.defineProperty(this,"model",{get:()=>(s||(s=l.setModel({})),s),set(e){s?Object.keys(e).forEach((n=>{s[n]=e[n]})):s=l.setModel(e)}}),this.setLegacyGetModelEventListener(),this.translationModel=r||l.setModel(w()||{}),this.disconnectedCallback=()=>{this.removeAllTagEventListeners(),this.onDisconnectedCallback()},"function"==typeof this.element.componentOnReady?this.element.componentOnReady().then(this.onReady.bind(this)):this.onReady(),f||(this.history.listen((()=>function(e){const n=e.location.key;let t=!0,o=document.querySelectorAll("webc-app-loader[data-key]");for(const e of Array.from(o))e.dataset.key!==n&&"not-generated-yet"!==e.dataset.key?t?e.remove():e.setAttribute("hidden",""):(e.removeAttribute("hidden"),window.WebCardinal.state.page.loader=e,window.WebCardinal.state.page.src=e.src,t=!1);const i=document.querySelector("webc-app-loader[save-state]:not([data-key])");i.setAttribute("hidden",""),o=document.querySelectorAll("webc-app-loader[data-key]");for(const e of Array.from(o))if(!e.hasAttribute("hidden"))return;i.removeAttribute("hidden")}(this.history))),f=!0)}createElement(e,n){return n&&n.model&&(n.model=$(n.model)),Object.assign(document.createElement(e),n)}createAndAddElement(e,n){const t=this.createElement(e,n);return this.element.append(t),t}on(e,n,t){try{d(e,n,t),this.element.addEventListener(e,n,t)}catch(e){console.error(e)}}off(e,n,t){try{d(e,n,t),this.element.removeEventListener(e,n,t)}catch(e){console.error(e)}}onReady(){}onDisconnectedCallback(){}removeAllTagEventListeners(){this.tagEventListeners.forEach((e=>{this.element.removeEventListener(e.eventName,e.eventListener,e.options)}))}onTagEvent(e,n,t,o){try{d(n,t,o);const r=n=>{let o=n.target;for(;o&&o!==this.element;){if(o.getAttribute(i)===e){n.preventDefault(),n.stopPropagation();const e=o[u]?o[u]():null;t(e,o,n);break}o=o.parentElement}};this.tagEventListeners.push({tag:e,eventName:n,listener:t,eventListener:r,options:o});let s=this.element;this.element.hasAttribute("shadow")&&this.element.shadowRoot&&(s=this.element.shadowRoot),s.addEventListener(n,r,o)}catch(e){console.error(e)}}offTagEvent(e,n,t,o){try{d(n,t,o);const i=[];this.tagEventListeners.filter(((r,s)=>{const a=r.tag===e&&r.eventName===n&&r.listener===t&&r.options===o;return a&&i.push(s),a})).forEach((e=>{this.element.removeEventListener(n,e.eventListener,o)})),i.length&&(i.reverse(),i.forEach((e=>{this.tagEventListeners.splice(e,1)})))}catch(e){console.error(e)}}onTagClick(e,n,t){this.onTagEvent(e,"click",n,t)}offTagClick(e,n,t){this.offTagEvent(e,"click",n,t)}navigateToUrl(e,n){this.history.push(e,n)}navigateToPageTag(e,n){this.element.dispatchEvent(new CustomEvent("webcardinal:tags:get",{bubbles:!0,composed:!0,cancelable:!0,detail:{tag:e,callback:(t,o)=>{t?console.error(t):"object"!=typeof o?this.navigateToUrl(o,n):console.warn(`Tag "${e}" can not be found in all the available routes`,o)}}}))}async pushPage(e,n){document.querySelector("webc-app-loader[data-key]")||c.clear(),n||(n={}),n.parentElement||(n.parentElement=document.querySelector('stencil-route:not([style="display: none;"])')),n.namespace||(n.namespace=t),n.skin||(n.skin=this.getSkin()),"string"!=typeof n.tag&&(n.tag=void 0);const{basePath:i}=window.WebCardinal,{parentElement:r,namespace:s,skin:a,tag:u}=n,{pathname:l}=this.history.location;(e=o.join("",s,e).pathname).startsWith("/")&&(e="."+e),e.endsWith(".html")||(e+=".html");const f={src:window.WebCardinal.state.page.loader.src,key:this.history.location.key},d=window.WebCardinal.state.page.loader,h=this.createElement("webc-app-loader",{src:e,basePath:i,skin:a,tag:u,saveState:!0});h.setAttribute("hidden",""),h.dataset.key="not-generated-yet",r.prepend(h),await h.componentOnReady(),d.setAttribute("hidden",""),h.removeAttribute("hidden"),this.history.push(l,n.state);const p={src:e,key:this.history.location.key};h.dataset.key=p.key,c.add(p.key),c.add(f.key)}getVirtualHistory(){return Object.freeze(c)}send(e,n,t={}){let o={bubbles:!0,cancelable:!0,composed:!0,detail:n,...t};this.element.dispatchEvent(new CustomEvent(e,o))}setLegacyGetModelEventListener(){this.element.addEventListener("getModelEvent",(e=>{e.preventDefault(),e.stopImmediatePropagation();let{bindValue:n,callback:t}=e.detail;if("function"==typeof t)return function(e,n,t){e&&n[e]&&t(null,n[e]),e||t(null,n)}(n,this.model,t);t(new Error("No callback provided"))}))}setState(e){this.history.location.state=e}getState(){return this.history.location.state}updateState(e,n){this.setState({...this.getState()||{},[e]:n})}removeFromState(e){const n=this.getState();delete n[e],this.setState(n)}setSkin(e,{save:n}={save:!0}){p()?"string"==typeof e?(n&&"localStorage"in window&&window.localStorage.setItem("webcardinal.skin",e),window.WebCardinal.state.skin=e):console.log('"skin" must be a valid non-empty string!'):console.warn("WebCardinal skin is not set by your Application!")}getSkin(){if(p())return window.WebCardinal.state.skin;console.warn("WebCardinal skin is not set by your Application!")}applySkinForCurrentPage(e){p()?"string"==typeof e?window.WebCardinal.state.page.loader.skin=e:console.log('"skin" must be a valid non-empty string!'):console.warn("WebCardinal skin is not set by your Application!")}translate(e){return y(e,this.translationModel)}getElementByTag(e){return this.element.querySelector(`[${i}="${e}"]`)}getElementsByTag(e){return this.element.querySelectorAll(`[${i}="${e}"]`)}querySelector(e){return this.element.querySelector(e)}querySelectorAll(e){return this.element.querySelectorAll(e)}getMainEnclaveDB(e){h()?require("opendsu").loadAPI("db").getMainEnclaveDB(e):console.error('"this.getMainEnclaveDB" is available only inside an SSApp!')}setModel(e){console.warn(['Function "setModel" is applied in a redundant manner and it is also deprecated.',"This function will be removed in a future release",'Use "this.model = <YOUR_MODEL>" instead'].join("\n")),this.model=e}setLanguage(){console.warn(['Function "setLanguage" is deprecated!','Use "setSkin" with a new skin if changing of the translations is desired'].join("\n"))}setPreferredSkin(e,{saveOption:n}={saveOption:!0}){console.warn(['Function "setPreferredSkin" is deprecated!','Use "setSkin" instead, "saveOptions" flag is now "save" (store your skin in localStorage).'].join("\n")),this.setSkin(e,{save:n})}getPreferredSkin(){return console.warn(['Function "getPreferredSkin" is deprecated!','Use "getSkin" instead!'].join("\n")),this.getSkin()}changeSkinForCurrentPage(e){console.warn(['Function "changeSkinForCurrentPage" is deprecated!','Use "applySkinForCurrentPage" instead!'].join("\n")),this.applySkinForCurrentPage(e)}get DSUStorage(){if(!h())return console.error('"this.DSUStorage" is available only inside an SSApp!'),this._dsuStorage;if(!this._dsuStorage){const{getDSUStorage:e}=require("opendsu").loadAPI("storage");this._dsuStorage=e()}return this._dsuStorage}set DSUStorage(e){console.warn('Overriding "this.DSUStorage" is not recommended!'),this._dsuStorage=e}}export{v as C,l as P,w as g,$ as p,y as t}