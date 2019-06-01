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
/******/ 		return __webpack_require__.p + "" + ({"home~item~media":"home~item~media","home~media":"home~media","home":"home","item~media":"item~media","media":"media","item":"item"}[chunkId]||chunkId) + ".js"
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
/******/ 		var cssChunks = {"home~item~media":1,"home~media":1,"home":1,"item~media":1,"media":1,"item":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({"home~item~media":"home~item~media","home~media":"home~media","home":"home","item~media":"item~media","media":"media","item":"item"}[chunkId]||chunkId) + ".css";
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
  router: _config_router__WEBPACK_IMPORTED_MODULE_9__["default"]
});
app.title = document.getElementsByTagName("title")[0].innerHTML;
_config_router__WEBPACK_IMPORTED_MODULE_9__["default"].beforeEach(function (to, from, next) {
  app.loading = true;
  window.scroll(0, 0);
  next();
});
_config_router__WEBPACK_IMPORTED_MODULE_9__["default"].afterEach(function (to, from) {
  app.loading = false;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#drawer").find('a[data-close]').trigger('click');
});

/***/ }),

/***/ "./assets/js/app/API/SecurityAPI.ts":
/*!******************************************!*\
  !*** ./assets/js/app/API/SecurityAPI.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SecurityAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Entity_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Entity/User */ "./assets/js/app/Entity/User.ts");
/* harmony import */ var _components_Session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Session */ "./assets/js/components/Session.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var SecurityAPI =
/*#__PURE__*/
function () {
  function SecurityAPI() {
    _classCallCheck(this, SecurityAPI);
  }

  _createClass(SecurityAPI, null, [{
    key: "login",

    /**
     * Login the user
     *
     * @param login
     * @param password
     * @param callback the code to be executed on success
     */
    value: function login(_login, password, callback, callbackError) {
      if (_components_Session__WEBPACK_IMPORTED_MODULE_2__["default"].getObject('user') !== null) {
        return callback(_components_Session__WEBPACK_IMPORTED_MODULE_2__["default"].getObject('user'));
      }

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/security/login', {
        username: _login,
        password: password
      }).then(function (response) {
        if (response.data === {}) {
          callbackError("Identifiant/Mot de passe invalide");
          return;
        }

        if (response.data.error !== undefined) {
          callbackError(response.data.error);
          return;
        }

        console.log(response.data);
        var item = SecurityAPI.convert(response.data);
        _components_Session__WEBPACK_IMPORTED_MODULE_2__["default"].setObject('user', item);
        callback(item);
      }).catch(function () {
        callbackError("Une erreur est survenue durant votre authentification");
      });
    }
    /**
     * Logout current user
     *
     * @param callback the code to be executed on success
     */

  }, {
    key: "logout",
    value: function logout() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      if (_components_Session__WEBPACK_IMPORTED_MODULE_2__["default"].getObject('user') === null) {
        return callback();
      }

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/security/logout').then(function () {
        callback();
      });
    }
    /**
     * Process input array and return the list of objects
     *
     * @param data
     *
     * @return Item
     */

  }, {
    key: "convert",
    value: function convert(data) {
      return new _Entity_User__WEBPACK_IMPORTED_MODULE_1__["default"](data);
    }
  }]);

  return SecurityAPI;
}();



/***/ }),

/***/ "./assets/js/app/Entity/User.ts":
/*!**************************************!*\
  !*** ./assets/js/app/Entity/User.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User(data) {
    _classCallCheck(this, User);

    this.id = data.id;
    this.username = data.username;
    this.firstName = data.firstname;
    this.lastName = data.lastname;
    this.email = data.email;
    this.roles = data.roles;
  }

  _createClass(User, [{
    key: "isGranted",
    value: function isGranted(role) {
      return this.roles.indexOf(role) !== -1;
    }
  }]);

  return User;
}();



/***/ }),

/***/ "./assets/js/app/Security/Login.vue":
/*!******************************************!*\
  !*** ./assets/js/app/Security/Login.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_9e0ccfe0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=9e0ccfe0&scoped=true& */ "./assets/js/app/Security/Login.vue?vue&type=template&id=9e0ccfe0&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=ts& */ "./assets/js/app/Security/Login.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_id_9e0ccfe0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&id=9e0ccfe0&lang=scss&scoped=true& */ "./assets/js/app/Security/Login.vue?vue&type=style&index=0&id=9e0ccfe0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_9e0ccfe0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_9e0ccfe0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9e0ccfe0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/app/Security/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/app/Security/Login.vue?vue&type=script&lang=ts&":
/*!*******************************************************************!*\
  !*** ./assets/js/app/Security/Login.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--6-0!../../../../node_modules/ts-loader??ref--6-1!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/app/Security/Login.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/app/Security/Login.vue?vue&type=style&index=0&id=9e0ccfe0&lang=scss&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./assets/js/app/Security/Login.vue?vue&type=style&index=0&id=9e0ccfe0&lang=scss&scoped=true& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_9e0ccfe0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader??ref--4-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader??ref--4-2!../../../../node_modules/sass-loader/lib/loader.js??ref--4-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&id=9e0ccfe0&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/app/Security/Login.vue?vue&type=style&index=0&id=9e0ccfe0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_9e0ccfe0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_9e0ccfe0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_9e0ccfe0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_9e0ccfe0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_9e0ccfe0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/app/Security/Login.vue?vue&type=template&id=9e0ccfe0&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./assets/js/app/Security/Login.vue?vue&type=template&id=9e0ccfe0&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_9e0ccfe0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=9e0ccfe0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/app/Security/Login.vue?vue&type=template&id=9e0ccfe0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_9e0ccfe0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_9e0ccfe0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./assets/js/components/Session.ts":
/*!*****************************************!*\
  !*** ./assets/js/components/Session.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Session; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Session =
/*#__PURE__*/
function () {
  function Session() {
    _classCallCheck(this, Session);
  }

  _createClass(Session, null, [{
    key: "get",
    value: function get(key) {
      if (sessionStorage.getItem(key)) {
        return sessionStorage.getItem(key);
      }

      return null;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      sessionStorage.setItem(key, value);
      return value;
    }
  }, {
    key: "getObject",
    value: function getObject(key) {
      if (sessionStorage.getItem(key) !== null) {
        return JSON.parse(sessionStorage.getItem(key));
      }

      return null;
    }
  }, {
    key: "setObject",
    value: function setObject(key, value) {
      sessionStorage.setItem(key, JSON.stringify(value));
      return value;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      sessionStorage.clear();
    }
  }]);

  return Session;
}();



/***/ }),

/***/ "./assets/js/config/leftmenu.ts":
/*!**************************************!*\
  !*** ./assets/js/config/leftmenu.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_Item_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page/Item/router */ "./assets/js/page/Item/router.ts");
/* harmony import */ var _page_Media_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page/Media/router */ "./assets/js/page/Media/router.ts");



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

var routes = [{
  label: 'Accueil',
  name: 'home',
  icon: 'fa fa-home'
}, {
  label: 'Items',
  children: createMenu(_page_Item_router__WEBPACK_IMPORTED_MODULE_0__["default"])
}, {
  label: 'Media',
  children: createMenu(_page_Media_router__WEBPACK_IMPORTED_MODULE_1__["default"])
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./assets/js/config/router.ts":
/*!************************************!*\
  !*** ./assets/js/config/router.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _page_Item_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page/Item/router */ "./assets/js/page/Item/router.ts");
/* harmony import */ var _page_Media_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page/Media/router */ "./assets/js/page/Media/router.ts");
/* harmony import */ var _page_Security_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../page/Security/router */ "./assets/js/page/Security/router.ts");





vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
var baseRoutes = [{
  name: 'home',
  meta: {
    title: 'Accueil',
    pageTitle: true
  },
  path: '/',
  component: function component() {
    return Promise.all(/*! import() | home */[__webpack_require__.e("home~item~media"), __webpack_require__.e("home~media"), __webpack_require__.e("home")]).then(__webpack_require__.bind(null, /*! ../page/Home.vue */ "./assets/js/page/Home.vue"));
  }
}];
var routes = baseRoutes.concat(_page_Item_router__WEBPACK_IMPORTED_MODULE_2__["default"], _page_Media_router__WEBPACK_IMPORTED_MODULE_3__["default"], _page_Security_router__WEBPACK_IMPORTED_MODULE_4__["default"], [{
  path: '*',
  redirect: '/'
}]);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'history',
  base: Object({"NODE_ENV":"development"}).ROUTER_BASE,
  linkActiveClass: '',
  linkExactActiveClass: 'active',
  routes: routes
});
/* harmony default export */ __webpack_exports__["default"] = (router);

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
    return Promise.all(/*! import() | item */[__webpack_require__.e("home~item~media"), __webpack_require__.e("item~media"), __webpack_require__.e("item")]).then(__webpack_require__.bind(null, /*! ./Search.vue */ "./assets/js/page/Item/Search.vue"));
  }
}, {
  name: 'item-view',
  meta: {
    pageTitle: false,
    leftMenu: false
  },
  path: '/item/:id/view/',
  component: function component() {
    return Promise.all(/*! import() | item */[__webpack_require__.e("home~item~media"), __webpack_require__.e("item~media"), __webpack_require__.e("item")]).then(__webpack_require__.bind(null, /*! ./View.vue */ "./assets/js/page/Item/View.vue"));
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
    return Promise.all(/*! import() | media */[__webpack_require__.e("home~item~media"), __webpack_require__.e("item~media"), __webpack_require__.e("home~media"), __webpack_require__.e("media")]).then(__webpack_require__.bind(null, /*! ./Index.vue */ "./assets/js/page/Media/Index.vue"));
  }
}, {
  name: 'media-view',
  meta: {
    pageTitle: false,
    leftMenu: false
  },
  path: '/media/:id/view/',
  component: function component() {
    return Promise.all(/*! import() | media */[__webpack_require__.e("home~item~media"), __webpack_require__.e("item~media"), __webpack_require__.e("home~media"), __webpack_require__.e("media")]).then(__webpack_require__.bind(null, /*! ./View.vue */ "./assets/js/page/Media/View.vue"));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (mediaRoutes);

/***/ }),

/***/ "./assets/js/page/Security/router.ts":
/*!*******************************************!*\
  !*** ./assets/js/page/Security/router.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var securityRoutes = [];
/* harmony default export */ __webpack_exports__["default"] = (securityRoutes);

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/app/Security/Login.vue?vue&type=script&lang=ts&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--6-0!./node_modules/ts-loader??ref--6-1!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/app/Security/Login.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var _components_Block_Loading_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Block/Loading.vue */ "./assets/js/components/Block/Loading.vue");
/* harmony import */ var _API_SecurityAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../API/SecurityAPI */ "./assets/js/app/API/SecurityAPI.ts");
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





var Login =
/*#__PURE__*/
function (_Vue) {
  _inherits(Login, _Vue);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, _getPrototypeOf(Login).apply(this, arguments));
  }

  _createClass(Login, [{
    key: "data",
    value: function data() {
      return {
        loading: false,
        login: "",
        password: "",
        user: null,
        error: ""
      };
    }
  }, {
    key: "onSubmitMethod",
    value: function onSubmitMethod() {
      var _this = this;

      this.loading = true;
      _API_SecurityAPI__WEBPACK_IMPORTED_MODULE_2__["default"].login(this.login, this.password, function (user) {
        _this.$emit('input', user);

        _this.loading = false;

        _this.$router.push({
          name: 'home'
        });
      }, function (message) {
        _this.error = message;
        _this.loading = false;
      });
    }
  }]);

  return Login;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]);

Login = __decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
  components: {
    Loading: _components_Block_Loading_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
})], Login);
/* harmony default export */ __webpack_exports__["default"] = (Login);

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
/* harmony import */ var _Session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Session */ "./assets/js/components/Session.ts");
/* harmony import */ var _app_Security_Login_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/Security/Login.vue */ "./assets/js/app/Security/Login.vue");
/* harmony import */ var _app_API_SecurityAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/API/SecurityAPI */ "./assets/js/app/API/SecurityAPI.ts");
/* harmony import */ var _Loading_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loading.vue */ "./assets/js/components/Block/Loading.vue");
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
    var _this;

    _classCallCheck(this, LeftMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LeftMenu).apply(this, arguments));
    _this.user = null;
    return _this;
  }

  _createClass(LeftMenu, [{
    key: "data",
    value: function data() {
      return {
        loading: false,
        user: _Session__WEBPACK_IMPORTED_MODULE_2__["default"].getObject('user')
      };
    }
  }, {
    key: "getIconClasses",
    value: function getIconClasses(icon) {
      return icon + " link-icon";
    }
  }, {
    key: "logout",
    value: function logout() {
      var _this2 = this;

      if (_Session__WEBPACK_IMPORTED_MODULE_2__["default"].getObject('user') !== null) {
        this.loading = true;
        _app_API_SecurityAPI__WEBPACK_IMPORTED_MODULE_4__["default"].logout(function () {
          _this2.user = null;
          _this2.loading = false;
        });
      }
    }
  }]);

  return LeftMenu;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
  type: Array
})], LeftMenu.prototype, "items", void 0);

LeftMenu = __decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
  components: {
    Loading: _Loading_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Login: _app_Security_Login_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
})], LeftMenu);
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
  type: Boolean,
  default: true
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/app/Security/Login.vue?vue&type=style&index=0&id=9e0ccfe0&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/app/Security/Login.vue?vue&type=style&index=0&id=9e0ccfe0&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/app/Security/Login.vue?vue&type=template&id=9e0ccfe0&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/app/Security/Login.vue?vue&type=template&id=9e0ccfe0&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "section",
    [
      _c("h1", { staticClass: "section-title" }, [_vm._v("Connexion")]),
      _vm._v(" "),
      !_vm.loading
        ? _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.onSubmitMethod($event)
                }
              }
            },
            [
              _vm.error !== ""
                ? _c("div", { staticClass: "callout alert" }, [
                    _vm._v(_vm._s(_vm.error))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.login,
                    expression: "login"
                  }
                ],
                attrs: { type: "text", placeholder: "Identifiant" },
                domProps: { value: _vm.login },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.login = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.password,
                    expression: "password"
                  }
                ],
                attrs: { type: "password", placeholder: "Mot de passe" },
                domProps: { value: _vm.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.password = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "button success expanded",
                  attrs: {
                    disabled:
                      _vm.login.length === 0 ||
                      _vm.password.length === 0 ||
                      _vm.loading
                  }
                },
                [_vm._v("Connexion")]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.loading ? _c("Loading", { attrs: { fixed: false } }) : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
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
    _c(
      "div",
      { staticClass: "drawer-header" },
      [
        _c("div", { staticClass: "close" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm.user !== null && !_vm.loading
            ? _c("a", { on: { click: _vm.logout } }, [
                _c("i", { staticClass: "fas fa-sign-out-alt link-icon" })
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _vm.user !== null && !_vm.loading
          ? [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "user" }, [
                _c("div", { staticClass: "avatar" }, [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! ../../../assets/avatar.jpg */ "./assets/assets/avatar.jpg"),
                      alt: _vm.user.username,
                      title: "user.username"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "id" }, [
                  _c("span", { staticClass: "pseudo" }, [
                    _vm._v(_vm._s(_vm.user.username))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "mail" }, [
                    _vm._v(_vm._s(_vm.user.email))
                  ])
                ])
              ])
            ]
          : !_vm.loading
          ? _c("Login", {
              model: {
                value: _vm.user,
                callback: function($$v) {
                  _vm.user = $$v
                },
                expression: "user"
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.loading ? _c("Loading", { attrs: { fixed: false } }) : _vm._e()
      ],
      2
    ),
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
    return _c("a", { attrs: { "data-close": "" } }, [
      _c("i", { staticClass: "fas fa-times link-icon" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image" }, [
      _c("img", {
        attrs: {
          src: __webpack_require__(/*! ../../../assets/leftmenu-header-background.jpg */ "./assets/assets/leftmenu-header-background.jpg"),
          alt: "Banner profil image"
        }
      })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Fzc2V0cy9hdmF0YXIuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hc3NldHMvbGVmdG1lbnUtaGVhZGVyLWJhY2tncm91bmQuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9BcHAudnVlPzVhOWMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0FwcC52dWU/NGE2MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQXBwLnZ1ZT9lNWEyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9BcHAudnVlP2U0NmYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0FQSS9TZWN1cml0eUFQSS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0VudGl0eS9Vc2VyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvU2VjdXJpdHkvTG9naW4udnVlPzJmYWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9TZWN1cml0eS9Mb2dpbi52dWU/Y2U0YyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL1NlY3VyaXR5L0xvZ2luLnZ1ZT9lN2QxIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvU2VjdXJpdHkvTG9naW4udnVlPzU4YjIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTGVmdE1lbnUudnVlP2RkNDEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTGVmdE1lbnUudnVlP2VhZTQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTGVmdE1lbnUudnVlP2Q2ZTAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTGVmdE1lbnUudnVlP2E2NDQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTG9hZGluZy52dWU/NGQ5MyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Mb2FkaW5nLnZ1ZT9kNTI4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL0xvYWRpbmcudnVlPzhmMzIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTG9hZGluZy52dWU/MDQyMiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Ub3BCYXIudnVlP2Y1YWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svVG9wQmFyLnZ1ZT9iNmI3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RvcEJhci52dWU/MjVhMiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Ub3BCYXIudnVlP2EwZjgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU2Vzc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29uZmlnL2xlZnRtZW51LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb25maWcvcm91dGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL0l0ZW0vcm91dGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL01lZGlhL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZS9TZWN1cml0eS9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvYXBwLnNjc3M/OTZjZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9zZWxlY3QyLmZvdW5kYXRpb24uc2Nzcz9hZmZlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9BcHAudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvU2VjdXJpdHkvTG9naW4udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL0xlZnRNZW51LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Mb2FkaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Ub3BCYXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9BcHAudnVlP2QyNTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9TZWN1cml0eS9Mb2dpbi52dWU/N2M2MyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9MZWZ0TWVudS52dWU/YTZmMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Mb2FkaW5nLnZ1ZT9mMTJlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RvcEJhci52dWU/ZjY0NiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQXBwLnZ1ZT9hMjAwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvU2VjdXJpdHkvTG9naW4udnVlPzBmOGEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTGVmdE1lbnUudnVlPzFmZGUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTG9hZGluZy52dWU/NzJmNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Ub3BCYXIudnVlPzRkNmMiXSwibmFtZXMiOlsicmVxdWlyZSIsImFwcCIsIlZ1ZSIsImVsIiwicHJvcHMiLCJjb21wb25lbnRzIiwiQXBwIiwidGVtcGxhdGUiLCJyb3V0ZXIiLCJ0aXRsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbm5lckhUTUwiLCJiZWZvcmVFYWNoIiwidG8iLCJmcm9tIiwibmV4dCIsImxvYWRpbmciLCJ3aW5kb3ciLCJzY3JvbGwiLCJhZnRlckVhY2giLCIkIiwiZmluZCIsInRyaWdnZXIiLCJTZWN1cml0eUFQSSIsImxvZ2luIiwicGFzc3dvcmQiLCJjYWxsYmFjayIsImNhbGxiYWNrRXJyb3IiLCJTZXNzaW9uIiwiZ2V0T2JqZWN0IiwiYXhpb3MiLCJwb3N0IiwidXNlcm5hbWUiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiaXRlbSIsImNvbnZlcnQiLCJzZXRPYmplY3QiLCJjYXRjaCIsIlVzZXIiLCJpZCIsImZpcnN0TmFtZSIsImZpcnN0bmFtZSIsImxhc3ROYW1lIiwibGFzdG5hbWUiLCJlbWFpbCIsInJvbGVzIiwicm9sZSIsImluZGV4T2YiLCJrZXkiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ2YWx1ZSIsInNldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJjbGVhciIsImNyZWF0ZU1lbnUiLCJyb3V0ZXMiLCJvdXRwdXQiLCJmb3JFYWNoIiwibWV0YSIsImxlZnRNZW51IiwicHVzaCIsIm5hbWUiLCJsYWJlbCIsImljb24iLCJjaGlsZHJlbiIsIml0ZW1Sb3V0ZXMiLCJtZWRpYVJvdXRlcyIsInVzZSIsIlZ1ZVJvdXRlciIsImJhc2VSb3V0ZXMiLCJwYWdlVGl0bGUiLCJwYXRoIiwiY29tcG9uZW50IiwiY29uY2F0Iiwic2VjdXJpdHlSb3V0ZXMiLCJyZWRpcmVjdCIsIm1vZGUiLCJiYXNlIiwicHJvY2VzcyIsIlJPVVRFUl9CQVNFIiwibGlua0FjdGl2ZUNsYXNzIiwibGlua0V4YWN0QWN0aXZlQ2xhc3MiLCJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJsZWZ0TWVudUl0ZW1zIiwibGVmdG1lbnVJdGVtcyIsInBhZ2VOYW1lIiwiZm91bmRhdGlvbiIsImN1cnJlbnRSb3V0ZSIsIiRyb3V0ZSIsIlByb3AiLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJwcm90b3R5cGUiLCJTdHJpbmciLCJXYXRjaCIsIkNvbXBvbmVudCIsIkxlZnRNZW51IiwiTG9hZGluZyIsIlRvcEJhciIsIkxvZ2luIiwidXNlciIsIiRlbWl0IiwiJHJvdXRlciIsIm1lc3NhZ2UiLCJsb2dvdXQiLCJBcnJheSIsIm5vdGlmaWNhdGlvbnMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlEQUF5QyxvSUFBb0k7QUFDN0s7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDRCQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSwrQkFBdUIsb0lBQW9JO0FBQzNKO0FBQ0E7QUFDQSwyQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBbUIsOEJBQThCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseUJBQXlCO0FBQy9DLGVBQWUsdUNBQXVDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0MsZUFBZSw4QkFBOEI7QUFDN0MsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DLGtCQUFrQixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTLDBCQUEwQixFQUFFO0FBQ3BELGlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgQ1NTIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENzc0NodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fVxuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7XCJob21lfml0ZW1+bWVkaWFcIjpcImhvbWV+aXRlbX5tZWRpYVwiLFwiaG9tZX5tZWRpYVwiOlwiaG9tZX5tZWRpYVwiLFwiaG9tZVwiOlwiaG9tZVwiLFwiaXRlbX5tZWRpYVwiOlwiaXRlbX5tZWRpYVwiLFwibWVkaWFcIjpcIm1lZGlhXCIsXCJpdGVtXCI6XCJpdGVtXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIENTUyBsb2FkaW5nXG4gXHRcdHZhciBjc3NDaHVua3MgPSB7XCJob21lfml0ZW1+bWVkaWFcIjoxLFwiaG9tZX5tZWRpYVwiOjEsXCJob21lXCI6MSxcIml0ZW1+bWVkaWFcIjoxLFwibWVkaWFcIjoxLFwiaXRlbVwiOjF9O1xuIFx0XHRpZihpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pIHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdKTtcbiBcdFx0ZWxzZSBpZihpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gIT09IDAgJiYgY3NzQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdHZhciBocmVmID0gXCJcIiArICh7XCJob21lfml0ZW1+bWVkaWFcIjpcImhvbWV+aXRlbX5tZWRpYVwiLFwiaG9tZX5tZWRpYVwiOlwiaG9tZX5tZWRpYVwiLFwiaG9tZVwiOlwiaG9tZVwiLFwiaXRlbX5tZWRpYVwiOlwiaXRlbX5tZWRpYVwiLFwibWVkaWFcIjpcIm1lZGlhXCIsXCJpdGVtXCI6XCJpdGVtXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmNzc1wiO1xuIFx0XHRcdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcbiBcdFx0XHRcdHZhciBleGlzdGluZ0xpbmtUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nTGlua1RhZ3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHRhZyA9IGV4aXN0aW5nTGlua1RhZ3NbaV07XG4gXHRcdFx0XHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIikgfHwgdGFnLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gXHRcdFx0XHRcdGlmKHRhZy5yZWwgPT09IFwic3R5bGVzaGVldFwiICYmIChkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpKSByZXR1cm4gcmVzb2x2ZSgpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0dmFyIGV4aXN0aW5nU3R5bGVUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1N0eWxlVGFncy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgdGFnID0gZXhpc3RpbmdTdHlsZVRhZ3NbaV07XG4gXHRcdFx0XHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik7XG4gXHRcdFx0XHRcdGlmKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikgcmV0dXJuIHJlc29sdmUoKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHZhciBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gXHRcdFx0XHRsaW5rVGFnLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuIFx0XHRcdFx0bGlua1RhZy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuIFx0XHRcdFx0bGlua1RhZy5vbmxvYWQgPSByZXNvbHZlO1xuIFx0XHRcdFx0bGlua1RhZy5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiBcdFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYyB8fCBmdWxsaHJlZjtcbiBcdFx0XHRcdFx0dmFyIGVyciA9IG5ldyBFcnJvcihcIkxvYWRpbmcgQ1NTIGNodW5rIFwiICsgY2h1bmtJZCArIFwiIGZhaWxlZC5cXG4oXCIgKyByZXF1ZXN0ICsgXCIpXCIpO1xuIFx0XHRcdFx0XHRlcnIucmVxdWVzdCA9IHJlcXVlc3Q7XG4gXHRcdFx0XHRcdHJlamVjdChlcnIpO1xuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdGxpbmtUYWcuaHJlZiA9IGZ1bGxocmVmO1xuIFx0XHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4gXHRcdFx0XHRoZWFkLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuIFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHRcdH0pKTtcbiBcdFx0fVxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJyk7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXNzZXRzL2pzL2FwcC50c1wiLFwidmVuZG9yc35hcHBcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2J1aWxkL2ltYWdlcy9hdmF0YXIuMzBmNjQ2MTAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9idWlsZC9pbWFnZXMvbGVmdG1lbnUtaGVhZGVyLWJhY2tncm91bmQuODEzZmRkOGYuanBnXCI7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI4ZmUwYmFlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWI4ZmUwYmFlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYjhmZTBiYWVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvc3J2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiOGZlMGJhZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiOGZlMGJhZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iOGZlMGJhZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiOGZlMGJhZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWI4ZmUwYmFlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YjhmZTBiYWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjhmZTBiYWUmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2Rpc3QvY3NzL2ZvdW5kYXRpb24ubWluLmNzcyc7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvZGlzdC9qcy9mb3VuZGF0aW9uLm1pbic7XG5pbXBvcnQgJ3NlbGVjdDIvZGlzdC9jc3Mvc2VsZWN0Mi5taW4uY3NzJztcbmltcG9ydCAnc2VsZWN0Mi9kaXN0L2pzL3NlbGVjdDIuZnVsbC5taW4nO1xuaW1wb3J0ICdzZWxlY3QyL2Rpc3QvanMvaTE4bi9mcic7XG5yZXF1aXJlKCcuLi9zY3NzL3NlbGVjdDIuZm91bmRhdGlvbi5zY3NzJyk7XG5yZXF1aXJlKCcuLi9zY3NzL2FwcC5zY3NzJyk7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSc7XG5pbXBvcnQgcm91dGVyIGZyb20gXCIuL2NvbmZpZy9yb3V0ZXJcIjtcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG4gICAgcHJvcHM6IFsnbG9hZGluZycsICd0aXRsZSddLFxuICAgIGNvbXBvbmVudHM6IHsgQXBwIH0sXG4gICAgdGVtcGxhdGU6ICc8QXBwIDp0aXRsZT1cInRpdGxlXCIgOmxvYWRpbmc9XCJsb2FkaW5nXCI+PC9BcHA+JyxcbiAgICByb3V0ZXIsXG59KTtcbmFwcC50aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGl0bGVcIilbMF0uaW5uZXJIVE1MO1xucm91dGVyLmJlZm9yZUVhY2goKHRvLCBmcm9tLCBuZXh0KSA9PiB7XG4gICAgYXBwLmxvYWRpbmcgPSB0cnVlO1xuICAgIHdpbmRvdy5zY3JvbGwoMCwgMCk7XG4gICAgbmV4dCgpO1xufSk7XG5yb3V0ZXIuYWZ0ZXJFYWNoKCh0bywgZnJvbSkgPT4ge1xuICAgIGFwcC5sb2FkaW5nID0gZmFsc2U7XG4gICAgJChcIiNkcmF3ZXJcIikuZmluZCgnYVtkYXRhLWNsb3NlXScpLnRyaWdnZXIoJ2NsaWNrJyk7XG59KTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vRW50aXR5L1VzZXJcIjtcbmltcG9ydCBTZXNzaW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Nlc3Npb25cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3VyaXR5QVBJIHtcbiAgICAvKipcbiAgICAgKiBMb2dpbiB0aGUgdXNlclxuICAgICAqXG4gICAgICogQHBhcmFtIGxvZ2luXG4gICAgICogQHBhcmFtIHBhc3N3b3JkXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHRoZSBjb2RlIHRvIGJlIGV4ZWN1dGVkIG9uIHN1Y2Nlc3NcbiAgICAgKi9cbiAgICBzdGF0aWMgbG9naW4obG9naW4sIHBhc3N3b3JkLCBjYWxsYmFjaywgY2FsbGJhY2tFcnJvcikge1xuICAgICAgICBpZiAoU2Vzc2lvbi5nZXRPYmplY3QoJ3VzZXInKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKFNlc3Npb24uZ2V0T2JqZWN0KCd1c2VyJykpO1xuICAgICAgICB9XG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvc2VjdXJpdHkvbG9naW4nLCB7XG4gICAgICAgICAgICB1c2VybmFtZTogbG9naW4sXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhID09PSB7fSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrRXJyb3IoXCJJZGVudGlmaWFudC9Nb3QgZGUgcGFzc2UgaW52YWxpZGVcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrRXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IFNlY3VyaXR5QVBJLmNvbnZlcnQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICBTZXNzaW9uLnNldE9iamVjdCgndXNlcicsIGl0ZW0pO1xuICAgICAgICAgICAgY2FsbGJhY2soaXRlbSk7XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrRXJyb3IoXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSBkdXJhbnQgdm90cmUgYXV0aGVudGlmaWNhdGlvblwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvZ291dCBjdXJyZW50IHVzZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB0aGUgY29kZSB0byBiZSBleGVjdXRlZCBvbiBzdWNjZXNzXG4gICAgICovXG4gICAgc3RhdGljIGxvZ291dChjYWxsYmFjayA9ICgpID0+IHsgfSkge1xuICAgICAgICBpZiAoU2Vzc2lvbi5nZXRPYmplY3QoJ3VzZXInKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9zZWN1cml0eS9sb2dvdXQnKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgaW5wdXQgYXJyYXkgYW5kIHJldHVybiB0aGUgbGlzdCBvZiBvYmplY3RzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqXG4gICAgICogQHJldHVybiBJdGVtXG4gICAgICovXG4gICAgc3RhdGljIGNvbnZlcnQoZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IFVzZXIoZGF0YSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IGRhdGEudXNlcm5hbWU7XG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZGF0YS5maXJzdG5hbWU7XG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBkYXRhLmxhc3RuYW1lO1xuICAgICAgICB0aGlzLmVtYWlsID0gZGF0YS5lbWFpbDtcbiAgICAgICAgdGhpcy5yb2xlcyA9IGRhdGEucm9sZXM7XG4gICAgfVxuICAgIGlzR3JhbnRlZChyb2xlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvbGVzLmluZGV4T2Yocm9sZSkgIT09IC0xO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTllMGNjZmUwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTllMGNjZmUwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiOWUwY2NmZTBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvc3J2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5ZTBjY2ZlMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5ZTBjY2ZlMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTllMGNjZmUwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzllMGNjZmUwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvYXBwL1NlY3VyaXR5L0xvZ2luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWUwY2NmZTAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTllMGNjZmUwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWUwY2NmZTAmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xlZnRNZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MDg4NTVjOSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9MZWZ0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xlZnRNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9MZWZ0TWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MDg4NTVjOSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjYwODg1NWM5XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Nydi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjA4ODU1YzknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjA4ODU1YzknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xlZnRNZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MDg4NTVjOSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MDg4NTVjOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTGVmdE1lbnUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MZWZ0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGVmdE1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MZWZ0TWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MDg4NTVjOSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGVmdE1lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjA4ODU1YzkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xlZnRNZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MDg4NTVjOSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9hZGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjNhMzFjNDkmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9hZGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjNhMzFjNDkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyM2EzMWM0OVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9zcnYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIzYTMxYzQ5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIzYTMxYzQ5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yM2EzMWM0OSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyM2EzMWM0OScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTG9hZGluZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIzYTMxYzQ5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIzYTMxYzQ5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yM2EzMWM0OSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVG9wQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YmI5ZTEwMSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1RvcEJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YmI5ZTEwMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjZiYjllMTAxXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Nydi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmJiOWUxMDEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmJiOWUxMDEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RvcEJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmJiOWUxMDEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmJiOWUxMDEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RvcEJhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvcEJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZiYjllMTAxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmJiOWUxMDEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvcEJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmJiOWUxMDEmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9uIHtcbiAgICBzdGF0aWMgZ2V0KGtleSkge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0T2JqZWN0KGtleSkge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0T2JqZWN0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGRlc3Ryb3koKSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGl0ZW1Sb3V0ZXMgZnJvbSBcIi4uL3BhZ2UvSXRlbS9yb3V0ZXJcIjtcbmltcG9ydCBtZWRpYVJvdXRlcyBmcm9tIFwiLi4vcGFnZS9NZWRpYS9yb3V0ZXJcIjtcbmZ1bmN0aW9uIGNyZWF0ZU1lbnUocm91dGVzKSB7XG4gICAgbGV0IG91dHB1dCA9IFtdO1xuICAgIHJvdXRlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWl0ZW0ubWV0YS5sZWZ0TWVudSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGxhYmVsOiBpdGVtLm1ldGEudGl0bGUsXG4gICAgICAgICAgICBpY29uOiBpdGVtLm1ldGEuaWNvblxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0O1xufVxubGV0IHJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnQWNjdWVpbCcsXG4gICAgICAgIG5hbWU6ICdob21lJyxcbiAgICAgICAgaWNvbjogJ2ZhIGZhLWhvbWUnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnSXRlbXMnLFxuICAgICAgICBjaGlsZHJlbjogY3JlYXRlTWVudShpdGVtUm91dGVzKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdNZWRpYScsXG4gICAgICAgIGNoaWxkcmVuOiBjcmVhdGVNZW51KG1lZGlhUm91dGVzKSxcbiAgICB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSBcInZ1ZS1yb3V0ZXJcIjtcbmltcG9ydCBpdGVtUm91dGVzIGZyb20gXCIuLi9wYWdlL0l0ZW0vcm91dGVyXCI7XG5pbXBvcnQgbWVkaWFSb3V0ZXMgZnJvbSBcIi4uL3BhZ2UvTWVkaWEvcm91dGVyXCI7XG5pbXBvcnQgc2VjdXJpdHlSb3V0ZXMgZnJvbSBcIi4uL3BhZ2UvU2VjdXJpdHkvcm91dGVyXCI7XG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5jb25zdCBiYXNlUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ2hvbWUnLFxuICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0FjY3VlaWwnLFxuICAgICAgICAgICAgcGFnZVRpdGxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIGNvbXBvbmVudDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnaG9tZScgKi8gXCIuLi9wYWdlL0hvbWUudnVlXCIpO1xuICAgICAgICB9XG4gICAgfSxcbl07XG5jb25zdCByb3V0ZXMgPSBiYXNlUm91dGVzLmNvbmNhdChpdGVtUm91dGVzLCBtZWRpYVJvdXRlcywgc2VjdXJpdHlSb3V0ZXMsIFt7XG4gICAgICAgIHBhdGg6ICcqJyxcbiAgICAgICAgcmVkaXJlY3Q6ICcvJ1xuICAgIH1dKTtcbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xuICAgIG1vZGU6ICdoaXN0b3J5JyxcbiAgICBiYXNlOiBwcm9jZXNzLmVudi5ST1VURVJfQkFTRSxcbiAgICBsaW5rQWN0aXZlQ2xhc3M6ICcnLFxuICAgIGxpbmtFeGFjdEFjdGl2ZUNsYXNzOiAnYWN0aXZlJyxcbiAgICByb3V0ZXM6IHJvdXRlc1xufSk7XG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iLCJjb25zdCBpdGVtUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ2l0ZW0tc2VhcmNoJyxcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6ICdSZWNoZXJjaGUnLFxuICAgICAgICAgICAgcGFnZVRpdGxlOiB0cnVlLFxuICAgICAgICAgICAgbGVmdE1lbnU6IHRydWUsXG4gICAgICAgICAgICBpY29uOiAnZmEgZmEtc2VhcmNoJyxcbiAgICAgICAgfSxcbiAgICAgICAgcGF0aDogJy9pdGVtL3NlYXJjaCcsXG4gICAgICAgIGNvbXBvbmVudDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnaXRlbScgKi8gXCIuL1NlYXJjaC52dWVcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2l0ZW0tdmlldycsXG4gICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogZmFsc2UsXG4gICAgICAgICAgICBsZWZ0TWVudTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHBhdGg6ICcvaXRlbS86aWQvdmlldy8nLFxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2l0ZW0nICovIFwiLi9WaWV3LnZ1ZVwiKTtcbiAgICAgICAgfVxuICAgIH0sXG5dO1xuZXhwb3J0IGRlZmF1bHQgaXRlbVJvdXRlcztcbiIsImNvbnN0IG1lZGlhUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ21lZGlhLWluZGV4JyxcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6ICdMaXN0ZSBkZXMgbcOpZGlhcycsXG4gICAgICAgICAgICBwYWdlVGl0bGU6IHRydWUsXG4gICAgICAgICAgICBsZWZ0TWVudTogdHJ1ZSxcbiAgICAgICAgICAgIGljb246ICdmYXMgZmEtdmlkZW8nLFxuICAgICAgICB9LFxuICAgICAgICBwYXRoOiAnL21lZGlhL2luZGV4JyxcbiAgICAgICAgY29tcG9uZW50OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdtZWRpYScgKi8gXCIuL0luZGV4LnZ1ZVwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnbWVkaWEtdmlldycsXG4gICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogZmFsc2UsXG4gICAgICAgICAgICBsZWZ0TWVudTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHBhdGg6ICcvbWVkaWEvOmlkL3ZpZXcvJyxcbiAgICAgICAgY29tcG9uZW50OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdtZWRpYScgKi8gXCIuL1ZpZXcudnVlXCIpO1xuICAgICAgICB9XG4gICAgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBtZWRpYVJvdXRlcztcbiIsImNvbnN0IHNlY3VyaXR5Um91dGVzID0gW107XG5leHBvcnQgZGVmYXVsdCBzZWN1cml0eVJvdXRlcztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3AsIFZ1ZSwgV2F0Y2ggfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vY29tcG9uZW50cy9CbG9jay9Mb2FkaW5nLnZ1ZVwiO1xuaW1wb3J0IExlZnRNZW51IGZyb20gXCIuL2NvbXBvbmVudHMvQmxvY2svTGVmdE1lbnVcIjtcbmltcG9ydCBUb3BCYXIgZnJvbSBcIi4vY29tcG9uZW50cy9CbG9jay9Ub3BCYXJcIjtcbmltcG9ydCBsZWZ0bWVudUl0ZW1zIGZyb20gXCIuL2NvbmZpZy9sZWZ0bWVudVwiO1xubGV0IEFwcCA9IGNsYXNzIEFwcCBleHRlbmRzIFZ1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubGVmdE1lbnVJdGVtcyA9IGxlZnRtZW51SXRlbXM7XG4gICAgICAgIHRoaXMucGFnZU5hbWUgPSBcIlwiO1xuICAgIH1cbiAgICBtb3VudGVkKCkge1xuICAgICAgICAkKGRvY3VtZW50KS5mb3VuZGF0aW9uKCk7XG4gICAgfVxuICAgIG9uUm91dGVDaGFuZ2UoKSB7XG4gICAgICAgIGxldCBjdXJyZW50Um91dGUgPSB0aGlzLiRyb3V0ZTtcbiAgICAgICAgaWYgKGN1cnJlbnRSb3V0ZS5tZXRhLnRpdGxlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IGN1cnJlbnRSb3V0ZS5tZXRhLnRpdGxlICsgXCIgfCBcIiArIHRoaXMudGl0bGU7XG4gICAgICAgICAgICBpZiAoY3VycmVudFJvdXRlLm1ldGEucGFnZVRpdGxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTmFtZSA9IGN1cnJlbnRSb3V0ZS5tZXRhLnRpdGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRoaXMudGl0bGU7XG4gICAgICAgICAgICB0aGlzLnBhZ2VOYW1lID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBQcm9wKHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSlcbl0sIEFwcC5wcm90b3R5cGUsIFwibG9hZGluZ1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9KVxuXSwgQXBwLnByb3RvdHlwZSwgXCJ0aXRsZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgV2F0Y2goJyRyb3V0ZScpXG5dLCBBcHAucHJvdG90eXBlLCBcIm9uUm91dGVDaGFuZ2VcIiwgbnVsbCk7XG5BcHAgPSBfX2RlY29yYXRlKFtcbiAgICBDb21wb25lbnQoe1xuICAgICAgICBjb21wb25lbnRzOiB7IExlZnRNZW51LCBMb2FkaW5nLCBUb3BCYXIgfVxuICAgIH0pXG5dLCBBcHApO1xuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgQ29tcG9uZW50LCBWdWUgfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvY2svTG9hZGluZy52dWVcIjtcbmltcG9ydCBTZWN1cml0eUFQSSBmcm9tIFwiLi4vQVBJL1NlY3VyaXR5QVBJXCI7XG5sZXQgTG9naW4gPSBjbGFzcyBMb2dpbiBleHRlbmRzIFZ1ZSB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgbG9naW46IFwiXCIsXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgICAgICBlcnJvcjogXCJcIixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb25TdWJtaXRNZXRob2QoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIFNlY3VyaXR5QVBJLmxvZ2luKHRoaXMubG9naW4sIHRoaXMucGFzc3dvcmQsICh1c2VyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHVzZXIpO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdob21lJyB9KTtcbiAgICAgICAgfSwgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBtZXNzYWdlO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5Mb2dpbiA9IF9fZGVjb3JhdGUoW1xuICAgIENvbXBvbmVudCh7XG4gICAgICAgIGNvbXBvbmVudHM6IHsgTG9hZGluZyB9XG4gICAgfSlcbl0sIExvZ2luKTtcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9wLCBWdWUgfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tIFwidnVlLXJvdXRlclwiO1xuaW1wb3J0IFNlc3Npb24gZnJvbSBcIi4uL1Nlc3Npb25cIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi4vLi4vYXBwL1NlY3VyaXR5L0xvZ2luLnZ1ZVwiO1xuaW1wb3J0IFNlY3VyaXR5QVBJIGZyb20gXCIuLi8uLi9hcHAvQVBJL1NlY3VyaXR5QVBJXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9Mb2FkaW5nLnZ1ZVwiO1xuVnVlLnVzZShWdWVSb3V0ZXIpO1xubGV0IExlZnRNZW51ID0gY2xhc3MgTGVmdE1lbnUgZXh0ZW5kcyBWdWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnVzZXIgPSBudWxsO1xuICAgIH1cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICB1c2VyOiBTZXNzaW9uLmdldE9iamVjdCgndXNlcicpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRJY29uQ2xhc3NlcyhpY29uKSB7XG4gICAgICAgIHJldHVybiBpY29uICsgXCIgbGluay1pY29uXCI7XG4gICAgfVxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgaWYgKFNlc3Npb24uZ2V0T2JqZWN0KCd1c2VyJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICBTZWN1cml0eUFQSS5sb2dvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBQcm9wKHsgdHlwZTogQXJyYXkgfSlcbl0sIExlZnRNZW51LnByb3RvdHlwZSwgXCJpdGVtc1wiLCB2b2lkIDApO1xuTGVmdE1lbnUgPSBfX2RlY29yYXRlKFtcbiAgICBDb21wb25lbnQoe1xuICAgICAgICBjb21wb25lbnRzOiB7IExvYWRpbmcsIExvZ2luIH1cbiAgICB9KVxuXSwgTGVmdE1lbnUpO1xuZXhwb3J0IGRlZmF1bHQgTGVmdE1lbnU7XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3AsIFZ1ZSB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5sZXQgTG9hZGluZyA9IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBWdWUge1xufTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH0pXG5dLCBMb2FkaW5nLnByb3RvdHlwZSwgXCJkaXNwbGF5ZWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH0pXG5dLCBMb2FkaW5nLnByb3RvdHlwZSwgXCJmaXhlZFwiLCB2b2lkIDApO1xuTG9hZGluZyA9IF9fZGVjb3JhdGUoW1xuICAgIENvbXBvbmVudFxuXSwgTG9hZGluZyk7XG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9wLCBWdWUgfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xubGV0IFRvcEJhciA9IGNsYXNzIFRvcEJhciBleHRlbmRzIFZ1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucyA9IFtdO1xuICAgIH1cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uczogW10sXG4gICAgICAgIH07XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBTdHJpbmcgfSlcbl0sIFRvcEJhci5wcm90b3R5cGUsIFwicGFnZW5hbWVcIiwgdm9pZCAwKTtcblRvcEJhciA9IF9fZGVjb3JhdGUoW1xuICAgIENvbXBvbmVudCh7XG4gICAgICAgIGNvbXBvbmVudHM6IHt9XG4gICAgfSlcbl0sIFRvcEJhcik7XG5leHBvcnQgZGVmYXVsdCBUb3BCYXI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwicGFnZS13cmFwcGVyXCIgfSB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJvZmYtY2FudmFzIHBvc2l0aW9uLWxlZnRcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBpZDogXCJkcmF3ZXJcIixcbiAgICAgICAgICBcImRhdGEtb2ZmLWNhbnZhc1wiOiBcIlwiLFxuICAgICAgICAgIFwiZGF0YS10cmFuc2l0aW9uXCI6IFwib3ZlcmxhcFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbX2MoXCJMZWZ0TWVudVwiLCB7IGF0dHJzOiB7IGl0ZW1zOiBfdm0ubGVmdE1lbnVJdGVtcyB9IH0pXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJvZmYtY2FudmFzLWNvbnRlbnRcIixcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwiY29udGVudFwiLCBcImRhdGEtb2ZmLWNhbnZhcy1jb250ZW50XCI6IFwiXCIgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJUb3BCYXJcIiwgeyBhdHRyczogeyBwYWdlbmFtZTogX3ZtLnBhZ2VOYW1lIH0gfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiTG9hZGluZ1wiLCB7IGF0dHJzOiB7IGRpc3BsYXllZDogX3ZtLmxvYWRpbmcgfSB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJyb3V0ZXItdmlld1wiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9tKDApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZm9vdGVyXCIsIFtcbiAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvcHlyaWdodFwiIH0sIFtcbiAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFyIGZhLWNvcHlyaWdodFwiIH0pLFxuICAgICAgICBfdm0uX3YoXCIgQ29weXJpZ2h0IFBpZXJyZSBMRUpFVU5FLCB0b3VzIGRyb2l0cyByw6lzZXJ2w6lzLlxcbiAgICAgICAgICAgIFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzb2NpYWxcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdpdGxhYlwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGxhYi5jb20vcGllcnJlbGVqZXVuZS9kb3dubG9hZC1zZWFyY2hcIixcbiAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFiIGZhLWdpdGxhYlwiIH0pXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0d2l0dGVyXCIsXG4gICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vdHdpdHRlci5jb20vZGFya19jc2dvXCIsIHRhcmdldDogXCJfYmxhbmtcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFiIGZhLXR3aXR0ZXJcIiB9KV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlua2VkaW5cIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3BpZXJyZS1sZWpldW5lL1wiLFxuICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYWIgZmEtbGlua2VkaW4taW5cIiB9KV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzZWN0aW9uXCIsXG4gICAgW1xuICAgICAgX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcInNlY3Rpb24tdGl0bGVcIiB9LCBbX3ZtLl92KFwiQ29ubmV4aW9uXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgIV92bS5sb2FkaW5nXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25TdWJtaXRNZXRob2QoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLmVycm9yICE9PSBcIlwiXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhbGxvdXQgYWxlcnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmxvZ2luLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxvZ2luXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJJZGVudGlmaWFudFwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5sb2dpbiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS5sb2dpbiA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiLCBwbGFjZWhvbGRlcjogXCJNb3QgZGUgcGFzc2VcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gc3VjY2VzcyBleHBhbmRlZFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvZ2luLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZC5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkNvbm5leGlvblwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubG9hZGluZyA/IF9jKFwiTG9hZGluZ1wiLCB7IGF0dHJzOiB7IGZpeGVkOiBmYWxzZSB9IH0pIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZHJhd2VyLWhlYWRlclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnVzZXIgIT09IG51bGwgJiYgIV92bS5sb2FkaW5nXG4gICAgICAgICAgICA/IF9jKFwiYVwiLCB7IG9uOiB7IGNsaWNrOiBfdm0ubG9nb3V0IH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1zaWduLW91dC1hbHQgbGluay1pY29uXCIgfSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS51c2VyICE9PSBudWxsICYmICFfdm0ubG9hZGluZ1xuICAgICAgICAgID8gW1xuICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXNlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImF2YXRhclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9hc3NldHMvYXZhdGFyLmpwZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ6IF92bS51c2VyLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcInVzZXIudXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBzZXVkb1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlci51c2VybmFtZSkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtYWlsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLmVtYWlsKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICA6ICFfdm0ubG9hZGluZ1xuICAgICAgICAgID8gX2MoXCJMb2dpblwiLCB7XG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS51c2VyID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5sb2FkaW5nID8gX2MoXCJMb2FkaW5nXCIsIHsgYXR0cnM6IHsgZml4ZWQ6IGZhbHNlIH0gfSkgOiBfdm0uX2UoKVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcInVsXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lbnUgdmVydGljYWwgYWNjb3JkaW9uLW1lbnVcIixcbiAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWFjY29yZGlvbi1tZW51XCI6IFwiXCIgfVxuICAgICAgfSxcbiAgICAgIF92bS5fbChfdm0uaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBpdGVtLmNoaWxkcmVuID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IGl0ZW0ubmFtZSB9LCBleGFjdDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmljb24gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImlcIiwgeyBjbGFzczogX3ZtLmdldEljb25DbGFzc2VzKGl0ZW0uaWNvbikgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0ubGFiZWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubGFiZWwpKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidmVydGljYWwgbWVudSBuZXN0ZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woaXRlbS5jaGlsZHJlbiwgZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IGNoaWxkLm5hbWUgfSwgZXhhY3Q6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmljb24gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldEljb25DbGFzc2VzKGNoaWxkLmljb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsaW5rLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGNoaWxkLmxhYmVsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIH0pLFxuICAgICAgMFxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiYVwiLCB7IGF0dHJzOiB7IFwiZGF0YS1jbG9zZVwiOiBcIlwiIH0gfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXRpbWVzIGxpbmstaWNvblwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbWFnZVwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9hc3NldHMvbGVmdG1lbnUtaGVhZGVyLWJhY2tncm91bmQuanBnXCIpLFxuICAgICAgICAgIGFsdDogXCJCYW5uZXIgcHJvZmlsIGltYWdlXCJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmRpc3BsYXllZFxuICAgID8gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczogeyBhY3RpdmU6IF92bS5kaXNwbGF5ZWQsIGZpeGVkOiBfdm0uZml4ZWQgfSxcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJsb2FkaW5nXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl9tKDApXVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3Bpbm5lclwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXNwaW4gZmEtc3Bpbm5lclwiIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wLWJhclwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvcC1iYXItbGVmdFwiIH0sIFtcbiAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJtZW51XCIgfSwgW1xuICAgICAgICBfdm0uX20oMCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5wYWdlbmFtZSAhPT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1lbnUtdGV4dFwiLCBhdHRyczogeyBpZDogXCJwYWdlLW5hbWVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucGFnZW5hbWUpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImxpXCIsIFtcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IFwiZGF0YS10b2dnbGVcIjogXCJkcmF3ZXJcIiB9IH0sIFtcbiAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtYmFyc1wiIH0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==