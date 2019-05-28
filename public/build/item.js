(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item"],{

/***/ "./assets/js/app/API/ItemAPI.ts":
/*!**************************************!*\
  !*** ./assets/js/app/API/ItemAPI.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Entity_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Entity/Item */ "./assets/js/app/Entity/Item.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ItemAPI =
/*#__PURE__*/
function () {
  function ItemAPI() {
    _classCallCheck(this, ItemAPI);
  }

  _createClass(ItemAPI, null, [{
    key: "search",

    /**
     * Search on the server
     * @param q
     * @param callback the code to be executed on success
     */
    value: function search(q, callback) {
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: 'SEARCH',
        url: '/api/item/search',
        data: {
          q: q
        }
      }).then(callback);
    }
    /**
     * Process input array and return the list of objects
     *
     * @param data
     *
     * @return Item[]
     */

  }, {
    key: "convert",
    value: function convert(data) {
      var retour = [];
      data.forEach(function (item) {
        retour.push(new _Entity_Item__WEBPACK_IMPORTED_MODULE_1__["default"](item));
      });
      return retour;
    }
  }]);

  return ItemAPI;
}();



/***/ }),

/***/ "./assets/js/app/API/SourceAPI.ts":
/*!****************************************!*\
  !*** ./assets/js/app/API/SourceAPI.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SourceAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Entity_Source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Entity/Source */ "./assets/js/app/Entity/Source.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var SourceAPI =
/*#__PURE__*/
function () {
  function SourceAPI() {
    _classCallCheck(this, SourceAPI);
  }

  _createClass(SourceAPI, null, [{
    key: "getAll",

    /**
     * Search on the server
     * @param q
     * @param callback the code to be executed on success
     */
    value: function getAll(callback) {
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: 'GET',
        url: '/api/source/all'
      }).then(callback);
    }
    /**
     * Process input array and return the list of objects
     *
     * @param data
     *
     * @return Source[]
     */

  }, {
    key: "convert",
    value: function convert(data) {
      var retour = [];
      data.forEach(function (item) {
        retour.push(new _Entity_Source__WEBPACK_IMPORTED_MODULE_1__["default"](item));
      });
      return retour;
    }
  }]);

  return SourceAPI;
}();



/***/ }),

/***/ "./assets/js/app/Entity/Item.ts":
/*!**************************************!*\
  !*** ./assets/js/app/Entity/Item.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
/* harmony import */ var _Source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Source */ "./assets/js/app/Entity/Source.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Item = function Item(data) {
  _classCallCheck(this, Item);

  this.id = data.id;
  this.title = data.title;
  this.quality = data.quality;
  this.genres = data.genres;
  this.lastPart = data.lastPart;
  this.fullUrl = data.fullUrl;
  this.source = new _Source__WEBPACK_IMPORTED_MODULE_0__["default"](data.source);
};



/***/ }),

/***/ "./assets/js/app/Entity/Source.ts":
/*!****************************************!*\
  !*** ./assets/js/app/Entity/Source.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Source; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Source = function Source(data) {
  _classCallCheck(this, Source);

  this.id = data.id;
  this.title = data.title;
  this.baseUrl = data.baseUrl;
};



/***/ }),

/***/ "./assets/js/components/Block/TabbedFilter.vue":
/*!*****************************************************!*\
  !*** ./assets/js/components/Block/TabbedFilter.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabbedFilter_vue_vue_type_template_id_d1aabab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabbedFilter.vue?vue&type=template&id=d1aabab2&scoped=true& */ "./assets/js/components/Block/TabbedFilter.vue?vue&type=template&id=d1aabab2&scoped=true&");
/* harmony import */ var _TabbedFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabbedFilter.vue?vue&type=script&lang=ts& */ "./assets/js/components/Block/TabbedFilter.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _TabbedFilter_vue_vue_type_style_index_0_id_d1aabab2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabbedFilter.vue?vue&type=style&index=0&id=d1aabab2&lang=scss&scoped=true& */ "./assets/js/components/Block/TabbedFilter.vue?vue&type=style&index=0&id=d1aabab2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TabbedFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TabbedFilter_vue_vue_type_template_id_d1aabab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TabbedFilter_vue_vue_type_template_id_d1aabab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d1aabab2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Block/TabbedFilter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Block/TabbedFilter.vue?vue&type=script&lang=ts&":
/*!******************************************************************************!*\
  !*** ./assets/js/components/Block/TabbedFilter.vue?vue&type=script&lang=ts& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--6-0!../../../../node_modules/ts-loader??ref--6-1!../../../../node_modules/vue-loader/lib??vue-loader-options!./TabbedFilter.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/TabbedFilter.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Block/TabbedFilter.vue?vue&type=style&index=0&id=d1aabab2&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./assets/js/components/Block/TabbedFilter.vue?vue&type=style&index=0&id=d1aabab2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedFilter_vue_vue_type_style_index_0_id_d1aabab2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader??ref--4-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader??ref--4-2!../../../../node_modules/sass-loader/lib/loader.js??ref--4-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./TabbedFilter.vue?vue&type=style&index=0&id=d1aabab2&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/TabbedFilter.vue?vue&type=style&index=0&id=d1aabab2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedFilter_vue_vue_type_style_index_0_id_d1aabab2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedFilter_vue_vue_type_style_index_0_id_d1aabab2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedFilter_vue_vue_type_style_index_0_id_d1aabab2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedFilter_vue_vue_type_style_index_0_id_d1aabab2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedFilter_vue_vue_type_style_index_0_id_d1aabab2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/components/Block/TabbedFilter.vue?vue&type=template&id=d1aabab2&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./assets/js/components/Block/TabbedFilter.vue?vue&type=template&id=d1aabab2&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedFilter_vue_vue_type_template_id_d1aabab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TabbedFilter.vue?vue&type=template&id=d1aabab2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/TabbedFilter.vue?vue&type=template&id=d1aabab2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedFilter_vue_vue_type_template_id_d1aabab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedFilter_vue_vue_type_template_id_d1aabab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Table/FlexTable.vue":
/*!**************************************************!*\
  !*** ./assets/js/components/Table/FlexTable.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlexTable_vue_vue_type_template_id_30b94e23_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlexTable.vue?vue&type=template&id=30b94e23&scoped=true& */ "./assets/js/components/Table/FlexTable.vue?vue&type=template&id=30b94e23&scoped=true&");
/* harmony import */ var _FlexTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlexTable.vue?vue&type=script&lang=ts& */ "./assets/js/components/Table/FlexTable.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _FlexTable_vue_vue_type_style_index_0_id_30b94e23_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlexTable.vue?vue&type=style&index=0&id=30b94e23&lang=scss&scoped=true& */ "./assets/js/components/Table/FlexTable.vue?vue&type=style&index=0&id=30b94e23&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FlexTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlexTable_vue_vue_type_template_id_30b94e23_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FlexTable_vue_vue_type_template_id_30b94e23_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "30b94e23",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Table/FlexTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Table/FlexTable.vue?vue&type=script&lang=ts&":
/*!***************************************************************************!*\
  !*** ./assets/js/components/Table/FlexTable.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--6-0!../../../../node_modules/ts-loader??ref--6-1!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlexTable.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Table/FlexTable.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Table/FlexTable.vue?vue&type=style&index=0&id=30b94e23&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./assets/js/components/Table/FlexTable.vue?vue&type=style&index=0&id=30b94e23&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexTable_vue_vue_type_style_index_0_id_30b94e23_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader??ref--4-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader??ref--4-2!../../../../node_modules/sass-loader/lib/loader.js??ref--4-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlexTable.vue?vue&type=style&index=0&id=30b94e23&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Table/FlexTable.vue?vue&type=style&index=0&id=30b94e23&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexTable_vue_vue_type_style_index_0_id_30b94e23_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexTable_vue_vue_type_style_index_0_id_30b94e23_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexTable_vue_vue_type_style_index_0_id_30b94e23_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexTable_vue_vue_type_style_index_0_id_30b94e23_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexTable_vue_vue_type_style_index_0_id_30b94e23_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/components/Table/FlexTable.vue?vue&type=template&id=30b94e23&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./assets/js/components/Table/FlexTable.vue?vue&type=template&id=30b94e23&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexTable_vue_vue_type_template_id_30b94e23_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlexTable.vue?vue&type=template&id=30b94e23&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Table/FlexTable.vue?vue&type=template&id=30b94e23&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexTable_vue_vue_type_template_id_30b94e23_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexTable_vue_vue_type_template_id_30b94e23_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/config/table/search.ts":
/*!******************************************!*\
  !*** ./assets/js/config/table/search.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fields: {
    title: {
      label: "Title",
      type: "string"
    },
    genres: {
      label: "Genre(s)",
      type: "array",
      join: ", "
    },
    quality: {
      label: "Qualité",
      type: "string"
    },
    lastPart: {
      label: "Dernière Partie",
      type: "string"
    },
    source: {
      label: "Site Source",
      type: "object",
      field: 'title'
    },
    fullUrl: {
      label: "Voir",
      type: "url",
      icon: 'fa fa-eye'
    }
  }
});

/***/ }),

/***/ "./assets/js/page/SearchPage.vue":
/*!***************************************!*\
  !*** ./assets/js/page/SearchPage.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchPage_vue_vue_type_template_id_be01edc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchPage.vue?vue&type=template&id=be01edc2&scoped=true& */ "./assets/js/page/SearchPage.vue?vue&type=template&id=be01edc2&scoped=true&");
/* harmony import */ var _SearchPage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchPage.vue?vue&type=script&lang=ts& */ "./assets/js/page/SearchPage.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _SearchPage_vue_vue_type_style_index_0_id_be01edc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchPage.vue?vue&type=style&index=0&id=be01edc2&lang=scss&scoped=true& */ "./assets/js/page/SearchPage.vue?vue&type=style&index=0&id=be01edc2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SearchPage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchPage_vue_vue_type_template_id_be01edc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchPage_vue_vue_type_template_id_be01edc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "be01edc2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/page/SearchPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/page/SearchPage.vue?vue&type=script&lang=ts&":
/*!****************************************************************!*\
  !*** ./assets/js/page/SearchPage.vue?vue&type=script&lang=ts& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--6-0!../../../node_modules/ts-loader??ref--6-1!../../../node_modules/vue-loader/lib??vue-loader-options!./SearchPage.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/page/SearchPage.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/page/SearchPage.vue?vue&type=style&index=0&id=be01edc2&lang=scss&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./assets/js/page/SearchPage.vue?vue&type=style&index=0&id=be01edc2&lang=scss&scoped=true& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_style_index_0_id_be01edc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader??ref--4-2!../../../node_modules/sass-loader/lib/loader.js??ref--4-3!../../../node_modules/vue-loader/lib??vue-loader-options!./SearchPage.vue?vue&type=style&index=0&id=be01edc2&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/page/SearchPage.vue?vue&type=style&index=0&id=be01edc2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_style_index_0_id_be01edc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_style_index_0_id_be01edc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_style_index_0_id_be01edc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_style_index_0_id_be01edc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_style_index_0_id_be01edc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/page/SearchPage.vue?vue&type=template&id=be01edc2&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./assets/js/page/SearchPage.vue?vue&type=template&id=be01edc2&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_template_id_be01edc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SearchPage.vue?vue&type=template&id=be01edc2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/page/SearchPage.vue?vue&type=template&id=be01edc2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_template_id_be01edc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_template_id_be01edc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/TabbedFilter.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--6-0!./node_modules/ts-loader??ref--6-1!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Block/TabbedFilter.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************************************************************************************************************************************/
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



var TabbedFilter =
/*#__PURE__*/
function (_Vue) {
  _inherits(TabbedFilter, _Vue);

  function TabbedFilter() {
    _classCallCheck(this, TabbedFilter);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabbedFilter).apply(this, arguments));
  }

  _createClass(TabbedFilter, [{
    key: "data",
    value: function data() {
      return {
        filters: []
      };
    }
  }, {
    key: "displayFilter",
    value: function displayFilter(filter) {
      if (this.displayedField !== undefined && filter.value[this.displayedField] !== undefined) {
        return filter.value[this.displayedField];
      }

      return filter.value;
    }
  }, {
    key: "updateFilter",
    value: function updateFilter(event, item) {
      event.preventDefault();
      this.filters.forEach(function (item) {
        item.active = false;
      });
      item.active = true;

      if (item.value === "tous") {
        this.$emit('input', null);
      } else {
        this.$emit('input', item.value);
      }
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.onValuesInputChange();
    }
  }, {
    key: "onValuesInputChange",
    value: function onValuesInputChange() {
      var _this = this;

      this.filters = [];
      this.filters.push({
        value: "tous",
        active: true
      });
      this.valuesInput.forEach(function (value) {
        _this.filters.push({
          value: value,
          active: false
        });
      });
    }
  }]);

  return TabbedFilter;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
  type: Array
})], TabbedFilter.prototype, "valuesInput", void 0);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
  type: String
})], TabbedFilter.prototype, "filter", void 0);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
  type: String
})], TabbedFilter.prototype, "displayedField", void 0);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Watch"])("valuesInput")], TabbedFilter.prototype, "onValuesInputChange", null);

TabbedFilter = __decorate([vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"]], TabbedFilter);
/* harmony default export */ __webpack_exports__["default"] = (TabbedFilter);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Table/FlexTable.vue?vue&type=script&lang=ts&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--6-0!./node_modules/ts-loader??ref--6-1!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Table/FlexTable.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************************************************************************************************************************************************/
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



var FlexTable =
/*#__PURE__*/
function (_Vue) {
  _inherits(FlexTable, _Vue);

  function FlexTable() {
    _classCallCheck(this, FlexTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(FlexTable).apply(this, arguments));
  }

  _createClass(FlexTable, [{
    key: "data",
    value: function data() {
      return {
        items: this.itemsInput,
        config: this.configInput
      };
    }
  }, {
    key: "getTitle",
    value: function getTitle(fieldname) {
      if (this.config.fields[fieldname] === undefined) {
        return "";
      }

      if (this.config.fields[fieldname].label !== undefined) {
        return this.config.fields[fieldname].label;
      }

      return fieldname;
    }
  }, {
    key: "getValue",
    value: function getValue(item, fieldname) {
      if (this.config.fields[fieldname] === undefined) {
        return "";
      } // Processing Object type


      if (this.config.fields[fieldname].type === 'object') {
        return this.getValue(item[fieldname], this.config.fields[fieldname].field);
      } // Processing Image type


      if (this.config.fields[fieldname].type === 'image') {
        return '<img src="' + item[fieldname] + '" alt="' + fieldname + '" />';
      } // Processing Array type


      if (this.config.fields[fieldname].type === 'array') {
        var join = this.config.fields[fieldname].join;

        if (join === undefined) {
          join = ', ';
        }

        return item[fieldname].join(join);
      } // Processing URL type


      if (this.config.fields[fieldname].type === 'url') {
        var label = [];

        if (this.config.fields[fieldname].icon !== undefined) {
          label.push('<i class="' + this.config.fields[fieldname].icon + '"></i>');
        }

        if (this.config.fields[fieldname].text !== undefined) {
          label.push(this.config.fields[fieldname].text);
        }

        if (label.length === 0) {
          label.push(fieldname);
        }

        return '<a href="' + item[fieldname] + '" target="_blank">' + label.join(' ') + '</a>';
      } // Default value


      return item[fieldname];
    }
  }, {
    key: "onItemsInputChange",
    value: function onItemsInputChange() {
      this.items = this.itemsInput;
    }
  }]);

  return FlexTable;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
  type: Array
})], FlexTable.prototype, "itemsInput", void 0);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
  type: Object
})], FlexTable.prototype, "configInput", void 0);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Watch"])('itemsInput')], FlexTable.prototype, "onItemsInputChange", null);

FlexTable = __decorate([vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"]], FlexTable);
/* harmony default export */ __webpack_exports__["default"] = (FlexTable);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/page/SearchPage.vue?vue&type=script&lang=ts&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--6-0!./node_modules/ts-loader??ref--6-1!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/page/SearchPage.vue?vue&type=script&lang=ts& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var _components_Table_FlexTable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Table/FlexTable.vue */ "./assets/js/components/Table/FlexTable.vue");
/* harmony import */ var _components_Block_Loading_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Block/Loading.vue */ "./assets/js/components/Block/Loading.vue");
/* harmony import */ var _config_table_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/table/search */ "./assets/js/config/table/search.ts");
/* harmony import */ var _app_API_ItemAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/API/ItemAPI */ "./assets/js/app/API/ItemAPI.ts");
/* harmony import */ var _components_Block_TabbedFilter_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Block/TabbedFilter.vue */ "./assets/js/components/Block/TabbedFilter.vue");
/* harmony import */ var _app_API_SourceAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/API/SourceAPI */ "./assets/js/app/API/SourceAPI.ts");
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









var HomePage =
/*#__PURE__*/
function (_Vue) {
  _inherits(HomePage, _Vue);

  function HomePage() {
    var _this;

    _classCallCheck(this, HomePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HomePage).apply(this, arguments));
    _this.search = "";
    _this.loading = false;
    _this.itemsInput = [];
    _this.itemsDisplayed = [];
    _this.tableConfig = _config_table_search__WEBPACK_IMPORTED_MODULE_3__["default"];
    return _this;
  }

  _createClass(HomePage, [{
    key: "data",
    value: function data() {
      return {
        search: '',
        filter: null,
        loading: false,
        itemsInput: [],
        itemsDisplayed: [],
        filterValues: [],
        tableConfig: _config_table_search__WEBPACK_IMPORTED_MODULE_3__["default"]
      };
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      _app_API_SourceAPI__WEBPACK_IMPORTED_MODULE_6__["default"].getAll(function (response) {
        _this2.filterValues = _app_API_SourceAPI__WEBPACK_IMPORTED_MODULE_6__["default"].convert(response.data);
        _this2.loading = false;
      });
    }
  }, {
    key: "onSubmitMethod",
    value: function onSubmitMethod() {
      var _this3 = this;

      if (this.search.trim() === "") {
        return false;
      }

      this.loading = true;
      _app_API_ItemAPI__WEBPACK_IMPORTED_MODULE_4__["default"].search(this.search, function (response) {
        _this3.itemsInput = _app_API_ItemAPI__WEBPACK_IMPORTED_MODULE_4__["default"].convert(response.data);

        _this3.onFilterChange();

        _this3.loading = false;
      });
      return false;
    }
  }, {
    key: "onFilterChange",
    value: function onFilterChange() {
      var _this4 = this;

      console.log("onFilterChange");
      this.loading = true;
      this.itemsDisplayed = this.itemsInput.filter(function (item) {
        if (_this4.filter === null) {
          return true;
        }

        return item.source.id === _this4.filter.id;
      });
      this.loading = false;
    }
  }]);

  return HomePage;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Watch"])('filter')], HomePage.prototype, "onFilterChange", null);

HomePage = __decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
  components: {
    TabbedFilter: _components_Block_TabbedFilter_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Loading: _components_Block_Loading_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    FlexTable: _components_Table_FlexTable_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
})], HomePage);
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/TabbedFilter.vue?vue&type=style&index=0&id=d1aabab2&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Block/TabbedFilter.vue?vue&type=style&index=0&id=d1aabab2&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Table/FlexTable.vue?vue&type=style&index=0&id=30b94e23&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Table/FlexTable.vue?vue&type=style&index=0&id=30b94e23&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/page/SearchPage.vue?vue&type=style&index=0&id=be01edc2&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/page/SearchPage.vue?vue&type=style&index=0&id=be01edc2&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/TabbedFilter.vue?vue&type=template&id=d1aabab2&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Block/TabbedFilter.vue?vue&type=template&id=d1aabab2&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "tab-container" }, [
    _c(
      "ul",
      { staticClass: "menu" },
      _vm._l(_vm.filters, function(filter) {
        return _c("li", { class: { active: filter.active } }, [
          _c(
            "a",
            {
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  return _vm.updateFilter($event, filter)
                }
              }
            },
            [_vm._v(_vm._s(_vm.displayFilter(filter)))]
          )
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Table/FlexTable.vue?vue&type=template&id=30b94e23&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Table/FlexTable.vue?vue&type=template&id=30b94e23&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "table-list" },
    [
      _c(
        "div",
        { staticClass: "row row-header" },
        _vm._l(_vm.config.fields, function(c, f) {
          return _c("span", {
            class: c.class,
            domProps: { innerHTML: _vm._s(_vm.getTitle(f)) }
          })
        }),
        0
      ),
      _vm._v(" "),
      _vm._l(_vm.items, function(item) {
        return [
          _c("div", { staticClass: "spacer" }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.config.fields, function(c, f) {
              return _c("span", { class: c.class }, [
                _c("span", {
                  domProps: { innerHTML: _vm._s(_vm.getValue(item, f)) }
                })
              ])
            }),
            0
          )
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/page/SearchPage.vue?vue&type=template&id=be01edc2&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/page/SearchPage.vue?vue&type=template&id=be01edc2&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "grid-container" },
    [
      _c(
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
          _c("div", { staticClass: "search-form" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search,
                  expression: "search"
                }
              ],
              attrs: {
                type: "text",
                placeholder: "Rechercher ...",
                spellcheck: "false",
                name: "search"
              },
              domProps: { value: _vm.search },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.search = $event.target.value
                }
              }
            })
          ])
        ]
      ),
      _vm._v(" "),
      !_vm.loading
        ? _c("TabbedFilter", {
            attrs: { valuesInput: _vm.filterValues, displayedField: "title" },
            model: {
              value: _vm.filter,
              callback: function($$v) {
                _vm.filter = $$v
              },
              expression: "filter"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.loading
        ? _c("Loading", { attrs: { displayed: _vm.loading, fixed: false } })
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading && _vm.itemsDisplayed.length > 0
        ? _c("FlexTable", {
            attrs: {
              itemsInput: _vm.itemsDisplayed,
              configInput: _vm.tableConfig
            }
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading && _vm.itemsDisplayed.length === 0
        ? _c("div", { staticClass: "callout warning" }, [
            _c("b", [
              _vm._v(
                "Aucun résultat, veuillez renseigner une valeur valide dans le champ de recherche"
              )
            ])
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0FQSS9JdGVtQVBJLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvQVBJL1NvdXJjZUFQSS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0VudGl0eS9JdGVtLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvRW50aXR5L1NvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9UYWJiZWRGaWx0ZXIudnVlPzZjOTMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svVGFiYmVkRmlsdGVyLnZ1ZT9lMTljIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RhYmJlZEZpbHRlci52dWU/MWJlZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9UYWJiZWRGaWx0ZXIudnVlPzYzZTQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVGFibGUvRmxleFRhYmxlLnZ1ZT9jMGU0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RhYmxlL0ZsZXhUYWJsZS52dWU/YjVkOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9UYWJsZS9GbGV4VGFibGUudnVlPzA1Y2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVGFibGUvRmxleFRhYmxlLnZ1ZT9kZTRiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb25maWcvdGFibGUvc2VhcmNoLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL1NlYXJjaFBhZ2UudnVlP2M1NjIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2UvU2VhcmNoUGFnZS52dWU/Y2Y3NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZS9TZWFyY2hQYWdlLnZ1ZT9jZDVjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL1NlYXJjaFBhZ2UudnVlP2JhZTQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svVGFiYmVkRmlsdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9UYWJsZS9GbGV4VGFibGUudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL1NlYXJjaFBhZ2UudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RhYmJlZEZpbHRlci52dWU/NWNlMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9UYWJsZS9GbGV4VGFibGUudnVlP2M2N2EiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2UvU2VhcmNoUGFnZS52dWU/OGRhOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9UYWJiZWRGaWx0ZXIudnVlP2YxY2UiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVGFibGUvRmxleFRhYmxlLnZ1ZT9mNWM2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL1NlYXJjaFBhZ2UudnVlPzI2YTkiXSwibmFtZXMiOlsiSXRlbUFQSSIsInEiLCJjYWxsYmFjayIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInRoZW4iLCJyZXRvdXIiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJJdGVtIiwiU291cmNlQVBJIiwiU291cmNlIiwiaWQiLCJ0aXRsZSIsInF1YWxpdHkiLCJnZW5yZXMiLCJsYXN0UGFydCIsImZ1bGxVcmwiLCJzb3VyY2UiLCJiYXNlVXJsIiwiZmllbGRzIiwibGFiZWwiLCJ0eXBlIiwiam9pbiIsImZpZWxkIiwiaWNvbiIsIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZCIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIlRhYmJlZEZpbHRlciIsImZpbHRlcnMiLCJmaWx0ZXIiLCJkaXNwbGF5ZWRGaWVsZCIsInVuZGVmaW5lZCIsInZhbHVlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFjdGl2ZSIsIiRlbWl0Iiwib25WYWx1ZXNJbnB1dENoYW5nZSIsInZhbHVlc0lucHV0IiwiVnVlIiwiUHJvcCIsIkFycmF5IiwicHJvdG90eXBlIiwiU3RyaW5nIiwiV2F0Y2giLCJDb21wb25lbnQiLCJGbGV4VGFibGUiLCJpdGVtcyIsIml0ZW1zSW5wdXQiLCJjb25maWciLCJjb25maWdJbnB1dCIsImZpZWxkbmFtZSIsImdldFZhbHVlIiwidGV4dCIsIkhvbWVQYWdlIiwic2VhcmNoIiwibG9hZGluZyIsIml0ZW1zRGlzcGxheWVkIiwidGFibGVDb25maWciLCJmaWx0ZXJWYWx1ZXMiLCJnZXRBbGwiLCJyZXNwb25zZSIsImNvbnZlcnQiLCJ0cmltIiwib25GaWx0ZXJDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50cyIsIkxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBQ3FCQSxPOzs7Ozs7Ozs7O0FBQ2pCOzs7OzsyQkFLY0MsQyxFQUFHQyxRLEVBQVU7QUFDdkJDLGtEQUFLLENBQUM7QUFDRkMsY0FBTSxFQUFFLFFBRE47QUFFRkMsV0FBRyxFQUFFLGtCQUZIO0FBR0ZDLFlBQUksRUFBRTtBQUNGTCxXQUFDLEVBQUVBO0FBREQ7QUFISixPQUFELENBQUwsQ0FNR00sSUFOSCxDQU1RTCxRQU5SO0FBT0g7QUFDRDs7Ozs7Ozs7Ozs0QkFPZUksSSxFQUFNO0FBQ2pCLFVBQUlFLE1BQU0sR0FBRyxFQUFiO0FBQ0FGLFVBQUksQ0FBQ0csT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUNuQkYsY0FBTSxDQUFDRyxJQUFQLENBQVks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QUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlDQUFpQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9FbnRpdHkvSXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbUFQSSB7XG4gICAgLyoqXG4gICAgICogU2VhcmNoIG9uIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0gcVxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB0aGUgY29kZSB0byBiZSBleGVjdXRlZCBvbiBzdWNjZXNzXG4gICAgICovXG4gICAgc3RhdGljIHNlYXJjaChxLCBjYWxsYmFjaykge1xuICAgICAgICBheGlvcyh7XG4gICAgICAgICAgICBtZXRob2Q6ICdTRUFSQ0gnLFxuICAgICAgICAgICAgdXJsOiAnL2FwaS9pdGVtL3NlYXJjaCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgcTogcSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgaW5wdXQgYXJyYXkgYW5kIHJldHVybiB0aGUgbGlzdCBvZiBvYmplY3RzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqXG4gICAgICogQHJldHVybiBJdGVtW11cbiAgICAgKi9cbiAgICBzdGF0aWMgY29udmVydChkYXRhKSB7XG4gICAgICAgIGxldCByZXRvdXIgPSBbXTtcbiAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXRvdXIucHVzaChuZXcgSXRlbShpdGVtKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV0b3VyO1xuICAgIH1cbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgU291cmNlIGZyb20gXCIuLi9FbnRpdHkvU291cmNlXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VyY2VBUEkge1xuICAgIC8qKlxuICAgICAqIFNlYXJjaCBvbiB0aGUgc2VydmVyXG4gICAgICogQHBhcmFtIHFcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGNvZGUgdG8gYmUgZXhlY3V0ZWQgb24gc3VjY2Vzc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRBbGwoY2FsbGJhY2spIHtcbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHVybDogJy9hcGkvc291cmNlL2FsbCcsXG4gICAgICAgIH0pLnRoZW4oY2FsbGJhY2spO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGlucHV0IGFycmF5IGFuZCByZXR1cm4gdGhlIGxpc3Qgb2Ygb2JqZWN0c1xuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKlxuICAgICAqIEByZXR1cm4gU291cmNlW11cbiAgICAgKi9cbiAgICBzdGF0aWMgY29udmVydChkYXRhKSB7XG4gICAgICAgIGxldCByZXRvdXIgPSBbXTtcbiAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXRvdXIucHVzaChuZXcgU291cmNlKGl0ZW0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXRvdXI7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNvdXJjZSBmcm9tIFwiLi9Tb3VyY2VcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgICAgICB0aGlzLnF1YWxpdHkgPSBkYXRhLnF1YWxpdHk7XG4gICAgICAgIHRoaXMuZ2VucmVzID0gZGF0YS5nZW5yZXM7XG4gICAgICAgIHRoaXMubGFzdFBhcnQgPSBkYXRhLmxhc3RQYXJ0O1xuICAgICAgICB0aGlzLmZ1bGxVcmwgPSBkYXRhLmZ1bGxVcmw7XG4gICAgICAgIHRoaXMuc291cmNlID0gbmV3IFNvdXJjZShkYXRhLnNvdXJjZSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291cmNlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gZGF0YS5iYXNlVXJsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGFiYmVkRmlsdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMWFhYmFiMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UYWJiZWRGaWx0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UYWJiZWRGaWx0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1RhYmJlZEZpbHRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kMWFhYmFiMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImQxYWFiYWIyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Nydi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDFhYWJhYjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDFhYWJhYjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RhYmJlZEZpbHRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDFhYWJhYjImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZDFhYWJhYjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RhYmJlZEZpbHRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmJlZEZpbHRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFiYmVkRmlsdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFiYmVkRmlsdGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQxYWFiYWIyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJiZWRGaWx0ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDFhYWJhYjImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmJlZEZpbHRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDFhYWJhYjImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZsZXhUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzBiOTRlMjMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmxleFRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmxleFRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9GbGV4VGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzBiOTRlMjMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzMGI5NGUyM1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9zcnYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMwYjk0ZTIzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMwYjk0ZTIzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GbGV4VGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwYjk0ZTIzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMwYjk0ZTIzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9UYWJsZS9GbGV4VGFibGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GbGV4VGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZsZXhUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZsZXhUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMGI5NGUyMyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmxleFRhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMwYjk0ZTIzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GbGV4VGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwYjk0ZTIzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGZpZWxkczoge1xuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgbGFiZWw6IFwiVGl0bGVcIixcbiAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgZ2VucmVzOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJHZW5yZShzKVwiLFxuICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgam9pbjogXCIsIFwiLFxuICAgICAgICB9LFxuICAgICAgICBxdWFsaXR5OiB7XG4gICAgICAgICAgICBsYWJlbDogXCJRdWFsaXTDqVwiLFxuICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBsYXN0UGFydDoge1xuICAgICAgICAgICAgbGFiZWw6IFwiRGVybmnDqHJlIFBhcnRpZVwiLFxuICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIlNpdGUgU291cmNlXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgZmllbGQ6ICd0aXRsZSdcbiAgICAgICAgfSxcbiAgICAgICAgZnVsbFVybDoge1xuICAgICAgICAgICAgbGFiZWw6IFwiVm9pclwiLFxuICAgICAgICAgICAgdHlwZTogXCJ1cmxcIixcbiAgICAgICAgICAgIGljb246ICdmYSBmYS1leWUnXG4gICAgICAgIH0sXG4gICAgfVxufTtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2VhcmNoUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmUwMWVkYzImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2VhcmNoUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NlYXJjaFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NlYXJjaFBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YmUwMWVkYzImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJiZTAxZWRjMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9zcnYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2JlMDFlZGMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2JlMDFlZGMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZWFyY2hQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZTAxZWRjMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiZTAxZWRjMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL3BhZ2UvU2VhcmNoUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlYXJjaFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlYXJjaFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWFyY2hQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWJlMDFlZGMyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWFyY2hQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWJlMDFlZGMyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWFyY2hQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZTAxZWRjMiZzY29wZWQ9dHJ1ZSZcIiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IENvbXBvbmVudCwgUHJvcCwgVnVlLCBXYXRjaCB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5sZXQgVGFiYmVkRmlsdGVyID0gY2xhc3MgVGFiYmVkRmlsdGVyIGV4dGVuZHMgVnVlIHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlsdGVyczogW10sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGRpc3BsYXlGaWx0ZXIoZmlsdGVyKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXllZEZpZWxkICE9PSB1bmRlZmluZWQgJiYgZmlsdGVyLnZhbHVlW3RoaXMuZGlzcGxheWVkRmllbGRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIudmFsdWVbdGhpcy5kaXNwbGF5ZWRGaWVsZF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbHRlci52YWx1ZTtcbiAgICB9XG4gICAgdXBkYXRlRmlsdGVyKGV2ZW50LCBpdGVtKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZmlsdGVycy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT09IFwidG91c1wiKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBpdGVtLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLm9uVmFsdWVzSW5wdXRDaGFuZ2UoKTtcbiAgICB9XG4gICAgb25WYWx1ZXNJbnB1dENoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gW107XG4gICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAgIHZhbHVlOiBcInRvdXNcIixcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmFsdWVzSW5wdXQuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBBcnJheSB9KVxuXSwgVGFiYmVkRmlsdGVyLnByb3RvdHlwZSwgXCJ2YWx1ZXNJbnB1dFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IHR5cGU6IFN0cmluZyB9KVxuXSwgVGFiYmVkRmlsdGVyLnByb3RvdHlwZSwgXCJmaWx0ZXJcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBTdHJpbmcgfSlcbl0sIFRhYmJlZEZpbHRlci5wcm90b3R5cGUsIFwiZGlzcGxheWVkRmllbGRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIFdhdGNoKFwidmFsdWVzSW5wdXRcIilcbl0sIFRhYmJlZEZpbHRlci5wcm90b3R5cGUsIFwib25WYWx1ZXNJbnB1dENoYW5nZVwiLCBudWxsKTtcblRhYmJlZEZpbHRlciA9IF9fZGVjb3JhdGUoW1xuICAgIENvbXBvbmVudFxuXSwgVGFiYmVkRmlsdGVyKTtcbmV4cG9ydCBkZWZhdWx0IFRhYmJlZEZpbHRlcjtcbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IENvbXBvbmVudCwgUHJvcCwgVnVlLCBXYXRjaCB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5sZXQgRmxleFRhYmxlID0gY2xhc3MgRmxleFRhYmxlIGV4dGVuZHMgVnVlIHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbXM6IHRoaXMuaXRlbXNJbnB1dCxcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWdJbnB1dCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0VGl0bGUoZmllbGRuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5maWVsZHNbZmllbGRuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25maWcuZmllbGRzW2ZpZWxkbmFtZV0ubGFiZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmZpZWxkc1tmaWVsZG5hbWVdLmxhYmVsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZG5hbWU7XG4gICAgfVxuICAgIGdldFZhbHVlKGl0ZW0sIGZpZWxkbmFtZSkge1xuICAgICAgICBpZiAodGhpcy5jb25maWcuZmllbGRzW2ZpZWxkbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvY2Vzc2luZyBPYmplY3QgdHlwZVxuICAgICAgICBpZiAodGhpcy5jb25maWcuZmllbGRzW2ZpZWxkbmFtZV0udHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKGl0ZW1bZmllbGRuYW1lXSwgdGhpcy5jb25maWcuZmllbGRzW2ZpZWxkbmFtZV0uZmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByb2Nlc3NpbmcgSW1hZ2UgdHlwZVxuICAgICAgICBpZiAodGhpcy5jb25maWcuZmllbGRzW2ZpZWxkbmFtZV0udHlwZSA9PT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cIicgKyBpdGVtW2ZpZWxkbmFtZV0gKyAnXCIgYWx0PVwiJyArIGZpZWxkbmFtZSArICdcIiAvPic7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvY2Vzc2luZyBBcnJheSB0eXBlXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5maWVsZHNbZmllbGRuYW1lXS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICBsZXQgam9pbiA9IHRoaXMuY29uZmlnLmZpZWxkc1tmaWVsZG5hbWVdLmpvaW47XG4gICAgICAgICAgICBpZiAoam9pbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgam9pbiA9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbVtmaWVsZG5hbWVdLmpvaW4oam9pbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvY2Vzc2luZyBVUkwgdHlwZVxuICAgICAgICBpZiAodGhpcy5jb25maWcuZmllbGRzW2ZpZWxkbmFtZV0udHlwZSA9PT0gJ3VybCcpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IFtdO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZpZWxkc1tmaWVsZG5hbWVdLmljb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxhYmVsLnB1c2goJzxpIGNsYXNzPVwiJyArIHRoaXMuY29uZmlnLmZpZWxkc1tmaWVsZG5hbWVdLmljb24gKyAnXCI+PC9pPicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZpZWxkc1tmaWVsZG5hbWVdLnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxhYmVsLnB1c2godGhpcy5jb25maWcuZmllbGRzW2ZpZWxkbmFtZV0udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGFiZWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwucHVzaChmaWVsZG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICc8YSBocmVmPVwiJyArIGl0ZW1bZmllbGRuYW1lXSArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj4nICsgbGFiZWwuam9pbignICcpICsgJzwvYT4nO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlZmF1bHQgdmFsdWVcbiAgICAgICAgcmV0dXJuIGl0ZW1bZmllbGRuYW1lXTtcbiAgICB9XG4gICAgb25JdGVtc0lucHV0Q2hhbmdlKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtc0lucHV0O1xuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBQcm9wKHsgdHlwZTogQXJyYXkgfSlcbl0sIEZsZXhUYWJsZS5wcm90b3R5cGUsIFwiaXRlbXNJbnB1dFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IHR5cGU6IE9iamVjdCB9KVxuXSwgRmxleFRhYmxlLnByb3RvdHlwZSwgXCJjb25maWdJbnB1dFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgV2F0Y2goJ2l0ZW1zSW5wdXQnKVxuXSwgRmxleFRhYmxlLnByb3RvdHlwZSwgXCJvbkl0ZW1zSW5wdXRDaGFuZ2VcIiwgbnVsbCk7XG5GbGV4VGFibGUgPSBfX2RlY29yYXRlKFtcbiAgICBDb21wb25lbnRcbl0sIEZsZXhUYWJsZSk7XG5leHBvcnQgZGVmYXVsdCBGbGV4VGFibGU7XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDb21wb25lbnQsIFZ1ZSwgV2F0Y2ggfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IEZsZXhUYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9UYWJsZS9GbGV4VGFibGUudnVlXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9CbG9jay9Mb2FkaW5nLnZ1ZVwiO1xuaW1wb3J0IHRhYmxlQ29uZmlnIGZyb20gXCIuLi9jb25maWcvdGFibGUvc2VhcmNoXCI7XG5pbXBvcnQgSXRlbUFQSSBmcm9tIFwiLi4vYXBwL0FQSS9JdGVtQVBJXCI7XG5pbXBvcnQgVGFiYmVkRmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Jsb2NrL1RhYmJlZEZpbHRlci52dWVcIjtcbmltcG9ydCBTb3VyY2VBUEkgZnJvbSBcIi4uL2FwcC9BUEkvU291cmNlQVBJXCI7XG5sZXQgSG9tZVBhZ2UgPSBjbGFzcyBIb21lUGFnZSBleHRlbmRzIFZ1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gXCJcIjtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXRlbXNJbnB1dCA9IFtdO1xuICAgICAgICB0aGlzLml0ZW1zRGlzcGxheWVkID0gW107XG4gICAgICAgIHRoaXMudGFibGVDb25maWcgPSB0YWJsZUNvbmZpZztcbiAgICB9XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlYXJjaDogJycsXG4gICAgICAgICAgICBmaWx0ZXI6IG51bGwsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGl0ZW1zSW5wdXQ6IFtdLFxuICAgICAgICAgICAgaXRlbXNEaXNwbGF5ZWQ6IFtdLFxuICAgICAgICAgICAgZmlsdGVyVmFsdWVzOiBbXSxcbiAgICAgICAgICAgIHRhYmxlQ29uZmlnOiB0YWJsZUNvbmZpZyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgU291cmNlQVBJLmdldEFsbCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyVmFsdWVzID0gU291cmNlQVBJLmNvbnZlcnQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uU3VibWl0TWV0aG9kKCkge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2gudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgSXRlbUFQSS5zZWFyY2godGhpcy5zZWFyY2gsIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0lucHV0ID0gSXRlbUFQSS5jb252ZXJ0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5vbkZpbHRlckNoYW5nZSgpO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9uRmlsdGVyQ2hhbmdlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uRmlsdGVyQ2hhbmdlXCIpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLml0ZW1zRGlzcGxheWVkID0gdGhpcy5pdGVtc0lucHV0LmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uc291cmNlLmlkID09PSB0aGlzLmZpbHRlci5pZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBXYXRjaCgnZmlsdGVyJylcbl0sIEhvbWVQYWdlLnByb3RvdHlwZSwgXCJvbkZpbHRlckNoYW5nZVwiLCBudWxsKTtcbkhvbWVQYWdlID0gX19kZWNvcmF0ZShbXG4gICAgQ29tcG9uZW50KHtcbiAgICAgICAgY29tcG9uZW50czogeyBUYWJiZWRGaWx0ZXIsIExvYWRpbmcsIEZsZXhUYWJsZSB9XG4gICAgfSlcbl0sIEhvbWVQYWdlKTtcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYi1jb250YWluZXJcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcInVsXCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcIm1lbnVcIiB9LFxuICAgICAgX3ZtLl9sKF92bS5maWx0ZXJzLCBmdW5jdGlvbihmaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgeyBjbGFzczogeyBhY3RpdmU6IGZpbHRlci5hY3RpdmUgfSB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZUZpbHRlcigkZXZlbnQsIGZpbHRlcilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZGlzcGxheUZpbHRlcihmaWx0ZXIpKSldXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgfSksXG4gICAgICAwXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWxpc3RcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyByb3ctaGVhZGVyXCIgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5jb25maWcuZmllbGRzLCBmdW5jdGlvbihjLCBmKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICBjbGFzczogYy5jbGFzcyxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5nZXRUaXRsZShmKSkgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0uaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNwYWNlclwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5jb25maWcuZmllbGRzLCBmdW5jdGlvbihjLCBmKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBjbGFzczogYy5jbGFzcyB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5nZXRWYWx1ZShpdGVtLCBmKSkgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJncmlkLWNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZm9ybVwiLFxuICAgICAgICB7XG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHJldHVybiBfdm0ub25TdWJtaXRNZXRob2QoJGV2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VhcmNoLWZvcm1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlJlY2hlcmNoZXIgLi4uXCIsXG4gICAgICAgICAgICAgICAgc3BlbGxjaGVjazogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2ggfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0ubG9hZGluZ1xuICAgICAgICA/IF9jKFwiVGFiYmVkRmlsdGVyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlc0lucHV0OiBfdm0uZmlsdGVyVmFsdWVzLCBkaXNwbGF5ZWRGaWVsZDogXCJ0aXRsZVwiIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbHRlcixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5maWx0ZXIgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWx0ZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgPyBfYyhcIkxvYWRpbmdcIiwgeyBhdHRyczogeyBkaXNwbGF5ZWQ6IF92bS5sb2FkaW5nLCBmaXhlZDogZmFsc2UgfSB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0ubG9hZGluZyAmJiBfdm0uaXRlbXNEaXNwbGF5ZWQubGVuZ3RoID4gMFxuICAgICAgICA/IF9jKFwiRmxleFRhYmxlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGl0ZW1zSW5wdXQ6IF92bS5pdGVtc0Rpc3BsYXllZCxcbiAgICAgICAgICAgICAgY29uZmlnSW5wdXQ6IF92bS50YWJsZUNvbmZpZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgIV92bS5sb2FkaW5nICYmIF92bS5pdGVtc0Rpc3BsYXllZC5sZW5ndGggPT09IDBcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhbGxvdXQgd2FybmluZ1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiYlwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIkF1Y3VuIHLDqXN1bHRhdCwgdmV1aWxsZXogcmVuc2VpZ25lciB1bmUgdmFsZXVyIHZhbGlkZSBkYW5zIGxlIGNoYW1wIGRlIHJlY2hlcmNoZVwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==