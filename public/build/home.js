(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home"],{

/***/ "./assets/js/app/API/MediaAPI.ts":
/*!***************************************!*\
  !*** ./assets/js/app/API/MediaAPI.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Entity_Media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Entity/Media */ "./assets/js/app/Entity/Media.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var MediaAPI =
/*#__PURE__*/
function () {
  function MediaAPI() {
    _classCallCheck(this, MediaAPI);
  }

  _createClass(MediaAPI, null, [{
    key: "getAll",

    /**
     * Search on the server
     * @param callback the code to be executed on success
     */
    value: function getAll(callback) {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.baseUrl + 'all').then(function (response) {
        var items = [];
        response.data.forEach(function (item) {
          items.push(_this.convert(item));
        });
        callback(items);
      });
    }
    /**
     * Search on the server
     * @param id number
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
     * Process input array and return the list of objects
     *
     * @param data
     *
     * @return Media
     */

  }, {
    key: "convert",
    value: function convert(data) {
      return new _Entity_Media__WEBPACK_IMPORTED_MODULE_1__["default"](data);
    }
  }]);

  return MediaAPI;
}();


MediaAPI.baseUrl = '/api/media/';

/***/ }),

/***/ "./assets/js/app/Entity/Genre.ts":
/*!***************************************!*\
  !*** ./assets/js/app/Entity/Genre.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Genre; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Genre = function Genre(data) {
  _classCallCheck(this, Genre);

  this.id = data.id;
  this.title = data.title;
};



/***/ }),

/***/ "./assets/js/app/Entity/Media.ts":
/*!***************************************!*\
  !*** ./assets/js/app/Entity/Media.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Media; });
/* harmony import */ var _Genre__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Genre */ "./assets/js/app/Entity/Genre.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Media = function Media(data) {
  var _this = this;

  _classCallCheck(this, Media);

  this.releaseDate = undefined;
  this.genres = [];
  this.id = data.id;
  this.title = data.title;
  this.description = data.description;
  this.category = data.category;
  this.poster = data.posterFullURL;
  this.backdrop = data.backdropFullURL;
  this.updated = data.updated;
  this.theMovieDbId = data.theMovieDbId;
  this.status = data.status;

  if (data.releaseDate !== null) {
    this.releaseDate = new Date(data.releaseDate);
  }

  this.averageNote = data.averageNote;
  data.genres.forEach(function (g) {
    _this.genres.push(new _Genre__WEBPACK_IMPORTED_MODULE_0__["default"](g));
  });
};



/***/ }),

/***/ "./assets/js/components/Pagination.vue":
/*!*********************************************!*\
  !*** ./assets/js/components/Pagination.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination_vue_vue_type_template_id_7026d37b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=7026d37b&scoped=true& */ "./assets/js/components/Pagination.vue?vue&type=template&id=7026d37b&scoped=true&");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=ts& */ "./assets/js/components/Pagination.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _Pagination_vue_vue_type_style_index_0_id_7026d37b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pagination.vue?vue&type=style&index=0&id=7026d37b&lang=scss&scoped=true& */ "./assets/js/components/Pagination.vue?vue&type=style&index=0&id=7026d37b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Pagination_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pagination_vue_vue_type_template_id_7026d37b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pagination_vue_vue_type_template_id_7026d37b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7026d37b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Pagination.vue?vue&type=script&lang=ts&":
/*!**********************************************************************!*\
  !*** ./assets/js/components/Pagination.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--6-0!../../../node_modules/ts-loader??ref--6-1!../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Pagination.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Pagination.vue?vue&type=style&index=0&id=7026d37b&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./assets/js/components/Pagination.vue?vue&type=style&index=0&id=7026d37b&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_7026d37b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader??ref--4-2!../../../node_modules/sass-loader/lib/loader.js??ref--4-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=style&index=0&id=7026d37b&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Pagination.vue?vue&type=style&index=0&id=7026d37b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_7026d37b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_7026d37b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_7026d37b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_7026d37b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_7026d37b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/components/Pagination.vue?vue&type=template&id=7026d37b&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./assets/js/components/Pagination.vue?vue&type=template&id=7026d37b&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_7026d37b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=template&id=7026d37b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Pagination.vue?vue&type=template&id=7026d37b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_7026d37b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_7026d37b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/page/Home.vue":
/*!*********************************!*\
  !*** ./assets/js/page/Home.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_57b455a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=57b455a7&scoped=true& */ "./assets/js/page/Home.vue?vue&type=template&id=57b455a7&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=ts& */ "./assets/js/page/Home.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_57b455a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=57b455a7&lang=scss&scoped=true& */ "./assets/js/page/Home.vue?vue&type=style&index=0&id=57b455a7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_57b455a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_57b455a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "57b455a7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/page/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/page/Home.vue?vue&type=script&lang=ts&":
/*!**********************************************************!*\
  !*** ./assets/js/page/Home.vue?vue&type=script&lang=ts& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--6-0!../../../node_modules/ts-loader??ref--6-1!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/page/Home.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/page/Home.vue?vue&type=style&index=0&id=57b455a7&lang=scss&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./assets/js/page/Home.vue?vue&type=style&index=0&id=57b455a7&lang=scss&scoped=true& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_57b455a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader??ref--4-2!../../../node_modules/sass-loader/lib/loader.js??ref--4-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=57b455a7&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/page/Home.vue?vue&type=style&index=0&id=57b455a7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_57b455a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_57b455a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_57b455a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_57b455a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_57b455a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/page/Home.vue?vue&type=template&id=57b455a7&scoped=true&":
/*!****************************************************************************!*\
  !*** ./assets/js/page/Home.vue?vue&type=template&id=57b455a7&scoped=true& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_57b455a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=57b455a7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/page/Home.vue?vue&type=template&id=57b455a7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_57b455a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_57b455a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Pagination.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--6-0!./node_modules/ts-loader??ref--6-1!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Pagination.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************************************************************************************************************/
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



var Pagination =
/*#__PURE__*/
function (_Vue) {
  _inherits(Pagination, _Vue);

  function Pagination() {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pagination).apply(this, arguments));
    _this.currentPage = 1;
    _this.lastPage = null;
    return _this;
  }

  _createClass(Pagination, [{
    key: "mounted",
    value: function mounted() {
      this.currentPage = 1;
      this.onItemsInputUpdate();
      this.onCurrentPageUpdate();
    }
    /**
     * Calcul the maximum number of page to display
     */

  }, {
    key: "onItemsInputUpdate",
    value: function onItemsInputUpdate() {
      if (this.itemsInput.length <= this.nbPerPage) {
        this.lastPage = 0;
      } else {
        this.lastPage = Math.trunc(this.itemsInput.length / this.nbPerPage);

        if (this.itemsInput.length % this.nbPerPage > 0) {
          this.lastPage++;
        }
      }

      this.currentPage = 1;
      this.onCurrentPageUpdate();
    }
    /**
     * Calcul of item list to display
     */

  }, {
    key: "onCurrentPageUpdate",
    value: function onCurrentPageUpdate() {
      var start = (this.currentPage - 1) * this.nbPerPage;
      var end = start + this.nbPerPage;
      this.$emit('input', this.itemsInput.slice(start, end));
    }
  }]);

  return Pagination;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
  type: Array
})], Pagination.prototype, "itemsInput", void 0);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({
  type: Number,
  default: 10
})], Pagination.prototype, "nbPerPage", void 0);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Watch"])("itemsInput")], Pagination.prototype, "onItemsInputUpdate", null);

__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Watch"])("currentPage")], Pagination.prototype, "onCurrentPageUpdate", null);

Pagination = __decorate([vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"]], Pagination);
/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/page/Home.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--6-0!./node_modules/ts-loader??ref--6-1!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/page/Home.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var vuex_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-class */ "./node_modules/vuex-class/lib/index.js");
/* harmony import */ var _app_API_MediaAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/API/MediaAPI */ "./assets/js/app/API/MediaAPI.ts");
/* harmony import */ var _components_Grid_Grid_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Grid/Grid.vue */ "./assets/js/components/Grid/Grid.vue");
/* harmony import */ var _app_Component_Media_Card_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/Component/Media/Card.vue */ "./assets/js/app/Component/Media/Card.vue");
/* harmony import */ var _components_Block_Loading_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Block/Loading.vue */ "./assets/js/components/Block/Loading.vue");
/* harmony import */ var _components_Grid_GridConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Grid/GridConfig */ "./assets/js/components/Grid/GridConfig.ts");
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








var namespace = 'source';

var Home =
/*#__PURE__*/
function (_Vue) {
  _inherits(Home, _Vue);

  function Home() {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
    _this.mediasLoading = false;
    return _this;
  }

  _createClass(Home, [{
    key: "data",
    value: function data() {
      return {
        lastUpdatedMedias: [],
        lastDownloadedMedias: [],
        lastReleasedMedias: [],
        mediasLoading: false
      };
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      if (!this.sourcesState.loaded) {
        this.refreshSources();
      }

      this.mediasLoading = true;
      _app_API_MediaAPI__WEBPACK_IMPORTED_MODULE_2__["default"].getAll(function (items) {
        items.sort(function (a, b) {
          return a.updated < b.updated;
        });
        _this2.lastUpdatedMedias = items.slice(0, 6);
        items.sort(function (a, b) {
          return a.id < b.id;
        });
        _this2.lastDownloadedMedias = items.slice(0, 6);
        items.sort(function (a, b) {
          return a.releaseDate < b.releaseDate;
        });
        _this2.lastReleasedMedias = items.slice(0, 6);
        _this2.mediasLoading = false;
      });
    }
  }, {
    key: "mediaGridConfig",
    value: function mediaGridConfig() {
      var _this3 = this;

      return new _components_Grid_GridConfig__WEBPACK_IMPORTED_MODULE_6__["default"]({
        component: _app_Component_Media_Card_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
        itemsPerRowForced: 6,
        nbRowsForced: 1,
        pagination: false,
        onclick: function onclick(item) {
          _this3.$router.push({
            name: 'media-view-items',
            params: {
              'id': item.id
            }
          });

          return false;
        }
      });
    }
  }]);

  return Home;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]);

__decorate([Object(vuex_class__WEBPACK_IMPORTED_MODULE_1__["State"])('source')], Home.prototype, "sourcesState", void 0);

__decorate([Object(vuex_class__WEBPACK_IMPORTED_MODULE_1__["Action"])('getAll', {
  namespace: namespace
})], Home.prototype, "refreshSources", void 0);

Home = __decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
  components: {
    Loading: _components_Block_Loading_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Grid: _components_Grid_Grid_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
})], Home);
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Pagination.vue?vue&type=style&index=0&id=7026d37b&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Pagination.vue?vue&type=style&index=0&id=7026d37b&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/page/Home.vue?vue&type=style&index=0&id=57b455a7&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/page/Home.vue?vue&type=style&index=0&id=57b455a7&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Pagination.vue?vue&type=template&id=7026d37b&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Pagination.vue?vue&type=template&id=7026d37b&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _vm.lastPage > 0
    ? _c("v-layout", { attrs: { wrap: "" } }, [
        _c(
          "div",
          { staticClass: "flex xs12 md4 text-xs-center text-md-left" },
          [
            _vm._v(
              "\n        Il y a " +
                _vm._s(this.itemsInput.length) +
                " éléments\n    "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "flex xs12 md8 text-xs-center text-md-right" },
          [
            _c("v-pagination", {
              attrs: { length: _vm.lastPage },
              model: {
                value: _vm.currentPage,
                callback: function($$v) {
                  _vm.currentPage = $$v
                },
                expression: "currentPage"
              }
            })
          ],
          1
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/page/Home.vue?vue&type=template&id=57b455a7&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/page/Home.vue?vue&type=template&id=57b455a7&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    [
      _c("div", { staticClass: "jumbotron green" }, [
        _c("h1", { staticClass: "title" }, [
          _vm._v("Bienvenue sur Download Search")
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Cette application vous permet de rechercher des liens de téléchargements parmi les sites suivants :"
          )
        ]),
        _vm._v(" "),
        _c(
          "ul",
          _vm._l(_vm.sourcesState.sources, function(source) {
            return _c("li", [
              _c("a", { attrs: { href: source.baseUrl, target: "_blank" } }, [
                _vm._v(_vm._s(source.title))
              ])
            ])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center" },
        [
          _c(
            "v-btn",
            { attrs: { color: "success", to: { name: "item-search" } } },
            [
              _c("i", { staticClass: "fa fa-search" }),
              _vm._v(" Accéder à la recherche\n        ")
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "card-media-grid" },
        [
          _c(
            "v-toolbar",
            [
              _c("v-toolbar-title", [_vm._v("Derniers médias sortis")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-toolbar-items",
                { staticClass: "hidden-sm-and-down" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "", to: { name: "media-last-released" } }
                    },
                    [_vm._v("Voir plus")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-sheet",
            [
              _c("Loading", {
                attrs: { displayed: _vm.mediasLoading, position: "absolute" }
              }),
              _vm._v(" "),
              !_vm.mediasLoading
                ? _c("Grid", {
                    attrs: {
                      items: _vm.lastReleasedMedias,
                      config: _vm.mediaGridConfig()
                    }
                  })
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "card-media-grid" },
        [
          _c(
            "v-toolbar",
            [
              _c("v-toolbar-title", [_vm._v("Derniers médias mis à jour")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-toolbar-items",
                { staticClass: "hidden-sm-and-down" },
                [
                  _c(
                    "v-btn",
                    { attrs: { flat: "", to: { name: "media-last-updated" } } },
                    [_vm._v("Voir plus")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-sheet",
            [
              _c("Loading", {
                attrs: { displayed: _vm.mediasLoading, position: "absolute" }
              }),
              _vm._v(" "),
              !_vm.mediasLoading
                ? _c("Grid", {
                    attrs: {
                      items: _vm.lastUpdatedMedias,
                      config: _vm.mediaGridConfig()
                    }
                  })
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "card-media-grid" },
        [
          _c(
            "v-toolbar",
            [
              _c("v-toolbar-title", [_vm._v("Derniers médias récupérés")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-toolbar-items",
                { staticClass: "hidden-sm-and-down" },
                [
                  _c(
                    "v-btn",
                    { attrs: { flat: "", to: { name: "media-index" } } },
                    [_vm._v("Voir plus")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-sheet",
            [
              _c("Loading", {
                attrs: { displayed: _vm.mediasLoading, position: "absolute" }
              }),
              _vm._v(" "),
              !_vm.mediasLoading
                ? _c("Grid", {
                    attrs: {
                      items: _vm.lastDownloadedMedias,
                      config: _vm.mediaGridConfig()
                    }
                  })
                : _vm._e()
            ],
            1
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0FQSS9NZWRpYUFQSS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0VudGl0eS9HZW5yZS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0VudGl0eS9NZWRpYS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnZ1ZT9hMjkwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlPzk2YzQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFnaW5hdGlvbi52dWU/ZjllNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnZ1ZT9kZTVjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL0hvbWUudnVlPzlkNDEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2UvSG9tZS52dWU/NTNiYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZS9Ib21lLnZ1ZT9jNjE5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL0hvbWUudnVlPzRhODIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFnaW5hdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2UvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFnaW5hdGlvbi52dWU/NzcxOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZS9Ib21lLnZ1ZT81NmRlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlPzgyNmUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2UvSG9tZS52dWU/MDk2ZCJdLCJuYW1lcyI6WyJNZWRpYUFQSSIsImNhbGxiYWNrIiwiYXhpb3MiLCJnZXQiLCJiYXNlVXJsIiwidGhlbiIsInJlc3BvbnNlIiwiaXRlbXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiY29udmVydCIsImlkIiwicG9zdCIsIk1lZGlhIiwiR2VucmUiLCJ0aXRsZSIsInJlbGVhc2VEYXRlIiwidW5kZWZpbmVkIiwiZ2VucmVzIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsInBvc3RlciIsInBvc3RlckZ1bGxVUkwiLCJiYWNrZHJvcCIsImJhY2tkcm9wRnVsbFVSTCIsInVwZGF0ZWQiLCJ0aGVNb3ZpZURiSWQiLCJzdGF0dXMiLCJEYXRlIiwiYXZlcmFnZU5vdGUiLCJnIiwiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiaSIsImRlZmluZVByb3BlcnR5IiwiUGFnaW5hdGlvbiIsImN1cnJlbnRQYWdlIiwibGFzdFBhZ2UiLCJvbkl0ZW1zSW5wdXRVcGRhdGUiLCJvbkN1cnJlbnRQYWdlVXBkYXRlIiwiaXRlbXNJbnB1dCIsIm5iUGVyUGFnZSIsIk1hdGgiLCJ0cnVuYyIsInN0YXJ0IiwiZW5kIiwiJGVtaXQiLCJzbGljZSIsIlZ1ZSIsIlByb3AiLCJ0eXBlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJOdW1iZXIiLCJkZWZhdWx0IiwiV2F0Y2giLCJDb21wb25lbnQiLCJuYW1lc3BhY2UiLCJIb21lIiwibWVkaWFzTG9hZGluZyIsImxhc3RVcGRhdGVkTWVkaWFzIiwibGFzdERvd25sb2FkZWRNZWRpYXMiLCJsYXN0UmVsZWFzZWRNZWRpYXMiLCJzb3VyY2VzU3RhdGUiLCJsb2FkZWQiLCJyZWZyZXNoU291cmNlcyIsImdldEFsbCIsInNvcnQiLCJhIiwiYiIsIkdyaWRDb25maWciLCJjb21wb25lbnQiLCJDYXJkIiwiaXRlbXNQZXJSb3dGb3JjZWQiLCJuYlJvd3NGb3JjZWQiLCJwYWdpbmF0aW9uIiwib25jbGljayIsIiRyb3V0ZXIiLCJuYW1lIiwicGFyYW1zIiwiU3RhdGUiLCJBY3Rpb24iLCJjb21wb25lbnRzIiwiTG9hZGluZyIsIkdyaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBQ3FCQSxROzs7Ozs7Ozs7O0FBQ2pCOzs7OzJCQUljQyxRLEVBQVU7QUFBQTs7QUFDcEJDLGtEQUFLLENBQUNDLEdBQU4sQ0FBVSxLQUFLQyxPQUFMLEdBQWUsS0FBekIsRUFDS0MsSUFETCxDQUNVLFVBQUNDLFFBQUQsRUFBYztBQUNwQixZQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBRCxnQkFBUSxDQUFDRSxJQUFULENBQWNDLE9BQWQsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzVCSCxlQUFLLENBQUNJLElBQU4sQ0FBVyxLQUFJLENBQUNDLE9BQUwsQ0FBYUYsSUFBYixDQUFYO0FBQ0gsU0FGRDtBQUdBVCxnQkFBUSxDQUFDTSxLQUFELENBQVI7QUFDSCxPQVBEO0FBUUg7QUFDRDs7Ozs7Ozs7d0JBS1dNLEUsRUFBSVosUSxFQUFVO0FBQUE7O0FBQ3JCQyxrREFBSyxDQUFDWSxJQUFOLENBQVcsS0FBS1YsT0FBTCxHQUFlLFVBQTFCLEVBQXNDO0FBQUVTLFVBQUUsRUFBRUE7QUFBTixPQUF0QyxFQUNLUixJQURMLENBQ1UsVUFBQ0MsUUFBRCxFQUFjO0FBQ3BCLFlBQUlJLElBQUksR0FBRyxNQUFJLENBQUNFLE9BQUwsQ0FBYU4sUUFBUSxDQUFDRSxJQUF0QixDQUFYOztBQUNBUCxnQkFBUSxDQUFDUyxJQUFELENBQVI7QUFDSCxPQUpEO0FBS0g7QUFDRDs7Ozs7Ozs7Ozs0QkFPZUYsSSxFQUFNO0FBQ2pCLGFBQU8sSUFBSU8scURBQUosQ0FBVVAsSUFBVixDQUFQO0FBQ0g7Ozs7Ozs7QUFFTFIsUUFBUSxDQUFDSSxPQUFULEdBQW1CLGFBQW5CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7SUN4Q3FCWSxLLEdBQ2pCLGVBQVlSLElBQVosRUFBa0I7QUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9DQUFvQztBQUNyRDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUyxnQkFBZ0IsNkJBQTZCLEVBQUUsRUFBRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxpQ0FBaUM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0NBQW9DO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLGdCQUFnQixzQkFBc0IsRUFBRSxFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBNZWRpYSBmcm9tIFwiLi4vRW50aXR5L01lZGlhXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYUFQSSB7XG4gICAgLyoqXG4gICAgICogU2VhcmNoIG9uIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGNvZGUgdG8gYmUgZXhlY3V0ZWQgb24gc3VjY2Vzc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRBbGwoY2FsbGJhY2spIHtcbiAgICAgICAgYXhpb3MuZ2V0KHRoaXMuYmFzZVVybCArICdhbGwnKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5jb252ZXJ0KGl0ZW0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FsbGJhY2soaXRlbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VhcmNoIG9uIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0gaWQgbnVtYmVyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHRoZSBjb2RlIHRvIGJlIGV4ZWN1dGVkIG9uIHN1Y2Nlc3NcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0KGlkLCBjYWxsYmFjaykge1xuICAgICAgICBheGlvcy5wb3N0KHRoaXMuYmFzZVVybCArICdyZXRyaWV2ZScsIHsgaWQ6IGlkIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5jb252ZXJ0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgY2FsbGJhY2soaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGlucHV0IGFycmF5IGFuZCByZXR1cm4gdGhlIGxpc3Qgb2Ygb2JqZWN0c1xuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKlxuICAgICAqIEByZXR1cm4gTWVkaWFcbiAgICAgKi9cbiAgICBzdGF0aWMgY29udmVydChkYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgTWVkaWEoZGF0YSk7XG4gICAgfVxufVxuTWVkaWFBUEkuYmFzZVVybCA9ICcvYXBpL21lZGlhLyc7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5yZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IEdlbnJlIGZyb20gXCIuL0dlbnJlXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLnJlbGVhc2VEYXRlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmdlbnJlcyA9IFtdO1xuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkYXRhLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gZGF0YS5jYXRlZ29yeTtcbiAgICAgICAgdGhpcy5wb3N0ZXIgPSBkYXRhLnBvc3RlckZ1bGxVUkw7XG4gICAgICAgIHRoaXMuYmFja2Ryb3AgPSBkYXRhLmJhY2tkcm9wRnVsbFVSTDtcbiAgICAgICAgdGhpcy51cGRhdGVkID0gZGF0YS51cGRhdGVkO1xuICAgICAgICB0aGlzLnRoZU1vdmllRGJJZCA9IGRhdGEudGhlTW92aWVEYklkO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IGRhdGEuc3RhdHVzO1xuICAgICAgICBpZiAoZGF0YS5yZWxlYXNlRGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlRGF0ZSA9IG5ldyBEYXRlKGRhdGEucmVsZWFzZURhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXZlcmFnZU5vdGUgPSBkYXRhLmF2ZXJhZ2VOb3RlO1xuICAgICAgICBkYXRhLmdlbnJlcy5mb3JFYWNoKChnKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdlbnJlcy5wdXNoKG5ldyBHZW5yZShnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGFnaW5hdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzAyNmQzN2Imc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGFnaW5hdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1BhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzAyNmQzN2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3MDI2ZDM3YlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9zcnYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzcwMjZkMzdiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzcwMjZkMzdiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MDI2ZDM3YiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3MDI2ZDM3YicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFnaW5hdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcwMjZkMzdiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcwMjZkMzdiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MDI2ZDM3YiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTdiNDU1YTcmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTdiNDU1YTcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1N2I0NTVhN1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9zcnYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU3YjQ1NWE3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU3YjQ1NWE3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01N2I0NTVhNyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1N2I0NTVhNycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL3BhZ2UvSG9tZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU3YjQ1NWE3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU3YjQ1NWE3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01N2I0NTVhNyZzY29wZWQ9dHJ1ZSZcIiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IENvbXBvbmVudCwgUHJvcCwgVnVlLCBXYXRjaCB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5sZXQgUGFnaW5hdGlvbiA9IGNsYXNzIFBhZ2luYXRpb24gZXh0ZW5kcyBWdWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgICAgdGhpcy5sYXN0UGFnZSA9IG51bGw7XG4gICAgfVxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xuICAgICAgICB0aGlzLm9uSXRlbXNJbnB1dFVwZGF0ZSgpO1xuICAgICAgICB0aGlzLm9uQ3VycmVudFBhZ2VVcGRhdGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsY3VsIHRoZSBtYXhpbXVtIG51bWJlciBvZiBwYWdlIHRvIGRpc3BsYXlcbiAgICAgKi9cbiAgICBvbkl0ZW1zSW5wdXRVcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zSW5wdXQubGVuZ3RoIDw9IHRoaXMubmJQZXJQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RQYWdlID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFBhZ2UgPSBNYXRoLnRydW5jKHRoaXMuaXRlbXNJbnB1dC5sZW5ndGggLyB0aGlzLm5iUGVyUGFnZSk7XG4gICAgICAgICAgICBpZiAoKHRoaXMuaXRlbXNJbnB1dC5sZW5ndGggJSB0aGlzLm5iUGVyUGFnZSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UGFnZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xuICAgICAgICB0aGlzLm9uQ3VycmVudFBhZ2VVcGRhdGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsY3VsIG9mIGl0ZW0gbGlzdCB0byBkaXNwbGF5XG4gICAgICovXG4gICAgb25DdXJyZW50UGFnZVVwZGF0ZSgpIHtcbiAgICAgICAgbGV0IHN0YXJ0ID0gKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMubmJQZXJQYWdlO1xuICAgICAgICBsZXQgZW5kID0gc3RhcnQgKyB0aGlzLm5iUGVyUGFnZTtcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLml0ZW1zSW5wdXQuc2xpY2Uoc3RhcnQsIGVuZCkpO1xuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBQcm9wKHsgdHlwZTogQXJyYXkgfSlcbl0sIFBhZ2luYXRpb24ucHJvdG90eXBlLCBcIml0ZW1zSW5wdXRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDEwIH0pXG5dLCBQYWdpbmF0aW9uLnByb3RvdHlwZSwgXCJuYlBlclBhZ2VcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIFdhdGNoKFwiaXRlbXNJbnB1dFwiKVxuXSwgUGFnaW5hdGlvbi5wcm90b3R5cGUsIFwib25JdGVtc0lucHV0VXBkYXRlXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgV2F0Y2goXCJjdXJyZW50UGFnZVwiKVxuXSwgUGFnaW5hdGlvbi5wcm90b3R5cGUsIFwib25DdXJyZW50UGFnZVVwZGF0ZVwiLCBudWxsKTtcblBhZ2luYXRpb24gPSBfX2RlY29yYXRlKFtcbiAgICBDb21wb25lbnRcbl0sIFBhZ2luYXRpb24pO1xuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IENvbXBvbmVudCwgVnVlIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCB7IEFjdGlvbiwgU3RhdGUgfSBmcm9tICd2dWV4LWNsYXNzJztcbmltcG9ydCBNZWRpYUFQSSBmcm9tIFwiLi4vYXBwL0FQSS9NZWRpYUFQSVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvR3JpZC9HcmlkLnZ1ZVwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2FwcC9Db21wb25lbnQvTWVkaWEvQ2FyZC52dWVcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL0Jsb2NrL0xvYWRpbmcudnVlXCI7XG5pbXBvcnQgR3JpZENvbmZpZyBmcm9tIFwiLi4vY29tcG9uZW50cy9HcmlkL0dyaWRDb25maWdcIjtcbmNvbnN0IG5hbWVzcGFjZSA9ICdzb3VyY2UnO1xubGV0IEhvbWUgPSBjbGFzcyBIb21lIGV4dGVuZHMgVnVlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5tZWRpYXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYXN0VXBkYXRlZE1lZGlhczogW10sXG4gICAgICAgICAgICBsYXN0RG93bmxvYWRlZE1lZGlhczogW10sXG4gICAgICAgICAgICBsYXN0UmVsZWFzZWRNZWRpYXM6IFtdLFxuICAgICAgICAgICAgbWVkaWFzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zb3VyY2VzU3RhdGUubG9hZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hTb3VyY2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZWRpYXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgTWVkaWFBUEkuZ2V0QWxsKChpdGVtcykgPT4ge1xuICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLnVwZGF0ZWQgPCBiLnVwZGF0ZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubGFzdFVwZGF0ZWRNZWRpYXMgPSBpdGVtcy5zbGljZSgwLCA2KTtcbiAgICAgICAgICAgIGl0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubGFzdERvd25sb2FkZWRNZWRpYXMgPSBpdGVtcy5zbGljZSgwLCA2KTtcbiAgICAgICAgICAgIGl0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5yZWxlYXNlRGF0ZSA8IGIucmVsZWFzZURhdGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubGFzdFJlbGVhc2VkTWVkaWFzID0gaXRlbXMuc2xpY2UoMCwgNik7XG4gICAgICAgICAgICB0aGlzLm1lZGlhc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1lZGlhR3JpZENvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBHcmlkQ29uZmlnKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogQ2FyZCxcbiAgICAgICAgICAgIGl0ZW1zUGVyUm93Rm9yY2VkOiA2LFxuICAgICAgICAgICAgbmJSb3dzRm9yY2VkOiAxLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjogZmFsc2UsXG4gICAgICAgICAgICBvbmNsaWNrOiAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ21lZGlhLXZpZXctaXRlbXMnLCBwYXJhbXM6IHsgJ2lkJzogaXRlbS5pZCB9IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIFN0YXRlKCdzb3VyY2UnKVxuXSwgSG9tZS5wcm90b3R5cGUsIFwic291cmNlc1N0YXRlXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBBY3Rpb24oJ2dldEFsbCcsIHsgbmFtZXNwYWNlIH0pXG5dLCBIb21lLnByb3RvdHlwZSwgXCJyZWZyZXNoU291cmNlc1wiLCB2b2lkIDApO1xuSG9tZSA9IF9fZGVjb3JhdGUoW1xuICAgIENvbXBvbmVudCh7XG4gICAgICAgIGNvbXBvbmVudHM6IHsgTG9hZGluZywgR3JpZCB9XG4gICAgfSlcbl0sIEhvbWUpO1xuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmxhc3RQYWdlID4gMFxuICAgID8gX2MoXCJ2LWxheW91dFwiLCB7IGF0dHJzOiB7IHdyYXA6IFwiXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IHhzMTIgbWQ0IHRleHQteHMtY2VudGVyIHRleHQtbWQtbGVmdFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgSWwgeSBhIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3ModGhpcy5pdGVtc0lucHV0Lmxlbmd0aCkgK1xuICAgICAgICAgICAgICAgIFwiIMOpbMOpbWVudHNcXG4gICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IHhzMTIgbWQ4IHRleHQteHMtY2VudGVyIHRleHQtbWQtcmlnaHRcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidi1wYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbGVuZ3RoOiBfdm0ubGFzdFBhZ2UgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50UGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50UGFnZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImp1bWJvdHJvbiBncmVlblwiIH0sIFtcbiAgICAgICAgX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIkJpZW52ZW51ZSBzdXIgRG93bmxvYWQgU2VhcmNoXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiQ2V0dGUgYXBwbGljYXRpb24gdm91cyBwZXJtZXQgZGUgcmVjaGVyY2hlciBkZXMgbGllbnMgZGUgdMOpbMOpY2hhcmdlbWVudHMgcGFybWkgbGVzIHNpdGVzIHN1aXZhbnRzIDpcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICBfdm0uX2woX3ZtLnNvdXJjZXNTdGF0ZS5zb3VyY2VzLCBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogc291cmNlLmJhc2VVcmwsIHRhcmdldDogXCJfYmxhbmtcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHNvdXJjZS50aXRsZSkpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDBcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGNvbG9yOiBcInN1Y2Nlc3NcIiwgdG86IHsgbmFtZTogXCJpdGVtLXNlYXJjaFwiIH0gfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1zZWFyY2hcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIEFjY8OpZGVyIMOgIGxhIHJlY2hlcmNoZVxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtbWVkaWEtZ3JpZFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIFtfdm0uX3YoXCJEZXJuaWVycyBtw6lkaWFzIHNvcnRpc1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtdG9vbGJhci1pdGVtc1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGlkZGVuLXNtLWFuZC1kb3duXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgdG86IHsgbmFtZTogXCJtZWRpYS1sYXN0LXJlbGVhc2VkXCIgfSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJWb2lyIHBsdXNcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXNoZWV0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTG9hZGluZ1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzcGxheWVkOiBfdm0ubWVkaWFzTG9hZGluZywgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLm1lZGlhc0xvYWRpbmdcbiAgICAgICAgICAgICAgICA/IF9jKFwiR3JpZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5sYXN0UmVsZWFzZWRNZWRpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBfdm0ubWVkaWFHcmlkQ29uZmlnKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLW1lZGlhLWdyaWRcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtdG9vbGJhclwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCBbX3ZtLl92KFwiRGVybmllcnMgbcOpZGlhcyBtaXMgw6Agam91clwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtdG9vbGJhci1pdGVtc1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGlkZGVuLXNtLWFuZC1kb3duXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsYXQ6IFwiXCIsIHRvOiB7IG5hbWU6IFwibWVkaWEtbGFzdC11cGRhdGVkXCIgfSB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJWb2lyIHBsdXNcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXNoZWV0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTG9hZGluZ1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzcGxheWVkOiBfdm0ubWVkaWFzTG9hZGluZywgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLm1lZGlhc0xvYWRpbmdcbiAgICAgICAgICAgICAgICA/IF9jKFwiR3JpZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5sYXN0VXBkYXRlZE1lZGlhcyxcbiAgICAgICAgICAgICAgICAgICAgICBjb25maWc6IF92bS5tZWRpYUdyaWRDb25maWcoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtbWVkaWEtZ3JpZFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIFtfdm0uX3YoXCJEZXJuaWVycyBtw6lkaWFzIHLDqWN1cMOpcsOpc1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtdG9vbGJhci1pdGVtc1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGlkZGVuLXNtLWFuZC1kb3duXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsYXQ6IFwiXCIsIHRvOiB7IG5hbWU6IFwibWVkaWEtaW5kZXhcIiB9IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlZvaXIgcGx1c1wiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtc2hlZXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMb2FkaW5nXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNwbGF5ZWQ6IF92bS5tZWRpYXNMb2FkaW5nLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICFfdm0ubWVkaWFzTG9hZGluZ1xuICAgICAgICAgICAgICAgID8gX2MoXCJHcmlkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmxhc3REb3dubG9hZGVkTWVkaWFzLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzogX3ZtLm1lZGlhR3JpZENvbmZpZygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=