// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"io2N8":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ba2beaa036960861";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"bNJxx":[function(require,module,exports,__globalThis) {
// ===== imports =====
/* ---- constants ---- */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Bubble", ()=>Bubble);
var _numbersJs = require("./src/constants/numbers.js");
var _uiLayoutJs = require("./src/constants/uiLayout.js");
var _saveJs = require("./src/constants/save.js");
// fps
var _timingJs = require("./src/constants/timing.js");
// 自動化
var _automationSystemJs = require("./src/systems/automationSystem.js");
// アンロックに必要なずんだ量
var _unlockZundaAmountJs = require("./src/constants/unlockZundaAmount.js");
// キャラクター表示
// セリフの表示時間 = 60秒
var _zundaTalkJs = require("./src/constants/zundaTalk.js");
var _zundaSpritesJs = require("./src/constants/zundaSprites.js");
var _zundaLinesJs = require("./src/constants/zundaLines.js");
var _bubbleJs = require("./src/ui/bubble.js");
// UI
var _tabsJs = require("./src/ui/tabs.js");
var _automationUIJs = require("./src/ui/automationUI.js");
var _automationCardsJs = require("./src/ui/automationCards.js");
var _askillTreeJs = require("./src/ui/askillTree.js");
var _ankoChallengesUIJs = require("./src/ui/ankoChallengesUI.js");
var _costsUIJs = require("./src/ui/costsUI.js");
var _visibilityUIJs = require("./src/ui/visibilityUI.js");
var _prestigeUIJs = require("./src/ui/prestigeUI.js");
var _boostAscUIJs = require("./src/ui/boostAscUI.js");
var _hudJs = require("./src/ui/hud.js");
var _zundaDimsUIJs = require("./src/ui/zundaDimsUI.js");
var _miscBarsJs = require("./src/ui/miscBars.js");
var _updateUIJs = require("./src/ui/updateUI.js");
// ずんだディメンション
var _multsJs = require("./src/systems/mults.js");
var _zundaProductionJs = require("./src/systems/zundaProduction.js");
// プレステージ
var _prestigeSystemJs = require("./src/systems/prestigeSystem.js");
// あんこディメンション
var _ankoDimsJs = require("./src/content/ankoDims.js");
var _ankoProductionJs = require("./src/systems/ankoProduction.js");
// あんこスキル
var _ankoSkillsJs = require("./src/constants/ankoSkills.js");
// あんこチャレンジ
var _achallengeDefsJs = require("./src/constants/achallengeDefs.js");
var _ankoChallengeJs = require("./src/systems/ankoChallenge.js");
let onAnkoChalUIUpdate = null;
/***** 0. BANNER ************************************************************/ /* 依存順: Utils → State → Effects → Math → Actions → UI → Events → Loop → Boot */ /***** 1. UTILS *************************************************************/ // Decimal/number/BreakInfinity を問わず "数値" に落とす
function toNum(x) {
    if (x && typeof x.toNumber === 'function') return x.toNumber();
    return Number(x);
}
// 表示フォーマッタ（Decimal対応）
function fmtDec(d) {
    if (!(d instanceof (0, _numbersJs.Decimal))) d = (0, _numbersJs.D)(d || 0);
    // ゼロ
    if (d.eq(0)) return '0';
    const abs = d.abs();
    // 小さい値～通常値（安全に toNumber）
    if (abs.gte(1e-4) && abs.lt(1e7)) {
        const n = toNum(d); // この範囲は安全
        // 整数 or 少数の判断をして表示
        if (Math.abs(n - Math.round(n)) < 1e-9) // ほぼ整数なら桁区切り付き整数
        return Math.round(n).toLocaleString('en-US');
        else if (Math.abs(n) < 1) // 1未満なら少数4桁
        return n.toFixed(4).replace(/\.?0+$/, '');
        else // その他は少数2桁
        return n.toFixed(2);
    }
    // それ以外は指数表記
    const e = (0, _numbersJs.Decimal).floor((0, _numbersJs.Decimal).log10(abs));
    const m = d.div((0, _numbersJs.Decimal).pow(10, e));
    const sign = d.lt(0) ? '-' : '';
    return sign + m.abs().toFixed(2) + 'e' + e.toString();
}
// 表示フォーマッタ（Decimal対応・小数点以下2桁）
function fmtDec2(d) {
    if (!(d instanceof (0, _numbersJs.Decimal))) d = (0, _numbersJs.D)(d || 0);
    // ゼロ
    if (d.eq(0)) return '0';
    const abs = d.abs();
    // 小さい値～通常値（安全に toNumber）
    if (abs.gte(1e-4) && abs.lt(1e7)) {
        const n = toNum(d); // この範囲は安全
        if (Math.abs(n) < 1) // 1未満なら少数4桁
        return n.toFixed(4);
        else // その他は少数2桁
        return n.toFixed(2);
    }
    // それ以外は指数表記
    const e = (0, _numbersJs.Decimal).floor((0, _numbersJs.Decimal).log10(abs));
    const m = d.div((0, _numbersJs.Decimal).pow(10, e));
    const sign = d.lt(0) ? '-' : '';
    return sign + m.abs().toFixed(2) + 'e' + e.toString();
}
const fmt = fmtDec;
const softFmt = fmtDec;
const fmt2 = fmtDec2;
// 安全な log10（Decimalなら d.log10()、numberなら Math.log10）
function log10Safe(d) {
    if (d && typeof d.log10 === 'function') return d.log10(); // Decimal or BreakInfinity
    return Math.log10(Number(d)); // native number
}
function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
}
// 現在の時間
const nowMs = ()=>performance?.now?.() || Date.now();
// ずんだディメンション
const tiers = Array.from({
    length: 9
}, ()=>({}));
/* ---- あんこチャレンジ関連 ---- */ // チャレンジに入ってから経過した時間
const ankoChalElapsedSec = ()=>(nowMs() - (state.anko.chalStartMs || 0)) / 1000 | 0;
const isAnkoChal = (k)=>state.anko.activeChal === k || typeof k === "string" && (0, _achallengeDefsJs.ACHAL_DEFS)[state.anko.activeChal]?.key === k;
const isChal = (k)=>state.anko.activeChal === k || typeof k === "string" && (0, _achallengeDefsJs.ACHAL_DEFS)[state.anko.activeChal]?.key === k;
/* ---- UI helpers ---- */ const el = (id)=>document.getElementById(id);
// 科学記法ふくむ数値リテラル判定用（例: 10, 1.5, 1e10, 1.23e-4）
const NUM_LITERAL_RE = /^[+-]?(?:\d+\.?\d*|\d*\.?\d+)(?:e[+-]?\d+)?$/i;
/**
 * v が「ちゃんとした数値文字列」か判定する
 *  - 形式チェック（正規表現）
 *  - Decimal でパースできるか
 *  - min/max（Decimal）での範囲チェック（オプション）
 */ function isValidDecimalLiteral(v, opts = {}) {
    if (!NUM_LITERAL_RE.test(v)) return false;
    let d;
    try {
        d = (0, _numbersJs.D)(v);
    } catch  {
        return false;
    }
    // NaN は弾く
    if (typeof d.isNaN === 'function' && d.isNaN()) return false;
    if (opts.min !== undefined && d.lt(opts.min)) return false;
    if (opts.max !== undefined && d.gt(opts.max)) return false;
    return true;
}
// 入力途中として“ありえる”形かどうかを判定
function isMaybeNumericLiteral(v) {
    // 単なる符号だけ
    if (v === "+" || v === "-") return true;
    // 小数点まで打って終わってる
    if (/^[+-]?\d+\.$/.test(v)) return true;
    if (/^[+-]?\.\d*$/.test(v)) return true; // ".1" とか "."
    // 指数記法の途中: "1e", "1e+", "1e-"
    if (/^[+-]?(?:\d+\.?\d*|\d*\.?\d+)e[+-]?$/i.test(v)) return true;
    return false;
}
/**
 * 数値文字列用入力ハンドラをアタッチ
 *
 * @param {HTMLInputElement} inputEl 対象 input
 * @param {() => string} getValue    現在値を取得する関数（state → string）
 * @param {(v: string) => void} setValue 新しい値を保存する関数（string → state）
 * @param {Object} opts
 *   - min: Decimal での下限（任意）
 *   - max: Decimal での上限（任意）
 *   - allowEmpty: true のとき空欄を許可（デフォ false）
 */ function attachNumericInputHandler(inputEl, getValue, setValue, opts = {}) {
    if (!inputEl) return;
    // ---- 初期値の正規化 ----
    let stored = (getValue?.() ?? "").toString().trim();
    let lastValid;
    if (stored && isValidDecimalLiteral(stored, opts)) // 保存されていた値がちゃんとしてる
    lastValid = stored;
    else {
        // 保存されてた値が不正（1eee10 など）の場合はここで矯正
        lastValid = opts.default ?? "1";
        setValue?.(lastValid);
    }
    inputEl.value = lastValid;
    // ---- 入力中イベント ----
    inputEl.addEventListener("input", (e)=>{
        const raw = (e.target.value ?? "").trim();
        // 空欄
        if (raw === "") {
            if (opts.allowEmpty) {
                lastValid = raw;
                setValue?.(raw);
                save?.();
                return;
            }
            // 空欄禁止 → 最後の正しい値に戻す
            e.target.value = lastValid;
            return;
        }
        // 完全に正しいかチェック
        if (!isValidDecimalLiteral(raw, opts)) {
            // まだ“途中”としてありえる形なら見逃す
            if (isMaybeNumericLiteral(raw)) // 表示だけ残して state は更新しない
            return;
            // どうやっても数値にならない → 最後の正しい値に戻す
            e.target.value = lastValid;
            return;
        }
        // ✅ 正しい数値 → ここで lastValid を更新
        lastValid = raw;
        setValue?.(raw);
        save?.();
    });
    // ---- フォーカス外れたときの保険 ----
    inputEl.addEventListener("blur", (e)=>{
        const raw = (e.target.value ?? "").trim();
        if (raw === "") {
            if (!opts.allowEmpty) e.target.value = lastValid;
            return;
        }
        if (!isValidDecimalLiteral(raw, opts)) e.target.value = lastValid;
    });
}
/***** 2. STATE *************************************************************/ /* ---- 状態 ---- */ const state = {
    zunda: (0, _numbersJs.D)(10),
    lastActiveMs: 0,
    runSeconds: 0,
    runSecondsAnko: 0,
    lastTime: performance.now(),
    lastSave: Date.now(),
    boostZunda: (0, _numbersJs.D)(0),
    boostEdamame: (0, _numbersJs.D)(0),
    boostOther: (0, _numbersJs.D)(0),
    ascensionMult: 1,
    prestige: {
        speed: 0,
        power: 0,
        cost: 0
    },
    maxZunda: (0, _numbersJs.D)(10),
    // 枝豆/大豆（恒久）
    eda: {
        amount: 0,
        boostBought: 0,
        expBought: 0
    },
    soy: {
        amount: 0,
        boostUpLv: 0,
        zd8Lv: 0
    },
    ap: 0,
    anconityClears: 0,
    ankoTabUnlocked: false,
    anconityReady: false,
    // 進行度
    zundaProgress: 0,
    // アンロック
    autoTabUnlocked: false,
    unlocks: {
        boost: false,
        asc: false,
        prestige: false,
        allMax: false
    },
    // 自動化
    auto: {
        unlocked: {
            boost: false,
            zd: Array(8).fill(false),
            boostFast: false,
            zdFast: Array(8).fill(false),
            asc: false,
            prest: false,
            eda: false,
            soy: false,
            anco: false
        },
        enabled: {
            boost: false,
            zd: Array(8).fill(false),
            boostFast: false,
            zdFast: Array(8).fill(false),
            asc: false,
            prest: {
                speed: false,
                power: false,
                cost: false
            },
            // 枝豆アップグレード（2種）
            eda: {
                boost: false,
                exp: false // 指数強化
            },
            // 大豆アップグレード（2種）
            soy: {
                boostUp: false,
                zd8: false // ZD8強化
            },
            anco: false
        },
        ascMul: 1,
        prestMul: {
            speed: "4",
            power: "4",
            cost: "4"
        }
    }
};
// あんこ状態（未定義なら初期化）
state.anko = state.anko || {
    amount: (0, _numbersJs.D)(0),
    dims: Array.from({
        length: 9
    }, (_, i)=>({
            bought: (0, _numbersJs.D)(0),
            generated: (0, _numbersJs.D)(1),
            prodPerSec: 1
        })),
    skills: {},
    challenges: Array.from({
        length: 13
    }, ()=>({
            cleared: false,
            bestTime: null
        })),
    chalCounters: {
        ascCount: 0,
        totalDimBought: (0, _numbersJs.D)(0),
        perDimOwned: Array(9).fill(0)
    }
};
/* ---- Save / Load（Decimal対応） ---- */ function save() {
    // ankoの存在と最低限の型を保証
    if (!state.anko) state.anko = {};
    if (state.anko.amount == null) state.anko.amount = (0, _numbersJs.D)(state.anko.amount || 0);
    if (!Array.isArray(state.anko.dims)) state.anko.dims = [];
    const toStr = (v)=>v != null && typeof v.toString === 'function' ? v.toString() : String(v ?? 0);
    const payload = {
        zunda: state.zunda.toString(),
        lastActiveMs: state.lastActiveMs,
        runSeconds: state.runSeconds,
        lastSave: Date.now(),
        boostZunda: state.boostZunda,
        boostEdamame: state.boostEdamame,
        ascensionMult: state.ascensionMult,
        prestige: state.prestige,
        maxZunda: state.maxZunda.toString(),
        eda: state.eda,
        soy: state.soy,
        zundaProgress: state.zundaProgress,
        autoTabUnlocked: state.autoTabUnlocked,
        unlocks: state.unlocks,
        auto: state.auto,
        anko: {
            amount: toStr(state.anko.amount),
            dims: (state.anko.dims || []).map((d)=>({
                    i: d.i,
                    bought: d.bought,
                    prodPerSec: d.prodPerSec,
                    generated: d.generated
                }))
        },
        ap: state.ap,
        anconityClears: state.anconityClears,
        ankoTabUnlocked: state.ankoTabUnlocked,
        anconityReady: state.anconityReady,
        tiers: tiers.slice(1).map((t)=>({
                bought: t.bought,
                generated: t.generated,
                revealed: t.revealed || false
            }))
    };
    localStorage.setItem((0, _saveJs.SAVE_KEY), JSON.stringify(payload));
    flashSaveStatus("\u4FDD\u5B58\u6E08\u307F");
}
// 初期化
state.ap = state.ap ?? 0; // 既にAPを持っているならそのまま
state.anko = state.anko || {
    amount: (0, _numbersJs.D)(0),
    dims: Array.from({
        length: 9
    }, (_, i)=>({
            i,
            bought: (0, _numbersJs.D)(0),
            prodPerSec: 1,
            generated: (0, _numbersJs.D)(1) // “生成数”の表示用（AD2+がAD1を増やし、AD1はあんこを増やす）
        }))
};
function load() {
    const raw = localStorage.getItem((0, _saveJs.SAVE_KEY));
    if (!raw) return;
    try {
        const p = JSON.parse(raw);
        state.zunda = (0, _numbersJs.D)(p.zunda || 10); // Decimal
        state.lastActiveMs = p.lastActiveMs ?? p.lastSave ?? Date.now();
        state.runSeconds = Number(p.runSeconds) || 0; // 全体のプレイ時間
        state.runSecondsAnko = p.runSecondsAnko || 0; // 現在のアンコニティのプレイ時間
        state.lastSave = Number(p.lastSave) || Date.now();
        state.boostZunda = (0, _numbersJs.D)(p.boostZunda || 0);
        state.boostEdamame = (0, _numbersJs.D)(p.boostEdamame || 0);
        state.ascensionMult = Number(p.ascensionMult) || 1;
        state.prestige = p.prestige || {
            speed: 0,
            power: 0,
            cost: 0
        };
        state.maxZunda = (0, _numbersJs.D)(p.maxZunda || 10); // Decimal
        state.eda = p.eda || {
            amount: 0,
            boostBought: 0,
            expBought: 0
        };
        state.soy = p.soy || {
            amount: 0,
            boostUpLv: 0,
            zd8Lv: 0
        };
        state.zundaProgress = p.zundaProgress || 0;
        // 自動化
        state.auto = p.auto || {};
        state.auto.unlocked = p.auto.unlocked || {
            zd: Array(8).fill(false),
            boost: false
        };
        state.auto.enabled = p.auto.enabled || {
            zd: Array(8).fill(false),
            boost: false
        };
        // 高速系
        state.auto.unlocked.zdFast = p.auto.unlocked.zdFast || {
            zdFast: Array(8).fill(false)
        };
        state.auto.unlocked.boostFast = p.auto?.unlocked?.boostFast === true;
        state.auto.unlocked.asc = p.auto.unlocked.asc || false;
        state.auto.unlocked.prest = p.auto.unlocked.prest || false;
        state.auto.unlocked.eda = p.auto.unlocked.eda || false;
        state.auto.unlocked.anco = p.auto.unlocked.anco || false;
        state.auto.enabled.zdFast = p.auto.enabled.zdFast || {
            zdFast: Array(8).fill(false)
        };
        state.auto.enabled.boostFast = !!p.auto?.enabled?.boostFast;
        state.auto.enabled.asc = p.auto.enabled.asc || false;
        state.auto.enabled.prest = p.auto.enabled.prest || false;
        state.auto.enabled.eda = p.auto.enabled.eda || false;
        state.auto.enabled.anco = p.auto.enabled.anco || false;
        state.auto.ascMul = p.auto.ascMul || 4;
        state.auto.enabled.asc = !!p.auto.enabled.asc;
        {
            const oldPrest = p.auto.enabled.prest;
            if (typeof oldPrest === 'object' && oldPrest !== null) state.auto.enabled.prest = {
                speed: !!oldPrest.speed,
                power: !!oldPrest.power,
                cost: !!oldPrest.cost
            };
            else {
                const on = !!oldPrest;
                state.auto.enabled.prest = {
                    speed: on,
                    power: on,
                    cost: on
                };
            }
        }
        // 枝豆アップグレード自動化（旧セーブ互換）
        if (typeof p.auto.enabled.eda === 'object' && p.auto.enabled.eda !== null) state.auto.enabled.eda = {
            boost: !!p.auto.enabled.eda.boost,
            exp: !!p.auto.enabled.eda.exp
        };
        else {
            const on = !!p.auto.enabled.eda;
            state.auto.enabled.eda = {
                boost: on,
                exp: on
            };
        }
        // 大豆アップグレード自動化（新規。旧セーブは全部OFFでスタート）
        if (typeof p.auto.enabled.soy === 'object' && p.auto.enabled.soy !== null) state.auto.enabled.soy = {
            boostUp: !!p.auto.enabled.soy.boostUp,
            zd8: !!p.auto.enabled.soy.zd8
        };
        else state.auto.enabled.soy = {
            boostUp: false,
            zd8: false
        };
        state.auto.enabled.anco = !!p.auto.enabled.anco;
        state.auto.ascMul = p.auto.ascMul ?? 4;
        state.auto.prestMul = {
            speed: (p.auto.prestMul && p.auto.prestMul.speed) ?? "4",
            power: (p.auto.prestMul && p.auto.prestMul.power) ?? "4",
            cost: (p.auto.prestMul && p.auto.prestMul.cost) ?? "4"
        };
        state.auto.unlocked.eda = p.auto.unlocked.eda || false;
        state.auto.unlocked.soy = p.auto.unlocked.soy || false;
        state.autoTabUnlocked = !!p.autoTabUnlocked;
        state.unlocks = p.unlocks || {
            boost: false,
            asc: false,
            prestige: false,
            allMax: false
        };
        const arr = p.tiers || [];
        for(let i = 1; i <= 8; i++)if (arr[i - 1]) {
            tiers[i].bought = (0, _numbersJs.D)(arr[i - 1].bought ?? 0);
            tiers[i].generated = (0, _numbersJs.D)(arr[i - 1].generated ?? 1);
            tiers[i].revealed = !!arr[i - 1].revealed;
        }
        if (state.autoTabUnlocked) document.getElementById("tab-auto").style.display = "block";
        if (state.unlocks?.boost) document.getElementById("boostPanel").style.display = "block";
        if (state.unlocks?.allMax) document.getElementById("allMaxPanel").style.display = "block";
        if (state.unlocks?.asc) document.getElementById("ascPanel").style.display = "block";
        if (state.unlocks?.prestige) document.getElementById("prestigePanel").style.display = "block";
        try {
            edaUnlocked = JSON.parse(localStorage.getItem(EDA_UNLOCK_KEY) || 'false');
        } catch (e) {
            edaUnlocked = false;
        }
        if (p.anko) state.anko = {
            amount: (0, _numbersJs.D)(p.anko.amount || 0),
            dims: Array.from({
                length: 9
            }, (_, i)=>{
                const src = (p.anko.dims || [])[i] || {
                    i,
                    bought: (0, _numbersJs.D)(0),
                    prodPerSec: 1,
                    generated: (0, _numbersJs.D)(1)
                };
                return {
                    i,
                    bought: (0, _numbersJs.D)(src.bought) || (0, _numbersJs.D)(0),
                    prodPerSec: src.prodPerSec || 1,
                    generated: (0, _numbersJs.D)(src.generated) || (0, _numbersJs.D)(1)
                };
            })
        };
        else state.anko = state.anko || {
            amount: (0, _numbersJs.D)(0),
            dims: Array.from({
                length: 9
            }, (_, i)=>({
                    i,
                    bought: (0, _numbersJs.D)(0),
                    prodPerSec: 1,
                    generated: (0, _numbersJs.D)(1)
                })),
            skills: {},
            challenges: Array.from({
                length: 13
            }, ()=>({
                    cleared: false,
                    bestTime: null
                }))
        };
        state.ap = Number(p.ap) || 0;
        state.anconityClears = p.anconityClears || 0;
        state.ankoTabUnlocked = !!p.ankoTabUnlocked;
        state.anconityReady = !!p.anconityReady;
        state.anko.activeChal = state.anko.activeChal || null; // 現在挑戦中のチャレンジ
        state.anko.chalStartMs = state.anko.chalStartMs || 0; // 開始時刻(ms)
        state.anko.chalCounters = state.anko.chalCounters || {
            ascCount: 0,
            totalDimBought: (0, _numbersJs.D)(0),
            perDimOwned: Array(9).fill(0)
        };
        if (state.ankoTabUnlocked) {
            const t = document.getElementById('tab-anko');
            if (t) t.style.display = 'block';
        }
        const apEl = document.getElementById('apAmount');
        if (apEl) apEl.textContent = state.ap.toString();
        const bar = document.getElementById('anconityBar');
        if (bar) bar.style.display = state.anconityReady ? 'block' : 'none';
    } catch (e) {
        console.warn('Load failed', e);
    }
}
const OFFLINE_CAP_SEC = 86400;
function applyOfflineFromLastActive({ showToast }) {
    const now = Date.now();
    const last = state.lastActiveMs ?? state.lastSave ?? now;
    let sec = (now - last) / 1000;
    if (!Number.isFinite(sec) || sec < 0) sec = 0;
    const capped = Math.min(sec, OFFLINE_CAP_SEC);
    // 二重取り防止：ここが超重要
    state.lastActiveMs = now;
    if (capped >= 0.5) {
        applyOfflineProgress(capped); // ← tickStepを回す
        if (showToast) {
            const label = sec > OFFLINE_CAP_SEC ? `\u{30AA}\u{30D5}\u{30E9}\u{30A4}\u{30F3}: 24\u{6642}\u{9593}\u{FF08}\u{4E0A}\u{9650}\u{FF09}` : `\u{30AA}\u{30D5}\u{30E9}\u{30A4}\u{30F3}: ${capped.toFixed(1)}\u{79D2}`;
            flashSaveStatus(label);
        }
    }
}
/***** 3. EFFECTS ************************************************************/ /* ---- スキル効果 ---- */ const EFFECT_BASE = {
    zpsMul: 1,
    zdEffMul: 1,
    zdEffMulFromUnspentAP: false,
    zdCostPowAdd: 0,
    zd8EffMulByAmount: false,
    zpsExpAdd: 0,
    ascensionPowExp: 1,
    zbEffMul: 1,
    zbCostMul: 1,
    edaGetMul: 1,
    edaUpgradeCostMul: 1,
    soyUpgradeCostMul: 1,
    soyGetAdd: 0,
    apMul: 1,
    ad1Mul: 1,
    ad2Mul: 1,
    adMulFromClears: false,
    flags: {
        autoUnlocked: false,
        anconityBreak: false,
        ankoDimsDisabled: false
    },
    tabs: {
        edamame: false,
        automation: false
    },
    startBonuses: {
        anconity: {
            zd1: 0,
            zb: 0,
            cPre: 0,
            zd2to6: 0
        }
    }
};
const EffectProviders = []; // {id, compute: (state) => partialEffect}
function registerEffectProvider(id, compute) {
    EffectProviders.push({
        id,
        compute
    });
}
// あんこ（ツリー）→ 所持スキルを見て集約して返す
registerEffectProvider('anko', (state)=>{
    const own = state.skills?.anko?.owned || {};
    const e = {
        zpsMul: 1,
        zdEffMul: 1,
        zdEffMulFromUnspentAP: false,
        zd8EffMulByAmount: false,
        zdCostPowAdd: 0,
        zpsExpAdd: 0,
        ascensionPowExp: 1,
        zbEffMul: 1,
        edaGetMul: 1,
        soyGetAdd: 0,
        apMul: 1,
        ad1Mul: 1,
        ad2Mul: 1,
        adMulFromClears: false,
        flags: {
            autoUnlocked: false,
            anconityBreak: false
        },
        tabs: {
            edamame: false,
            automation: false
        },
        startBonuses: {
            anconity: {
                zd1: 0,
                zb: 0,
                cPre: 0,
                zd2to6: 0
            }
        }
    };
    if (own.s1) {
        e.flags.autoUnlocked = true;
        e.tabs.edamame = e.tabs.automation = true;
        e.startBonuses.anconity.zd1 = Math.max(e.startBonuses.anconity.zd1, 10);
    }
    if (own.s2_1) e.zpsMul *= 25;
    if (own.s2_2) e.zpsExpAdd += 0.05;
    if (own.s3_1) e.zdEffMulFromUnspentAP = true;
    if (own.s3_2) e.ascensionPowExp *= 1.2;
    if (own.s4) e.apMul *= 2;
    if (own.s5_1) e.startBonuses.anconity.zb += 20;
    if (own.s5_2) e.zbEffMul *= 1.2;
    if (own.s5_3) e.zd8EffMulByAmount = true;
    if (own.s6_1) e.startBonuses.anconity.cPre = 15;
    if (own.s6_2) e.edaGetMul *= 5;
    if (own.s6_3) e.soyGetAdd += 3;
    if (own.s7_1) e.startBonuses.anconity.zd2to6 = 1;
    if (own.s7_2) e.ad1Mul *= 3;
    if (own.s7_3) e.ad2Mul *= 1.5;
    if (own.s8_1) e.flags.anconityBreak = true;
    if (own.s9_1) e.adMulFromClears = true;
    return e;
});
// めたん
/*
registerEffectProvider('metan', (state) => {
    return {
        zpsMul: 1,
        zdEffMul: 1,
        zpsExpAdd: 0,
        ascensionPowExp: 1,
        ipMul: 1,
        flags: { autoUnlocked: false },
        tabs: { edamame: false, automation: false },
        startBonuses: { anconity: { zd1: 0 } },
    };
});
*/ /*
// つむぎ
registerEffectProvider('tsumugi', (state) => {
    return {
        zpsMul: 1,
        zdEffMul: 1,
        zpsExpAdd: 0,
        ascensionPowExp: 1,
        ipMul: 1,
        flags: { autoUnlocked: false },
        tabs: { edamame: false, automation: false },
        startBonuses: { anconity: { zd1: 0 } },
    };
});
*/ // あんこチャレンジによる制約
function challengeEffectsLayer() {
    const e = {
        zpsExpAdd: 0,
        zbCostMul: 1,
        zdEffMul: 1,
        zbEffMul: 1,
        zdCostPowAdd: 0,
        edaUpgradeCostMul: 1,
        soyUpgradeCostMul: 1
    };
    if (!state.anko?.activeChal) return e;
    const idx = state.anko.activeChal;
    const t = ankoChalElapsedSec();
    switch(idx){
        // ac1: ZD2～8=各1個まで（ガード側で設定）、ZPSが1.25乗
        case 1:
            e.zpsExpAdd += 0.25;
            break;
        // ac2: 全ZD効力 1/16、128秒ごとに×2
        case 2:
            {
                const steps = Math.floor(t / 128);
                const mul = 1 / 16 * Math.pow(2, steps);
                e.zdEffMul *= Math.max(mul, 1 / 16); // 下限担保
                break;
            }
        // ac3: アセンションごとに ZPS指数-0.005（下限0.01）
        case 3:
            {
                const dec = 0.005 * (state.anko.chalCounters.ascCount || 0);
                e.zpsExpAdd -= dec; // 最終で下限チェック
                break;
            }
        // ac4: ブースト1つあたり効力-30%
        case 4:
            e.zbEffMul *= 0.7;
            break;
        // ac5: ZD価格が2乗
        case 5:
            e.zdCostPowAdd += 1;
            break;
        // ac6: ZD1〜6しか買えない（ガード側で設定）
        case 6:
            break;
        // ac7: ZDを1買うごとに ZPS指数 -0.005（下限0.01）
        case 7:
            {
                const dec = 0.005 * (toNum(state.anko.chalCounters.totalDimBought) || 0);
                e.zpsExpAdd -= dec;
                break;
            }
        // ac8: ZD1〜7は各1個まで（→ガード側）
        case 8:
            break;
        // ac9: 16秒ごとにブースト価格×1.3
        case 9:
            {
                const steps = Math.floor(t / 16);
                e.zbCostMul = Math.pow(1.3, steps); // コスト式に組み込み
                break;
            }
        // ac10: プレステ禁止（→ガード側）、アセンション効力 3乗
        case 10:
            e.ascensionPowExp = (e.ascensionPowExp || 1) * 3;
            break;
        // ac11: プレステ回数が3の倍数でない時 ZPSを 0.5乗
        case 11:
            if ((state.anko.chalCounters.ascCount || 0) % 3 !== 0) e.zpsExpAdd -= 0.5;
            break;
        // ac12: ブースト購入不可（→ガード側）、枝豆/大豆UPGを安く
        case 12:
            e.edaUpgradeCostMul = (e.edaUpgradeCostMul || 1) * 0.5;
            e.soyUpgradeCostMul = (e.soyUpgradeCostMul || 1) * 0.8;
            break;
        // ac13: あんこディメンション効果を無効化
        case 13:
            e.ankoDimsDisabled = true;
            break;
    }
    return e;
}
function mergeEffects(base, add) {
    const out = JSON.parse(JSON.stringify(base));
    // 掛け算
    out.zpsMul *= add.zpsMul ?? 1;
    out.zdEffMul *= add.zdEffMul ?? 1;
    out.ascensionPowExp *= add.ascensionPowExp ?? 1;
    out.apMul *= add.apMul ?? 1;
    out.zbEffMul *= add.zbEffMul ?? 1;
    out.zbCostMul *= add.zbCostMul ?? 1;
    out.edaGetMul *= add.edaGetMul ?? 1;
    out.ad1Mul *= add.ad1Mul ?? 1;
    out.ad2Mul *= add.ad2Mul ?? 1;
    out.edaUpgradeCostMul = add.edaUpgradeCostMul ?? 1;
    out.soyUpgradeCostMul = add.soyUpgradeCostMul ?? 1;
    // 足し算
    out.zdCostPowAdd += add.zdCostPowAdd ?? 0;
    out.zpsExpAdd += add.zpsExpAdd ?? 0;
    out.soyGetAdd += add.soyGetAdd ?? 0;
    // OR
    out.flags.autoUnlocked ||= add.flags?.autoUnlocked ?? false;
    out.flags.anconityBreak ||= add.flags?.anconityBreak ?? false;
    out.flags.ankoDimsDisabled ||= add.flags?.ankoDimsDisabled ?? false;
    out.tabs.edamame ||= add.tabs?.edamame ?? false;
    out.tabs.automation ||= add.tabs?.automation ?? false;
    out.zd8EffMulByAmount ||= add.zd8EffMulByAmount ?? false;
    out.zdEffMulFromUnspentAP ||= add.zdEffMulFromUnspentAP ?? false;
    out.adMulFromClears ||= add.adMulFromClears ?? false;
    // 開始ボーナス
    const a0 = out.startBonuses.anconity, a1 = add.startBonuses?.anconity || {};
    a0.zd1 = Math.max(a0.zd1 ?? 0, a1.zd1 ?? 0);
    a0.zb += a1.zb ?? 0;
    a0.cPre += a1.cPre ?? 0;
    a0.zd2to6 = Math.max(a0.zd2to6 ?? 0, a1.zd2to6 ?? 0);
    // ZPS指数の下限処理（ac3/ac7）
    out.zpsExpAdd = Math.max(out.zpsExpAdd, -0.99);
    return out;
}
function recomputeAllSkillEffects() {
    let eff = JSON.parse(JSON.stringify(EFFECT_BASE));
    // あんこスキル
    for (const p of EffectProviders){
        // 順番に依存しない寄与だけ返すので、ループ順は任意でOK
        const add = p.compute(state) || {};
        eff = mergeEffects(eff, add);
    }
    // あんこチャレンジ
    const ac = challengeEffectsLayer();
    eff = mergeEffects(eff, ac);
    state.effects = eff;
    applyOneShotUiFlags(eff);
}
function applyOneShotUiFlags(e) {
    // 自動化解放
    if (e.flags.autoUnlocked) {
        // 既にtrueならそのまま
        state.maxZunda = (0, _numbersJs.D)((0, _unlockZundaAmountJs.EDA_UNLOCK));
        checkAutomationUnlocks();
    }
    if (e.tabs.edamame) {
        edaUnlocked = true;
        setEdaButtonState();
    }
}
function getEffects() {
    return state.effects || EFFECT_BASE; // 毎回これ経由で読む
}
/***** 4. MATH (PURE) *******************************************************/ /* ---- コスト基礎 ---- */ const baseCosts = [
    0,
    10
];
for(let i = 2; i <= 8; i++){
    const prev = baseCosts[i - 1];
    let mult = 10;
    if (i === 3) mult = 1000;
    if (i === 4) mult = 10000;
    if (i === 5) mult = 100000;
    if (i === 6) mult = 1000000;
    if (i === 7) mult = 10000000;
    if (i === 8) mult = 100000000;
    baseCosts[i] = prev * mult;
}
/* Prestige計算 */ const prestigeSystem = (0, _prestigeSystemJs.createPrestigeSystem)({
    toNum,
    log10Safe
});
const prestigeRawLevelFromZ = prestigeSystem.prestigeRawLevelFromZ;
// スピードプレステージによる倍率取得
function getPrestigeSpeedMult() {
    return Math.pow(3, state.prestige.speed || 0);
}
function getPrestigeCostBase() {
    return 1.3;
}
// パワープレステージによる係数・指数取得
function getPowerMult() {
    const lv = state.prestige?.power || 0;
    return 1 + Math.min(lv, 20) * 0.1; // lv20で5.0倍、以降は増えない
}
function getPowerExp() {
    const lv = state.prestige?.power || 0;
    return Math.log10(10 + lv);
}
function getAscEffective() {
    return Math.max(state.ascensionMult, 1);
}
/* ディメコスト緩和 */ const coefFor = (i)=>{
    const lv = state.prestige.cost || 0;
    const innerExp = Math.max(0.25, 1.15 - lv * 0.015);
    return getPrestigeCostBase() * Math.pow(1.25, Math.pow(i - 1, innerExp));
};
function refreshCostMultipliers() {
    for(let i = 1; i <= 8; i++)tiers[i].costMul = coefFor(i);
}
// ティア(ずんだディメンション)初期化
for(let i = 1; i <= 8; i++)tiers[i] = {
    i,
    baseCost: baseCosts[i],
    costMul: coefFor(i),
    bought: (0, _numbersJs.D)(0),
    generated: (0, _numbersJs.D)(1),
    prodPerSec: i >= 2 ? 1 : 0,
    baseZps: i === 1 ? 1 : 0,
    revealed: false
};
// 計算:ZD8専用のコスト計算式
function getZd8EffectiveBought(rawB) {
    const WALL_START = 70;
    const EXTRA_EXP = 1.25;
    const b = (0, _numbersJs.D)(rawB || 0);
    if (b.lte(WALL_START)) return b;
    const over = b.sub(WALL_START);
    return over.pow(EXTRA_EXP).add(WALL_START);
}
// ZDコスト計算式
function costAt(t) {
    const ef = (typeof getEffects === 'function' ? getEffects() : {}) || {};
    const p = (0, _numbersJs.D)(1).add(ef.zdCostPowAdd || 0); // p = 1 + zdCostPowAdd
    const a = (0, _numbersJs.D)(t.baseCost);
    const r = (0, _numbersJs.D)(t.costMul);
    let b = (0, _numbersJs.D)(t.bought || (0, _numbersJs.D)(0));
    if (t.i === 8) b = getZd8EffectiveBought(b);
    return a.mul(r.pow(b)).pow(p);
}
// ZDまとめ買いコスト計算式
function totalCost(t, n) {
    if (n <= 0) return (0, _numbersJs.D)(0);
    const ef = (typeof getEffects === 'function' ? getEffects() : {}) || {};
    const p = (0, _numbersJs.D)(1).add(ef.zdCostPowAdd || 0); // p = 1 + zdCostPowAdd
    const a = (0, _numbersJs.D)(t.baseCost);
    const r = (0, _numbersJs.D)(t.costMul);
    const baseBought = (0, _numbersJs.D)(t.bought || (0, _numbersJs.D)(0));
    // ZD8 以外は今まで通り等比数列でOK
    if (t.i !== 8) {
        const aPow = a.pow(p);
        const rPow = r.pow(p);
        const first = aPow.mul(rPow.pow(baseBought));
        if (rPow.eq(1)) return first.mul(n);
        else return first.mul(rPow.pow(n).sub(1)).div(rPow.sub(1));
    }
    // ZD8 だけは1個ずつコストを積み上げる
    let sum = (0, _numbersJs.D)(0);
    for(let k = 0; k < n; k++){
        const rawB = baseBought.add(k);
        const effB = getZd8EffectiveBought(rawB);
        const cost = a.mul(r.pow(effB)).pow(p);
        sum = sum.add(cost);
    }
    return sum;
}
function maxAffordable(t) {
    let lo = 0, hi = 1;
    while(totalCost(t, hi).lte(state.zunda))hi *= 2;
    while(lo < hi){
        const mid = Math.ceil((lo + hi) / 2);
        if (totalCost(t, mid).lte(state.zunda)) lo = mid;
        else hi = mid - 1;
    }
    return lo;
}
/* ---- Boost ---- */ const BOOST_BASE_COST = (0, _numbersJs.D)(10), BOOST_STEP = (0, _numbersJs.D)(10), BOOST_PER_LV = 0.0825;
// 計算:ブースト1個あたりの倍率
function getBoostPerItem() {
    const upPer = BOOST_PER_LV * getEffects().zbEffMul;
    const base = (0, _numbersJs.D)(1).plus(upPer); // 1 + 0.0825*1.2
    const soyUp = (0, _numbersJs.D)(1.01).pow(state.soy.boostUpLv || 0); // 大豆による強化
    return base.mul(soyUp); // Decimalを返す
}
function boostTotal() {
    return state.boostZunda.add(state.boostEdamame).add(state.boostOther);
}
function getBoostMult() {
    const per = (0, _numbersJs.D)(getBoostPerItem());
    const total = (0, _numbersJs.D)(boostTotal());
    return per.pow(total); // Decimal
}
const zundaBoostCost = ()=>BOOST_BASE_COST.mul(BOOST_STEP.pow(state.boostZunda));
function zundaBoostTotal(n) {
    if (n <= 0) return (0, _numbersJs.D)(0);
    const a = zundaBoostCost();
    const r = BOOST_STEP;
    if (r.eq(1)) return a.mul(n);
    return a.mul(r.pow(n).sub(1)).div(r.sub(1));
}
function maxBoostAffordableZunda() {
    if (!canUseBoost()) return 0;
    let lo = 0, hi = 1;
    while(zundaBoostTotal(hi).lte(state.zunda))hi *= 2;
    while(lo < hi){
        const mid = Math.ceil((lo + hi) / 2);
        if (zundaBoostTotal(mid).lte(state.zunda)) lo = mid;
        else hi = mid - 1;
    }
    return lo;
}
/* ---- Ascension ---- */ // 計算:ソフトキャップ
function softcapMul(x, T, gamma) {
    if (x <= T) return x;
    const rt = T * Math.pow(x / T, gamma); // 0 < gamma < 1 で緩やかに
    if (rt <= T) return T;
    return rt;
}
// 計算:アセンション実効倍率
function ascNewMultFrom(z) {
    if (z.lt((0, _numbersJs.D)('1e16'))) return 1;
    const lg = z.log10();
    const raw = Math.pow(Math.pow(getPowerMult() * Math.pow(4, 1 + (lg - 16) / 16), getEffects().ascensionPowExp), getPowerExp());
    // ── ここからソフトキャップ ──
    const T1 = 2000000, G1 = 0.7; // 200万超でやや緩め
    const T2 = 100000000, G2 = 0.35; // 1億超でさらに緩く
    let m = softcapMul(raw, T1, G1);
    m = softcapMul(m, T2, G2);
    if (state?.anko?.activeChal) {
        if (state.anko.activeChal == 10) m = softcapMul(raw, T1, 0.5);
    }
    return m;
}
/* ---- 枝豆／大豆（基礎はNumberのまま。必要ならDecimal化拡張できる） ---- */ const EDA_BOOST_BASE = 10, EDA_BOOST_STEP = 1.25;
const EDA_EXP_BASE = 1000, EDA_EXP_STEP = 2.25, EDA_EXP_PER = 0.01;
function edaBoostCost() {
    return Math.ceil(EDA_BOOST_BASE * getEffects().edaUpgradeCostMul * Math.pow(Math.max(EDA_BOOST_STEP * getEffects().edaUpgradeCostMul, 1.125), state.eda.boostBought || 0));
}
function edaBoostTotal(n) {
    if (n <= 0) return 0;
    const a = EDA_BOOST_BASE * getEffects().edaUpgradeCostMul * Math.pow(Math.max(EDA_BOOST_STEP * getEffects().edaUpgradeCostMul, 1.125), state.eda.boostBought || 0), r = Math.max(EDA_BOOST_STEP * getEffects().edaUpgradeCostMul, 1.125);
    return Math.ceil(r === 1 ? a * n : a * (Math.pow(r, n) - 1) / (r - 1));
}
function edaExpCost() {
    return Math.ceil(EDA_EXP_BASE * getEffects().edaUpgradeCostMul * Math.pow(EDA_EXP_STEP * getEffects().edaUpgradeCostMul, state.eda.expBought || 0));
}
function edaExpTotal(n) {
    if (n <= 0) return 0;
    const a = EDA_EXP_BASE * getEffects().edaUpgradeCostMul * Math.pow(EDA_EXP_STEP * getEffects().edaUpgradeCostMul, state.eda.expBought || 0), r = EDA_EXP_STEP * getEffects().edaUpgradeCostMul;
    return Math.ceil(r === 1 ? a * n : a * (Math.pow(r, n) - 1) / (r - 1));
}
function maxAffordableByEdamame(totalFn) {
    let lo = 0, hi = 1;
    while(totalFn(hi) <= state.eda.amount)hi *= 2;
    while(lo < hi){
        const mid = Math.ceil((lo + hi) / 2);
        if (totalFn(mid) <= state.eda.amount) lo = mid;
        else hi = mid - 1;
    }
    return lo;
}
/* 大豆 */ const SOY_K = 0.01, SOY_N0 = 600, SOY_H = 250, SOY_P = 1.10;
function calcSoyPS() {
    // ZD8 の購入数
    const z = tiers?.[8]?.bought || (0, _numbersJs.D)(0);
    // 立ち上がり：80あたりからグッと伸び、以後は緩やか
    const k = 0.04; // 立ち上がりの鋭さ
    const beta = 0.8; // 伸びの緩さ（全体のルートっぽい圧縮）
    const core = Math.log(1 + Math.exp(k * (z - 80))) / Math.log(2); // log2(1+exp(…))
    const sps = Math.pow(core, beta) + getEffects().soyGetAdd;
    return Number.isFinite(sps) && sps > 0 ? sps : 0;
}
const SOY_BOOSTUP_BASE = 200, SOY_BOOSTUP_STEP = 1.75;
const SOY_ZD8_BASE = 150, SOY_ZD8_STEP = 1.5;
function soyBoostUpCost() {
    return Math.ceil(SOY_BOOSTUP_BASE * getEffects().soyUpgradeCostMul * Math.pow(SOY_BOOSTUP_STEP * getEffects().soyUpgradeCostMul, state.soy.boostUpLv || 0));
}
function soyBoostUpTotal(n) {
    if (n <= 0) return 0;
    const a = SOY_BOOSTUP_BASE * getEffects().soyUpgradeCostMul * Math.pow(SOY_BOOSTUP_STEP * getEffects().soyUpgradeCostMul, state.soy.boostUpLv || 0), r = SOY_BOOSTUP_STEP * getEffects().soyUpgradeCostMul;
    return Math.ceil(r === 1 ? a * n : a * (Math.pow(r, n) - 1) / (r - 1));
}
function getZdMultFromUnspentAp() {
    if (getEffects().zdEffMulFromUnspentAP) {
        const ap = state.ap || 0;
        if (ap <= 0) return 1;
        // 1 + 8.3 × log10( log10(AP + 10) + 1 )
        const inner = Math.log10(ap + 10);
        const outer = Math.log10(inner + 1);
        const mult = 4 + 8.3 * outer;
        return mult;
    } else return 1;
}
function soyZd8Cost() {
    const mul = Math.max(SOY_ZD8_STEP * getEffects().soyUpgradeCostMul, 1.05);
    return Math.ceil(SOY_ZD8_BASE * getEffects().soyUpgradeCostMul * Math.pow(mul, state.soy.zd8Lv || 0));
}
function soyZd8Total(n) {
    if (n <= 0) return 0;
    const mul = Math.max(SOY_ZD8_STEP * getEffects().soyUpgradeCostMul, 1.05);
    const a = SOY_ZD8_BASE * getEffects().soyUpgradeCostMul * Math.pow(mul, state.soy.zd8Lv || 0);
    return Math.ceil(mul === 1 ? a * n : a * (Math.pow(mul, n) - 1) / (mul - 1));
}
function getZd8Mult() {
    let zd8EffMulByAm = 1;
    if (getEffects().zd8EffMulByAmount) zd8EffMulByAm = 1 + tiers[8].bought.div((0, _numbersJs.D)(25));
    return Math.pow(3, state.soy.zd8Lv || 0) * zd8EffMulByAm;
}
/* ---- ZPS ---- */ // 計算:基礎ZPS
function baseZpsOnly() {
    const ankoMult = getAnkoZundaMult();
    const b = (0, _numbersJs.D)(tiers[1].baseZps).mul(tiers[1].bought).mul(tiers[1].generated).mul(getBoostMult()) // Decimal
    .mul(getAscEffective()) // Number
    .mul(getPrestigeSpeedMult()) // Number
    .mul(state.effects.zpsMul).mul(state.effects.zdEffMul).mul(getZdMultFromUnspentAp()).mul(ankoMult).mul(getAnkoDimClearMult());
    return b; // Decimal
}
// 計算:ZPS指数
function getExpAdd() {
    const exp = (0, _numbersJs.D)(0).add((state.eda.expBought || 0) * EDA_EXP_PER).add(getEffects().zpsExpAdd);
    return exp;
}
// 計算:実効ZPS
function effectiveZps() {
    const base = baseZpsOnly();
    if (base.lte(0)) return (0, _numbersJs.D)(0);
    const baseExp = (0, _numbersJs.D)(1); // 基本指数
    const addExp = getExpAdd(); // ±調整値（通常0）
    const exp = baseExp.add(addExp).max(0.01);
    return base.pow(exp);
}
function getAnkoDimClearMult() {
    if (getEffects().adMulFromClears == false) return 1;
    const clears = state.ankonityClears || 0;
    if (clears <= 0) return 1;
    const inner = Math.log10(clears + 1);
    const mult = 1 + 0.1858961300583371 * Math.pow(inner, 4);
    return mult;
}
function getAnkoZundaMult() {
    // 全ずんだディメンションの効率に “あんこ量^0.5” を掛ける（最低1）
    const a = state.anko?.amount instanceof (0, _numbersJs.Decimal) ? state.anko.amount : (0, _numbersJs.D)(state.anko?.amount || 0);
    if (a.lte(0)) return 1;
    const m = a.pow(0.5); // Decimal
    const n = toNum(m);
    return Number.isFinite(n) ? Math.max(1, n) : 1;
}
function adCostAt(i) {
    const d = state.anko.dims[i];
    return (0, _ankoDimsJs.calcAdCost)(i, d?.bought);
}
/***** 5. ACTIONS (SIDE EFFECTS) ********************************************/ function flashSaveStatus(t) {
    const e = el('saveStatus');
    if (!e) return;
    e.textContent = t;
    e.style.opacity = '1';
    clearTimeout(flashSaveStatus._t);
    flashSaveStatus._t = setTimeout(()=>{
        e.style.opacity = '.8';
    }, 1200);
}
// ずんだディメンション購入可能判定(ac1,8,6)
function canBuyZundaDimension(i) {
    let ok = true;
    if (isChal(1) && i >= 2 && i <= 8) {
        if ((state.anko.chalCounters.perDimOwned[i] || 0) >= 1) ok = false;
    }
    if (isChal(8) && i >= 1 && i <= 7) {
        if ((state.anko.chalCounters.perDimOwned[i] || 0) >= 1) ok = false;
    }
    if (isChal(6) && i > 6) ok = false; // ac6: 1〜6のみ
    return ok;
}
// ずんだディメンション購入時のカウント
function onBuyZundaDimension(i, count = 1) {
    // 実際の購入成功後に呼ばれる
    state.anko.chalCounters.perDimOwned[i] = (state.anko.chalCounters.perDimOwned[i] || 0) + count;
    state.anko.chalCounters.totalDimBought = (state.anko.chalCounters.totalDimBought || (0, _numbersJs.D)(0)).add(count); // ac7
    recomputeAllSkillEffects();
}
// ずんだディメンション購入
function buy(t, n) {
    // チャレンジの内容に応じて購入数をクランプ
    let i = t.i | 0, owned = state.anko.chalCounters.perDimOwned[i] || 0;
    if (isChal(1) && i >= 2 && i <= 8) n = Math.min(n, Math.max(0, 1 - owned));
    if (isChal(8) && i >= 1 && i <= 7) n = Math.min(n, Math.max(0, 1 - owned));
    if (isChal(6) && i > 6) return false;
    if (state.anconityReady) return false;
    const c = totalCost(t, n);
    if (c.gt(state.zunda)) return false;
    if (!canBuyZundaDimension(t.i)) return false;
    state.zunda = state.zunda.sub(c);
    t.bought = (0, _numbersJs.D)(t.bought).add(n);
    return true;
}
/* 一周で何も買えなくなるまで、ブースト→ZD8..1 を1個ずつ買い続ける */ function buyAllMax() {
    let didBuy = false;
    // 無限ループ防止の上限（理論上は早く止まる）
    for(let guard = 0; guard < 10000; guard++){
        const boughtThisPass = buyRoundRobinOnce();
        if (!boughtThisPass) break;
        didBuy = true;
    }
    if (didBuy) updateUI();
}
/* 1個購入ごとに枝豆を加算（アンロック後のみ） */ function incEdamame(n) {
    if (!edaUnlocked || !n) return;
    const add = typeof (0, _numbersJs.D) === 'function' ? (0, _numbersJs.D)(n) : n;
    if (state.eda && state.eda.amount && typeof state.eda.amount.add === 'function') state.eda.amount = state.eda.amount.add(add);
    else state.eda.amount += n * (getEffects().edaGetMul ?? 1);
}
/* ブースト → ZD8 → … → ZD1 の順で 1個ずつだけ買う。買えたら true を返す */ function buyRoundRobinOnce() {
    // まずブーストを 1個（解禁＆資金が足りれば）
    if (typeof maxBoostAffordableZunda === 'function' && typeof buyBoostMany === 'function' && typeof canUseBoost === 'function') {
        if (canUseBoost() && canBuyBoost()) {
            const m = maxBoostAffordableZunda();
            if (m >= 1) {
                buyBoostMany(1);
                return true;
            }
        }
    }
    // 次に ZD8 → … → ZD1 を 1個だけ買う
    for(let i = 8; i >= 1; i--){
        const t = tiers[i];
        if (!t) continue;
        // 1個だけ試し買い。成功したら枝豆+1（アンロック時）
        if (buy(t, 1)) {
            incEdamame(1);
            onBuyZundaDimension(i, 1);
            return true;
        }
    }
    return false;
}
// 自動アセンションの実行倍率取得
function getAutoAscMul() {
    const raw = state.auto.ascMul ?? "1";
    try {
        return (0, _numbersJs.D)(raw); // 1e10 → 正しく 1e10 として解釈
    } catch  {
        return (0, _numbersJs.D)(1); // fallback
    }
}
// アセンション自動実行
function maybeAutoAscend() {
    if (!state.auto?.unlocked?.asc) return false;
    if (!state.auto?.enabled?.asc) return false;
    if (!canAscend()) return false;
    const mul = getAutoAscMul(); // 入力欄の指定倍率（Decimal）
    const m = mul.lt(1) ? (0, _numbersJs.D)(1) : mul; // 念のため1未満は1に丸め
    const nowRaw = Math.max(state.ascensionMult, 1); // 現在のアセンション倍率
    const nextRaw = ascNewMultFrom((0, _numbersJs.Decimal).max(state.zunda, (0, _numbersJs.D)(1))); // 実行後の倍率
    const nowD = (0, _numbersJs.D)(nowRaw);
    const nextD = (0, _numbersJs.D)(nextRaw);
    // 実行後倍率 >= 現在倍率 × 指定倍率 になったら実行
    if (nextD.gte(nowD.mul(m))) {
        doAscend();
        return true;
    }
    return false;
}
// プレステージ自動実行用：指定レベル差の取得
function getAutoPrestDelta(which) {
    const FALLBACK = 4;
    if (!state.auto || !state.auto.prestMul) return FALLBACK;
    const raw = state.auto.prestMul[which];
    if (raw == null || raw === "") return FALLBACK;
    if (typeof raw === "number") {
        const n = Math.floor(raw);
        return n >= 1 ? n : FALLBACK;
    }
    const n = Number(raw);
    if (!Number.isFinite(n) || n < 1) return FALLBACK;
    return Math.floor(n);
}
// プレステージ自動実行
function maybeAutoPrestige() {
    if (!state.auto?.unlocked?.prest) return false;
    if (!canDoPrestige()) return false;
    if (!state.zunda.gte((0, _unlockZundaAmountJs.PRESTIGE_UNLOCK))) return false;
    // 今のずんだ量から「到達可能なプレステージレベル」を計算
    const calc = prestigeRawLevelFromZ(state.zunda);
    if (!(calc > 0)) return false;
    const types = [
        'speed',
        'power',
        'cost'
    ];
    let bestType = null;
    let bestTarget = Infinity;
    for (const key of types){
        // 自動化がONじゃないものはスキップ
        if (!state.auto?.enabled?.prest?.[key]) continue;
        const cur = state.prestige?.[key] || 0; // 現在レベル
        const delta = getAutoPrestDelta(key); // UI で指定したレベル差
        if (delta <= 0) continue;
        const target = cur + delta; // 目標レベル
        // 到達可能かつ、目標レベルが一番低いものを採用
        if (calc >= target && target < bestTarget) {
            bestTarget = target;
            bestType = key;
        }
    }
    if (bestType) {
        doPrestige(bestType);
        return true;
    }
    return false;
}
// 低速自動購入(8秒に一回)
function automationTick() {
    if (state.anconityReady) return; // 停止中は何もしない
    if (state.auto.enabled.boost && state.auto.unlocked.boost && !state.auto?.unlocked?.boostFast) {
        const m = maxBoostAffordableZunda();
        if (m > 0 && canBuyBoost()) buyBoostMany(m);
    }
    for(let i = 1; i <= 8; i++)if (state.auto.enabled.zd[i - 1] && state.auto.unlocked.zd[i - 1] && !state.auto.unlocked.zdFast[i - 1]) {
        const n = maxAffordable(tiers[i]);
        if (n > 0) {
            if (buy(tiers[i], n)) {
                onBuyZundaDimension(i, n);
                if (edaUnlocked) state.eda.amount += n * (getEffects().edaGetMul ?? 1);
            }
        }
    }
    updateUI();
}
// 高速自動購入
function runFastAutomation() {
    // 1. ブースト：高速ONなら毎フレームMax購入
    if (state.auto.unlocked.boost && state.auto.unlocked.boostFast && state.auto.enabled.boostFast) {
        const m = maxBoostAffordableZunda();
        if (m > 0 && canBuyBoost()) buyBoostMany(m);
    }
    // 2. ZD1..8：高速ONのものは毎フレームMax購入
    for(let i = 1; i <= 8; i++){
        if (!state.auto.unlocked.zd[i - 1]) continue; // そもそも未解禁なら対象外
        if (!state.auto.unlocked.zdFast[i - 1]) continue; // 高速未解禁なら対象外
        if (!state.auto.enabled.zdFast[i - 1]) continue; // 高速スイッチOFFなら対象外
        const n = maxAffordable(tiers[i]);
        if (n > 0) {
            if (buy(tiers[i], n)) {
                onBuyZundaDimension(i, n);
                if (edaUnlocked) state.eda.amount += n * (getEffects().edaGetMul ?? 1);
            }
        }
    }
    // 3. プレステージ（スピード/パワー/コストの中で目標レベルが一番低いものを優先）
    if (maybeAutoPrestige()) return;
    // 4. アセンション（現在倍率 × 指定倍率 を超えたら）
    if (maybeAutoAscend()) return;
}
// ずんだブースト購入可能判定(ac12)
function canBuyBoost() {
    if (isChal(12)) return false;
    return true;
}
// ずんだプレステージ購入可能判定(ac10)
function canDoPrestige() {
    if (isChal(10)) return false;
    return true;
}
// アセンション実行
function doAscend() {
    if (!canAscend()) {
        alert("\u30A2\u30BB\u30F3\u30B7\u30E7\u30F3\u306E\u89E3\u7981\u6761\u4EF6\u3092\u6E80\u305F\u3057\u3066\u3044\u307E\u305B\u3093\u3002\uFF08\u5FC5\u8981\uFF1A\u305A\u3093\u3060 \u2265 1e16\uFF09");
        return;
    }
    const nextMult = ascNewMultFrom(state.zunda);
    if (nextMult <= state.ascensionMult) {
        alert("\u73FE\u5728\u306E\u30A2\u30BB\u30F3\u30B7\u30E7\u30F3\u500D\u7387\u4EE5\u4E0B\u306E\u305F\u3081\u3001\u5B9F\u884C\u3067\u304D\u307E\u305B\u3093\u3002");
        return;
    }
    state.ascensionMult = nextMult;
    state.zunda = (0, _numbersJs.D)(10);
    state.boostZunda = (0, _numbersJs.D)(0);
    for(let i = 1; i <= 8; i++){
        tiers[i].bought = (0, _numbersJs.D)(0);
        tiers[i].generated = (0, _numbersJs.D)(1);
        if (i >= 2) tiers[i].revealed = false;
    }
    for(let i = 2; i <= 8; i++){
        const row = el(`row-zd${i}`);
        if (row) row.style.display = "none";
    }
    // あんこチャレンジ用
    state.anko.chalCounters.ascCount = (state.anko.chalCounters.ascCount || 0) + 1;
    for(let i = 1; i <= 8; i++)state.anko.chalCounters.perDimOwned[i] = 0;
    if (isChal(5)) state.zunda = (0, _numbersJs.D)(100);
    recomputeAllSkillEffects();
    refreshCostMultipliers();
    markPrestigeDirty();
    updateUI();
    save();
}
// プレステージ実行
function doPrestige(which) {
    if (!canDoPrestige()) return;
    const cur = state.prestige[which] || 0;
    const calc = prestigeRawLevelFromZ(state.zunda);
    if (!(calc > cur && state.zunda.gte((0, _unlockZundaAmountJs.PRESTIGE_UNLOCK)))) return false;
    state.prestige[which] = calc;
    state.zunda = (0, _numbersJs.D)(10);
    state.boostZunda = (0, _numbersJs.D)(0);
    state.ascensionMult = 1;
    for(let i = 1; i <= 8; i++){
        tiers[i].bought = (0, _numbersJs.D)(0);
        tiers[i].generated = (0, _numbersJs.D)(1);
        if (i >= 2) tiers[i].revealed = false;
    }
    refreshCostMultipliers();
    for(let i = 2; i <= 8; i++){
        const row = el(`row-zd${i}`);
        if (row) row.style.display = "none";
    }
    // あんこチャレンジ用
    for(let i = 1; i <= 8; i++)state.anko.chalCounters.perDimOwned[i] = 0;
    if (isChal(5)) state.zunda = (0, _numbersJs.D)(100);
    recomputeAllSkillEffects();
    markPrestigeDirty();
    updateUI();
    save();
    return true;
}
/* ---- Boost ---- */ // ブースト解禁済みか
const canUseBoost = ()=>state.zunda.gte((0, _unlockZundaAmountJs.BOOST_UNLOCK));
// ブースト購入
function tryBuyBoost() {
    if (!canBuyBoost()) return false;
    if (state.anconityReady) return false;
    if (!canUseBoost()) {
        alert("\u307E\u3060\u30D6\u30FC\u30B9\u30C8\u306F\u89E3\u7981\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\uFF08\u5FC5\u8981\uFF1A\u305A\u3093\u3060 \u2265 1e10\uFF09");
        return;
    }
    const cost = zundaBoostCost();
    if (state.zunda.lt(cost)) {
        alert("\u305A\u3093\u3060\u304C\u8DB3\u308A\u307E\u305B\u3093\uFF01");
        return;
    }
    state.zunda = state.zunda.sub(cost);
    state.boostZunda = state.boostZunda.add(1);
    updateUI();
}
// ブースト最大購入
function buyBoostMany(n) {
    if (state.anconityReady) return false;
    if (n <= 0 || !canUseBoost()) return false;
    const cost = zundaBoostTotal(n);
    if (state.zunda.lt(cost)) return false;
    state.zunda = state.zunda.sub(cost);
    state.boostZunda = state.boostZunda.add(n);
    updateUI();
    return true;
}
/* ---- 枝豆/大豆 解禁監視 ---- */ function checkEdaSubtabProgress() {
    if (!edaUnlocked && !edaHintShown && state.zunda.gte('1e100')) {
        edaHintShown = true;
        setEdaButtonState();
    }
    if (!edaUnlocked && state.zunda.gte((0, _unlockZundaAmountJs.EDA_UNLOCK))) {
        edaUnlocked = true;
        try {
            localStorage.setItem(EDA_UNLOCK_KEY, JSON.stringify(true));
        } catch (e) {}
        setEdaButtonState();
        const vz = document.getElementById('z-sub-zd');
        const ve = document.getElementById('z-sub-eda');
        if (vz) vz.classList.add('active');
        if (ve) ve.classList.remove('active');
    }
}
// 進行状況監視
function evaluateZundaProgress() {
    if (!Number.isFinite(state.zundaProgress)) state.zundaProgress = 0;
    const oldP = state.zundaProgress;
    let best = state.zundaProgress;
    if (state.zunda.gte((0, _numbersJs.D)('0'))) best = Math.max(best, 1);
    if (state.zunda.lte((0, _numbersJs.D)('1'))) best = Math.max(best, 2);
    if (state.zunda.gte((0, _numbersJs.D)('100'))) best = Math.max(best, 3);
    if ((0, _numbersJs.D)(tiers[2].bought).gte((0, _numbersJs.D)('1'))) best = Math.max(best, 4);
    if (state.zunda.gte((0, _numbersJs.D)('1e9'))) best = Math.max(best, 5);
    if (state.zunda.gte((0, _numbersJs.D)((0, _unlockZundaAmountJs.BOOST_UNLOCK)))) best = Math.max(best, 6);
    if (state.zunda.gte((0, _numbersJs.D)((0, _unlockZundaAmountJs.ASC_UNLOCK)))) best = Math.max(best, 7);
    if ((state.ascensionMult ?? 1) > 1) best = Math.max(best, 8);
    if (state.zunda.gte((0, _numbersJs.D)('1e16')) && (state.ascensionMult ?? 1) > 1) best = Math.max(best, 9);
    if (state.zunda.gte((0, _numbersJs.D)('1e35'))) best = Math.max(best, 10);
    if (state.zunda.gte((0, _numbersJs.D)((0, _unlockZundaAmountJs.PRESTIGE_UNLOCK)))) best = Math.max(best, 11);
    if (best == 11 && state.zunda.lte((0, _numbersJs.D)('20')) && (state.prestige.power > 0 || state.prestige.cost > 0)) best = Math.max(best, 12);
    if ((best == 11 || best == 12) && state.prestige.speed > 0) best = Math.max(best, 13);
    if ((best == 12 || best == 13) && state.zunda.gte((0, _numbersJs.D)('1e9'))) best = Math.max(best, 14);
    if (best > 11 && state.zunda.gte((0, _numbersJs.D)('1e68'))) best = Math.max(best, 15);
    if (best == 15 && state.zunda.gte((0, _numbersJs.D)('1e75') || state.zunda.lte((0, _numbersJs.D)('100')))) best = Math.max(best, 16);
    if (state.zunda.gte((0, _numbersJs.D)((0, _unlockZundaAmountJs.EDA_UNLOCK)))) best = Math.max(best, 17);
    if (best == 17 && state.zunda.gte((0, _numbersJs.D)('1e170') || state.zunda.lte((0, _numbersJs.D)('100')))) best = Math.max(best, 18);
    if (state.zunda.gte((0, _numbersJs.D)('1e200'))) best = Math.max(best, 19);
    if (best == 19 && state.zunda.lte((0, _numbersJs.D)('100'))) best = Math.max(best, 20);
    if (state.zunda.gte((0, _numbersJs.D)('1e250'))) best = Math.max(best, 21);
    if (best == 21 && state.zunda.lte((0, _numbersJs.D)('100'))) best = Math.max(best, 22);
    if (state.zunda.gte((0, _numbersJs.D)('1e275'))) best = Math.max(best, 23);
    if (best == 23 && state.zunda.lte((0, _numbersJs.D)('100'))) best = Math.max(best, 24);
    if (state.zunda.gte((0, _numbersJs.D)('1e300'))) best = Math.max(best, 25);
    if (best == 25 && state.zunda.lte((0, _numbersJs.D)('100'))) best = Math.max(best, 26);
    if (state.anconityReady) best = Math.max(best, 27);
    if (best == 27 && state.zunda.lte((0, _numbersJs.D)('100'))) best = Math.max(best, 28);
    if (state.anconityClears > 0) best = Math.max(best, 29);
    if (best == 29 && state.zunda.gt((0, _numbersJs.D)('10')) || state.anconityClears > 1) best = Math.max(best, 30);
    if (best != oldP) {
        state.zundaProgress = best;
        Bubble.enqueueTutorialForProgress(best);
        // 進行度アップ時は即表示
        Bubble.showNextZundaLine();
    }
}
// アンコニティ待機状態にする
function setAnconityReady(on) {
    state.anconityReady = !!on;
    const bar = document.getElementById('anconityBar');
    if (bar) bar.style.display = on ? 'block' : 'none';
}
// アンコニティ可能か判断
function checkAnconity() {
    // 既に準備完了なら上限で固定
    if (state.anconityReady) {
        state.zunda = (0, _numbersJs.Decimal).min(state.zunda, (0, _numbersJs.INF));
        return;
    }
    // 閾値到達でフラグON＋固定
    if (state.zunda.gte((0, _numbersJs.INF))) {
        state.zunda = (0, _numbersJs.INF);
        setAnconityReady(true);
    }
}
const ANKO_SHAKE_MS = 800; // 震え終わり
const ANKO_PARTICLE_MS = 900; // パーティクル寿命
// アンコニティ時のパーティクル演出
function ankoShakeAndParticles(btn, onDone) {
    if (!btn) return;
    btn.classList.remove('anko-shake');
    btn.offsetWidth;
    btn.classList.add('anko-shake');
    setTimeout(()=>{
        // 茶系＋金系パレット
        const colors = [
            '#8c5c33',
            '#b58863',
            '#e0c097',
            '#fff2d8',
            '#ffddbb',
            '#ffd7a3',
            '#ffcf7f'
        ];
        const N = 120; // パーティクル数増量
        const spread = 220; // 飛び散る半径（以前は約60）
        const heightBoost = 0; // 上方向への飛距離強化
        for(let i = 0; i < N; i++){
            const s = document.createElement('span');
            s.className = 'anko-particle';
            s.style.background = colors[i % colors.length];
            // ランダムな方向に散らばる
            const angle = Math.random() * Math.PI * 2;
            const r = spread * (0.5 + Math.random() * 0.5);
            const dx = Math.cos(angle) * r + (Math.random() * 40 - 20);
            const dy = Math.sin(angle) * r - heightBoost * Math.random();
            s.style.setProperty('--dx', dx + 'px');
            s.style.setProperty('--dy', dy + 'px');
            s.style.left = '50%';
            s.style.top = '50%';
            s.style.transform = 'translate(-50%,-50%)';
            btn.appendChild(s);
            setTimeout(()=>s.remove(), 1300);
        }
        // パーティクルが消えた後に実行
        setTimeout(()=>{
            if (onDone) onDone();
        }, 1100);
    }, 800); // 震え後
}
// アンコニティ時にもろもろをリセット
function applyAnconityResetLocks() {
    // ずんだ系の到達値をリセット
    state.maxZunda = (0, _numbersJs.D)((0, _unlockZundaAmountJs.EDA_UNLOCK));
    if (!getEffects().tabs.automation) // ── 自動化を再ロック ──
    {
        if (state.auto?.unlocked) {
            state.auto.unlocked.boost = false;
            state.auto.unlocked.zd = Array(8).fill(false);
        }
    }
    if (!getEffects().tabs.edamame) {
        // ── 枝豆タブを再ロック ──
        // 表示中のサブタブをZUNDA側に戻す
        const vz = document.getElementById('z-sub-zd');
        const ve = document.getElementById('z-sub-eda');
        if (vz) {
            vz.style.display = 'block';
            vz.classList.add('active');
        }
        if (ve) {
            ve.style.display = 'none';
            ve.classList.remove('active');
        }
        // 実際の解禁フラグを戻す（恒久記録もfalseに上書き）
        edaUnlocked = false;
        try {
            localStorage.setItem(EDA_UNLOCK_KEY, JSON.stringify(false));
        } catch (e) {}
        setEdaButtonState(); // ボタン文言と状態の再描画
        // ずんだ系の到達値をリセット
        state.maxZunda = (0, _numbersJs.D)(10);
    }
    // UI更新 & セーブ
    updateUI();
    save();
}
// アンコニティ実行
function doAnconityExecute() {
    ankoChalLogic.completeAnkoChallenge();
    // AP +1
    state.ap = (state.ap || 0) + 1 * getEffects().apMul;
    state.anconityClears = (state.anconityClears || 0) + 1;
    // ずんだ/ブースト/アセン/プレステージ/枝豆/大豆/あんこディメンションを初期化
    state.zunda = (0, _numbersJs.D)(10);
    state.boostZunda = (0, _numbersJs.D)(0);
    state.boostEdamame = (0, _numbersJs.D)(0);
    state.boostOther = (0, _numbersJs.D)(0).add(getEffects().startBonuses.anconity.zb);
    state.ascensionMult = 1;
    state.prestige = {
        speed: 0,
        power: 0,
        cost: 0 + getEffects().startBonuses.anconity.cPre
    };
    state.eda = {
        amount: 0,
        boostBought: 0,
        expBought: 0
    };
    state.soy = {
        amount: 0,
        boostUpLv: 0,
        zd8Lv: 0
    };
    state.anko.amount = (0, _numbersJs.D)(0);
    // ディメンション
    for(let i = 1; i <= 8; i++){
        tiers[i].bought = (0, _numbersJs.D)(0);
        tiers[i].generated = (0, _numbersJs.D)(1);
        if (i >= 2) tiers[i].revealed = false;
        // あんこ
        state.anko.dims[i].generated = (0, _numbersJs.D)(1);
    }
    if (getEffects().startBonuses.anconity.zd1) {
        state.maxZunda = (0, _numbersJs.D)((0, _unlockZundaAmountJs.EDA_UNLOCK));
        tiers[1].bought = (0, _numbersJs.D)(10);
        tiers[2].revealed = true;
    } else // 最大到達等
    state.maxZunda = (0, _numbersJs.D)(10);
    // s7_1の効果
    if (getEffects().startBonuses.anconity.zd2to6) {
        for(let i = 2; i <= 6; i++){
            tiers[i].bought = (0, _numbersJs.D)(1);
            tiers[i].revealed = true;
        }
        tiers[7].revealed = true;
    }
    refreshCostMultipliers();
    // アンコフラグ解除
    state.anconityReady = false;
    // あんこタブ解放
    state.ankoTabUnlocked = true;
    const ta = document.getElementById('tab-anko');
    if (ta) ta.style.display = 'block';
    // UI反映
    const bar = document.getElementById('anconityBar');
    if (bar) bar.style.display = 'none';
    const apEl = document.getElementById('apAmount');
    if (apEl) apEl.textContent = state.ap.toString();
    if (window.updateAskillStates) askill.updateAskillStates();
    // ZUNDA行の可視制御を初期化
    for(let i = 2; i <= 8; i++){
        const row = document.getElementById(`row-zd${i}`);
        if (row) row.style.display = "none";
    }
    // ロック類をリセット
    applyAnconityResetLocks();
    // 効果の再計算
    recomputeAllSkillEffects();
    markPrestigeDirty();
    setAnconityReady(false);
    updateUI();
    save();
}
// アンコニティ時と同じリセット(AP入手なし)
function doAnconityReset() {
    // ずんだ/ブースト/アセン/プレステージ/枝豆/大豆/あんこディメンションを初期化
    state.zunda = (0, _numbersJs.D)(10);
    state.boostZunda = (0, _numbersJs.D)(0);
    state.boostEdamame = (0, _numbersJs.D)(0);
    state.boostOther = (0, _numbersJs.D)(0).add(getEffects().startBonuses.anconity.zb);
    state.ascensionMult = 1;
    state.prestige = {
        speed: 0,
        power: 0,
        cost: 0 + getEffects().startBonuses.anconity.cPre
    };
    state.eda = {
        amount: 0,
        boostBought: 0,
        expBought: 0
    };
    state.soy = {
        amount: 0,
        boostUpLv: 0,
        zd8Lv: 0
    };
    state.anko.amount = 0;
    // ディメンション
    for(let i = 1; i <= 8; i++){
        tiers[i].bought = (0, _numbersJs.D)(0);
        tiers[i].generated = (0, _numbersJs.D)(1);
        if (i >= 2) tiers[i].revealed = false;
        // あんこ
        state.anko.dims[i].generated = (0, _numbersJs.D)(1);
    }
    if (getEffects().startBonuses.anconity.zd1) {
        state.maxZunda = (0, _numbersJs.D)((0, _unlockZundaAmountJs.EDA_UNLOCK));
        tiers[1].bought = (0, _numbersJs.D)(10);
        tiers[2].revealed = true;
    } else // 最大到達等
    state.maxZunda = (0, _numbersJs.D)(10);
    // s7_1の効果
    if (getEffects().startBonuses.anconity.zd2to6) {
        for(let i = 2; i <= 6; i++){
            tiers[i].bought = (0, _numbersJs.D)(1);
            tiers[i].revealed = true;
        }
        tiers[7].revealed = true;
    }
    refreshCostMultipliers();
    // アンコフラグ解除
    state.anconityReady = false;
    // UI反映
    const bar = document.getElementById('anconityBar');
    if (bar) bar.style.display = 'none';
    const apEl = document.getElementById('apAmount');
    if (apEl) apEl.textContent = state.ap.toString();
    if (window.updateAskillStates) askill.updateAskillStates();
    // ZUNDA行の可視制御を初期化
    for(let i = 2; i <= 8; i++){
        const row = document.getElementById(`row-zd${i}`);
        if (row) row.style.display = "none";
    }
    // ロック類をリセット
    applyAnconityResetLocks();
    // 効果の再計算
    recomputeAllSkillEffects();
    markPrestigeDirty();
    setAnconityReady(false);
    updateUI();
    save();
}
// あんこチャレンジ報酬
function grantAnkoChallengeReward(idx) {
    const au = state.auto?.unlocked;
    if (!au) return;
    if (idx >= 1 && idx <= 8) {
        if (au.zdFast[idx - 1] == true) return;
        // ZD1..8 の高速自動購入解禁
        au.zdFast[idx - 1] = true;
    } else switch(idx){
        case 9:
            if (au.boostFast == true) return;
            au.boostFast = true;
            break; // ブースト高速自動
        case 10:
            if (au.asc == true) return;
            au.asc = true;
            break; // アセンション自動実行
        case 11:
            if (au.prest == true) return;
            au.prest = true;
            break; // プレステージ自動実行
        case 12:
            if (au.eda == true) return;
            au.eda = true;
            au.soy = true;
            break; // 枝豆UG自動購入
        case 13:
            if (au.anco == true) return;
            au.anco = true;
            break; // アンコニティ自動実行
    }
    markAutomationDirty();
    automationUI.refreshIfDirty(); // UIに「解禁済」をすぐ反映
}
/* ---- あんこディメンション ---- */ // 購入可能か判定
function canBuyAD(i) {
    const bought = state.anko.dims[i].bought;
    return (0, _ankoDimsJs.canAffordAd)(i, bought, state.ap, 1);
}
// 購入
function tryBuyAD(i, n = 1) {
    const bought = state.anko.dims[i].bought;
    const total = (0, _ankoDimsJs.calcAdTotalCost)(i, bought, n);
    if (!total) return false;
    if (state.ap.lt(total)) return false;
    state.ap = state.ap.minus(total);
    state.anko.dims[i].bought = bought.plus(n);
    save();
    updateUI();
    return true;
}
// 最大購入
function maxAffordableAD(i) {
    return (0, _ankoDimsJs.maxAffordableAd)(i, state.anko.dims[i].bought, state.ap);
}
/* ---- 自動化タブ ---- */ // 自動化解禁
function checkAutomationUnlocks() {
    // 最大値の更新も Decimal で
    state.maxZunda = (0, _numbersJs.Decimal).max(state.maxZunda, state.zunda);
    if (!state.autoTabUnlocked && state.maxZunda.gte('1e27')) {
        state.autoTabUnlocked = true;
        el("tab-auto").style.display = "block";
        markAutomationDirty();
        save();
    }
    for(let i = 0; i < 8; i++)if (!state.auto.unlocked.zd[i] && state.maxZunda.gte((0, _unlockZundaAmountJs.AUTO_THRESH_BY_ZUNDA).zd[i])) {
        state.auto.unlocked.zd[i] = true;
        markAutomationDirty();
        save();
    }
    if (!state.auto.unlocked.boost && state.maxZunda.gte((0, _unlockZundaAmountJs.AUTO_THRESH_BY_ZUNDA).boost)) {
        state.auto.unlocked.boost = true;
        markAutomationDirty();
        save();
    }
}
/***** 6. UI ****************************************************************/ "use strict";
/* ---- ビルド（既存UI＋イベント） ---- */ function build() {
    const root = el('producers');
    root.innerHTML = '';
    // ── ヘッダー（右上ツールチップ付き）を追加 ──
    const head = document.createElement('div');
    head.className = 'producers-head';
    head.innerHTML = `
                                        <div style="font-weight:800;">\u{1F4E6} ZUNDA DIMENSIONS</div>
                                        <div class="tip-wrap" aria-hidden="true" style="margin-left:auto;">
                                        <div class="tip-btn">?</div>
                                        <div class="tip-box">
                                        <div style="font-weight:700;margin-bottom:6px;">\u{30C7}\u{30A3}\u{30E1}\u{30F3}\u{30B7}\u{30E7}\u{30F3}\u{306E}\u{8AAC}\u{660E}</div>
                                        <ul style="margin:0;padding-left:18px;">
                                        <li>ZundaDimension<i>1</i> \u{306F}\u{305A}\u{3093}\u{3060}\u{3092}\u{751F}\u{6210}\u{3057}\u{307E}\u{3059}\u{3002}</li>
                                        <li>ZundaDimension<i>2</i> \u{4EE5}\u{964D}\u{306F}\u{4E0B}\u{4F4D}\u{30C7}\u{30A3}\u{30E1}\u{30F3}\u{30B7}\u{30E7}\u{30F3}\u{3092}\u{751F}\u{6210}\u{3057}\u{307E}\u{3059}\u{3002}</li>
                                        <li>\u{30B3}\u{30B9}\u{30C8}\u{306F}\u{8CFC}\u{5165}\u{3054}\u{3068}\u{306B}\u{4E0A}\u{6607}\u{3057}\u{307E}\u{3059}\u{3002}</li>
                                        </ul>
                                        </div>
                                        </div>
`;
    root.appendChild(head);
    for(let i = 1; i <= 8; i++){
        const hasGen = i <= 7;
        const row = document.createElement('div');
        row.className = 'row';
        row.id = `row-zd${i}`;
        const name = `ZundaDimension${i}`;
        row.innerHTML = `
                                      <div><div class="name">${name}</div></div>
                                      <div class="counts">
                                        <span class="pill">\u{8CFC}\u{5165}\u{6570}:<span id="owned-zd${i}">0</span></span>
                                        ${hasGen ? `<span class="pill">\u{751F}\u{6210}\u{6570}:<span id="gen-zd${i}">0</span></span>` : ''}
                                      </div>
                                      <div class="btns">
                                        <button id="buy1-zd${i}" class="buy"><span class="label">\u{8CFC}\u{5165}\xd71</span><span class="cost" id="cost1-zd${i}">-</span></button>
                                        <button id="buyMax-zd${i}" class="buy"><span class="label">\u{6700}\u{5927}\u{8CFC}\u{5165}</span><span class="cost" id="costMax-zd${i}">-</span></button>
                                      </div>`;
        root.appendChild(row);
    }
    for(let i = 2; i <= 8; i++){
        const row = el(`row-zd${i}`);
        if (row) row.style.display = "none";
    }
    for(let i = 1; i <= 8; i++){
        el(`buy1-zd${i}`).addEventListener('click', ()=>{
            if (buy(tiers[i], 1)) {
                onBuyZundaDimension(i, 1);
                if (edaUnlocked) state.eda.amount += 1 * (getEffects().edaGetMul ?? 1);
                updateUI();
            }
        });
        el(`buyMax-zd${i}`).addEventListener('click', ()=>{
            const n = maxAffordable(tiers[i]);
            if (n > 0 && buy(tiers[i], n)) {
                onBuyZundaDimension(i, n);
                if (edaUnlocked) state.eda.amount += n * (getEffects().edaGetMul ?? 1);
                updateUI();
            }
        });
    }
    // Boost
    el("buyBoost").addEventListener("click", tryBuyBoost);
    el("buyBoostMax").addEventListener("click", ()=>{
        const m = maxBoostAffordableZunda();
        if (m > 0 && canBuyBoost()) buyBoostMany(m);
    });
    el('buyAllMax').addEventListener('click', buyAllMax);
    el("doAscend").addEventListener("click", doAscend);
    el('doPrestigeSpeed').addEventListener('click', ()=>doPrestige('speed'));
    el('doPrestigePower').addEventListener('click', ()=>doPrestige('power'));
    el('doPrestigeCost').addEventListener('click', ()=>doPrestige('cost'));
    // 設定
    el('export').addEventListener('click', ()=>{
        save();
        const raw = localStorage.getItem((0, _saveJs.SAVE_KEY)) || '';
        navigator.clipboard.writeText(raw || '');
        alert("\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F\u3002");
    });
    el('import').addEventListener('click', ()=>{
        const raw = prompt("\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF(JSON)\u3092\u8CBC\u308A\u4ED8\u3051\u3066\u304F\u3060\u3055\u3044");
        if (!raw) return;
        try {
            JSON.parse(raw);
            localStorage.setItem((0, _saveJs.SAVE_KEY), raw);
            location.reload();
        } catch (e) {
            alert("\u7121\u52B9\u306A\u30C7\u30FC\u30BF\u3067\u3059\u3002");
        }
    });
    el('hardReset').addEventListener('click', ()=>{
        if (!confirm("\u672C\u5F53\u306B\u5168\u6D88\u53BB\u3057\u307E\u3059\u304B\uFF1F")) return;
        localStorage.clear();
        flashSaveStatus("\u30C7\u30FC\u30BF\u3092\u524A\u9664\u3057\u307E\u3057\u305F");
        setTimeout(()=>location.reload(), 500);
    });
    automationUI.buildAutomationUI();
    markAutomationDirty();
    // 枝豆UI
    el('edaBuyBoost').addEventListener('click', ()=>{
        if (!edaUnlocked) return alert("\u679D\u8C46\u30B5\u30D6\u30BF\u30D6\u672A\u89E3\u7981\u3067\u3059");
        const c = edaBoostCost();
        if (state.eda.amount < c) return alert("\u679D\u8C46\u304C\u8DB3\u308A\u307E\u305B\u3093");
        state.eda.amount -= c;
        state.eda.boostBought++;
        state.boostEdamame++;
        updateUI();
    });
    el('edaBuyBoostMax').addEventListener('click', ()=>{
        if (!edaUnlocked) return alert("\u679D\u8C46\u30B5\u30D6\u30BF\u30D6\u672A\u89E3\u7981\u3067\u3059");
        const m = maxAffordableByEdamame((n)=>edaBoostTotal(n));
        if (m <= 0) return;
        state.eda.amount -= edaBoostTotal(m);
        state.eda.boostBought += m;
        state.boostEdamame += m;
        updateUI();
    });
    el('edaBuyExp').addEventListener('click', ()=>{
        if (!edaUnlocked) return alert("\u679D\u8C46\u30B5\u30D6\u30BF\u30D6\u672A\u89E3\u7981\u3067\u3059");
        const c = edaExpCost();
        if (state.eda.amount < c) return alert("\u679D\u8C46\u304C\u8DB3\u308A\u307E\u305B\u3093");
        state.eda.amount -= c;
        state.eda.expBought++;
        updateUI();
    });
    el('edaBuyExpMax').addEventListener('click', ()=>{
        if (!edaUnlocked) return alert("\u679D\u8C46\u30B5\u30D6\u30BF\u30D6\u672A\u89E3\u7981\u3067\u3059");
        let lo = 0, hi = 1;
        while(edaExpTotal(hi) <= state.eda.amount)hi *= 2;
        while(lo < hi){
            const mid = Math.ceil((lo + hi) / 2);
            if (edaExpTotal(mid) <= state.eda.amount) lo = mid;
            else hi = mid - 1;
        }
        if (lo <= 0) return;
        state.eda.amount -= edaExpTotal(lo);
        state.eda.expBought += lo;
        updateUI();
    });
    // 大豆UI
    el('soyBuyBoostUp').addEventListener('click', ()=>{
        if (!edaUnlocked) return alert("\u679D\u8C46\u30B5\u30D6\u30BF\u30D6\u672A\u89E3\u7981\u3067\u3059");
        const c = soyBoostUpCost();
        if (state.soy.amount < c) return alert("\u5927\u8C46\u304C\u8DB3\u308A\u307E\u305B\u3093");
        state.soy.amount -= c;
        state.soy.boostUpLv++;
        updateUI();
    });
    el('soyBuyBoostUpMax').addEventListener('click', ()=>{
        if (!edaUnlocked) return alert("\u679D\u8C46\u30B5\u30D6\u30BF\u30D6\u672A\u89E3\u7981\u3067\u3059");
        let lo = 0, hi = 1;
        while(soyBoostUpTotal(hi) <= state.soy.amount)hi *= 2;
        while(lo < hi){
            const mid = Math.ceil((lo + hi) / 2);
            if (soyBoostUpTotal(mid) <= state.soy.amount) lo = mid;
            else hi = mid - 1;
        }
        if (lo <= 0) return;
        state.soy.amount -= soyBoostUpTotal(lo);
        state.soy.boostUpLv += lo;
        updateUI();
    });
    el('soyBuyZd8').addEventListener('click', ()=>{
        if (!edaUnlocked) return alert("\u679D\u8C46\u30B5\u30D6\u30BF\u30D6\u672A\u89E3\u7981\u3067\u3059");
        const c = soyZd8Cost();
        if (state.soy.amount < c) return alert("\u5927\u8C46\u304C\u8DB3\u308A\u307E\u305B\u3093");
        state.soy.amount -= c;
        state.soy.zd8Lv++;
        updateUI();
    });
    el('soyBuyZd8Max').addEventListener('click', ()=>{
        if (!edaUnlocked) return alert("\u679D\u8C46\u30B5\u30D6\u30BF\u30D6\u672A\u89E3\u7981\u3067\u3059");
        let lo = 0, hi = 1;
        while(soyZd8Total(hi) <= state.soy.amount)hi *= 2;
        while(lo < hi){
            const mid = Math.ceil((lo + hi) / 2);
            if (soyZd8Total(mid) <= state.soy.amount) lo = mid;
            else hi = mid - 1;
        }
        if (lo <= 0) return;
        state.soy.amount -= soyZd8Total(lo);
        state.soy.zd8Lv += lo;
        updateUI();
    });
}
/* ========== ウィンドウ全体のサイズ変更 ========== */ function updateAppScale() {
    const baseWidth = (0, _uiLayoutJs.UI_LAYOUT).appBaseWidth;
    const tabWidth = (0, _uiLayoutJs.UI_LAYOUT).tabWidth;
    const charWidth = (0, _uiLayoutJs.UI_LAYOUT).charWidth;
    const gap = (0, _uiLayoutJs.UI_LAYOUT).gap;
    const bodyPadding = (0, _uiLayoutJs.UI_LAYOUT).bodyPaddingX;
    const vw = window.innerWidth;
    // 右カラムに実際に使える横幅
    const available = vw - bodyPadding - tabWidth - charWidth - gap * 2;
    // 基準 1120px がちょうど入るようにスケール計算（最大1）
    let scale = available / baseWidth;
    scale = Math.min(1, scale);
    scale = Math.max(0.5, scale); // 小さすぎると読めないので下限(お好み)
    document.documentElement.style.setProperty('--app-scale', scale);
}
window.addEventListener('resize', updateAppScale);
window.addEventListener('load', updateAppScale);
const Bubble = (0, _bubbleJs.createBubble)({
    linesNormal: (0, _zundaLinesJs.ZUNDA_LINES_NORMAL),
    autoDelayMs: (0, _zundaTalkJs.ZUNDA_AUTO_DELAY_MS),
    linesByProgress: (0, _zundaLinesJs.ZUNDA_LINES_BY_PROGRESS),
    spriteMap: (0, _zundaSpritesJs.ZUNDA_SPRITE),
    typeCps: 20,
    enableAutoTalk: true
});
/* ========== サブタブ（ZUNDA / EDAMAME） ========== */ const SUBTAB_KEY = 'zunda_subtab';
const EDA_UNLOCK_KEY = 'zunda_edamame_unlocked';
let edaUnlocked = false; // 1e150 到達で true（恒久）
let edaHintShown = false; // 1e120 到達でヒント表示
function setEdaButtonState() {
    const btn = document.getElementById('subtab-eda');
    if (!btn) return;
    if (edaUnlocked) {
        btn.textContent = "\u679D\u8C46";
        btn.classList.remove('disabled');
    } else {
        btn.textContent = edaHintShown ? "\u305A\u3093\u30601e150\u4EE5\u4E0A\u3067\u89E3\u7981" : '???';
        btn.classList.add('disabled');
        const vz = document.getElementById('z-sub-zd');
        const ve = document.getElementById('z-sub-eda');
        if (vz) vz.classList.add('active');
        if (ve) ve.classList.remove('active');
    }
}
function switchZSub(name) {
    if (name === 'z-sub-eda' && !edaUnlocked) name = 'z-sub-zd';
    document.querySelectorAll('.subtab-btn').forEach((b)=>b.classList.toggle('active', b.dataset.target === name));
    const subviews = document.querySelectorAll('.z-subview');
    subviews.forEach((v)=>{
        if (v.id === name) {
            v.style.display = 'block';
            v.classList.add('active');
        } else {
            v.style.display = 'none';
            v.classList.remove('active');
        }
    });
    try {
        localStorage.setItem(SUBTAB_KEY, name);
    } catch (e) {}
}
document.addEventListener('click', (e)=>{
    const b = e.target.closest('.subtab-btn');
    if (!b) return;
    const tgt = b.dataset.target;
    if (!tgt) return;
    if (tgt === 'z-sub-eda' && !edaUnlocked) return;
    switchZSub(tgt);
});
(function initZSub() {
    try {
        edaUnlocked = JSON.parse(localStorage.getItem(EDA_UNLOCK_KEY) || 'false');
    } catch (e) {
        edaUnlocked = false;
    }
    setEdaButtonState();
    let n = 'z-sub-zd';
    try {
        n = localStorage.getItem(SUBTAB_KEY) || 'z-sub-zd';
    } catch (e) {}
    if (!edaUnlocked) n = 'z-sub-zd';
    switchZSub(n);
})();
/* ========== ずんだディメンション ========== */ // コストUI更新
const costsUI = (0, _costsUIJs.createCostsUI)({
    el,
    fmt,
    getState: ()=>state,
    getTiers: ()=>tiers,
    costAt,
    maxAffordable,
    totalCost,
    edaBoostCost,
    edaExpCost,
    soyBoostUpCost,
    soyZd8Cost
});
// ZD2以降の表示/非表示切り替え
const visibilityUI = (0, _visibilityUIJs.createVisibilityUI)({
    getTiers: ()=>tiers,
    D: (0, _numbersJs.D)
});
// ブースト・アセンションUI更新
const boostAscUI = (0, _boostAscUIJs.createBoostAscUI)({
    el,
    fmt,
    fmt2,
    D: (0, _numbersJs.D),
    Decimal: (0, _numbersJs.Decimal),
    getState: ()=>state,
    ASC_UNLOCK: (0, _unlockZundaAmountJs.ASC_UNLOCK),
    boostTotal,
    getBoostPerItem,
    zundaBoostCost,
    canUseBoost,
    maxBoostAffordableZunda,
    ascNewMultFrom
});
// プレステージのUI更新
const prestigeUI = (0, _prestigeUIJs.createPrestigeUI)({
    getState: ()=>state,
    el,
    D: (0, _numbersJs.D),
    toNum,
    PRESTIGE_UNLOCK: (0, _unlockZundaAmountJs.PRESTIGE_UNLOCK),
    prestigeRawLevelFromZ
});
function markPrestigeDirty() {
    prestigeUI.markDirty();
}
function refreshPrestigeUIWrapper() {
    prestigeUI.refreshIfDirty();
}
// 解禁UI
function checkUnlockPanels() {
    const z = state.zunda;
    if (!state.unlocks.boost && z.gte('1e8')) {
        state.unlocks.boost = true;
        el("boostPanel").style.display = "block";
        save();
    }
    if (!state.unlocks.allMax && z.gte('1e8')) {
        state.unlocks.allMax = true;
        el("allMaxPanel").style.display = "block";
        save();
    }
    if (!state.unlocks.asc && z.gte('1e13')) {
        state.unlocks.asc = true;
        el("ascPanel").style.display = "block";
        save();
    }
    if (!state.unlocks.prestige && z.gte('1e30')) {
        state.unlocks.prestige = true;
        el("prestigePanel").style.display = "block";
        save();
    }
}
// 枝豆/大豆UI更新
function refreshEdamameSoyUI() {
    const setText = (id, v)=>{
        const n = el(id);
        if (n) n.textContent = v;
    };
    setText('edaAmount', softFmt(state.eda.amount));
    setText('boostCount2', state.boostEdamame || 0);
    setText('edaExpAdd', getExpAdd().toFixed(2));
    setText('soyAmount', softFmt(state.soy.amount));
    setText('soyps', softFmt(calcSoyPS()));
    setText('boostPerItemNow', "\xd7" + getBoostPerItem().toFixed(4));
    setText('zd8Mult', "\xd7" + getZd8Mult().toFixed(0));
}
// 枝豆・大豆ボタンの活性／非活性を反映
function refreshEdamameSoyButtons() {
    const setDis = (id, dis)=>{
        const b = document.getElementById(id);
        if (b) b.disabled = !!dis;
    };
    // 未解禁なら全部オフ
    if (!edaUnlocked) {
        setDis('edaBuyBoost', true);
        setDis('edaBuyBoostMax', true);
        setDis('edaBuyExp', true);
        setDis('edaBuyExpMax', true);
        setDis('soyBuyBoostUp', true);
        setDis('soyBuyBoostUpMax', true);
        setDis('soyBuyZd8', true);
        setDis('soyBuyZd8Max', true);
        return;
    }
    // 枝豆（ブースト購入）
    const canEdaBoost = state.eda.amount >= edaBoostCost();
    const canEdaBoostMax = maxAffordableByEdamame((n)=>edaBoostTotal(n)) > 0;
    setDis('edaBuyBoost', !canEdaBoost);
    setDis('edaBuyBoostMax', !canEdaBoostMax);
    // 枝豆（指数強化）
    const canEdaExp = state.eda.amount >= edaExpCost();
    const canEdaExpMax = function() {
        let lo = 0, hi = 1;
        while(edaExpTotal(hi) <= state.eda.amount)hi *= 2;
        while(lo < hi){
            const mid = Math.ceil((lo + hi) / 2);
            if (edaExpTotal(mid) <= state.eda.amount) lo = mid;
            else hi = mid - 1;
        }
        return lo > 0;
    }();
    setDis('edaBuyExp', !canEdaExp);
    setDis('edaBuyExpMax', !canEdaExpMax);
    // 大豆（ブースト強化）
    const canSoyBoostUp = state.soy.amount >= soyBoostUpCost();
    const canSoyBoostUpMax = function() {
        let lo = 0, hi = 1;
        while(soyBoostUpTotal(hi) <= state.soy.amount)hi *= 2;
        while(lo < hi){
            const mid = Math.ceil((lo + hi) / 2);
            if (soyBoostUpTotal(mid) <= state.soy.amount) lo = mid;
            else hi = mid - 1;
        }
        return lo > 0;
    }();
    setDis('soyBuyBoostUp', !canSoyBoostUp);
    setDis('soyBuyBoostUpMax', !canSoyBoostUpMax);
    // 大豆（ZD8強化）
    const canSoyZd8 = state.soy.amount >= soyZd8Cost();
    const canSoyZd8Max = function() {
        let lo = 0, hi = 1;
        while(soyZd8Total(hi) <= state.soy.amount)hi *= 2;
        while(lo < hi){
            const mid = Math.ceil((lo + hi) / 2);
            if (soyZd8Total(mid) <= state.soy.amount) lo = mid;
            else hi = mid - 1;
        }
        return lo > 0;
    }();
    setDis('soyBuyZd8', !canSoyZd8);
    setDis('soyBuyZd8Max', !canSoyZd8Max);
}
/* ========== サブタブ（ANKO / SKILL / CHALLENGE / RACE） ========== */ // サブタブ切替（AP表示は常時なので触らない）
(function initAnkoSubtabs() {
    const root = document.getElementById('view-anko');
    if (!root) return;
    const btns = root.querySelectorAll('.anko-subtab-btn');
    const views = root.querySelectorAll('.anko-subview');
    btns.forEach((b)=>b.addEventListener('click', ()=>{
            btns.forEach((x)=>x.classList.toggle('active', x === b));
            views.forEach((v)=>v.classList.toggle('active', v.id === b.dataset.target));
        }));
})();
// AP表示の共通更新
function refreshAnkoAP() {
    const apEl = document.getElementById('apAmount');
    if (apEl) apEl.textContent = (state.ap || 0).toString();
}
/* ========== あんこディメンション ========== */ // ビルド（初回）
(function buildAnkoDims() {
    const root = document.getElementById('ankoDimsList');
    if (!root) return;
    root.innerHTML = '';
    // 上部：あんこ量の大きな表示（サブタブ内）
    const head = document.createElement('section');
    head.className = 'panel';
    head.style.marginBottom = '10px';
    head.innerHTML = `
                              <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
                                <div>
                                  <div style="font-weight:800;color:#ffe7cf;">Anko</div>
                                  <div id="ankoAmount" style="font-size:40px;font-weight:900;color:#ffd8a0;text-shadow:0 0 8px rgba(200,140,80,.35);">0</div>
                                  <div style="color:#d7c5b1;font-size:12px;margin-top:4px;">
                                    APS: <span id="ankops">0</span>/s
                                  </div>
                                </div>
                                <div class="pill" style="min-width:220px;text-align:center;">
                                  \u{305A}\u{3093}\u{3060}\u{30C7}\u{30A3}\u{30E1}\u{30F3}\u{30B7}\u{30E7}\u{30F3}\u{52B9}\u{7387}\u{500D}\u{7387}&nbsp;\xd7<span id="ankoZMult">1</span>
                                </div>
                              </div>
`;
    root.appendChild(head);
    // AD1..8 列
    for(let i = 1; i <= 8; i++){
        const row = document.createElement('div');
        row.className = 'anko-dim-row';
        // AD8は生産数表示なし
        const prodCell = i <= 7 ? `<span class="pill">\u{751F}\u{7523}\u{6570}: <span id="ad${i}-ps">1</span></span>` : '';
        const cost = adCostAt(i);
        const costLabel = cost == null ? "\u672A\u8A2D\u5B9A" : `AP ${cost}`;
        row.innerHTML = `
                                  <div class="name">AnkoDimension${i}</div>
                                  <div class="counts">
                                    <span class="pill">\u{8CFC}\u{5165}\u{6570}: <span id="ad${i}-owned">${state.anko.dims[i].bought || (0, _numbersJs.D)(0)}</span></span>
                                    ${prodCell}
                                  </div>
                                  <div style="display:flex;gap:8px;justify-content:flex-end;">
                                    <button id="ad${i}-buy1" class = "buy" ${cost == null ? 'disabled' : ''}>\u{8CFC}\u{5165}\xd71<br><span id="ad${i}-c1" class="cost">${costLabel}</span></button>
                                    <button id="ad${i}-buyMax" class = "buy" ${cost == null ? 'disabled' : ''}>\u{6700}\u{5927}\u{8CFC}\u{5165}</button>
                                  </div>
                                `;
        root.appendChild(row);
        const b1 = row.querySelector(`#ad${i}-buy1`);
        const bm = row.querySelector(`#ad${i}-buyMax`);
        if (b1) b1.addEventListener('click', ()=>{
            tryBuyAD(i, 1);
        });
        if (bm) bm.addEventListener('click', ()=>{
            const m = maxAffordableAD(i);
            if (m > 0) tryBuyAD(i, m);
        });
    }
})();
// あんこディメンション更新
function refreshAnkoDimsUI() {
    // APS = AD1 の購入数 × 基礎生産
    const ad1 = state.anko.dims[1];
    const ankops = (ad1.bought || (0, _numbersJs.D)(0)) * (ad1.prodPerSec || 1);
    // あんこ表示
    const ankoEl = document.getElementById('ankoAmount');
    if (ankoEl) ankoEl.textContent = fmt(state.anko.amount);
    // APS表示
    const ankopsEl = document.getElementById('ankops');
    if (ankopsEl) ankopsEl.textContent = softFmt(ankops);
    // ずんだ効率倍率 = Anko^0.5（Decimalで整形）
    const aDec = state.anko.amount instanceof (0, _numbersJs.Decimal) ? state.anko.amount : (0, _numbersJs.D)(state.anko.amount || 0);
    const multDec = aDec.lte(0) ? (0, _numbersJs.D)(1) : aDec.pow(0.5);
    const zMultEl = document.getElementById('ankoZMult');
    if (zMultEl) zMultEl.textContent = fmt(multDec);
    // 各ADの行（既存のまま）
    for(let i = 1; i <= 8; i++){
        const own = document.getElementById(`ad${i}-owned`);
        if (own) own.textContent = softFmt(state.anko.dims[i].bought || (0, _numbersJs.D)(0));
        if (i <= 7) {
            // 下位ディメンションによって実際に「生産された量（累積）」を表示
            const produced = state.anko.dims[i].generated;
            const elps = document.getElementById(`ad${i}-ps`);
            if (elps) elps.textContent = softFmt(produced);
        }
        const c = adCostAt(i);
        const c1 = document.getElementById(`ad${i}-c1`);
        if (c1) c1.textContent = c == null ? "\u672A\u8A2D\u5B9A" : `AP ${c}`;
        const b1 = document.getElementById(`ad${i}-buy1`);
        const bm = document.getElementById(`ad${i}-buyMax`);
        if (b1) b1.disabled = !(c != null && (state.ap || 0) >= c);
        if (bm) bm.disabled = !(c != null && maxAffordableAD(i) > 0);
    }
}
/* ========== あんこスキル ========== */ const askill = (0, _askillTreeJs.initAskillTree)({
    getState: ()=>state,
    save,
    recomputeAllSkillEffects,
    getZdMultFromUnspentAp,
    getASkillLabel: (0, _ankoSkillsJs.getASkillLabel),
    getASkillDesc: (0, _ankoSkillsJs.getASkillDesc),
    ASKILL_POS: (0, _ankoSkillsJs.ASKILL_POS),
    ASKILL_EDGES: (0, _ankoSkillsJs.ASKILL_EDGES),
    ASKILL_COSTS: (0, _ankoSkillsJs.ASKILL_COSTS),
    ASKILL_PREREQ: (0, _ankoSkillsJs.ASKILL_PREREQ)
});
/* ========== あんこチャレンジ ========== */ // あんこチャレンジUI構築
const ankoChalUI = (0, _ankoChallengesUIJs.initAnkoChallengeUI)({
    getState: ()=>state,
    ACHAL_DEFS: (0, _achallengeDefsJs.ACHAL_DEFS),
    startAnkoChallenge: ()=>{}
});
/* ---- 自動化 ---- */ const automationLogic = (0, _automationSystemJs.createAutomationLogic)({
    getState: ()=>state,
    save,
    onAfterToggle: ()=>{
        automationUI.markDirty();
        automationUI.refreshIfDirty(); // 即反映したいなら
    }
});
const automationCardsUI = (0, _automationCardsJs.createAutomationCardsUI)({
    getState: ()=>state,
    el,
    save,
    attachNumericInputHandler,
    Decimal: (0, _numbersJs.Decimal)
});
const automationUI = (0, _automationUIJs.initAutomationUI)({
    getState: ()=>state,
    el,
    fmt,
    AUTO_THRESH_BY_ZUNDA: (0, _unlockZundaAmountJs.AUTO_THRESH_BY_ZUNDA),
    maybeBuildAscAutomationCard: automationCardsUI.maybeBuildAscAutomationCard,
    toggleAllAutomation: automationLogic.toggleAllAutomation,
    save
});
function markAutomationDirty() {
    automationUI.markDirty();
}
const hud = (0, _hudJs.createHUD)({
    getState: ()=>state,
    el,
    fmt,
    effectiveZps
});
const miscBars = (0, _miscBarsJs.createMiscBars)({
    getState: ()=>state
});
const zundaDimsUI = (0, _zundaDimsUIJs.createZundaDimsUI)({
    el,
    softFmt,
    getTiers: ()=>tiers
});
function updateAutomationIfDirty() {
    automationUI.refreshIfDirty();
}
const updateUI = (0, _updateUIJs.createUpdateUI)({
    updateHUD: hud.updateHUD,
    updateZundaDimsSummary: zundaDimsUI.updateZundaDimsSummary,
    refreshCosts: costsUI.refreshCosts,
    refreshBoostAndAsc: boostAscUI.refreshBoostAndAsc,
    updateVisibility: visibilityUI.updateVisibility,
    refreshPrestigeUIWrapper,
    refreshEdamameSoyUI,
    refreshEdamameSoyButtons,
    setEdaButtonState,
    refreshAnkoAP,
    refreshAnkoDimsUI,
    askill,
    updateAutomationIfDirty,
    updateMiscBars: miscBars.updateMiscBars
});
const ankoChalLogic = (0, _ankoChallengeJs.createAnkoChallengeLogic)({
    getState: ()=>state,
    D: (0, _numbersJs.D),
    doAnconityReset,
    isChal,
    grantAnkoChallengeReward,
    recomputeAllSkillEffects,
    refreshBoostAndAsc: boostAscUI.refreshBoostAndAsc,
    refreshAscUI: boostAscUI.refreshAscUI,
    refreshCostMultipliers,
    updateUI,
    save,
    onUIUpdate: ()=>ankoChalUI.refreshAll()
});
// UIの開始ボタンがロジックを呼ぶように差し替え
ankoChalUI.setStartHandler(ankoChalLogic.startAnkoChallenge);
/***** 7. EVENTS *************************************************************/ /* デバッグ用キー操作 */ document.addEventListener('keydown', (e)=>{
    if (e.key === 'p' || e.key === 'P') {
        state.zunda = new (0, _numbersJs.Decimal)('1.8e308');
        state.ap = 1;
        flashSaveStatus("\uD83D\uDC9A \u30C7\u30D0\u30C3\u30B0: \u305A\u3093\u3060\u3092 1e300 \u306B\u8A2D\u5B9A\u3057\u307E\u3057\u305F");
        updateUI();
    }
});
/* 画面非表示からの復帰処理 */ document.addEventListener('visibilitychange', ()=>{
    if (!document.hidden) {
        applyOfflineFromLastActive({
            showToast: true
        });
        updateUI();
    } else // 隠れた瞬間も「最後に見えてた時刻」として更新しておくと安定
    state.lastActiveMs = Date.now();
});
window.addEventListener('focus', ()=>{
    applyOfflineFromLastActive({
        showToast: true
    });
    updateUI();
});
document.addEventListener("DOMContentLoaded", ()=>{
    Bubble.init();
});
document.addEventListener("DOMContentLoaded", ()=>{
    (0, _tabsJs.initTabs)();
});
document.addEventListener("DOMContentLoaded", ()=>{
    ankoChalUI.init();
});
/***** 8. LOOP ***************************************************************/ /* ---- Tick ---- */ function tick() {
    const now = performance.now();
    const dt = clamp((now - state.lastTime) / 1000, 0, 1);
    state.lastTime = now;
    tickStep(dt, {
        skipUI: false
    });
}
function tickStep(dt, { skipUI }) {
    state.runSeconds += dt;
    state.runSecondsAnko += dt;
    runFastAutomation();
    const ef = getEffects();
    const mults = (0, _multsJs.calcTickMults)(state, {
        getBoostMult,
        getAscEffective,
        getZdMultFromUnspentAp,
        getZd8Mult,
        getAnkoZundaMult
    }, ef);
    // ZUNDA: 上位→下位を生成
    (0, _zundaProductionJs.tickZunda)(state, dt, tiers, mults.zunda);
    markPrestigeDirty();
    state.zunda = state.zunda.add(effectiveZps().mul(dt));
    checkAnconity();
    if (state.anconityReady) {
        if (!skipUI) updateUI();
        return;
    }
    // soy（NumberのままでOK）
    {
        let sps = calcSoyPS();
        if (!Number.isFinite(sps) || sps < 0) sps = 0;
        state.soy.amount += sps * dt;
    }
    // ANKO
    (0, _ankoProductionJs.tickAnko)(state, dt, mults.anko);
    if (state.zunda.gt(state.maxZunda)) state.maxZunda = (0, _numbersJs.Decimal).max(state.maxZunda, state.zunda);
    checkEdaSubtabProgress();
    checkAutomationUnlocks();
    checkUnlockPanels();
    evaluateZundaProgress();
    if (!skipUI) updateUI();
}
/* ---- ループ ---- */ let loopId = null;
let lastFrame = 0;
function start() {
    if (loopId) return;
    state.lastTime = performance.now();
    const loop = ()=>{
        try {
            if (nowMs() - lastFrame >= (0, _timingJs.FRAME_INTERVAL_MS)) {
                lastFrame = nowMs();
                tick();
            }
        } catch (err) {
            console.error('[tick error]', err);
            flashSaveStatus("\u30A8\u30E9\u30FC: UI\u66F4\u65B0\u306B\u5931\u6557\uFF08\u30B3\u30F3\u30BD\u30FC\u30EB\u53C2\u7167\uFF09");
        } finally{
            loopId = requestAnimationFrame(loop);
        }
    };
    loopId = requestAnimationFrame(loop);
}
function applyOfflineProgress(sec) {
    let remain = sec;
    while(remain > 0){
        const dt = remain > 60 ? 10 : remain > 10 ? 1 : 0.1;
        const step = Math.min(dt, remain);
        tickStep(step, {
            skipUI: true
        });
        remain -= step;
    }
}
/***** 9. BOOT ***************************************************************/ function bootstrap() {
    /* ---- 初期化 ---- */ function refreshCostsInit() {
        refreshCostMultipliers();
        costsUI.refreshCosts();
    }
    function setInitialEdaButton() {
        setEdaButtonState();
    }
    build();
    load();
    refreshCostsInit();
    refreshCostMultipliers();
    setEdaButtonState();
    recomputeAllSkillEffects();
    applyOfflineFromLastActive({
        showToast: true
    });
    ankoChalUI.refreshAnkoChallengeRunningUI();
    updateUI();
    start();
    const ankoBtn = document.getElementById('doAnconity');
    if (ankoBtn) ankoBtn.addEventListener('click', ()=>{
        if (!state.anconityReady) return;
        ankoBtn.disabled = true; // 多重防止
        ankoShakeAndParticles(ankoBtn, ()=>{
            // パーティクル後にアンコ実行（ここでボタン/バーが消えてOK）
            doAnconityExecute();
            ankoBtn.disabled = false;
        });
    });
    setInitialEdaButton();
    Bubble.enqueueTutorialForProgress(state.zundaProgress);
    Bubble.showNextZundaLine();
    setInterval(save, 5000);
    setInterval(automationTick, 8000);
}
document.addEventListener('DOMContentLoaded', bootstrap);

},{"./src/constants/numbers.js":"f8oci","./src/constants/uiLayout.js":"1KBM4","./src/constants/save.js":"juse9","./src/constants/timing.js":"8Of1X","./src/systems/automationSystem.js":"4kPw4","./src/constants/unlockZundaAmount.js":"gTIls","./src/constants/zundaTalk.js":"hPMQO","./src/constants/zundaSprites.js":"6PMXJ","./src/constants/zundaLines.js":"1uHTc","./src/ui/bubble.js":"bMtDE","./src/ui/tabs.js":"6ra7k","./src/ui/automationUI.js":"gzpxP","./src/ui/automationCards.js":"gWaDA","./src/ui/askillTree.js":"1gxOY","./src/ui/ankoChallengesUI.js":"jo8fj","./src/ui/costsUI.js":"4P0Ft","./src/ui/visibilityUI.js":"4kMpU","./src/ui/prestigeUI.js":"jOd6R","./src/ui/boostAscUI.js":"dlQRD","./src/ui/hud.js":"dvn7T","./src/ui/zundaDimsUI.js":"1QmQV","./src/ui/miscBars.js":"1id8Z","./src/ui/updateUI.js":"1QlvX","./src/systems/mults.js":"cskv6","./src/systems/zundaProduction.js":"7MfET","./src/systems/prestigeSystem.js":"gXmwe","./src/content/ankoDims.js":"9PuR0","./src/systems/ankoProduction.js":"2xzNA","./src/constants/ankoSkills.js":"foQwd","./src/constants/achallengeDefs.js":"adY7a","./src/systems/ankoChallenge.js":"38usi","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f8oci":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "D", ()=>D);
parcelHelpers.export(exports, "Decimal", ()=>Decimal);
parcelHelpers.export(exports, "INF", ()=>INF);
const Decimal = window.Decimal;
const D = (x)=>new Decimal(x);
const INF = D("1.7976931348623157e308");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1KBM4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UI_LAYOUT", ()=>UI_LAYOUT);
const UI_LAYOUT = {
    appBaseWidth: 1000,
    tabWidth: 160,
    charWidth: 280,
    gap: 16,
    bodyPaddingX: 48
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"juse9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SAVE_KEY", ()=>SAVE_KEY);
const SAVE_KEY = "zunda_dimensions_save_v0_10";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8Of1X":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TARGET_FPS", ()=>TARGET_FPS);
parcelHelpers.export(exports, "FRAME_INTERVAL_MS", ()=>FRAME_INTERVAL_MS);
const TARGET_FPS = 60;
const FRAME_INTERVAL_MS = 1000 / TARGET_FPS;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4kPw4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAutomationLogic", ()=>createAutomationLogic);
function createAutomationLogic(deps) {
    const { getState, save, onAfterToggle } = deps;
    function toggleAllAutomation(on) {
        const state = getState();
        // ZD1〜ZD8
        for(let i = 0; i < 8; i++)if (state.auto.unlocked.zd[i]) {
            state.auto.enabled.zd[i] = !!on;
            state.auto.enabled.zdFast[i] = !!on;
        }
        // BOOST
        if (state.auto.unlocked.boost) state.auto.enabled.boost = !!on;
        // Ascension
        if (state.auto.unlocked.asc) state.auto.enabled.asc = !!on;
        // Prestige
        if (state.auto.unlocked.prest) {
            state.auto.enabled.prest.speed = !!on;
            state.auto.enabled.prest.power = !!on;
            state.auto.enabled.prest.cost = !!on;
        }
        save?.();
        onAfterToggle?.(); // ★UI更新は外へ
    }
    return {
        toggleAllAutomation
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gTIls":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ASC_UNLOCK", ()=>ASC_UNLOCK);
parcelHelpers.export(exports, "PRESTIGE_UNLOCK", ()=>PRESTIGE_UNLOCK);
parcelHelpers.export(exports, "BOOST_UNLOCK", ()=>BOOST_UNLOCK);
parcelHelpers.export(exports, "EDA_UNLOCK", ()=>EDA_UNLOCK);
parcelHelpers.export(exports, "AUTO_THRESH_BY_ZUNDA", ()=>AUTO_THRESH_BY_ZUNDA);
var _numbersJs = require("./numbers.js");
const ASC_UNLOCK = (0, _numbersJs.D)('1e16');
const PRESTIGE_UNLOCK = (0, _numbersJs.D)('1e40');
const BOOST_UNLOCK = (0, _numbersJs.D)('1e10');
const EDA_UNLOCK = (0, _numbersJs.D)('1e150');
const AUTO_THRESH_BY_ZUNDA = {
    zd: [
        '1e35',
        '1e45',
        '1e55',
        '1e65',
        '1e75',
        '1e85',
        '1e95',
        '1e105'
    ].map((0, _numbersJs.D)),
    boost: (0, _numbersJs.D)('1e115')
};

},{"./numbers.js":"f8oci","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hPMQO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZUNDA_AUTO_DELAY_MS", ()=>ZUNDA_AUTO_DELAY_MS);
const ZUNDA_AUTO_DELAY_MS = 60000; // 60秒ごとに切り替え

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6PMXJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZUNDA_SPRITE", ()=>ZUNDA_SPRITE);
const ZUNDA_SPRITE = {
    normal: new URL(require("20345e51e1536a7b")).href,
    hand: new URL(require("69ecb5d2a9fb4615")).href,
    uwame: new URL(require("dbf3a0f0b2afcc5b")).href,
    uwame2: new URL(require("9ae3974932c9abbf")).href,
    uwame3: new URL(require("a43cbdc728a03217")).href,
    koshi: new URL(require("40deceb9eba66a24")).href,
    koshi2: new URL(require("5e49b4da7950f61e")).href,
    yubi: new URL(require("efd3875ce2df718b")).href,
    banzai: new URL(require("48670b5e810c4199")).href,
    banzai2: new URL(require("f8fede972ba3c380")).href,
    mufufu: new URL(require("b477cb70179d2d8f")).href,
    guruguru: new URL(require("ea87310fefaec1d9")).href,
    guruguru2: new URL(require("8f8f453d51b7d838")).href,
    bikkuri: new URL(require("3a8a1ec4d56b7e28")).href,
    bikkuri2: new URL(require("e6dce4f8d4a5c940")).href,
    shirome: new URL(require("cf34d93b6449ef7")).href,
    tere: new URL(require("5686a32a2dea1f60")).href,
    oko: new URL(require("b3feee57b5082a75")).href
};

},{"20345e51e1536a7b":"43Qo7","69ecb5d2a9fb4615":"luNTK","dbf3a0f0b2afcc5b":"eX8xS","9ae3974932c9abbf":"1ppxl","a43cbdc728a03217":"c73R3","40deceb9eba66a24":"iEaHt","5e49b4da7950f61e":"cTPAW","efd3875ce2df718b":"diinv","48670b5e810c4199":"1jLTR","f8fede972ba3c380":"3D9nb","b477cb70179d2d8f":"kyYQv","ea87310fefaec1d9":"jrfpV","8f8f453d51b7d838":"kgZw7","3a8a1ec4d56b7e28":"dOvtY","e6dce4f8d4a5c940":"gxImH","cf34d93b6449ef7":"8B8zO","5686a32a2dea1f60":"ST7W2","b3feee57b5082a75":"1ZLwL","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"43Qo7":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("zundamon-normal.4f7d8dc8.webp") + "?" + Date.now();

},{}],"luNTK":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("zundamon-hand.8d8bea9c.webp") + "?" + Date.now();

},{}],"eX8xS":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("zundamon-uwame.96f7118b.webp") + "?" + Date.now();

},{}],"1ppxl":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("zundamon-uwame2.0978b441.webp") + "?" + Date.now();

},{}],"c73R3":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("zundamon-uwame3.830d231d.webp") + "?" + Date.now();

},{}],"iEaHt":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("zundamon-koshi.8e140a3a.webp") + "?" + Date.now();

},{}],"cTPAW":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("zundamon-koshi2.4e985c1b.webp") + "?" + Date.now();

},{}],"diinv":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("zundamon-yubi.ff08b497.webp") + "?" + Date.now();

},{}],"1jLTR":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("zundamon-banzai.1e03b569.webp") + "?" + Date.now();

},{}],"3D9nb":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("zundamon-banzai2.1c9fa6bd.webp") + "?" + Date.now();

},{}],"kyYQv":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("zundamon-mufufu.ca8178a3.webp") + "?" + Date.now();

},{}],"jrfpV":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("zundamon-guruguru.4cff81c9.webp") + "?" + Date.now();

},{}],"kgZw7":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("zundamon-guruguru2.7e37e9be.webp") + "?" + Date.now();

},{}],"dOvtY":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("zundamon-bikkuri.e7a7e95c.webp") + "?" + Date.now();

},{}],"gxImH":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("zundamon-bikkuri2.c9a92907.webp") + "?" + Date.now();

},{}],"8B8zO":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("zundamon-shirome.153ba583.webp") + "?" + Date.now();

},{}],"ST7W2":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("zundamon-tere.7e4b4aa7.webp") + "?" + Date.now();

},{}],"1ZLwL":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("zundamon-oko.a7853a96.webp") + "?" + Date.now();

},{}],"1uHTc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZUNDA_LINES_NORMAL", ()=>ZUNDA_LINES_NORMAL);
parcelHelpers.export(exports, "ZUNDA_LINES_BY_PROGRESS", ()=>ZUNDA_LINES_BY_PROGRESS);
const ZUNDA_LINES_NORMAL = [
    {
        text: "\u6700\u8FD1\u50D5\u304C\u4E0D\u61AB\u306A\u76EE\u306B\u906D\u3046\u52D5\u753B\u304C\u5897\u3048\u3066\u308B\u6C17\u304C\u3059\u308B\u306E\u3060",
        sprite: "guruguru"
    },
    {
        text: "\u9032\u6357\u3069\u3046\u306A\u306E\u3060\uFF1F",
        sprite: "normal"
    },
    {
        text: "\u7121\u91CF\u5927\u6570\u3092\u8D85\u3048\u3066\u304B\u3089\u304C\u672C\u756A\u306A\u306E\u3060",
        sprite: "koshi2"
    },
    {
        text: "\u50D5\u306F\u3082\u3068\u3082\u3068\u305A\u3093\u3060\u30A2\u30ED\u30FC\u306A\u306E\u3060\u3000\u5FD8\u308C\u3089\u308C\u304C\u3061\u306A\u306E\u3060",
        sprite: "koshi2"
    },
    {
        text: "\u65E9\u671D\u306B\u305A\u3093\u5B50\u3092\u5927\u97F3\u91CF\u3067\u8D77\u3053\u3057\u305F\u3089\u3081\u3061\u3083\u304F\u3061\u3083\u6012\u3089\u308C\u305F\u306E\u3060\u3000\u3082\u3046\u3084\u3089\u306A\u3044\u306E\u3060",
        sprite: "uwame3"
    },
    {
        text: "\u4E16\u754C\u306E\u7D42\u308F\u308A\u306B\u305A\u3093\u3060\u3092\u98DF\u3079\u308B\u306E\u3060",
        sprite: "normal"
    },
    {
        text: "\u30DE\u30B0\u30ED\u306F\u8D64\u30DE\u30F3\u30DC\u30A6\u306E\u4EE3\u66FF\u54C1\u306A\u306E\u3060",
        sprite: "normal"
    },
    {
        text: "\u305A\u3093\u5B50\u3068\u3044\u3063\u3057\u3087\u306B\u305A\u3093\u3060\u30AB\u30D5\u30A7\u3092\u30AA\u30FC\u30D7\u30F3\u3059\u308B\u306E\u304C\u5922\u306A\u306E\u3060\uFF01",
        sprite: "banzai2"
    },
    {
        text: "\u8E0A\u3063\u3066\u306A\u3044\u591C\u3092\u77E5\u3089\u306A\u3044\u306E\u3060",
        sprite: "hand"
    },
    {
        text: "\u305A\u3093\u3060\u3082\u3093\u306F\u5973\u306E\u5B50\u306A\u306E\u3060",
        sprite: "normal"
    },
    {
        text: "\u516C\u5F0F\u8A2D\u5B9A\u3067\u306F\u50D5\u306F\u5973\u306E\u5B50\u3060\u3068\u3044\u3046\u3053\u3068\u3092\u307F\u3093\u306A\u5FD8\u308C\u3066\u308B\u306E\u3060",
        sprite: "oko"
    },
    {
        text: "\u3082\u3061\u3082\u3061\u306A\u306E\u3060",
        sprite: "mufufu"
    },
    {
        text: "\u307E\u3060\u307E\u3060\u3044\u3051\u308B\u306E\u3060",
        sprite: "hand"
    },
    {
        text: "\u591C\u306F\u3061\u3083\u3093\u3068\u7720\u308C\u3066\u308B\u306E\u3060\uFF1F",
        sprite: "normal"
    },
    {
        text: "\u305A\u3093\u3060\u30B7\u30A7\u30A4\u30AF\u306F\u3082\u3046\u98F2\u3093\u3060\u306E\u3060\uFF1F",
        sprite: "koshi"
    },
    {
        text: "\u3066\u304B\u3082\u3046\u5BDD\u308B\u306E\u3060",
        sprite: "uwame"
    },
    {
        text: "\u305A\u3093\u3060\u30DB\u30E9\u30A4\u305A\u3093\u3092\u8996\u8074\u3059\u308B\u306E\u3060",
        sprite: "yubi"
    },
    {
        text: "\u304D\u308A\u305F\u3093\u306F\u30B2\u30FC\u30E0\u304C\u5F37\u3059\u304E\u308B\u306E\u3060",
        sprite: "guruguru"
    },
    {
        text: "\u3042\u308A\u306E\u307E\u307E\u304C\u4F55\u306A\u306E\u304B\u3001\u308F\u304B\u3089\u306A\u304F\u3066\u3082\u3044\u3044\u306E\u3060",
        sprite: "normal"
    },
    {
        text: "\u6804\u990A\u30D0\u30E9\u30F3\u30B9\u306F\u5927\u4E8B\u306A\u306E\u3060\u3000\u305A\u3093\u3060\u3070\u304B\u308A\u98DF\u3079\u3066\u3061\u3083\u30C0\u30E1\u306A\u306E\u3060",
        sprite: "koshi"
    },
    {
        text: "\u305A\u3093\u3060\u3069\u3093\u3063\u3066\u4E00\u4F53\u8AB0\u306A\u306E\u3060...",
        sprite: "uwame3"
    },
    {
        text: "\u305F\u307E\u306B\u304A\u5B22\u69D8\u307F\u305F\u3044\u306A\u670D\u3092\u7740\u3066\u51FA\u304B\u3051\u308B\u306E\u3060\u3000\u65B0\u9BAE\u306A\u6C17\u6301\u3061\u306B\u306A\u308C\u3066\u697D\u3057\u3044\u306E\u3060",
        sprite: "tere"
    },
    {
        text: "\u30B4\u30DF\u306E\u5206\u5225\u306A\u3089\u50D5\u306B\u4EFB\u305B\u308B\u306E\u3060",
        sprite: "koshi2"
    },
    {
        text: "\u3053\u308C\u3060\u3051\u305A\u3093\u3060\u3092\u98DF\u3079\u3066\u3082\u304D\u308A\u305F\u3093\u306B\u306F\u52DD\u3066\u306A\u304B\u3063\u305F\u306E\u3060...",
        sprite: "oko"
    },
    {
        text: "\u771F\u3063\u9752\u306A\u7A7A\u9593\u3067\u50D5\u306B\u5909\u306A\u52D5\u304D\u3092\u3055\u305B\u308B\u52D5\u753B\u306F\u4F55\u304C\u76EE\u7684\u306A\u306E\u3060\uFF1F",
        sprite: "shirome"
    },
    {
        text: "\u305A\u3093\u3060\u306E\u9053\u3082\u4E00\u6B69\u304B\u3089\u3000\u306A\u306E\u3060",
        sprite: "mufufu"
    }
];
const ZUNDA_LINES_BY_PROGRESS = {
    0: [],
    1: [
        {
            text: "\u305A\u3093\u3060\u3082\u3093\u306A\u306E\u3060",
            sprite: "normal"
        },
        {
            text: "\u3055\u3063\u305D\u304F\u3060\u3051\u3069\u50D5\u306E\u4EE3\u308F\u308A\u306B\u305A\u3093\u3060\u3092\u5897\u3084\u3057\u3066\u307B\u3057\u3044\u306E\u3060",
            sprite: "hand"
        },
        {
            text: "\u3068\u3044\u3046\u306E\u3082 \u304D\u308A\u305F\u3093\u306B\u30B2\u30FC\u30E0\u3067\u30DC\u30B3\u30DC\u30B3\u306B\u8CA0\u3051\u3061\u3083\u3063\u3066",
            sprite: "uwame2"
        },
        {
            text: "\u52DD\u3064\u305F\u3081\u306B\u305A\u3093\u3060\u3092\u5927\u91CF\u306B\u98DF\u3079\u3066\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7\u3057\u305F\u3044\u306E\u3060",
            sprite: "uwame"
        },
        {
            text: "\u305D\u308C\u4EE5\u5916\u306B\u65B9\u6CD5\u306F\u306A\u3044\u306E\u3060",
            sprite: "koshi2"
        },
        {
            text: "\u307E\u305A\u306F\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F3\u3092\u8CFC\u5165\u3057\u3066\u305A\u3093\u3060\u3092\u751F\u7523\u3059\u308B\u306E\u3060",
            sprite: "yubi"
        }
    ],
    2: [
        {
            text: "\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F3\u304C\u305A\u3093\u3060\u3092\u751F\u7523\u3057\u59CB\u3081\u305F\u306E\u3060",
            sprite: "koshi"
        }
    ],
    3: [
        {
            text: "\u65B0\u3057\u304F\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F3\u3092\u8CB7\u3046\u306E\u3060",
            sprite: "yubi"
        }
    ],
    4: [
        {
            text: "\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F32\u304C\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F31\u3092\u751F\u7523\u3059\u308B\u306E\u3060",
            sprite: "hand"
        },
        {
            text: "\u3053\u306E\u8ABF\u5B50\u3067\u3069\u3093\u3069\u3093\u305A\u3093\u3060\u3092\u5897\u3084\u3059\u306E\u3060",
            sprite: "hand"
        }
    ],
    5: [
        {
            text: "\u3082\u30461\u5104\u3092\u8D85\u3048\u305F\u306E\u3060\uFF1F\u305A\u3093\u3060\u3092\u5897\u3084\u3059\u624D\u80FD\u306B\u3042\u3075\u308C\u3066\u308B\u306E\u3060\uFF01",
            sprite: "banzai2"
        },
        {
            text: "1\u4EAC\u3092\u8D85\u3048\u305F\u3089\u4F55\u304B\u304C\u8D77\u3053\u308B\u4E88\u611F\u304C\u3059\u308B\u306E\u3060",
            sprite: "uwame"
        }
    ],
    6: [
        {
            text: "\u30D6\u30FC\u30B9\u30C8\u304C\u89E3\u7981\u3055\u308C\u305F\u306E\u3060\uFF01",
            sprite: "banzai"
        },
        {
            text: "\u5168\u90E8\u306E\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F3\u3092\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7\u3067\u304D\u308B\u306E\u3060",
            sprite: "banzai"
        }
    ],
    7: [
        {
            text: "\u305A\u3093\u3060\u30A2\u30BB\u30F3\u30B7\u30E7\u30F3\u304C\u89E3\u7981\u3055\u308C\u305F\u306E\u3060\uFF01",
            sprite: "hand"
        },
        {
            text: "\u9032\u884C\u304C\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u308B\u4EE3\u308F\u308A\u306B\u8D85\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7\u306A\u306E\u3060",
            sprite: "hand"
        }
    ],
    8: [
        {
            text: "\u30A2\u30BB\u30F3\u30B7\u30E7\u30F3\u3057\u3066\u982D\u304C\u3059\u3063\u304D\u308A\u3057\u305F\u306E\u3060",
            sprite: "mufufu"
        },
        {
            text: "\u3082\u3063\u3068\u3082\u3063\u3068\u305A\u3093\u3060\u3092\u5897\u3084\u305B\u308B\u306E\u3060\uFF01",
            sprite: "mufufu"
        }
    ],
    9: [],
    10: [
        {
            text: "\u81EA\u52D5\u5316\u304C\u89E3\u7981\u3055\u308C\u305F\u306E\u3060\uFF01",
            sprite: "banzai2"
        },
        {
            text: "\u9762\u5012\u306A\u30AF\u30EA\u30C3\u30AF\u3092\u4EE3\u308F\u308A\u306B\u3084\u3063\u3066\u304F\u308C\u308B\u306E\u3060",
            sprite: "banzai2"
        },
        {
            text: "\u5DE6\u306E\u30BF\u30D6\u304B\u3089\u81EA\u52D5\u5316\u3092\u9078\u3079\u308B\u306E\u3060",
            sprite: "yubi"
        }
    ],
    11: [
        {
            text: "\u305A\u3093\u3060\u30D7\u30EC\u30B9\u30C6\u30FC\u30B8\u304C\u89E3\u7981\u3055\u308C\u305F\u306E\u3060\uFF01",
            sprite: "hand"
        },
        {
            text: "\u8EE2\u751F\u3057\u3066\u8D85\u8D85\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7\u306A\u306E\u3060",
            sprite: "hand"
        },
        {
            text: "\u6700\u521D\u306F\u30B9\u30D4\u30FC\u30C9\u30D7\u30EC\u30B9\u30C6\u30FC\u30B8\u304C\u304A\u3059\u3059\u3081\u306A\u306E\u3060",
            sprite: "yubi"
        }
    ],
    12: [
        {
            text: "\u3042\u308C\u3063\u3000\u30B9\u30D4\u30FC\u30C9\u30D7\u30EC\u30B9\u30C6\u30FC\u30B8\u3092\u9078\u3070\u306A\u304B\u3063\u305F\u306E\u3060\uFF1F",
            sprite: "shirome"
        },
        {
            text: "\u4EBA\u304B\u3089\u8A00\u308F\u308C\u305F\u3053\u3068\u306B\u5F93\u3046\u306E\u304C\u5ACC\u306A\u30BF\u30A4\u30D7...\uFF1F",
            sprite: "shirome"
        }
    ],
    13: [
        {
            text: "\u3059\u3054\u3044\u30D1\u30EF\u30FC\u3092\u611F\u3058\u308B...\uFF01",
            sprite: "bikkuri"
        },
        {
            text: "\u8EE2\u751F\u3057\u305F\u3089\u30C1\u30FC\u30C8\u80FD\u529B\u304C\u3082\u3089\u3048\u308B\u3063\u3066\u672C\u5F53\u3060\u3063\u305F\u306E\u3060",
            sprite: "bikkuri"
        }
    ],
    14: [],
    15: [
        {
            text: "\u3064\u3044\u306B\u7121\u91CF\u5927\u6570\u3092\u7A81\u7834\u3057\u305F\u306E\u3060",
            sprite: "normal"
        },
        {
            text: "\u3067\u3082\u307E\u3060\u307E\u3060\u300E\u4E0A\u300F\u3092\u76EE\u6307\u305B\u308B\u306E\u3060",
            sprite: "normal"
        }
    ],
    16: [],
    17: [
        {
            text: "\u679D\u8C46\u3068\u5927\u8C46\u304C\u89E3\u7981\u3055\u308C\u305F\u306E\u3060\uFF01",
            sprite: "banzai"
        },
        {
            text: "\u4E0A\u306E\u30BF\u30D6\u304B\u3089\u753B\u9762\u3092\u5207\u308A\u66FF\u3048\u308B\u306E\u3060",
            sprite: "banzai"
        }
    ],
    18: [],
    19: [
        {
            text: "\u305A\u3093\u3060\u304C\u5897\u3048\u3059\u304E\u3066\u3084\u3070\u3044\u306E\u3060",
            sprite: "bikkuri"
        },
        {
            text: "\u5B87\u5B99\u304C\u305A\u3093\u3060\u3067\u3044\u3063\u3071\u3044\u306B\u306A\u308A\u305D\u3046\u306A\u306E\u3060",
            sprite: "bikkuri"
        },
        {
            text: "\u3082\u3057\u30821.8e308\u3092\u8D85\u3048\u305F\u3089\u5B87\u5B99\u304C\u5D29\u58CA\u3059\u308B\u306E\u3060...",
            sprite: "uwame3"
        }
    ],
    20: [],
    21: [
        {
            text: "\u3046\u308F\u30FC\u3063\uFF011.8e308\u306B\u5C4A\u304D\u305D\u3046\u306A\u306E\u3060\uFF01",
            sprite: "guruguru2"
        }
    ],
    22: [],
    23: [
        {
            text: "\u3053\u3053\u307E\u3067\u6765\u308B\u3068\u9006\u306B\u3069\u3046\u306A\u308B\u304B\u6C17\u306B\u306A\u308B\u306E\u3060",
            sprite: "uwame"
        },
        {
            text: "\u3044\u3063\u305D1.8e308\u307E\u3067\u5897\u3084\u3057\u3066\u307F\u308B...\uFF1F",
            sprite: "uwame"
        }
    ],
    24: [],
    25: [
        {
            text: "\u30E9\u30B9\u30C8\u30B9\u30D1\u30FC\u30C8\u306A\u306E\u3060\uFF01",
            sprite: "banzai2"
        }
    ],
    26: [],
    27: [
        {
            text: "\u3042\u3042...\u5B87\u5B99\u304C\u305A\u3093\u3060\u3067\u3044\u3063\u3071\u3044\u306A\u306E\u3060",
            sprite: "guruguru2"
        }
    ],
    28: [],
    29: [
        {
            text: "\u3042\u3001\u3042\u308C\uFF1F\u7121\u4E8B\u306A\u306E\u3060\uFF1F",
            sprite: "shirome"
        }
    ],
    30: []
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bMtDE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createBubble", ()=>createBubble);
function createBubble(deps) {
    const { linesNormal, autoDelayMs, linesByProgress, spriteMap, els = {}, typeCps = 20, enableAutoTalk = true // optional: 自動発話ON/OFF
     } = deps;
    // --------------------------
    // DOM取得（外から渡されてればそれ優先）
    // --------------------------
    function getEls() {
        return {
            wrap: els.wrap ?? document.getElementById("char-bubble"),
            text: els.text ?? document.getElementById("char-bubble-text"),
            nextIcon: els.nextIcon ?? document.getElementById("bubble-next"),
            avatarImg: els.avatarImg ?? document.getElementById("char-avatar-img")
        };
    }
    let intervalId = null;
    let typingToken = 0;
    let lastText = "";
    let isTyping = false;
    let lastIndex = -1;
    let zundaAutoTimeoutId = null;
    const ZUNDA_TUTORIAL_QUEUE = [];
    // --------------------------
    // 台詞選択
    // --------------------------
    function pickNormalLine() {
        if (!linesNormal || linesNormal.length === 0) return {
            text: "",
            sprite: "normal"
        };
        let i;
        if (linesNormal.length === 1) i = 0;
        else do i = Math.floor(Math.random() * linesNormal.length);
        while (i === lastIndex);
        lastIndex = i;
        const item = linesNormal[i];
        // ★形式保証
        if (typeof item === "string") return {
            text: item,
            sprite: "normal"
        };
        return {
            text: item.text ?? "",
            sprite: item.sprite ?? "normal"
        };
    }
    function enqueueTutorialForProgress(newP) {
        ZUNDA_TUTORIAL_QUEUE.length = 0;
        const pool = linesByProgress?.[newP];
        if (Array.isArray(pool) && pool.length > 0) {
            ZUNDA_TUTORIAL_QUEUE.push(...pool);
            ZUNDA_TUTORIAL_QUEUE.push("\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u51FA\u305F\u3089\u30A8\u30E9\u30FC\u3060\u3088\u3000\u958B\u767A\u8005\u306B\u5831\u544A\u3057\u3066\u306D");
        }
    }
    function getNextZundaLine() {
        if (ZUNDA_TUTORIAL_QUEUE.length > 1) return ZUNDA_TUTORIAL_QUEUE.shift();
        else if (ZUNDA_TUTORIAL_QUEUE.length === 0) return pickNormalLine();
        // queueが1のとき = チュートリアルの最後のセリフ
        return {
            text: "",
            sprite: "normal"
        };
    }
    // --------------------------
    // UI更新
    // --------------------------
    function updateBubbleNextIcon() {
        const { nextIcon: icon, wrap } = getEls();
        if (!icon || !wrap) return;
        if (wrap.hidden) {
            icon.classList.add("is-hidden");
            return;
        }
        const hasQueue = ZUNDA_TUTORIAL_QUEUE.length > 1;
        const typingDone = !isTyping;
        if (hasQueue && typingDone) icon.classList.remove("is-hidden");
        else icon.classList.add("is-hidden");
    }
    function updateBubbleCursor() {
        const { wrap: bubble } = getEls();
        if (!bubble) return;
        const hasNext = ZUNDA_TUTORIAL_QUEUE.length > 1;
        const clickable = hasNext || isTyping;
        if (clickable) bubble.classList.remove("normal-cursor");
        else bubble.classList.add("normal-cursor");
    }
    function setZundaSprite(key) {
        const { avatarImg: avatar } = getEls();
        if (!avatar) return;
        const src = spriteMap?.[key] ?? spriteMap?.normal;
        if (!src) return;
        if (avatar.dataset.sprite !== key) {
            avatar.src = src;
            avatar.dataset.sprite = key;
        }
    }
    // --------------------------
    // タイプライター
    // --------------------------
    function stopTyping() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
    function showType(text, { cps = 18 } = {}) {
        const { wrap, text: el } = getEls();
        if (!wrap || !el) return;
        typingToken++;
        const myToken = typingToken;
        stopTyping();
        lastText = String(text ?? "");
        isTyping = true;
        wrap.hidden = false;
        el.textContent = "";
        cps = Math.max(1, Number(cps) || 18);
        const intervalMs = Math.round(1000 / cps);
        let i = 0;
        intervalId = setInterval(()=>{
            if (myToken !== typingToken) return;
            i++;
            el.textContent = lastText.slice(0, i);
            if (i >= lastText.length) {
                stopTyping();
                isTyping = false;
                updateBubbleNextIcon();
                updateBubbleCursor();
            }
        }, intervalMs);
    }
    function revealAll() {
        const { text: el } = getEls();
        if (!el) return;
        if (!isTyping) return;
        typingToken++;
        stopTyping();
        el.textContent = lastText;
        isTyping = false;
        updateBubbleNextIcon();
        updateBubbleCursor();
    }
    // --------------------------
    // 次のセリフ
    // --------------------------
    function showNextZundaLine() {
        const item = getNextZundaLine();
        if (!item || item.text === "") return;
        setZundaSprite(item.sprite);
        showType(item.text, {
            cps: typeCps
        });
        updateBubbleNextIcon();
        updateBubbleCursor();
        resetZundaAutoTalkTimer();
    }
    // --------------------------
    // 自動発話
    // --------------------------
    function resetZundaAutoTalkTimer() {
        if (!enableAutoTalk) return;
        if (zundaAutoTimeoutId) {
            clearTimeout(zundaAutoTimeoutId);
            zundaAutoTimeoutId = null;
        }
        zundaAutoTimeoutId = setTimeout(()=>{
            // チュートリアル中は何もしない
            if (ZUNDA_TUTORIAL_QUEUE.length > 0) return;
            // タイピング中は割り込まない
            if (api.isTyping()) {
                resetZundaAutoTalkTimer();
                return;
            }
            const { wrap: bubble } = getEls();
            if (bubble && bubble.hidden) bubble.hidden = false;
            showNextZundaLine();
            // 自動発話が起きた瞬間から再カウント
            resetZundaAutoTalkTimer();
        }, autoDelayMs);
    }
    // --------------------------
    // click bind / preload
    // --------------------------
    function bindClick() {
        const { wrap } = getEls();
        if (!wrap) return;
        wrap.addEventListener("click", (e)=>{
            e.preventDefault();
            if (isTyping) {
                revealAll();
                return;
            }
            showNextZundaLine();
        });
    }
    function preloadZundaSprites() {
        if (!spriteMap) return;
        for (const src of Object.values(spriteMap)){
            const img = new Image();
            img.src = src;
        }
    }
    function init() {
        preloadZundaSprites();
        bindClick();
        resetZundaAutoTalkTimer();
        updateBubbleNextIcon();
        updateBubbleCursor();
    }
    function dispose() {
        stopTyping();
        typingToken++;
        if (zundaAutoTimeoutId) {
            clearTimeout(zundaAutoTimeoutId);
            zundaAutoTimeoutId = null;
        }
    }
    const api = {
        init,
        dispose,
        // 外部から使う
        showType,
        revealAll,
        showNextZundaLine,
        enqueueTutorialForProgress,
        resetZundaAutoTalkTimer,
        setZundaSprite,
        bindClick,
        // 状態参照
        isTyping: ()=>isTyping
    };
    return api;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6ra7k":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * タブ機能を初期化する
 * - クリックでタブ切り替え
 * - localStorage にアクティブタブを保存/復元
 *
 * @param {object} opts
 * @param {string} [opts.storageKey] localStorageキー
 * @param {string} [opts.defaultTab] 初期タブ名
 * @param {Document|HTMLElement} [opts.root] イベントを張るroot（通常document）
 * @returns {{ switchTab: (name:string)=>void, dispose: ()=>void }}
 */ parcelHelpers.export(exports, "initTabs", ()=>initTabs);
const DEFAULT_TAB = "zunda";
function initTabs(opts = {}) {
    const { storageKey = "zunda_active_tab", defaultTab = DEFAULT_TAB, root = document } = opts;
    function switchTab(name) {
        // view内容切り替え
        document.querySelectorAll(".tab-btn").forEach((b)=>b.classList.toggle("active", b.dataset.target === `view-${name}`));
        document.querySelectorAll(".view").forEach((v)=>v.classList.toggle("active", v.id === `view-${name}`));
        // キャラ切り替え
        document.querySelectorAll(".char-portrait").forEach((c)=>c.classList.remove("active"));
        const charEl = document.getElementById(`char-${name}`);
        if (charEl) charEl.classList.add("active");
        try {
            localStorage.setItem(storageKey, name);
        } catch (e) {}
    }
    function onClick(e) {
        const btn = e.target.closest(".tab-btn");
        if (!btn) return;
        const target = btn.dataset.target?.replace("view-", "");
        if (target) switchTab(target);
    }
    // イベント登録
    root.addEventListener("click", onClick);
    // 初期タブ復元
    let n = defaultTab;
    try {
        n = localStorage.getItem(storageKey) || defaultTab;
    } catch (e) {}
    switchTab(n);
    // 解除用（開発/ホットリロード対策）
    function dispose() {
        root.removeEventListener("click", onClick);
    }
    return {
        switchTab,
        dispose
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gzpxP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initAutomationUI", ()=>initAutomationUI);
function initAutomationUI(deps) {
    const { getState, el, fmt, AUTO_THRESH_BY_ZUNDA, maybeBuildAscAutomationCard, toggleAllAutomation, save } = deps;
    let dirty = true;
    function markDirty() {
        dirty = true;
    }
    function refreshIfDirty() {
        if (dirty) refreshAutomationUI();
    }
    // ----------------------------
    // DOM構築＋イベント配線
    // ----------------------------
    function buildAutomationUI() {
        const rootMain = el("autoRows");
        const rootEdaSoy = el("autoList-edaSoy");
        if (!rootMain || !rootEdaSoy) return;
        // 行だけ消す（ヘッダーは別要素）
        rootMain.textContent = "";
        rootEdaSoy.textContent = "";
        const state = getState();
        // 念のため初期化（null事故防止）
        state.auto ??= {
            unlocked: {},
            enabled: {
                zd: [],
                zdFast: []
            }
        };
        state.auto.enabled.zd ??= Array(8).fill(false);
        state.auto.enabled.zdFast ??= Array(8).fill(false);
        // ---- ZD1〜8 ----
        for(let i = 1; i <= 8; i++){
            const row = document.createElement("div");
            row.className = "auto-row";
            row.innerHTML = `
        <div class="name">ZundaDimension${i}</div>
        <span class="pill" id="autoLock-zd${i}">\u{672A}\u{89E3}\u{7981}</span>
        <div class="right">
          <label style="display:flex;align-items:center;gap:6px;">
            <input type="checkbox" id="autoToggle-zd${i}">
            <span id="autoText-zd${i}">\u{81EA}\u{52D5}\u{8CFC}\u{5165}(\u{4F4E}\u{901F})</span>
          </label>
        </div>`;
            rootMain.appendChild(row);
            row.querySelector(`#autoToggle-zd${i}`)?.addEventListener("change", (e)=>{
                const s = getState();
                const on = !!e.target.checked;
                s.auto.enabled.zdFast[i - 1] = on;
                s.auto.enabled.zd[i - 1] = on;
                markDirty();
                save?.();
            });
        }
        // ---- ブースト ----
        const rowB = document.createElement("div");
        rowB.className = "auto-row";
        rowB.innerHTML = `
      <div class="name">\u{305A}\u{3093}\u{3060}\u{30D6}\u{30FC}\u{30B9}\u{30C8}</div>
      <span class="pill" id="autoLock-boost">\u{672A}\u{89E3}\u{7981}</span>
      <div class="right">
        <label style="display:flex;align-items:center;gap:6px;">
          <input type="checkbox" id="autoToggle-boost">
          <span id="autoText-boost">\u{81EA}\u{52D5}\u{8CFC}\u{5165}(\u{4F4E}\u{901F})</span>
        </label>
      </div>`;
        rootMain.appendChild(rowB);
        rowB.querySelector("#autoToggle-boost")?.addEventListener("change", (e)=>{
            const s = getState();
            const on = !!e.target.checked;
            const fastUnlocked = !!s.auto?.unlocked?.boostFast;
            if (fastUnlocked) s.auto.enabled.boostFast = on;
            else s.auto.enabled.boost = on;
            markDirty();
            save?.();
        });
        // ---- アセンション＆プレステージ（ブーストのすぐ下） ----
        // 既存関数が rootMain を受け取る想定なのでそのまま
        maybeBuildAscAutomationCard?.(rootMain);
        // ---- 一括トグルボタン ----
        const btnAllOff = document.getElementById("autoAllOff");
        const btnAllOn = document.getElementById("autoAllOn");
        if (btnAllOff) btnAllOff.onclick = ()=>{
            toggleAllAutomation?.(false);
            markDirty();
            save?.();
        };
        if (btnAllOn) btnAllOn.onclick = ()=>{
            toggleAllAutomation?.(true);
            markDirty();
            save?.();
        };
        // ---- 枝豆アップグレード ----
        const rowE = document.createElement("div");
        rowE.className = "auto-row";
        rowE.innerHTML = `
      <div class="name">\u{679D}\u{8C46}\u{30A2}\u{30C3}\u{30D7}\u{30B0}\u{30EC}\u{30FC}\u{30C9}</div>
      <span class="pill" id="autoLock-eda">\u{672A}\u{89E3}\u{7981}</span>
      <div class="right" style="display:flex;flex-direction:column;gap:4px;align-items:flex-start;">
        <label style="display:flex;align-items:center;gap:6px;">
          <input type="checkbox" id="autoToggle-eda-boost">
          <span>\u{30D6}\u{30FC}\u{30B9}\u{30C8}\u{8CFC}\u{5165}</span>
        </label>
        <label style="display:flex;align-items:center;gap:6px;">
          <input type="checkbox" id="autoToggle-eda-exp">
          <span>\u{6307}\u{6570}\u{5F37}\u{5316}</span>
        </label>
      </div>`;
        rootEdaSoy.appendChild(rowE);
        rowE.querySelector("#autoToggle-eda-boost")?.addEventListener("change", (e)=>{
            const s = getState();
            const on = !!e.target.checked;
            s.auto.enabled.eda ??= {
                boost: false,
                exp: false
            };
            s.auto.enabled.eda.boost = on;
            markDirty();
            save?.();
        });
        rowE.querySelector("#autoToggle-eda-exp")?.addEventListener("change", (e)=>{
            const s = getState();
            const on = !!e.target.checked;
            s.auto.enabled.eda ??= {
                boost: false,
                exp: false
            };
            s.auto.enabled.eda.exp = on;
            markDirty();
            save?.();
        });
        // ---- 大豆アップグレード ----
        const rowS = document.createElement("div");
        rowS.className = "auto-row";
        rowS.innerHTML = `
      <div class="name">\u{5927}\u{8C46}\u{30A2}\u{30C3}\u{30D7}\u{30B0}\u{30EC}\u{30FC}\u{30C9}</div>
      <span class="pill" id="autoLock-soy">\u{672A}\u{89E3}\u{7981}</span>
      <div class="right" style="display:flex;flex-direction:column;gap:4px;align-items:flex-start;">
        <label style="display:flex;align-items:center;gap:6px;">
          <input type="checkbox" id="autoToggle-soy-boostUp">
          <span>\u{30D6}\u{30FC}\u{30B9}\u{30C8}\u{5F37}\u{5316}</span>
        </label>
        <label style="display:flex;align-items:center;gap:6px;">
          <input type="checkbox" id="autoToggle-soy-zd8">
          <span>ZD8\u{5F37}\u{5316}</span>
        </label>
      </div>`;
        rootEdaSoy.appendChild(rowS);
        rowS.querySelector("#autoToggle-soy-boostUp")?.addEventListener("change", (e)=>{
            const s = getState();
            const on = !!e.target.checked;
            s.auto.enabled.soy ??= {
                boostUp: false,
                zd8: false
            };
            s.auto.enabled.soy.boostUp = on;
            markDirty();
            save?.();
        });
        rowS.querySelector("#autoToggle-soy-zd8")?.addEventListener("change", (e)=>{
            const s = getState();
            const on = !!e.target.checked;
            s.auto.enabled.soy ??= {
                boostUp: false,
                zd8: false
            };
            s.auto.enabled.soy.zd8 = on;
            markDirty();
            save?.();
        });
        // 初回は必ず反映
        dirty = true;
        refreshIfDirty();
    }
    // ----------------------------
    // 表示更新（旧 refreshAutomationUI）
    // ----------------------------
    function refreshAutomationUI() {
        const state = getState();
        // ずんだディメンション
        for(let i = 1; i <= 8; i++){
            const lockEl = el(`autoLock-zd${i}`);
            const unlocked = state.auto.unlocked.zd[i - 1];
            if (lockEl) {
                lockEl.textContent = unlocked ? "\u30A2\u30F3\u30ED\u30C3\u30AF\u6E08" : `\u{672A}\u{89E3}\u{7981}\u{FF08}\u{5FC5}\u{8981}: ${fmt(AUTO_THRESH_BY_ZUNDA.zd[i - 1])}\u{FF09}`;
                lockEl.style.color = unlocked ? "var(--accent)" : "var(--muted)";
            }
            const fastUnlocked = state.auto?.unlocked?.zdFast?.[i - 1] === true;
            const chk = el(`autoToggle-zd${i}`);
            if (chk) {
                chk.disabled = !unlocked;
                chk.checked = fastUnlocked ? !!state.auto.enabled.zdFast[i - 1] : !!state.auto.enabled.zd[i - 1];
            }
            const textEl = el(`autoText-zd${i}`);
            if (textEl) textEl.textContent = fastUnlocked ? "\u81EA\u52D5\u8CFC\u5165" : "\u81EA\u52D5\u8CFC\u5165(\u4F4E\u901F)";
        }
        // ブースト
        const lB = el("autoLock-boost");
        const uB = state.auto.unlocked.boost;
        if (lB) {
            lB.textContent = uB ? "\u30A2\u30F3\u30ED\u30C3\u30AF\u6E08" : `\u{672A}\u{89E3}\u{7981}\u{FF08}\u{5FC5}\u{8981}: ${fmt(AUTO_THRESH_BY_ZUNDA.boost)}\u{FF09}`;
            lB.style.color = uB ? "var(--accent)" : "var(--muted)";
        }
        const cB = el("autoToggle-boost");
        if (cB) {
            cB.disabled = !uB;
            cB.checked = !!state.auto.enabled.boost;
        }
        const fastBoost = state.auto?.unlocked?.boostFast === true;
        const tB = el("autoText-boost");
        if (tB) tB.textContent = fastBoost ? "\u81EA\u52D5\u8CFC\u5165" : "\u81EA\u52D5\u8CFC\u5165(\u4F4E\u901F)";
        // アセンション（存在する時だけ）
        const ascUnlocked = !!state.auto?.unlocked?.asc;
        const ascLock = el("autoLock-asc");
        if (ascLock) {
            ascLock.textContent = ascUnlocked ? "\u30A2\u30F3\u30ED\u30C3\u30AF\u6E08" : "\u672A\u89E3\u7981";
            ascLock.style.color = ascUnlocked ? "var(--accent)" : "var(--muted)";
        }
        const ascCard = document.getElementById("autoCard-asc");
        if (ascCard) {
            const tgl = ascCard.querySelector("#autoToggle-asc");
            const inp = ascCard.querySelector("#autoAscMul");
            if (tgl) {
                tgl.checked = !!state.auto?.enabled?.asc;
                tgl.disabled = false;
            }
            if (inp) {
                if (document.activeElement !== inp) inp.value = state.auto.ascMul ?? "";
                inp.disabled = false;
            }
        }
        // プレステージ（存在する時だけ）
        const prestUnlocked = !!state.auto?.unlocked?.prest;
        const prestTypes = [
            {
                key: "speed",
                cardId: "autoCard-prest-speed",
                toggleSel: "#autoToggle-prest-speed",
                inputSel: "#autoPrestMul-speed"
            },
            {
                key: "power",
                cardId: "autoCard-prest-power",
                toggleSel: "#autoToggle-prest-power",
                inputSel: "#autoPrestMul-power"
            },
            {
                key: "cost",
                cardId: "autoCard-prest-cost",
                toggleSel: "#autoToggle-prest-cost",
                inputSel: "#autoPrestMul-cost"
            }
        ];
        const prestEnabled = state.auto?.enabled?.prest || {};
        const prestMul = state.auto?.prestMul || {};
        prestTypes.forEach((info)=>{
            const card = document.getElementById(info.cardId);
            if (!card) return;
            const tgl = card.querySelector(info.toggleSel);
            const inp = card.querySelector(info.inputSel);
            if (tgl) {
                tgl.checked = !!prestEnabled[info.key];
                tgl.disabled = !prestUnlocked;
            }
            if (inp) {
                if (document.activeElement !== inp) inp.value = prestMul[info.key] ?? "";
                inp.disabled = !prestUnlocked;
            }
        });
        // 枝豆アップグレード
        {
            const unlocked = !!state.auto?.unlocked?.eda;
            const lockEl = el("autoLock-eda");
            if (lockEl) {
                lockEl.textContent = unlocked ? "\u30A2\u30F3\u30ED\u30C3\u30AF\u6E08" : "\u672A\u89E3\u7981";
                lockEl.style.color = unlocked ? "var(--accent)" : "var(--muted)";
            }
            const e = state.auto.enabled.eda || {
                boost: false,
                exp: false
            };
            const tBoost = el("autoToggle-eda-boost");
            const tExp = el("autoToggle-eda-exp");
            if (tBoost) {
                tBoost.disabled = !unlocked;
                tBoost.checked = unlocked && !!e.boost;
            }
            if (tExp) {
                tExp.disabled = !unlocked;
                tExp.checked = unlocked && !!e.exp;
            }
        }
        // 大豆アップグレード
        {
            const unlocked = !!state.auto?.unlocked?.soy;
            const lockEl = el("autoLock-soy");
            if (lockEl) {
                lockEl.textContent = unlocked ? "\u30A2\u30F3\u30ED\u30C3\u30AF\u6E08" : "\u672A\u89E3\u7981";
                lockEl.style.color = unlocked ? "var(--accent)" : "var(--muted)";
            }
            const s = state.auto.enabled.soy || {
                boostUp: false,
                zd8: false
            };
            const tBoostUp = el("autoToggle-soy-boostUp");
            const tZd8 = el("autoToggle-soy-zd8");
            if (tBoostUp) {
                tBoostUp.disabled = !unlocked;
                tBoostUp.checked = unlocked && !!s.boostUp;
            }
            if (tZd8) {
                tZd8.disabled = !unlocked;
                tZd8.checked = unlocked && !!s.zd8;
            }
        }
        // 枝豆 / 大豆 自動化カードの表示制御
        {
            const card = el("autoCard-edaSoy");
            if (card) {
                const show = !!state.auto?.unlocked?.eda || !!state.auto?.unlocked?.soy;
                card.style.display = show ? "" : "none";
            }
        }
        dirty = false;
    }
    return {
        buildAutomationUI,
        refreshAutomationUI,
        refreshIfDirty,
        markDirty
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gWaDA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAutomationCardsUI", ()=>createAutomationCardsUI);
function createAutomationCardsUI(deps) {
    const { getState, el, save, attachNumericInputHandler, Decimal } = deps;
    function maybeBuildAscAutomationCard(container) {
        const state = getState();
        const rootMain = container || el("autoRows");
        if (!rootMain) return;
        const unlocked = !!state?.auto?.unlocked?.asc;
        const exists = document.getElementById("autoCard-asc");
        if (!unlocked) {
            if (exists) exists.remove();
            return;
        }
        if (exists) return;
        let group = document.getElementById("autoAutomationGroup");
        if (!group) {
            group = document.createElement("div");
            group.className = "auto-row-group";
            group.id = "autoAutomationGroup";
            const boostRow = document.querySelector("#autoList .auto-row:last-of-type");
            if (boostRow && boostRow.querySelector("#autoToggle-boost")) boostRow.after(group);
            else rootMain.appendChild(group);
        }
        const ascCard = document.createElement("div");
        ascCard.className = "auto-card quarter";
        ascCard.id = "autoCard-asc";
        ascCard.innerHTML = `
      <div class="head-auto">
        <div class="top-row">
          <div class="name">\u{30A2}\u{30BB}\u{30F3}\u{30B7}\u{30E7}\u{30F3}</div>
          <div class="tip-wrap">
            <div class="tip-btn">?</div>
            <div class="tip-box">
              <div style="font-weight:700;margin-bottom:6px;">\u{30A2}\u{30BB}\u{30F3}\u{30B7}\u{30E7}\u{30F3}\u{81EA}\u{52D5}\u{5B9F}\u{884C}\u{306B}\u{3064}\u{3044}\u{3066}</div>
              <ul style="margin:0;padding-left:18px;">
                <li>\u{30A2}\u{30BB}\u{30F3}\u{30B7}\u{30E7}\u{30F3}\u{306E}\u{5B9F}\u{884C}\u{500D}\u{7387}\u{304C}\u{73FE}\u{5728}\u{306E}\u{500D}\u{7387}\u{3088}\u{308A}\u{6307}\u{5B9A}\u{500D}\u{7387}\u{9AD8}\u{304F}\u{306A}\u{308B}\u{305F}\u{3073}\u{306B}\u{3001}\u{81EA}\u{52D5}\u{3067}\u{30A2}\u{30BB}\u{30F3}\u{30B7}\u{30E7}\u{30F3}\u{3092}\u{884C}\u{3044}\u{307E}\u{3059}\u{3002}</li>
                <li>\u{4F8B}:\u{73FE}\u{5728}\u{306E}\u{5B9F}\u{884C}\u{500D}\u{7387}\u{304C}x6\u{3067}\u{6307}\u{5B9A}\u{500D}\u{7387}\u{304C}x4\u{306E}\u{3068}\u{304D}\u{3001}\u{5B9F}\u{884C}\u{500D}\u{7387}\u{304C}x24\u{306B}\u{306A}\u{308B}\u{30BF}\u{30A4}\u{30DF}\u{30F3}\u{30B0}\u{3067}\u{81EA}\u{52D5}\u{5B9F}\u{884C}\u{3059}\u{308B}\u{3002}</li>
              </ul>
            </div>
          </div>
        </div>
        <span class="pill" id="autoLock-asc">\u{30A2}\u{30F3}\u{30ED}\u{30C3}\u{30AF}\u{6E08}\u{307F}</span>
      </div>

      <div class="ctrl">
        <label style="display:flex;align-items:center;gap:8px;">
          <input type="checkbox" id="autoToggle-asc">
          <span>\u{81EA}\u{52D5}\u{5B9F}\u{884C}</span>
        </label>
        <div class="row">
          <div>\u{5B9F}\u{884C}\u{500D}\u{7387}</div>
          <input type="text" id="autoAscMul" inputmode="decimal" autocomplete="off" spellcheck="false">
        </div>
      </div>
    `;
        group.appendChild(ascCard);
        // トグル
        ascCard.querySelector("#autoToggle-asc")?.addEventListener("change", (e)=>{
            const s = getState();
            s.auto.enabled.asc = !!e.target.checked;
            save?.();
        });
        // 倍率入力
        const inpAsc = ascCard.querySelector("#autoAscMul");
        attachNumericInputHandler(inpAsc, ()=>{
            const s = getState();
            let v = s.auto.ascMul;
            if (v == null) return "4";
            if (typeof v === "number") return String(v);
            return String(v);
        }, (v)=>{
            const s = getState();
            s.auto.ascMul = v;
        }, {
            min: new Decimal(1)
        });
        // ── プレステージ自動化カード ──
        const prestUnlocked = !!state.auto?.unlocked?.prest;
        const prestTypes = [
            {
                key: "speed",
                label: "\u30B9\u30D4\u30FC\u30C9\u30D7\u30EC\u30B9\u30C6\u30FC\u30B8",
                cardId: "autoCard-prest-speed",
                toggleId: "autoToggle-prest-speed",
                inputId: "autoPrestMul-speed"
            },
            {
                key: "power",
                label: "\u30D1\u30EF\u30FC\u30D7\u30EC\u30B9\u30C6\u30FC\u30B8",
                cardId: "autoCard-prest-power",
                toggleId: "autoToggle-prest-power",
                inputId: "autoPrestMul-power"
            },
            {
                key: "cost",
                label: "\u30B3\u30B9\u30C8\u30D7\u30EC\u30B9\u30C6\u30FC\u30B8",
                cardId: "autoCard-prest-cost",
                toggleId: "autoToggle-prest-cost",
                inputId: "autoPrestMul-cost"
            }
        ];
        prestTypes.forEach((info)=>{
            let card = document.getElementById(info.cardId);
            if (!prestUnlocked) {
                if (card) card.remove();
                return;
            }
            if (card) return;
            card = document.createElement("div");
            card.className = "auto-card quarter";
            card.id = info.cardId;
            const tipTitle = info.key === "speed" ? "\u30B9\u30D4\u30FC\u30C9\u30D7\u30EC\u30B9\u30C6\u30FC\u30B8\u81EA\u52D5\u5316\u306B\u3064\u3044\u3066" : info.key === "power" ? "\u30D1\u30EF\u30FC\u30D7\u30EC\u30B9\u30C6\u30FC\u30B8\u81EA\u52D5\u5316\u306B\u3064\u3044\u3066" : "\u30B3\u30B9\u30C8\u30D7\u30EC\u30B9\u30C6\u30FC\u30B8\u81EA\u52D5\u5316\u306B\u3064\u3044\u3066";
            card.innerHTML = `
        <div class="head-auto">
          <div class="top-row">
            <div class="name">${info.label}</div>
            <div class="tip-wrap">
              <div class="tip-btn">?</div>
              <div class="tip-box">
                <div style="font-weight:700;margin-bottom:6px;">${tipTitle}</div>
                <ul style="margin:0;padding-left:18px;">
                  <li>${info.label}\u{306E}\u{30EC}\u{30D9}\u{30EB}\u{304C}\u{73FE}\u{5728}\u{306E}\u{30EC}\u{30D9}\u{30EB}\u{3088}\u{308A}\u{6307}\u{5B9A}\u{30EC}\u{30D9}\u{30EB}\u{9AD8}\u{304F}\u{306A}\u{308B}\u{3054}\u{3068}\u{306B}\u{81EA}\u{52D5}\u{3067}\u{5B9F}\u{884C}\u{3057}\u{307E}\u{3059}\u{3002}</li>
                  <li>\u{4F8B}:\u{73FE}\u{5728}\u{30EC}\u{30D9}\u{30EB}15\u{3067}\u{6307}\u{5B9A}\u{30EC}\u{30D9}\u{30EB}+5\u{306E}\u{3068}\u{304D}\u{3001}\u{30EC}\u{30D9}\u{30EB}20\u{306E}\u{30BF}\u{30A4}\u{30DF}\u{30F3}\u{30B0}\u{3067}\u{81EA}\u{52D5}\u{5B9F}\u{884C}\u{3059}\u{308B}\u{3002}</li>
                </ul>
              </div>
            </div>
          </div>
          <span class="pill" id="autoLock-prest-${info.key}">\u{30A2}\u{30F3}\u{30ED}\u{30C3}\u{30AF}\u{6E08}</span>
        </div>

        <div class="ctrl">
          <label style="display:flex;align-items:center;gap:8px;">
            <input type="checkbox" id="${info.toggleId}">
            <span>\u{81EA}\u{52D5}\u{5B9F}\u{884C}</span>
          </label>
          <div class="row">
            <div>\u{5B9F}\u{884C}\u{30EC}\u{30D9}\u{30EB} +</div>
            <input type="text" id="${info.inputId}" inputmode="decimal" autocomplete="off" spellcheck="false">
          </div>
        </div>
      `;
            group.appendChild(card);
            // トグル
            card.querySelector("#" + info.toggleId)?.addEventListener("change", (e)=>{
                const s = getState();
                s.auto.enabled.prest ??= {
                    speed: false,
                    power: false,
                    cost: false
                };
                s.auto.enabled.prest[info.key] = !!e.target.checked;
                save?.();
            });
            // 入力
            const inp = card.querySelector("#" + info.inputId);
            attachNumericInputHandler(inp, ()=>{
                const s = getState();
                s.auto.prestMul ??= {};
                let v = s.auto.prestMul[info.key];
                if (v == null) return "4";
                if (typeof v === "number") return String(v);
                return String(v);
            }, (v)=>{
                const s = getState();
                s.auto.prestMul ??= {};
                s.auto.prestMul[info.key] = v;
            }, {
                min: new Decimal(1)
            });
        });
    }
    return {
        maybeBuildAscAutomationCard
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1gxOY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initAskillTree", ()=>initAskillTree);
function initAskillTree(deps) {
    const { // state / 副作用
    getState, save, recomputeAllSkillEffects, // ゲーム計算・テキスト
    getZdMultFromUnspentAp, getASkillLabel, getASkillDesc, // 定数
    ASKILL_POS, ASKILL_EDGES, ASKILL_COSTS, ASKILL_PREREQ, // DOM id（必要なら変更可能）
    ids = {
        stage: "askill-stage",
        canvas: "askill-canvas",
        wires: "askill-wires",
        apAmount: "apAmount"
    } } = deps;
    // ----------------------------
    // 内部ユーティリティ
    // ----------------------------
    function state() {
        return getState();
    }
    function isOwned(id) {
        const o = state()?.skills?.anko?.owned;
        return !!(o && typeof o === "object" && o[id]);
    }
    function meetsPrereq(id) {
        const reqs = ASKILL_PREREQ?.[id] ?? [];
        if (reqs.length === 0) return true;
        return reqs.some((r)=>isOwned(r)); // OR条件
    }
    function canBuy(id) {
        const ap = state()?.ap || 0;
        const cost = ASKILL_COSTS?.[id] || 0;
        return !isOwned(id) && meetsPrereq(id) && ap >= cost;
    }
    // ----------------------------
    // 状態表示更新
    // ----------------------------
    function updateAskillStates() {
        const ap = state()?.ap || 0;
        document.querySelectorAll(`#${ids.stage} .askill-canvas .askill-node`).forEach((n)=>{
            const id = n.dataset.skill;
            const cost = ASKILL_COSTS?.[id] || 0;
            const owned = isOwned(id);
            const prereq = meetsPrereq(id);
            const can = !owned && prereq && ap >= cost;
            n.classList.toggle("bought", owned);
            n.classList.toggle("ready", can);
            n.classList.toggle("locked", !owned && !can);
            const badgeVal = n.querySelector(".ap-val");
            if (badgeVal) badgeVal.textContent = owned ? "\u2713" : String(cost);
        });
    }
    function updateAskillDescriptions() {
        const el = document.getElementById("desc-s3_1");
        if (!el) return;
        const m = getZdMultFromUnspentAp();
        el.textContent = `\u{672A}\u{4F7F}\u{7528}\u{306E}AP\u{306B}\u{5FDC}\u{3058}\u{3066}\u{5168}\u{3066}\u{306E}\u{305A}\u{3093}\u{3060}\u{30C7}\u{30A3}\u{30E1}\u{30F3}\u{30B7}\u{30E7}\u{30F3}\u{306E}\u{52B9}\u{7387}\u{304C}\u{5F37}\u{5316}\u{3055}\u{308C}\u{308B}\u{3002}(\u{73FE}\u{5728}x${m.toFixed(2)})`;
    }
    // costをバッジに書き込む専用
    function refreshSkillCostBadges() {
        document.querySelectorAll(`#${ids.stage} .askill-canvas .ap-val`).forEach((el)=>{
            const id = el.dataset.ap;
            const cost = ASKILL_COSTS?.[id] ?? 0;
            el.textContent = String(cost);
        });
    }
    // ----------------------------
    // 購入処理（クリック）
    // ----------------------------
    function handleSkillClick(e) {
        const n = e.currentTarget;
        const id = n.dataset.skill;
        if (isOwned(id)) return;
        const s = state();
        const cost = ASKILL_COSTS?.[id] || 0;
        if (!meetsPrereq(id)) return;
        if ((s.ap || 0) < cost) return;
        s.ap -= cost;
        s.skills ??= {};
        s.skills.anko ??= {};
        s.skills.anko.owned ??= {};
        s.skills.anko.owned[id] = true;
        const apEl = document.getElementById(ids.apAmount);
        if (apEl) apEl.textContent = String(s.ap);
        save();
        recomputeAllSkillEffects();
        updateAskillStates();
    }
    function initSkillPurchase() {
        // 既存のイベントを剥がすため clone で置換（元コード踏襲）
        document.querySelectorAll(`#${ids.stage} .askill-canvas .askill-node`).forEach((n)=>{
            const nn = n.cloneNode(true);
            n.replaceWith(nn);
        });
        document.querySelectorAll(`#${ids.stage} .askill-canvas .askill-node`).forEach((n)=>n.addEventListener("click", handleSkillClick));
        updateAskillStates();
    }
    // ----------------------------
    // DOM構築：ノード生成
    // ----------------------------
    function buildNodes() {
        const stage = document.getElementById(ids.canvas);
        if (!stage) return;
        stage.querySelectorAll(".askill-node").forEach((n)=>n.remove());
        for (const [id, p] of Object.entries(ASKILL_POS)){
            const n = document.createElement("div");
            n.className = "askill-node";
            if (id === "s1" || id === "s11_1") n.classList.add("big-node");
            n.dataset.skill = id;
            n.style.left = p.x + "%";
            n.style.top = p.y + "%";
            n.innerHTML = `<div class="ttl">${getASkillLabel(id)}</div>
<div class="desc" id="desc-${id}">${getASkillDesc(id)}</div>
<div class="ap-badge">
  <span class="ap-label">AP</span>
  <span class="ap-val" data-ap="${id}">0</span>
</div>`;
            stage.appendChild(n);
        }
        initSkillPurchase();
        refreshSkillCostBadges();
        updateAskillDescriptions();
        updateAskillStates();
    }
    // ----------------------------
    // SVG配線：線を描く
    // ----------------------------
    function drawWires() {
        const stage = document.getElementById(ids.stage);
        const wires = document.getElementById(ids.wires);
        if (!stage || !wires) return;
        const W = stage.clientWidth || 1;
        const H = stage.clientHeight || 1;
        wires.setAttribute("width", String(W));
        wires.setAttribute("height", String(H));
        wires.innerHTML = "";
        const toPX = (id)=>({
                x: ASKILL_POS[id].x / 100 * W,
                y: ASKILL_POS[id].y / 100 * H
            });
        for (const [a, b] of ASKILL_EDGES){
            const A = toPX(a), B = toPX(b);
            const midY = (A.y + B.y) / 2;
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", `M ${A.x},${A.y} C ${A.x},${midY} ${B.x},${midY} ${B.x},${B.y}`);
            path.setAttribute("class", "askill-wire");
            wires.appendChild(path);
            const tri = document.createElementNS("http://www.w3.org/2000/svg", "path");
            const aSz = 6;
            tri.setAttribute("d", `M ${B.x},${B.y - 1} l ${-aSz / 2},${-aSz} l ${aSz},0 Z`);
            tri.setAttribute("class", "askill-wire arrow");
            wires.appendChild(tri);
        }
    }
    // ----------------------------
    // 初期化：表示可能になるまで待つ
    // ----------------------------
    function initWhenReady() {
        const stage = document.getElementById(ids.stage);
        if (!stage) return;
        const ready = stage.offsetParent !== null && stage.clientWidth > 0;
        if (ready) {
            buildNodes();
            drawWires();
            // 念のため更新
            updateAskillStates();
        } else requestAnimationFrame(initWhenReady);
    }
    function onResize() {
        requestAnimationFrame(drawWires);
    }
    function init() {
        initWhenReady();
        window.addEventListener("resize", onResize);
    }
    function dispose() {
        window.removeEventListener("resize", onResize);
    }
    // 外部に出すAPI
    return {
        init,
        dispose,
        buildNodes,
        drawWires,
        initSkillPurchase,
        updateAskillStates,
        updateAskillDescriptions
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jo8fj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initAnkoChallengeUI", ()=>initAnkoChallengeUI);
function initAnkoChallengeUI(deps) {
    const { getState, ACHAL_DEFS } = deps;
    let { startAnkoChallenge } = deps; // 後から setStartHandler で差し替える想定
    function setStartHandler(fn) {
        startAnkoChallenge = fn;
    }
    function state() {
        return getState();
    }
    function gridEl() {
        return document.getElementById("ankoChalGrid");
    }
    function buildAnkoChallenges() {
        const grid = gridEl();
        if (!grid) return;
        grid.innerHTML = "";
        const count = 13;
        for(let i = 1; i <= count; i++){
            const def = ACHAL_DEFS?.[i] || {
                title: `Challenge ${i}`,
                desc: "\u8AAC\u660E\u672A\u8A2D\u5B9A",
                reward: "\u2014"
            };
            const st = state().anko?.challenges?.[i - 1] || {
                cleared: false,
                bestTime: null
            };
            const card = document.createElement("div");
            card.className = "anko-chal-card";
            card.innerHTML = `
        <div class="anko-chal-header">
          <div class="anko-chal-title">${def.title}</div>
          <span class="anko-chal-status">${st.cleared ? "\u2713\u9054\u6210\u6E08" : "\u672A\u9054\u6210"}</span>
        </div>

        <div class="anko-chal-desc">${def.desc}</div>
        <div class="anko-chal-reward"><span class="pill">\u{5831}\u{916C}</span> ${def.reward}</div>

        <div class="anko-chal-meta muted" style="font-size:12px;">
          \u{6700}\u{77ED}\u{30BF}\u{30A4}\u{30E0}: ${st.bestTime ?? "\u2014"}
        </div>

        <div class="anko-chal-actions">
          <button class="btn" data-chal-start="${i}">\u{958B}\u{59CB}</button>
        </div>
      `;
            grid.appendChild(card);
            const running = state().anko?.activeChal ?? -1;
            if (running === i) {
                card.classList.add("running");
                const btn0 = card.querySelector(".btn");
                if (btn0) btn0.textContent = "\u4E2D\u6B62";
            }
            const btn = card.querySelector(`[data-chal-start="${i}"]`);
            if (btn) btn.addEventListener("click", ()=>{
                startAnkoChallenge?.(i);
            });
        }
    }
    function refreshAnkoChallengeRunningUI() {
        const grid = gridEl();
        if (!grid) return;
        const running = state().anko?.activeChal ?? -1;
        grid.querySelectorAll(".anko-chal-card").forEach((card, idx0)=>{
            const idx = idx0 + 1;
            const isRunning = idx === running;
            card.classList.toggle("running", isRunning);
            const btn = card.querySelector(".anko-chal-actions .btn");
            if (btn) btn.textContent = isRunning ? "\u4E2D\u6B62" : "\u958B\u59CB";
        });
    }
    function refreshAnkoChallengeClearedUI() {
        const grid = gridEl();
        if (!grid) return;
        grid.querySelectorAll(".anko-chal-card").forEach((card, idx0)=>{
            const idx = idx0 + 1;
            const st = state().anko?.challenges?.[idx - 1];
            const cleared = !!(st && st.cleared);
            card.classList.toggle("cleared", cleared);
            const status = card.querySelector(".anko-chal-status");
            if (status) status.textContent = cleared ? "\u2713\u9054\u6210\u6E08" : "\u672A\u9054\u6210";
            const meta = card.querySelector(".anko-chal-meta");
            if (meta) {
                const best = st?.bestTime ?? "\u2014";
                meta.innerHTML = `\u{6700}\u{77ED}\u{30BF}\u{30A4}\u{30E0}: ${best}`;
            }
        });
    }
    function refreshAll() {
        refreshAnkoChallengeRunningUI();
        refreshAnkoChallengeClearedUI();
    }
    function init() {
        buildAnkoChallenges();
        refreshAll();
    }
    return {
        init,
        buildAnkoChallenges,
        refreshAnkoChallengeRunningUI,
        refreshAnkoChallengeClearedUI,
        refreshAll,
        setStartHandler
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4P0Ft":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCostsUI", ()=>createCostsUI);
function createCostsUI(deps) {
    const { el, fmt, getState, getTiers, costAt, maxAffordable, totalCost, edaBoostCost, edaExpCost, soyBoostUpCost, soyZd8Cost } = deps;
    function refreshCosts() {
        const state = getState();
        const tiers = getTiers();
        for(let i = 1; i <= 8; i++){
            const t = tiers[i];
            const cost1 = costAt(t); // Decimal
            const nCost1 = el(`cost1-zd${i}`);
            if (nCost1) nCost1.textContent = fmt(cost1);
            const m = maxAffordable(t);
            const nCostMax = el(`costMax-zd${i}`);
            const nBuyMax = el(`buyMax-zd${i}`);
            if (m > 0) {
                if (nCostMax) nCostMax.textContent = fmt(totalCost(t, m));
                if (nBuyMax) nBuyMax.disabled = false;
            } else {
                if (nCostMax) nCostMax.textContent = fmt(cost1);
                if (nBuyMax) nBuyMax.disabled = true;
            }
            const nBuy1 = el(`buy1-zd${i}`);
            if (nBuy1) nBuy1.disabled = state.zunda.lt(cost1);
        }
        // 枝豆
        const eBoost = el("edaBoostCost");
        if (eBoost) eBoost.textContent = fmt(edaBoostCost());
        const eExp = el("edaExpCost");
        if (eExp) eExp.textContent = fmt(edaExpCost());
        // 大豆
        const sBoostUp = el("soyBoostUpCost");
        if (sBoostUp) sBoostUp.textContent = fmt(soyBoostUpCost());
        const sZd8 = el("soyZd8Cost");
        if (sZd8) sZd8.textContent = fmt(soyZd8Cost());
    }
    return {
        refreshCosts
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4kMpU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createVisibilityUI", ()=>createVisibilityUI);
function createVisibilityUI(deps) {
    const { getTiers, D } = deps;
    // ZD2以降の表示/非表示切り替え
    function updateVisibility() {
        const tiers = getTiers();
        for(let i = 2; i <= 8; i++){
            const row = document.getElementById(`row-zd${i}`);
            if (!row) continue;
            const lower = tiers[i - 1];
            const shouldShow = D(lower.bought).gt(0);
            // display の既存値は触りすぎない（初期がgrid想定）
            row.style.display = shouldShow ? "grid" : "none";
        }
    }
    return {
        updateVisibility
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jOd6R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPrestigeUI", ()=>createPrestigeUI);
function createPrestigeUI(deps) {
    const { getState, el, D, toNum, PRESTIGE_UNLOCK, prestigeRawLevelFromZ } = deps;
    let dirty = true;
    function markDirty() {
        dirty = true;
    }
    function hasDom() {
        // 最低限これがあれば更新できる、みたいな基準
        return !!document.getElementById("doPrestigeSpeed");
    }
    function refreshPrestigeUI() {
        const state = getState();
        const unlocked = state.zunda?.gte ? state.zunda.gte(D(PRESTIGE_UNLOCK)) : toNum(state.zunda) >= PRESTIGE_UNLOCK;
        const curSpd = state.prestige?.speed || 0;
        const curPow = state.prestige?.power || 0;
        const curCst = state.prestige?.cost || 0;
        const calc = unlocked ? prestigeRawLevelFromZ(state.zunda) : -1;
        const nextSpd = unlocked ? Math.max(curSpd, Math.max(0, calc)) : curSpd;
        const nextPow = unlocked ? Math.max(curPow, Math.max(0, calc)) : curPow;
        const nextCst = unlocked ? Math.max(curCst, Math.max(0, calc)) : curCst;
        const canSpd = unlocked && calc > curSpd;
        const canPow = unlocked && calc > curPow;
        const canCst = unlocked && calc > curCst;
        const spdLabel = el("spdLabel");
        const powLabel = el("powLabel");
        const cstLabel = el("cstLabel");
        if (spdLabel) spdLabel.textContent = `Lv${curSpd} \u{2192} Lv${nextSpd}`;
        if (powLabel) powLabel.textContent = `Lv${curPow} \u{2192} Lv${nextPow}`;
        if (cstLabel) cstLabel.textContent = `Lv${curCst} \u{2192} Lv${nextCst}`;
        const btnSpd = el("doPrestigeSpeed");
        const btnPow = el("doPrestigePower");
        const btnCst = el("doPrestigeCost");
        if (btnSpd) btnSpd.disabled = !canSpd;
        if (btnPow) btnPow.disabled = !canPow;
        if (btnCst) btnCst.disabled = !canCst;
    }
    function refreshIfDirty() {
        if (!dirty) return;
        if (!hasDom()) return; // DOM無いなら何もしない（落下防止）
        dirty = false;
        refreshPrestigeUI();
    }
    return {
        markDirty,
        refreshIfDirty
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dlQRD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createBoostAscUI", ()=>createBoostAscUI);
function createBoostAscUI(deps) {
    const { el, fmt, fmt2, D, Decimal, getState, ASC_UNLOCK, boostTotal, getBoostPerItem, zundaBoostCost, canUseBoost, maxBoostAffordableZunda, ascNewMultFrom } = deps;
    function canAscend() {
        const state = getState();
        return state.zunda.gte(ASC_UNLOCK);
    }
    function refreshBoostUI() {
        const state = getState();
        const btn = el("buyBoost");
        const cnt = el("boostCount");
        const mult = el("boostMult");
        const btnMax = el("buyBoostMax");
        const total = boostTotal();
        const perItem = getBoostPerItem();
        const cost = zundaBoostCost();
        if (cnt) cnt.textContent = String(total);
        if (mult) mult.textContent = fmt(D(perItem).pow(total).toFixed(2) + "\xd7");
        if (!canUseBoost()) {
            if (btn) {
                btn.textContent = "\u89E3\u7981\u6761\u4EF6: 1e10 \u305A\u3093\u3060";
                btn.disabled = true;
            }
            if (btnMax) {
                btnMax.textContent = "\u6700\u5927\u8CFC\u5165";
                btnMax.disabled = true;
            }
            return;
        }
        if (btn) {
            btn.textContent = `\u{8CFC}\u{5165} ${fmt(cost)}`;
            btn.disabled = state.zunda.lt(cost);
        }
        const m = maxBoostAffordableZunda();
        if (btnMax) {
            btnMax.textContent = "\u6700\u5927\u8CFC\u5165";
            btnMax.disabled = m <= 0;
        }
    }
    function refreshAscUI() {
        const state = getState();
        const btn = el("doAscend");
        const nowEl = el("ascNow");
        const nowRaw = Math.max(state.ascensionMult, 1);
        const nextRaw = ascNewMultFrom(Decimal.max(state.zunda, D(1)));
        if (nowEl) nowEl.textContent = "\xd7" + fmt(nowRaw.toFixed(2));
        if (!btn) return;
        const unlocked = canAscend();
        const betterRaw = nextRaw > nowRaw;
        if (!unlocked) {
            btn.innerHTML = `\u{305A}\u{3093}\u{3060}\u{30A2}\u{30BB}\u{30F3}\u{30B7}\u{30E7}\u{30F3}<br><span class="sub">\u{89E3}\u{7981}\u{6761}\u{4EF6}: 1e16 \u{305A}\u{3093}\u{3060}</span>`;
            btn.disabled = true;
        } else {
            const ratioEff = nextRaw / nowRaw;
            btn.innerHTML = `\u{305A}\u{3093}\u{3060}\u{30A2}\u{30BB}\u{30F3}\u{30B7}\u{30E7}\u{30F3}\u{3092}\u{767A}\u{52D5}<br><span class="sub">\u{500D}\u{7387}: \xd7${fmt2(ratioEff.toFixed(2))}</span>`;
            btn.disabled = !betterRaw;
        }
    }
    function refreshBoostAndAsc() {
        refreshBoostUI();
        refreshAscUI();
    }
    return {
        refreshBoostUI,
        refreshAscUI,
        refreshBoostAndAsc
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dvn7T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createHUD", ()=>createHUD);
function createHUD(deps) {
    const { getState, el, fmt, effectiveZps } = deps;
    function updateHUD() {
        const state = getState();
        const elZ = el("zunda");
        const elP = el("pps");
        const elE = el("elapsed");
        if (elZ) elZ.textContent = fmt(state.zunda);
        if (elP) elP.textContent = fmt(effectiveZps());
        if (elE) elE.textContent = state.runSecondsAnko.toFixed(1) + "s";
    }
    return {
        updateHUD
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1QmQV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createZundaDimsUI", ()=>createZundaDimsUI);
function createZundaDimsUI(deps) {
    const { el, softFmt, getTiers } = deps;
    function updateZundaDimsSummary() {
        const tiers = getTiers();
        for(let i = 1; i <= 8; i++){
            const owned = el(`owned-zd${i}`);
            const gen = el(`gen-zd${i}`);
            if (owned) owned.textContent = softFmt(tiers[i].bought);
            if (gen && i <= 7) gen.textContent = softFmt(tiers[i].generated);
        }
    }
    return {
        updateZundaDimsSummary
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1id8Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMiscBars", ()=>createMiscBars);
function createMiscBars(deps) {
    const { getState } = deps;
    function updateMiscBars() {
        const state = getState();
        const apEl2 = document.getElementById("apAmount");
        if (apEl2) apEl2.textContent = state.ap.toString();
        const bar = document.getElementById("anconityBar");
        if (bar) bar.style.display = state.anconityReady ? "block" : "none";
    }
    return {
        updateMiscBars
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1QlvX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createUpdateUI", ()=>createUpdateUI);
function createUpdateUI(deps) {
    const { updateHUD, updateZundaDimsSummary, refreshCosts, refreshBoostAndAsc, updateVisibility, refreshPrestigeUIWrapper, refreshEdamameSoyUI, refreshEdamameSoyButtons, setEdaButtonState, refreshAnkoAP, refreshAnkoDimsUI, askill, updateAutomationIfDirty, updateMiscBars } = deps;
    return function updateUI() {
        updateHUD?.();
        updateZundaDimsSummary?.();
        refreshCosts?.();
        refreshBoostAndAsc?.();
        updateVisibility?.();
        refreshPrestigeUIWrapper?.();
        refreshEdamameSoyUI?.();
        refreshEdamameSoyButtons?.();
        setEdaButtonState?.();
        refreshAnkoAP?.();
        refreshAnkoDimsUI?.();
        askill?.updateAskillDescriptions?.();
        updateAutomationIfDirty?.();
        updateMiscBars?.();
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cskv6":[function(require,module,exports,__globalThis) {
/**
 * tick内で使う倍率をまとめて計算する
 * - getEffects() は外で1回計算して渡す（責務分離）
 * - ここでは「各倍率をどうまとめるか」だけを担当
 *
 * @param {object} state
 * @param {object} deps - tickStep側で用意した関数群
 * @param {object} ef - getEffects() の結果
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcTickMults", ()=>calcTickMults);
function calcTickMults(state, deps, ef) {
    const { getBoostMult, getAscEffective, getZdMultFromUnspentAp, getZd8Mult, getAnkoZundaMult } = deps;
    const bMult = getBoostMult();
    const aMult = getAscEffective();
    const zdMultAP = getZdMultFromUnspentAp();
    const zd8m = getZd8Mult();
    const ankoM = getAnkoZundaMult();
    return {
        // ZUNDA生産で使う
        zunda: {
            bMult,
            aMult,
            zdMultAP,
            zd8m,
            ankoM,
            zdEffMul: ef?.zdEffMul || 1
        },
        // ANKO生産で使う
        anko: {
            ad1Mul: ef?.ad1Mul || 1,
            ad2Mul: ef?.ad2Mul || 1
        },
        // tickStep内の他処理が使うならここへ
        raw: {
            bMult,
            aMult,
            zdMultAP,
            zd8m,
            ankoM,
            ef
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7MfET":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ZUNDA 生産 tick（上位→下位生成）
 * @param {object} state
 * @param {number} dt
 * @param {Array} tiers - ZUNDA tier配列（1..8想定）
 * @param {object} mults - {
 *   bMult, aMult, ankoM, zdMultAP, zd8m, zdEffMul
 * }
 */ parcelHelpers.export(exports, "tickZunda", ()=>tickZunda);
var _numbersJs = require("../constants/numbers.js");
function tickZunda(state, dt, tiers, mults) {
    const bMult = mults?.bMult ?? 1;
    const aMult = mults?.aMult ?? 1;
    const ankoM = mults?.ankoM ?? 1;
    const zdMultAP = mults?.zdMultAP ?? 1;
    const zd8m = mults?.zd8m ?? 1;
    const zdEffMul = mults?.zdEffMul ?? 1;
    // 上位→下位を生成 (8->2)
    for(let i = 8; i >= 2; i--){
        const p = tiers[i];
        const t = tiers[i - 1];
        // rate = bought * generated * prodPerSec
        // bought/generated は Decimal想定、prodPerSecは numberでもOK
        let rate = (0, _numbersJs.D)(p?.bought || 0).mul(p?.generated || 1).mul(p?.prodPerSec || 0);
        let rDec = rate.mul(bMult).mul(aMult).mul(ankoM).mul(zdMultAP).mul(zdEffMul);
        if (i === 8) rDec = rDec.mul(zd8m);
        if (rDec.gt(0)) t.generated = t.generated.add(rDec.mul(dt));
    }
}

},{"../constants/numbers.js":"f8oci","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gXmwe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PRESTIGE_REF", ()=>PRESTIGE_REF);
parcelHelpers.export(exports, "PRESTIGE_P", ()=>PRESTIGE_P);
parcelHelpers.export(exports, "PRESTIGE_S", ()=>PRESTIGE_S);
parcelHelpers.export(exports, "createPrestigeSystem", ()=>createPrestigeSystem);
const PRESTIGE_REF = 38.8; // アンカー基準
const PRESTIGE_P = 1.25; // 1.10〜1.25で好みへ
const PRESTIGE_S = 6; // 立ち上がり感はSで微調整
function createPrestigeSystem(deps) {
    const { toNum, log10Safe } = deps;
    function prestigeRawLevelFromZ(zDec) {
        const lg = toNum(log10Safe(zDec));
        const L = lg - PRESTIGE_REF;
        if (L <= 0) return -1;
        // 1e45→Lv6 に合うよう毎回決定
        const L0 = 45 - PRESTIGE_REF;
        const A = 6 / Math.pow(Math.log(1 + L0 / PRESTIGE_S), PRESTIGE_P);
        const lvl = A * Math.pow(Math.log(1 + L / PRESTIGE_S), PRESTIGE_P);
        return Math.floor(lvl);
    }
    return {
        prestigeRawLevelFromZ
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9PuR0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AD_COST", ()=>AD_COST);
/**
 * あんこディメンションのコスト計算（純粋関数）
 * @param {number} dim - ディメンション番号
 * @param {number|Decimal} bought - 購入数
 * @returns {number|null}
 */ parcelHelpers.export(exports, "calcAdCost", ()=>calcAdCost);
// 1個のコスト（boughtは数値で渡す想定）
parcelHelpers.export(exports, "calcAdUnitCost", ()=>calcAdUnitCost);
// n個まとめ買いの合計コスト（等比）
parcelHelpers.export(exports, "calcAdTotalCost", ()=>calcAdTotalCost);
// APでn個買える？
parcelHelpers.export(exports, "canAffordAd", ()=>canAffordAd);
// 最大購入数（2分探索）
parcelHelpers.export(exports, "maxAffordableAd", ()=>maxAffordableAd);
var _numbersJs = require("../constants/numbers.js");
const AD_COST = (()=>{
    const cost = {};
    for(let i = 1; i <= 8; i++){
        const step = Math.pow(4, i); // numberでOK
        const base = i === 1 ? 1 : step; // number
        cost[i] = {
            base,
            step
        };
    }
    return cost;
})();
function calcAdCost(dim, bought) {
    const rule = AD_COST[dim];
    if (!rule) return null;
    const b = bought ?? 0;
    return Math.ceil(rule.base * Math.pow(rule.step, b));
}
function calcAdUnitCost(dim, bought) {
    const rule = AD_COST[dim];
    if (!rule) return null;
    const b = (0, _numbersJs.D)(bought); // Decimal保証
    return (0, _numbersJs.D)(rule.base).mul((0, _numbersJs.D)(rule.step).pow(b));
}
function calcAdTotalCost(dim, bought, n) {
    const rule = AD_COST[dim];
    if (!rule) return null;
    const b = (0, _numbersJs.D)(bought);
    const N = (0, _numbersJs.D)(n).floor().max(1);
    const a = (0, _numbersJs.D)(rule.base).mul((0, _numbersJs.D)(rule.step).pow(b));
    const r = (0, _numbersJs.D)(rule.step);
    // r === 1 の特例
    if (r.eq(1)) return a.mul(N).ceil();
    // a * (r^n - 1) / (r - 1)
    return a.mul(r.pow(N).minus(1)).div(r.minus(1)).ceil();
}
function canAffordAd(dim, bought, ap, n = 1) {
    const total = calcAdTotalCost(dim, bought, n);
    if (!total) return false;
    return (0, _numbersJs.D)(ap).gte(total);
}
function maxAffordableAd(dim, bought, ap) {
    const rule = AD_COST[dim];
    if (!rule) return 0;
    const b = (0, _numbersJs.D)(bought);
    const have = (0, _numbersJs.D)(ap);
    const totalCost = (n)=>calcAdTotalCost(dim, b, n);
    let lo = 0, hi = 1;
    while(totalCost(hi).lte(have))hi *= 2;
    while(lo < hi){
        const mid = Math.ceil((lo + hi) / 2);
        if (totalCost(mid).lte(have)) lo = mid;
        else hi = mid - 1;
    }
    return lo;
}

},{"../constants/numbers.js":"f8oci","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2xzNA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ANKO 生産 tick
 * @param {object} state
 * @param {number} dt
 * @param {object} mults - { ad1Mul, ad2Mul }
 */ parcelHelpers.export(exports, "tickAnko", ()=>tickAnko);
var _numbersJs = require("../constants/numbers.js");
function tickAnko(state, dt, mults) {
    const ad1Mul = mults?.ad1Mul ?? 1;
    const ad2Mul = mults?.ad2Mul ?? 1;
    // 上位→下位を生成（8->2）
    for(let i = 8; i >= 2; i--){
        const self = state.anko.dims[i];
        const lower = state.anko.dims[i - 1];
        const effA = self.bought.mul(self.generated);
        let rateA = effA.mul(self.prodPerSec);
        if (i === 2) rateA = rateA.mul(ad2Mul);
        lower.generated = lower.generated.add(rateA.mul(dt));
    }
    // ad1 -> anko.amount
    const ad1 = state.anko.dims[1];
    const eff1 = ad1.bought.mul(ad1.generated);
    const rateA1 = eff1.mul(ad1.prodPerSec).mul(ad1Mul);
    if (rateA1.gt(0)) // state.anko.amount は Decimal 統一なら D(...) は不要。保険で残してもOK
    state.anko.amount = (0, _numbersJs.D)(state.anko.amount || 0).add(rateA1.mul(dt));
}

},{"../constants/numbers.js":"f8oci","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"foQwd":[function(require,module,exports,__globalThis) {
// あんこスキル関連
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ASKILL_COSTS", ()=>ASKILL_COSTS);
parcelHelpers.export(exports, "ASKILL_PREREQ", ()=>ASKILL_PREREQ);
parcelHelpers.export(exports, "ASKILL_POS", ()=>ASKILL_POS);
parcelHelpers.export(exports, "ASKILL_EDGES", ()=>ASKILL_EDGES);
parcelHelpers.export(exports, "ASKILL_LABELS", ()=>ASKILL_LABELS);
parcelHelpers.export(exports, "getASkillLabel", ()=>getASkillLabel);
parcelHelpers.export(exports, "ASKILL_DESC", ()=>ASKILL_DESC);
parcelHelpers.export(exports, "getASkillDesc", ()=>getASkillDesc);
const ASKILL_COSTS = {
    s1: 0,
    s2_1: 1,
    s2_2: 1,
    s3_1: 2,
    s3_2: 2,
    s4: 3,
    s5_1: 8,
    s5_2: 8,
    s5_3: 12,
    s6_1: 15,
    s6_2: 15,
    s6_3: 20,
    s7_1: 30,
    s7_2: 40,
    s7_3: 35,
    s8: 512,
    s9_1: 900,
    s9_2: 800,
    s10_1: 1050,
    s10_2: 800,
    s10_3: 800,
    s11_1: 1050,
    s11_2: 800,
    s11_3: 800,
    s12: 10000
};
const ASKILL_PREREQ = {
    s1: [],
    s2_1: [
        's1'
    ],
    s2_2: [
        's1'
    ],
    s3_1: [
        's2_1'
    ],
    s3_2: [
        's2_2'
    ],
    s4: [
        's3_1',
        's3_2'
    ],
    s5_1: [
        's4'
    ],
    s5_2: [
        's4'
    ],
    s5_3: [
        's4'
    ],
    s6_1: [
        's5_1'
    ],
    s6_2: [
        's5_2'
    ],
    s6_3: [
        's5_3'
    ],
    s7_1: [
        's6_1'
    ],
    s7_2: [
        's6_2'
    ],
    s7_3: [
        's6_3'
    ],
    s8: [
        's7_1',
        's7_2',
        's7_3'
    ],
    s9_1: [
        's8'
    ],
    s9_2: [
        's8'
    ],
    s10_1: [
        's9_1'
    ],
    s10_2: [
        's9_2'
    ],
    s10_3: [
        's9_2'
    ],
    s11_1: [
        's10_1'
    ],
    s11_2: [
        's10_2'
    ],
    s11_3: [
        's10_3'
    ],
    s12: [
        's11_1',
        's11_2',
        's11_3'
    ]
};
const ASKILL_POS = {
    s1: {
        x: 50,
        y: 12
    },
    s2_1: {
        x: 34,
        y: 35
    },
    s2_2: {
        x: 66,
        y: 35
    },
    s3_1: {
        x: 34,
        y: 60
    },
    s3_2: {
        x: 66,
        y: 60
    },
    s4: {
        x: 50,
        y: 85
    },
    s5_1: {
        x: 17,
        y: 110
    },
    s5_2: {
        x: 50,
        y: 110
    },
    s5_3: {
        x: 83,
        y: 110
    },
    s6_1: {
        x: 17,
        y: 135
    },
    s6_2: {
        x: 50,
        y: 135
    },
    s6_3: {
        x: 83,
        y: 135
    },
    s7_1: {
        x: 17,
        y: 160
    },
    s7_2: {
        x: 50,
        y: 160
    },
    s7_3: {
        x: 83,
        y: 160
    },
    s8: {
        x: 50,
        y: 185
    },
    s9_1: {
        x: 34,
        y: 210
    },
    s9_2: {
        x: 66,
        y: 210
    },
    s10_1: {
        x: 17,
        y: 235
    },
    s10_2: {
        x: 50,
        y: 235
    },
    s10_3: {
        x: 83,
        y: 235
    },
    s11_1: {
        x: 17,
        y: 260
    },
    s11_2: {
        x: 50,
        y: 260
    },
    s11_3: {
        x: 83,
        y: 260
    },
    s12: {
        x: 50,
        y: 285
    }
};
const ASKILL_EDGES = [
    [
        's1',
        's2_1'
    ],
    [
        's1',
        's2_2'
    ],
    [
        's2_1',
        's3_1'
    ],
    [
        's2_2',
        's3_2'
    ],
    [
        's3_1',
        's4'
    ],
    [
        's3_2',
        's4'
    ],
    [
        's4',
        's5_1'
    ],
    [
        's4',
        's5_2'
    ],
    [
        's4',
        's5_3'
    ],
    [
        's5_1',
        's6_1'
    ],
    [
        's5_2',
        's6_2'
    ],
    [
        's5_3',
        's6_3'
    ],
    [
        's6_1',
        's7_1'
    ],
    [
        's6_2',
        's7_2'
    ],
    [
        's6_3',
        's7_3'
    ],
    [
        's7_1',
        's8'
    ],
    [
        's7_2',
        's8'
    ],
    [
        's7_3',
        's8'
    ],
    [
        's8',
        's9_1'
    ],
    [
        's8',
        's9_2'
    ],
    [
        's9_1',
        's10_1'
    ],
    [
        's9_2',
        's10_2'
    ],
    [
        's9_2',
        's10_3'
    ],
    [
        's10_1',
        's11_1'
    ],
    [
        's10_2',
        's11_2'
    ],
    [
        's10_3',
        's11_3'
    ],
    [
        's11_1',
        's12'
    ],
    [
        's11_2',
        's12'
    ],
    [
        's11_3',
        's12'
    ]
];
const ASKILL_LABELS = {
    s1: "1 \u30B9\u30BF\u30FC\u30BF\u30FC\u30BB\u30C3\u30C8",
    s2_1: "2-1 \u30B9\u30BF\u30FC\u30C8\u30C0\u30C3\u30B7\u30E5",
    s2_2: "2-2 \u6307\u6570\u8FFD\u52A0",
    s3_1: "3-1 AP\u6E29\u5B58\u754C\u9688",
    s3_2: "3-2 \u96C6\u4E2D\u529B",
    s4: "4 \u5F37\u6B32\u306A\u30C9\u30ED\u30FC",
    s5_1: "5-1 \u6E96\u5099\u4E07\u7AEF",
    s5_2: "5-2 \u30D6\u30FC\u30B9\u30C8\u4E2D\u6BD2",
    s5_3: "5-3 \u3058\u308F\u3058\u308F8",
    s6_1: "6-1 \u5024\u5207\u308A\u4E0A\u624B",
    s6_2: "6-2 \u72C2\u6C17\u7684\u306A\u53CE\u7A6B",
    s6_3: "6-3 \u5192\u6D9C\u7684\u306A\u683D\u57F9",
    s7_1: "7-1 \u30CF\u30C3\u30D4\u30FC\u30D7\u30EC\u30BC\u30F3\u30C8",
    s7_2: "7-2 \u3053\u3057\u3042\u3093\u30D1\u30EF\u30FC",
    s7_3: "7-3 \u3064\u3076\u3042\u3093\u30D1\u30EF\u30FC",
    s8: "8 \u30BF\u30A4\u30E0\u30A2\u30BF\u30C3\u30AF\u958B\u59CB",
    s9_1: "9-1 \u7FA9\u52D9\u7684\u306A\u5468\u56DE",
    s9_2: "9-2 \u4E8C\u6BDB\u4F5C",
    s10_1: "10-1 Idle\u306A\u767A\u60F3",
    s10_2: "10-2 \u5927\u798F\u30D1\u30EF\u30FC",
    s10_3: "10-3 \u30D6\u30FC\u30B9\u30C8\u306E\u30D6\u30FC\u30B9\u30C8",
    s11_1: "11-1 Idle\u306A\u4F5C\u6226",
    s11_2: "11-2 \u5927\u798F\u30D1\u30EF\u30FC",
    s11_3: "11-3 \u5897\u52A0\u3059\u308B\u6307\u6570",
    s12: "12 \u65C5\u306E\u6E96\u5099"
};
function getASkillLabel(id) {
    return ASKILL_LABELS[id] ?? id;
}
const ASKILL_DESC = {
    s1: "\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F3\u306E\u81EA\u52D5\u8CFC\u5165\uFF08\u4F4E\u901F\uFF09\u3068\u679D\u8C46\u304C\u5E38\u306B\u30A2\u30F3\u30ED\u30C3\u30AF\u3055\u308C\u3001\u30A2\u30F3\u30B3\u30CB\u30C6\u30A3\u958B\u59CB\u6642\u306B\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F31\u309210\u500B\u6240\u6301\u3057\u305F\u72B6\u614B\u306B\u306A\u308B\u3002",
    s2_1: "ZPS\u304C25\u500D\u306B\u5F37\u5316\u3055\u308C\u308B\u3002",
    s2_2: "ZPS\u306E\u6307\u6570\u306B0.05\u304C\u8FFD\u52A0\u3055\u308C\u308B\u3002",
    s3_1: "\u672A\u4F7F\u7528\u306EAP\u306B\u5FDC\u3058\u3066\u5168\u3066\u306E\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F3\u306E\u52B9\u7387\u304C\u5F37\u5316(\u73FE\u5728x1.00)",
    s3_2: "\u30A2\u30BB\u30F3\u30B7\u30E7\u30F3\u306E\u52B9\u529B\u500D\u7387\u304C^1.2\u3067\u5F37\u5316\u3002",
    s4: "AP\u306E\u5165\u624B\u91CF\u304C2\u500D\u306B\u5F37\u5316\u3002",
    s5_1: "\u30A2\u30F3\u30B3\u30CB\u30C6\u30A3\u958B\u59CB\u6642\u306B\u305A\u3093\u3060\u30D6\u30FC\u30B9\u30C8\u309220\u500B\u6240\u6301\u3057\u305F\u72B6\u614B\u306B\u306A\u308B\u3002",
    s5_2: "\u30D6\u30FC\u30B9\u30C81\u500B\u3042\u305F\u308A\u306E\u500D\u7387\u309220%\u5F37\u5316\u3002",
    s5_3: "\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F38\u306E\u52B9\u7387\u3092(\u6240\u6709\u6570*4)%\u5F37\u5316\u3002",
    s6_1: "\u30A2\u30F3\u30B3\u30CB\u30C6\u30A3\u958B\u59CB\u6642\u306B\u30B3\u30B9\u30C8\u30D7\u30EC\u30B9\u30C6\u30FC\u30B8\u304C\u30EC\u30D9\u30EB15\u306B\u306A\u308B\u3002",
    s6_2: "\u679D\u8C46\u5165\u624B\u91CF\u30925\u500D\u306B\u5F37\u5316\u3002",
    s6_3: "SoyPS\u30923\u52A0\u7B97\u3002",
    s7_1: "\u30A2\u30F3\u30B3\u30CB\u30C6\u30A3\u958B\u59CB\u6642\u306B\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F32\uFF5E6\u30921\u500B\u6240\u6301\u3057\u305F\u72B6\u614B\u306B\u306A\u308B\u3002",
    s7_2: "\u3042\u3093\u3053\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F31\u306E\u52B9\u7387\u30923\u500D\u306B\u5F37\u5316\u3002",
    s7_3: "\u3042\u3093\u3053\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F32\u306E\u52B9\u7387\u30921.5\u500D\u306B\u5F37\u5316\u3002",
    s8: "\u3042\u3093\u3053\u30C1\u30E3\u30EC\u30F3\u30B8\u306E\u5408\u8A08\u6700\u901F\u30AF\u30EA\u30A2\u6642\u9593\u306B\u5FDC\u3058\u3066AP\u306E\u5165\u624B\u91CF\u304C\u5897\u52A0(\u73FE\u5728x1.00)",
    s9_1: "\u30A2\u30F3\u30B3\u30CB\u30C6\u30A3\u9054\u6210\u56DE\u6570\u306B\u5FDC\u3058\u3066\u5168\u3042\u3093\u3053\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F3\u306E\u52B9\u7387\u3092\u5F37\u5316(\u73FE\u5728x1.00)",
    s9_2: "\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F3\u3092\u8CFC\u5165\u6642\u3001\u5927\u8C46\u30920.1\u5165\u624B\u3002",
    s10_1: "\u6700\u901F\u30A2\u30F3\u30B3\u30CB\u30C6\u30A3\u6642\u9593x10\u304C\u7D4C\u904E\u3059\u308B\u3054\u3068\u306BAP\u30921\u5897\u52A0(\u3053\u306E\u52B9\u679C\u306F\u30AA\u30D5\u30E9\u30A4\u30F3\u3067\u3082\u767A\u52D5\u3059\u308B)",
    s10_2: "\u3042\u3093\u3053\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F33\u306E\u52B9\u7387\u30921.3\u500D\u306B\u5F37\u5316\u3002",
    s10_3: "\u3042\u3093\u3053\u30C1\u30E3\u30EC\u30F3\u30B84\u306E\u6700\u901F\u30AF\u30EA\u30A2\u6642\u9593\u306B\u5FDC\u3058\u3066\u30D6\u30FC\u30B9\u30C8\u306E\u52B9\u529B\u500D\u7387\u3092\u5F37\u5316(\u73FE\u5728x1.00)",
    s11_1: "\u6700\u901F\u30A2\u30F3\u30B3\u30CB\u30C6\u30A3\u6642\u9593x10\u304C\u7D4C\u904E\u3059\u308B\u3054\u3068\u306B\u30A2\u30F3\u30B3\u30CB\u30C6\u30A3\u9054\u6210\u56DE\u6570\u30921\u5897\u52A0(\u3053\u306E\u52B9\u679C\u306F\u30AA\u30D5\u30E9\u30A4\u30F3\u3067\u3082\u767A\u52D5\u3059\u308B)",
    s11_2: "\u5168\u3066\u306E\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F3\u306E\u52B9\u7387\u30928\u500D\u306B\u5F37\u5316\u3002",
    s11_3: "\u3042\u3093\u3053\u30C1\u30E3\u30EC\u30F3\u30B813\u306E\u6700\u901F\u30AF\u30EA\u30A2\u6642\u9593\u306B\u5FDC\u3058\u3066ZPS\u306B\u6307\u6570\u304C\u8FFD\u52A0\u3055\u308C\u308B(\u73FE\u5728+0.00)",
    s12: "\u3042\u3093\u3053\u309210000\u6240\u6301\u3057\u305F\u72B6\u614B\u3067\u30A2\u30F3\u30B3\u30CB\u30C6\u30A3\u3092\u958B\u59CB\u3059\u308B\u3002"
};
function getASkillDesc(id) {
    return ASKILL_DESC[id] ?? id;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"adY7a":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ACHAL_DEFS", ()=>ACHAL_DEFS);
const ACHAL_DEFS = [
    null,
    {
        key: 'ac1',
        title: "1 \u30B9\u30D4\u30FC\u30C9\u547D",
        desc: "\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F32\uFF5E8\u30921\u500B\u307E\u3067\u3057\u304B\u8CFC\u5165\u3067\u304D\u306A\u3044\u304C\u3001ZPS\u304C1.25\u4E57\u3055\u308C\u308B\u3002",
        reward: "\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F31\u306E\u81EA\u52D5\u8CFC\u5165\uFF08\u9AD8\u901F\uFF09\u3092\u89E3\u7981"
    },
    {
        key: 'ac2',
        title: "2 \u30B9\u30ED\u30FC\u30B9\u30BF\u30FC\u30C8",
        desc: "\u5168\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F3\u306E\u52B9\u529B\u304C1/16\u306B\u306A\u308B\u304C\u3001128\u79D2\u3054\u3068\u306B2\u500D\u306B\u306A\u308B\u3002",
        reward: "\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F32\u306E\u81EA\u52D5\u8CFC\u5165\uFF08\u9AD8\u901F\uFF09\u3092\u89E3\u7981"
    },
    {
        key: 'ac3',
        title: "3 \u606F\u5207\u308C\u4F53\u8CEA",
        desc: "\u30A2\u30BB\u30F3\u30B7\u30E7\u30F3\u3059\u308B\u3054\u3068\u306BZPS\u306E\u6307\u6570\u304C0.005\u4F4E\u4E0B(\u6700\u4F4E0.01)\u3002",
        reward: "\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F33\u306E\u81EA\u52D5\u8CFC\u5165\uFF08\u9AD8\u901F\uFF09\u3092\u89E3\u7981"
    },
    {
        key: 'ac4',
        title: "4 \u30D6\u30FC\u30B9\u30C8\u4E0D\u8DB3",
        desc: "\u30D6\u30FC\u30B9\u30C81\u3064\u3042\u305F\u308A\u306E\u52B9\u529B\u304C30%\u4F4E\u4E0B\u3002",
        reward: "\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F34\u306E\u81EA\u52D5\u8CFC\u5165\uFF08\u9AD8\u901F\uFF09\u3092\u89E3\u7981"
    },
    {
        key: 'ac5',
        title: "5 \u30A4\u30F3\u30D5\u30EC\u4FA1\u683C",
        desc: "\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F3\u306E\u4FA1\u683C\u304C2\u4E57\u3055\u308C\u308B\u3002",
        reward: "\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F35\u306E\u81EA\u52D5\u8CFC\u5165\uFF08\u9AD8\u901F\uFF09\u3092\u89E3\u7981"
    },
    {
        key: 'ac6',
        title: "6 \u5B8C\u5168\u6570",
        desc: "\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F31\uFF5E6\u3057\u304B\u8CFC\u5165\u3067\u304D\u306A\u3044\u3002",
        reward: "\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F36\u306E\u81EA\u52D5\u8CFC\u5165\uFF08\u9AD8\u901F\uFF09\u3092\u89E3\u7981"
    },
    {
        key: 'ac7',
        title: "7 \u885D\u52D5\u8CB7\u3044\u306B\u6CE8\u610F",
        desc: "\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F3\u30921\u3064\u8CFC\u5165\u3059\u308B\u3054\u3068\u306BZPS\u306E\u6307\u6570\u304C0.005\u4F4E\u4E0B(\u6700\u4F4E0.01)\u3002",
        reward: "\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F37\u306E\u81EA\u52D5\u8CFC\u5165\uFF08\u9AD8\u901F\uFF09\u3092\u89E3\u7981"
    },
    {
        key: 'ac8',
        title: "8 \u304A\u3072\u3068\u308A\u69D81\u3064\u307E\u3067",
        desc: "\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F31\uFF5E7\u304C1\u500B\u307E\u3067\u3057\u304B\u8CFC\u5165\u3067\u304D\u306A\u3044\u3002",
        reward: "\u305A\u3093\u3060\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F38\u306E\u81EA\u52D5\u8CFC\u5165\uFF08\u9AD8\u901F\uFF09\u3092\u89E3\u7981"
    },
    {
        key: 'ac9',
        title: "9 \u77ED\u671F\u6C7A\u6226",
        desc: "16\u79D2\u3054\u3068\u306B\u30D6\u30FC\u30B9\u30C8\u306E\u4FA1\u683C\u304C1.3\u500D\u306B\u4E0A\u6607\u3002",
        reward: "\u305A\u3093\u3060\u30D6\u30FC\u30B9\u30C8\u306E\u81EA\u52D5\u8CFC\u5165\uFF08\u9AD8\u901F\uFF09\u3092\u89E3\u7981"
    },
    {
        key: 'ac10',
        title: "10 \u30E9\u30F3\u30CA\u30FC\u30BA\u30CF\u30A4",
        desc: "\u30D7\u30EC\u30B9\u30C6\u30FC\u30B8\u304C\u3067\u304D\u306A\u304F\u306A\u308B\u304C\u3001\u30A2\u30BB\u30F3\u30B7\u30E7\u30F3\u306E\u52B9\u529B\u304C3\u4E57\u3055\u308C\u308B\u3002",
        reward: "\u305A\u3093\u3060\u30A2\u30BB\u30F3\u30B7\u30E7\u30F3\u306E\u81EA\u52D5\u5316\u3092\u89E3\u7981"
    },
    {
        key: 'ac11',
        title: "11 3n\u306E\u6CD5\u5247",
        desc: "\u30D7\u30EC\u30B9\u30C6\u30FC\u30B8\u3057\u305F\u56DE\u6570\u304C3\u306E\u500D\u6570\u3067\u306A\u3044\u3068\u304DZPS\u304C0.5\u4E57\u3055\u308C\u308B\u3002",
        reward: "\u305A\u3093\u3060\u30D7\u30EC\u30B9\u30C6\u30FC\u30B8\u306E\u81EA\u52D5\u5316\u3092\u89E3\u7981"
    },
    {
        key: 'ac12',
        title: "12 \u8C46\u30DE\u30CB\u30A2",
        desc: "\u30D6\u30FC\u30B9\u30C8\u3092\u8CFC\u5165\u3067\u304D\u306A\u304F\u306A\u308B\u304C\u3001\u679D\u8C46/\u5927\u8C46\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u3092\u5B89\u304F\u8CFC\u5165\u3067\u304D\u308B\u3002",
        reward: "\u679D\u8C46/\u5927\u8C46\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u306E\u81EA\u52D5\u8CFC\u5165\u3092\u89E3\u7981"
    },
    {
        key: 'ac13',
        title: "13 \u30B7\u30F3\u30D7\u30EB\u306A\u6311\u6226",
        desc: "\u3042\u3093\u3053\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F3\u306E\u52B9\u679C\u304C\u7121\u52B9\u5316\u3055\u308C\u308B\u3002",
        reward: "\u30A2\u30F3\u30B3\u30CB\u30C6\u30A3\u306E\u81EA\u52D5\u5316\u3092\u89E3\u7981"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"38usi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAnkoChallengeLogic", ()=>createAnkoChallengeLogic);
function createAnkoChallengeLogic(deps) {
    const { getState, D, DateNow = ()=>Date.now(), // 既存ロジック（外から注入）
    doAnconityReset, isChal, grantAnkoChallengeReward, // 反映・副作用（外から注入）
    recomputeAllSkillEffects, refreshBoostAndAsc, refreshAscUI, refreshCostMultipliers, updateUI, save, // ★UI側へ通知（UIモジュールはロジックから見ない）
    onUIUpdate } = deps;
    function state() {
        return getState();
    }
    function stopAnkoChallenge() {
        const s = state();
        if (!s.anko) return;
        s.anko.activeChal = -1;
        recomputeAllSkillEffects?.();
        onUIUpdate?.();
        updateUI?.();
    }
    function startAnkoChallenge(idx) {
        const s = state();
        s.anko = s.anko || {};
        const running = s.anko.activeChal ?? -1;
        // 同じものが実行中なら中止扱い
        if (running === idx) {
            stopAnkoChallenge();
            return;
        }
        // ほかが走ってたら止める
        if (running !== -1) stopAnkoChallenge();
        // アンコニティ開始時と同じ状態へリセット
        doAnconityReset();
        s.anko.activeChal = idx;
        s.anko.chalStartMs = DateNow();
        s.anko.chalCounters = {
            ascCount: 0,
            totalDimBought: D(0),
            perDimOwned: Array(9).fill(0)
        };
        if (isChal?.(5)) s.zunda = D(100);
        recomputeAllSkillEffects?.();
        refreshBoostAndAsc?.();
        refreshAscUI?.();
        onUIUpdate?.();
        updateUI?.();
    }
    function completeAnkoChallenge() {
        const s = state();
        const running = s?.anko?.activeChal ?? -1;
        if (running === -1) return;
        // 進捗更新
        s.anko.challenges = s.anko.challenges || [];
        const slot = s.anko.challenges[running - 1] || (s.anko.challenges[running - 1] = {
            cleared: false,
            bestTime: null
        });
        slot.cleared = true;
        // ベスト更新（秒）
        const t = s.runSecondsAnko ?? null;
        if (t != null) {
            if (slot.bestTime == null || t < slot.bestTime) slot.bestTime = t;
        }
        // 報酬
        grantAnkoChallengeReward?.(running);
        // チャレンジから抜ける
        s.anko.activeChal = -1;
        // 効果・コスト再評価
        recomputeAllSkillEffects?.();
        refreshCostMultipliers?.();
        onUIUpdate?.();
        updateUI?.();
        save?.();
    }
    return {
        startAnkoChallenge,
        stopAnkoChallenge,
        completeAnkoChallenge
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["io2N8","bNJxx"], "bNJxx", "parcelRequire94c2", {}, "./", "/")

//# sourceMappingURL=shiori0404.github.io.36960861.js.map
