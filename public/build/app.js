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
/******/ 		return __webpack_require__.p + "" + ({"vendors~home~item":"vendors~home~item","home":"home","item":"item"}[chunkId]||chunkId) + ".js"
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
/******/ 		var cssChunks = {"home":1,"item":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({"vendors~home~item":"vendors~home~item","home":"home","item":"item"}[chunkId]||chunkId) + ".css";
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
/* harmony import */ var _page_Item_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page/Item/router */ "./assets/js/page/Item/router.ts");


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
  children: createMenu(_page_Item_router__WEBPACK_IMPORTED_MODULE_0__["default"])
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
/* harmony import */ var _page_Item_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page/Item/router */ "./assets/js/page/Item/router.ts");



vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
var baseRoutes = [{
  name: 'home',
  meta: {
    title: 'Accueil',
    pageTitle: true
  },
  path: '/',
  component: function component() {
    return Promise.all(/*! import() | home */[__webpack_require__.e("vendors~home~item"), __webpack_require__.e("home")]).then(__webpack_require__.bind(null, /*! ../page/HomePage.vue */ "./assets/js/page/HomePage.vue"));
  }
}];
var routes = baseRoutes.concat(_page_Item_router__WEBPACK_IMPORTED_MODULE_2__["default"]);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'hash',
  base: Object({"NODE_ENV":"development"}).ROUTER_BASE,
  linkActiveClass: '',
  linkExactActiveClass: 'active',
  routes: routes
});

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
  name: 'search',
  meta: {
    title: 'Recherche',
    pageTitle: true,
    leftMenu: true,
    icon: 'fa fa-search'
  },
  path: '/item/search',
  component: function component() {
    return Promise.all(/*! import() | item */[__webpack_require__.e("vendors~home~item"), __webpack_require__.e("item")]).then(__webpack_require__.bind(null, /*! ./SearchPage.vue */ "./assets/js/page/Item/SearchPage.vue"));
  }
}, {
  name: 'view',
  meta: {
    pageTitle: false,
    leftMenu: false
  },
  path: '/item/:id/view/',
  component: function component() {
    return Promise.all(/*! import() | item */[__webpack_require__.e("vendors~home~item"), __webpack_require__.e("item")]).then(__webpack_require__.bind(null, /*! ./ViewPage.vue */ "./assets/js/page/Item/ViewPage.vue"));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (itemRoutes);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Fzc2V0cy9hdmF0YXIuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hc3NldHMvbGVmdG1lbnUtaGVhZGVyLWJhY2tncm91bmQuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9BcHAudnVlPzVhOWMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0FwcC52dWU/NGE2MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQXBwLnZ1ZT9lNWEyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9BcHAudnVlP2U0NmYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9MZWZ0TWVudS52dWU/ZGQ0MSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9MZWZ0TWVudS52dWU/ZWFlNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9MZWZ0TWVudS52dWU/ZDZlMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9MZWZ0TWVudS52dWU/YTY0NCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Mb2FkaW5nLnZ1ZT80ZDkzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL0xvYWRpbmcudnVlP2Q1MjgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTG9hZGluZy52dWU/OGYzMiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Mb2FkaW5nLnZ1ZT8wNDIyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RvcEJhci52dWU/ZjVhYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Ub3BCYXIudnVlP2I2YjciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svVG9wQmFyLnZ1ZT8yNWEyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RvcEJhci52dWU/YTBmOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29uZmlnL2xlZnRtZW51LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb25maWcvcm91dGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL0l0ZW0vcm91dGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL3NlbGVjdDIuZm91bmRhdGlvbi5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9BcHAudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL0xlZnRNZW51LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Mb2FkaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Ub3BCYXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9BcHAudnVlP2QyNTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTGVmdE1lbnUudnVlP2E2ZjMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svTG9hZGluZy52dWU/ZjEyZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Ub3BCYXIudnVlP2Y2NDYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0FwcC52dWU/YTIwMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9MZWZ0TWVudS52dWU/MWZkZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Mb2FkaW5nLnZ1ZT83MmY0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RvcEJhci52dWU/NGQ2YyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiYXBwIiwiVnVlIiwiZWwiLCJwcm9wcyIsImNvbXBvbmVudHMiLCJBcHAiLCJ0ZW1wbGF0ZSIsInJvdXRlciIsInRpdGxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlubmVySFRNTCIsImJlZm9yZUVhY2giLCJ0byIsImZyb20iLCJuZXh0IiwibG9hZGluZyIsIndpbmRvdyIsInNjcm9sbCIsImFmdGVyRWFjaCIsIiQiLCJmaW5kIiwidHJpZ2dlciIsImNyZWF0ZU1lbnUiLCJyb3V0ZXMiLCJvdXRwdXQiLCJmb3JFYWNoIiwiaXRlbSIsIm1ldGEiLCJsZWZ0TWVudSIsInB1c2giLCJuYW1lIiwibGFiZWwiLCJpY29uIiwiY2hpbGRyZW4iLCJpdGVtUm91dGVzIiwidXNlIiwiVnVlUm91dGVyIiwiYmFzZVJvdXRlcyIsInBhZ2VUaXRsZSIsInBhdGgiLCJjb21wb25lbnQiLCJjb25jYXQiLCJtb2RlIiwiYmFzZSIsInByb2Nlc3MiLCJST1VURVJfQkFTRSIsImxpbmtBY3RpdmVDbGFzcyIsImxpbmtFeGFjdEFjdGl2ZUNsYXNzIiwiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiaSIsImRlZmluZVByb3BlcnR5IiwibGVmdE1lbnVJdGVtcyIsImxlZnRtZW51SXRlbXMiLCJwYWdlTmFtZSIsImZvdW5kYXRpb24iLCJjdXJyZW50Um91dGUiLCIkcm91dGUiLCJQcm9wIiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwicHJvdG90eXBlIiwiU3RyaW5nIiwiV2F0Y2giLCJDb21wb25l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ayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBDU1MgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ3NzQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHtcInZlbmRvcnN+aG9tZX5pdGVtXCI6XCJ2ZW5kb3JzfmhvbWV+aXRlbVwiLFwiaG9tZVwiOlwiaG9tZVwiLFwiaXRlbVwiOlwiaXRlbVwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiBDU1MgbG9hZGluZ1xuIFx0XHR2YXIgY3NzQ2h1bmtzID0ge1wiaG9tZVwiOjEsXCJpdGVtXCI6MX07XG4gXHRcdGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSkgcHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pO1xuIFx0XHRlbHNlIGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSAhPT0gMCAmJiBjc3NDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0dmFyIGhyZWYgPSBcIlwiICsgKHtcInZlbmRvcnN+aG9tZX5pdGVtXCI6XCJ2ZW5kb3JzfmhvbWV+aXRlbVwiLFwiaG9tZVwiOlwiaG9tZVwiLFwiaXRlbVwiOlwiaXRlbVwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5jc3NcIjtcbiBcdFx0XHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG4gXHRcdFx0XHR2YXIgZXhpc3RpbmdMaW5rVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ0xpbmtUYWdzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciB0YWcgPSBleGlzdGluZ0xpbmtUYWdzW2ldO1xuIFx0XHRcdFx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpIHx8IHRhZy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuIFx0XHRcdFx0XHRpZih0YWcucmVsID09PSBcInN0eWxlc2hlZXRcIiAmJiAoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSkgcmV0dXJuIHJlc29sdmUoKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHZhciBleGlzdGluZ1N0eWxlVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIik7XG4gXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdTdHlsZVRhZ3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHRhZyA9IGV4aXN0aW5nU3R5bGVUYWdzW2ldO1xuIFx0XHRcdFx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpO1xuIFx0XHRcdFx0XHRpZihkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpIHJldHVybiByZXNvbHZlKCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHR2YXIgbGlua1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuIFx0XHRcdFx0bGlua1RhZy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiBcdFx0XHRcdGxpbmtUYWcudHlwZSA9IFwidGV4dC9jc3NcIjtcbiBcdFx0XHRcdGxpbmtUYWcub25sb2FkID0gcmVzb2x2ZTtcbiBcdFx0XHRcdGxpbmtUYWcub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gXHRcdFx0XHRcdHZhciByZXF1ZXN0ID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmMgfHwgZnVsbGhyZWY7XG4gXHRcdFx0XHRcdHZhciBlcnIgPSBuZXcgRXJyb3IoXCJMb2FkaW5nIENTUyBjaHVuayBcIiArIGNodW5rSWQgKyBcIiBmYWlsZWQuXFxuKFwiICsgcmVxdWVzdCArIFwiKVwiKTtcbiBcdFx0XHRcdFx0ZXJyLnJlcXVlc3QgPSByZXF1ZXN0O1xuIFx0XHRcdFx0XHRyZWplY3QoZXJyKTtcbiBcdFx0XHRcdH07XG4gXHRcdFx0XHRsaW5rVGFnLmhyZWYgPSBmdWxsaHJlZjtcbiBcdFx0XHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuIFx0XHRcdFx0aGVhZC5hcHBlbmRDaGlsZChsaW5rVGFnKTtcbiBcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0XHR9KSk7XG4gXHRcdH1cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcignTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKScpO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2Fzc2V0cy9qcy9hcHAudHNcIixcInZlbmRvcnN+YXBwXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9idWlsZC9pbWFnZXMvYXZhdGFyLjMwZjY0NjEwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYnVpbGQvaW1hZ2VzL2xlZnRtZW51LWhlYWRlci1iYWNrZ3JvdW5kLjgxM2ZkZDhmLmpwZ1wiOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iOGZlMGJhZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iOGZlMGJhZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImI4ZmUwYmFlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Nydi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjhmZTBiYWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjhmZTBiYWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjhmZTBiYWUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYjhmZTBiYWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9BcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iOGZlMGJhZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWI4ZmUwYmFlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI4ZmUwYmFlJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9kaXN0L2Nzcy9mb3VuZGF0aW9uLm1pbi5jc3MnO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2Rpc3QvanMvZm91bmRhdGlvbi5taW4nO1xuaW1wb3J0ICdzZWxlY3QyL2Rpc3QvY3NzL3NlbGVjdDIubWluLmNzcyc7XG5pbXBvcnQgJ3NlbGVjdDIvZGlzdC9qcy9zZWxlY3QyLmZ1bGwubWluJztcbmltcG9ydCAnc2VsZWN0Mi9kaXN0L2pzL2kxOG4vZnInO1xucmVxdWlyZSgnLi4vc2Nzcy9zZWxlY3QyLmZvdW5kYXRpb24uc2NzcycpO1xucmVxdWlyZSgnLi4vc2Nzcy9hcHAuc2NzcycpO1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnO1xuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSBcIi4vY29uZmlnL3JvdXRlclwiO1xuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbiAgICBwcm9wczogWydsb2FkaW5nJywgJ3RpdGxlJ10sXG4gICAgY29tcG9uZW50czogeyBBcHAgfSxcbiAgICB0ZW1wbGF0ZTogJzxBcHAgOnRpdGxlPVwidGl0bGVcIiA6bG9hZGluZz1cImxvYWRpbmdcIj48L0FwcD4nLFxuICAgIHJvdXRlcixcbn0pO1xuYXBwLnRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aXRsZVwiKVswXS5pbm5lckhUTUw7XG5yb3V0ZXIuYmVmb3JlRWFjaCgodG8sIGZyb20sIG5leHQpID0+IHtcbiAgICBhcHAubG9hZGluZyA9IHRydWU7XG4gICAgd2luZG93LnNjcm9sbCgwLCAwKTtcbiAgICBuZXh0KCk7XG59KTtcbnJvdXRlci5hZnRlckVhY2goKHRvLCBmcm9tKSA9PiB7XG4gICAgYXBwLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAkKFwiI2RyYXdlclwiKS5maW5kKCdhW2RhdGEtY2xvc2VdJykudHJpZ2dlcignY2xpY2snKTtcbn0pO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9MZWZ0TWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjA4ODU1Yzkmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTGVmdE1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9MZWZ0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTGVmdE1lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjA4ODU1YzkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2MDg4NTVjOVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9zcnYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzYwODg1NWM5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzYwODg1NWM5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9MZWZ0TWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjA4ODU1Yzkmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjA4ODU1YzknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL0xlZnRNZW51LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGVmdE1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xlZnRNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGVmdE1lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjA4ODU1YzkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xlZnRNZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYwODg1NWM5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MZWZ0TWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjA4ODU1Yzkmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzYTMxYzQ5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIzYTMxYzQ5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjNhMzFjNDlcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvc3J2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyM2EzMWM0OScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyM2EzMWM0OScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9hZGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjNhMzFjNDkmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjNhMzFjNDknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL0xvYWRpbmcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yM2EzMWM0OSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yM2EzMWM0OSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjNhMzFjNDkmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RvcEJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmJiOWUxMDEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmJiOWUxMDEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2YmI5ZTEwMVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9zcnYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZiYjllMTAxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZiYjllMTAxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiYjllMTAxJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZiYjllMTAxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9Ub3BCYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvcEJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvcEJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YmI5ZTEwMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZiYjllMTAxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiYjllMTAxJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IGl0ZW1Sb3V0ZXMgZnJvbSBcIi4uL3BhZ2UvSXRlbS9yb3V0ZXJcIjtcbmZ1bmN0aW9uIGNyZWF0ZU1lbnUocm91dGVzKSB7XG4gICAgbGV0IG91dHB1dCA9IFtdO1xuICAgIHJvdXRlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWl0ZW0ubWV0YS5sZWZ0TWVudSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGxhYmVsOiBpdGVtLm1ldGEudGl0bGUsXG4gICAgICAgICAgICBpY29uOiBpdGVtLm1ldGEuaWNvblxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZXhwb3J0IGRlZmF1bHQgW1xuICAgIHtcbiAgICAgICAgbGFiZWw6ICdBY2N1ZWlsJyxcbiAgICAgICAgbmFtZTogJ2hvbWUnLFxuICAgICAgICBpY29uOiAnZmEgZmEtaG9tZSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdJdGVtcycsXG4gICAgICAgIGNoaWxkcmVuOiBjcmVhdGVNZW51KGl0ZW1Sb3V0ZXMpLFxuICAgIH1cbl07XG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVlUm91dGVyIGZyb20gXCJ2dWUtcm91dGVyXCI7XG5pbXBvcnQgaXRlbVJvdXRlcyBmcm9tIFwiLi4vcGFnZS9JdGVtL3JvdXRlclwiO1xuVnVlLnVzZShWdWVSb3V0ZXIpO1xuY29uc3QgYmFzZVJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdob21lJyxcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGl0bGU6ICdBY2N1ZWlsJyxcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2hvbWUnICovIFwiLi4vcGFnZS9Ib21lUGFnZS52dWVcIik7XG4gICAgICAgIH1cbiAgICB9LFxuXTtcbmNvbnN0IHJvdXRlcyA9IGJhc2VSb3V0ZXMuY29uY2F0KGl0ZW1Sb3V0ZXMpO1xuZXhwb3J0IGNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xuICAgIG1vZGU6ICdoYXNoJyxcbiAgICBiYXNlOiBwcm9jZXNzLmVudi5ST1VURVJfQkFTRSxcbiAgICBsaW5rQWN0aXZlQ2xhc3M6ICcnLFxuICAgIGxpbmtFeGFjdEFjdGl2ZUNsYXNzOiAnYWN0aXZlJyxcbiAgICByb3V0ZXM6IHJvdXRlc1xufSk7XG4iLCJjb25zdCBpdGVtUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ3NlYXJjaCcsXG4gICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnUmVjaGVyY2hlJyxcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogdHJ1ZSxcbiAgICAgICAgICAgIGxlZnRNZW51OiB0cnVlLFxuICAgICAgICAgICAgaWNvbjogJ2ZhIGZhLXNlYXJjaCcsXG4gICAgICAgIH0sXG4gICAgICAgIHBhdGg6ICcvaXRlbS9zZWFyY2gnLFxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2l0ZW0nICovIFwiLi9TZWFyY2hQYWdlLnZ1ZVwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAndmlldycsXG4gICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogZmFsc2UsXG4gICAgICAgICAgICBsZWZ0TWVudTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHBhdGg6ICcvaXRlbS86aWQvdmlldy8nLFxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2l0ZW0nICovIFwiLi9WaWV3UGFnZS52dWVcIik7XG4gICAgICAgIH1cbiAgICB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IGl0ZW1Sb3V0ZXM7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9wLCBWdWUsIFdhdGNoIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL2NvbXBvbmVudHMvQmxvY2svTG9hZGluZy52dWVcIjtcbmltcG9ydCBMZWZ0TWVudSBmcm9tIFwiLi9jb21wb25lbnRzL0Jsb2NrL0xlZnRNZW51XCI7XG5pbXBvcnQgVG9wQmFyIGZyb20gXCIuL2NvbXBvbmVudHMvQmxvY2svVG9wQmFyXCI7XG5pbXBvcnQgbGVmdG1lbnVJdGVtcyBmcm9tIFwiLi9jb25maWcvbGVmdG1lbnVcIjtcbmxldCBBcHAgPSBjbGFzcyBBcHAgZXh0ZW5kcyBWdWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmxlZnRNZW51SXRlbXMgPSBsZWZ0bWVudUl0ZW1zO1xuICAgICAgICB0aGlzLnBhZ2VOYW1lID0gXCJcIjtcbiAgICB9XG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgJChkb2N1bWVudCkuZm91bmRhdGlvbigpO1xuICAgIH1cbiAgICBvblJvdXRlQ2hhbmdlKCkge1xuICAgICAgICBsZXQgY3VycmVudFJvdXRlID0gdGhpcy4kcm91dGU7XG4gICAgICAgIGlmIChjdXJyZW50Um91dGUubWV0YS50aXRsZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBjdXJyZW50Um91dGUubWV0YS50aXRsZSArIFwiIHwgXCIgKyB0aGlzLnRpdGxlO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRSb3V0ZS5tZXRhLnBhZ2VUaXRsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZU5hbWUgPSBjdXJyZW50Um91dGUubWV0YS50aXRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZU5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSB0aGlzLnRpdGxlO1xuICAgICAgICAgICAgdGhpcy5wYWdlTmFtZSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG59O1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0pXG5dLCBBcHAucHJvdG90eXBlLCBcImxvYWRpbmdcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSlcbl0sIEFwcC5wcm90b3R5cGUsIFwidGl0bGVcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIFdhdGNoKCckcm91dGUnKVxuXSwgQXBwLnByb3RvdHlwZSwgXCJvblJvdXRlQ2hhbmdlXCIsIG51bGwpO1xuQXBwID0gX19kZWNvcmF0ZShbXG4gICAgQ29tcG9uZW50KHtcbiAgICAgICAgY29tcG9uZW50czogeyBMZWZ0TWVudSwgTG9hZGluZywgVG9wQmFyIH1cbiAgICB9KVxuXSwgQXBwKTtcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IENvbXBvbmVudCwgUHJvcCwgVnVlIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSBcInZ1ZS1yb3V0ZXJcIjtcblZ1ZS51c2UoVnVlUm91dGVyKTtcbmxldCBMZWZ0TWVudSA9IGNsYXNzIExlZnRNZW51IGV4dGVuZHMgVnVlIHtcbiAgICBnZXRJY29uQ2xhc3NlcyhpY29uKSB7XG4gICAgICAgIHJldHVybiBpY29uICsgXCIgbGluay1pY29uXCI7XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBBcnJheSB9KVxuXSwgTGVmdE1lbnUucHJvdG90eXBlLCBcIml0ZW1zXCIsIHZvaWQgMCk7XG5MZWZ0TWVudSA9IF9fZGVjb3JhdGUoW1xuICAgIENvbXBvbmVudFxuXSwgTGVmdE1lbnUpO1xuZXhwb3J0IGRlZmF1bHQgTGVmdE1lbnU7XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3AsIFZ1ZSB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5sZXQgTG9hZGluZyA9IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBWdWUge1xufTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBMb2FkaW5nLnByb3RvdHlwZSwgXCJkaXNwbGF5ZWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH0pXG5dLCBMb2FkaW5nLnByb3RvdHlwZSwgXCJmaXhlZFwiLCB2b2lkIDApO1xuTG9hZGluZyA9IF9fZGVjb3JhdGUoW1xuICAgIENvbXBvbmVudFxuXSwgTG9hZGluZyk7XG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9wLCBWdWUgfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xubGV0IFRvcEJhciA9IGNsYXNzIFRvcEJhciBleHRlbmRzIFZ1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucyA9IFtdO1xuICAgIH1cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uczogW10sXG4gICAgICAgIH07XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBTdHJpbmcgfSlcbl0sIFRvcEJhci5wcm90b3R5cGUsIFwicGFnZW5hbWVcIiwgdm9pZCAwKTtcblRvcEJhciA9IF9fZGVjb3JhdGUoW1xuICAgIENvbXBvbmVudCh7XG4gICAgICAgIGNvbXBvbmVudHM6IHt9XG4gICAgfSlcbl0sIFRvcEJhcik7XG5leHBvcnQgZGVmYXVsdCBUb3BCYXI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwicGFnZS13cmFwcGVyXCIgfSB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJvZmYtY2FudmFzIHBvc2l0aW9uLWxlZnRcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBpZDogXCJkcmF3ZXJcIixcbiAgICAgICAgICBcImRhdGEtb2ZmLWNhbnZhc1wiOiBcIlwiLFxuICAgICAgICAgIFwiZGF0YS10cmFuc2l0aW9uXCI6IFwib3ZlcmxhcFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbX2MoXCJMZWZ0TWVudVwiLCB7IGF0dHJzOiB7IGl0ZW1zOiBfdm0ubGVmdE1lbnVJdGVtcyB9IH0pXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJvZmYtY2FudmFzLWNvbnRlbnRcIixcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwiY29udGVudFwiLCBcImRhdGEtb2ZmLWNhbnZhcy1jb250ZW50XCI6IFwiXCIgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJUb3BCYXJcIiwgeyBhdHRyczogeyBwYWdlbmFtZTogX3ZtLnBhZ2VOYW1lIH0gfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiTG9hZGluZ1wiLCB7IGF0dHJzOiB7IGRpc3BsYXllZDogX3ZtLmxvYWRpbmcgfSB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJyb3V0ZXItdmlld1wiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9tKDApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZm9vdGVyXCIsIFtcbiAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvcHlyaWdodFwiIH0sIFtcbiAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFyIGZhLWNvcHlyaWdodFwiIH0pLFxuICAgICAgICBfdm0uX3YoXCIgQ29weXJpZ2h0IFBpZXJyZSBMRUpFVU5FLCB0b3VzIGRyb2l0cyByw6lzZXJ2w6lzLlxcbiAgICAgICAgICAgIFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzb2NpYWxcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdpdGxhYlwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGxhYi5jb20vcGllcnJlbGVqZXVuZS9kb3dubG9hZC1zZWFyY2hcIixcbiAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFiIGZhLWdpdGxhYlwiIH0pXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0d2l0dGVyXCIsXG4gICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vdHdpdHRlci5jb20vZGFya19jc2dvXCIsIHRhcmdldDogXCJfYmxhbmtcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFiIGZhLXR3aXR0ZXJcIiB9KV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlua2VkaW5cIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3BpZXJyZS1sZWpldW5lL1wiLFxuICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYWIgZmEtbGlua2VkaW4taW5cIiB9KV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJ1bFwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtZW51IHZlcnRpY2FsIGFjY29yZGlvbi1tZW51XCIsXG4gICAgICAgIGF0dHJzOiB7IFwiZGF0YS1hY2NvcmRpb24tbWVudVwiOiBcIlwiIH1cbiAgICAgIH0sXG4gICAgICBfdm0uX2woX3ZtLml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgaXRlbS5jaGlsZHJlbiA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogeyBuYW1lOiBpdGVtLm5hbWUgfSwgZXhhY3Q6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5pY29uICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5nZXRJY29uQ2xhc3NlcyhpdGVtLmljb24pIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLmxhYmVsKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmxhYmVsKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInZlcnRpY2FsIG1lbnUgbmVzdGVkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGl0ZW0uY2hpbGRyZW4sIGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogeyBuYW1lOiBjaGlsZC5uYW1lIH0sIGV4YWN0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5pY29uICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRJY29uQ2xhc3NlcyhjaGlsZC5pY29uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGluay1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhjaGlsZC5sYWJlbCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICB9KSxcbiAgICAgIDBcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRyYXdlci1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImltYWdlXCIgfSwgW1xuICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uL2Fzc2V0cy9sZWZ0bWVudS1oZWFkZXItYmFja2dyb3VuZC5qcGdcIiksXG4gICAgICAgICAgICBhbHQ6IFwiQmFubmVyIHByb2ZpbCBpbWFnZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1c2VyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImF2YXRhclwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9hc3NldHMvYXZhdGFyLmpwZ1wiKSxcbiAgICAgICAgICAgICAgYWx0OiBcIkRhcmthbmFraW40MVwiLFxuICAgICAgICAgICAgICB0aXRsZTogXCJEYXJrYW5ha2luNDFcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlkXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBzZXVkb1wiIH0sIFtfdm0uX3YoXCJEYXJrYW5ha2luNDFcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haWxcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJkYXJrYW5ha2luNDFAZ21haWwuY29tXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIiB9LCBbXG4gICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IFwiZGF0YS1jbG9zZVwiOiBcIlwiIH0gfSwgW1xuICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS10aW1lcyBsaW5rLWljb25cIiB9KVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmRpc3BsYXllZFxuICAgID8gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczogeyBhY3RpdmU6IF92bS5kaXNwbGF5ZWQsIGZpeGVkOiBfdm0uZml4ZWQgfSxcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJsb2FkaW5nXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl9tKDApXVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3Bpbm5lclwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXNwaW4gZmEtc3Bpbm5lclwiIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wLWJhclwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvcC1iYXItbGVmdFwiIH0sIFtcbiAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJtZW51XCIgfSwgW1xuICAgICAgICBfdm0uX20oMCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5wYWdlbmFtZSAhPT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1lbnUtdGV4dFwiLCBhdHRyczogeyBpZDogXCJwYWdlLW5hbWVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucGFnZW5hbWUpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImxpXCIsIFtcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IFwiZGF0YS10b2dnbGVcIjogXCJkcmF3ZXJcIiB9IH0sIFtcbiAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtYmFyc1wiIH0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==