(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account~item~media"],{

/***/ "./assets/js/app/API/MediaSubscriptionAPI.ts":
/*!***************************************************!*\
  !*** ./assets/js/app/API/MediaSubscriptionAPI.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaSubscriptionAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Entity_MediaSubscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Entity/MediaSubscription */ "./assets/js/app/Entity/MediaSubscription.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var MediaSubscriptionAPI =
/*#__PURE__*/
function () {
  function MediaSubscriptionAPI() {
    _classCallCheck(this, MediaSubscriptionAPI);
  }

  _createClass(MediaSubscriptionAPI, null, [{
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
     * @param mediaId
     * @param callback the code to be executed on success
     */

  }, {
    key: "getForMedia",
    value: function getForMedia(mediaId, callback) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(this.baseUrl + 'retrieve', {
        'media': mediaId
      }).then(function (response) {
        var subscription = undefined;

        if (response.data !== null) {
          subscription = _this2.convert(response.data);
        }

        callback(subscription);
      });
    }
    /**
     * Search on the server
     * @param mediaId
     * @param callback the code to be executed on success
     */

  }, {
    key: "add",
    value: function add(mediaId, callback) {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(this.baseUrl + 'add', {
        'media': mediaId
      }).then(function (response) {
        var subscription = undefined;

        if (response.data !== null) {
          subscription = _this3.convert(response.data);
        }

        callback(subscription);
      });
    }
    /**
     * Search on the server
     * @param mediaId
     * @param callback the code to be executed on success
     */

  }, {
    key: "remove",
    value: function remove(mediaId, callback) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(this.baseUrl + 'remove', {
        'media': mediaId
      }).then(function (response) {
        callback(undefined);
      });
    }
    /**
     * Process input array and return the list of objects
     *
     * @param data
     *
     * @return MediaSubscription
     */

  }, {
    key: "convert",
    value: function convert(data) {
      return new _Entity_MediaSubscription__WEBPACK_IMPORTED_MODULE_1__["default"](data);
    }
  }]);

  return MediaSubscriptionAPI;
}();


MediaSubscriptionAPI.baseUrl = '/api/media-subscription/';

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

/***/ "./assets/js/app/Entity/MediaSubscription.ts":
/*!***************************************************!*\
  !*** ./assets/js/app/Entity/MediaSubscription.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaSubscription; });
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Media */ "./assets/js/app/Entity/Media.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var MediaSubscription = function MediaSubscription(data) {
  _classCallCheck(this, MediaSubscription);

  this.id = data.id;
  this.created = new Date(data.created);
  this.media = new _Media__WEBPACK_IMPORTED_MODULE_0__["default"](data.media);
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
      } // Processing Object type


      if (fieldConfig.type === 'date') {
        return this.formatDate(item[fieldname]);
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Pagination.vue?vue&type=style&index=0&id=7026d37b&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Pagination.vue?vue&type=style&index=0&id=7026d37b&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0FQSS9NZWRpYVN1YnNjcmlwdGlvbkFQSS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0VudGl0eS9HZW5yZS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0VudGl0eS9NZWRpYS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0VudGl0eS9NZWRpYVN1YnNjcmlwdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnZ1ZT9hMjkwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlPzk2YzQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFnaW5hdGlvbi52dWU/ZjllNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnZ1ZT9kZTVjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Nlc3Npb24udHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVGFibGUvRmxleFRhYmxlLnZ1ZT9jMGU0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RhYmxlL0ZsZXhUYWJsZS52dWU/YjVkOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9UYWJsZS9GbGV4VGFibGUudnVlPzA1Y2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVGFibGUvRmxleFRhYmxlLnZ1ZT9kZTRiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb25maWcvdGFibGUvc2VhcmNoLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RhYmxlL0ZsZXhUYWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFnaW5hdGlvbi52dWU/NzcxOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9UYWJsZS9GbGV4VGFibGUudnVlP2M2N2EiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFnaW5hdGlvbi52dWU/ODI2ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9UYWJsZS9GbGV4VGFibGUudnVlP2Y1YzYiXSwibmFtZXMiOlsiTWVkaWFTdWJzY3JpcHRpb25BUEkiLCJjYWxsYmFjayIsImF4aW9zIiwiZ2V0IiwiYmFzZVVybCIsInRoZW4iLCJyZXNwb25zZSIsIml0ZW1zIiwiZGF0YSIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsImNvbnZlcnQiLCJtZWRpYUlkIiwicG9zdCIsInN1YnNjcmlwdGlvbiIsInVuZGVmaW5lZCIsIk1lZGlhU3Vic2NyaXB0aW9uIiwiR2VucmUiLCJpZCIsInRpdGxlIiwiTWVkaWEiLCJyZWxlYXNlRGF0ZSIsImdlbnJlcyIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJwb3N0ZXIiLCJwb3N0ZXJGdWxsVVJMIiwiYmFja2Ryb3AiLCJiYWNrZHJvcEZ1bGxVUkwiLCJ1cGRhdGVkIiwidGhlTW92aWVEYklkIiwic3RhdHVzIiwiRGF0ZSIsImF2ZXJhZ2VOb3RlIiwiZyIsImNyZWF0ZWQiLCJtZWRpYSIsIlNlc3Npb24iLCJrZXkiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ2YWx1ZSIsInNldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJjbGVhciIsImZpZWxkcyIsImxhYmVsIiwidHlwZSIsInF1YWxpdHkiLCJsYW5ndWFnZSIsInNvdXJjZSIsImZpZWxkIiwidmlldyIsInJvdXRlIiwiaWNvbiIsImNsYXNzIiwicm91dGVQYXJhbXMiLCJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJQYWdpbmF0aW9uIiwiY3VycmVudFBhZ2UiLCJsYXN0UGFnZSIsIm9uSXRlbXNJbnB1dFVwZGF0ZSIsIm9uQ3VycmVudFBhZ2VVcGRhdGUiLCJpdGVtc0lucHV0IiwibmJQZXJQYWdlIiwiTWF0aCIsInRydW5jIiwic3RhcnQiLCJlbmQiLCIkZW1pdCIsInNsaWNlIiwiVnVlIiwiUHJvcCIsIkFycmF5IiwicHJvdG90eXBlIiwiTnVtYmVyIiwiZGVmYXVsdCIsIldhdGNoIiwiQ29tcG9uZW50IiwiRmxleFRhYmxlIiwiY29uZmlnIiwiY29uZmlnSW5wdXQiLCJmaWVsZG5hbWUiLCJmaWVsZENvbmZpZyIsImdldFZhbHVlIiwiZm9ybWF0RGF0ZSIsImpvaW4iLCJnZXRWYWx1ZUxpbmsiLCJrZXlzIiwidXJsIiwiJHJvdXRlciIsInJlc29sdmUiLCJuYW1lIiwicGFyYW1zIiwiaHJlZiIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBQ3FCQSxvQjs7Ozs7Ozs7OztBQUNqQjs7OzsyQkFJY0MsUSxFQUFVO0FBQUE7O0FBQ3BCQyxrREFBSyxDQUFDQyxHQUFOLENBQVUsS0FBS0MsT0FBTCxHQUFlLEtBQXpCLEVBQ0tDLElBREwsQ0FDVSxVQUFDQyxRQUFELEVBQWM7QUFDcEIsWUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQUQsZ0JBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxPQUFkLENBQXNCLFVBQUNDLElBQUQsRUFBVTtBQUM1QkgsZUFBSyxDQUFDSSxJQUFOLENBQVcsS0FBSSxDQUFDQyxPQUFMLENBQWFGLElBQWIsQ0FBWDtBQUNILFNBRkQ7QUFHQVQsZ0JBQVEsQ0FBQ00sS0FBRCxDQUFSO0FBQ0gsT0FQRDtBQVFIO0FBQ0Q7Ozs7Ozs7O2dDQUttQk0sTyxFQUFTWixRLEVBQVU7QUFBQTs7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Q0E7QUFDQSxzQkFBc0IsU0FBUyxXQUFXLEVBQUU7QUFDNUM7QUFDQTtBQUNBLFdBQVcsMkRBQTJEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDREQUE0RDtBQUN2RTtBQUNBO0FBQ0Esc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNEJBQTRCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZ0NBQWdDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0JBQXdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUJBQXFCO0FBQ2xDO0FBQ0EsaUNBQWlDLGlCQUFpQjtBQUNsRDtBQUNBLDZCQUE2QjtBQUM3QixpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhY2NvdW50fml0ZW1+bWVkaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IE1lZGlhU3Vic2NyaXB0aW9uIGZyb20gXCIuLi9FbnRpdHkvTWVkaWFTdWJzY3JpcHRpb25cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhU3Vic2NyaXB0aW9uQVBJIHtcbiAgICAvKipcbiAgICAgKiBTZWFyY2ggb24gdGhlIHNlcnZlclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB0aGUgY29kZSB0byBiZSBleGVjdXRlZCBvbiBzdWNjZXNzXG4gICAgICovXG4gICAgc3RhdGljIGdldEFsbChjYWxsYmFjaykge1xuICAgICAgICBheGlvcy5nZXQodGhpcy5iYXNlVXJsICsgJ2FsbCcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IFtdO1xuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaCh0aGlzLmNvbnZlcnQoaXRlbSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYWxsYmFjayhpdGVtcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggb24gdGhlIHNlcnZlclxuICAgICAqIEBwYXJhbSBtZWRpYUlkXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHRoZSBjb2RlIHRvIGJlIGV4ZWN1dGVkIG9uIHN1Y2Nlc3NcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Rm9yTWVkaWEobWVkaWFJZCwgY2FsbGJhY2spIHtcbiAgICAgICAgYXhpb3MucG9zdCh0aGlzLmJhc2VVcmwgKyAncmV0cmlldmUnLCB7ICdtZWRpYSc6IG1lZGlhSWQgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gdGhpcy5jb252ZXJ0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlYXJjaCBvbiB0aGUgc2VydmVyXG4gICAgICogQHBhcmFtIG1lZGlhSWRcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGNvZGUgdG8gYmUgZXhlY3V0ZWQgb24gc3VjY2Vzc1xuICAgICAqL1xuICAgIHN0YXRpYyBhZGQobWVkaWFJZCwgY2FsbGJhY2spIHtcbiAgICAgICAgYXhpb3MucG9zdCh0aGlzLmJhc2VVcmwgKyAnYWRkJywgeyAnbWVkaWEnOiBtZWRpYUlkIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCBzdWJzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IHRoaXMuY29udmVydChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggb24gdGhlIHNlcnZlclxuICAgICAqIEBwYXJhbSBtZWRpYUlkXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHRoZSBjb2RlIHRvIGJlIGV4ZWN1dGVkIG9uIHN1Y2Nlc3NcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVtb3ZlKG1lZGlhSWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLnBvc3QodGhpcy5iYXNlVXJsICsgJ3JlbW92ZScsIHsgJ21lZGlhJzogbWVkaWFJZCB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvY2VzcyBpbnB1dCBhcnJheSBhbmQgcmV0dXJuIHRoZSBsaXN0IG9mIG9iamVjdHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIE1lZGlhU3Vic2NyaXB0aW9uXG4gICAgICovXG4gICAgc3RhdGljIGNvbnZlcnQoZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IE1lZGlhU3Vic2NyaXB0aW9uKGRhdGEpO1xuICAgIH1cbn1cbk1lZGlhU3Vic2NyaXB0aW9uQVBJLmJhc2VVcmwgPSAnL2FwaS9tZWRpYS1zdWJzY3JpcHRpb24vJztcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbnJlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgR2VucmUgZnJvbSBcIi4vR2VucmVcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHRoaXMucmVsZWFzZURhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZ2VucmVzID0gW107XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRhdGEuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBkYXRhLmNhdGVnb3J5O1xuICAgICAgICB0aGlzLnBvc3RlciA9IGRhdGEucG9zdGVyRnVsbFVSTDtcbiAgICAgICAgdGhpcy5iYWNrZHJvcCA9IGRhdGEuYmFja2Ryb3BGdWxsVVJMO1xuICAgICAgICB0aGlzLnVwZGF0ZWQgPSBkYXRhLnVwZGF0ZWQ7XG4gICAgICAgIHRoaXMudGhlTW92aWVEYklkID0gZGF0YS50aGVNb3ZpZURiSWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gZGF0YS5zdGF0dXM7XG4gICAgICAgIGlmIChkYXRhLnJlbGVhc2VEYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJlbGVhc2VEYXRlID0gbmV3IERhdGUoZGF0YS5yZWxlYXNlRGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdmVyYWdlTm90ZSA9IGRhdGEuYXZlcmFnZU5vdGU7XG4gICAgICAgIGRhdGEuZ2VucmVzLmZvckVhY2goKGcpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2VucmVzLnB1c2gobmV3IEdlbnJlKGcpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gbmV3IERhdGUoZGF0YS5jcmVhdGVkKTtcbiAgICAgICAgdGhpcy5tZWRpYSA9IG5ldyBNZWRpYShkYXRhLm1lZGlhKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcwMjZkMzdiJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcwMjZkMzdiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzAyNmQzN2JcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvc3J2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3MDI2ZDM3YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3MDI2ZDM3YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGFnaW5hdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzAyNmQzN2Imc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzAyNmQzN2InLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnaW5hdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MDI2ZDM3YiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnaW5hdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MDI2ZDM3YiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnaW5hdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzAyNmQzN2Imc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9uIHtcbiAgICBzdGF0aWMgZ2V0KGtleSkge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0T2JqZWN0KGtleSkge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0T2JqZWN0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGRlc3Ryb3koKSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GbGV4VGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwYjk0ZTIzJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZsZXhUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZsZXhUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRmxleFRhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMwYjk0ZTIzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzBiOTRlMjNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvc3J2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczMGI5NGUyMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczMGI5NGUyMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmxleFRhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMGI5NGUyMyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczMGI5NGUyMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvVGFibGUvRmxleFRhYmxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmxleFRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GbGV4VGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GbGV4VGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzBiOTRlMjMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZsZXhUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMGI5NGUyMyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmxleFRhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMGI5NGUyMyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIlRpdGxlXCIsXG4gICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICBsYWJlbDogXCJDYXTDqWdvcmllXCIsXG4gICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICB9LFxuICAgICAgICBxdWFsaXR5OiB7XG4gICAgICAgICAgICBsYWJlbDogXCJRdWFsaXTDqVwiLFxuICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBsYW5ndWFnZToge1xuICAgICAgICAgICAgbGFiZWw6IFwiTGFuZ3VlXCIsXG4gICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHNvdXJjZToge1xuICAgICAgICAgICAgbGFiZWw6IFwiU2l0ZSBTb3VyY2VcIixcbiAgICAgICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBmaWVsZDogJ3RpdGxlJ1xuICAgICAgICB9LFxuICAgICAgICB2aWV3OiB7XG4gICAgICAgICAgICBsYWJlbDogXCJEZXRhaWxcIixcbiAgICAgICAgICAgIHR5cGU6IFwicm91dGVcIixcbiAgICAgICAgICAgIHJvdXRlOiBcIml0ZW0tdmlld1wiLFxuICAgICAgICAgICAgaWNvbjogJ2ZhIGZhLWV5ZScsXG4gICAgICAgICAgICBjbGFzczogJ3RleHQtY2VudGVyJyxcbiAgICAgICAgICAgIHJvdXRlUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6ICdpZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3AsIFZ1ZSwgV2F0Y2ggfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xubGV0IFBhZ2luYXRpb24gPSBjbGFzcyBQYWdpbmF0aW9uIGV4dGVuZHMgVnVlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgICAgIHRoaXMubGFzdFBhZ2UgPSBudWxsO1xuICAgIH1cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgICAgdGhpcy5vbkl0ZW1zSW5wdXRVcGRhdGUoKTtcbiAgICAgICAgdGhpcy5vbkN1cnJlbnRQYWdlVXBkYXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGN1bCB0aGUgbWF4aW11bSBudW1iZXIgb2YgcGFnZSB0byBkaXNwbGF5XG4gICAgICovXG4gICAgb25JdGVtc0lucHV0VXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5pdGVtc0lucHV0Lmxlbmd0aCA8PSB0aGlzLm5iUGVyUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0UGFnZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RQYWdlID0gTWF0aC50cnVuYyh0aGlzLml0ZW1zSW5wdXQubGVuZ3RoIC8gdGhpcy5uYlBlclBhZ2UpO1xuICAgICAgICAgICAgaWYgKCh0aGlzLml0ZW1zSW5wdXQubGVuZ3RoICUgdGhpcy5uYlBlclBhZ2UpID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZ2UrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgICAgdGhpcy5vbkN1cnJlbnRQYWdlVXBkYXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGN1bCBvZiBpdGVtIGxpc3QgdG8gZGlzcGxheVxuICAgICAqL1xuICAgIG9uQ3VycmVudFBhZ2VVcGRhdGUoKSB7XG4gICAgICAgIGxldCBzdGFydCA9ICh0aGlzLmN1cnJlbnRQYWdlIC0gMSkgKiB0aGlzLm5iUGVyUGFnZTtcbiAgICAgICAgbGV0IGVuZCA9IHN0YXJ0ICsgdGhpcy5uYlBlclBhZ2U7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdGhpcy5pdGVtc0lucHV0LnNsaWNlKHN0YXJ0LCBlbmQpKTtcbiAgICB9XG59O1xuX19kZWNvcmF0ZShbXG4gICAgUHJvcCh7IHR5cGU6IEFycmF5IH0pXG5dLCBQYWdpbmF0aW9uLnByb3RvdHlwZSwgXCJpdGVtc0lucHV0XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBQcm9wKHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAxMCB9KVxuXSwgUGFnaW5hdGlvbi5wcm90b3R5cGUsIFwibmJQZXJQYWdlXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBXYXRjaChcIml0ZW1zSW5wdXRcIilcbl0sIFBhZ2luYXRpb24ucHJvdG90eXBlLCBcIm9uSXRlbXNJbnB1dFVwZGF0ZVwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIFdhdGNoKFwiY3VycmVudFBhZ2VcIilcbl0sIFBhZ2luYXRpb24ucHJvdG90eXBlLCBcIm9uQ3VycmVudFBhZ2VVcGRhdGVcIiwgbnVsbCk7XG5QYWdpbmF0aW9uID0gX19kZWNvcmF0ZShbXG4gICAgQ29tcG9uZW50XG5dLCBQYWdpbmF0aW9uKTtcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3AsIFZ1ZSwgV2F0Y2ggfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xubGV0IEZsZXhUYWJsZSA9IGNsYXNzIEZsZXhUYWJsZSBleHRlbmRzIFZ1ZSB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGl0ZW1zOiB0aGlzLml0ZW1zSW5wdXQsXG4gICAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlnSW5wdXQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFRpdGxlKGZpZWxkbmFtZSkge1xuICAgICAgICBpZiAodGhpcy5jb25maWcuZmllbGRzW2ZpZWxkbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZpZWxkc1tmaWVsZG5hbWVdLmxhYmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5maWVsZHNbZmllbGRuYW1lXS5sYWJlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGRuYW1lO1xuICAgIH1cbiAgICBnZXRWYWx1ZShpdGVtLCBmaWVsZG5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZpZWxkc1tmaWVsZG5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmaWVsZENvbmZpZyA9IHRoaXMuY29uZmlnLmZpZWxkc1tmaWVsZG5hbWVdO1xuICAgICAgICAvLyBQcm9jZXNzaW5nIE9iamVjdCB0eXBlXG4gICAgICAgIGlmIChmaWVsZENvbmZpZy50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoaXRlbVtmaWVsZG5hbWVdLCBmaWVsZENvbmZpZy5maWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvY2Vzc2luZyBPYmplY3QgdHlwZVxuICAgICAgICBpZiAoZmllbGRDb25maWcudHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlKGl0ZW1bZmllbGRuYW1lXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvY2Vzc2luZyBJbWFnZSB0eXBlXG4gICAgICAgIGlmIChmaWVsZENvbmZpZy50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gJzxpbWcgc3JjPVwiJyArIGl0ZW1bZmllbGRuYW1lXSArICdcIiBhbHQ9XCInICsgZmllbGRuYW1lICsgJ1wiIC8+JztcbiAgICAgICAgfVxuICAgICAgICAvLyBQcm9jZXNzaW5nIEFycmF5IHR5cGVcbiAgICAgICAgaWYgKGZpZWxkQ29uZmlnLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGxldCBqb2luID0gZmllbGRDb25maWcuam9pbjtcbiAgICAgICAgICAgIGlmIChqb2luID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBqb2luID0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVtW2ZpZWxkbmFtZV0uam9pbihqb2luKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcm9jZXNzaW5nIFVSTCB0eXBlXG4gICAgICAgIGlmIChmaWVsZENvbmZpZy50eXBlID09PSAndXJsJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVMaW5rKGZpZWxkbmFtZSwgaXRlbVtmaWVsZG5hbWVdLCBcIl9ibGFua1wiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcm9jZXNzaW5nIFJvdXRlIHR5cGVcbiAgICAgICAgaWYgKGZpZWxkQ29uZmlnLnR5cGUgPT09ICdyb3V0ZScpIHtcbiAgICAgICAgICAgIGxldCByb3V0ZVBhcmFtcyA9IHt9O1xuICAgICAgICAgICAgaWYgKGZpZWxkQ29uZmlnLnJvdXRlUGFyYW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhmaWVsZENvbmZpZy5yb3V0ZVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGZpZWxkQ29uZmlnLnJvdXRlUGFyYW1zW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlUGFyYW1zW2tleV0gPSBpdGVtW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLiRyb3V0ZXIucmVzb2x2ZSh7IG5hbWU6IGZpZWxkQ29uZmlnLnJvdXRlLCBwYXJhbXM6IHJvdXRlUGFyYW1zIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVMaW5rKGZpZWxkbmFtZSwgdXJsLmhyZWYpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlZmF1bHQgdmFsdWVcbiAgICAgICAgcmV0dXJuIGl0ZW1bZmllbGRuYW1lXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbGlua1xuICAgICAqXG4gICAgICogQHBhcmFtIGZpZWxkbmFtZVxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIFN0cmluZ1xuICAgICAqL1xuICAgIGdldFZhbHVlTGluayhmaWVsZG5hbWUsIHVybCwgdGFyZ2V0ID0gXCJcIikge1xuICAgICAgICBsZXQgbGFiZWwgPSBbXTtcbiAgICAgICAgbGV0IGZpZWxkQ29uZmlnID0gdGhpcy5jb25maWcuZmllbGRzW2ZpZWxkbmFtZV07XG4gICAgICAgIGlmIChmaWVsZENvbmZpZy5pY29uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxhYmVsLnB1c2goJzxpIGNsYXNzPVwiJyArIGZpZWxkQ29uZmlnLmljb24gKyAnXCI+PC9pPicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZENvbmZpZy50ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxhYmVsLnB1c2goZmllbGRDb25maWcudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbGFiZWwucHVzaChmaWVsZG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnPGEgaHJlZj1cIicgKyB1cmwgKyAnXCIgdGFyZ2V0PVwiJyArIHRhcmdldCArICdcIj4nICsgbGFiZWwuam9pbignICcpICsgJzwvYT4nO1xuICAgIH1cbiAgICBvbkl0ZW1zSW5wdXRDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zSW5wdXQ7XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBBcnJheSB9KVxuXSwgRmxleFRhYmxlLnByb3RvdHlwZSwgXCJpdGVtc0lucHV0XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBQcm9wKHsgdHlwZTogT2JqZWN0IH0pXG5dLCBGbGV4VGFibGUucHJvdG90eXBlLCBcImNvbmZpZ0lucHV0XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBXYXRjaCgnaXRlbXNJbnB1dCcpXG5dLCBGbGV4VGFibGUucHJvdG90eXBlLCBcIm9uSXRlbXNJbnB1dENoYW5nZVwiLCBudWxsKTtcbkZsZXhUYWJsZSA9IF9fZGVjb3JhdGUoW1xuICAgIENvbXBvbmVudFxuXSwgRmxleFRhYmxlKTtcbmV4cG9ydCBkZWZhdWx0IEZsZXhUYWJsZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmxhc3RQYWdlID4gMFxuICAgID8gX2MoXCJ2LWxheW91dFwiLCB7IGF0dHJzOiB7IHdyYXA6IFwiXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IHhzMTIgbWQ0IHRleHQteHMtY2VudGVyIHRleHQtbWQtbGVmdFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgSWwgeSBhIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3ModGhpcy5pdGVtc0lucHV0Lmxlbmd0aCkgK1xuICAgICAgICAgICAgICAgIFwiIMOpbMOpbWVudHNcXG4gICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IHhzMTIgbWQ4IHRleHQteHMtY2VudGVyIHRleHQtbWQtcmlnaHRcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidi1wYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbGVuZ3RoOiBfdm0ubGFzdFBhZ2UgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50UGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50UGFnZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWxpc3RcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyByb3ctaGVhZGVyXCIgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5jb25maWcuZmllbGRzLCBmdW5jdGlvbihjLCBmKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICBjbGFzczogYy5jbGFzcyxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5nZXRUaXRsZShmKSkgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0uaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNwYWNlclwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5jb25maWcuZmllbGRzLCBmdW5jdGlvbihjLCBmKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBjbGFzczogYy5jbGFzcyB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5nZXRWYWx1ZShpdGVtLCBmKSkgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9