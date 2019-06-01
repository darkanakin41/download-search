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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Fzc2V0cy9hdmF0YXIuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hc3NldHMvbGVmdG1lbnUtaGVhZGVyLWJhY2tncm91bmQuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9BcHAudnVlPzVhOWMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0FwcC52dWU/NGE2MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQXBwLnZ1ZT9lNWEyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9BcHAudnVlP2U0NmYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0FQSS9TZWN1cml0eUFQSS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0VudGl0eS9Vc2VyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvU2VjdXJpdHkvTG9naW4udnVlPzJmYWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9TZWN1cml0eS9Mb2dpbi52dWU/Y2U0YyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL1NlY3VyaXR5L0xvZ2luLnZ1ZT9lN2QxIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvU2VjdXJpdHkvTG9naW4udnVlPzU4YjIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTGVmdE1lbnUudnVlP2RkNDEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTGVmdE1lbnUudnVlP2VhZTQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTGVmdE1lbnUudnVlP2Q2ZTAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTGVmdE1lbnUudnVlP2E2NDQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTG9hZGluZy52dWU/NGQ5MyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Mb2FkaW5nLnZ1ZT9kNTI4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL0xvYWRpbmcudnVlPzhmMzIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTG9hZGluZy52dWU/MDQyMiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Ub3BCYXIudnVlP2Y1YWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svVG9wQmFyLnZ1ZT9iNmI3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RvcEJhci52dWU/MjVhMiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Ub3BCYXIudnVlP2EwZjgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU2Vzc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29uZmlnL2xlZnRtZW51LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb25maWcvcm91dGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL0l0ZW0vcm91dGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL01lZGlhL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZS9TZWN1cml0eS9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3Mvc2VsZWN0Mi5mb3VuZGF0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9TZWN1cml0eS9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTGVmdE1lbnUudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL0xvYWRpbmcudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RvcEJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0FwcC52dWU/ZDI1NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL1NlY3VyaXR5L0xvZ2luLnZ1ZT83YzYzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL0xlZnRNZW51LnZ1ZT9hNmYzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL0xvYWRpbmcudnVlP2YxMmUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svVG9wQmFyLnZ1ZT9mNjQ2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9BcHAudnVlP2EyMDAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9TZWN1cml0eS9Mb2dpbi52dWU/MGY4YSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9MZWZ0TWVudS52dWU/MWZkZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Mb2FkaW5nLnZ1ZT83MmY0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RvcEJhci52dWU/NGQ2YyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiYXBwIiwiVnVlIiwiZWwiLCJwcm9wcyIsImNvbXBvbmVudHMiLCJBcHAiLCJ0ZW1wbGF0ZSIsInJvdXRlciIsInRpdGxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlubmVySFRNTCIsImJlZm9yZUVhY2giLCJ0byIsImZyb20iLCJuZXh0IiwibG9hZGluZyIsIndpbmRvdyIsInNjcm9sbCIsImFmdGVyRWFjaCIsIiQiLCJmaW5kIiwidHJpZ2dlciIsIlNlY3VyaXR5QVBJIiwibG9naW4iLCJwYXNzd29yZCIsImNhbGxiYWNrIiwiY2FsbGJhY2tFcnJvciIsIlNlc3Npb24iLCJnZXRPYmplY3QiLCJheGlvcyIsInBvc3QiLCJ1c2VybmFtZSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlcnJvciIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJpdGVtIiwiY29udmVydCIsInNldE9iamVjdCIsImNhdGNoIiwiVXNlciIsImlkIiwiZmlyc3ROYW1lIiwiZmlyc3RuYW1lIiwibGFzdE5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwicm9sZXMiLCJyb2xlIiwiaW5kZXhPZiIsImtleSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInZhbHVlIiwic2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImNsZWFyIiwiY3JlYXRlTWVudSIsInJvdXRlcyIsIm91dHB1dCIsImZvckVhY2giLCJtZXRhIiwibGVmdE1lbnUiLCJwdXNoIiwibmFtZSIsImxhYmVsIiwiaWNvbiIsImNoaWxkcmVuIiwiaXRlbVJvdXRlcyIsIm1lZGlhUm91dGVzIiwidXNlIiwiVnVlUm91dGVyIiwiYmFzZVJvdXRlcyIsInBhZ2VUaXRsZSIsInBhdGgiLCJjb21wb25lbnQiLCJjb25jYXQiLCJzZWN1cml0eVJvdXRlcyIsInJlZGlyZWN0IiwibW9kZSIsImJhc2UiLCJwcm9jZXNzIiwiUk9VVEVSX0JBU0UiLCJsaW5rQWN0aXZlQ2xhc3MiLCJsaW5rRXhhY3RBY3RpdmVDbGFzcyIsIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0IiwiZGVzYyIsImMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZCIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsImxlZnRNZW51SXRlbXMiLCJsZWZ0bWVudUl0ZW1zIiwicGFnZU5hbWUiLCJmb3VuZGF0aW9uIiwiY3VycmVudFJvdXRlIiwiJHJvdXRlIiwiUHJvcCIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsInByb3RvdHlwZSIsIlN0cmluZyIsIldhdGNoIiwiQ29tcG9uZW50IiwiTGVmdE1lbnUiLCJMb2FkaW5nIiwiVG9wQmFyIiwiTG9naW4iLCJ1c2VyIiwiJGVtaXQiLCIkcm91dGVyIiwibWVzc2FnZSIsImxvZ291dCIsIkFycmF5Iiwibm90aWZpY2F0aW9ucyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaURBQXlDLG9JQUFvSTtBQUM3Szs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsNEJBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLCtCQUF1QixvSUFBb0k7QUFDM0o7QUFDQTtBQUNBLDJCQUFtQiw2QkFBNkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUFtQiw4QkFBOEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBLGFBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBLHlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUF3QixrQ0FBa0M7QUFDMUQsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBLGtEQUEwQyxvQkFBb0IsV0FBVzs7QUFFekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbFFBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThGO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUd4RjtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSx5RUFBTTtBQUNSLEVBQUUsMEZBQU07QUFDUixFQUFFLG1HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUE2TixDQUFnQix1UkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FqUDtBQUFBO0FBQUE7QUFBQTtBQUErYSxDQUFnQixvZEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FuYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FBLG1CQUFPLENBQUMsOEVBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxnREFBRCxDQUFQOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUMsR0FBRyxHQUFHLElBQUlDLDJDQUFKLENBQVE7QUFDaEJDLElBQUUsRUFBRSxNQURZO0FBRWhCQyxPQUFLLEVBQUUsQ0FBQyxTQUFELEVBQVksT0FBWixDQUZTO0FBR2hCQyxZQUFVLEVBQUU7QUFBRUMsT0FBRyxFQUFIQSxnREFBR0E7QUFBTCxHQUhJO0FBSWhCQyxVQUFRLEVBQUUsK0NBSk07QUFLaEJDLFFBQU0sRUFBTkEsc0RBQU1BO0FBTFUsQ0FBUixDQUFaO0FBT0FQLEdBQUcsQ0FBQ1EsS0FBSixHQUFZQyxRQUFRLENBQUNDLG9CQUFULENBQThCLE9BQTlCLEVBQXVDLENBQXZDLEVBQTBDQyxTQUF0RDtBQUNBSixzREFBTSxDQUFDSyxVQUFQLENBQWtCLFVBQUNDLEVBQUQsRUFBS0MsSUFBTCxFQUFXQyxJQUFYLEVBQW9CO0FBQ2xDZixLQUFHLENBQUNnQixPQUFKLEdBQWMsSUFBZDtBQUNBQyxRQUFNLENBQUNDLE1BQVAsQ0FBYyxDQUFkLEVBQWlCLENBQWpCO0FBQ0FILE1BQUk7QUFDUCxDQUpEO0FBS0FSLHNEQUFNLENBQUNZLFNBQVAsQ0FBaUIsVUFBQ04sRUFBRCxFQUFLQyxJQUFMLEVBQWM7QUFDM0JkLEtBQUcsQ0FBQ2dCLE9BQUosR0FBYyxLQUFkO0FBQ0FJLCtDQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLElBQWIsQ0FBa0IsZUFBbEIsRUFBbUNDLE9BQW5DLENBQTJDLE9BQTNDO0FBQ0gsQ0FIRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBOztJQUNxQkMsVzs7Ozs7Ozs7OztBQUNqQjs7Ozs7OzswQkFPYUMsTSxFQUFPQyxRLEVBQVVDLFEsRUFBVUMsYSxFQUFlO0FBQ25ELFVBQUlDLDJEQUFPLENBQUNDLFNBQVIsQ0FBa0IsTUFBbEIsTUFBOEIsSUFBbEMsRUFBd0M7QUFDcEMsZUFBT0gsUUFBUSxDQUFDRSwyREFBTyxDQUFDQyxTQUFSLENBQWtCLE1BQWxCLENBQUQsQ0FBZjtBQUNIOztBQUNEQyxrREFBSyxDQUFDQyxJQUFOLENBQVcscUJBQVgsRUFBa0M7QUFDOUJDLGdCQUFRLEVBQUVSLE1BRG9CO0FBRTlCQyxnQkFBUSxFQUFFQTtBQUZvQixPQUFsQyxFQUlLUSxJQUpMLENBSVUsVUFBQ0MsUUFBRCxFQUFjO0FBQ3BCLFlBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxLQUFrQixFQUF0QixFQUEwQjtBQUN0QlIsdUJBQWEsQ0FBQyxtQ0FBRCxDQUFiO0FBQ0E7QUFDSDs7QUFDRCxZQUFJTyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxLQUF3QkMsU0FBNUIsRUFBdUM7QUFDbkNWLHVCQUFhLENBQUNPLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFmLENBQWI7QUFDQTtBQUNIOztBQUNERSxlQUFPLENBQUNDLEdBQVIsQ0FBWUwsUUFBUSxDQUFDQyxJQUFyQjtBQUNBLFlBQUlLLElBQUksR0FBR2pCLFdBQVcsQ0FBQ2tCLE9BQVosQ0FBb0JQLFFBQVEsQ0FBQ0MsSUFBN0IsQ0FBWDtBQUNBUCxtRUFBTyxDQUFDYyxTQUFSLENBQWtCLE1BQWxCLEVBQTBCRixJQUExQjtBQUNBZCxnQkFBUSxDQUFDYyxJQUFELENBQVI7QUFDSCxPQWpCRCxFQWlCR0csS0FqQkgsQ0FpQlMsWUFBTTtBQUNYaEIscUJBQWEsQ0FBQyx1REFBRCxDQUFiO0FBQ0gsT0FuQkQ7QUFvQkg7QUFDRDs7Ozs7Ozs7NkJBS29DO0FBQUEsVUFBdEJELFFBQXNCLHVFQUFYLFlBQU0sQ0FBRyxDQUFFOztBQUNoQyxVQUFJRSwyREFBTyxDQUFDQyxTQUFSLENBQWtCLE1BQWxCLE1BQThCLElBQWxDLEVBQXdDO0FBQ3BDLGVBQU9ILFFBQVEsRUFBZjtBQUNIOztBQUNESSxrREFBSyxDQUFDQyxJQUFOLENBQVcsc0JBQVgsRUFDS0UsSUFETCxDQUNVLFlBQU07QUFDWlAsZ0JBQVE7QUFDWCxPQUhEO0FBSUg7QUFDRDs7Ozs7Ozs7Ozs0QkFPZVMsSSxFQUFNO0FBQ2pCLGFBQU8sSUFBSVMsb0RBQUosQ0FBU1QsSUFBVCxDQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDM0RnQlMsSTs7O0FBQ2pCLGdCQUFZVCxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsU0FBS1UsRUFBTCxHQUFVVixJQUFJLENBQUNVLEVBQWY7QUFDQSxTQUFLYixRQUFMLEdBQWdCRyxJQUFJLENBQUNILFFBQXJCO0FBQ0EsU0FBS2MsU0FBTCxHQUFpQlgsSUFBSSxDQUFDWSxTQUF0QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JiLElBQUksQ0FBQ2MsUUFBckI7QUFDQSxTQUFLQyxLQUFMLEdBQWFmLElBQUksQ0FBQ2UsS0FBbEI7QUFDQSxTQUFLQyxLQUFMLEdBQWFoQixJQUFJLENBQUNnQixLQUFsQjtBQUNIOzs7OzhCQUNTQyxJLEVBQU07QUFDWixhQUFPLEtBQUtELEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkQsSUFBbkIsTUFBNkIsQ0FBQyxDQUFyQztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFpUCxDQUFnQix5UkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyUTtBQUFBO0FBQUE7QUFBQTtBQUFxZCxDQUFnQixzZEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F6ZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1HO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUc3RjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsK0ZBQU07QUFDUixFQUFFLHdHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFvUCxDQUFnQiw0UkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F4UTtBQUFBO0FBQUE7QUFBQTtBQUF3ZCxDQUFnQix5ZEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E1ZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUc1RjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsOEZBQU07QUFDUixFQUFFLHVHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFtUCxDQUFnQiwyUkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F2UTtBQUFBO0FBQUE7QUFBQTtBQUF1ZCxDQUFnQix3ZEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EzZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUczRjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsNkZBQU07QUFDUixFQUFFLHNHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFrUCxDQUFnQiwwUkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F0UTtBQUFBO0FBQUE7QUFBQTtBQUFzZCxDQUFnQix1ZEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0ExZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FxQnhCLE87Ozs7Ozs7Ozt3QkFDTjBCLEcsRUFBSztBQUNaLFVBQUlDLGNBQWMsQ0FBQ0MsT0FBZixDQUF1QkYsR0FBdkIsQ0FBSixFQUFpQztBQUM3QixlQUFPQyxjQUFjLENBQUNDLE9BQWYsQ0FBdUJGLEdBQXZCLENBQVA7QUFDSDs7QUFDRCxhQUFPLElBQVA7QUFDSDs7O3dCQUNVQSxHLEVBQUtHLEssRUFBTztBQUNuQkYsb0JBQWMsQ0FBQ0csT0FBZixDQUF1QkosR0FBdkIsRUFBNEJHLEtBQTVCO0FBQ0EsYUFBT0EsS0FBUDtBQUNIOzs7OEJBQ2dCSCxHLEVBQUs7QUFDbEIsVUFBSUMsY0FBYyxDQUFDQyxPQUFmLENBQXVCRixHQUF2QixNQUFnQyxJQUFwQyxFQUEwQztBQUN0QyxlQUFPSyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsY0FBYyxDQUFDQyxPQUFmLENBQXVCRixHQUF2QixDQUFYLENBQVA7QUFDSDs7QUFDRCxhQUFPLElBQVA7QUFDSDs7OzhCQUNnQkEsRyxFQUFLRyxLLEVBQU87QUFDekJGLG9CQUFjLENBQUNHLE9BQWYsQ0FBdUJKLEdBQXZCLEVBQTRCSyxJQUFJLENBQUNFLFNBQUwsQ0FBZUosS0FBZixDQUE1QjtBQUNBLGFBQU9BLEtBQVA7QUFDSDs7OzhCQUNnQjtBQUNiRixvQkFBYyxDQUFDTyxLQUFmO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCTDtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUNBLFNBQVNDLFVBQVQsQ0FBb0JDLE1BQXBCLEVBQTRCO0FBQ3hCLE1BQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0FELFFBQU0sQ0FBQ0UsT0FBUCxDQUFlLFVBQUExQixJQUFJLEVBQUk7QUFDbkIsUUFBSSxDQUFDQSxJQUFJLENBQUMyQixJQUFMLENBQVVDLFFBQWYsRUFBeUI7QUFDckI7QUFDSDs7QUFDREgsVUFBTSxDQUFDSSxJQUFQLENBQVk7QUFDUkMsVUFBSSxFQUFFOUIsSUFBSSxDQUFDOEIsSUFESDtBQUVSQyxXQUFLLEVBQUUvQixJQUFJLENBQUMyQixJQUFMLENBQVUzRCxLQUZUO0FBR1JnRSxVQUFJLEVBQUVoQyxJQUFJLENBQUMyQixJQUFMLENBQVVLO0FBSFIsS0FBWjtBQUtILEdBVEQ7QUFVQSxTQUFPUCxNQUFQO0FBQ0g7O0FBQ0QsSUFBSUQsTUFBTSxHQUFHLENBQ1Q7QUFDSU8sT0FBSyxFQUFFLFNBRFg7QUFFSUQsTUFBSSxFQUFFLE1BRlY7QUFHSUUsTUFBSSxFQUFFO0FBSFYsQ0FEUyxFQU1UO0FBQ0lELE9BQUssRUFBRSxPQURYO0FBRUlFLFVBQVEsRUFBRVYsVUFBVSxDQUFDVyx5REFBRDtBQUZ4QixDQU5TLEVBVVQ7QUFDSUgsT0FBSyxFQUFFLE9BRFg7QUFFSUUsVUFBUSxFQUFFVixVQUFVLENBQUNZLDBEQUFEO0FBRnhCLENBVlMsQ0FBYjtBQWVlWCxxRUFBZixFOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBL0QsMkNBQUcsQ0FBQzJFLEdBQUosQ0FBUUMsa0RBQVI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsQ0FDZjtBQUNJUixNQUFJLEVBQUUsTUFEVjtBQUVJSCxNQUFJLEVBQUU7QUFDRjNELFNBQUssRUFBRSxTQURMO0FBRUZ1RSxhQUFTLEVBQUU7QUFGVCxHQUZWO0FBTUlDLE1BQUksRUFBRSxHQU5WO0FBT0lDLFdBQVMsRUFBRSxxQkFBTTtBQUNiLFdBQU8sMk9BQVA7QUFDSDtBQVRMLENBRGUsQ0FBbkI7QUFhQSxJQUFNakIsTUFBTSxHQUFHYyxVQUFVLENBQUNJLE1BQVgsQ0FBa0JSLHlEQUFsQixFQUE4QkMsMERBQTlCLEVBQTJDUSw2REFBM0MsRUFBMkQsQ0FBQztBQUNuRUgsTUFBSSxFQUFFLEdBRDZEO0FBRW5FSSxVQUFRLEVBQUU7QUFGeUQsQ0FBRCxDQUEzRCxDQUFmO0FBSUEsSUFBTTdFLE1BQU0sR0FBRyxJQUFJc0Usa0RBQUosQ0FBYztBQUN6QlEsTUFBSSxFQUFFLFNBRG1CO0FBRXpCQyxNQUFJLEVBQUVDLGtDQUFBLENBQVlDLFdBRk87QUFHekJDLGlCQUFlLEVBQUUsRUFIUTtBQUl6QkMsc0JBQW9CLEVBQUUsUUFKRztBQUt6QjFCLFFBQU0sRUFBRUE7QUFMaUIsQ0FBZCxDQUFmO0FBT2V6RCxxRUFBZixFOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQSxJQUFNbUUsVUFBVSxHQUFHLENBQ2Y7QUFDSUosTUFBSSxFQUFFLGFBRFY7QUFFSUgsTUFBSSxFQUFFO0FBQ0YzRCxTQUFLLEVBQUUsV0FETDtBQUVGdUUsYUFBUyxFQUFFLElBRlQ7QUFHRlgsWUFBUSxFQUFFLElBSFI7QUFJRkksUUFBSSxFQUFFO0FBSkosR0FGVjtBQVFJUSxNQUFJLEVBQUUsY0FSVjtBQVNJQyxXQUFTLEVBQUUscUJBQU07QUFDYixXQUFPLDhPQUFQO0FBQ0g7QUFYTCxDQURlLEVBY2Y7QUFDSVgsTUFBSSxFQUFFLFdBRFY7QUFFSUgsTUFBSSxFQUFFO0FBQ0ZZLGFBQVMsRUFBRSxLQURUO0FBRUZYLFlBQVEsRUFBRTtBQUZSLEdBRlY7QUFNSVksTUFBSSxFQUFFLGlCQU5WO0FBT0lDLFdBQVMsRUFBRSxxQkFBTTtBQUNiLFdBQU8sME9BQVA7QUFDSDtBQVRMLENBZGUsQ0FBbkI7QUEwQmVQLHlFQUFmLEU7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBLElBQU1DLFdBQVcsR0FBRyxDQUNoQjtBQUNJTCxNQUFJLEVBQUUsYUFEVjtBQUVJSCxNQUFJLEVBQUU7QUFDRjNELFNBQUssRUFBRSxrQkFETDtBQUVGdUUsYUFBUyxFQUFFLElBRlQ7QUFHRlgsWUFBUSxFQUFFLElBSFI7QUFJRkksUUFBSSxFQUFFO0FBSkosR0FGVjtBQVFJUSxNQUFJLEVBQUUsY0FSVjtBQVNJQyxXQUFTLEVBQUUscUJBQU07QUFDYixXQUFPLG9SQUFQO0FBQ0g7QUFYTCxDQURnQixFQWNoQjtBQUNJWCxNQUFJLEVBQUUsWUFEVjtBQUVJSCxNQUFJLEVBQUU7QUFDRlksYUFBUyxFQUFFLEtBRFQ7QUFFRlgsWUFBUSxFQUFFO0FBRlIsR0FGVjtBQU1JWSxNQUFJLEVBQUUsa0JBTlY7QUFPSUMsV0FBUyxFQUFFLHFCQUFNO0FBQ2IsV0FBTyxrUkFBUDtBQUNIO0FBVEwsQ0FkZ0IsQ0FBcEI7QUEwQmVOLDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBLElBQU1RLGNBQWMsR0FBRyxFQUF2QjtBQUNlQSw2RUFBZixFOzs7Ozs7Ozs7OztBQ0RBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQUlRLFVBQVUsR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxVQUFkLElBQTZCLFVBQVVDLFVBQVYsRUFBc0JDLE1BQXRCLEVBQThCdkMsR0FBOUIsRUFBbUN3QyxJQUFuQyxFQUF5QztBQUNuRixNQUFJQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBbEI7QUFBQSxNQUEwQkMsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBSixHQUFRRixNQUFSLEdBQWlCQyxJQUFJLEtBQUssSUFBVCxHQUFnQkEsSUFBSSxHQUFHSyxNQUFNLENBQUNDLHdCQUFQLENBQWdDUCxNQUFoQyxFQUF3Q3ZDLEdBQXhDLENBQXZCLEdBQXNFd0MsSUFBckg7QUFBQSxNQUEySE8sQ0FBM0g7QUFDQSxNQUFJLFFBQU9DLE9BQVAseUNBQU9BLE9BQVAsT0FBbUIsUUFBbkIsSUFBK0IsT0FBT0EsT0FBTyxDQUFDQyxRQUFmLEtBQTRCLFVBQS9ELEVBQTJFTCxDQUFDLEdBQUdJLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQlgsVUFBakIsRUFBNkJDLE1BQTdCLEVBQXFDdkMsR0FBckMsRUFBMEN3QyxJQUExQyxDQUFKLENBQTNFLEtBQ0ssS0FBSyxJQUFJVSxDQUFDLEdBQUdaLFVBQVUsQ0FBQ0ssTUFBWCxHQUFvQixDQUFqQyxFQUFvQ08sQ0FBQyxJQUFJLENBQXpDLEVBQTRDQSxDQUFDLEVBQTdDO0FBQWlELFFBQUlILENBQUMsR0FBR1QsVUFBVSxDQUFDWSxDQUFELENBQWxCLEVBQXVCTixDQUFDLEdBQUcsQ0FBQ0gsQ0FBQyxHQUFHLENBQUosR0FBUU0sQ0FBQyxDQUFDSCxDQUFELENBQVQsR0FBZUgsQ0FBQyxHQUFHLENBQUosR0FBUU0sQ0FBQyxDQUFDUixNQUFELEVBQVN2QyxHQUFULEVBQWM0QyxDQUFkLENBQVQsR0FBNEJHLENBQUMsQ0FBQ1IsTUFBRCxFQUFTdkMsR0FBVCxDQUE3QyxLQUErRDRDLENBQW5FO0FBQXhFO0FBQ0wsU0FBT0gsQ0FBQyxHQUFHLENBQUosSUFBU0csQ0FBVCxJQUFjQyxNQUFNLENBQUNNLGNBQVAsQ0FBc0JaLE1BQXRCLEVBQThCdkMsR0FBOUIsRUFBbUM0QyxDQUFuQyxDQUFkLEVBQXFEQSxDQUE1RDtBQUNILENBTEQ7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQUk3RixHQUFHO0FBQUE7QUFBQTtBQUFBOztBQUNILGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsOEVBQVMyRixTQUFUO0FBQ0EsVUFBS1UsYUFBTCxHQUFxQkMsd0RBQXJCO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUhVO0FBSWI7O0FBTEU7QUFBQTtBQUFBLDhCQU1PO0FBQ054RixtREFBQyxDQUFDWCxRQUFELENBQUQsQ0FBWW9HLFVBQVo7QUFDSDtBQVJFO0FBQUE7QUFBQSxvQ0FTYTtBQUNaLFVBQUlDLFlBQVksR0FBRyxLQUFLQyxNQUF4Qjs7QUFDQSxVQUFJRCxZQUFZLENBQUMzQyxJQUFiLENBQWtCM0QsS0FBdEIsRUFBNkI7QUFDekJDLGdCQUFRLENBQUNELEtBQVQsR0FBaUJzRyxZQUFZLENBQUMzQyxJQUFiLENBQWtCM0QsS0FBbEIsR0FBMEIsS0FBMUIsR0FBa0MsS0FBS0EsS0FBeEQ7O0FBQ0EsWUFBSXNHLFlBQVksQ0FBQzNDLElBQWIsQ0FBa0JZLFNBQWxCLEtBQWdDLElBQXBDLEVBQTBDO0FBQ3RDLGVBQUs2QixRQUFMLEdBQWdCRSxZQUFZLENBQUMzQyxJQUFiLENBQWtCM0QsS0FBbEM7QUFDSCxTQUZELE1BR0s7QUFDRCxlQUFLb0csUUFBTCxHQUFnQixFQUFoQjtBQUNIO0FBQ0osT0FSRCxNQVNLO0FBQ0RuRyxnQkFBUSxDQUFDRCxLQUFULEdBQWlCLEtBQUtBLEtBQXRCO0FBQ0EsYUFBS29HLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDtBQUNKO0FBeEJFOztBQUFBO0FBQUEsRUFBcUIzRywwREFBckIsQ0FBUDs7QUEwQkEwRixVQUFVLENBQUMsQ0FDUHFCLG1FQUFJLENBQUM7QUFBRUMsTUFBSSxFQUFFQyxPQUFSO0FBQWlCQyxTQUFPLEVBQUU7QUFBMUIsQ0FBRCxDQURHLENBQUQsRUFFUDlHLEdBQUcsQ0FBQytHLFNBRkcsRUFFUSxTQUZSLEVBRW1CLEtBQUssQ0FGeEIsQ0FBVjs7QUFHQXpCLFVBQVUsQ0FBQyxDQUNQcUIsbUVBQUksQ0FBQztBQUFFQyxNQUFJLEVBQUVJLE1BQVI7QUFBZ0JGLFNBQU8sRUFBRTtBQUF6QixDQUFELENBREcsQ0FBRCxFQUVQOUcsR0FBRyxDQUFDK0csU0FGRyxFQUVRLE9BRlIsRUFFaUIsS0FBSyxDQUZ0QixDQUFWOztBQUdBekIsVUFBVSxDQUFDLENBQ1AyQixvRUFBSyxDQUFDLFFBQUQsQ0FERSxDQUFELEVBRVBqSCxHQUFHLENBQUMrRyxTQUZHLEVBRVEsZUFGUixFQUV5QixJQUZ6QixDQUFWOztBQUdBL0csR0FBRyxHQUFHc0YsVUFBVSxDQUFDLENBQ2I0Qix3RUFBUyxDQUFDO0FBQ05uSCxZQUFVLEVBQUU7QUFBRW9ILFlBQVEsRUFBUkEsa0VBQUY7QUFBWUMsV0FBTyxFQUFQQSxxRUFBWjtBQUFxQkMsVUFBTSxFQUFOQSxnRUFBTUE7QUFBM0I7QUFETixDQUFELENBREksQ0FBRCxFQUlickgsR0FKYSxDQUFoQjtBQUtlQSxrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBLElBQUlzRixVQUFVLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsVUFBZCxJQUE2QixVQUFVQyxVQUFWLEVBQXNCQyxNQUF0QixFQUE4QnZDLEdBQTlCLEVBQW1Dd0MsSUFBbkMsRUFBeUM7QUFDbkYsTUFBSUMsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQWxCO0FBQUEsTUFBMEJDLENBQUMsR0FBR0gsQ0FBQyxHQUFHLENBQUosR0FBUUYsTUFBUixHQUFpQkMsSUFBSSxLQUFLLElBQVQsR0FBZ0JBLElBQUksR0FBR0ssTUFBTSxDQUFDQyx3QkFBUCxDQUFnQ1AsTUFBaEMsRUFBd0N2QyxHQUF4QyxDQUF2QixHQUFzRXdDLElBQXJIO0FBQUEsTUFBMkhPLENBQTNIO0FBQ0EsTUFBSSxRQUFPQyxPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQW5CLElBQStCLE9BQU9BLE9BQU8sQ0FBQ0MsUUFBZixLQUE0QixVQUEvRCxFQUEyRUwsQ0FBQyxHQUFHSSxPQUFPLENBQUNDLFFBQVIsQ0FBaUJYLFVBQWpCLEVBQTZCQyxNQUE3QixFQUFxQ3ZDLEdBQXJDLEVBQTBDd0MsSUFBMUMsQ0FBSixDQUEzRSxLQUNLLEtBQUssSUFBSVUsQ0FBQyxHQUFHWixVQUFVLENBQUNLLE1BQVgsR0FBb0IsQ0FBakMsRUFBb0NPLENBQUMsSUFBSSxDQUF6QyxFQUE0Q0EsQ0FBQyxFQUE3QztBQUFpRCxRQUFJSCxDQUFDLEdBQUdULFVBQVUsQ0FBQ1ksQ0FBRCxDQUFsQixFQUF1Qk4sQ0FBQyxHQUFHLENBQUNILENBQUMsR0FBRyxDQUFKLEdBQVFNLENBQUMsQ0FBQ0gsQ0FBRCxDQUFULEdBQWVILENBQUMsR0FBRyxDQUFKLEdBQVFNLENBQUMsQ0FBQ1IsTUFBRCxFQUFTdkMsR0FBVCxFQUFjNEMsQ0FBZCxDQUFULEdBQTRCRyxDQUFDLENBQUNSLE1BQUQsRUFBU3ZDLEdBQVQsQ0FBN0MsS0FBK0Q0QyxDQUFuRTtBQUF4RTtBQUNMLFNBQU9ILENBQUMsR0FBRyxDQUFKLElBQVNHLENBQVQsSUFBY0MsTUFBTSxDQUFDTSxjQUFQLENBQXNCWixNQUF0QixFQUE4QnZDLEdBQTlCLEVBQW1DNEMsQ0FBbkMsQ0FBZCxFQUFxREEsQ0FBNUQ7QUFDSCxDQUxEOztBQU1BO0FBQ0E7QUFDQTs7QUFDQSxJQUFJeUIsS0FBSztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDJCQUNFO0FBQ0gsYUFBTztBQUNIM0csZUFBTyxFQUFFLEtBRE47QUFFSFEsYUFBSyxFQUFFLEVBRko7QUFHSEMsZ0JBQVEsRUFBRSxFQUhQO0FBSUhtRyxZQUFJLEVBQUUsSUFKSDtBQUtIeEYsYUFBSyxFQUFFO0FBTEosT0FBUDtBQU9IO0FBVEk7QUFBQTtBQUFBLHFDQVVZO0FBQUE7O0FBQ2IsV0FBS3BCLE9BQUwsR0FBZSxJQUFmO0FBQ0FPLDhEQUFXLENBQUNDLEtBQVosQ0FBa0IsS0FBS0EsS0FBdkIsRUFBOEIsS0FBS0MsUUFBbkMsRUFBNkMsVUFBQ21HLElBQUQsRUFBVTtBQUNuRCxhQUFJLENBQUNDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CRCxJQUFwQjs7QUFDQSxhQUFJLENBQUM1RyxPQUFMLEdBQWUsS0FBZjs7QUFDQSxhQUFJLENBQUM4RyxPQUFMLENBQWF6RCxJQUFiLENBQWtCO0FBQUVDLGNBQUksRUFBRTtBQUFSLFNBQWxCO0FBQ0gsT0FKRCxFQUlHLFVBQUN5RCxPQUFELEVBQWE7QUFDWixhQUFJLENBQUMzRixLQUFMLEdBQWEyRixPQUFiO0FBQ0EsYUFBSSxDQUFDL0csT0FBTCxHQUFlLEtBQWY7QUFDSCxPQVBEO0FBUUg7QUFwQkk7O0FBQUE7QUFBQSxFQUF1QmYsMERBQXZCLENBQVQ7O0FBc0JBMEgsS0FBSyxHQUFHaEMsVUFBVSxDQUFDLENBQ2Y0Qix3RUFBUyxDQUFDO0FBQ05uSCxZQUFVLEVBQUU7QUFBRXFILFdBQU8sRUFBUEEscUVBQU9BO0FBQVQ7QUFETixDQUFELENBRE0sQ0FBRCxFQUlmRSxLQUplLENBQWxCO0FBS2VBLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0EsSUFBSWhDLFVBQVUsR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxVQUFkLElBQTZCLFVBQVVDLFVBQVYsRUFBc0JDLE1BQXRCLEVBQThCdkMsR0FBOUIsRUFBbUN3QyxJQUFuQyxFQUF5QztBQUNuRixNQUFJQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBbEI7QUFBQSxNQUEwQkMsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBSixHQUFRRixNQUFSLEdBQWlCQyxJQUFJLEtBQUssSUFBVCxHQUFnQkEsSUFBSSxHQUFHSyxNQUFNLENBQUNDLHdCQUFQLENBQWdDUCxNQUFoQyxFQUF3Q3ZDLEdBQXhDLENBQXZCLEdBQXNFd0MsSUFBckg7QUFBQSxNQUEySE8sQ0FBM0g7QUFDQSxNQUFJLFFBQU9DLE9BQVAseUNBQU9BLE9BQVAsT0FBbUIsUUFBbkIsSUFBK0IsT0FBT0EsT0FBTyxDQUFDQyxRQUFmLEtBQTRCLFVBQS9ELEVBQTJFTCxDQUFDLEdBQUdJLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQlgsVUFBakIsRUFBNkJDLE1BQTdCLEVBQXFDdkMsR0FBckMsRUFBMEN3QyxJQUExQyxDQUFKLENBQTNFLEtBQ0ssS0FBSyxJQUFJVSxDQUFDLEdBQUdaLFVBQVUsQ0FBQ0ssTUFBWCxHQUFvQixDQUFqQyxFQUFvQ08sQ0FBQyxJQUFJLENBQXpDLEVBQTRDQSxDQUFDLEVBQTdDO0FBQWlELFFBQUlILENBQUMsR0FBR1QsVUFBVSxDQUFDWSxDQUFELENBQWxCLEVBQXVCTixDQUFDLEdBQUcsQ0FBQ0gsQ0FBQyxHQUFHLENBQUosR0FBUU0sQ0FBQyxDQUFDSCxDQUFELENBQVQsR0FBZUgsQ0FBQyxHQUFHLENBQUosR0FBUU0sQ0FBQyxDQUFDUixNQUFELEVBQVN2QyxHQUFULEVBQWM0QyxDQUFkLENBQVQsR0FBNEJHLENBQUMsQ0FBQ1IsTUFBRCxFQUFTdkMsR0FBVCxDQUE3QyxLQUErRDRDLENBQW5FO0FBQXhFO0FBQ0wsU0FBT0gsQ0FBQyxHQUFHLENBQUosSUFBU0csQ0FBVCxJQUFjQyxNQUFNLENBQUNNLGNBQVAsQ0FBc0JaLE1BQXRCLEVBQThCdkMsR0FBOUIsRUFBbUM0QyxDQUFuQyxDQUFkLEVBQXFEQSxDQUE1RDtBQUNILENBTEQ7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FqRywwREFBRyxDQUFDMkUsR0FBSixDQUFRQyxrREFBUjs7QUFDQSxJQUFJMkMsUUFBUTtBQUFBO0FBQUE7QUFBQTs7QUFDUixzQkFBYztBQUFBOztBQUFBOztBQUNWLG1GQUFTeEIsU0FBVDtBQUNBLFVBQUs0QixJQUFMLEdBQVksSUFBWjtBQUZVO0FBR2I7O0FBSk87QUFBQTtBQUFBLDJCQUtEO0FBQ0gsYUFBTztBQUNINUcsZUFBTyxFQUFFLEtBRE47QUFFSDRHLFlBQUksRUFBRWhHLGdEQUFPLENBQUNDLFNBQVIsQ0FBa0IsTUFBbEI7QUFGSCxPQUFQO0FBSUg7QUFWTztBQUFBO0FBQUEsbUNBV08yQyxJQVhQLEVBV2E7QUFDakIsYUFBT0EsSUFBSSxHQUFHLFlBQWQ7QUFDSDtBQWJPO0FBQUE7QUFBQSw2QkFjQztBQUFBOztBQUNMLFVBQUk1QyxnREFBTyxDQUFDQyxTQUFSLENBQWtCLE1BQWxCLE1BQThCLElBQWxDLEVBQXdDO0FBQ3BDLGFBQUtiLE9BQUwsR0FBZSxJQUFmO0FBQ0FPLG9FQUFXLENBQUN5RyxNQUFaLENBQW1CLFlBQU07QUFDckIsZ0JBQUksQ0FBQ0osSUFBTCxHQUFZLElBQVo7QUFDQSxnQkFBSSxDQUFDNUcsT0FBTCxHQUFlLEtBQWY7QUFDSCxTQUhEO0FBSUg7QUFDSjtBQXRCTzs7QUFBQTtBQUFBLEVBQTBCZiwwREFBMUIsQ0FBWjs7QUF3QkEwRixVQUFVLENBQUMsQ0FDUHFCLG1FQUFJLENBQUM7QUFBRUMsTUFBSSxFQUFFZ0I7QUFBUixDQUFELENBREcsQ0FBRCxFQUVQVCxRQUFRLENBQUNKLFNBRkYsRUFFYSxPQUZiLEVBRXNCLEtBQUssQ0FGM0IsQ0FBVjs7QUFHQUksUUFBUSxHQUFHN0IsVUFBVSxDQUFDLENBQ2xCNEIsd0VBQVMsQ0FBQztBQUNObkgsWUFBVSxFQUFFO0FBQUVxSCxXQUFPLEVBQVBBLG9EQUFGO0FBQVdFLFNBQUssRUFBTEEsK0RBQUtBO0FBQWhCO0FBRE4sQ0FBRCxDQURTLENBQUQsRUFJbEJILFFBSmtCLENBQXJCO0FBS2VBLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0EsSUFBSTdCLFVBQVUsR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxVQUFkLElBQTZCLFVBQVVDLFVBQVYsRUFBc0JDLE1BQXRCLEVBQThCdkMsR0FBOUIsRUFBbUN3QyxJQUFuQyxFQUF5QztBQUNuRixNQUFJQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBbEI7QUFBQSxNQUEwQkMsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBSixHQUFRRixNQUFSLEdBQWlCQyxJQUFJLEtBQUssSUFBVCxHQUFnQkEsSUFBSSxHQUFHSyxNQUFNLENBQUNDLHdCQUFQLENBQWdDUCxNQUFoQyxFQUF3Q3ZDLEdBQXhDLENBQXZCLEdBQXNFd0MsSUFBckg7QUFBQSxNQUEySE8sQ0FBM0g7QUFDQSxNQUFJLFFBQU9DLE9BQVAseUNBQU9BLE9BQVAsT0FBbUIsUUFBbkIsSUFBK0IsT0FBT0EsT0FBTyxDQUFDQyxRQUFmLEtBQTRCLFVBQS9ELEVBQTJFTCxDQUFDLEdBQUdJLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQlgsVUFBakIsRUFBNkJDLE1BQTdCLEVBQXFDdkMsR0FBckMsRUFBMEN3QyxJQUExQyxDQUFKLENBQTNFLEtBQ0ssS0FBSyxJQUFJVSxDQUFDLEdBQUdaLFVBQVUsQ0FBQ0ssTUFBWCxHQUFvQixDQUFqQyxFQUFvQ08sQ0FBQyxJQUFJLENBQXpDLEVBQTRDQSxDQUFDLEVBQTdDO0FBQWlELFFBQUlILENBQUMsR0FBR1QsVUFBVSxDQUFDWSxDQUFELENBQWxCLEVBQXVCTixDQUFDLEdBQUcsQ0FBQ0gsQ0FBQyxHQUFHLENBQUosR0FBUU0sQ0FBQyxDQUFDSCxDQUFELENBQVQsR0FBZUgsQ0FBQyxHQUFHLENBQUosR0FBUU0sQ0FBQyxDQUFDUixNQUFELEVBQVN2QyxHQUFULEVBQWM0QyxDQUFkLENBQVQsR0FBNEJHLENBQUMsQ0FBQ1IsTUFBRCxFQUFTdkMsR0FBVCxDQUE3QyxLQUErRDRDLENBQW5FO0FBQXhFO0FBQ0wsU0FBT0gsQ0FBQyxHQUFHLENBQUosSUFBU0csQ0FBVCxJQUFjQyxNQUFNLENBQUNNLGNBQVAsQ0FBc0JaLE1BQXRCLEVBQThCdkMsR0FBOUIsRUFBbUM0QyxDQUFuQyxDQUFkLEVBQXFEQSxDQUE1RDtBQUNILENBTEQ7O0FBTUE7O0FBQ0EsSUFBSXVCLE9BQU87QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUEsRUFBeUJ4SCwwREFBekIsQ0FBWDs7QUFFQTBGLFVBQVUsQ0FBQyxDQUNQcUIsbUVBQUksQ0FBQztBQUFFQyxNQUFJLEVBQUVDLE9BQVI7QUFBaUJDLFNBQU8sRUFBRTtBQUExQixDQUFELENBREcsQ0FBRCxFQUVQTSxPQUFPLENBQUNMLFNBRkQsRUFFWSxXQUZaLEVBRXlCLEtBQUssQ0FGOUIsQ0FBVjs7QUFHQXpCLFVBQVUsQ0FBQyxDQUNQcUIsbUVBQUksQ0FBQztBQUFFQyxNQUFJLEVBQUVDLE9BQVI7QUFBaUJDLFNBQU8sRUFBRTtBQUExQixDQUFELENBREcsQ0FBRCxFQUVQTSxPQUFPLENBQUNMLFNBRkQsRUFFWSxPQUZaLEVBRXFCLEtBQUssQ0FGMUIsQ0FBVjs7QUFHQUssT0FBTyxHQUFHOUIsVUFBVSxDQUFDLENBQ2pCNEIsZ0VBRGlCLENBQUQsRUFFakJFLE9BRmlCLENBQXBCO0FBR2VBLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBLElBQUk5QixVQUFVLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsVUFBZCxJQUE2QixVQUFVQyxVQUFWLEVBQXNCQyxNQUF0QixFQUE4QnZDLEdBQTlCLEVBQW1Dd0MsSUFBbkMsRUFBeUM7QUFDbkYsTUFBSUMsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQWxCO0FBQUEsTUFBMEJDLENBQUMsR0FBR0gsQ0FBQyxHQUFHLENBQUosR0FBUUYsTUFBUixHQUFpQkMsSUFBSSxLQUFLLElBQVQsR0FBZ0JBLElBQUksR0FBR0ssTUFBTSxDQUFDQyx3QkFBUCxDQUFnQ1AsTUFBaEMsRUFBd0N2QyxHQUF4QyxDQUF2QixHQUFzRXdDLElBQXJIO0FBQUEsTUFBMkhPLENBQTNIO0FBQ0EsTUFBSSxRQUFPQyxPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQW5CLElBQStCLE9BQU9BLE9BQU8sQ0FBQ0MsUUFBZixLQUE0QixVQUEvRCxFQUEyRUwsQ0FBQyxHQUFHSSxPQUFPLENBQUNDLFFBQVIsQ0FBaUJYLFVBQWpCLEVBQTZCQyxNQUE3QixFQUFxQ3ZDLEdBQXJDLEVBQTBDd0MsSUFBMUMsQ0FBSixDQUEzRSxLQUNLLEtBQUssSUFBSVUsQ0FBQyxHQUFHWixVQUFVLENBQUNLLE1BQVgsR0FBb0IsQ0FBakMsRUFBb0NPLENBQUMsSUFBSSxDQUF6QyxFQUE0Q0EsQ0FBQyxFQUE3QztBQUFpRCxRQUFJSCxDQUFDLEdBQUdULFVBQVUsQ0FBQ1ksQ0FBRCxDQUFsQixFQUF1Qk4sQ0FBQyxHQUFHLENBQUNILENBQUMsR0FBRyxDQUFKLEdBQVFNLENBQUMsQ0FBQ0gsQ0FBRCxDQUFULEdBQWVILENBQUMsR0FBRyxDQUFKLEdBQVFNLENBQUMsQ0FBQ1IsTUFBRCxFQUFTdkMsR0FBVCxFQUFjNEMsQ0FBZCxDQUFULEdBQTRCRyxDQUFDLENBQUNSLE1BQUQsRUFBU3ZDLEdBQVQsQ0FBN0MsS0FBK0Q0QyxDQUFuRTtBQUF4RTtBQUNMLFNBQU9ILENBQUMsR0FBRyxDQUFKLElBQVNHLENBQVQsSUFBY0MsTUFBTSxDQUFDTSxjQUFQLENBQXNCWixNQUF0QixFQUE4QnZDLEdBQTlCLEVBQW1DNEMsQ0FBbkMsQ0FBZCxFQUFxREEsQ0FBNUQ7QUFDSCxDQUxEOztBQU1BOztBQUNBLElBQUl3QixNQUFNO0FBQUE7QUFBQTtBQUFBOztBQUNOLG9CQUFjO0FBQUE7O0FBQUE7O0FBQ1YsaUZBQVMxQixTQUFUO0FBQ0EsVUFBS2tDLGFBQUwsR0FBcUIsRUFBckI7QUFGVTtBQUdiOztBQUpLO0FBQUE7QUFBQSwyQkFLQztBQUNILGFBQU87QUFDSEEscUJBQWEsRUFBRTtBQURaLE9BQVA7QUFHSDtBQVRLOztBQUFBO0FBQUEsRUFBd0JqSSwwREFBeEIsQ0FBVjs7QUFXQTBGLFVBQVUsQ0FBQyxDQUNQcUIsbUVBQUksQ0FBQztBQUFFQyxNQUFJLEVBQUVJO0FBQVIsQ0FBRCxDQURHLENBQUQsRUFFUEssTUFBTSxDQUFDTixTQUZBLEVBRVcsVUFGWCxFQUV1QixLQUFLLENBRjVCLENBQVY7O0FBR0FNLE1BQU0sR0FBRy9CLFVBQVUsQ0FBQyxDQUNoQjRCLHdFQUFTLENBQUM7QUFDTm5ILFlBQVUsRUFBRTtBQUROLENBQUQsQ0FETyxDQUFELEVBSWhCc0gsTUFKZ0IsQ0FBbkI7QUFLZUEscUVBQWYsRTs7Ozs7Ozs7Ozs7QUMxQkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVMscUJBQXFCLEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHVCQUF1QixTQUFTLDJCQUEyQixFQUFFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUDtBQUNBLHNCQUFzQixTQUFTLHlCQUF5QixFQUFFO0FBQzFEO0FBQ0EsdUJBQXVCLFNBQVMseUJBQXlCLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyQkFBMkI7QUFDMUMsaUJBQWlCLGtDQUFrQztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsb0JBQW9CLCtCQUErQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsb0JBQW9CLG9DQUFvQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLCtCQUErQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSw2QkFBNkIsK0JBQStCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJDQUEyQztBQUNuRSwyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQWdEO0FBQ3hFLDJCQUEyQixzQkFBc0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxTQUFTLGVBQWUsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrQkFBK0I7QUFDdEM7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixNQUFNLG9CQUFvQixFQUFFO0FBQ25ELHlCQUF5QiwrQ0FBK0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzQkFBc0I7QUFDL0MsMkJBQTJCLHdCQUF3QjtBQUNuRDtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFPLENBQUMsOERBQTRCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsMkJBQTJCLG9CQUFvQjtBQUMvQyw4QkFBOEIsd0JBQXdCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixzQkFBc0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxxQ0FBcUMsU0FBUyxlQUFlLEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLE1BQU0sa0JBQWtCLGFBQWEsRUFBRTtBQUNyRTtBQUNBO0FBQ0EsbUNBQW1DLHVDQUF1QztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNDQUFzQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsU0FBUyxNQUFNLG1CQUFtQixhQUFhLEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTLG1CQUFtQixFQUFFO0FBQ2xELGVBQWUsd0NBQXdDO0FBQ3ZEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLHNHQUFnRDtBQUN2RTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBDQUEwQztBQUM1RCxrQkFBa0I7QUFDbEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix5QkFBeUI7QUFDL0MsZUFBZSx1Q0FBdUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QyxlQUFlLDhCQUE4QjtBQUM3QyxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUMsa0JBQWtCLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVMsMEJBQTBCLEVBQUU7QUFDcEQsaUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBDU1MgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ3NzQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHtcImhvbWV+aXRlbX5tZWRpYVwiOlwiaG9tZX5pdGVtfm1lZGlhXCIsXCJob21lfm1lZGlhXCI6XCJob21lfm1lZGlhXCIsXCJob21lXCI6XCJob21lXCIsXCJpdGVtfm1lZGlhXCI6XCJpdGVtfm1lZGlhXCIsXCJtZWRpYVwiOlwibWVkaWFcIixcIml0ZW1cIjpcIml0ZW1cIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4gQ1NTIGxvYWRpbmdcbiBcdFx0dmFyIGNzc0NodW5rcyA9IHtcImhvbWV+aXRlbX5tZWRpYVwiOjEsXCJob21lfm1lZGlhXCI6MSxcImhvbWVcIjoxLFwiaXRlbX5tZWRpYVwiOjEsXCJtZWRpYVwiOjEsXCJpdGVtXCI6MX07XG4gXHRcdGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSkgcHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pO1xuIFx0XHRlbHNlIGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSAhPT0gMCAmJiBjc3NDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0dmFyIGhyZWYgPSBcIlwiICsgKHtcImhvbWV+aXRlbX5tZWRpYVwiOlwiaG9tZX5pdGVtfm1lZGlhXCIsXCJob21lfm1lZGlhXCI6XCJob21lfm1lZGlhXCIsXCJob21lXCI6XCJob21lXCIsXCJpdGVtfm1lZGlhXCI6XCJpdGVtfm1lZGlhXCIsXCJtZWRpYVwiOlwibWVkaWFcIixcIml0ZW1cIjpcIml0ZW1cIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuY3NzXCI7XG4gXHRcdFx0XHR2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuIFx0XHRcdFx0dmFyIGV4aXN0aW5nTGlua1RhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XG4gXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdMaW5rVGFncy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgdGFnID0gZXhpc3RpbmdMaW5rVGFnc1tpXTtcbiBcdFx0XHRcdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKSB8fCB0YWcuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiBcdFx0XHRcdFx0aWYodGFnLnJlbCA9PT0gXCJzdHlsZXNoZWV0XCIgJiYgKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikpIHJldHVybiByZXNvbHZlKCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHR2YXIgZXhpc3RpbmdTdHlsZVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0eWxlXCIpO1xuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nU3R5bGVUYWdzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciB0YWcgPSBleGlzdGluZ1N0eWxlVGFnc1tpXTtcbiBcdFx0XHRcdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKTtcbiBcdFx0XHRcdFx0aWYoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSByZXR1cm4gcmVzb2x2ZSgpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0dmFyIGxpbmtUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiBcdFx0XHRcdGxpbmtUYWcucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gXHRcdFx0XHRsaW5rVGFnLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gXHRcdFx0XHRsaW5rVGFnLm9ubG9hZCA9IHJlc29sdmU7XG4gXHRcdFx0XHRsaW5rVGFnLm9uZXJyb3IgPSBmdW5jdGlvbihldmVudCkge1xuIFx0XHRcdFx0XHR2YXIgcmVxdWVzdCA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjIHx8IGZ1bGxocmVmO1xuIFx0XHRcdFx0XHR2YXIgZXJyID0gbmV3IEVycm9yKFwiTG9hZGluZyBDU1MgY2h1bmsgXCIgKyBjaHVua0lkICsgXCIgZmFpbGVkLlxcbihcIiArIHJlcXVlc3QgKyBcIilcIik7XG4gXHRcdFx0XHRcdGVyci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiBcdFx0XHRcdFx0cmVqZWN0KGVycik7XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0bGlua1RhZy5ocmVmID0gZnVsbGhyZWY7XG4gXHRcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcbiBcdFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQobGlua1RhZyk7XG4gXHRcdFx0fSkudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdFx0fSkpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknKTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hc3NldHMvanMvYXBwLnRzXCIsXCJ2ZW5kb3JzfmFwcFwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvYnVpbGQvaW1hZ2VzL2F2YXRhci4zMGY2NDYxMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2J1aWxkL2ltYWdlcy9sZWZ0bWVudS1oZWFkZXItYmFja2dyb3VuZC44MTNmZGQ4Zi5qcGdcIjsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjhmZTBiYWUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YjhmZTBiYWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJiOGZlMGJhZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9zcnYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2I4ZmUwYmFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2I4ZmUwYmFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI4ZmUwYmFlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2I4ZmUwYmFlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YjhmZTBiYWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iOGZlMGJhZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iOGZlMGJhZSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvZGlzdC9jc3MvZm91bmRhdGlvbi5taW4uY3NzJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9kaXN0L2pzL2ZvdW5kYXRpb24ubWluJztcbmltcG9ydCAnc2VsZWN0Mi9kaXN0L2Nzcy9zZWxlY3QyLm1pbi5jc3MnO1xuaW1wb3J0ICdzZWxlY3QyL2Rpc3QvanMvc2VsZWN0Mi5mdWxsLm1pbic7XG5pbXBvcnQgJ3NlbGVjdDIvZGlzdC9qcy9pMThuL2ZyJztcbnJlcXVpcmUoJy4uL3Njc3Mvc2VsZWN0Mi5mb3VuZGF0aW9uLnNjc3MnKTtcbnJlcXVpcmUoJy4uL3Njc3MvYXBwLnNjc3MnKTtcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJztcbmltcG9ydCByb3V0ZXIgZnJvbSBcIi4vY29uZmlnL3JvdXRlclwiO1xuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbiAgICBwcm9wczogWydsb2FkaW5nJywgJ3RpdGxlJ10sXG4gICAgY29tcG9uZW50czogeyBBcHAgfSxcbiAgICB0ZW1wbGF0ZTogJzxBcHAgOnRpdGxlPVwidGl0bGVcIiA6bG9hZGluZz1cImxvYWRpbmdcIj48L0FwcD4nLFxuICAgIHJvdXRlcixcbn0pO1xuYXBwLnRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aXRsZVwiKVswXS5pbm5lckhUTUw7XG5yb3V0ZXIuYmVmb3JlRWFjaCgodG8sIGZyb20sIG5leHQpID0+IHtcbiAgICBhcHAubG9hZGluZyA9IHRydWU7XG4gICAgd2luZG93LnNjcm9sbCgwLCAwKTtcbiAgICBuZXh0KCk7XG59KTtcbnJvdXRlci5hZnRlckVhY2goKHRvLCBmcm9tKSA9PiB7XG4gICAgYXBwLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAkKFwiI2RyYXdlclwiKS5maW5kKCdhW2RhdGEtY2xvc2VdJykudHJpZ2dlcignY2xpY2snKTtcbn0pO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBVc2VyIGZyb20gXCIuLi9FbnRpdHkvVXNlclwiO1xuaW1wb3J0IFNlc3Npb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2Vzc2lvblwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdXJpdHlBUEkge1xuICAgIC8qKlxuICAgICAqIExvZ2luIHRoZSB1c2VyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbG9naW5cbiAgICAgKiBAcGFyYW0gcGFzc3dvcmRcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGNvZGUgdG8gYmUgZXhlY3V0ZWQgb24gc3VjY2Vzc1xuICAgICAqL1xuICAgIHN0YXRpYyBsb2dpbihsb2dpbiwgcGFzc3dvcmQsIGNhbGxiYWNrLCBjYWxsYmFja0Vycm9yKSB7XG4gICAgICAgIGlmIChTZXNzaW9uLmdldE9iamVjdCgndXNlcicpICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soU2Vzc2lvbi5nZXRPYmplY3QoJ3VzZXInKSk7XG4gICAgICAgIH1cbiAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9zZWN1cml0eS9sb2dpbicsIHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBsb2dpbixcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgPT09IHt9KSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tFcnJvcihcIklkZW50aWZpYW50L01vdCBkZSBwYXNzZSBpbnZhbGlkZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tFcnJvcihyZXNwb25zZS5kYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIGxldCBpdGVtID0gU2VjdXJpdHlBUEkuY29udmVydChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIFNlc3Npb24uc2V0T2JqZWN0KCd1c2VyJywgaXRlbSk7XG4gICAgICAgICAgICBjYWxsYmFjayhpdGVtKTtcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2tFcnJvcihcIlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlIGR1cmFudCB2b3RyZSBhdXRoZW50aWZpY2F0aW9uXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9nb3V0IGN1cnJlbnQgdXNlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHRoZSBjb2RlIHRvIGJlIGV4ZWN1dGVkIG9uIHN1Y2Nlc3NcbiAgICAgKi9cbiAgICBzdGF0aWMgbG9nb3V0KGNhbGxiYWNrID0gKCkgPT4geyB9KSB7XG4gICAgICAgIGlmIChTZXNzaW9uLmdldE9iamVjdCgndXNlcicpID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3NlY3VyaXR5L2xvZ291dCcpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvY2VzcyBpbnB1dCBhcnJheSBhbmQgcmV0dXJuIHRoZSBsaXN0IG9mIG9iamVjdHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEl0ZW1cbiAgICAgKi9cbiAgICBzdGF0aWMgY29udmVydChkYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgVXNlcihkYXRhKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gZGF0YS51c2VybmFtZTtcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBkYXRhLmZpcnN0bmFtZTtcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGRhdGEubGFzdG5hbWU7XG4gICAgICAgIHRoaXMuZW1haWwgPSBkYXRhLmVtYWlsO1xuICAgICAgICB0aGlzLnJvbGVzID0gZGF0YS5yb2xlcztcbiAgICB9XG4gICAgaXNHcmFudGVkKHJvbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9sZXMuaW5kZXhPZihyb2xlKSAhPT0gLTE7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWUwY2NmZTAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWUwY2NmZTAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5ZTBjY2ZlMFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9zcnYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzllMGNjZmUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzllMGNjZmUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWUwY2NmZTAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOWUwY2NmZTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9hcHAvU2VjdXJpdHkvTG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05ZTBjY2ZlMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWUwY2NmZTAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ZTBjY2ZlMCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTGVmdE1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYwODg1NWM5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xlZnRNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTGVmdE1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0xlZnRNZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYwODg1NWM5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjA4ODU1YzlcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvc3J2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MDg4NTVjOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MDg4NTVjOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTGVmdE1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYwODg1NWM5JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYwODg1NWM5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9MZWZ0TWVudS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xlZnRNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MZWZ0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xlZnRNZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYwODg1NWM5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MZWZ0TWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MDg4NTVjOSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGVmdE1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYwODg1NWM5JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yM2EzMWM0OSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9hZGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTG9hZGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yM2EzMWM0OSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjIzYTMxYzQ5XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Nydi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjNhMzFjNDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjNhMzFjNDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzYTMxYzQ5JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzIzYTMxYzQ5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Mb2FkaW5nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjNhMzFjNDkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjNhMzFjNDkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzYTMxYzQ5JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiYjllMTAxJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RvcEJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RvcEJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZiYjllMTAxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNmJiOWUxMDFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvc3J2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2YmI5ZTEwMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2YmI5ZTEwMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVG9wQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YmI5ZTEwMSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2YmI5ZTEwMScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svVG9wQmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmJiOWUxMDEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvcEJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YmI5ZTEwMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9wQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YmI5ZTEwMSZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlc3Npb24ge1xuICAgIHN0YXRpYyBnZXQoa2V5KSB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHN0YXRpYyBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRPYmplY3Qoa2V5KSB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHN0YXRpYyBzZXRPYmplY3Qoa2V5LCB2YWx1ZSkge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZGVzdHJveSgpIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgaXRlbVJvdXRlcyBmcm9tIFwiLi4vcGFnZS9JdGVtL3JvdXRlclwiO1xuaW1wb3J0IG1lZGlhUm91dGVzIGZyb20gXCIuLi9wYWdlL01lZGlhL3JvdXRlclwiO1xuZnVuY3Rpb24gY3JlYXRlTWVudShyb3V0ZXMpIHtcbiAgICBsZXQgb3V0cHV0ID0gW107XG4gICAgcm91dGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmICghaXRlbS5tZXRhLmxlZnRNZW51KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0LnB1c2goe1xuICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgbGFiZWw6IGl0ZW0ubWV0YS50aXRsZSxcbiAgICAgICAgICAgIGljb246IGl0ZW0ubWV0YS5pY29uXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBvdXRwdXQ7XG59XG5sZXQgcm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgbGFiZWw6ICdBY2N1ZWlsJyxcbiAgICAgICAgbmFtZTogJ2hvbWUnLFxuICAgICAgICBpY29uOiAnZmEgZmEtaG9tZSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdJdGVtcycsXG4gICAgICAgIGNoaWxkcmVuOiBjcmVhdGVNZW51KGl0ZW1Sb3V0ZXMpLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ01lZGlhJyxcbiAgICAgICAgY2hpbGRyZW46IGNyZWF0ZU1lbnUobWVkaWFSb3V0ZXMpLFxuICAgIH0sXG5dO1xuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tIFwidnVlLXJvdXRlclwiO1xuaW1wb3J0IGl0ZW1Sb3V0ZXMgZnJvbSBcIi4uL3BhZ2UvSXRlbS9yb3V0ZXJcIjtcbmltcG9ydCBtZWRpYVJvdXRlcyBmcm9tIFwiLi4vcGFnZS9NZWRpYS9yb3V0ZXJcIjtcbmltcG9ydCBzZWN1cml0eVJvdXRlcyBmcm9tIFwiLi4vcGFnZS9TZWN1cml0eS9yb3V0ZXJcIjtcblZ1ZS51c2UoVnVlUm91dGVyKTtcbmNvbnN0IGJhc2VSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnaG9tZScsXG4gICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQWNjdWVpbCcsXG4gICAgICAgICAgICBwYWdlVGl0bGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgY29tcG9uZW50OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdob21lJyAqLyBcIi4uL3BhZ2UvSG9tZS52dWVcIik7XG4gICAgICAgIH1cbiAgICB9LFxuXTtcbmNvbnN0IHJvdXRlcyA9IGJhc2VSb3V0ZXMuY29uY2F0KGl0ZW1Sb3V0ZXMsIG1lZGlhUm91dGVzLCBzZWN1cml0eVJvdXRlcywgW3tcbiAgICAgICAgcGF0aDogJyonLFxuICAgICAgICByZWRpcmVjdDogJy8nXG4gICAgfV0pO1xuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gICAgbW9kZTogJ2hpc3RvcnknLFxuICAgIGJhc2U6IHByb2Nlc3MuZW52LlJPVVRFUl9CQVNFLFxuICAgIGxpbmtBY3RpdmVDbGFzczogJycsXG4gICAgbGlua0V4YWN0QWN0aXZlQ2xhc3M6ICdhY3RpdmUnLFxuICAgIHJvdXRlczogcm91dGVzXG59KTtcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiIsImNvbnN0IGl0ZW1Sb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnaXRlbS1zZWFyY2gnLFxuICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogJ1JlY2hlcmNoZScsXG4gICAgICAgICAgICBwYWdlVGl0bGU6IHRydWUsXG4gICAgICAgICAgICBsZWZ0TWVudTogdHJ1ZSxcbiAgICAgICAgICAgIGljb246ICdmYSBmYS1zZWFyY2gnLFxuICAgICAgICB9LFxuICAgICAgICBwYXRoOiAnL2l0ZW0vc2VhcmNoJyxcbiAgICAgICAgY29tcG9uZW50OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdpdGVtJyAqLyBcIi4vU2VhcmNoLnZ1ZVwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnaXRlbS12aWV3JyxcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgcGFnZVRpdGxlOiBmYWxzZSxcbiAgICAgICAgICAgIGxlZnRNZW51OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGF0aDogJy9pdGVtLzppZC92aWV3LycsXG4gICAgICAgIGNvbXBvbmVudDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnaXRlbScgKi8gXCIuL1ZpZXcudnVlXCIpO1xuICAgICAgICB9XG4gICAgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBpdGVtUm91dGVzO1xuIiwiY29uc3QgbWVkaWFSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnbWVkaWEtaW5kZXgnLFxuICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0xpc3RlIGRlcyBtw6lkaWFzJyxcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogdHJ1ZSxcbiAgICAgICAgICAgIGxlZnRNZW51OiB0cnVlLFxuICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS12aWRlbycsXG4gICAgICAgIH0sXG4gICAgICAgIHBhdGg6ICcvbWVkaWEvaW5kZXgnLFxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ21lZGlhJyAqLyBcIi4vSW5kZXgudnVlXCIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdtZWRpYS12aWV3JyxcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgcGFnZVRpdGxlOiBmYWxzZSxcbiAgICAgICAgICAgIGxlZnRNZW51OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGF0aDogJy9tZWRpYS86aWQvdmlldy8nLFxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ21lZGlhJyAqLyBcIi4vVmlldy52dWVcIik7XG4gICAgICAgIH1cbiAgICB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IG1lZGlhUm91dGVzO1xuIiwiY29uc3Qgc2VjdXJpdHlSb3V0ZXMgPSBbXTtcbmV4cG9ydCBkZWZhdWx0IHNlY3VyaXR5Um91dGVzO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IENvbXBvbmVudCwgUHJvcCwgVnVlLCBXYXRjaCB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9jb21wb25lbnRzL0Jsb2NrL0xvYWRpbmcudnVlXCI7XG5pbXBvcnQgTGVmdE1lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9CbG9jay9MZWZ0TWVudVwiO1xuaW1wb3J0IFRvcEJhciBmcm9tIFwiLi9jb21wb25lbnRzL0Jsb2NrL1RvcEJhclwiO1xuaW1wb3J0IGxlZnRtZW51SXRlbXMgZnJvbSBcIi4vY29uZmlnL2xlZnRtZW51XCI7XG5sZXQgQXBwID0gY2xhc3MgQXBwIGV4dGVuZHMgVnVlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5sZWZ0TWVudUl0ZW1zID0gbGVmdG1lbnVJdGVtcztcbiAgICAgICAgdGhpcy5wYWdlTmFtZSA9IFwiXCI7XG4gICAgfVxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICQoZG9jdW1lbnQpLmZvdW5kYXRpb24oKTtcbiAgICB9XG4gICAgb25Sb3V0ZUNoYW5nZSgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRSb3V0ZSA9IHRoaXMuJHJvdXRlO1xuICAgICAgICBpZiAoY3VycmVudFJvdXRlLm1ldGEudGl0bGUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gY3VycmVudFJvdXRlLm1ldGEudGl0bGUgKyBcIiB8IFwiICsgdGhpcy50aXRsZTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50Um91dGUubWV0YS5wYWdlVGl0bGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOYW1lID0gY3VycmVudFJvdXRlLm1ldGEudGl0bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGhpcy50aXRsZTtcbiAgICAgICAgICAgIHRoaXMucGFnZU5hbWUgPSBcIlwiO1xuICAgICAgICB9XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9KVxuXSwgQXBwLnByb3RvdHlwZSwgXCJsb2FkaW5nXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBQcm9wKHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH0pXG5dLCBBcHAucHJvdG90eXBlLCBcInRpdGxlXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBXYXRjaCgnJHJvdXRlJylcbl0sIEFwcC5wcm90b3R5cGUsIFwib25Sb3V0ZUNoYW5nZVwiLCBudWxsKTtcbkFwcCA9IF9fZGVjb3JhdGUoW1xuICAgIENvbXBvbmVudCh7XG4gICAgICAgIGNvbXBvbmVudHM6IHsgTGVmdE1lbnUsIExvYWRpbmcsIFRvcEJhciB9XG4gICAgfSlcbl0sIEFwcCk7XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDb21wb25lbnQsIFZ1ZSB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CbG9jay9Mb2FkaW5nLnZ1ZVwiO1xuaW1wb3J0IFNlY3VyaXR5QVBJIGZyb20gXCIuLi9BUEkvU2VjdXJpdHlBUElcIjtcbmxldCBMb2dpbiA9IGNsYXNzIExvZ2luIGV4dGVuZHMgVnVlIHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBsb2dpbjogXCJcIixcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBvblN1Ym1pdE1ldGhvZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgU2VjdXJpdHlBUEkubG9naW4odGhpcy5sb2dpbiwgdGhpcy5wYXNzd29yZCwgKHVzZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdXNlcik7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2hvbWUnIH0pO1xuICAgICAgICB9LCAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IG1lc3NhZ2U7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbkxvZ2luID0gX19kZWNvcmF0ZShbXG4gICAgQ29tcG9uZW50KHtcbiAgICAgICAgY29tcG9uZW50czogeyBMb2FkaW5nIH1cbiAgICB9KVxuXSwgTG9naW4pO1xuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3AsIFZ1ZSB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgVnVlUm91dGVyIGZyb20gXCJ2dWUtcm91dGVyXCI7XG5pbXBvcnQgU2Vzc2lvbiBmcm9tIFwiLi4vU2Vzc2lvblwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuLi8uLi9hcHAvU2VjdXJpdHkvTG9naW4udnVlXCI7XG5pbXBvcnQgU2VjdXJpdHlBUEkgZnJvbSBcIi4uLy4uL2FwcC9BUEkvU2VjdXJpdHlBUElcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL0xvYWRpbmcudnVlXCI7XG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5sZXQgTGVmdE1lbnUgPSBjbGFzcyBMZWZ0TWVudSBleHRlbmRzIFZ1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudXNlciA9IG51bGw7XG4gICAgfVxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHVzZXI6IFNlc3Npb24uZ2V0T2JqZWN0KCd1c2VyJyksXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldEljb25DbGFzc2VzKGljb24pIHtcbiAgICAgICAgcmV0dXJuIGljb24gKyBcIiBsaW5rLWljb25cIjtcbiAgICB9XG4gICAgbG9nb3V0KCkge1xuICAgICAgICBpZiAoU2Vzc2lvbi5nZXRPYmplY3QoJ3VzZXInKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIFNlY3VyaXR5QVBJLmxvZ291dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBBcnJheSB9KVxuXSwgTGVmdE1lbnUucHJvdG90eXBlLCBcIml0ZW1zXCIsIHZvaWQgMCk7XG5MZWZ0TWVudSA9IF9fZGVjb3JhdGUoW1xuICAgIENvbXBvbmVudCh7XG4gICAgICAgIGNvbXBvbmVudHM6IHsgTG9hZGluZywgTG9naW4gfVxuICAgIH0pXG5dLCBMZWZ0TWVudSk7XG5leHBvcnQgZGVmYXVsdCBMZWZ0TWVudTtcbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IENvbXBvbmVudCwgUHJvcCwgVnVlIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmxldCBMb2FkaW5nID0gY2xhc3MgTG9hZGluZyBleHRlbmRzIFZ1ZSB7XG59O1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfSlcbl0sIExvYWRpbmcucHJvdG90eXBlLCBcImRpc3BsYXllZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfSlcbl0sIExvYWRpbmcucHJvdG90eXBlLCBcImZpeGVkXCIsIHZvaWQgMCk7XG5Mb2FkaW5nID0gX19kZWNvcmF0ZShbXG4gICAgQ29tcG9uZW50XG5dLCBMb2FkaW5nKTtcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3AsIFZ1ZSB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5sZXQgVG9wQmFyID0gY2xhc3MgVG9wQmFyIGV4dGVuZHMgVnVlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zID0gW107XG4gICAgfVxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBub3RpZmljYXRpb25zOiBbXSxcbiAgICAgICAgfTtcbiAgICB9XG59O1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IHR5cGU6IFN0cmluZyB9KVxuXSwgVG9wQmFyLnByb3RvdHlwZSwgXCJwYWdlbmFtZVwiLCB2b2lkIDApO1xuVG9wQmFyID0gX19kZWNvcmF0ZShbXG4gICAgQ29tcG9uZW50KHtcbiAgICAgICAgY29tcG9uZW50czoge31cbiAgICB9KVxuXSwgVG9wQmFyKTtcbmV4cG9ydCBkZWZhdWx0IFRvcEJhcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJwYWdlLXdyYXBwZXJcIiB9IH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm9mZi1jYW52YXMgcG9zaXRpb24tbGVmdFwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGlkOiBcImRyYXdlclwiLFxuICAgICAgICAgIFwiZGF0YS1vZmYtY2FudmFzXCI6IFwiXCIsXG4gICAgICAgICAgXCJkYXRhLXRyYW5zaXRpb25cIjogXCJvdmVybGFwXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtfYyhcIkxlZnRNZW51XCIsIHsgYXR0cnM6IHsgaXRlbXM6IF92bS5sZWZ0TWVudUl0ZW1zIH0gfSldLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm9mZi1jYW52YXMtY29udGVudFwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJjb250ZW50XCIsIFwiZGF0YS1vZmYtY2FudmFzLWNvbnRlbnRcIjogXCJcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIlRvcEJhclwiLCB7IGF0dHJzOiB7IHBhZ2VuYW1lOiBfdm0ucGFnZU5hbWUgfSB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJMb2FkaW5nXCIsIHsgYXR0cnM6IHsgZGlzcGxheWVkOiBfdm0ubG9hZGluZyB9IH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInJvdXRlci12aWV3XCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJmb290ZXJcIiwgW1xuICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29weXJpZ2h0XCIgfSwgW1xuICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXIgZmEtY29weXJpZ2h0XCIgfSksXG4gICAgICAgIF92bS5fdihcIiBDb3B5cmlnaHQgUGllcnJlIExFSkVVTkUsIHRvdXMgZHJvaXRzIHLDqXNlcnbDqXMuXFxuICAgICAgICAgICAgXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNvY2lhbFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2l0bGFiXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0bGFiLmNvbS9waWVycmVsZWpldW5lL2Rvd25sb2FkLXNlYXJjaFwiLFxuICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYWIgZmEtZ2l0bGFiXCIgfSldXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInR3aXR0ZXJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9kYXJrX2NzZ29cIiwgdGFyZ2V0OiBcIl9ibGFua1wiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYWIgZmEtdHdpdHRlclwiIH0pXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5rZWRpblwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcGllcnJlLWxlamV1bmUvXCIsXG4gICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhYiBmYS1saW5rZWRpbi1pblwiIH0pXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNlY3Rpb25cIixcbiAgICBbXG4gICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwic2VjdGlvbi10aXRsZVwiIH0sIFtfdm0uX3YoXCJDb25uZXhpb25cIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhX3ZtLmxvYWRpbmdcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblN1Ym1pdE1ldGhvZCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uZXJyb3IgIT09IFwiXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FsbG91dCBhbGVydFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3IpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubG9naW4sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibG9naW5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIklkZW50aWZpYW50XCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmxvZ2luIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLmxvZ2luID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInBhc3N3b3JkXCIsIHBsYWNlaG9sZGVyOiBcIk1vdCBkZSBwYXNzZVwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYXNzd29yZCB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBzdWNjZXNzIGV4cGFuZGVkXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9naW4ubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhc3N3b3JkLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29ubmV4aW9uXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5sb2FkaW5nID8gX2MoXCJMb2FkaW5nXCIsIHsgYXR0cnM6IHsgZml4ZWQ6IGZhbHNlIH0gfSkgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJkcmF3ZXItaGVhZGVyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbG9zZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0udXNlciAhPT0gbnVsbCAmJiAhX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgID8gX2MoXCJhXCIsIHsgb246IHsgY2xpY2s6IF92bS5sb2dvdXQgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXNpZ24tb3V0LWFsdCBsaW5rLWljb25cIiB9KVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnVzZXIgIT09IG51bGwgJiYgIV92bS5sb2FkaW5nXG4gICAgICAgICAgPyBbXG4gICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1c2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXZhdGFyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uL2Fzc2V0cy9hdmF0YXIuanBnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGFsdDogX3ZtLnVzZXIudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwidXNlci51c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicHNldWRvXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLnVzZXJuYW1lKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnVzZXIuZW1haWwpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIDogIV92bS5sb2FkaW5nXG4gICAgICAgICAgPyBfYyhcIkxvZ2luXCIsIHtcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmxvYWRpbmcgPyBfYyhcIkxvYWRpbmdcIiwgeyBhdHRyczogeyBmaXhlZDogZmFsc2UgfSB9KSA6IF92bS5fZSgpXG4gICAgICBdLFxuICAgICAgMlxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwidWxcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVudSB2ZXJ0aWNhbCBhY2NvcmRpb24tbWVudVwiLFxuICAgICAgICBhdHRyczogeyBcImRhdGEtYWNjb3JkaW9uLW1lbnVcIjogXCJcIiB9XG4gICAgICB9LFxuICAgICAgX3ZtLl9sKF92bS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIGl0ZW0uY2hpbGRyZW4gPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogaXRlbS5uYW1lIH0sIGV4YWN0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaWNvbiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaVwiLCB7IGNsYXNzOiBfdm0uZ2V0SWNvbkNsYXNzZXMoaXRlbS5pY29uKSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5sYWJlbCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW192bS5fdihfdm0uX3MoaXRlbS5sYWJlbCkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2ZXJ0aWNhbCBtZW51IG5lc3RlZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChpdGVtLmNoaWxkcmVuLCBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogY2hpbGQubmFtZSB9LCBleGFjdDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuaWNvbiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0SWNvbkNsYXNzZXMoY2hpbGQuaWNvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmstbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoY2hpbGQubGFiZWwpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICAwXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJhXCIsIHsgYXR0cnM6IHsgXCJkYXRhLWNsb3NlXCI6IFwiXCIgfSB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtdGltZXMgbGluay1pY29uXCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImltYWdlXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uL2Fzc2V0cy9sZWZ0bWVudS1oZWFkZXItYmFja2dyb3VuZC5qcGdcIiksXG4gICAgICAgICAgYWx0OiBcIkJhbm5lciBwcm9maWwgaW1hZ2VcIlxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uZGlzcGxheWVkXG4gICAgPyBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLmRpc3BsYXllZCwgZml4ZWQ6IF92bS5maXhlZCB9LFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImxvYWRpbmdcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX20oMCldXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzcGlubmVyXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc3BpbiBmYS1zcGlubmVyXCIgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3AtYmFyXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wLWJhci1sZWZ0XCIgfSwgW1xuICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1lbnVcIiB9LCBbXG4gICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnBhZ2VuYW1lICE9PSBudWxsXG4gICAgICAgICAgPyBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWVudS10ZXh0XCIsIGF0dHJzOiB7IGlkOiBcInBhZ2UtbmFtZVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wYWdlbmFtZSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgXCJkYXRhLXRvZ2dsZVwiOiBcImRyYXdlclwiIH0gfSwgW1xuICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1iYXJzXCIgfSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9