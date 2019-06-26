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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Table/FlexTable.vue?vue&type=style&index=0&id=30b94e23&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-2!./node_modules/sass-loader/lib/loader.js??ref--4-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Table/FlexTable.vue?vue&type=style&index=0&id=30b94e23&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0FQSS9NZWRpYVN1YnNjcmlwdGlvbkFQSS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwL0VudGl0eS9NZWRpYVN1YnNjcmlwdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TZXNzaW9uLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RhYmxlL0ZsZXhUYWJsZS52dWU/YzBlNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9UYWJsZS9GbGV4VGFibGUudnVlP2I1ZDkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVGFibGUvRmxleFRhYmxlLnZ1ZT8wNWNkIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RhYmxlL0ZsZXhUYWJsZS52dWU/ZGU0YiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29uZmlnL3RhYmxlL3NlYXJjaC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9UYWJsZS9GbGV4VGFibGUudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RhYmxlL0ZsZXhUYWJsZS52dWU/YzY3YSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9UYWJsZS9GbGV4VGFibGUudnVlP2Y1YzYiXSwibmFtZXMiOlsiTWVkaWFTdWJzY3JpcHRpb25BUEkiLCJjYWxsYmFjayIsImF4aW9zIiwiZ2V0IiwiYmFzZVVybCIsInRoZW4iLCJyZXNwb25zZSIsIml0ZW1zIiwiZGF0YSIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsImNvbnZlcnQiLCJtZWRpYUlkIiwicG9zdCIsInN1YnNjcmlwdGlvbiIsInVuZGVmaW5lZCIsIk1lZGlhU3Vic2NyaXB0aW9uIiwiaWQiLCJjcmVhdGVkIiwiRGF0ZSIsIm1lZGlhIiwiTWVkaWEiLCJTZXNzaW9uIiwia2V5Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidmFsdWUiLCJzZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiY2xlYXIiLCJmaWVsZHMiLCJ0aXRsZSIsImxhYmVsIiwidHlwZSIsImNhdGVnb3J5IiwicXVhbGl0eSIsImxhbmd1YWdlIiwic291cmNlIiwiZmllbGQiLCJ2aWV3Iiwicm91dGUiLCJpY29uIiwiY2xhc3MiLCJyb3V0ZVBhcmFtcyIsIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0IiwiZGVzYyIsImMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZCIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIkZsZXhUYWJsZSIsIml0ZW1zSW5wdXQiLCJjb25maWciLCJjb25maWdJbnB1dCIsImZpZWxkbmFtZSIsImZpZWxkQ29uZmlnIiwiZ2V0VmFsdWUiLCJmb3JtYXREYXRlIiwiam9pbiIsImdldFZhbHVlTGluayIsImtleXMiLCJ1cmwiLCIkcm91dGVyIiwicmVzb2x2ZSIsIm5hbWUiLCJwYXJhbXMiLCJocmVmIiwidGV4dCIsIlZ1ZSIsIlByb3AiLCJBcnJheSIsInByb3RvdHlwZSIsIldhdGNoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUNxQkEsb0I7Ozs7Ozs7Ozs7QUFDakI7Ozs7MkJBSWNDLFEsRUFBVTtBQUFBOztBQUNwQkMsa0RBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQUtDLE9BQUwsR0FBZSxLQUF6QixFQUNLQyxJQURMLENBQ1UsVUFBQ0MsUUFBRCxFQUFjO0FBQ3BCLFlBQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0FELGdCQUFRLENBQUNFLElBQVQsQ0FBY0MsT0FBZCxDQUFzQixVQUFDQyxJQUFELEVBQVU7QUFDNUJILGVBQUssQ0FBQ0ksSUFBTixDQUFXLEtBQUksQ0FBQ0Ms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QTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQkFBcUI7QUFDbEM7QUFDQSxpQ0FBaUMsaUJBQWlCO0FBQ2xEO0FBQ0EsNkJBQTZCO0FBQzdCLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFjY291bnR+aXRlbX5tZWRpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTWVkaWFTdWJzY3JpcHRpb24gZnJvbSBcIi4uL0VudGl0eS9NZWRpYVN1YnNjcmlwdGlvblwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFTdWJzY3JpcHRpb25BUEkge1xuICAgIC8qKlxuICAgICAqIFNlYXJjaCBvbiB0aGUgc2VydmVyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHRoZSBjb2RlIHRvIGJlIGV4ZWN1dGVkIG9uIHN1Y2Nlc3NcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0QWxsKGNhbGxiYWNrKSB7XG4gICAgICAgIGF4aW9zLmdldCh0aGlzLmJhc2VVcmwgKyAnYWxsJylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gW107XG4gICAgICAgICAgICByZXNwb25zZS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHRoaXMuY29udmVydChpdGVtKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGl0ZW1zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlYXJjaCBvbiB0aGUgc2VydmVyXG4gICAgICogQHBhcmFtIG1lZGlhSWRcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGNvZGUgdG8gYmUgZXhlY3V0ZWQgb24gc3VjY2Vzc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRGb3JNZWRpYShtZWRpYUlkLCBjYWxsYmFjaykge1xuICAgICAgICBheGlvcy5wb3N0KHRoaXMuYmFzZVVybCArICdyZXRyaWV2ZScsIHsgJ21lZGlhJzogbWVkaWFJZCB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSB0aGlzLmNvbnZlcnQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhzdWJzY3JpcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VhcmNoIG9uIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0gbWVkaWFJZFxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB0aGUgY29kZSB0byBiZSBleGVjdXRlZCBvbiBzdWNjZXNzXG4gICAgICovXG4gICAgc3RhdGljIGFkZChtZWRpYUlkLCBjYWxsYmFjaykge1xuICAgICAgICBheGlvcy5wb3N0KHRoaXMuYmFzZVVybCArICdhZGQnLCB7ICdtZWRpYSc6IG1lZGlhSWQgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gdGhpcy5jb252ZXJ0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlYXJjaCBvbiB0aGUgc2VydmVyXG4gICAgICogQHBhcmFtIG1lZGlhSWRcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGNvZGUgdG8gYmUgZXhlY3V0ZWQgb24gc3VjY2Vzc1xuICAgICAqL1xuICAgIHN0YXRpYyByZW1vdmUobWVkaWFJZCwgY2FsbGJhY2spIHtcbiAgICAgICAgYXhpb3MucG9zdCh0aGlzLmJhc2VVcmwgKyAncmVtb3ZlJywgeyAnbWVkaWEnOiBtZWRpYUlkIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGlucHV0IGFycmF5IGFuZCByZXR1cm4gdGhlIGxpc3Qgb2Ygb2JqZWN0c1xuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKlxuICAgICAqIEByZXR1cm4gTWVkaWFTdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgY29udmVydChkYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgTWVkaWFTdWJzY3JpcHRpb24oZGF0YSk7XG4gICAgfVxufVxuTWVkaWFTdWJzY3JpcHRpb25BUEkuYmFzZVVybCA9ICcvYXBpL21lZGlhLXN1YnNjcmlwdGlvbi8nO1xuIiwiaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gbmV3IERhdGUoZGF0YS5jcmVhdGVkKTtcbiAgICAgICAgdGhpcy5tZWRpYSA9IG5ldyBNZWRpYShkYXRhLm1lZGlhKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9uIHtcbiAgICBzdGF0aWMgZ2V0KGtleSkge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0T2JqZWN0KGtleSkge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0T2JqZWN0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGRlc3Ryb3koKSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GbGV4VGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwYjk0ZTIzJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZsZXhUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZsZXhUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRmxleFRhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMwYjk0ZTIzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzBiOTRlMjNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvc3J2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczMGI5NGUyMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczMGI5NGUyMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmxleFRhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMGI5NGUyMyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczMGI5NGUyMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvVGFibGUvRmxleFRhYmxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmxleFRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GbGV4VGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GbGV4VGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzBiOTRlMjMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZsZXhUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMGI5NGUyMyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmxleFRhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMGI5NGUyMyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIlRpdGxlXCIsXG4gICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICBsYWJlbDogXCJDYXTDqWdvcmllXCIsXG4gICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICB9LFxuICAgICAgICBxdWFsaXR5OiB7XG4gICAgICAgICAgICBsYWJlbDogXCJRdWFsaXTDqVwiLFxuICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBsYW5ndWFnZToge1xuICAgICAgICAgICAgbGFiZWw6IFwiTGFuZ3VlXCIsXG4gICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHNvdXJjZToge1xuICAgICAgICAgICAgbGFiZWw6IFwiU2l0ZSBTb3VyY2VcIixcbiAgICAgICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBmaWVsZDogJ3RpdGxlJ1xuICAgICAgICB9LFxuICAgICAgICB2aWV3OiB7XG4gICAgICAgICAgICBsYWJlbDogXCJEZXRhaWxcIixcbiAgICAgICAgICAgIHR5cGU6IFwicm91dGVcIixcbiAgICAgICAgICAgIHJvdXRlOiBcIml0ZW0tdmlld1wiLFxuICAgICAgICAgICAgaWNvbjogJ2ZhIGZhLWV5ZScsXG4gICAgICAgICAgICBjbGFzczogJ3RleHQtY2VudGVyJyxcbiAgICAgICAgICAgIHJvdXRlUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6ICdpZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3AsIFZ1ZSwgV2F0Y2ggfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xubGV0IEZsZXhUYWJsZSA9IGNsYXNzIEZsZXhUYWJsZSBleHRlbmRzIFZ1ZSB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGl0ZW1zOiB0aGlzLml0ZW1zSW5wdXQsXG4gICAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlnSW5wdXQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFRpdGxlKGZpZWxkbmFtZSkge1xuICAgICAgICBpZiAodGhpcy5jb25maWcuZmllbGRzW2ZpZWxkbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZpZWxkc1tmaWVsZG5hbWVdLmxhYmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5maWVsZHNbZmllbGRuYW1lXS5sYWJlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGRuYW1lO1xuICAgIH1cbiAgICBnZXRWYWx1ZShpdGVtLCBmaWVsZG5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZpZWxkc1tmaWVsZG5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmaWVsZENvbmZpZyA9IHRoaXMuY29uZmlnLmZpZWxkc1tmaWVsZG5hbWVdO1xuICAgICAgICAvLyBQcm9jZXNzaW5nIE9iamVjdCB0eXBlXG4gICAgICAgIGlmIChmaWVsZENvbmZpZy50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoaXRlbVtmaWVsZG5hbWVdLCBmaWVsZENvbmZpZy5maWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvY2Vzc2luZyBPYmplY3QgdHlwZVxuICAgICAgICBpZiAoZmllbGRDb25maWcudHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlKGl0ZW1bZmllbGRuYW1lXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvY2Vzc2luZyBJbWFnZSB0eXBlXG4gICAgICAgIGlmIChmaWVsZENvbmZpZy50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gJzxpbWcgc3JjPVwiJyArIGl0ZW1bZmllbGRuYW1lXSArICdcIiBhbHQ9XCInICsgZmllbGRuYW1lICsgJ1wiIC8+JztcbiAgICAgICAgfVxuICAgICAgICAvLyBQcm9jZXNzaW5nIEFycmF5IHR5cGVcbiAgICAgICAgaWYgKGZpZWxkQ29uZmlnLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGxldCBqb2luID0gZmllbGRDb25maWcuam9pbjtcbiAgICAgICAgICAgIGlmIChqb2luID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBqb2luID0gJywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVtW2ZpZWxkbmFtZV0uam9pbihqb2luKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcm9jZXNzaW5nIFVSTCB0eXBlXG4gICAgICAgIGlmIChmaWVsZENvbmZpZy50eXBlID09PSAndXJsJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVMaW5rKGZpZWxkbmFtZSwgaXRlbVtmaWVsZG5hbWVdLCBcIl9ibGFua1wiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcm9jZXNzaW5nIFJvdXRlIHR5cGVcbiAgICAgICAgaWYgKGZpZWxkQ29uZmlnLnR5cGUgPT09ICdyb3V0ZScpIHtcbiAgICAgICAgICAgIGxldCByb3V0ZVBhcmFtcyA9IHt9O1xuICAgICAgICAgICAgaWYgKGZpZWxkQ29uZmlnLnJvdXRlUGFyYW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhmaWVsZENvbmZpZy5yb3V0ZVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGZpZWxkQ29uZmlnLnJvdXRlUGFyYW1zW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlUGFyYW1zW2tleV0gPSBpdGVtW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLiRyb3V0ZXIucmVzb2x2ZSh7IG5hbWU6IGZpZWxkQ29uZmlnLnJvdXRlLCBwYXJhbXM6IHJvdXRlUGFyYW1zIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVMaW5rKGZpZWxkbmFtZSwgdXJsLmhyZWYpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlZmF1bHQgdmFsdWVcbiAgICAgICAgcmV0dXJuIGl0ZW1bZmllbGRuYW1lXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbGlua1xuICAgICAqXG4gICAgICogQHBhcmFtIGZpZWxkbmFtZVxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIFN0cmluZ1xuICAgICAqL1xuICAgIGdldFZhbHVlTGluayhmaWVsZG5hbWUsIHVybCwgdGFyZ2V0ID0gXCJcIikge1xuICAgICAgICBsZXQgbGFiZWwgPSBbXTtcbiAgICAgICAgbGV0IGZpZWxkQ29uZmlnID0gdGhpcy5jb25maWcuZmllbGRzW2ZpZWxkbmFtZV07XG4gICAgICAgIGlmIChmaWVsZENvbmZpZy5pY29uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxhYmVsLnB1c2goJzxpIGNsYXNzPVwiJyArIGZpZWxkQ29uZmlnLmljb24gKyAnXCI+PC9pPicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZENvbmZpZy50ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxhYmVsLnB1c2goZmllbGRDb25maWcudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbGFiZWwucHVzaChmaWVsZG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnPGEgaHJlZj1cIicgKyB1cmwgKyAnXCIgdGFyZ2V0PVwiJyArIHRhcmdldCArICdcIj4nICsgbGFiZWwuam9pbignICcpICsgJzwvYT4nO1xuICAgIH1cbiAgICBvbkl0ZW1zSW5wdXRDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zSW5wdXQ7XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIFByb3AoeyB0eXBlOiBBcnJheSB9KVxuXSwgRmxleFRhYmxlLnByb3RvdHlwZSwgXCJpdGVtc0lucHV0XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBQcm9wKHsgdHlwZTogT2JqZWN0IH0pXG5dLCBGbGV4VGFibGUucHJvdG90eXBlLCBcImNvbmZpZ0lucHV0XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBXYXRjaCgnaXRlbXNJbnB1dCcpXG5dLCBGbGV4VGFibGUucHJvdG90eXBlLCBcIm9uSXRlbXNJbnB1dENoYW5nZVwiLCBudWxsKTtcbkZsZXhUYWJsZSA9IF9fZGVjb3JhdGUoW1xuICAgIENvbXBvbmVudFxuXSwgRmxleFRhYmxlKTtcbmV4cG9ydCBkZWZhdWx0IEZsZXhUYWJsZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWxpc3RcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyByb3ctaGVhZGVyXCIgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5jb25maWcuZmllbGRzLCBmdW5jdGlvbihjLCBmKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICBjbGFzczogYy5jbGFzcyxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5nZXRUaXRsZShmKSkgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0uaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNwYWNlclwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5jb25maWcuZmllbGRzLCBmdW5jdGlvbihjLCBmKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBjbGFzczogYy5jbGFzcyB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5nZXRWYWx1ZShpdGVtLCBmKSkgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9