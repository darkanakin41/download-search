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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0FQSS9JdGVtQVBJLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvQ29tcG9uZW50L0l0ZW0vQ2FyZC52dWU/YmQyYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0NvbXBvbmVudC9JdGVtL0NhcmQudnVlPzE0NmMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9Db21wb25lbnQvSXRlbS9DYXJkLnZ1ZT9kZDJiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvQ29tcG9uZW50L0l0ZW0vQ2FyZC52dWU/ZDgwNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0NvbXBvbmVudC9NZWRpYS9IZWFkZXIudnVlPzE2Y2MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9Db21wb25lbnQvTWVkaWEvSGVhZGVyLnZ1ZT9hZTk4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvQ29tcG9uZW50L01lZGlhL0hlYWRlci52dWU/MDgxOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0NvbXBvbmVudC9NZWRpYS9IZWFkZXIudnVlP2U4YTMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9FbnRpdHkvSXRlbS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9UYWJiZWRGaWx0ZXIudnVlPzZjOTMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svVGFiYmVkRmlsdGVyLnZ1ZT9lMTljIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RhYmJlZEZpbHRlci52dWU/MWJlZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9UYWJiZWRGaWx0ZXIudnVlPzYzZTQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVGFibGUvRmxleFRhYmxlLnZ1ZT9jMGU0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RhYmxlL0ZsZXhUYWJsZS52dWU/YjVkOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9UYWJsZS9GbGV4VGFibGUudnVlPzA1Y2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVGFibGUvRmxleFRhYmxlLnZ1ZT9kZTRiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb25maWcvdGFibGUvc2VhcmNoLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvQ29tcG9uZW50L0l0ZW0vQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9Db21wb25lbnQvTWVkaWEvSGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9UYWJiZWRGaWx0ZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RhYmxlL0ZsZXhUYWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9Db21wb25lbnQvSXRlbS9DYXJkLnZ1ZT9lMzY4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvQ29tcG9uZW50L01lZGlhL0hlYWRlci52dWU/ODJhMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9CbG9jay9UYWJiZWRGaWx0ZXIudnVlPzVjZTMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVGFibGUvRmxleFRhYmxlLnZ1ZT9jNjdhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAvQ29tcG9uZW50L0l0ZW0vQ2FyZC52dWU/MTQ4NyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0NvbXBvbmVudC9NZWRpYS9IZWFkZXIudnVlPzBkMTQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQmxvY2svVGFiYmVkRmlsdGVyLnZ1ZT9mMWNlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RhYmxlL0ZsZXhUYWJsZS52dWU/ZjVjNiJdLCJuYW1lcyI6WyJJdGVtQVBJIiwicSIsImNhbGxiYWNrIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiaXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiY29udmVydCIsImlkIiwibWVkaWFJZCIsIm1lZGlhIiwiSXRlbSIsInRpdGxlIiwiY2F0ZWdvcnkiLCJxdWFsaXR5IiwibGFuZ3VhZ2UiLCJnZW5yZXMiLCJzZWFzb24iLCJsYXN0UGFydCIsImZ1bGxVcmwiLCJzb3VyY2UiLCJTb3VyY2UiLCJNZWRpYSIsImZpZWxkcyIsImxhYmVsIiwidHlwZSIsImZpZWxkIiwidmlldyIsInJvdXRlIiwiaWNvbiIsImNsYXNzIiwicm91dGVQYXJhbXMiLCJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJDYXJkIiwiVnVlIiwiUHJvcCIsInByb3RvdHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50cyIsIkhlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2Ryb3AiLCJUYWJiZWRGaWx0ZXIiLCJmaWx0ZXJzIiwiZmlsdGVyIiwiZGlzcGxheWVkRmllbGQiLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhY3RpdmUiLCIkZW1pdCIsIm9uVmFsdWVzSW5wdXRDaGFuZ2UiLCJpbml0aWFsRmlsdGVyIiwidmFsdWVzSW5wdXQiLCJBcnJheSIsIlN0cmluZyIsIldhdGNoIiwiRmxleFRhYmxlIiwiaXRlbXNJbnB1dCIsImNvbmZpZyIsImNvbmZpZ0lucHV0IiwiZmllbGRuYW1lIiwiZmllbGRDb25maWciLCJnZXRWYWx1ZSIsImpvaW4iLCJnZXRWYWx1ZUxpbmsiLCJrZXlzIiwidXJsIiwiJHJvdXRlciIsInJlc29sdmUiLCJuYW1lIiwicGFyYW1zIiwiaHJlZiIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBQ3FCQSxPOzs7Ozs7Ozs7O0FBQ2pCOzs7OzsyQkFLY0MsQyxFQUFHQyxRLEVBQVU7QUFDdkJDLGtEQUFLLENBQUNDLElBQU4sQ0FBVyxrQkFBWCxFQUErQjtBQUFFSCxTQUFDLEVBQUVBO0FBQUwsT0FBL0IsRUFDS0ksSUFETCxDQUNVLFVBQUNDLFFBQUQsRUFBYztBQUNwQixZQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBRCxnQkFBUSxDQUFDRSxJQUFULENBQWNDLE9BQWQsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzVCSCxlQUFLLENBQUNJLElBQU4sQ0FBV1gsT0FBTyxDQUFDWSxPQUFSLENBQWdCRixJQUFoQixDQUFYO0FBQ0gsU0FGRDtBQUdBUixnQkFBUSxDQUFDSyxLQUFELENBQVI7QUFDSCxPQVBEO0FBUUg7QUFDRDs7Ozs7Ozs7d0JBS1dNLEUsRUFBSVgsUSxFQUFVO0FBQ3JCQyxrREFBSyxDQUFDQyxJQUFOLENBQVcsb0JBQVgsRUFBaUM7QUFBRVMsVUFBRSxFQUFFQTtBQUFOLE9BQWpDLEVBQ0tSLElBREwsQ0FDVSxVQUFDQyxRQUFELEVBQWM7QUFDcEIsWUFBSUksSUFBSSxHQUFHVixPQUFPLENBQUNZLE9BQVIsQ0FBZ0JOLFFBQVEsQ0FBQ0UsSUFBekIsQ0FBWDtBQUNBTixnQkFBUSxDQUFDUSxJQUFELENBQVI7QUFDSCxPQUpEO0FBS0g7QUFDRDs7Ozs7Ozs7Z0NBS21CSSxPLEVBQVNaLFEsRUFBVTtBQUNsQ0Msa0RBQUssQ0FBQ0MsSUFBTixDQUFXLG9CQUFYLEVBQWlDO0FBQUVXLGFBQUssRUFBRUQ7QUFBVCxPQUFqQyxFQUNLVCxJQURM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cUJBQXFCO0FBQ2xDO0FBQ0EsaUNBQWlDLGlCQUFpQjtBQUNsRDtBQUNBLDZCQUE2QjtBQUM3QixpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpdGVtfm1lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9FbnRpdHkvSXRlbVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbUFQSSB7XG4gICAgLyoqXG4gICAgICogU2VhcmNoIG9uIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0gcVxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB0aGUgY29kZSB0byBiZSBleGVjdXRlZCBvbiBzdWNjZXNzXG4gICAgICovXG4gICAgc3RhdGljIHNlYXJjaChxLCBjYWxsYmFjaykge1xuICAgICAgICBheGlvcy5wb3N0KCcvYXBpL2l0ZW0vc2VhcmNoJywgeyBxOiBxLCB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goSXRlbUFQSS5jb252ZXJ0KGl0ZW0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FsbGJhY2soaXRlbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VhcmNoIG9uIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGNvZGUgdG8gYmUgZXhlY3V0ZWQgb24gc3VjY2Vzc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXQoaWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvaXRlbS9yZXRyaWV2ZScsIHsgaWQ6IGlkLCB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IEl0ZW1BUEkuY29udmVydChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VhcmNoIG9uIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0gbWVkaWFJZFxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB0aGUgY29kZSB0byBiZSBleGVjdXRlZCBvbiBzdWNjZXNzXG4gICAgICovXG4gICAgc3RhdGljIGdldEZvck1lZGlhKG1lZGlhSWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvaXRlbS9yZXRyaWV2ZScsIHsgbWVkaWE6IG1lZGlhSWQsIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IFtdO1xuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChJdGVtQVBJLmNvbnZlcnQoaXRlbSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYWxsYmFjayhpdGVtcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGlucHV0IGFycmF5IGFuZCByZXR1cm4gdGhlIGxpc3Qgb2Ygb2JqZWN0c1xuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKlxuICAgICAqIEByZXR1cm4gSXRlbVxuICAgICAqL1xuICAgIHN0YXRpYyBjb252ZXJ0KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJdGVtKGRhdGEpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGExMTg3OTQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGExMTg3OTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0YTExODc5NFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9zcnYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRhMTE4Nzk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRhMTE4Nzk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTExODc5NCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YTExODc5NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2FwcC9Db21wb25lbnQvSXRlbS9DYXJkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGExMTg3OTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGExMTg3OTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhMTE4Nzk0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9IZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0NGE3OTgwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY0NGE3OTgwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjQ0YTc5ODBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvc3J2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NDRhNzk4MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NDRhNzk4MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDRhNzk4MCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NDRhNzk4MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2FwcC9Db21wb25lbnQvTWVkaWEvSGVhZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjQ0YTc5ODAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDRhNzk4MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDRhNzk4MCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCBTb3VyY2UgZnJvbSBcIi4vU291cmNlXCI7XG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vTWVkaWFcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gZGF0YS5jYXRlZ29yeTtcbiAgICAgICAgdGhpcy5xdWFsaXR5ID0gZGF0YS5xdWFsaXR5O1xuICAgICAgICB0aGlzLmxhbmd1YWdlID0gZGF0YS5sYW5ndWFnZTtcbiAgICAgICAgdGhpcy5nZW5yZXMgPSBkYXRhLmdlbnJlcztcbiAgICAgICAgdGhpcy5zZWFzb24gPSBkYXRhLnNlYXNvbjtcbiAgICAgICAgdGhpcy5sYXN0UGFydCA9IGRhdGEubGFzdFBhcnQ7XG4gICAgICAgIHRoaXMuZnVsbFVybCA9IGRhdGEuZnVsbFVybDtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBuZXcgU291cmNlKGRhdGEuc291cmNlKTtcbiAgICAgICAgaWYgKGRhdGEubWVkaWEgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubWVkaWEgPSBuZXcgTWVkaWEoZGF0YS5tZWRpYSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lZGlhID0gZGF0YS5tZWRpYTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGFiYmVkRmlsdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMWFhYmFiMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UYWJiZWRGaWx0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UYWJiZWRGaWx0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1RhYmJlZEZpbHRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kMWFhYmFiMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImQxYWFiYWIyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Nydi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDFhYWJhYjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDFhYWJhYjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RhYmJlZEZpbHRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDFhYWJhYjImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZDFhYWJhYjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0Jsb2NrL1RhYmJlZEZpbHRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmJlZEZpbHRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFiYmVkRmlsdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFiYmVkRmlsdGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQxYWFiYWIyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJiZWRGaWx0ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDFhYWJhYjImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmJlZEZpbHRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDFhYWJhYjImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZsZXhUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzBiOTRlMjMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmxleFRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmxleFRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9GbGV4VGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzBiOTRlMjMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzMGI5NGUyM1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9zcnYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMwYjk0ZTIzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMwYjk0ZTIzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GbGV4VGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwYjk0ZTIzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMwYjk0ZTIzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9UYWJsZS9GbGV4VGFibGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GbGV4VGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZsZXhUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZsZXhUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMGI5NGUyMyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmxleFRhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMwYjk0ZTIzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GbGV4VGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwYjk0ZTIzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGZpZWxkczoge1xuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgbGFiZWw6IFwiVGl0bGVcIixcbiAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkNhdMOpZ29yaWVcIixcbiAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHF1YWxpdHk6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIlF1YWxpdMOpXCIsXG4gICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIGxhbmd1YWdlOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJMYW5ndWVcIixcbiAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJTaXRlIFNvdXJjZVwiLFxuICAgICAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgICAgIGZpZWxkOiAndGl0bGUnXG4gICAgICAgIH0sXG4gICAgICAgIHZpZXc6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkRldGFpbFwiLFxuICAgICAgICAgICAgdHlwZTogXCJyb3V0ZVwiLFxuICAgICAgICAgICAgcm91dGU6IFwiaXRlbS12aWV3XCIsXG4gICAgICAgICAgICBpY29uOiAnZmEgZmEtZXllJyxcbiAgICAgICAgICAgIGNsYXNzOiAndGV4dC1jZW50ZXInLFxuICAgICAgICAgICAgcm91dGVQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogJ2lkJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IENvbXBvbmVudCwgUHJvcCwgVnVlIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuLi8uLi9FbnRpdHkvSXRlbVwiO1xubGV0IENhcmQgPSBjbGFzcyBDYXJkIGV4dGVuZHMgVnVlIHtcbn07XG5fX2RlY29yYXRlKFtcbiAgICBQcm9wKHsgdHlwZTogSXRlbSB9KVxuXSwgQ2FyZC5wcm90b3R5cGUsIFwiaXRlbVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfSlcbl0sIENhcmQucHJvdG90eXBlLCBcInRpdGxlXCIsIHZvaWQgMCk7XG5DYXJkID0gX19kZWNvcmF0ZShbXG4gICAgQ29tcG9uZW50KHtcbiAgICAgICAgY29tcG9uZW50czoge31cbiAgICB9KVxuXSwgQ2FyZCk7XG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9wLCBWdWUgfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IE1lZGlhIGZyb20gXCIuLi8uLi9FbnRpdHkvTWVkaWFcIjtcbmxldCBIZWFkZXIgPSBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBWdWUge1xuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXIubWVkaWEgZGl2LmJhY2tkcm9wXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdcIiArIHRoaXMubWVkaWEuYmFja2Ryb3AgKyBcIicpXCI7XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBNZWRpYSB9KVxuXSwgSGVhZGVyLnByb3RvdHlwZSwgXCJtZWRpYVwiLCB2b2lkIDApO1xuSGVhZGVyID0gX19kZWNvcmF0ZShbXG4gICAgQ29tcG9uZW50XG5dLCBIZWFkZXIpO1xuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9wLCBWdWUsIFdhdGNoIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmxldCBUYWJiZWRGaWx0ZXIgPSBjbGFzcyBUYWJiZWRGaWx0ZXIgZXh0ZW5kcyBWdWUge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaWx0ZXJzOiBbXSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZGlzcGxheUZpbHRlcihmaWx0ZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzcGxheWVkRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmaWx0ZXIudmFsdWVbdGhpcy5kaXNwbGF5ZWRGaWVsZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlci52YWx1ZVt0aGlzLmRpc3BsYXllZEZpZWxkXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsdGVyLnZhbHVlO1xuICAgIH1cbiAgICB1cGRhdGVGaWx0ZXIoZXZlbnQsIGl0ZW0pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5maWx0ZXJzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAoaXRlbS52YWx1ZSA9PT0gXCJ0b3VzXCIpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIGl0ZW0udmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMub25WYWx1ZXNJbnB1dENoYW5nZSgpO1xuICAgIH1cbiAgICBvblZhbHVlc0lucHV0Q2hhbmdlKCkge1xuICAgICAgICB0aGlzLmZpbHRlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goe1xuICAgICAgICAgICAgdmFsdWU6IFwidG91c1wiLFxuICAgICAgICAgICAgYWN0aXZlOiB0aGlzLmluaXRpYWxGaWx0ZXIgPT09IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZhbHVlc0lucHV0LmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHRoaXMuaW5pdGlhbEZpbHRlciA9PT0gdmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBBcnJheSB9KVxuXSwgVGFiYmVkRmlsdGVyLnByb3RvdHlwZSwgXCJ2YWx1ZXNJbnB1dFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IGRlZmF1bHQ6IG51bGwgfSlcbl0sIFRhYmJlZEZpbHRlci5wcm90b3R5cGUsIFwiaW5pdGlhbEZpbHRlclwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IHR5cGU6IFN0cmluZyB9KVxuXSwgVGFiYmVkRmlsdGVyLnByb3RvdHlwZSwgXCJkaXNwbGF5ZWRGaWVsZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgV2F0Y2goXCJ2YWx1ZXNJbnB1dFwiKVxuXSwgVGFiYmVkRmlsdGVyLnByb3RvdHlwZSwgXCJvblZhbHVlc0lucHV0Q2hhbmdlXCIsIG51bGwpO1xuVGFiYmVkRmlsdGVyID0gX19kZWNvcmF0ZShbXG4gICAgQ29tcG9uZW50XG5dLCBUYWJiZWRGaWx0ZXIpO1xuZXhwb3J0IGRlZmF1bHQgVGFiYmVkRmlsdGVyO1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9wLCBWdWUsIFdhdGNoIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmxldCBGbGV4VGFibGUgPSBjbGFzcyBGbGV4VGFibGUgZXh0ZW5kcyBWdWUge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpdGVtczogdGhpcy5pdGVtc0lucHV0LFxuICAgICAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ0lucHV0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRUaXRsZShmaWVsZG5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZpZWxkc1tmaWVsZG5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5maWVsZHNbZmllbGRuYW1lXS5sYWJlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZmllbGRzW2ZpZWxkbmFtZV0ubGFiZWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkbmFtZTtcbiAgICB9XG4gICAgZ2V0VmFsdWUoaXRlbSwgZmllbGRuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5maWVsZHNbZmllbGRuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmllbGRDb25maWcgPSB0aGlzLmNvbmZpZy5maWVsZHNbZmllbGRuYW1lXTtcbiAgICAgICAgLy8gUHJvY2Vzc2luZyBPYmplY3QgdHlwZVxuICAgICAgICBpZiAoZmllbGRDb25maWcudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKGl0ZW1bZmllbGRuYW1lXSwgZmllbGRDb25maWcuZmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByb2Nlc3NpbmcgSW1hZ2UgdHlwZVxuICAgICAgICBpZiAoZmllbGRDb25maWcudHlwZSA9PT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cIicgKyBpdGVtW2ZpZWxkbmFtZV0gKyAnXCIgYWx0PVwiJyArIGZpZWxkbmFtZSArICdcIiAvPic7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvY2Vzc2luZyBBcnJheSB0eXBlXG4gICAgICAgIGlmIChmaWVsZENvbmZpZy50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICBsZXQgam9pbiA9IGZpZWxkQ29uZmlnLmpvaW47XG4gICAgICAgICAgICBpZiAoam9pbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgam9pbiA9ICcsICc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbVtmaWVsZG5hbWVdLmpvaW4oam9pbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvY2Vzc2luZyBVUkwgdHlwZVxuICAgICAgICBpZiAoZmllbGRDb25maWcudHlwZSA9PT0gJ3VybCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlTGluayhmaWVsZG5hbWUsIGl0ZW1bZmllbGRuYW1lXSwgXCJfYmxhbmtcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvY2Vzc2luZyBSb3V0ZSB0eXBlXG4gICAgICAgIGlmIChmaWVsZENvbmZpZy50eXBlID09PSAncm91dGUnKSB7XG4gICAgICAgICAgICBsZXQgcm91dGVQYXJhbXMgPSB7fTtcbiAgICAgICAgICAgIGlmIChmaWVsZENvbmZpZy5yb3V0ZVBhcmFtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZmllbGRDb25maWcucm91dGVQYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBmaWVsZENvbmZpZy5yb3V0ZVBhcmFtc1trZXldO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZVBhcmFtc1trZXldID0gaXRlbVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy4kcm91dGVyLnJlc29sdmUoeyBuYW1lOiBmaWVsZENvbmZpZy5yb3V0ZSwgcGFyYW1zOiByb3V0ZVBhcmFtcyB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlTGluayhmaWVsZG5hbWUsIHVybC5ocmVmKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEZWZhdWx0IHZhbHVlXG4gICAgICAgIHJldHVybiBpdGVtW2ZpZWxkbmFtZV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGxpbmtcbiAgICAgKlxuICAgICAqIEBwYXJhbSBmaWVsZG5hbWVcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqXG4gICAgICogQHJldHVybiBTdHJpbmdcbiAgICAgKi9cbiAgICBnZXRWYWx1ZUxpbmsoZmllbGRuYW1lLCB1cmwsIHRhcmdldCA9IFwiXCIpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gW107XG4gICAgICAgIGxldCBmaWVsZENvbmZpZyA9IHRoaXMuY29uZmlnLmZpZWxkc1tmaWVsZG5hbWVdO1xuICAgICAgICBpZiAoZmllbGRDb25maWcuaWNvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsYWJlbC5wdXNoKCc8aSBjbGFzcz1cIicgKyBmaWVsZENvbmZpZy5pY29uICsgJ1wiPjwvaT4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmllbGRDb25maWcudGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsYWJlbC5wdXNoKGZpZWxkQ29uZmlnLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYWJlbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGxhYmVsLnB1c2goZmllbGRuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJzxhIGhyZWY9XCInICsgdXJsICsgJ1wiIHRhcmdldD1cIicgKyB0YXJnZXQgKyAnXCI+JyArIGxhYmVsLmpvaW4oJyAnKSArICc8L2E+JztcbiAgICB9XG4gICAgb25JdGVtc0lucHV0Q2hhbmdlKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtc0lucHV0O1xuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBQcm9wKHsgdHlwZTogQXJyYXkgfSlcbl0sIEZsZXhUYWJsZS5wcm90b3R5cGUsIFwiaXRlbXNJbnB1dFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IHR5cGU6IE9iamVjdCB9KVxuXSwgRmxleFRhYmxlLnByb3RvdHlwZSwgXCJjb25maWdJbnB1dFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgV2F0Y2goJ2l0ZW1zSW5wdXQnKVxuXSwgRmxleFRhYmxlLnByb3RvdHlwZSwgXCJvbkl0ZW1zSW5wdXRDaGFuZ2VcIiwgbnVsbCk7XG5GbGV4VGFibGUgPSBfX2RlY29yYXRlKFtcbiAgICBDb21wb25lbnRcbl0sIEZsZXhUYWJsZSk7XG5leHBvcnQgZGVmYXVsdCBGbGV4VGFibGU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbVwiIH0sIFtcbiAgICBfdm0udGl0bGVcbiAgICAgID8gX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAjXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLml0ZW0uaWQpICtcbiAgICAgICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgICAgIF92bS5fcyhfdm0uaXRlbS50aXRsZSkgK1xuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInB1bGwtcmlnaHQgc21hbGxcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnNvdXJjZS50aXRsZSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgIFwiZ3JpZCBncmlkLXggZ3JpZC1wYWRkaW5nLXggZ3JpZC1wYWRkaW5nLXkgaXRlbS1pbmZvcm1hdGlvbnNcIlxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjZWxsIGxhcmdlLTMgbWVkaXVtLTZcIiB9LCBbXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiTGllbiBkJ29yaWdpbmVcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLml0ZW0uZnVsbFVybCwgdGFyZ2V0OiBcIl9ibGFua1wiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnNvdXJjZS50aXRsZSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbGwgbGFyZ2UtMyBtZWRpdW0tNlwiIH0sIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJHZW5yZXNcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5nZW5yZXMuam9pbihcIiwgXCIpKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjZWxsIGxhcmdlLTMgbWVkaXVtLTZcIiB9LCBbXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiUXVhbGl0w6lcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5xdWFsaXR5KSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjZWxsIGxhcmdlLTMgbWVkaXVtLTZcIiB9LCBbXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiTGFuZ3VhZ2VcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5sYW5ndWFnZSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VsbCBsYXJnZS0zIG1lZGl1bS02XCIgfSwgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkNhdMOpZ29yaWVcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5jYXRlZ29yeSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5pdGVtLmNhdGVnb3J5ID09PSBcInR2XCIgfHwgX3ZtLml0ZW0uY2F0ZWdvcnkgPT09IFwiYW5pbWVzXCJcbiAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjZWxsIGxhcmdlLTMgbWVkaXVtLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiU2Fpc29uXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLml0ZW0uc2Vhc29uKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjZWxsIGxhcmdlLTMgbWVkaXVtLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiRGVybmllciBFcGlzb2RlXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLml0ZW0ubGFzdFBhcnQpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImhlYWRlclwiLCB7IHN0YXRpY0NsYXNzOiBcIm1lZGlhXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFja2Ryb3BcIiB9KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXZhdGFyXCIgfSwgW1xuICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLm1lZGlhLnBvc3RlciwgYWx0OiBfdm0ubWVkaWEudGl0bGUgfSB9KVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvc1wiIH0sIFtcbiAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubWVkaWEudGl0bGUpKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10YWdcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLm1lZGlhLmNhdGVnb3J5KSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb25cIiB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtYm9vay1vcGVuXCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFLDqXN1bcOpIDogXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5tZWRpYS5kZXNjcmlwdGlvbikpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYi1jb250YWluZXJcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcInVsXCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcIm1lbnVcIiB9LFxuICAgICAgX3ZtLl9sKF92bS5maWx0ZXJzLCBmdW5jdGlvbihmaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgeyBjbGFzczogeyBhY3RpdmU6IGZpbHRlci5hY3RpdmUgfSB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZUZpbHRlcigkZXZlbnQsIGZpbHRlcilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZGlzcGxheUZpbHRlcihmaWx0ZXIpKSldXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgfSksXG4gICAgICAwXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWxpc3RcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyByb3ctaGVhZGVyXCIgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5jb25maWcuZmllbGRzLCBmdW5jdGlvbihjLCBmKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICBjbGFzczogYy5jbGFzcyxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5nZXRUaXRsZShmKSkgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0uaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNwYWNlclwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5jb25maWcuZmllbGRzLCBmdW5jdGlvbihjLCBmKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBjbGFzczogYy5jbGFzcyB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5nZXRWYWx1ZShpdGVtLCBmKSkgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9