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
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/item/search', {
        q: q
      }).then(function (response) {
        var items = [];
        response.data.forEach(function (item) {
          items.push(ItemAPI.convert(item));
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
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/item/retrieve', {
        id: id
      }).then(function (response) {
        var item = ItemAPI.convert(response.data);
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
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/item/retrieve', {
        media: mediaId
      }).then(function (response) {
        var items = [];
        response.data.forEach(function (item) {
          items.push(ItemAPI.convert(item));
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
    category: {
      label: "Catégorie",
      type: "string"
    },
    quality: {
      label: "Qualité",
      type: "string"
    },
    language: {
      label: "Langue",
      type: "string"
    },
    source: {
      label: "Site Source",
      type: "object",
      field: 'title'
    },
    view: {
      label: "Detail",
      type: "route",
      route: "item-view",
      icon: 'fa fa-eye',
      class: 'text-center',
      routeParams: {
        id: 'id'
      }
    }
  }
});

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
/* harmony import */ var _Entity_Media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Entity/Media */ "./assets/js/app/Entity/Media.ts");
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




var Header =
/*#__PURE__*/
function (_Vue) {
  _inherits(Header, _Vue);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "mounted",
    value: function mounted() {
      document.querySelector("header.media div.backdrop").style.backgroundImage = "url('" + this.media.backdrop + "')";
    }
  }]);

  return Header;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
  type: _Entity_Media__WEBPACK_IMPORTED_MODULE_1__["default"]
})], Header.prototype, "media", void 0);

Header = __decorate([vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"]], Header);
/* harmony default export */ __webpack_exports__["default"] = (Header);

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
      }

      var fieldConfig = this.config.fields[fieldname]; // Processing Object type

      if (fieldConfig.type === 'object') {
        return this.getValue(item[fieldname], fieldConfig.field);
      } // Processing Image type


      if (fieldConfig.type === 'image') {
        return '<img src="' + item[fieldname] + '" alt="' + fieldname + '" />';
      } // Processing Array type


      if (fieldConfig.type === 'array') {
        var join = fieldConfig.join;

        if (join === undefined) {
          join = ', ';
        }

        return item[fieldname].join(join);
      } // Processing URL type


      if (fieldConfig.type === 'url') {
        return this.getValueLink(fieldname, item[fieldname], "_blank");
      } // Processing Route type


      if (fieldConfig.type === 'route') {
        var routeParams = {};

        if (fieldConfig.routeParams !== undefined) {
          Object.keys(fieldConfig.routeParams).forEach(function (key) {
            var value = fieldConfig.routeParams[key];
            routeParams[key] = item[value];
          });
        }

        var url = this.$router.resolve({
          name: fieldConfig.route,
          params: routeParams
        });
        return this.getValueLink(fieldname, url.href);
      } // Default value


      return item[fieldname];
    }
    /**
     * Create a link
     *
     * @param fieldname
     * @param url
     * @param target
     *
     * @return String
     */

  }, {
    key: "getValueLink",
    value: function getValueLink(fieldname, url) {
      var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var label = [];
      var fieldConfig = this.config.fields[fieldname];

      if (fieldConfig.icon !== undefined) {
        label.push('<i class="' + fieldConfig.icon + '"></i>');
      }

      if (fieldConfig.text !== undefined) {
        label.push(fieldConfig.text);
      }

      if (label.length === 0) {
        label.push(fieldname);
      }

      return '<a href="' + url + '" target="' + target + '">' + label.join(' ') + '</a>';
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Table/FlexTable.vue?vue&type=style&index=0&id=30b94e23&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Table/FlexTable.vue?vue&type=style&index=0&id=30b94e23&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "item" }, [
    _vm.title
      ? _c("h2", { staticClass: "title" }, [
          _vm._v(
            "\n        #" +
              _vm._s(_vm.item.id) +
              " - " +
              _vm._s(_vm.item.title) +
              "\n        "
          ),
          _c("span", { staticClass: "pull-right small" }, [
            _vm._v(_vm._s(_vm.item.source.title))
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "grid grid-x grid-padding-x grid-padding-y item-informations"
      },
      [
        _c("div", { staticClass: "cell large-3 medium-6" }, [
          _c("label", [_vm._v("Lien d'origine")]),
          _vm._v(" "),
          _c("span", { staticClass: "value" }, [
            _c("a", { attrs: { href: _vm.item.fullUrl, target: "_blank" } }, [
              _vm._v(_vm._s(_vm.item.source.title))
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "cell large-3 medium-6" }, [
          _c("label", [_vm._v("Genres")]),
          _vm._v(" "),
          _c("span", { staticClass: "value" }, [
            _vm._v(_vm._s(_vm.item.genres.join(", ")))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "cell large-3 medium-6" }, [
          _c("label", [_vm._v("Qualité")]),
          _vm._v(" "),
          _c("span", { staticClass: "value" }, [
            _vm._v(_vm._s(_vm.item.quality))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "cell large-3 medium-6" }, [
          _c("label", [_vm._v("Language")]),
          _vm._v(" "),
          _c("span", { staticClass: "value" }, [
            _vm._v(_vm._s(_vm.item.language))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "cell large-3 medium-6" }, [
          _c("label", [_vm._v("Catégorie")]),
          _vm._v(" "),
          _c("span", { staticClass: "value" }, [
            _vm._v(_vm._s(_vm.item.category))
          ])
        ]),
        _vm._v(" "),
        _vm.item.category === "tv" || _vm.item.category === "animes"
          ? [
              _c("div", { staticClass: "cell large-3 medium-6" }, [
                _c("label", [_vm._v("Saison")]),
                _vm._v(" "),
                _c("span", { staticClass: "value" }, [
                  _vm._v(_vm._s(_vm.item.season))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "cell large-3 medium-6" }, [
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
  ])
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
  return _c("header", { staticClass: "media" }, [
    _c("div", { staticClass: "backdrop" }),
    _vm._v(" "),
    _c("div", { staticClass: "content" }, [
      _c("div", { staticClass: "avatar" }, [
        _c("img", { attrs: { src: _vm.media.poster, alt: _vm.media.title } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "infos" }, [
        _c("h1", [_vm._v(_vm._s(_vm.media.title))]),
        _vm._v(" "),
        _c("div", { staticClass: "detail" }, [
          _c("i", { staticClass: "fa fa-tag" }),
          _vm._v(" " + _vm._s(_vm.media.category))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "description" }, [
          _c("i", { staticClass: "fa fa-book-open" }),
          _vm._v(" Résumé : "),
          _c("br"),
          _vm._v(" " + _vm._s(_vm.media.description))
        ])
      ])
    ])
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0FQSS9JdGVtQVBJLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvQ29tcG9uZW50L0l0ZW0vQ2FyZC52dWU/YmQyYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0NvbXBvbmVudC9JdGVtL0NhcmQudnVlPzE0NmMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9Db21wb25lbnQvSXRlbS9DYXJkLnZ1ZT9kZDJiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvQ29tcG9uZW50L0l0ZW0vQ2FyZC52dWU/ZDgwNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0NvbXBvbmVudC9NZWRpYS9IZWFkZXIudnVlPzE2Y2MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9Db21wb25lbnQvTWVkaWEvSGVhZGVyLnZ1ZT9hZTk4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvQ29tcG9uZW50L01lZGlhL0hlYWRlci52dWU/MDgxOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0NvbXBvbmVudC9NZWRpYS9IZWFkZXIudnVlP2U4YTMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9FbnRpdHkvSXRlbS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9UYWJsZS9GbGV4VGFibGUudnVlP2MwZTQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVGFibGUvRmxleFRhYmxlLnZ1ZT9iNWQ5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RhYmxlL0ZsZXhUYWJsZS52dWU/MDVjZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9UYWJsZS9GbGV4VGFibGUudnVlP2RlNGIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy90YWJsZS9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9Db21wb25lbnQvSXRlbS9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0NvbXBvbmVudC9NZWRpYS9IZWFkZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RhYmxlL0ZsZXhUYWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9Db21wb25lbnQvSXRlbS9DYXJkLnZ1ZT9lMzY4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvQ29tcG9uZW50L01lZGlhL0hlYWRlci52dWU/ODJhMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9UYWJsZS9GbGV4VGFibGUudnVlP2M2N2EiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9Db21wb25lbnQvSXRlbS9DYXJkLnZ1ZT8xNDg3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvQ29tcG9uZW50L01lZGlhL0hlYWRlci52dWU/MGQxNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9UYWJsZS9GbGV4VGFibGUudnVlP2Y1YzYiXSwibmFtZXMiOlsiSXRlbUFQSSIsInEiLCJjYWxsYmFjayIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsIml0ZW1zIiwiZGF0YSIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsImNvbnZlcnQiLCJpZCIsIm1lZGlhSWQiLCJtZWRpYSIsIkl0ZW0iLCJ0aXRsZSIsImNhdGVnb3J5IiwicXVhbGl0eSIsImxhbmd1YWdlIiwiZ2VucmVzIiwic2Vhc29uIiwibGFzdFBhcnQiLCJmdWxsVXJsIiwic291cmNlIiwiU291cmNlIiwiTWVkaWEiLCJmaWVsZHMiLCJsYWJlbCIsInR5cGUiLCJmaWVsZCIsInZpZXciLCJyb3V0ZSIsImljb24iLCJjbGFzcyIsInJvdXRlUGFyYW1zIiwiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiaSIsImRlZmluZVByb3BlcnR5IiwiQ2FyZCIsIlZ1ZSIsIlByb3AiLCJwcm90b3R5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudHMiLCJIZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tkcm9wIiwiRmxleFRhYmxlIiwiaXRlbXNJbnB1dCIsImNvbmZpZyIsImNvbmZpZ0lucHV0IiwiZmllbGRuYW1lIiwidW5kZWZpbmVkIiwiZmllbGRDb25maWciLCJnZXRWYWx1ZSIsImpvaW4iLCJnZXRWYWx1ZUxpbmsiLCJrZXlzIiwidmFsdWUiLCJ1cmwiLCIkcm91dGVyIiwicmVzb2x2ZSIsIm5hbWUiLCJwYXJhbXMiLCJocmVmIiwidGV4dCIsIkFycmF5IiwiV2F0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBQ3FCQSxPOzs7Ozs7Ozs7O0FBQ2pCOzs7OzsyQkFLY0MsQyxFQUFHQyxRLEVBQVU7QUFDdkJDLGtEQUFLLENBQUNDLElBQU4sQ0FBVyxrQkFBWCxFQUErQjtBQUFFSCxTQUFDLEVBQUVBO0FBQUwsT0FBL0IsRUFDS0ksSUFETCxDQUNVLFVBQUNDLFFBQUQsRUFBYztBQUNwQixZQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBRCxnQkFBUSxDQUFDRSxJQUFULENBQWNDLE9BQWQsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzVCSCxlQUFLLENBQUNJLElBQU4sQ0FBV1gsT0FBTyxDQUFDWSxPQUFSLENBQWdCRixJQUFoQixDQUFYO0FBQ0gsU0FGRDtBQUdBUixnQkFBUSxDQUFDSyxLQUFELENBQVI7QUFDSCxPQVBEO0FBUUg7QUFDRDs7Ozs7Ozs7d0JBS1dNLEUsRUFBSVgsUSxFQUFVO0FBQ3JCQyxrREFBSyxDQUFDQyxJQUFO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O0FDOUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QyxlQUFlLDBCQUEwQjtBQUN6QztBQUNBLGVBQWUseUJBQXlCO0FBQ3hDLGlCQUFpQix3QkFBd0I7QUFDekMsbUJBQW1CLFNBQVMsOENBQThDLEVBQUU7QUFDNUU7QUFDQTtBQUNBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBLG1CQUFtQix3QkFBd0I7QUFDM0MsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hELG1CQUFtQixpQ0FBaUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNEJBQTRCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZ0NBQWdDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0JBQXdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUJBQXFCO0FBQ2xDO0FBQ0EsaUNBQWlDLGlCQUFpQjtBQUNsRDtBQUNBLDZCQUE2QjtBQUM3QixpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpdGVtfm1lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9FbnRpdHkvSXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbUFQSSB7XG4gICAgLyoqXG4gICAgICogU2VhcmNoIG9uIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0gcVxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB0aGUgY29kZSB0byBiZSBleGVjdXRlZCBvbiBzdWNjZXNzXG4gICAgICovXG4gICAgc3RhdGljIHNlYXJjaChxLCBjYWxsYmFjaykge1xuICAgICAgICBheGlvcy5wb3N0KCcvYXBpL2l0ZW0vc2VhcmNoJywgeyBxOiBxLCB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goSXRlbUFQSS5jb252ZXJ0KGl0ZW0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FsbGJhY2soaXRlbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VhcmNoIG9uIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGNvZGUgdG8gYmUgZXhlY3V0ZWQgb24gc3VjY2Vzc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXQoaWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvaXRlbS9yZXRyaWV2ZScsIHsgaWQ6IGlkLCB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IEl0ZW1BUEkuY29udmVydChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VhcmNoIG9uIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0gbWVkaWFJZFxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB0aGUgY29kZSB0byBiZSBleGVjdXRlZCBvbiBzdWNjZXNzXG4gICAgICovXG4gICAgc3RhdGljIGdldEZvck1lZGlhKG1lZGlhSWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvaXRlbS9yZXRyaWV2ZScsIHsgbWVkaWE6IG1lZGlhSWQsIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IFtdO1xuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChJdGVtQVBJLmNvbnZlcnQoaXRlbSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYWxsYmFjayhpdGVtcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGlucHV0IGFycmF5IGFuZCByZXR1cm4gdGhlIGxpc3Qgb2Ygb2JqZWN0c1xuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKlxuICAgICAqIEByZXR1cm4gSXRlbVxuICAgICAqL1xuICAgIHN0YXRpYyBjb252ZXJ0KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJdGVtKGRhdGEpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGExMTg3OTQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGExMTg3OTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0YTExODc5NFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9zcnYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRhMTE4Nzk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRhMTE4Nzk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTExODc5NCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YTExODc5NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2FwcC9Db21wb25lbnQvSXRlbS9DYXJkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGExMTg3OTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGExMTg3OTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhMTE4Nzk0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9IZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0NGE3OTgwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY0NGE3OTgwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjQ0YTc5ODBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvc3J2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NDRhNzk4MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NDRhNzk4MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDRhNzk4MCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NDRhNzk4MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2FwcC9Db21wb25lbnQvTWVkaWEvSGVhZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjQ0YTc5ODAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDRhNzk4MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDRhNzk4MCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCBTb3VyY2UgZnJvbSBcIi4vU291cmNlXCI7XG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vTWVkaWFcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gZGF0YS5jYXRlZ29yeTtcbiAgICAgICAgdGhpcy5xdWFsaXR5ID0gZGF0YS5xdWFsaXR5O1xuICAgICAgICB0aGlzLmxhbmd1YWdlID0gZGF0YS5sYW5ndWFnZTtcbiAgICAgICAgdGhpcy5nZW5yZXMgPSBkYXRhLmdlbnJlcztcbiAgICAgICAgdGhpcy5zZWFzb24gPSBkYXRhLnNlYXNvbjtcbiAgICAgICAgdGhpcy5sYXN0UGFydCA9IGRhdGEubGFzdFBhcnQ7XG4gICAgICAgIHRoaXMuZnVsbFVybCA9IGRhdGEuZnVsbFVybDtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBuZXcgU291cmNlKGRhdGEuc291cmNlKTtcbiAgICAgICAgaWYgKGRhdGEubWVkaWEgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubWVkaWEgPSBuZXcgTWVkaWEoZGF0YS5tZWRpYSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lZGlhID0gZGF0YS5tZWRpYTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmxleFRhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMGI5NGUyMyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GbGV4VGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GbGV4VGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0ZsZXhUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMGI5NGUyMyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjMwYjk0ZTIzXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Nydi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzBiOTRlMjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzBiOTRlMjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZsZXhUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzBiOTRlMjMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzBiOTRlMjMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL1RhYmxlL0ZsZXhUYWJsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZsZXhUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmxleFRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmxleFRhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMwYjk0ZTIzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GbGV4VGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzBiOTRlMjMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZsZXhUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzBiOTRlMjMmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZmllbGRzOiB7XG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJUaXRsZVwiLFxuICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgbGFiZWw6IFwiQ2F0w6lnb3JpZVwiLFxuICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgfSxcbiAgICAgICAgcXVhbGl0eToge1xuICAgICAgICAgICAgbGFiZWw6IFwiUXVhbGl0w6lcIixcbiAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgbGFuZ3VhZ2U6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkxhbmd1ZVwiLFxuICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIlNpdGUgU291cmNlXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgZmllbGQ6ICd0aXRsZSdcbiAgICAgICAgfSxcbiAgICAgICAgdmlldzoge1xuICAgICAgICAgICAgbGFiZWw6IFwiRGV0YWlsXCIsXG4gICAgICAgICAgICB0eXBlOiBcInJvdXRlXCIsXG4gICAgICAgICAgICByb3V0ZTogXCJpdGVtLXZpZXdcIixcbiAgICAgICAgICAgIGljb246ICdmYSBmYS1leWUnLFxuICAgICAgICAgICAgY2xhc3M6ICd0ZXh0LWNlbnRlcicsXG4gICAgICAgICAgICByb3V0ZVBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiAnaWQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9wLCBWdWUgfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4uLy4uL0VudGl0eS9JdGVtXCI7XG5sZXQgQ2FyZCA9IGNsYXNzIENhcmQgZXh0ZW5kcyBWdWUge1xufTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBJdGVtIH0pXG5dLCBDYXJkLnByb3RvdHlwZSwgXCJpdGVtXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBQcm9wKHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9KVxuXSwgQ2FyZC5wcm90b3R5cGUsIFwidGl0bGVcIiwgdm9pZCAwKTtcbkNhcmQgPSBfX2RlY29yYXRlKFtcbiAgICBDb21wb25lbnQoe1xuICAgICAgICBjb21wb25lbnRzOiB7fVxuICAgIH0pXG5dLCBDYXJkKTtcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3AsIFZ1ZSB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4uLy4uL0VudGl0eS9NZWRpYVwiO1xubGV0IEhlYWRlciA9IGNsYXNzIEhlYWRlciBleHRlbmRzIFZ1ZSB7XG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlci5tZWRpYSBkaXYuYmFja2Ryb3BcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ1wiICsgdGhpcy5tZWRpYS5iYWNrZHJvcCArIFwiJylcIjtcbiAgICB9XG59O1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IHR5cGU6IE1lZGlhIH0pXG5dLCBIZWFkZXIucHJvdG90eXBlLCBcIm1lZGlhXCIsIHZvaWQgMCk7XG5IZWFkZXIgPSBfX2RlY29yYXRlKFtcbiAgICBDb21wb25lbnRcbl0sIEhlYWRlcik7XG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3AsIFZ1ZSwgV2F0Y2ggfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xubGV0IEZsZXhUYWJsZSA9IGNsYXNzIEZsZXhUYWJsZSBleHRlbmRzIFZ1ZSB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGl0ZW1zOiB0aGlzLml0ZW1zSW5wdXQsXG4gICAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlnSW5wdXQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFRpdGxlKGZpZWxkbmFtZSkge1xuICAgICAgICBpZiAodGhpcy5jb25maWcuZmllbGRzW2ZpZWxkbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZpZWxkc1tmaWVsZG5hbWVdLmxhYmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5maWVsZHNbZmllbGRuYW1lXS5sYWJlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGRuYW1lO1xuICAgIH1cbiAgICBnZXRWYWx1ZShpdGVtLCBmaWVsZG5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZpZWxkc1tmaWVsZG5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmaWVsZENvbmZpZyA9IHRoaXMuY29uZmlnLmZpZWxkc1tmaWVsZG5hbWVdO1xuICAgICAgICAvLyBQcm9jZXNzaW5nIE9iamVjdCB0eXBlXG4gICAgICAgIGlmIChmaWVsZENvbmZpZy50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoaXRlbVtmaWVsZG5hbWVdLCBmaWVsZENvbmZpZy5maWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvY2Vzc2luZyBJbWFnZSB0eXBlXG4gICAgICAgIGlmIChmaWVsZENvbmZpZy50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gJzxpbWcgc3JjPVwiJyArIGl0ZW1bZmllbGRuYW1lXSArICdcIiBhbHQ9XCInICsgZmllbGRuYW1lICsgJ1wiIC8+JztcbiAgICAgICAgfVxuICAgICAgICAvLyBQcm9jZXNzaW5nIEFycmF5IHR5cGVcbiAgICAgICAgaWYgKGZpZWxkQ29uZmlnLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGxldCBqb2luID0gZmllbGRDb25maWcuam9pbjtcbiAgICAgICAgICAgIGlmIChqb2luID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBqb2luID0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVtW2ZpZWxkbmFtZV0uam9pbihqb2luKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcm9jZXNzaW5nIFVSTCB0eXBlXG4gICAgICAgIGlmIChmaWVsZENvbmZpZy50eXBlID09PSAndXJsJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVMaW5rKGZpZWxkbmFtZSwgaXRlbVtmaWVsZG5hbWVdLCBcIl9ibGFua1wiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcm9jZXNzaW5nIFJvdXRlIHR5cGVcbiAgICAgICAgaWYgKGZpZWxkQ29uZmlnLnR5cGUgPT09ICdyb3V0ZScpIHtcbiAgICAgICAgICAgIGxldCByb3V0ZVBhcmFtcyA9IHt9O1xuICAgICAgICAgICAgaWYgKGZpZWxkQ29uZmlnLnJvdXRlUGFyYW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhmaWVsZENvbmZpZy5yb3V0ZVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGZpZWxkQ29uZmlnLnJvdXRlUGFyYW1zW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlUGFyYW1zW2tleV0gPSBpdGVtW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLiRyb3V0ZXIucmVzb2x2ZSh7IG5hbWU6IGZpZWxkQ29uZmlnLnJvdXRlLCBwYXJhbXM6IHJvdXRlUGFyYW1zIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVMaW5rKGZpZWxkbmFtZSwgdXJsLmhyZWYpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlZmF1bHQgdmFsdWVcbiAgICAgICAgcmV0dXJuIGl0ZW1bZmllbGRuYW1lXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbGlua1xuICAgICAqXG4gICAgICogQHBhcmFtIGZpZWxkbmFtZVxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIFN0cmluZ1xuICAgICAqL1xuICAgIGdldFZhbHVlTGluayhmaWVsZG5hbWUsIHVybCwgdGFyZ2V0ID0gXCJcIikge1xuICAgICAgICBsZXQgbGFiZWwgPSBbXTtcbiAgICAgICAgbGV0IGZpZWxkQ29uZmlnID0gdGhpcy5jb25maWcuZmllbGRzW2ZpZWxkbmFtZV07XG4gICAgICAgIGlmIChmaWVsZENvbmZpZy5pY29uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxhYmVsLnB1c2goJzxpIGNsYXNzPVwiJyArIGZpZWxkQ29uZmlnLmljb24gKyAnXCI+PC9pPicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZENvbmZpZy50ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxhYmVsLnB1c2goZmllbGRDb25maWcudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbGFiZWwucHVzaChmaWVsZG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnPGEgaHJlZj1cIicgKyB1cmwgKyAnXCIgdGFyZ2V0PVwiJyArIHRhcmdldCArICdcIj4nICsgbGFiZWwuam9pbignICcpICsgJzwvYT4nO1xuICAgIH1cbiAgICBvbkl0ZW1zSW5wdXRDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zSW5wdXQ7XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBBcnJheSB9KVxuXSwgRmxleFRhYmxlLnByb3RvdHlwZSwgXCJpdGVtc0lucHV0XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBQcm9wKHsgdHlwZTogT2JqZWN0IH0pXG5dLCBGbGV4VGFibGUucHJvdG90eXBlLCBcImNvbmZpZ0lucHV0XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBXYXRjaCgnaXRlbXNJbnB1dCcpXG5dLCBGbGV4VGFibGUucHJvdG90eXBlLCBcIm9uSXRlbXNJbnB1dENoYW5nZVwiLCBudWxsKTtcbkZsZXhUYWJsZSA9IF9fZGVjb3JhdGUoW1xuICAgIENvbXBvbmVudFxuXSwgRmxleFRhYmxlKTtcbmV4cG9ydCBkZWZhdWx0IEZsZXhUYWJsZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtXCIgfSwgW1xuICAgIF92bS50aXRsZVxuICAgICAgPyBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICNcIiArXG4gICAgICAgICAgICAgIF92bS5fcyhfdm0uaXRlbS5pZCkgK1xuICAgICAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pdGVtLnRpdGxlKSArXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicHVsbC1yaWdodCBzbWFsbFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLml0ZW0uc291cmNlLnRpdGxlKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJncmlkIGdyaWQteCBncmlkLXBhZGRpbmcteCBncmlkLXBhZGRpbmcteSBpdGVtLWluZm9ybWF0aW9uc1wiXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbGwgbGFyZ2UtMyBtZWRpdW0tNlwiIH0sIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJMaWVuIGQnb3JpZ2luZVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0uaXRlbS5mdWxsVXJsLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLml0ZW0uc291cmNlLnRpdGxlKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VsbCBsYXJnZS0zIG1lZGl1bS02XCIgfSwgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkdlbnJlc1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmdlbnJlcy5qb2luKFwiLCBcIikpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbGwgbGFyZ2UtMyBtZWRpdW0tNlwiIH0sIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJRdWFsaXTDqVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnF1YWxpdHkpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbGwgbGFyZ2UtMyBtZWRpdW0tNlwiIH0sIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJMYW5ndWFnZVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmxhbmd1YWdlKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjZWxsIGxhcmdlLTMgbWVkaXVtLTZcIiB9LCBbXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQ2F0w6lnb3JpZVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmNhdGVnb3J5KSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLml0ZW0uY2F0ZWdvcnkgPT09IFwidHZcIiB8fCBfdm0uaXRlbS5jYXRlZ29yeSA9PT0gXCJhbmltZXNcIlxuICAgICAgICAgID8gW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbGwgbGFyZ2UtMyBtZWRpdW0tNlwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJTYWlzb25cIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5zZWFzb24pKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbGwgbGFyZ2UtMyBtZWRpdW0tNlwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJEZXJuaWVyIEVwaXNvZGVcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5sYXN0UGFydCkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiaGVhZGVyXCIsIHsgc3RhdGljQ2xhc3M6IFwibWVkaWFcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJiYWNrZHJvcFwiIH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhdmF0YXJcIiB9LCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0ubWVkaWEucG9zdGVyLCBhbHQ6IF92bS5tZWRpYS50aXRsZSB9IH0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9zXCIgfSwgW1xuICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5tZWRpYS50aXRsZSkpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGV0YWlsXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRhZ1wiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0ubWVkaWEuY2F0ZWdvcnkpKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvblwiIH0sIFtcbiAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1ib29rLW9wZW5cIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgUsOpc3Vtw6kgOiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLm1lZGlhLmRlc2NyaXB0aW9uKSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1saXN0XCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3cgcm93LWhlYWRlclwiIH0sXG4gICAgICAgIF92bS5fbChfdm0uY29uZmlnLmZpZWxkcywgZnVuY3Rpb24oYywgZikge1xuICAgICAgICAgIHJldHVybiBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgY2xhc3M6IGMuY2xhc3MsXG4gICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uZ2V0VGl0bGUoZikpIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzcGFjZXJcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0uY29uZmlnLmZpZWxkcywgZnVuY3Rpb24oYywgZikge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgY2xhc3M6IGMuY2xhc3MgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uZ2V0VmFsdWUoaXRlbSwgZikpIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==