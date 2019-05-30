/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"app": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"vendors~home~item~media":"vendors~home~item~media","home":"home","item~media":"item~media","item":"item","media":"media"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"home":1,"item~media":1,"item":1,"media":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({"vendors~home~item~media":"vendors~home~item~media","home":"home","item~media":"item~media","item":"item","media":"media"}[chunkId]||chunkId) + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.request = request;
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./assets/js/app.ts","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/assets/avatar.jpg":
/*!**********************************!*\
  !*** ./assets/assets/avatar.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/build/images/avatar.30f64610.jpg";

/***/ }),

/***/ "./assets/assets/leftmenu-header-background.jpg":
/*!******************************************************!*\
  !*** ./assets/assets/leftmenu-header-background.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/build/images/leftmenu-header-background.813fdd8f.jpg";

/***/ }),

/***/ "./assets/js/App.vue":
/*!***************************!*\
  !*** ./assets/js/App.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_b8fe0bae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=b8fe0bae&scoped=true& */ "./assets/js/App.vue?vue&type=template&id=b8fe0bae&scoped=true&");
/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts& */ "./assets/js/App.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_b8fe0bae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=b8fe0bae&lang=scss&scoped=true& */ "./assets/js/App.vue?vue&type=style&index=0&id=b8fe0bae&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_b8fe0bae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_b8fe0bae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b8fe0bae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/App.vue?vue&type=script&lang=ts&":
/*!****************************************************!*\
  !*** ./assets/js/App.vue?vue&type=script&lang=ts& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--6-0!../../node_modules/ts-loader??ref--6-1!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/App.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/App.vue?vue&type=style&index=0&id=b8fe0bae&lang=scss&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./assets/js/App.vue?vue&type=style&index=0&id=b8fe0bae&lang=scss&scoped=true& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b8fe0bae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader??ref--4-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/resolve-url-loader??ref--4-2!../../node_modules/sass-loader/lib/loader.js??ref--4-3!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=b8fe0bae&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/App.vue?vue&type=style&index=0&id=b8fe0bae&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b8fe0bae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b8fe0bae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b8fe0bae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b8fe0bae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b8fe0bae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/App.vue?vue&type=template&id=b8fe0bae&scoped=true&":
/*!**********************************************************************!*\
  !*** ./assets/js/App.vue?vue&type=template&id=b8fe0bae&scoped=true& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b8fe0bae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=b8fe0bae&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/App.vue?vue&type=template&id=b8fe0bae&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b8fe0bae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b8fe0bae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/app.ts":
/*!**************************!*\
  !*** ./assets/js/app.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_dist_css_foundation_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/dist/css/foundation.min.css */ "./node_modules/foundation-sites/dist/css/foundation.min.css");
/* harmony import */ var foundation_sites_dist_css_foundation_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_dist_css_foundation_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var foundation_sites_dist_js_foundation_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/dist/js/foundation.min */ "./node_modules/foundation-sites/dist/js/foundation.min.js");
/* harmony import */ var foundation_sites_dist_js_foundation_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_dist_js_foundation_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var select2_dist_css_select2_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! select2/dist/css/select2.min.css */ "./node_modules/select2/dist/css/select2.min.css");
/* harmony import */ var select2_dist_css_select2_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(select2_dist_css_select2_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var select2_dist_js_select2_full_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! select2/dist/js/select2.full.min */ "./node_modules/select2/dist/js/select2.full.min.js");
/* harmony import */ var select2_dist_js_select2_full_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(select2_dist_js_select2_full_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var select2_dist_js_i18n_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! select2/dist/js/i18n/fr */ "./node_modules/select2/dist/js/i18n/fr.js");
/* harmony import */ var select2_dist_js_i18n_fr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(select2_dist_js_i18n_fr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App.vue */ "./assets/js/App.vue");
/* harmony import */ var _config_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/router */ "./assets/js/config/router.ts");







__webpack_require__(/*! ../scss/select2.foundation.scss */ "./assets/scss/select2.foundation.scss");

__webpack_require__(/*! ../scss/app.scss */ "./assets/scss/app.scss");





var app = new vue__WEBPACK_IMPORTED_MODULE_7__["default"]({
  el: '#app',
  props: ['loading', 'title'],
  components: {
    App: _App_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  template: '<App :title="title" :loading="loading"></App>',
  router: _config_router__WEBPACK_IMPORTED_MODULE_9__["router"]
});
app.title = document.getElementsByTagName("title")[0].innerHTML;
_config_router__WEBPACK_IMPORTED_MODULE_9__["router"].beforeEach(function (to, from, next) {
  app.loading = true;
  window.scroll(0, 0);
  next();
});
_config_router__WEBPACK_IMPORTED_MODULE_9__["router"].afterEach(function (to, from) {
  app.loading = false;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#drawer").find('a[data-close]').trigger('click');
});

/***/ }),

/***/ "./assets/js/components/Block/LeftMenu.vue":
/*!*************************************************!*\
  !*** ./assets/js/components/Block/LeftMenu.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeftMenu_vue_vue_type_template_id_608855c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeftMenu.vue?vue&type=template&id=608855c9&scoped=true& */ "./assets/js/components/Block/LeftMenu.vue?vue&type=template&id=608855c9&scoped=true&");
/* harmony import */ var _LeftMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeftMenu.vue?vue&type=script&lang=ts& */ "./assets/js/components/Block/LeftMenu.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _LeftMenu_vue_vue_type_style_index_0_id_608855c9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeftMenu.vue?vue&type=style&index=0&id=608855c9&lang=scss&scoped=true& */ "./assets/js/components/Block/LeftMenu.vue?vue&type=style&index=0&id=608855c9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LeftMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LeftMenu_vue_vue_type_template_id_608855c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LeftMenu_vue_vue_type_template_id_608855c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "608855c9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Block/LeftMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Block/LeftMenu.vue?vue&type=script&lang=ts&":
/*!**************************************************************************!*\
  !*** ./assets/js/components/Block/LeftMenu.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--6-0!../../../../node_modules/ts-loader??ref--6-1!../../../../node_modules/vue-loader/lib??vue-loader-options!./LeftMenu.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/LeftMenu.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Block/LeftMenu.vue?vue&type=style&index=0&id=608855c9&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./assets/js/components/Block/LeftMenu.vue?vue&type=style&index=0&id=608855c9&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftMenu_vue_vue_type_style_index_0_id_608855c9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader??ref--4-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader??ref--4-2!../../../../node_modules/sass-loader/lib/loader.js??ref--4-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./LeftMenu.vue?vue&type=style&index=0&id=608855c9&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/LeftMenu.vue?vue&type=style&index=0&id=608855c9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftMenu_vue_vue_type_style_index_0_id_608855c9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftMenu_vue_vue_type_style_index_0_id_608855c9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftMenu_vue_vue_type_style_index_0_id_608855c9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftMenu_vue_vue_type_style_index_0_id_608855c9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftMenu_vue_vue_type_style_index_0_id_608855c9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/components/Block/LeftMenu.vue?vue&type=template&id=608855c9&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./assets/js/components/Block/LeftMenu.vue?vue&type=template&id=608855c9&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftMenu_vue_vue_type_template_id_608855c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LeftMenu.vue?vue&type=template&id=608855c9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/LeftMenu.vue?vue&type=template&id=608855c9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftMenu_vue_vue_type_template_id_608855c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftMenu_vue_vue_type_template_id_608855c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Block/Loading.vue":
/*!************************************************!*\
  !*** ./assets/js/components/Block/Loading.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loading_vue_vue_type_template_id_23a31c49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading.vue?vue&type=template&id=23a31c49&scoped=true& */ "./assets/js/components/Block/Loading.vue?vue&type=template&id=23a31c49&scoped=true&");
/* harmony import */ var _Loading_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading.vue?vue&type=script&lang=ts& */ "./assets/js/components/Block/Loading.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _Loading_vue_vue_type_style_index_0_id_23a31c49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading.vue?vue&type=style&index=0&id=23a31c49&lang=scss&scoped=true& */ "./assets/js/components/Block/Loading.vue?vue&type=style&index=0&id=23a31c49&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Loading_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loading_vue_vue_type_template_id_23a31c49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Loading_vue_vue_type_template_id_23a31c49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "23a31c49",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Block/Loading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Block/Loading.vue?vue&type=script&lang=ts&":
/*!*************************************************************************!*\
  !*** ./assets/js/components/Block/Loading.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--6-0!../../../../node_modules/ts-loader??ref--6-1!../../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/Loading.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Block/Loading.vue?vue&type=style&index=0&id=23a31c49&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./assets/js/components/Block/Loading.vue?vue&type=style&index=0&id=23a31c49&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_23a31c49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader??ref--4-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader??ref--4-2!../../../../node_modules/sass-loader/lib/loader.js??ref--4-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=style&index=0&id=23a31c49&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/Loading.vue?vue&type=style&index=0&id=23a31c49&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_23a31c49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_23a31c49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_23a31c49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_23a31c49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_23a31c49_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/components/Block/Loading.vue?vue&type=template&id=23a31c49&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./assets/js/components/Block/Loading.vue?vue&type=template&id=23a31c49&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_23a31c49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=template&id=23a31c49&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/Loading.vue?vue&type=template&id=23a31c49&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_23a31c49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_23a31c49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Block/TopBar.vue":
/*!***********************************************!*\
  !*** ./assets/js/components/Block/TopBar.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopBar_vue_vue_type_template_id_6bb9e101_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBar.vue?vue&type=template&id=6bb9e101&scoped=true& */ "./assets/js/components/Block/TopBar.vue?vue&type=template&id=6bb9e101&scoped=true&");
/* harmony import */ var _TopBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopBar.vue?vue&type=script&lang=ts& */ "./assets/js/components/Block/TopBar.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _TopBar_vue_vue_type_style_index_0_id_6bb9e101_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopBar.vue?vue&type=style&index=0&id=6bb9e101&lang=scss&scoped=true& */ "./assets/js/components/Block/TopBar.vue?vue&type=style&index=0&id=6bb9e101&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TopBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopBar_vue_vue_type_template_id_6bb9e101_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopBar_vue_vue_type_template_id_6bb9e101_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6bb9e101",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Block/TopBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Block/TopBar.vue?vue&type=script&lang=ts&":
/*!************************************************************************!*\
  !*** ./assets/js/components/Block/TopBar.vue?vue&type=script&lang=ts& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--6-0!../../../../node_modules/ts-loader??ref--6-1!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/TopBar.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Block/TopBar.vue?vue&type=style&index=0&id=6bb9e101&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./assets/js/components/Block/TopBar.vue?vue&type=style&index=0&id=6bb9e101&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_6bb9e101_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader??ref--4-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader??ref--4-2!../../../../node_modules/sass-loader/lib/loader.js??ref--4-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=style&index=0&id=6bb9e101&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/TopBar.vue?vue&type=style&index=0&id=6bb9e101&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_6bb9e101_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_6bb9e101_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_6bb9e101_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_6bb9e101_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_6bb9e101_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/components/Block/TopBar.vue?vue&type=template&id=6bb9e101&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./assets/js/components/Block/TopBar.vue?vue&type=template&id=6bb9e101&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_6bb9e101_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=template&id=6bb9e101&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/TopBar.vue?vue&type=template&id=6bb9e101&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_6bb9e101_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_6bb9e101_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/config/leftmenu.ts":
/*!**************************************!*\
  !*** ./assets/js/config/leftmenu.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_Account_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page/Account/router */ "./assets/js/page/Account/router.ts");
/* harmony import */ var _page_Item_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page/Item/router */ "./assets/js/page/Item/router.ts");
/* harmony import */ var _page_Media_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page/Media/router */ "./assets/js/page/Media/router.ts");




function createMenu(routes) {
  var output = [];
  routes.forEach(function (item) {
    if (!item.meta.leftMenu) {
      return;
    }

    output.push({
      name: item.name,
      label: item.meta.title,
      icon: item.meta.icon
    });
  });
  return output;
}

/* harmony default export */ __webpack_exports__["default"] = ([{
  label: 'Accueil',
  name: 'home',
  icon: 'fa fa-home'
}, {
  label: 'Items',
  children: createMenu(_page_Item_router__WEBPACK_IMPORTED_MODULE_1__["default"])
}, {
  label: 'Media',
  children: createMenu(_page_Media_router__WEBPACK_IMPORTED_MODULE_2__["default"])
}, {
  label: 'Mon Compte',
  children: createMenu(_page_Account_router__WEBPACK_IMPORTED_MODULE_0__["default"])
}]);

/***/ }),

/***/ "./assets/js/config/router.ts":
/*!************************************!*\
  !*** ./assets/js/config/router.ts ***!
  \************************************/
/*! exports provided: router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _page_Account_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page/Account/router */ "./assets/js/page/Account/router.ts");
/* harmony import */ var _page_Item_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page/Item/router */ "./assets/js/page/Item/router.ts");
/* harmony import */ var _page_Media_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../page/Media/router */ "./assets/js/page/Media/router.ts");





vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
var baseRoutes = [{
  name: 'home',
  meta: {
    title: 'Accueil',
    pageTitle: true
  },
  path: '/',
  component: function component() {
    return Promise.all(/*! import() | home */[__webpack_require__.e("vendors~home~item~media"), __webpack_require__.e("home")]).then(__webpack_require__.bind(null, /*! ../page/Home.vue */ "./assets/js/page/Home.vue"));
  }
}];
var routes = baseRoutes.concat(_page_Account_router__WEBPACK_IMPORTED_MODULE_2__["default"], _page_Item_router__WEBPACK_IMPORTED_MODULE_3__["default"], _page_Media_router__WEBPACK_IMPORTED_MODULE_4__["default"]);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'hash',
  base: Object({"NODE_ENV":"development"}).ROUTER_BASE,
  linkActiveClass: '',
  linkExactActiveClass: 'active',
  routes: routes
});

/***/ }),

/***/ "./assets/js/page/Account/router.ts":
/*!******************************************!*\
  !*** ./assets/js/page/Account/router.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var accountRoutes = [{
  name: 'account-logout',
  meta: {
    title: 'Deconnexion',
    pageTitle: true,
    leftMenu: true,
    icon: 'fas fa-sign-out-alt'
  },
  path: '/account/logout',
  component: function component() {
    return Promise.all(/*! import() | media */[__webpack_require__.e("vendors~home~item~media"), __webpack_require__.e("item~media"), __webpack_require__.e("media")]).then(__webpack_require__.bind(null, /*! ./Logout.vue */ "./assets/js/page/Account/Logout.vue"));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (accountRoutes);

/***/ }),

/***/ "./assets/js/page/Item/router.ts":
/*!***************************************!*\
  !*** ./assets/js/page/Item/router.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var itemRoutes = [{
  name: 'item-search',
  meta: {
    title: 'Recherche',
    pageTitle: true,
    leftMenu: true,
    icon: 'fa fa-search'
  },
  path: '/item/search',
  component: function component() {
    return Promise.all(/*! import() | item */[__webpack_require__.e("vendors~home~item~media"), __webpack_require__.e("item~media"), __webpack_require__.e("item")]).then(__webpack_require__.bind(null, /*! ./Search.vue */ "./assets/js/page/Item/Search.vue"));
  }
}, {
  name: 'item-view',
  meta: {
    pageTitle: false,
    leftMenu: false
  },
  path: '/item/:id/view/',
  component: function component() {
    return Promise.all(/*! import() | item */[__webpack_require__.e("vendors~home~item~media"), __webpack_require__.e("item~media"), __webpack_require__.e("item")]).then(__webpack_require__.bind(null, /*! ./View.vue */ "./assets/js/page/Item/View.vue"));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (itemRoutes);

/***/ }),

/***/ "./assets/js/page/Media/router.ts":
/*!****************************************!*\
  !*** ./assets/js/page/Media/router.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var mediaRoutes = [{
  name: 'media-index',
  meta: {
    title: 'Liste des médias',
    pageTitle: true,
    leftMenu: true,
    icon: 'fas fa-video'
  },
  path: '/media/index',
  component: function component() {
    return Promise.all(/*! import() | media */[__webpack_require__.e("vendors~home~item~media"), __webpack_require__.e("item~media"), __webpack_require__.e("media")]).then(__webpack_require__.bind(null, /*! ./Index.vue */ "./assets/js/page/Media/Index.vue"));
  }
}, {
  name: 'media-view',
  meta: {
    pageTitle: false,
    leftMenu: false
  },
  path: '/media/:id/view/',
  component: function component() {
    return Promise.all(/*! import() | media */[__webpack_require__.e("vendors~home~item~media"), __webpack_require__.e("item~media"), __webpack_require__.e("media")]).then(__webpack_require__.bind(null, /*! ./View.vue */ "./assets/js/page/Media/View.vue"));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (mediaRoutes);

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/scss/select2.foundation.scss":
/*!*********************************************!*\
  !*** ./assets/scss/select2.foundation.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/App.vue?vue&type=script&lang=ts&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--6-0!./node_modules/ts-loader??ref--6-1!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/App.vue?vue&type=script&lang=ts& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var _components_Block_Loading_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Block/Loading.vue */ "./assets/js/components/Block/Loading.vue");
/* harmony import */ var _components_Block_LeftMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Block/LeftMenu */ "./assets/js/components/Block/LeftMenu.vue");
/* harmony import */ var _components_Block_TopBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Block/TopBar */ "./assets/js/components/Block/TopBar.vue");
/* harmony import */ var _config_leftmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/leftmenu */ "./assets/js/config/leftmenu.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var App =
/*#__PURE__*/
function (_Vue) {
  _inherits(App, _Vue);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
    _this.leftMenuItems = _config_leftmenu__WEBPACK_IMPORTED_MODULE_5__["default"];
    _this.pageName = "";
    return _this;
  }

  _createClass(App, [{
    key: "mounted",
    value: function mounted() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).foundation();
    }
  }, {
    key: "onRouteChange",
    value: function onRouteChange() {
      var currentRoute = this.$route;

      if (currentRoute.meta.title) {
        document.title = currentRoute.meta.title + " | " + this.title;

        if (currentRoute.meta.pageTitle === true) {
          this.pageName = currentRoute.meta.title;
        } else {
          this.pageName = "";
        }
      } else {
        document.title = this.title;
        this.pageName = "";
      }
    }
  }]);

  return App;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__["Vue"]);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__["Prop"])({
  type: Boolean,
  default: false
})], App.prototype, "loading", void 0);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__["Prop"])({
  type: String,
  default: ""
})], App.prototype, "title", void 0);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__["Watch"])('$route')], App.prototype, "onRouteChange", null);

App = __decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__["Component"])({
  components: {
    LeftMenu: _components_Block_LeftMenu__WEBPACK_IMPORTED_MODULE_3__["default"],
    Loading: _components_Block_Loading_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TopBar: _components_Block_TopBar__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
})], App);
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/LeftMenu.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--6-0!./node_modules/ts-loader??ref--6-1!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Block/LeftMenu.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);

var LeftMenu =
/*#__PURE__*/
function (_Vue) {
  _inherits(LeftMenu, _Vue);

  function LeftMenu() {
    _classCallCheck(this, LeftMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeftMenu).apply(this, arguments));
  }

  _createClass(LeftMenu, [{
    key: "getIconClasses",
    value: function getIconClasses(icon) {
      return icon + " link-icon";
    }
  }]);

  return LeftMenu;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
  type: Array
})], LeftMenu.prototype, "items", void 0);

LeftMenu = __decorate([vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"]], LeftMenu);
/* harmony default export */ __webpack_exports__["default"] = (LeftMenu);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/Loading.vue?vue&type=script&lang=ts&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--6-0!./node_modules/ts-loader??ref--6-1!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Block/Loading.vue?vue&type=script&lang=ts& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Loading =
/*#__PURE__*/
function (_Vue) {
  _inherits(Loading, _Vue);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, _getPrototypeOf(Loading).apply(this, arguments));
  }

  return Loading;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
  type: Boolean
})], Loading.prototype, "displayed", void 0);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
  type: Boolean,
  default: true
})], Loading.prototype, "fixed", void 0);

Loading = __decorate([vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"]], Loading);
/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/TopBar.vue?vue&type=script&lang=ts&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--6-0!./node_modules/ts-loader??ref--6-1!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Block/TopBar.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TopBar =
/*#__PURE__*/
function (_Vue) {
  _inherits(TopBar, _Vue);

  function TopBar() {
    var _this;

    _classCallCheck(this, TopBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TopBar).apply(this, arguments));
    _this.notifications = [];
    return _this;
  }

  _createClass(TopBar, [{
    key: "data",
    value: function data() {
      return {
        notifications: []
      };
    }
  }]);

  return TopBar;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
  type: String
})], TopBar.prototype, "pagename", void 0);

TopBar = __decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
  components: {}
})], TopBar);
/* harmony default export */ __webpack_exports__["default"] = (TopBar);

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/App.vue?vue&type=style&index=0&id=b8fe0bae&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/App.vue?vue&type=style&index=0&id=b8fe0bae&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/LeftMenu.vue?vue&type=style&index=0&id=608855c9&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Block/LeftMenu.vue?vue&type=style&index=0&id=608855c9&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/Loading.vue?vue&type=style&index=0&id=23a31c49&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Block/Loading.vue?vue&type=style&index=0&id=23a31c49&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/TopBar.vue?vue&type=style&index=0&id=6bb9e101&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Block/TopBar.vue?vue&type=style&index=0&id=6bb9e101&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/App.vue?vue&type=template&id=b8fe0bae&scoped=true&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/App.vue?vue&type=template&id=b8fe0bae&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "page-wrapper" } }, [
    _c(
      "div",
      {
        staticClass: "off-canvas position-left",
        attrs: {
          id: "drawer",
          "data-off-canvas": "",
          "data-transition": "overlap"
        }
      },
      [_c("LeftMenu", { attrs: { items: _vm.leftMenuItems } })],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "off-canvas-content",
        attrs: { id: "content", "data-off-canvas-content": "" }
      },
      [
        _c("TopBar", { attrs: { pagename: _vm.pageName } }),
        _vm._v(" "),
        _c("Loading", { attrs: { displayed: _vm.loading } }),
        _vm._v(" "),
        _c("router-view"),
        _vm._v(" "),
        _vm._m(0)
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", [
      _c("p", { staticClass: "copyright" }, [
        _c("i", { staticClass: "far fa-copyright" }),
        _vm._v(" Copyright Pierre LEJEUNE, tous droits réservés.\n            ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "social" }, [
        _c(
          "a",
          {
            staticClass: "gitlab",
            attrs: {
              href: "https://gitlab.com/pierrelejeune/download-search",
              target: "_blank"
            }
          },
          [_c("i", { staticClass: "fab fa-gitlab" })]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "twitter",
            attrs: { href: "https://twitter.com/dark_csgo", target: "_blank" }
          },
          [_c("i", { staticClass: "fab fa-twitter" })]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "linkedin",
            attrs: {
              href: "https://www.linkedin.com/in/pierre-lejeune/",
              target: "_blank"
            }
          },
          [_c("i", { staticClass: "fab fa-linkedin-in" })]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/LeftMenu.vue?vue&type=template&id=608855c9&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Block/LeftMenu.vue?vue&type=template&id=608855c9&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "ul",
      {
        staticClass: "menu vertical accordion-menu",
        attrs: { "data-accordion-menu": "" }
      },
      _vm._l(_vm.items, function(item) {
        return _c(
          "li",
          [
            item.children === undefined
              ? [
                  _c(
                    "router-link",
                    { attrs: { to: { name: item.name }, exact: "" } },
                    [
                      item.icon !== undefined
                        ? _c("i", { class: _vm.getIconClasses(item.icon) })
                        : _vm._e(),
                      _vm._v(
                        "\n                    " +
                          _vm._s(item.label) +
                          "\n                "
                      )
                    ]
                  )
                ]
              : [
                  _c("a", [_vm._v(_vm._s(item.label))]),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "vertical menu nested" },
                    _vm._l(item.children, function(child) {
                      return _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: child.name }, exact: "" } },
                            [
                              child.icon !== undefined
                                ? _c("i", {
                                    class: _vm.getIconClasses(child.icon)
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", { staticClass: "link-label" }, [
                                _vm._v(_vm._s(child.label))
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    }),
                    0
                  )
                ]
          ],
          2
        )
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "drawer-header" }, [
      _c("div", { staticClass: "image" }, [
        _c("img", {
          attrs: {
            src: __webpack_require__(/*! ../../../assets/leftmenu-header-background.jpg */ "./assets/assets/leftmenu-header-background.jpg"),
            alt: "Banner profil image"
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "user" }, [
        _c("div", { staticClass: "avatar" }, [
          _c("img", {
            attrs: {
              src: __webpack_require__(/*! ../../../assets/avatar.jpg */ "./assets/assets/avatar.jpg"),
              alt: "Darkanakin41",
              title: "Darkanakin41"
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "id" }, [
          _c("span", { staticClass: "pseudo" }, [_vm._v("Darkanakin41")]),
          _vm._v(" "),
          _c("span", { staticClass: "mail" }, [
            _vm._v("darkanakin41@gmail.com")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "close" }, [
        _c("a", { attrs: { "data-close": "" } }, [
          _c("i", { staticClass: "fas fa-times link-icon" })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/Loading.vue?vue&type=template&id=23a31c49&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Block/Loading.vue?vue&type=template&id=23a31c49&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.displayed
    ? _c(
        "div",
        {
          class: { active: _vm.displayed, fixed: _vm.fixed },
          attrs: { id: "loading" }
        },
        [_vm._m(0)]
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "spinner" }, [
      _c("i", { staticClass: "fa fa-spin fa-spinner" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/TopBar.vue?vue&type=template&id=6bb9e101&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Block/TopBar.vue?vue&type=template&id=6bb9e101&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "top-bar" }, [
    _c("div", { staticClass: "top-bar-left" }, [
      _c("ul", { staticClass: "menu" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm.pagename !== null
          ? _c("li", { staticClass: "menu-text", attrs: { id: "page-name" } }, [
              _vm._v(_vm._s(_vm.pagename))
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { "data-toggle": "drawer" } }, [
        _c("i", { staticClass: "fa fa-bars" })
      ])
    ])
  }
]
render._withStripped = true



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Fzc2V0cy9hdmF0YXIuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hc3NldHMvbGVmdG1lbnUtaGVhZGVyLWJhY2tncm91bmQuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9BcHAudnVlPzVhOWMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0FwcC52dWU/NGE2MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQXBwLnZ1ZT9lNWEyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9BcHAudnVlP2U0NmYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9MZWZ0TWVudS52dWU/ZGQ0MSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9MZWZ0TWVudS52dWU/ZWFlNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9MZWZ0TWVudS52dWU/ZDZlMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9MZWZ0TWVudS52dWU/YTY0NCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Mb2FkaW5nLnZ1ZT80ZDkzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL0xvYWRpbmcudnVlP2Q1MjgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTG9hZGluZy52dWU/OGYzMiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Mb2FkaW5nLnZ1ZT8wNDIyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RvcEJhci52dWU/ZjVhYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Ub3BCYXIudnVlP2I2YjciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svVG9wQmFyLnZ1ZT8yNWEyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RvcEJhci52dWU/YTBmOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29uZmlnL2xlZnRtZW51LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb25maWcvcm91dGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL0FjY291bnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL0l0ZW0vcm91dGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL01lZGlhL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9hcHAuc2Nzcz85NmNmIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL3NlbGVjdDIuZm91bmRhdGlvbi5zY3NzP2FmZmUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTGVmdE1lbnUudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL0xvYWRpbmcudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RvcEJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0FwcC52dWU/ZDI1NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9MZWZ0TWVudS52dWU/YTZmMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Mb2FkaW5nLnZ1ZT9mMTJlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RvcEJhci52dWU/ZjY0NiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQXBwLnZ1ZT9hMjAwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL0xlZnRNZW51LnZ1ZT8xZmRlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL0xvYWRpbmcudnVlPzcyZjQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svVG9wQmFyLnZ1ZT80ZDZjIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJhcHAiLCJWdWUiLCJlbCIsInByb3BzIiwiY29tcG9uZW50cyIsIkFwcCIsInRlbXBsYXRlIiwicm91dGVyIiwidGl0bGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaW5uZXJIVE1MIiwiYmVmb3JlRWFjaCIsInRvIiwiZnJvbSIsIm5leHQiLCJsb2FkaW5nIiwid2luZG93Iiwic2Nyb2xsIiwiYWZ0ZXJFYWNoIiwiJCIsImZpbmQiLCJ0cmlnZ2VyIiwiY3JlYXRlTWVudSIsInJvdXRlcyIsIm91dHB1dCIsImZvckVhY2giLCJpdGVtIiwibWV0YSIsImxlZnRNZW51IiwicHVzaCIsIm5hbWUiLCJsYWJlbCIsImljb24iLCJjaGlsZHJlbiIsIml0ZW1Sb3V0ZXMiLCJtZWRpYVJvdXRlcyIsImFjY291bnRSb3V0ZXMiLCJ1c2UiLCJWdWVSb3V0ZXIiLCJiYXNlUm91dGVzIiwicGFnZVRpdGxlIiwicGF0aCIsImNvbXBvbmVudCIsImNvbmNhdCIsIm1vZGUiLCJiYXNlIiwicHJvY2VzcyIsIlJPVVRFUl9CQVNFIiwibGlua0FjdGl2ZUNsYXNzIiwibGlua0V4YWN0QWN0aXZlQ2xhc3MiLCJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJsZWZ0TWVudUl0ZW1zIiwibGVmdG1lbnVJdGVtcyIsInBhZ2VOYW1lIiwiZm91bmRhdGlvbiIsImN1cnJlbnRSb3V0ZSIsIiRyb3V0ZSIsIlByb3AiLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJwcm90b3R5cGUiLCJTdHJpbmciLCJXYXRjaCIsIkNvbXBvbmVudCIsIkxlZnRNZW51IiwiTG9hZGluZyIsIlRvcEJhciIsIkFycmF5Iiwibm90aWZpY2F0aW9ucyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaURBQXlDLDBIQUEwSDtBQUNuSzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsNEJBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLCtCQUF1QiwwSEFBMEg7QUFDako7QUFDQTtBQUNBLDJCQUFtQiw2QkFBNkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUFtQiw4QkFBOEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUywwQkFBMEIsRUFBRTtBQUNwRCxpQkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIENTUyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDc3NDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH1cblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1widmVuZG9yc35ob21lfml0ZW1+bWVkaWFcIjpcInZlbmRvcnN+aG9tZX5pdGVtfm1lZGlhXCIsXCJob21lXCI6XCJob21lXCIsXCJpdGVtfm1lZGlhXCI6XCJpdGVtfm1lZGlhXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJtZWRpYVwiOlwibWVkaWFcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4gQ1NTIGxvYWRpbmdcbiBcdFx0dmFyIGNzc0NodW5rcyA9IHtcImhvbWVcIjoxLFwiaXRlbX5tZWRpYVwiOjEsXCJpdGVtXCI6MSxcIm1lZGlhXCI6MX07XG4gXHRcdGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSkgcHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pO1xuIFx0XHRlbHNlIGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSAhPT0gMCAmJiBjc3NDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0dmFyIGhyZWYgPSBcIlwiICsgKHtcInZlbmRvcnN+aG9tZX5pdGVtfm1lZGlhXCI6XCJ2ZW5kb3JzfmhvbWV+aXRlbX5tZWRpYVwiLFwiaG9tZVwiOlwiaG9tZVwiLFwiaXRlbX5tZWRpYVwiOlwiaXRlbX5tZWRpYVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwibWVkaWFcIjpcIm1lZGlhXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmNzc1wiO1xuIFx0XHRcdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcbiBcdFx0XHRcdHZhciBleGlzdGluZ0xpbmtUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nTGlua1RhZ3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHRhZyA9IGV4aXN0aW5nTGlua1RhZ3NbaV07XG4gXHRcdFx0XHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIikgfHwgdGFnLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gXHRcdFx0XHRcdGlmKHRhZy5yZWwgPT09IFwic3R5bGVzaGVldFwiICYmIChkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpKSByZXR1cm4gcmVzb2x2ZSgpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0dmFyIGV4aXN0aW5nU3R5bGVUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1N0eWxlVGFncy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgdGFnID0gZXhpc3RpbmdTdHlsZVRhZ3NbaV07XG4gXHRcdFx0XHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik7XG4gXHRcdFx0XHRcdGlmKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikgcmV0dXJuIHJlc29sdmUoKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHZhciBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gXHRcdFx0XHRsaW5rVGFnLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuIFx0XHRcdFx0bGlua1RhZy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuIFx0XHRcdFx0bGlua1RhZy5vbmxvYWQgPSByZXNvbHZlO1xuIFx0XHRcdFx0bGlua1RhZy5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiBcdFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYyB8fCBmdWxsaHJlZjtcbiBcdFx0XHRcdFx0dmFyIGVyciA9IG5ldyBFcnJvcihcIkxvYWRpbmcgQ1NTIGNodW5rIFwiICsgY2h1bmtJZCArIFwiIGZhaWxlZC5cXG4oXCIgKyByZXF1ZXN0ICsgXCIpXCIpO1xuIFx0XHRcdFx0XHRlcnIucmVxdWVzdCA9IHJlcXVlc3Q7XG4gXHRcdFx0XHRcdHJlamVjdChlcnIpO1xuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdGxpbmtUYWcuaHJlZiA9IGZ1bGxocmVmO1xuIFx0XHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4gXHRcdFx0XHRoZWFkLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuIFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHRcdH0pKTtcbiBcdFx0fVxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJyk7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXNzZXRzL2pzL2FwcC50c1wiLFwidmVuZG9yc35hcHBcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2J1aWxkL2ltYWdlcy9hdmF0YXIuMzBmNjQ2MTAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9idWlsZC9pbWFnZXMvbGVmdG1lbnUtaGVhZGVyLWJhY2tncm91bmQuODEzZmRkOGYuanBnXCI7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI4ZmUwYmFlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWI4ZmUwYmFlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYjhmZTBiYWVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvc3J2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiOGZlMGJhZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiOGZlMGJhZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iOGZlMGJhZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiOGZlMGJhZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWI4ZmUwYmFlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YjhmZTBiYWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjhmZTBiYWUmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2Rpc3QvY3NzL2ZvdW5kYXRpb24ubWluLmNzcyc7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvZGlzdC9qcy9mb3VuZGF0aW9uLm1pbic7XG5pbXBvcnQgJ3NlbGVjdDIvZGlzdC9jc3Mvc2VsZWN0Mi5taW4uY3NzJztcbmltcG9ydCAnc2VsZWN0Mi9kaXN0L2pzL3NlbGVjdDIuZnVsbC5taW4nO1xuaW1wb3J0ICdzZWxlY3QyL2Rpc3QvanMvaTE4bi9mcic7XG5yZXF1aXJlKCcuLi9zY3NzL3NlbGVjdDIuZm91bmRhdGlvbi5zY3NzJyk7XG5yZXF1aXJlKCcuLi9zY3NzL2FwcC5zY3NzJyk7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSc7XG5pbXBvcnQgeyByb3V0ZXIgfSBmcm9tIFwiLi9jb25maWcvcm91dGVyXCI7XG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuICAgIHByb3BzOiBbJ2xvYWRpbmcnLCAndGl0bGUnXSxcbiAgICBjb21wb25lbnRzOiB7IEFwcCB9LFxuICAgIHRlbXBsYXRlOiAnPEFwcCA6dGl0bGU9XCJ0aXRsZVwiIDpsb2FkaW5nPVwibG9hZGluZ1wiPjwvQXBwPicsXG4gICAgcm91dGVyLFxufSk7XG5hcHAudGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRpdGxlXCIpWzBdLmlubmVySFRNTDtcbnJvdXRlci5iZWZvcmVFYWNoKCh0bywgZnJvbSwgbmV4dCkgPT4ge1xuICAgIGFwcC5sb2FkaW5nID0gdHJ1ZTtcbiAgICB3aW5kb3cuc2Nyb2xsKDAsIDApO1xuICAgIG5leHQoKTtcbn0pO1xucm91dGVyLmFmdGVyRWFjaCgodG8sIGZyb20pID0+IHtcbiAgICBhcHAubG9hZGluZyA9IGZhbHNlO1xuICAgICQoXCIjZHJhd2VyXCIpLmZpbmQoJ2FbZGF0YS1jbG9zZV0nKS50cmlnZ2VyKCdjbGljaycpO1xufSk7XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xlZnRNZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MDg4NTVjOSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9MZWZ0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xlZnRNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9MZWZ0TWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MDg4NTVjOSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjYwODg1NWM5XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Nydi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjA4ODU1YzknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjA4ODU1YzknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xlZnRNZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MDg4NTVjOSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MDg4NTVjOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTGVmdE1lbnUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MZWZ0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGVmdE1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MZWZ0TWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MDg4NTVjOSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGVmdE1lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjA4ODU1YzkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xlZnRNZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MDg4NTVjOSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9hZGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjNhMzFjNDkmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9hZGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjNhMzFjNDkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyM2EzMWM0OVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9zcnYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIzYTMxYzQ5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIzYTMxYzQ5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yM2EzMWM0OSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyM2EzMWM0OScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTG9hZGluZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIzYTMxYzQ5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIzYTMxYzQ5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yM2EzMWM0OSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVG9wQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YmI5ZTEwMSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1RvcEJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YmI5ZTEwMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjZiYjllMTAxXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Nydi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmJiOWUxMDEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmJiOWUxMDEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RvcEJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmJiOWUxMDEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmJiOWUxMDEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RvcEJhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvcEJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZiYjllMTAxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmJiOWUxMDEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvcEJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmJiOWUxMDEmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgYWNjb3VudFJvdXRlcyBmcm9tIFwiLi4vcGFnZS9BY2NvdW50L3JvdXRlclwiO1xuaW1wb3J0IGl0ZW1Sb3V0ZXMgZnJvbSBcIi4uL3BhZ2UvSXRlbS9yb3V0ZXJcIjtcbmltcG9ydCBtZWRpYVJvdXRlcyBmcm9tIFwiLi4vcGFnZS9NZWRpYS9yb3V0ZXJcIjtcbmZ1bmN0aW9uIGNyZWF0ZU1lbnUocm91dGVzKSB7XG4gICAgbGV0IG91dHB1dCA9IFtdO1xuICAgIHJvdXRlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWl0ZW0ubWV0YS5sZWZ0TWVudSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGxhYmVsOiBpdGVtLm1ldGEudGl0bGUsXG4gICAgICAgICAgICBpY29uOiBpdGVtLm1ldGEuaWNvblxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZXhwb3J0IGRlZmF1bHQgW1xuICAgIHtcbiAgICAgICAgbGFiZWw6ICdBY2N1ZWlsJyxcbiAgICAgICAgbmFtZTogJ2hvbWUnLFxuICAgICAgICBpY29uOiAnZmEgZmEtaG9tZSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdJdGVtcycsXG4gICAgICAgIGNoaWxkcmVuOiBjcmVhdGVNZW51KGl0ZW1Sb3V0ZXMpLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ01lZGlhJyxcbiAgICAgICAgY2hpbGRyZW46IGNyZWF0ZU1lbnUobWVkaWFSb3V0ZXMpLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ01vbiBDb21wdGUnLFxuICAgICAgICBjaGlsZHJlbjogY3JlYXRlTWVudShhY2NvdW50Um91dGVzKSxcbiAgICB9XG5dO1xuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tIFwidnVlLXJvdXRlclwiO1xuaW1wb3J0IGFjY291bnRSb3V0ZXMgZnJvbSBcIi4uL3BhZ2UvQWNjb3VudC9yb3V0ZXJcIjtcbmltcG9ydCBpdGVtUm91dGVzIGZyb20gXCIuLi9wYWdlL0l0ZW0vcm91dGVyXCI7XG5pbXBvcnQgbWVkaWFSb3V0ZXMgZnJvbSBcIi4uL3BhZ2UvTWVkaWEvcm91dGVyXCI7XG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5jb25zdCBiYXNlUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ2hvbWUnLFxuICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0FjY3VlaWwnLFxuICAgICAgICAgICAgcGFnZVRpdGxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIGNvbXBvbmVudDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnaG9tZScgKi8gXCIuLi9wYWdlL0hvbWUudnVlXCIpO1xuICAgICAgICB9XG4gICAgfSxcbl07XG5jb25zdCByb3V0ZXMgPSBiYXNlUm91dGVzLmNvbmNhdChhY2NvdW50Um91dGVzLCBpdGVtUm91dGVzLCBtZWRpYVJvdXRlcyk7XG5leHBvcnQgY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gICAgbW9kZTogJ2hhc2gnLFxuICAgIGJhc2U6IHByb2Nlc3MuZW52LlJPVVRFUl9CQVNFLFxuICAgIGxpbmtBY3RpdmVDbGFzczogJycsXG4gICAgbGlua0V4YWN0QWN0aXZlQ2xhc3M6ICdhY3RpdmUnLFxuICAgIHJvdXRlczogcm91dGVzXG59KTtcbiIsImNvbnN0IGFjY291bnRSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnYWNjb3VudC1sb2dvdXQnLFxuICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0RlY29ubmV4aW9uJyxcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogdHJ1ZSxcbiAgICAgICAgICAgIGxlZnRNZW51OiB0cnVlLFxuICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1zaWduLW91dC1hbHQnLFxuICAgICAgICB9LFxuICAgICAgICBwYXRoOiAnL2FjY291bnQvbG9nb3V0JyxcbiAgICAgICAgY29tcG9uZW50OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdtZWRpYScgKi8gXCIuL0xvZ291dC52dWVcIik7XG4gICAgICAgIH1cbiAgICB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IGFjY291bnRSb3V0ZXM7XG4iLCJjb25zdCBpdGVtUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ2l0ZW0tc2VhcmNoJyxcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6ICdSZWNoZXJjaGUnLFxuICAgICAgICAgICAgcGFnZVRpdGxlOiB0cnVlLFxuICAgICAgICAgICAgbGVmdE1lbnU6IHRydWUsXG4gICAgICAgICAgICBpY29uOiAnZmEgZmEtc2VhcmNoJyxcbiAgICAgICAgfSxcbiAgICAgICAgcGF0aDogJy9pdGVtL3NlYXJjaCcsXG4gICAgICAgIGNvbXBvbmVudDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnaXRlbScgKi8gXCIuL1NlYXJjaC52dWVcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2l0ZW0tdmlldycsXG4gICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogZmFsc2UsXG4gICAgICAgICAgICBsZWZ0TWVudTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHBhdGg6ICcvaXRlbS86aWQvdmlldy8nLFxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2l0ZW0nICovIFwiLi9WaWV3LnZ1ZVwiKTtcbiAgICAgICAgfVxuICAgIH0sXG5dO1xuZXhwb3J0IGRlZmF1bHQgaXRlbVJvdXRlcztcbiIsImNvbnN0IG1lZGlhUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ21lZGlhLWluZGV4JyxcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6ICdMaXN0ZSBkZXMgbcOpZGlhcycsXG4gICAgICAgICAgICBwYWdlVGl0bGU6IHRydWUsXG4gICAgICAgICAgICBsZWZ0TWVudTogdHJ1ZSxcbiAgICAgICAgICAgIGljb246ICdmYXMgZmEtdmlkZW8nLFxuICAgICAgICB9LFxuICAgICAgICBwYXRoOiAnL21lZGlhL2luZGV4JyxcbiAgICAgICAgY29tcG9uZW50OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdtZWRpYScgKi8gXCIuL0luZGV4LnZ1ZVwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnbWVkaWEtdmlldycsXG4gICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogZmFsc2UsXG4gICAgICAgICAgICBsZWZ0TWVudTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHBhdGg6ICcvbWVkaWEvOmlkL3ZpZXcvJyxcbiAgICAgICAgY29tcG9uZW50OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdtZWRpYScgKi8gXCIuL1ZpZXcudnVlXCIpO1xuICAgICAgICB9XG4gICAgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBtZWRpYVJvdXRlcztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3AsIFZ1ZSwgV2F0Y2ggfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vY29tcG9uZW50cy9CbG9jay9Mb2FkaW5nLnZ1ZVwiO1xuaW1wb3J0IExlZnRNZW51IGZyb20gXCIuL2NvbXBvbmVudHMvQmxvY2svTGVmdE1lbnVcIjtcbmltcG9ydCBUb3BCYXIgZnJvbSBcIi4vY29tcG9uZW50cy9CbG9jay9Ub3BCYXJcIjtcbmltcG9ydCBsZWZ0bWVudUl0ZW1zIGZyb20gXCIuL2NvbmZpZy9sZWZ0bWVudVwiO1xubGV0IEFwcCA9IGNsYXNzIEFwcCBleHRlbmRzIFZ1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubGVmdE1lbnVJdGVtcyA9IGxlZnRtZW51SXRlbXM7XG4gICAgICAgIHRoaXMucGFnZU5hbWUgPSBcIlwiO1xuICAgIH1cbiAgICBtb3VudGVkKCkge1xuICAgICAgICAkKGRvY3VtZW50KS5mb3VuZGF0aW9uKCk7XG4gICAgfVxuICAgIG9uUm91dGVDaGFuZ2UoKSB7XG4gICAgICAgIGxldCBjdXJyZW50Um91dGUgPSB0aGlzLiRyb3V0ZTtcbiAgICAgICAgaWYgKGN1cnJlbnRSb3V0ZS5tZXRhLnRpdGxlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IGN1cnJlbnRSb3V0ZS5tZXRhLnRpdGxlICsgXCIgfCBcIiArIHRoaXMudGl0bGU7XG4gICAgICAgICAgICBpZiAoY3VycmVudFJvdXRlLm1ldGEucGFnZVRpdGxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTmFtZSA9IGN1cnJlbnRSb3V0ZS5tZXRhLnRpdGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRoaXMudGl0bGU7XG4gICAgICAgICAgICB0aGlzLnBhZ2VOYW1lID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBQcm9wKHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSlcbl0sIEFwcC5wcm90b3R5cGUsIFwibG9hZGluZ1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9KVxuXSwgQXBwLnByb3RvdHlwZSwgXCJ0aXRsZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgV2F0Y2goJyRyb3V0ZScpXG5dLCBBcHAucHJvdG90eXBlLCBcIm9uUm91dGVDaGFuZ2VcIiwgbnVsbCk7XG5BcHAgPSBfX2RlY29yYXRlKFtcbiAgICBDb21wb25lbnQoe1xuICAgICAgICBjb21wb25lbnRzOiB7IExlZnRNZW51LCBMb2FkaW5nLCBUb3BCYXIgfVxuICAgIH0pXG5dLCBBcHApO1xuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9wLCBWdWUgfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tIFwidnVlLXJvdXRlclwiO1xuVnVlLnVzZShWdWVSb3V0ZXIpO1xubGV0IExlZnRNZW51ID0gY2xhc3MgTGVmdE1lbnUgZXh0ZW5kcyBWdWUge1xuICAgIGdldEljb25DbGFzc2VzKGljb24pIHtcbiAgICAgICAgcmV0dXJuIGljb24gKyBcIiBsaW5rLWljb25cIjtcbiAgICB9XG59O1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IHR5cGU6IEFycmF5IH0pXG5dLCBMZWZ0TWVudS5wcm90b3R5cGUsIFwiaXRlbXNcIiwgdm9pZCAwKTtcbkxlZnRNZW51ID0gX19kZWNvcmF0ZShbXG4gICAgQ29tcG9uZW50XG5dLCBMZWZ0TWVudSk7XG5leHBvcnQgZGVmYXVsdCBMZWZ0TWVudTtcbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IENvbXBvbmVudCwgUHJvcCwgVnVlIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmxldCBMb2FkaW5nID0gY2xhc3MgTG9hZGluZyBleHRlbmRzIFZ1ZSB7XG59O1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IHR5cGU6IEJvb2xlYW4gfSlcbl0sIExvYWRpbmcucHJvdG90eXBlLCBcImRpc3BsYXllZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfSlcbl0sIExvYWRpbmcucHJvdG90eXBlLCBcImZpeGVkXCIsIHZvaWQgMCk7XG5Mb2FkaW5nID0gX19kZWNvcmF0ZShbXG4gICAgQ29tcG9uZW50XG5dLCBMb2FkaW5nKTtcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3AsIFZ1ZSB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5sZXQgVG9wQmFyID0gY2xhc3MgVG9wQmFyIGV4dGVuZHMgVnVlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zID0gW107XG4gICAgfVxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBub3RpZmljYXRpb25zOiBbXSxcbiAgICAgICAgfTtcbiAgICB9XG59O1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IHR5cGU6IFN0cmluZyB9KVxuXSwgVG9wQmFyLnByb3RvdHlwZSwgXCJwYWdlbmFtZVwiLCB2b2lkIDApO1xuVG9wQmFyID0gX19kZWNvcmF0ZShbXG4gICAgQ29tcG9uZW50KHtcbiAgICAgICAgY29tcG9uZW50czoge31cbiAgICB9KVxuXSwgVG9wQmFyKTtcbmV4cG9ydCBkZWZhdWx0IFRvcEJhcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJwYWdlLXdyYXBwZXJcIiB9IH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm9mZi1jYW52YXMgcG9zaXRpb24tbGVmdFwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGlkOiBcImRyYXdlclwiLFxuICAgICAgICAgIFwiZGF0YS1vZmYtY2FudmFzXCI6IFwiXCIsXG4gICAgICAgICAgXCJkYXRhLXRyYW5zaXRpb25cIjogXCJvdmVybGFwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtfYyhcIkxlZnRNZW51XCIsIHsgYXR0cnM6IHsgaXRlbXM6IF92bS5sZWZ0TWVudUl0ZW1zIH0gfSldLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm9mZi1jYW52YXMtY29udGVudFwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJjb250ZW50XCIsIFwiZGF0YS1vZmYtY2FudmFzLWNvbnRlbnRcIjogXCJcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIlRvcEJhclwiLCB7IGF0dHJzOiB7IHBhZ2VuYW1lOiBfdm0ucGFnZU5hbWUgfSB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJMb2FkaW5nXCIsIHsgYXR0cnM6IHsgZGlzcGxheWVkOiBfdm0ubG9hZGluZyB9IH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInJvdXRlci12aWV3XCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJmb290ZXJcIiwgW1xuICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29weXJpZ2h0XCIgfSwgW1xuICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXIgZmEtY29weXJpZ2h0XCIgfSksXG4gICAgICAgIF92bS5fdihcIiBDb3B5cmlnaHQgUGllcnJlIExFSkVVTkUsIHRvdXMgZHJvaXRzIHLDqXNlcnbDqXMuXFxuICAgICAgICAgICAgXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNvY2lhbFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2l0bGFiXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0bGFiLmNvbS9waWVycmVsZWpldW5lL2Rvd25sb2FkLXNlYXJjaFwiLFxuICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYWIgZmEtZ2l0bGFiXCIgfSldXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInR3aXR0ZXJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9kYXJrX2NzZ29cIiwgdGFyZ2V0OiBcIl9ibGFua1wiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYWIgZmEtdHdpdHRlclwiIH0pXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5rZWRpblwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcGllcnJlLWxlamV1bmUvXCIsXG4gICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhYiBmYS1saW5rZWRpbi1pblwiIH0pXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcInVsXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lbnUgdmVydGljYWwgYWNjb3JkaW9uLW1lbnVcIixcbiAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWFjY29yZGlvbi1tZW51XCI6IFwiXCIgfVxuICAgICAgfSxcbiAgICAgIF92bS5fbChfdm0uaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBpdGVtLmNoaWxkcmVuID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IGl0ZW0ubmFtZSB9LCBleGFjdDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmljb24gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImlcIiwgeyBjbGFzczogX3ZtLmdldEljb25DbGFzc2VzKGl0ZW0uaWNvbikgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0ubGFiZWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubGFiZWwpKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidmVydGljYWwgbWVudSBuZXN0ZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woaXRlbS5jaGlsZHJlbiwgZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IGNoaWxkLm5hbWUgfSwgZXhhY3Q6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmljb24gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldEljb25DbGFzc2VzKGNoaWxkLmljb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsaW5rLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGNoaWxkLmxhYmVsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIH0pLFxuICAgICAgMFxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZHJhd2VyLWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIiB9LCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vYXNzZXRzL2xlZnRtZW51LWhlYWRlci1iYWNrZ3JvdW5kLmpwZ1wiKSxcbiAgICAgICAgICAgIGFsdDogXCJCYW5uZXIgcHJvZmlsIGltYWdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVzZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXZhdGFyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uL2Fzc2V0cy9hdmF0YXIuanBnXCIpLFxuICAgICAgICAgICAgICBhbHQ6IFwiRGFya2FuYWtpbjQxXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkRhcmthbmFraW40MVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaWRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicHNldWRvXCIgfSwgW192bS5fdihcIkRhcmthbmFraW40MVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWFpbFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcImRhcmthbmFraW40MUBnbWFpbC5jb21cIilcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbG9zZVwiIH0sIFtcbiAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgXCJkYXRhLWNsb3NlXCI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXRpbWVzIGxpbmstaWNvblwiIH0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uZGlzcGxheWVkXG4gICAgPyBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLmRpc3BsYXllZCwgZml4ZWQ6IF92bS5maXhlZCB9LFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImxvYWRpbmdcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX20oMCldXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzcGlubmVyXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc3BpbiBmYS1zcGlubmVyXCIgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3AtYmFyXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wLWJhci1sZWZ0XCIgfSwgW1xuICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1lbnVcIiB9LCBbXG4gICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnBhZ2VuYW1lICE9PSBudWxsXG4gICAgICAgICAgPyBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWVudS10ZXh0XCIsIGF0dHJzOiB7IGlkOiBcInBhZ2UtbmFtZVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wYWdlbmFtZSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgXCJkYXRhLXRvZ2dsZVwiOiBcImRyYXdlclwiIH0gfSwgW1xuICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1iYXJzXCIgfSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9