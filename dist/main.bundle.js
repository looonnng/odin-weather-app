(self["webpackChunkodin_weather_app"] = self["webpackChunkodin_weather_app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100vh;
  font-family: Helvetica, Verdana, sans-serif;
}

body {
  align-items: center;
}

a {
  text-decoration: none;
}

.wrapper {
  width: 80%;
  margin: 0 auto;
}

.grid-layout {
  height: 80vh;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
}

.flex {
  display: flex;
}

.col {
  display: flex;
  flex-direction: column;
}

/* Search section*/
.search-wrapper {
  justify-content: center;
  align-items: center;
}

.search-input,
.search-btn {
  font-size: 1rem;
  padding: 0.5rem 0.25rem;
  border: none;
}

.search-input {
  background-color: #e9e9ed;
}

.content-wrapper {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}

.current-weather-icon-wrapper,
.current-conditions-wrapper,
.current-descriptions-wrapper,
.current-temperature-wrapper {
  align-items: center;
}

.current-weather-icon-wrapper {
  justify-content: center;

  & > img {
    width: 95%;
  }
}

.current-conditions-wrapper {
  grid-column: 2 / span 4;
}

.current-descriptions-wrapper {
  grid-column: 6 / 9;
  justify-content: center;
  align-items: flex-end;
}

.current-temperature {
  font-size: 4rem;
  margin: 0 0.8rem;
}

.weather-units {
  font-size: 1rem;
  margin-top: 0.7rem;
}

.fahrenheit-link {
  color: #fff;
  padding-right: 0.3rem;
  border-right: solid 1px gray;
}

.celsius-link {
  padding-left: 0.3rem;
}

.day-wrapper {
  align-items: center;
  justify-content: space-between;
}

.day-temperature {
  justify-content: center;
  gap: 0.5rem;
}

.day-icon-wrapper {
  text-align: center;
}

.day-icon-wrapper > img {
  width: 100%;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,2CAA2C;AAC7C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA,kBAAkB;AAClB;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,eAAe;EACf,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC;;AAEA;;;;EAIE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;;EAEvB;IACE,UAAU;EACZ;AACF;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100vh;\n  font-family: Helvetica, Verdana, sans-serif;\n}\n\nbody {\n  align-items: center;\n}\n\na {\n  text-decoration: none;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.grid-layout {\n  height: 80vh;\n  display: grid;\n  grid-template-rows: repeat(4, 1fr);\n}\n\n.flex {\n  display: flex;\n}\n\n.col {\n  display: flex;\n  flex-direction: column;\n}\n\n/* Search section*/\n.search-wrapper {\n  justify-content: center;\n  align-items: center;\n}\n\n.search-input,\n.search-btn {\n  font-size: 1rem;\n  padding: 0.5rem 0.25rem;\n  border: none;\n}\n\n.search-input {\n  background-color: #e9e9ed;\n}\n\n.content-wrapper {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n}\n\n.current-weather-icon-wrapper,\n.current-conditions-wrapper,\n.current-descriptions-wrapper,\n.current-temperature-wrapper {\n  align-items: center;\n}\n\n.current-weather-icon-wrapper {\n  justify-content: center;\n\n  & > img {\n    width: 95%;\n  }\n}\n\n.current-conditions-wrapper {\n  grid-column: 2 / span 4;\n}\n\n.current-descriptions-wrapper {\n  grid-column: 6 / 9;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.current-temperature {\n  font-size: 4rem;\n  margin: 0 0.8rem;\n}\n\n.weather-units {\n  font-size: 1rem;\n  margin-top: 0.7rem;\n}\n\n.fahrenheit-link {\n  color: #fff;\n  padding-right: 0.3rem;\n  border-right: solid 1px gray;\n}\n\n.celsius-link {\n  padding-left: 0.3rem;\n}\n\n.day-wrapper {\n  align-items: center;\n  justify-content: space-between;\n}\n\n.day-temperature {\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.day-icon-wrapper {\n  text-align: center;\n}\n\n.day-icon-wrapper > img {\n  width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/VCWeatherIcons lazy recursive ^\\.\\/.*\\.png$":
/*!************************************************************************!*\
  !*** ./src/assets/VCWeatherIcons/ lazy ^\.\/.*\.png$ namespace object ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./clear-day.png": [
		"./src/assets/VCWeatherIcons/clear-day.png",
		"src_assets_VCWeatherIcons_clear-day_png"
	],
	"./clear-night.png": [
		"./src/assets/VCWeatherIcons/clear-night.png",
		"src_assets_VCWeatherIcons_clear-night_png"
	],
	"./cloudy.png": [
		"./src/assets/VCWeatherIcons/cloudy.png",
		"src_assets_VCWeatherIcons_cloudy_png"
	],
	"./fog.png": [
		"./src/assets/VCWeatherIcons/fog.png",
		"src_assets_VCWeatherIcons_fog_png"
	],
	"./hail.png": [
		"./src/assets/VCWeatherIcons/hail.png",
		"src_assets_VCWeatherIcons_hail_png"
	],
	"./partly-cloudy-day.png": [
		"./src/assets/VCWeatherIcons/partly-cloudy-day.png",
		"src_assets_VCWeatherIcons_partly-cloudy-day_png"
	],
	"./partly-cloudy-night.png": [
		"./src/assets/VCWeatherIcons/partly-cloudy-night.png",
		"src_assets_VCWeatherIcons_partly-cloudy-night_png"
	],
	"./rain-snow-showers-day.png": [
		"./src/assets/VCWeatherIcons/rain-snow-showers-day.png",
		"src_assets_VCWeatherIcons_rain-snow-showers-day_png"
	],
	"./rain-snow-showers-night.png": [
		"./src/assets/VCWeatherIcons/rain-snow-showers-night.png",
		"src_assets_VCWeatherIcons_rain-snow-showers-night_png"
	],
	"./rain-snow.png": [
		"./src/assets/VCWeatherIcons/rain-snow.png",
		"src_assets_VCWeatherIcons_rain-snow_png"
	],
	"./rain.png": [
		"./src/assets/VCWeatherIcons/rain.png",
		"src_assets_VCWeatherIcons_rain_png"
	],
	"./showers-day.png": [
		"./src/assets/VCWeatherIcons/showers-day.png",
		"src_assets_VCWeatherIcons_showers-day_png"
	],
	"./showers-night.png": [
		"./src/assets/VCWeatherIcons/showers-night.png",
		"src_assets_VCWeatherIcons_showers-night_png"
	],
	"./sleet.png": [
		"./src/assets/VCWeatherIcons/sleet.png",
		"src_assets_VCWeatherIcons_sleet_png"
	],
	"./snow-showers-day.png": [
		"./src/assets/VCWeatherIcons/snow-showers-day.png",
		"src_assets_VCWeatherIcons_snow-showers-day_png"
	],
	"./snow-showers-night.png": [
		"./src/assets/VCWeatherIcons/snow-showers-night.png",
		"src_assets_VCWeatherIcons_snow-showers-night_png"
	],
	"./snow.png": [
		"./src/assets/VCWeatherIcons/snow.png",
		"src_assets_VCWeatherIcons_snow_png"
	],
	"./thunder-rain.png": [
		"./src/assets/VCWeatherIcons/thunder-rain.png",
		"src_assets_VCWeatherIcons_thunder-rain_png"
	],
	"./thunder-showers-day.png": [
		"./src/assets/VCWeatherIcons/thunder-showers-day.png",
		"src_assets_VCWeatherIcons_thunder-showers-day_png"
	],
	"./thunder-showers-night.png": [
		"./src/assets/VCWeatherIcons/thunder-showers-night.png",
		"src_assets_VCWeatherIcons_thunder-showers-night_png"
	],
	"./thunder.png": [
		"./src/assets/VCWeatherIcons/thunder.png",
		"src_assets_VCWeatherIcons_thunder_png"
	],
	"./wind.png": [
		"./src/assets/VCWeatherIcons/wind.png",
		"src_assets_VCWeatherIcons_wind_png"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 1 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/assets/VCWeatherIcons lazy recursive ^\\.\\/.*\\.png$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom.js */ "./src/modules/dom.js");



(0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeatherRequest: () => (/* binding */ getWeatherRequest),
/* harmony export */   processWeatherRequest: () => (/* binding */ processWeatherRequest)
/* harmony export */ });
async function getWeatherRequest(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=QN4SKBNRNBZPJZ8EHJNREJCUG`,
    );
    if (response.ok) {
      return response.json();
    }
  } catch (err) {
    console.error(err);
  }
}

async function processWeatherRequest(response) {
  const myPromise = new Promise((resolve) => resolve(response));
  try {
    const data = await myPromise;
    return data;
  } catch (err) {
    console.log(err);
  }
}




/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/modules/utils.js");



function render() {
  const searchForm = document.querySelector('.search-form');
  searchForm.addEventListener('submit', handleSearch);
}

async function handleSearch(event) {
  event.preventDefault();
  const location = event.target[0].value;

  const data = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.processWeatherRequest)((0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherRequest)(location));

  if (data) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.displayCurrentWeatherIcon)(data);
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.displayCurrentConditions)(data);
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.displayCurrentDescriptions)(data);
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.displayDayForecast)(data);
    event.target[0].value = '';
    return;
  }

  alert('please enter a valid location');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);


/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   displayCurrentConditions: () => (/* binding */ displayCurrentConditions),
/* harmony export */   displayCurrentDescriptions: () => (/* binding */ displayCurrentDescriptions),
/* harmony export */   displayCurrentWeatherIcon: () => (/* binding */ displayCurrentWeatherIcon),
/* harmony export */   displayDayForecast: () => (/* binding */ displayDayForecast)
/* harmony export */ });
async function getIcon(icon) {
  const myIcon = await __webpack_require__("./src/assets/VCWeatherIcons lazy recursive ^\\.\\/.*\\.png$")(`./${icon}.png`);
  return myIcon;
}

async function createCurrentWeatherIcon(iconText) {
  const icon = new Image();
  const iconResponse = await getIcon(iconText);
  icon.src = iconResponse.default;
  return icon;
}

async function displayCurrentWeatherIcon(jsonData) {
  const iconWrapper = document.querySelector('.current-weather-icon-wrapper');
  iconWrapper.replaceChildren(); // Clear previous icon

  const icon = await createCurrentWeatherIcon(jsonData.currentConditions.icon);
  iconWrapper.appendChild(icon);
}

function displayCurrentConditions(jsonData) {
  const currentConditionsWrapper = document.querySelector(
    '.current-conditions-wrapper',
  );
  currentConditionsWrapper.replaceChildren(); // Clear previous content

  const currentTemp = jsonData.currentConditions.temp;
  const currentPrecipitation = jsonData.currentConditions.precip;
  const currentHumidity = jsonData.currentConditions.humidity;
  const currentWind = jsonData.currentConditions.windspeed;

  const weatherText = document.createElement('div');
  const weatherUnits = document.createElement('div');
  const fahrenheit = document.createElement('div');
  const celsius = document.createElement('div');
  const fahrenheitLink = document.createElement('a');
  const celsiusLink = document.createElement('a');
  const currentOtherConditionsWrapper = document.createElement('div');
  const precipitationText = document.createElement('p');
  const humidityText = document.createElement('p');
  const windText = document.createElement('p');

  weatherText.className = 'current-temperature flex';
  weatherUnits.className = 'weather-units flex';
  fahrenheit.className = 'fahrenheit';
  celsius.className = 'celsius';
  fahrenheitLink.className = 'fahrenheit-link';
  celsiusLink.className = 'celsius-link';
  currentOtherConditionsWrapper.className =
    'current-other-conditions-wrapper col';
  precipitationText.className = 'current-precipitation';
  humidityText.className = 'current-humidity';
  windText.className = 'current-wind';

  fahrenheitLink.textContent = 'F°';
  celsiusLink.textContent = 'C°';
  weatherText.textContent = Math.ceil(currentTemp);
  precipitationText.textContent = `Precipitation: ${currentPrecipitation}%`;
  humidityText.textContent = `Humidity: ${currentHumidity}%`;
  windText.textContent = `Wind: ${currentWind} mph`;

  fahrenheitLink.href = '#';
  celsiusLink.href = '#';

  fahrenheit.appendChild(fahrenheitLink);
  celsius.appendChild(celsiusLink);
  weatherUnits.append(fahrenheit, celsius);
  weatherText.appendChild(weatherUnits);
  currentOtherConditionsWrapper.append(
    precipitationText,
    humidityText,
    windText,
  );
  currentConditionsWrapper.append(weatherText, currentOtherConditionsWrapper);
}

function displayCurrentDescriptions(jsonData) {
  const currentDescriptionsWrapper = document.querySelector(
    '.current-descriptions-wrapper',
  );
  currentDescriptionsWrapper.replaceChildren();

  const currentLocation = jsonData.resolvedAddress;
  const currentTime = convertToStandardTime(
    jsonData.currentConditions.datetime,
  );
  const currentShortDescription = jsonData.currentConditions.conditions;
  const currentTimeEpoch = jsonData.currentConditions.datetimeEpoch * 1000;
  const currentTimeZoneOffset = jsonData.tzoffset * 3600000;
  const currentWeekday = getWeekDay(currentTimeEpoch + currentTimeZoneOffset); // convert timezone offset to ms and times 100

  const currentLocationElem = document.createElement('div');
  const currentDateElem = document.createElement('div');
  const currentShortDescriptionsElem = document.createElement('div');

  currentLocationElem.className = '';
  currentDateElem.className = '';
  currentShortDescriptionsElem.className = '';

  currentLocationElem.textContent = `${currentLocation}`;
  currentDateElem.textContent = `${currentWeekday} ${currentTime}`;
  currentShortDescriptionsElem.textContent = `${currentShortDescription}`;

  currentDescriptionsWrapper.append(
    currentLocationElem,
    currentDateElem,
    currentShortDescriptionsElem,
  );
}

function getWeekDay(time) {
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // needs to use UTC day for accurate timezone
  const today = new Date(time).getUTCDay();
  return dayNames[today];
}

function convertToStandardTime(time) {
  const [hour, min] = time.split(':');

  if (Number(hour) < 12 && Number(hour) != 0) {
    return `${hour}:${min} AM`;
  } else if (Number(hour) >= 13) {
    return `${Number(hour) - 12}:${min} PM`;
  } else if (Number(hour) === 12) {
    return `${Number(hour)}:${min} PM`;
  } else {
    return `${Number(hour) + 12}:${min} AM`;
  }
}

async function displayDayForecast(jsonData) {
  const bottom = document.querySelector('.bottom');
  const forecast = jsonData.days.slice(1, 9);

  bottom.replaceChildren();

  forecast.forEach(async (dayForecast) => {
    const dayWrapper = document.createElement('div');
    const dayText = document.createElement('div');
    const dayIconWrapper = document.createElement('div');
    const dayTemperature = document.createElement('div');
    const dayTemperatureLow = document.createElement('p');
    const dayTemperatureHigh = document.createElement('p');
    const dayIcon = await createCurrentWeatherIcon(dayForecast.icon);

    dayWrapper.className = 'day-wrapper col';
    dayText.className = 'day-text';
    dayIconWrapper.className = 'day-icon-wrapper';
    dayTemperature.className = 'day-temperature flex';

    dayText.textContent = `${getWeekDay(dayForecast.datetime)}`;
    dayTemperatureLow.textContent = `${Math.ceil(dayForecast.tempmin)}°`;
    dayTemperatureHigh.textContent = `${Math.ceil(dayForecast.tempmax)}°`;

    dayIconWrapper.appendChild(dayIcon);
    dayTemperature.append(dayTemperatureLow, dayTemperatureHigh);
    dayWrapper.append(dayText, dayIconWrapper, dayTemperature);
    bottom.append(dayWrapper);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  displayCurrentWeatherIcon,
  displayCurrentConditions,
  displayCurrentDescriptions,
  displayDayForecast,
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxR3NCO0FBQ2dCOztBQUV0QywyREFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNITjtBQUNBO0FBQ0E7QUFDQSw2RkFBNkYsU0FBUztBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRW9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmdCO0FBTWhEOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDhEQUFxQixDQUFDLDBEQUFpQjs7QUFFNUQ7QUFDQSxJQUFJLG9FQUF5QjtBQUM3QixJQUFJLG1FQUF3QjtBQUM1QixJQUFJLHFFQUEwQjtBQUM5QixJQUFJLDZEQUFrQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0J0QjtBQUNBLHVCQUF1QixtRkFBTyxHQUEwQixFQUFFLEtBQUssS0FBSyxDQUFDO0FBQ3JFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QscUJBQXFCO0FBQ3pFLDBDQUEwQyxnQkFBZ0I7QUFDMUQsa0NBQWtDLGFBQWE7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFOztBQUUvRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxnQkFBZ0I7QUFDdkQsbUNBQW1DLGdCQUFnQixFQUFFLFlBQVk7QUFDakUsZ0RBQWdELHdCQUF3Qjs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLEtBQUssR0FBRyxLQUFLO0FBQzNCLElBQUk7QUFDSixjQUFjLGtCQUFrQixHQUFHLEtBQUs7QUFDeEMsSUFBSTtBQUNKLGNBQWMsYUFBYSxHQUFHLEtBQUs7QUFDbkMsSUFBSTtBQUNKLGNBQWMsa0JBQWtCLEdBQUcsS0FBSztBQUN4QztBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixpQ0FBaUM7QUFDOUQsdUNBQXVDLCtCQUErQjtBQUN0RSx3Q0FBd0MsK0JBQStCOztBQUV2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zLyBsYXp5IF5cXC5cXC8uKlxcLnBuZyQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5ncmlkLWxheW91dCB7XG4gIGhlaWdodDogODB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogU2VhcmNoIHNlY3Rpb24qL1xuLnNlYXJjaC13cmFwcGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtaW5wdXQsXG4uc2VhcmNoLWJ0biB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDAuMjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZWQ7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xufVxuXG4uY3VycmVudC13ZWF0aGVyLWljb24td3JhcHBlcixcbi5jdXJyZW50LWNvbmRpdGlvbnMtd3JhcHBlcixcbi5jdXJyZW50LWRlc2NyaXB0aW9ucy13cmFwcGVyLFxuLmN1cnJlbnQtdGVtcGVyYXR1cmUtd3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jdXJyZW50LXdlYXRoZXItaWNvbi13cmFwcGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgJiA+IGltZyB7XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxufVxuXG4uY3VycmVudC1jb25kaXRpb25zLXdyYXBwZXIge1xuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gNDtcbn1cblxuLmN1cnJlbnQtZGVzY3JpcHRpb25zLXdyYXBwZXIge1xuICBncmlkLWNvbHVtbjogNiAvIDk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5jdXJyZW50LXRlbXBlcmF0dXJlIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW46IDAgMC44cmVtO1xufVxuXG4ud2VhdGhlci11bml0cyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMC43cmVtO1xufVxuXG4uZmFocmVuaGVpdC1saW5rIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctcmlnaHQ6IDAuM3JlbTtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JheTtcbn1cblxuLmNlbHNpdXMtbGluayB7XG4gIHBhZGRpbmctbGVmdDogMC4zcmVtO1xufVxuXG4uZGF5LXdyYXBwZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5kYXktdGVtcGVyYXR1cmUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5kYXktaWNvbi13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGF5LWljb24td3JhcHBlciA+IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGFBQWE7RUFDYiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztBQUN2Qzs7QUFFQTs7OztFQUlFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1Qjs7RUFFdkI7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uZ3JpZC1sYXlvdXQge1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qIFNlYXJjaCBzZWN0aW9uKi9cXG4uc2VhcmNoLXdyYXBwZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0LFxcbi5zZWFyY2gtYnRuIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjI1cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZWQ7XFxufVxcblxcbi5jb250ZW50LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItaWNvbi13cmFwcGVyLFxcbi5jdXJyZW50LWNvbmRpdGlvbnMtd3JhcHBlcixcXG4uY3VycmVudC1kZXNjcmlwdGlvbnMtd3JhcHBlcixcXG4uY3VycmVudC10ZW1wZXJhdHVyZS13cmFwcGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItaWNvbi13cmFwcGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgJiA+IGltZyB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxufVxcblxcbi5jdXJyZW50LWNvbmRpdGlvbnMtd3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gNDtcXG59XFxuXFxuLmN1cnJlbnQtZGVzY3JpcHRpb25zLXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDYgLyA5O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5jdXJyZW50LXRlbXBlcmF0dXJlIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIG1hcmdpbjogMCAwLjhyZW07XFxufVxcblxcbi53ZWF0aGVyLXVuaXRzIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDAuN3JlbTtcXG59XFxuXFxuLmZhaHJlbmhlaXQtbGluayB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuM3JlbTtcXG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyYXk7XFxufVxcblxcbi5jZWxzaXVzLWxpbmsge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjNyZW07XFxufVxcblxcbi5kYXktd3JhcHBlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZGF5LXRlbXBlcmF0dXJlIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5kYXktaWNvbi13cmFwcGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRheS1pY29uLXdyYXBwZXIgPiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY2xlYXItZGF5LnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvY2xlYXItZGF5LnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc19jbGVhci1kYXlfcG5nXCJcblx0XSxcblx0XCIuL2NsZWFyLW5pZ2h0LnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvY2xlYXItbmlnaHQucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX2NsZWFyLW5pZ2h0X3BuZ1wiXG5cdF0sXG5cdFwiLi9jbG91ZHkucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy9jbG91ZHkucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX2Nsb3VkeV9wbmdcIlxuXHRdLFxuXHRcIi4vZm9nLnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvZm9nLnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc19mb2dfcG5nXCJcblx0XSxcblx0XCIuL2hhaWwucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy9oYWlsLnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc19oYWlsX3BuZ1wiXG5cdF0sXG5cdFwiLi9wYXJ0bHktY2xvdWR5LWRheS5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL3BhcnRseS1jbG91ZHktZGF5LnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc19wYXJ0bHktY2xvdWR5LWRheV9wbmdcIlxuXHRdLFxuXHRcIi4vcGFydGx5LWNsb3VkeS1uaWdodC5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL3BhcnRseS1jbG91ZHktbmlnaHQucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX3BhcnRseS1jbG91ZHktbmlnaHRfcG5nXCJcblx0XSxcblx0XCIuL3JhaW4tc25vdy1zaG93ZXJzLWRheS5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL3JhaW4tc25vdy1zaG93ZXJzLWRheS5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfcmFpbi1zbm93LXNob3dlcnMtZGF5X3BuZ1wiXG5cdF0sXG5cdFwiLi9yYWluLXNub3ctc2hvd2Vycy1uaWdodC5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL3JhaW4tc25vdy1zaG93ZXJzLW5pZ2h0LnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc19yYWluLXNub3ctc2hvd2Vycy1uaWdodF9wbmdcIlxuXHRdLFxuXHRcIi4vcmFpbi1zbm93LnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvcmFpbi1zbm93LnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc19yYWluLXNub3dfcG5nXCJcblx0XSxcblx0XCIuL3JhaW4ucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy9yYWluLnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc19yYWluX3BuZ1wiXG5cdF0sXG5cdFwiLi9zaG93ZXJzLWRheS5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL3Nob3dlcnMtZGF5LnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc19zaG93ZXJzLWRheV9wbmdcIlxuXHRdLFxuXHRcIi4vc2hvd2Vycy1uaWdodC5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL3Nob3dlcnMtbmlnaHQucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX3Nob3dlcnMtbmlnaHRfcG5nXCJcblx0XSxcblx0XCIuL3NsZWV0LnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvc2xlZXQucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX3NsZWV0X3BuZ1wiXG5cdF0sXG5cdFwiLi9zbm93LXNob3dlcnMtZGF5LnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvc25vdy1zaG93ZXJzLWRheS5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfc25vdy1zaG93ZXJzLWRheV9wbmdcIlxuXHRdLFxuXHRcIi4vc25vdy1zaG93ZXJzLW5pZ2h0LnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvc25vdy1zaG93ZXJzLW5pZ2h0LnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc19zbm93LXNob3dlcnMtbmlnaHRfcG5nXCJcblx0XSxcblx0XCIuL3Nub3cucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy9zbm93LnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc19zbm93X3BuZ1wiXG5cdF0sXG5cdFwiLi90aHVuZGVyLXJhaW4ucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy90aHVuZGVyLXJhaW4ucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX3RodW5kZXItcmFpbl9wbmdcIlxuXHRdLFxuXHRcIi4vdGh1bmRlci1zaG93ZXJzLWRheS5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL3RodW5kZXItc2hvd2Vycy1kYXkucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX3RodW5kZXItc2hvd2Vycy1kYXlfcG5nXCJcblx0XSxcblx0XCIuL3RodW5kZXItc2hvd2Vycy1uaWdodC5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL3RodW5kZXItc2hvd2Vycy1uaWdodC5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfdGh1bmRlci1zaG93ZXJzLW5pZ2h0X3BuZ1wiXG5cdF0sXG5cdFwiLi90aHVuZGVyLnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvdGh1bmRlci5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfdGh1bmRlcl9wbmdcIlxuXHRdLFxuXHRcIi4vd2luZC5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL3dpbmQucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX3dpbmRfcG5nXCJcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKCgpID0+IHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KGlkLCAxIHwgMTYpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5wbmckXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL21vZHVsZXMvZG9tLmpzJztcblxucmVuZGVyKCk7XG4iLCJhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyUmVxdWVzdChsb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJHtsb2NhdGlvbn0/a2V5PVFONFNLQk5STkJaUEpaOEVISk5SRUpDVUdgLFxuICAgICk7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NXZWF0aGVyUmVxdWVzdChyZXNwb25zZSkge1xuICBjb25zdCBteVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZShyZXNwb25zZSkpO1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBteVByb21pc2U7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn1cblxuZXhwb3J0IHsgZ2V0V2VhdGhlclJlcXVlc3QsIHByb2Nlc3NXZWF0aGVyUmVxdWVzdCB9O1xuIiwiaW1wb3J0IHsgZ2V0V2VhdGhlclJlcXVlc3QsIHByb2Nlc3NXZWF0aGVyUmVxdWVzdCB9IGZyb20gJy4vYXBpLmpzJztcbmltcG9ydCB7XG4gIGRpc3BsYXlDdXJyZW50V2VhdGhlckljb24sXG4gIGRpc3BsYXlDdXJyZW50Q29uZGl0aW9ucyxcbiAgZGlzcGxheUN1cnJlbnREZXNjcmlwdGlvbnMsXG4gIGRpc3BsYXlEYXlGb3JlY2FzdCxcbn0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZm9ybScpO1xuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVNlYXJjaCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBsb2NhdGlvbiA9IGV2ZW50LnRhcmdldFswXS52YWx1ZTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcHJvY2Vzc1dlYXRoZXJSZXF1ZXN0KGdldFdlYXRoZXJSZXF1ZXN0KGxvY2F0aW9uKSk7XG5cbiAgaWYgKGRhdGEpIHtcbiAgICBkaXNwbGF5Q3VycmVudFdlYXRoZXJJY29uKGRhdGEpO1xuICAgIGRpc3BsYXlDdXJyZW50Q29uZGl0aW9ucyhkYXRhKTtcbiAgICBkaXNwbGF5Q3VycmVudERlc2NyaXB0aW9ucyhkYXRhKTtcbiAgICBkaXNwbGF5RGF5Rm9yZWNhc3QoZGF0YSk7XG4gICAgZXZlbnQudGFyZ2V0WzBdLnZhbHVlID0gJyc7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYWxlcnQoJ3BsZWFzZSBlbnRlciBhIHZhbGlkIGxvY2F0aW9uJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjtcbiIsImFzeW5jIGZ1bmN0aW9uIGdldEljb24oaWNvbikge1xuICBjb25zdCBteUljb24gPSBhd2FpdCBpbXBvcnQoYC4uL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy8ke2ljb259LnBuZ2ApO1xuICByZXR1cm4gbXlJY29uO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVDdXJyZW50V2VhdGhlckljb24oaWNvblRleHQpIHtcbiAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBpY29uUmVzcG9uc2UgPSBhd2FpdCBnZXRJY29uKGljb25UZXh0KTtcbiAgaWNvbi5zcmMgPSBpY29uUmVzcG9uc2UuZGVmYXVsdDtcbiAgcmV0dXJuIGljb247XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudFdlYXRoZXJJY29uKGpzb25EYXRhKSB7XG4gIGNvbnN0IGljb25XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtd2VhdGhlci1pY29uLXdyYXBwZXInKTtcbiAgaWNvbldyYXBwZXIucmVwbGFjZUNoaWxkcmVuKCk7IC8vIENsZWFyIHByZXZpb3VzIGljb25cblxuICBjb25zdCBpY29uID0gYXdhaXQgY3JlYXRlQ3VycmVudFdlYXRoZXJJY29uKGpzb25EYXRhLmN1cnJlbnRDb25kaXRpb25zLmljb24pO1xuICBpY29uV3JhcHBlci5hcHBlbmRDaGlsZChpY29uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50Q29uZGl0aW9ucyhqc29uRGF0YSkge1xuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuY3VycmVudC1jb25kaXRpb25zLXdyYXBwZXInLFxuICApO1xuICBjdXJyZW50Q29uZGl0aW9uc1dyYXBwZXIucmVwbGFjZUNoaWxkcmVuKCk7IC8vIENsZWFyIHByZXZpb3VzIGNvbnRlbnRcblxuICBjb25zdCBjdXJyZW50VGVtcCA9IGpzb25EYXRhLmN1cnJlbnRDb25kaXRpb25zLnRlbXA7XG4gIGNvbnN0IGN1cnJlbnRQcmVjaXBpdGF0aW9uID0ganNvbkRhdGEuY3VycmVudENvbmRpdGlvbnMucHJlY2lwO1xuICBjb25zdCBjdXJyZW50SHVtaWRpdHkgPSBqc29uRGF0YS5jdXJyZW50Q29uZGl0aW9ucy5odW1pZGl0eTtcbiAgY29uc3QgY3VycmVudFdpbmQgPSBqc29uRGF0YS5jdXJyZW50Q29uZGl0aW9ucy53aW5kc3BlZWQ7XG5cbiAgY29uc3Qgd2VhdGhlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgd2VhdGhlclVuaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGZhaHJlbmhlaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY2Vsc2l1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBmYWhyZW5oZWl0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29uc3QgY2Vsc2l1c0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IGN1cnJlbnRPdGhlckNvbmRpdGlvbnNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHByZWNpcGl0YXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBodW1pZGl0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHdpbmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIHdlYXRoZXJUZXh0LmNsYXNzTmFtZSA9ICdjdXJyZW50LXRlbXBlcmF0dXJlIGZsZXgnO1xuICB3ZWF0aGVyVW5pdHMuY2xhc3NOYW1lID0gJ3dlYXRoZXItdW5pdHMgZmxleCc7XG4gIGZhaHJlbmhlaXQuY2xhc3NOYW1lID0gJ2ZhaHJlbmhlaXQnO1xuICBjZWxzaXVzLmNsYXNzTmFtZSA9ICdjZWxzaXVzJztcbiAgZmFocmVuaGVpdExpbmsuY2xhc3NOYW1lID0gJ2ZhaHJlbmhlaXQtbGluayc7XG4gIGNlbHNpdXNMaW5rLmNsYXNzTmFtZSA9ICdjZWxzaXVzLWxpbmsnO1xuICBjdXJyZW50T3RoZXJDb25kaXRpb25zV3JhcHBlci5jbGFzc05hbWUgPVxuICAgICdjdXJyZW50LW90aGVyLWNvbmRpdGlvbnMtd3JhcHBlciBjb2wnO1xuICBwcmVjaXBpdGF0aW9uVGV4dC5jbGFzc05hbWUgPSAnY3VycmVudC1wcmVjaXBpdGF0aW9uJztcbiAgaHVtaWRpdHlUZXh0LmNsYXNzTmFtZSA9ICdjdXJyZW50LWh1bWlkaXR5JztcbiAgd2luZFRleHQuY2xhc3NOYW1lID0gJ2N1cnJlbnQtd2luZCc7XG5cbiAgZmFocmVuaGVpdExpbmsudGV4dENvbnRlbnQgPSAnRsKwJztcbiAgY2Vsc2l1c0xpbmsudGV4dENvbnRlbnQgPSAnQ8KwJztcbiAgd2VhdGhlclRleHQudGV4dENvbnRlbnQgPSBNYXRoLmNlaWwoY3VycmVudFRlbXApO1xuICBwcmVjaXBpdGF0aW9uVGV4dC50ZXh0Q29udGVudCA9IGBQcmVjaXBpdGF0aW9uOiAke2N1cnJlbnRQcmVjaXBpdGF0aW9ufSVgO1xuICBodW1pZGl0eVRleHQudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7Y3VycmVudEh1bWlkaXR5fSVgO1xuICB3aW5kVGV4dC50ZXh0Q29udGVudCA9IGBXaW5kOiAke2N1cnJlbnRXaW5kfSBtcGhgO1xuXG4gIGZhaHJlbmhlaXRMaW5rLmhyZWYgPSAnIyc7XG4gIGNlbHNpdXNMaW5rLmhyZWYgPSAnIyc7XG5cbiAgZmFocmVuaGVpdC5hcHBlbmRDaGlsZChmYWhyZW5oZWl0TGluayk7XG4gIGNlbHNpdXMuYXBwZW5kQ2hpbGQoY2Vsc2l1c0xpbmspO1xuICB3ZWF0aGVyVW5pdHMuYXBwZW5kKGZhaHJlbmhlaXQsIGNlbHNpdXMpO1xuICB3ZWF0aGVyVGV4dC5hcHBlbmRDaGlsZCh3ZWF0aGVyVW5pdHMpO1xuICBjdXJyZW50T3RoZXJDb25kaXRpb25zV3JhcHBlci5hcHBlbmQoXG4gICAgcHJlY2lwaXRhdGlvblRleHQsXG4gICAgaHVtaWRpdHlUZXh0LFxuICAgIHdpbmRUZXh0LFxuICApO1xuICBjdXJyZW50Q29uZGl0aW9uc1dyYXBwZXIuYXBwZW5kKHdlYXRoZXJUZXh0LCBjdXJyZW50T3RoZXJDb25kaXRpb25zV3JhcHBlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudERlc2NyaXB0aW9ucyhqc29uRGF0YSkge1xuICBjb25zdCBjdXJyZW50RGVzY3JpcHRpb25zV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5jdXJyZW50LWRlc2NyaXB0aW9ucy13cmFwcGVyJyxcbiAgKTtcbiAgY3VycmVudERlc2NyaXB0aW9uc1dyYXBwZXIucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgY29uc3QgY3VycmVudExvY2F0aW9uID0ganNvbkRhdGEucmVzb2x2ZWRBZGRyZXNzO1xuICBjb25zdCBjdXJyZW50VGltZSA9IGNvbnZlcnRUb1N0YW5kYXJkVGltZShcbiAgICBqc29uRGF0YS5jdXJyZW50Q29uZGl0aW9ucy5kYXRldGltZSxcbiAgKTtcbiAgY29uc3QgY3VycmVudFNob3J0RGVzY3JpcHRpb24gPSBqc29uRGF0YS5jdXJyZW50Q29uZGl0aW9ucy5jb25kaXRpb25zO1xuICBjb25zdCBjdXJyZW50VGltZUVwb2NoID0ganNvbkRhdGEuY3VycmVudENvbmRpdGlvbnMuZGF0ZXRpbWVFcG9jaCAqIDEwMDA7XG4gIGNvbnN0IGN1cnJlbnRUaW1lWm9uZU9mZnNldCA9IGpzb25EYXRhLnR6b2Zmc2V0ICogMzYwMDAwMDtcbiAgY29uc3QgY3VycmVudFdlZWtkYXkgPSBnZXRXZWVrRGF5KGN1cnJlbnRUaW1lRXBvY2ggKyBjdXJyZW50VGltZVpvbmVPZmZzZXQpOyAvLyBjb252ZXJ0IHRpbWV6b25lIG9mZnNldCB0byBtcyBhbmQgdGltZXMgMTAwXG5cbiAgY29uc3QgY3VycmVudExvY2F0aW9uRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjdXJyZW50RGF0ZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY3VycmVudFNob3J0RGVzY3JpcHRpb25zRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGN1cnJlbnRMb2NhdGlvbkVsZW0uY2xhc3NOYW1lID0gJyc7XG4gIGN1cnJlbnREYXRlRWxlbS5jbGFzc05hbWUgPSAnJztcbiAgY3VycmVudFNob3J0RGVzY3JpcHRpb25zRWxlbS5jbGFzc05hbWUgPSAnJztcblxuICBjdXJyZW50TG9jYXRpb25FbGVtLnRleHRDb250ZW50ID0gYCR7Y3VycmVudExvY2F0aW9ufWA7XG4gIGN1cnJlbnREYXRlRWxlbS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWVrZGF5fSAke2N1cnJlbnRUaW1lfWA7XG4gIGN1cnJlbnRTaG9ydERlc2NyaXB0aW9uc0VsZW0udGV4dENvbnRlbnQgPSBgJHtjdXJyZW50U2hvcnREZXNjcmlwdGlvbn1gO1xuXG4gIGN1cnJlbnREZXNjcmlwdGlvbnNXcmFwcGVyLmFwcGVuZChcbiAgICBjdXJyZW50TG9jYXRpb25FbGVtLFxuICAgIGN1cnJlbnREYXRlRWxlbSxcbiAgICBjdXJyZW50U2hvcnREZXNjcmlwdGlvbnNFbGVtLFxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRXZWVrRGF5KHRpbWUpIHtcbiAgY29uc3QgZGF5TmFtZXMgPSBbXG4gICAgJ1N1bmRheScsXG4gICAgJ01vbmRheScsXG4gICAgJ1R1ZXNkYXknLFxuICAgICdXZWRuZXNkYXknLFxuICAgICdUaHVyc2RheScsXG4gICAgJ0ZyaWRheScsXG4gICAgJ1NhdHVyZGF5JyxcbiAgXTtcblxuICAvLyBuZWVkcyB0byB1c2UgVVRDIGRheSBmb3IgYWNjdXJhdGUgdGltZXpvbmVcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSh0aW1lKS5nZXRVVENEYXkoKTtcbiAgcmV0dXJuIGRheU5hbWVzW3RvZGF5XTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvU3RhbmRhcmRUaW1lKHRpbWUpIHtcbiAgY29uc3QgW2hvdXIsIG1pbl0gPSB0aW1lLnNwbGl0KCc6Jyk7XG5cbiAgaWYgKE51bWJlcihob3VyKSA8IDEyICYmIE51bWJlcihob3VyKSAhPSAwKSB7XG4gICAgcmV0dXJuIGAke2hvdXJ9OiR7bWlufSBBTWA7XG4gIH0gZWxzZSBpZiAoTnVtYmVyKGhvdXIpID49IDEzKSB7XG4gICAgcmV0dXJuIGAke051bWJlcihob3VyKSAtIDEyfToke21pbn0gUE1gO1xuICB9IGVsc2UgaWYgKE51bWJlcihob3VyKSA9PT0gMTIpIHtcbiAgICByZXR1cm4gYCR7TnVtYmVyKGhvdXIpfToke21pbn0gUE1gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgJHtOdW1iZXIoaG91cikgKyAxMn06JHttaW59IEFNYDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGlzcGxheURheUZvcmVjYXN0KGpzb25EYXRhKSB7XG4gIGNvbnN0IGJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20nKTtcbiAgY29uc3QgZm9yZWNhc3QgPSBqc29uRGF0YS5kYXlzLnNsaWNlKDEsIDkpO1xuXG4gIGJvdHRvbS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBmb3JlY2FzdC5mb3JFYWNoKGFzeW5jIChkYXlGb3JlY2FzdCkgPT4ge1xuICAgIGNvbnN0IGRheVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkYXlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF5SWNvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkYXlUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRheVRlbXBlcmF0dXJlTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGRheVRlbXBlcmF0dXJlSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkYXlJY29uID0gYXdhaXQgY3JlYXRlQ3VycmVudFdlYXRoZXJJY29uKGRheUZvcmVjYXN0Lmljb24pO1xuXG4gICAgZGF5V3JhcHBlci5jbGFzc05hbWUgPSAnZGF5LXdyYXBwZXIgY29sJztcbiAgICBkYXlUZXh0LmNsYXNzTmFtZSA9ICdkYXktdGV4dCc7XG4gICAgZGF5SWNvbldyYXBwZXIuY2xhc3NOYW1lID0gJ2RheS1pY29uLXdyYXBwZXInO1xuICAgIGRheVRlbXBlcmF0dXJlLmNsYXNzTmFtZSA9ICdkYXktdGVtcGVyYXR1cmUgZmxleCc7XG5cbiAgICBkYXlUZXh0LnRleHRDb250ZW50ID0gYCR7Z2V0V2Vla0RheShkYXlGb3JlY2FzdC5kYXRldGltZSl9YDtcbiAgICBkYXlUZW1wZXJhdHVyZUxvdy50ZXh0Q29udGVudCA9IGAke01hdGguY2VpbChkYXlGb3JlY2FzdC50ZW1wbWluKX3CsGA7XG4gICAgZGF5VGVtcGVyYXR1cmVIaWdoLnRleHRDb250ZW50ID0gYCR7TWF0aC5jZWlsKGRheUZvcmVjYXN0LnRlbXBtYXgpfcKwYDtcblxuICAgIGRheUljb25XcmFwcGVyLmFwcGVuZENoaWxkKGRheUljb24pO1xuICAgIGRheVRlbXBlcmF0dXJlLmFwcGVuZChkYXlUZW1wZXJhdHVyZUxvdywgZGF5VGVtcGVyYXR1cmVIaWdoKTtcbiAgICBkYXlXcmFwcGVyLmFwcGVuZChkYXlUZXh0LCBkYXlJY29uV3JhcHBlciwgZGF5VGVtcGVyYXR1cmUpO1xuICAgIGJvdHRvbS5hcHBlbmQoZGF5V3JhcHBlcik7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRpc3BsYXlDdXJyZW50V2VhdGhlckljb24sXG4gIGRpc3BsYXlDdXJyZW50Q29uZGl0aW9ucyxcbiAgZGlzcGxheUN1cnJlbnREZXNjcmlwdGlvbnMsXG4gIGRpc3BsYXlEYXlGb3JlY2FzdCxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=