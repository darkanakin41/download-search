(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home"],{

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
     * @return Source
     */

  }, {
    key: "convert",
    value: function convert(data) {
      return new _Entity_Source__WEBPACK_IMPORTED_MODULE_1__["default"](data);
    }
  }]);

  return SourceAPI;
}();



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

/***/ "./assets/js/page/HomePage.vue":
/*!*************************************!*\
  !*** ./assets/js/page/HomePage.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomePage_vue_vue_type_template_id_71eb1d56_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.vue?vue&type=template&id=71eb1d56&scoped=true& */ "./assets/js/page/HomePage.vue?vue&type=template&id=71eb1d56&scoped=true&");
/* harmony import */ var _HomePage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.vue?vue&type=script&lang=ts& */ "./assets/js/page/HomePage.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _HomePage_vue_vue_type_style_index_0_id_71eb1d56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage.vue?vue&type=style&index=0&id=71eb1d56&lang=scss&scoped=true& */ "./assets/js/page/HomePage.vue?vue&type=style&index=0&id=71eb1d56&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HomePage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomePage_vue_vue_type_template_id_71eb1d56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomePage_vue_vue_type_template_id_71eb1d56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "71eb1d56",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/page/HomePage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/page/HomePage.vue?vue&type=script&lang=ts&":
/*!**************************************************************!*\
  !*** ./assets/js/page/HomePage.vue?vue&type=script&lang=ts& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--6-0!../../../node_modules/ts-loader??ref--6-1!../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/page/HomePage.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_6_0_node_modules_ts_loader_index_js_ref_6_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/page/HomePage.vue?vue&type=style&index=0&id=71eb1d56&lang=scss&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./assets/js/page/HomePage.vue?vue&type=style&index=0&id=71eb1d56&lang=scss&scoped=true& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_71eb1d56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader??ref--4-2!../../../node_modules/sass-loader/lib/loader.js??ref--4-3!../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=style&index=0&id=71eb1d56&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/page/HomePage.vue?vue&type=style&index=0&id=71eb1d56&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_71eb1d56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_71eb1d56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_71eb1d56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_71eb1d56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_2_node_modules_sass_loader_lib_loader_js_ref_4_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_71eb1d56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/page/HomePage.vue?vue&type=template&id=71eb1d56&scoped=true&":
/*!********************************************************************************!*\
  !*** ./assets/js/page/HomePage.vue?vue&type=template&id=71eb1d56&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_71eb1d56_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=template&id=71eb1d56&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/page/HomePage.vue?vue&type=template&id=71eb1d56&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_71eb1d56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_71eb1d56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/page/HomePage.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--6-0!./node_modules/ts-loader??ref--6-1!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/page/HomePage.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var _app_API_SourceAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/API/SourceAPI */ "./assets/js/app/API/SourceAPI.ts");
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
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomePage).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: "data",
    value: function data() {
      return {
        sources: []
      };
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this = this;

      _app_API_SourceAPI__WEBPACK_IMPORTED_MODULE_1__["default"].getAll(function (response) {
        _this.sources = [];
        response.data.forEach(function (item) {
          _this.sources.push(_app_API_SourceAPI__WEBPACK_IMPORTED_MODULE_1__["default"].convert(item));
        });
      });
    }
  }]);

  return HomePage;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]);

HomePage = __decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
  components: {}
})], HomePage);
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/page/HomePage.vue?vue&type=style&index=0&id=71eb1d56&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/page/HomePage.vue?vue&type=style&index=0&id=71eb1d56&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/page/HomePage.vue?vue&type=template&id=71eb1d56&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/page/HomePage.vue?vue&type=template&id=71eb1d56&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "callout success" }, [
      _c("div", { staticClass: "grid-container" }, [
        _c("h1", { staticClass: "title" }, [
          _vm._v("Bienvenue sur Download Search")
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Cette application vous permet de rechercher des liens de téléchargements parmi les suites suivants :"
          )
        ]),
        _vm._v(" "),
        _c(
          "ul",
          _vm._l(_vm.sources, function(source) {
            return _c("li", [
              _c("a", { attrs: { href: source.baseUrl, target: "_blank" } }, [
                _vm._v(_vm._s(source.title))
              ])
            ])
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "text-center" },
      [
        _c(
          "router-link",
          {
            staticClass: "button custom big",
            attrs: { to: { name: "search" }, exact: "" }
          },
          [
            _c("i", { staticClass: "fa fa-search" }),
            _vm._v(" Accéder à la recherche\n        ")
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0FQSS9Tb3VyY2VBUEkudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC9FbnRpdHkvU291cmNlLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL0hvbWVQYWdlLnZ1ZT84ZTEzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL0hvbWVQYWdlLnZ1ZT8yYThlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL0hvbWVQYWdlLnZ1ZT9kZDFmIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL0hvbWVQYWdlLnZ1ZT8wOTY2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlL0hvbWVQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZS9Ib21lUGFnZS52dWU/Y2QwOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZS9Ib21lUGFnZS52dWU/MGFlMSJdLCJuYW1lcyI6WyJTb3VyY2VBUEkiLCJjYWxsYmFjayIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwidGhlbiIsImRhdGEiLCJTb3VyY2UiLCJpZCIsInRpdGxlIiwiYmFzZVVybCIsIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZCIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIkhvbWVQYWdlIiwic291cmNlcyIsImdldEFsbCIsInJlc3BvbnNlIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiY29udmVydCIsIlZ1ZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBQ3FCQSxTOzs7Ozs7Ozs7O0FBQ2pCOzs7OzJCQUljQyxRLEVBQVU7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aWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgU291cmNlIGZyb20gXCIuLi9FbnRpdHkvU291cmNlXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VyY2VBUEkge1xuICAgIC8qKlxuICAgICAqIFNlYXJjaCBvbiB0aGUgc2VydmVyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHRoZSBjb2RlIHRvIGJlIGV4ZWN1dGVkIG9uIHN1Y2Nlc3NcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0QWxsKGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICB1cmw6ICcvYXBpL3NvdXJjZS9hbGwnLFxuICAgICAgICB9KS50aGVuKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvY2VzcyBpbnB1dCBhcnJheSBhbmQgcmV0dXJuIHRoZSBsaXN0IG9mIG9iamVjdHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIFNvdXJjZVxuICAgICAqL1xuICAgIHN0YXRpYyBjb252ZXJ0KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTb3VyY2UoZGF0YSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291cmNlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gZGF0YS5iYXNlVXJsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcxZWIxZDU2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWVQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSG9tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0hvbWVQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcxZWIxZDU2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzFlYjFkNTZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvc3J2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3MWViMWQ1NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3MWViMWQ1NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcxZWIxZDU2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzcxZWIxZDU2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvcGFnZS9Ib21lUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWVQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWVQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcxZWIxZDU2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MWViMWQ1NiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcxZWIxZDU2JnNjb3BlZD10cnVlJlwiIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgQ29tcG9uZW50LCBWdWUgfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IFNvdXJjZUFQSSBmcm9tIFwiLi4vYXBwL0FQSS9Tb3VyY2VBUElcIjtcbmxldCBIb21lUGFnZSA9IGNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgVnVlIHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc291cmNlczogW10sXG4gICAgICAgIH07XG4gICAgfVxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIFNvdXJjZUFQSS5nZXRBbGwoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZXMgPSBbXTtcbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlcy5wdXNoKFNvdXJjZUFQSS5jb252ZXJ0KGl0ZW0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuSG9tZVBhZ2UgPSBfX2RlY29yYXRlKFtcbiAgICBDb21wb25lbnQoe1xuICAgICAgICBjb21wb25lbnRzOiB7fVxuICAgIH0pXG5dLCBIb21lUGFnZSk7XG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FsbG91dCBzdWNjZXNzXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJncmlkLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIkJpZW52ZW51ZSBzdXIgRG93bmxvYWQgU2VhcmNoXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiQ2V0dGUgYXBwbGljYXRpb24gdm91cyBwZXJtZXQgZGUgcmVjaGVyY2hlciBkZXMgbGllbnMgZGUgdMOpbMOpY2hhcmdlbWVudHMgcGFybWkgbGVzIHN1aXRlcyBzdWl2YW50cyA6XCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgX3ZtLl9sKF92bS5zb3VyY2VzLCBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogc291cmNlLmJhc2VVcmwsIHRhcmdldDogXCJfYmxhbmtcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHNvdXJjZS50aXRsZSkpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDBcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGN1c3RvbSBiaWdcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwic2VhcmNoXCIgfSwgZXhhY3Q6IFwiXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc2VhcmNoXCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgQWNjw6lkZXIgw6AgbGEgcmVjaGVyY2hlXFxuICAgICAgICBcIilcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=