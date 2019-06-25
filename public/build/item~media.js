(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item~media"],{

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
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(this.baseUrl + 'search', {
        q: q
      }).then(function (response) {
        var items = [];
        response.data.forEach(function (item) {
          items.push(_this.convert(item));
        });
        callback(items);
      });
    }
    /**
     * Search on the server
     * @param id
     * @param callback the code to be executed on success
     */

  }, {
    key: "get",
    value: function get(id, callback) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(this.baseUrl + 'retrieve', {
        id: id
      }).then(function (response) {
        var item = _this2.convert(response.data);

        callback(item);
      });
    }
    /**
     * Search on the server
     * @param mediaId
     * @param callback the code to be executed on success
     */

  }, {
    key: "getForMedia",
    value: function getForMedia(mediaId, callback) {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(this.baseUrl + 'retrieve', {
        media: mediaId
      }).then(function (response) {
        var items = [];
        response.data.forEach(function (item) {
          items.push(_this3.convert(item));
        });
        callback(items);
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
      return new _Entity_Item__WEBPACK_IMPORTED_MODULE_1__["default"](data);
    }
  }]);

  return ItemAPI;
}();


ItemAPI.baseUrl = '/api/item/';

/***/ }),

/***/ "./assets/js/app/Component/Item/Card.vue":
/*!***********************************************!*\
  !*** ./assets/js/app/Component/Item/Card.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card_vue_vue_type_template_id_4a118794_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=4a118794&scoped=true& */ "./assets/js/app/Component/Item/Card.vue?vue&type=template&id=4a118794&scoped=true&");
/* harmony import */ var _Card_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=ts& */ "./assets/js/app/Component/Item/Card.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _Card_vue_vue_type_style_index_0_id_4a118794_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.vue?vue&type=style&index=0&id=4a118794&lang=scss&scoped=true& */ "./assets/js/app/Component/Item/Card.vue?vue&type=style&index=0&id=4a118794&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Card_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Card_vue_vue_type_template_id_4a118794_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Card_vue_vue_type_template_id_4a118794_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4a118794",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/app/Component/Item/Card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/app/Component/Item/Card.vue?vue&type=script&lang=ts&":
/*!************************************************************************!*\
  !*** ./assets/js/app/Component/Item/Card.vue?vue&type=script&lang=ts& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--6-0!../../../../../node_modules/ts-loader??ref--6-1!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/app/Component/Item/Card.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/app/Component/Item/Card.vue?vue&type=style&index=0&id=4a118794&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./assets/js/app/Component/Item/Card.vue?vue&type=style&index=0&id=4a118794&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_4a118794_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--4-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--4-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=style&index=0&id=4a118794&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/app/Component/Item/Card.vue?vue&type=style&index=0&id=4a118794&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_4a118794_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_4a118794_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_4a118794_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_4a118794_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_4a118794_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/app/Component/Item/Card.vue?vue&type=template&id=4a118794&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./assets/js/app/Component/Item/Card.vue?vue&type=template&id=4a118794&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_4a118794_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=template&id=4a118794&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/app/Component/Item/Card.vue?vue&type=template&id=4a118794&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_4a118794_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_4a118794_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/app/Component/Media/Header.vue":
/*!**************************************************!*\
  !*** ./assets/js/app/Component/Media/Header.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_644a7980_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=644a7980&scoped=true& */ "./assets/js/app/Component/Media/Header.vue?vue&type=template&id=644a7980&scoped=true&");
/* harmony import */ var _Header_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=ts& */ "./assets/js/app/Component/Media/Header.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _Header_vue_vue_type_style_index_0_id_644a7980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.vue?vue&type=style&index=0&id=644a7980&lang=scss&scoped=true& */ "./assets/js/app/Component/Media/Header.vue?vue&type=style&index=0&id=644a7980&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Header_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_644a7980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_644a7980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "644a7980",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/app/Component/Media/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/app/Component/Media/Header.vue?vue&type=script&lang=ts&":
/*!***************************************************************************!*\
  !*** ./assets/js/app/Component/Media/Header.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--6-0!../../../../../node_modules/ts-loader??ref--6-1!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/app/Component/Media/Header.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/app/Component/Media/Header.vue?vue&type=style&index=0&id=644a7980&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./assets/js/app/Component/Media/Header.vue?vue&type=style&index=0&id=644a7980&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_644a7980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--4-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader??ref--4-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--4-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&id=644a7980&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/app/Component/Media/Header.vue?vue&type=style&index=0&id=644a7980&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_644a7980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_644a7980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_644a7980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_644a7980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_644a7980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/app/Component/Media/Header.vue?vue&type=template&id=644a7980&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./assets/js/app/Component/Media/Header.vue?vue&type=template&id=644a7980&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_644a7980_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=644a7980&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/app/Component/Media/Header.vue?vue&type=template&id=644a7980&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_644a7980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_644a7980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media */ "./assets/js/app/Entity/Media.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Item = function Item(data) {
  _classCallCheck(this, Item);

  this.id = data.id;
  this.title = data.title;
  this.category = data.category;
  this.quality = data.quality;
  this.language = data.language;
  this.genres = data.genres;
  this.season = data.season;
  this.lastPart = data.lastPart;
  this.fullUrl = data.fullUrl;
  this.source = new _Source__WEBPACK_IMPORTED_MODULE_0__["default"](data.source);

  if (data.media !== null) {
    this.media = new _Media__WEBPACK_IMPORTED_MODULE_1__["default"](data.media);
  } else {
    this.media = data.media;
  }
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/app/Component/Item/Card.vue?vue&type=script&lang=ts&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--6-0!./node_modules/ts-loader??ref--6-1!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/app/Component/Item/Card.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var _Entity_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Entity/Item */ "./assets/js/app/Entity/Item.ts");
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




var Card =
/*#__PURE__*/
function (_Vue) {
  _inherits(Card, _Vue);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, _getPrototypeOf(Card).apply(this, arguments));
  }

  return Card;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
  type: _Entity_Item__WEBPACK_IMPORTED_MODULE_1__["default"]
})], Card.prototype, "item", void 0);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
  type: Boolean,
  default: true
})], Card.prototype, "title", void 0);

Card = __decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
  components: {}
})], Card);
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/app/Component/Media/Header.vue?vue&type=script&lang=ts&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--6-0!./node_modules/ts-loader??ref--6-1!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/app/Component/Media/Header.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var vuex_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-class */ "./node_modules/vuex-class/lib/index.js");
/* harmony import */ var _Entity_Media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Entity/Media */ "./assets/js/app/Entity/Media.ts");
/* harmony import */ var _API_MediaSubscriptionAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../API/MediaSubscriptionAPI */ "./assets/js/app/API/MediaSubscriptionAPI.ts");
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





var namespace = 'security';

var Header =
/*#__PURE__*/
function (_Vue) {
  _inherits(Header, _Vue);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "data",
    value: function data() {
      return {
        subscription: undefined,
        subscriptionLoading: false
      };
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this = this;

      if (this.isAuthenticated !== null) {
        this.subscriptionLoading = true;
        _API_MediaSubscriptionAPI__WEBPACK_IMPORTED_MODULE_3__["default"].getForMedia(this.media.id, function (subscription) {
          _this.subscription = subscription;
          _this.subscriptionLoading = false;
        });
      }
    }
  }, {
    key: "addSubscription",
    value: function addSubscription() {
      var _this2 = this;

      this.subscriptionLoading = true;
      _API_MediaSubscriptionAPI__WEBPACK_IMPORTED_MODULE_3__["default"].add(this.media.id, function (subscription) {
        _this2.subscription = subscription;
        _this2.subscriptionLoading = false;
      });
      return false;
    }
  }, {
    key: "removeSubscription",
    value: function removeSubscription() {
      var _this3 = this;

      this.subscriptionLoading = true;
      _API_MediaSubscriptionAPI__WEBPACK_IMPORTED_MODULE_3__["default"].remove(this.media.id, function (subscription) {
        _this3.subscription = subscription;
        _this3.subscriptionLoading = false;
      });
      return false;
    }
  }, {
    key: "allowSubscription",
    value: function allowSubscription() {
      return this.isAuthenticated && ['tv', 'animes'].indexOf(this.media.category) !== -1;
    }
  }]);

  return Header;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
  type: _Entity_Media__WEBPACK_IMPORTED_MODULE_2__["default"]
})], Header.prototype, "media", void 0);

__decorate([Object(vuex_class__WEBPACK_IMPORTED_MODULE_1__["State"])('security')], Header.prototype, "securityState", void 0);

__decorate([Object(vuex_class__WEBPACK_IMPORTED_MODULE_1__["Getter"])('isAuthenticated', {
  namespace: namespace
})], Header.prototype, "isAuthenticated", void 0);

Header = __decorate([vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"]], Header);
/* harmony default export */ __webpack_exports__["default"] = (Header);

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
        active: this.initialFilter === null
      });
      this.valuesInput.forEach(function (value) {
        _this.filters.push({
          value: value,
          active: _this.initialFilter === value
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
  default: null
})], TabbedFilter.prototype, "initialFilter", void 0);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
  type: String
})], TabbedFilter.prototype, "displayedField", void 0);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Watch"])("valuesInput")], TabbedFilter.prototype, "onValuesInputChange", null);

TabbedFilter = __decorate([vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"]], TabbedFilter);
/* harmony default export */ __webpack_exports__["default"] = (TabbedFilter);

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/app/Component/Item/Card.vue?vue&type=style&index=0&id=4a118794&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/app/Component/Item/Card.vue?vue&type=style&index=0&id=4a118794&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/app/Component/Media/Header.vue?vue&type=style&index=0&id=644a7980&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/app/Component/Media/Header.vue?vue&type=style&index=0&id=644a7980&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Block/TabbedFilter.vue?vue&type=style&index=0&id=d1aabab2&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Block/TabbedFilter.vue?vue&type=style&index=0&id=d1aabab2&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/app/Component/Item/Card.vue?vue&type=template&id=4a118794&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/app/Component/Item/Card.vue?vue&type=template&id=4a118794&scoped=true& ***!
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
  return _c(
    "v-card",
    { attrs: { light: "" } },
    [
      _c(
        "v-toolbar",
        [
          _c("v-toolbar-title", [
            _vm._v("#" + _vm._s(_vm.item.id) + " - " + _vm._s(_vm.item.title))
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-toolbar-title", { staticClass: "hidden-sm-and-down faded" }, [
            _vm._v(_vm._s(_vm.item.source.title))
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-sheet",
        [
          _c(
            "v-layout",
            { attrs: { wrap: "" } },
            [
              _c("div", { staticClass: "flex lg3 md6" }, [
                _c("label", [_vm._v("Lien d'origine")]),
                _vm._v(" "),
                _c("span", { staticClass: "value" }, [
                  _c(
                    "a",
                    { attrs: { href: _vm.item.fullUrl, target: "_blank" } },
                    [_vm._v(_vm._s(_vm.item.source.title))]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex lg3 md6" }, [
                _c("label", [_vm._v("Genres")]),
                _vm._v(" "),
                _c("span", { staticClass: "value" }, [
                  _vm._v(_vm._s(_vm.item.genres.join(", ")))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex lg3 md6" }, [
                _c("label", [_vm._v("Qualité")]),
                _vm._v(" "),
                _c("span", { staticClass: "value" }, [
                  _vm._v(_vm._s(_vm.item.quality))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex lg3 md6" }, [
                _c("label", [_vm._v("Language")]),
                _vm._v(" "),
                _c("span", { staticClass: "value" }, [
                  _vm._v(_vm._s(_vm.item.language))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex lg3 md6" }, [
                _c("label", [_vm._v("Catégorie")]),
                _vm._v(" "),
                _c("span", { staticClass: "value" }, [
                  _vm._v(_vm._s(_vm.item.category))
                ])
              ]),
              _vm._v(" "),
              _vm.item.category === "tv" || _vm.item.category === "animes"
                ? [
                    _c("div", { staticClass: "flex lg3 md6" }, [
                      _c("label", [_vm._v("Saison")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "value" }, [
                        _vm._v(_vm._s(_vm.item.season))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex lg3 md6" }, [
                      _c("label", [_vm._v("Dernier Episode")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "value" }, [
                        _vm._v(_vm._s(_vm.item.lastPart))
                      ])
                    ])
                  ]
                : _vm._e()
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/app/Component/Media/Header.vue?vue&type=template&id=644a7980&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/app/Component/Media/Header.vue?vue&type=template&id=644a7980&scoped=true& ***!
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
    "header",
    { staticClass: "media" },
    [
      _vm.media.backdrop.trim() !== "https://image.tmdb.org/t/p/original/"
        ? _c("v-img", {
            staticClass: "backdrop",
            attrs: {
              src: _vm.media.backdrop,
              alt: _vm.media.title,
              title: _vm.media.title
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("v-container", { staticClass: "content", attrs: { fluid: "" } }, [
        _c(
          "div",
          { staticClass: "avatar" },
          [
            _vm.media.poster.trim() !== "https://image.tmdb.org/t/p/original/"
              ? _c("v-img", {
                  attrs: {
                    src: _vm.media.poster,
                    alt: _vm.media.title,
                    title: _vm.media.title,
                    "aspect-ratio": "0.66"
                  }
                })
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "infos" }, [
          _c("h1", [_vm._v(_vm._s(_vm.media.title))]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "detail" },
            [
              _c("i", { staticClass: "far fa-folder" }),
              _vm._v(" " + _vm._s(_vm.media.category) + "\n                "),
              _c("i", { staticClass: "fas fa-thermometer-three-quarters" }),
              _vm._v(" " + _vm._s(_vm.media.status) + "\n                "),
              _vm.media.releaseDate
                ? [
                    _c("i", { staticClass: "fa fa-calendar" }),
                    _vm._v(
                      " " +
                        _vm._s(_vm.formatDate(_vm.media.releaseDate)) +
                        "\n                "
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c("i", { staticClass: "fa fa-star" }),
              _vm._v(" " + _vm._s(_vm.media.averageNote) + "\n            ")
            ],
            2
          ),
          _vm._v(" "),
          _vm.media.genres.length > 0
            ? _c(
                "div",
                { staticClass: "detail" },
                [
                  _c("i", { staticClass: "fa fa-tag" }),
                  _vm._v(" Genre :\n                "),
                  _vm._l(_vm.media.genres, function(genre, k, i) {
                    return [
                      _vm._v(_vm._s(genre.title) + "\n                    "),
                      k < _vm.media.genres.length - 1 ? [_vm._v(",")] : _vm._e()
                    ]
                  })
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "description" }, [
            _c("i", { staticClass: "fa fa-book-open" }),
            _vm._v(" Résumé : "),
            _c("br"),
            _vm._v(" " + _vm._s(_vm.media.description))
          ])
        ]),
        _vm._v(" "),
        _vm.allowSubscription()
          ? _c("div", { staticClass: "actions" }, [
              _vm.subscriptionLoading
                ? _c("i", { staticClass: "fa fa-spinner fa-spin" })
                : _vm._e(),
              _vm._v(" "),
              !_vm.subscription && !_vm.subscriptionLoading
                ? _c(
                    "a",
                    {
                      attrs: { title: "Suivre" },
                      on: {
                        click: function($event) {
                          return _vm.addSubscription()
                        }
                      }
                    },
                    [_c("i", { staticClass: "far fa-bell" })]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.subscription && !_vm.subscriptionLoading
                ? _c(
                    "a",
                    {
                      attrs: { title: "Ne plus suivre" },
                      on: {
                        click: function($event) {
                          return _vm.removeSubscription()
                        }
                      }
                    },
                    [_c("i", { staticClass: "far fa-bell-slash" })]
                  )
                : _vm._e()
            ])
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
  return _c(
    "v-toolbar-items",
    [
      _vm._l(_vm.filters, function(filter) {
        return [
          _c(
            "v-btn",
            {
              class: { active: filter.active },
              attrs: { flat: "" },
              on: {
                click: function($event) {
                  return _vm.updateFilter($event, filter)
                }
              }
            },
            [_vm._v(_vm._s(_vm.displayFilter(filter)))]
          )
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0FQSS9JdGVtQVBJLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvQ29tcG9uZW50L0l0ZW0vQ2FyZC52dWU/YmQyYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0NvbXBvbmVudC9JdGVtL0NhcmQudnVlPzE0NmMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9Db21wb25lbnQvSXRlbS9DYXJkLnZ1ZT9kZDJiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvQ29tcG9uZW50L0l0ZW0vQ2FyZC52dWU/ZDgwNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0NvbXBvbmVudC9NZWRpYS9IZWFkZXIudnVlPzE2Y2MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9Db21wb25lbnQvTWVkaWEvSGVhZGVyLnZ1ZT9hZTk4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvQ29tcG9uZW50L01lZGlhL0hlYWRlci52dWU/MDgxOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0NvbXBvbmVudC9NZWRpYS9IZWFkZXIudnVlP2U4YTMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9FbnRpdHkvSXRlbS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9UYWJiZWRGaWx0ZXIudnVlPzZjOTMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svVGFiYmVkRmlsdGVyLnZ1ZT9lMTljIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RhYmJlZEZpbHRlci52dWU/MWJlZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9UYWJiZWRGaWx0ZXIudnVlPzYzZTQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9Db21wb25lbnQvSXRlbS9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0NvbXBvbmVudC9NZWRpYS9IZWFkZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RhYmJlZEZpbHRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9Db21wb25lbnQvSXRlbS9DYXJkLnZ1ZT9lMzY4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvQ29tcG9uZW50L01lZGlhL0hlYWRlci52dWU/ODJhMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9UYWJiZWRGaWx0ZXIudnVlPzVjZTMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9Db21wb25lbnQvSXRlbS9DYXJkLnZ1ZT8xNDg3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvQ29tcG9uZW50L01lZGlhL0hlYWRlci52dWU/MGQxNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9UYWJiZWRGaWx0ZXIudnVlP2YxY2UiXSwibmFtZXMiOlsiSXRlbUFQSSIsInEiLCJjYWxsYmFjayIsImF4aW9zIiwicG9zdCIsImJhc2VVcmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJpdGVtcyIsImRhdGEiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJjb252ZXJ0IiwiaWQiLCJtZWRpYUlkIiwibWVkaWEiLCJJdGVtIiwidGl0bGUiLCJjYXRlZ29yeSIsInF1YWxpdHkiLCJsYW5ndWFnZSIsImdlbnJlcyIsInNlYXNvbiIsImxhc3RQYXJ0IiwiZnVsbFVybCIsInNvdXJjZSIsIlNvdXJjZSIsIk1lZGlhIiwiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiaSIsImRlZmluZVByb3BlcnR5IiwiQ2FyZCIsIlZ1ZSIsIlByb3AiLCJ0eXBlIiwicHJvdG90eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJDb21wb25lbnQiLCJjb21wb25lbnRzIiwibmFtZXNwYWNlIiwiSGVhZGVyIiwic3Vic2NyaXB0aW9uIiwidW5kZWZpbmVkIiwic3Vic2NyaXB0aW9uTG9hZGluZyIsImlzQXV0aGVudGljYXRlZCIsIk1lZGlhU3Vic2NyaXB0aW9uQVBJIiwiZ2V0Rm9yTWVkaWEiLCJhZGQiLCJyZW1vdmUiLCJpbmRleE9mIiwiU3RhdGUiLCJHZXR0ZXIiLCJUYWJiZWRGaWx0ZXIiLCJmaWx0ZXJzIiwiZmlsdGVyIiwiZGlzcGxheWVkRmllbGQiLCJ2YWx1ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhY3RpdmUiLCIkZW1pdCIsIm9uVmFsdWVzSW5wdXRDaGFuZ2UiLCJpbml0aWFsRmlsdGVyIiwidmFsdWVzSW5wdXQiLCJBcnJheSIsIlN0cmluZyIsIldhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUNxQkEsTzs7Ozs7Ozs7OztBQUNqQjs7Ozs7MkJBS2NDLEMsRUFBR0MsUSxFQUFVO0FBQUE7O0FBQ3ZCQyxrREFBSyxDQUFDQyxJQUFOLENBQVcsS0FBS0MsT0FBTCxHQUFlLFFBQTFCLEVBQW9DO0FBQUVKLFNBQUMsRUFBRUE7QUFBTCxPQUFwQyxFQUNLSyxJQURMLENBQ1UsVUFBQ0MsUUFBRCxFQUFjO0FBQ3BCLFlBQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0FELGdCQUFRLENBQUNFLElBQVQsQ0FBY0MsT0FBZCxDQUFzQixVQUFDQyxJQUFELEVBQVU7QUFDNUJILGVBQUssQ0FBQ0ksSUFBTixDQUFXLEtBQUksQ0FBQ0MsT0FBTCxDQUFhRixJQUFiLENBQVg7QUFDSCxTQUZEO0FBR0FULGdCQUFRLENBQUNNLEtBQUQsQ0FBUjtBQUNILE9BUEQ7QUFRSDtBQUNEOzs7Ozs7Ozt3QkFLV00sRSxFQUFJWixRLEVBQVU7QUFBQTs7QUFDckJDLGtEQUFLLENBQUND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LHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQSwyQkFBMkIsdUNBQXVDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiw4QkFBOEIsNkJBQTZCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDBCQUEwQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLDhCQUE4QixtQ0FBbUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2SUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdCQUF3QjtBQUM5QyxzQkFBc0IsV0FBVztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaXRlbX5tZWRpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vRW50aXR5L0l0ZW1cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1BUEkge1xuICAgIC8qKlxuICAgICAqIFNlYXJjaCBvbiB0aGUgc2VydmVyXG4gICAgICogQHBhcmFtIHFcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGNvZGUgdG8gYmUgZXhlY3V0ZWQgb24gc3VjY2Vzc1xuICAgICAqL1xuICAgIHN0YXRpYyBzZWFyY2gocSwgY2FsbGJhY2spIHtcbiAgICAgICAgYXhpb3MucG9zdCh0aGlzLmJhc2VVcmwgKyAnc2VhcmNoJywgeyBxOiBxLCB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5jb252ZXJ0KGl0ZW0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FsbGJhY2soaXRlbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VhcmNoIG9uIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGNvZGUgdG8gYmUgZXhlY3V0ZWQgb24gc3VjY2Vzc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXQoaWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLnBvc3QodGhpcy5iYXNlVXJsICsgJ3JldHJpZXZlJywgeyBpZDogaWQsIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5jb252ZXJ0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgY2FsbGJhY2soaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggb24gdGhlIHNlcnZlclxuICAgICAqIEBwYXJhbSBtZWRpYUlkXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHRoZSBjb2RlIHRvIGJlIGV4ZWN1dGVkIG9uIHN1Y2Nlc3NcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Rm9yTWVkaWEobWVkaWFJZCwgY2FsbGJhY2spIHtcbiAgICAgICAgYXhpb3MucG9zdCh0aGlzLmJhc2VVcmwgKyAncmV0cmlldmUnLCB7IG1lZGlhOiBtZWRpYUlkLCB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5jb252ZXJ0KGl0ZW0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FsbGJhY2soaXRlbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvY2VzcyBpbnB1dCBhcnJheSBhbmQgcmV0dXJuIHRoZSBsaXN0IG9mIG9iamVjdHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEl0ZW1cbiAgICAgKi9cbiAgICBzdGF0aWMgY29udmVydChkYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgSXRlbShkYXRhKTtcbiAgICB9XG59XG5JdGVtQVBJLmJhc2VVcmwgPSAnL2FwaS9pdGVtLyc7XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhMTE4Nzk0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRhMTE4Nzk0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNGExMTg3OTRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvc3J2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YTExODc5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YTExODc5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGExMTg3OTQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGExMTg3OTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9hcHAvQ29tcG9uZW50L0l0ZW0vQ2FyZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRhMTE4Nzk0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRhMTE4Nzk0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTExODc5NCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDRhNzk4MCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9IZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9IZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0hlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDRhNzk4MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjY0NGE3OTgwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Nydi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjQ0YTc5ODAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjQ0YTc5ODAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjQ0YTc5ODAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjQ0YTc5ODAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9hcHAvQ29tcG9uZW50L01lZGlhL0hlYWRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY0NGE3OTgwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjQ0YTc5ODAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjQ0YTc5ODAmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgU291cmNlIGZyb20gXCIuL1NvdXJjZVwiO1xuaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGRhdGEuY2F0ZWdvcnk7XG4gICAgICAgIHRoaXMucXVhbGl0eSA9IGRhdGEucXVhbGl0eTtcbiAgICAgICAgdGhpcy5sYW5ndWFnZSA9IGRhdGEubGFuZ3VhZ2U7XG4gICAgICAgIHRoaXMuZ2VucmVzID0gZGF0YS5nZW5yZXM7XG4gICAgICAgIHRoaXMuc2Vhc29uID0gZGF0YS5zZWFzb247XG4gICAgICAgIHRoaXMubGFzdFBhcnQgPSBkYXRhLmxhc3RQYXJ0O1xuICAgICAgICB0aGlzLmZ1bGxVcmwgPSBkYXRhLmZ1bGxVcmw7XG4gICAgICAgIHRoaXMuc291cmNlID0gbmV3IFNvdXJjZShkYXRhLnNvdXJjZSk7XG4gICAgICAgIGlmIChkYXRhLm1lZGlhICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm1lZGlhID0gbmV3IE1lZGlhKGRhdGEubWVkaWEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZWRpYSA9IGRhdGEubWVkaWE7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RhYmJlZEZpbHRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDFhYWJhYjImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGFiYmVkRmlsdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGFiYmVkRmlsdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9UYWJiZWRGaWx0ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDFhYWJhYjImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJkMWFhYmFiMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9zcnYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2QxYWFiYWIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2QxYWFiYWIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UYWJiZWRGaWx0ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxYWFiYWIyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2QxYWFiYWIyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9UYWJiZWRGaWx0ZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJiZWRGaWx0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmJlZEZpbHRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmJlZEZpbHRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kMWFhYmFiMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFiYmVkRmlsdGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQxYWFiYWIyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJiZWRGaWx0ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxYWFiYWIyJnNjb3BlZD10cnVlJlwiIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9wLCBWdWUgfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4uLy4uL0VudGl0eS9JdGVtXCI7XG5sZXQgQ2FyZCA9IGNsYXNzIENhcmQgZXh0ZW5kcyBWdWUge1xufTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBJdGVtIH0pXG5dLCBDYXJkLnByb3RvdHlwZSwgXCJpdGVtXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBQcm9wKHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9KVxuXSwgQ2FyZC5wcm90b3R5cGUsIFwidGl0bGVcIiwgdm9pZCAwKTtcbkNhcmQgPSBfX2RlY29yYXRlKFtcbiAgICBDb21wb25lbnQoe1xuICAgICAgICBjb21wb25lbnRzOiB7fVxuICAgIH0pXG5dLCBDYXJkKTtcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3AsIFZ1ZSB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBHZXR0ZXIsIFN0YXRlIH0gZnJvbSAndnVleC1jbGFzcyc7XG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4uLy4uL0VudGl0eS9NZWRpYVwiO1xuaW1wb3J0IE1lZGlhU3Vic2NyaXB0aW9uQVBJIGZyb20gXCIuLi8uLi9BUEkvTWVkaWFTdWJzY3JpcHRpb25BUElcIjtcbmNvbnN0IG5hbWVzcGFjZSA9ICdzZWN1cml0eSc7XG5sZXQgSGVhZGVyID0gY2xhc3MgSGVhZGVyIGV4dGVuZHMgVnVlIHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25Mb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdXRoZW50aWNhdGVkICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgTWVkaWFTdWJzY3JpcHRpb25BUEkuZ2V0Rm9yTWVkaWEodGhpcy5tZWRpYS5pZCwgKHN1YnNjcmlwdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkU3Vic2NyaXB0aW9uKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBNZWRpYVN1YnNjcmlwdGlvbkFQSS5hZGQodGhpcy5tZWRpYS5pZCwgKHN1YnNjcmlwdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmVtb3ZlU3Vic2NyaXB0aW9uKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBNZWRpYVN1YnNjcmlwdGlvbkFQSS5yZW1vdmUodGhpcy5tZWRpYS5pZCwgKHN1YnNjcmlwdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYWxsb3dTdWJzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQXV0aGVudGljYXRlZCAmJiBbJ3R2JywgJ2FuaW1lcyddLmluZGV4T2YodGhpcy5tZWRpYS5jYXRlZ29yeSkgIT09IC0xO1xuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBQcm9wKHsgdHlwZTogTWVkaWEgfSlcbl0sIEhlYWRlci5wcm90b3R5cGUsIFwibWVkaWFcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIFN0YXRlKCdzZWN1cml0eScpXG5dLCBIZWFkZXIucHJvdG90eXBlLCBcInNlY3VyaXR5U3RhdGVcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIEdldHRlcignaXNBdXRoZW50aWNhdGVkJywgeyBuYW1lc3BhY2UgfSlcbl0sIEhlYWRlci5wcm90b3R5cGUsIFwiaXNBdXRoZW50aWNhdGVkXCIsIHZvaWQgMCk7XG5IZWFkZXIgPSBfX2RlY29yYXRlKFtcbiAgICBDb21wb25lbnRcbl0sIEhlYWRlcik7XG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3AsIFZ1ZSwgV2F0Y2ggfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xubGV0IFRhYmJlZEZpbHRlciA9IGNsYXNzIFRhYmJlZEZpbHRlciBleHRlbmRzIFZ1ZSB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBkaXNwbGF5RmlsdGVyKGZpbHRlcikge1xuICAgICAgICBpZiAodGhpcy5kaXNwbGF5ZWRGaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpbHRlci52YWx1ZVt0aGlzLmRpc3BsYXllZEZpZWxkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyLnZhbHVlW3RoaXMuZGlzcGxheWVkRmllbGRdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWx0ZXIudmFsdWU7XG4gICAgfVxuICAgIHVwZGF0ZUZpbHRlcihldmVudCwgaXRlbSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZpbHRlcnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmIChpdGVtLnZhbHVlID09PSBcInRvdXNcIikge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgaXRlbS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5vblZhbHVlc0lucHV0Q2hhbmdlKCk7XG4gICAgfVxuICAgIG9uVmFsdWVzSW5wdXRDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuZmlsdGVycyA9IFtdO1xuICAgICAgICB0aGlzLmZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICB2YWx1ZTogXCJ0b3VzXCIsXG4gICAgICAgICAgICBhY3RpdmU6IHRoaXMuaW5pdGlhbEZpbHRlciA9PT0gbnVsbCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmFsdWVzSW5wdXQuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogdGhpcy5pbml0aWFsRmlsdGVyID09PSB2YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IHR5cGU6IEFycmF5IH0pXG5dLCBUYWJiZWRGaWx0ZXIucHJvdG90eXBlLCBcInZhbHVlc0lucHV0XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBQcm9wKHsgZGVmYXVsdDogbnVsbCB9KVxuXSwgVGFiYmVkRmlsdGVyLnByb3RvdHlwZSwgXCJpbml0aWFsRmlsdGVyXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBQcm9wKHsgdHlwZTogU3RyaW5nIH0pXG5dLCBUYWJiZWRGaWx0ZXIucHJvdG90eXBlLCBcImRpc3BsYXllZEZpZWxkXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBXYXRjaChcInZhbHVlc0lucHV0XCIpXG5dLCBUYWJiZWRGaWx0ZXIucHJvdG90eXBlLCBcIm9uVmFsdWVzSW5wdXRDaGFuZ2VcIiwgbnVsbCk7XG5UYWJiZWRGaWx0ZXIgPSBfX2RlY29yYXRlKFtcbiAgICBDb21wb25lbnRcbl0sIFRhYmJlZEZpbHRlcik7XG5leHBvcnQgZGVmYXVsdCBUYWJiZWRGaWx0ZXI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jYXJkXCIsXG4gICAgeyBhdHRyczogeyBsaWdodDogXCJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIjXCIgKyBfdm0uX3MoX3ZtLml0ZW0uaWQpICsgXCIgLSBcIiArIF92bS5fcyhfdm0uaXRlbS50aXRsZSkpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwgeyBzdGF0aWNDbGFzczogXCJoaWRkZW4tc20tYW5kLWRvd24gZmFkZWRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnNvdXJjZS50aXRsZSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LXNoZWV0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBsZzMgbWQ2XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkxpZW4gZCdvcmlnaW5lXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBfdm0uaXRlbS5mdWxsVXJsLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5zb3VyY2UudGl0bGUpKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGxnMyBtZDZcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiR2VucmVzXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLml0ZW0uZ2VucmVzLmpvaW4oXCIsIFwiKSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBsZzMgbWQ2XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlF1YWxpdMOpXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLml0ZW0ucXVhbGl0eSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBsZzMgbWQ2XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkxhbmd1YWdlXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLml0ZW0ubGFuZ3VhZ2UpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggbGczIG1kNlwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJDYXTDqWdvcmllXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLml0ZW0uY2F0ZWdvcnkpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uaXRlbS5jYXRlZ29yeSA9PT0gXCJ0dlwiIHx8IF92bS5pdGVtLmNhdGVnb3J5ID09PSBcImFuaW1lc1wiXG4gICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBsZzMgbWQ2XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlNhaXNvblwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnNlYXNvbikpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBsZzMgbWQ2XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkRlcm5pZXIgRXBpc29kZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmxhc3RQYXJ0KSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiaGVhZGVyXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJtZWRpYVwiIH0sXG4gICAgW1xuICAgICAgX3ZtLm1lZGlhLmJhY2tkcm9wLnRyaW0oKSAhPT0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC9cIlxuICAgICAgICA/IF9jKFwidi1pbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmFja2Ryb3BcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogX3ZtLm1lZGlhLmJhY2tkcm9wLFxuICAgICAgICAgICAgICBhbHQ6IF92bS5tZWRpYS50aXRsZSxcbiAgICAgICAgICAgICAgdGl0bGU6IF92bS5tZWRpYS50aXRsZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWNvbnRhaW5lclwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiwgYXR0cnM6IHsgZmx1aWQ6IFwiXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhdmF0YXJcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5tZWRpYS5wb3N0ZXIudHJpbSgpICE9PSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsL1wiXG4gICAgICAgICAgICAgID8gX2MoXCJ2LWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5tZWRpYS5wb3N0ZXIsXG4gICAgICAgICAgICAgICAgICAgIGFsdDogX3ZtLm1lZGlhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogX3ZtLm1lZGlhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBcImFzcGVjdC1yYXRpb1wiOiBcIjAuNjZcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvc1wiIH0sIFtcbiAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5tZWRpYS50aXRsZSkpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRldGFpbFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhciBmYS1mb2xkZXJcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5tZWRpYS5jYXRlZ29yeSkgKyBcIlxcbiAgICAgICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS10aGVybW9tZXRlci10aHJlZS1xdWFydGVyc1wiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLm1lZGlhLnN0YXR1cykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgIF92bS5tZWRpYS5yZWxlYXNlRGF0ZVxuICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1jYWxlbmRhclwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtYXREYXRlKF92bS5tZWRpYS5yZWxlYXNlRGF0ZSkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1zdGFyXCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0ubWVkaWEuYXZlcmFnZU5vdGUpICsgXCJcXG4gICAgICAgICAgICBcIilcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5tZWRpYS5nZW5yZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGV0YWlsXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10YWdcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBHZW5yZSA6XFxuICAgICAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ubWVkaWEuZ2VucmVzLCBmdW5jdGlvbihnZW5yZSwgaywgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoZ2VucmUudGl0bGUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBrIDwgX3ZtLm1lZGlhLmdlbnJlcy5sZW5ndGggLSAxID8gW192bS5fdihcIixcIildIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb25cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1ib29rLW9wZW5cIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBSw6lzdW3DqSA6IFwiKSxcbiAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLm1lZGlhLmRlc2NyaXB0aW9uKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmFsbG93U3Vic2NyaXB0aW9uKClcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLnN1YnNjcmlwdGlvbkxvYWRpbmdcbiAgICAgICAgICAgICAgICA/IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS5zdWJzY3JpcHRpb24gJiYgIV92bS5zdWJzY3JpcHRpb25Mb2FkaW5nXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJTdWl2cmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkU3Vic2NyaXB0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXIgZmEtYmVsbFwiIH0pXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5zdWJzY3JpcHRpb24gJiYgIV92bS5zdWJzY3JpcHRpb25Mb2FkaW5nXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJOZSBwbHVzIHN1aXZyZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVTdWJzY3JpcHRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhciBmYS1iZWxsLXNsYXNoXCIgfSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtdG9vbGJhci1pdGVtc1wiLFxuICAgIFtcbiAgICAgIF92bS5fbChfdm0uZmlsdGVycywgZnVuY3Rpb24oZmlsdGVyKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogZmlsdGVyLmFjdGl2ZSB9LFxuICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVGaWx0ZXIoJGV2ZW50LCBmaWx0ZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRpc3BsYXlGaWx0ZXIoZmlsdGVyKSkpXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=