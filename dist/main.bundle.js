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
}

.day-temperature {
  justify-content: center;
  gap: 0.5rem;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,2CAA2C;AAC7C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA,kBAAkB;AAClB;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,eAAe;EACf,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC;;AAEA;;;;EAIE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;;EAEvB;IACE,UAAU;EACZ;AACF;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,WAAW;AACb","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100vh;\n  font-family: Helvetica, Verdana, sans-serif;\n}\n\nbody {\n  align-items: center;\n}\n\na {\n  text-decoration: none;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.grid-layout {\n  height: 80vh;\n  display: grid;\n  grid-template-rows: repeat(4, 1fr);\n}\n\n.flex {\n  display: flex;\n}\n\n.col {\n  display: flex;\n  flex-direction: column;\n}\n\n/* Search section*/\n.search-wrapper {\n  justify-content: center;\n  align-items: center;\n}\n\n.search-input,\n.search-btn {\n  font-size: 1rem;\n  padding: 0.5rem 0.25rem;\n  border: none;\n}\n\n.search-input {\n  background-color: #e9e9ed;\n}\n\n.content-wrapper {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n}\n\n.current-weather-icon-wrapper,\n.current-conditions-wrapper,\n.current-descriptions-wrapper,\n.current-temperature-wrapper {\n  align-items: center;\n}\n\n.current-weather-icon-wrapper {\n  justify-content: center;\n\n  & > img {\n    width: 95%;\n  }\n}\n\n.current-conditions-wrapper {\n  grid-column: 2 / span 4;\n}\n\n.current-descriptions-wrapper {\n  grid-column: 6 / 9;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.current-temperature {\n  font-size: 4rem;\n  margin: 0 0.8rem;\n}\n\n.weather-units {\n  font-size: 1rem;\n  margin-top: 0.7rem;\n}\n\n.fahrenheit-link {\n  color: #fff;\n  padding-right: 0.3rem;\n  border-right: solid 1px gray;\n}\n\n.celsius-link {\n  padding-left: 0.3rem;\n}\n\n.day-wrapper {\n  align-items: center;\n}\n\n.day-temperature {\n  justify-content: center;\n  gap: 0.5rem;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxR3NCO0FBQ2dCOztBQUV0QywyREFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNITjtBQUNBO0FBQ0E7QUFDQSw2RkFBNkYsU0FBUztBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRW9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmdCO0FBTWhEOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDhEQUFxQixDQUFDLDBEQUFpQjs7QUFFNUQ7QUFDQSxJQUFJLG9FQUF5QjtBQUM3QixJQUFJLG1FQUF3QjtBQUM1QixJQUFJLHFFQUEwQjtBQUM5QixJQUFJLDZEQUFrQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0J0QjtBQUNBLHVCQUF1QixtRkFBTyxHQUEwQixFQUFFLEtBQUssS0FBSyxDQUFDO0FBQ3JFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QscUJBQXFCO0FBQ3pFLDBDQUEwQyxnQkFBZ0I7QUFDMUQsa0NBQWtDLGFBQWE7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFOztBQUUvRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxnQkFBZ0I7QUFDdkQsbUNBQW1DLGdCQUFnQixFQUFFLFlBQVk7QUFDakUsZ0RBQWdELHdCQUF3Qjs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLEtBQUssR0FBRyxLQUFLO0FBQzNCLElBQUk7QUFDSixjQUFjLGtCQUFrQixHQUFHLEtBQUs7QUFDeEMsSUFBSTtBQUNKLGNBQWMsYUFBYSxHQUFHLEtBQUs7QUFDbkMsSUFBSTtBQUNKLGNBQWMsa0JBQWtCLEdBQUcsS0FBSztBQUN4QztBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixpQ0FBaUM7QUFDOUQsdUNBQXVDLCtCQUErQjtBQUN0RSx3Q0FBd0MsK0JBQStCOztBQUV2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zLyBsYXp5IF5cXC5cXC8uKlxcLnBuZyQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5ncmlkLWxheW91dCB7XG4gIGhlaWdodDogODB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogU2VhcmNoIHNlY3Rpb24qL1xuLnNlYXJjaC13cmFwcGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtaW5wdXQsXG4uc2VhcmNoLWJ0biB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDAuMjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZWQ7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xufVxuXG4uY3VycmVudC13ZWF0aGVyLWljb24td3JhcHBlcixcbi5jdXJyZW50LWNvbmRpdGlvbnMtd3JhcHBlcixcbi5jdXJyZW50LWRlc2NyaXB0aW9ucy13cmFwcGVyLFxuLmN1cnJlbnQtdGVtcGVyYXR1cmUtd3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jdXJyZW50LXdlYXRoZXItaWNvbi13cmFwcGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgJiA+IGltZyB7XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxufVxuXG4uY3VycmVudC1jb25kaXRpb25zLXdyYXBwZXIge1xuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gNDtcbn1cblxuLmN1cnJlbnQtZGVzY3JpcHRpb25zLXdyYXBwZXIge1xuICBncmlkLWNvbHVtbjogNiAvIDk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5jdXJyZW50LXRlbXBlcmF0dXJlIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW46IDAgMC44cmVtO1xufVxuXG4ud2VhdGhlci11bml0cyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMC43cmVtO1xufVxuXG4uZmFocmVuaGVpdC1saW5rIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctcmlnaHQ6IDAuM3JlbTtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JheTtcbn1cblxuLmNlbHNpdXMtbGluayB7XG4gIHBhZGRpbmctbGVmdDogMC4zcmVtO1xufVxuXG4uZGF5LXdyYXBwZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGF5LXRlbXBlcmF0dXJlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGFBQWE7RUFDYiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztBQUN2Qzs7QUFFQTs7OztFQUlFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1Qjs7RUFFdkI7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5ncmlkLWxheW91dCB7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogU2VhcmNoIHNlY3Rpb24qL1xcbi5zZWFyY2gtd3JhcHBlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQsXFxuLnNlYXJjaC1idG4ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDAuMjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllZDtcXG59XFxuXFxuLmNvbnRlbnQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1pY29uLXdyYXBwZXIsXFxuLmN1cnJlbnQtY29uZGl0aW9ucy13cmFwcGVyLFxcbi5jdXJyZW50LWRlc2NyaXB0aW9ucy13cmFwcGVyLFxcbi5jdXJyZW50LXRlbXBlcmF0dXJlLXdyYXBwZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1pY29uLXdyYXBwZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAmID4gaW1nIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG59XFxuXFxuLmN1cnJlbnQtY29uZGl0aW9ucy13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiA0O1xcbn1cXG5cXG4uY3VycmVudC1kZXNjcmlwdGlvbnMtd3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogNiAvIDk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcGVyYXR1cmUge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbWFyZ2luOiAwIDAuOHJlbTtcXG59XFxuXFxuLndlYXRoZXItdW5pdHMge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMC43cmVtO1xcbn1cXG5cXG4uZmFocmVuaGVpdC1saW5rIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZy1yaWdodDogMC4zcmVtO1xcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JheTtcXG59XFxuXFxuLmNlbHNpdXMtbGluayB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuM3JlbTtcXG59XFxuXFxuLmRheS13cmFwcGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXktdGVtcGVyYXR1cmUge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9jbGVhci1kYXkucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy9jbGVhci1kYXkucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX2NsZWFyLWRheV9wbmdcIlxuXHRdLFxuXHRcIi4vY2xlYXItbmlnaHQucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy9jbGVhci1uaWdodC5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfY2xlYXItbmlnaHRfcG5nXCJcblx0XSxcblx0XCIuL2Nsb3VkeS5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL2Nsb3VkeS5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfY2xvdWR5X3BuZ1wiXG5cdF0sXG5cdFwiLi9mb2cucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy9mb2cucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX2ZvZ19wbmdcIlxuXHRdLFxuXHRcIi4vaGFpbC5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL2hhaWwucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX2hhaWxfcG5nXCJcblx0XSxcblx0XCIuL3BhcnRseS1jbG91ZHktZGF5LnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvcGFydGx5LWNsb3VkeS1kYXkucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX3BhcnRseS1jbG91ZHktZGF5X3BuZ1wiXG5cdF0sXG5cdFwiLi9wYXJ0bHktY2xvdWR5LW5pZ2h0LnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvcGFydGx5LWNsb3VkeS1uaWdodC5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfcGFydGx5LWNsb3VkeS1uaWdodF9wbmdcIlxuXHRdLFxuXHRcIi4vcmFpbi1zbm93LXNob3dlcnMtZGF5LnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvcmFpbi1zbm93LXNob3dlcnMtZGF5LnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc19yYWluLXNub3ctc2hvd2Vycy1kYXlfcG5nXCJcblx0XSxcblx0XCIuL3JhaW4tc25vdy1zaG93ZXJzLW5pZ2h0LnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvcmFpbi1zbm93LXNob3dlcnMtbmlnaHQucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX3JhaW4tc25vdy1zaG93ZXJzLW5pZ2h0X3BuZ1wiXG5cdF0sXG5cdFwiLi9yYWluLXNub3cucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy9yYWluLXNub3cucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX3JhaW4tc25vd19wbmdcIlxuXHRdLFxuXHRcIi4vcmFpbi5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL3JhaW4ucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX3JhaW5fcG5nXCJcblx0XSxcblx0XCIuL3Nob3dlcnMtZGF5LnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvc2hvd2Vycy1kYXkucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX3Nob3dlcnMtZGF5X3BuZ1wiXG5cdF0sXG5cdFwiLi9zaG93ZXJzLW5pZ2h0LnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvc2hvd2Vycy1uaWdodC5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfc2hvd2Vycy1uaWdodF9wbmdcIlxuXHRdLFxuXHRcIi4vc2xlZXQucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy9zbGVldC5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfc2xlZXRfcG5nXCJcblx0XSxcblx0XCIuL3Nub3ctc2hvd2Vycy1kYXkucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy9zbm93LXNob3dlcnMtZGF5LnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc19zbm93LXNob3dlcnMtZGF5X3BuZ1wiXG5cdF0sXG5cdFwiLi9zbm93LXNob3dlcnMtbmlnaHQucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy9zbm93LXNob3dlcnMtbmlnaHQucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX3Nub3ctc2hvd2Vycy1uaWdodF9wbmdcIlxuXHRdLFxuXHRcIi4vc25vdy5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL3Nub3cucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX3Nub3dfcG5nXCJcblx0XSxcblx0XCIuL3RodW5kZXItcmFpbi5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL3RodW5kZXItcmFpbi5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfdGh1bmRlci1yYWluX3BuZ1wiXG5cdF0sXG5cdFwiLi90aHVuZGVyLXNob3dlcnMtZGF5LnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvdGh1bmRlci1zaG93ZXJzLWRheS5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfdGh1bmRlci1zaG93ZXJzLWRheV9wbmdcIlxuXHRdLFxuXHRcIi4vdGh1bmRlci1zaG93ZXJzLW5pZ2h0LnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvdGh1bmRlci1zaG93ZXJzLW5pZ2h0LnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc190aHVuZGVyLXNob3dlcnMtbmlnaHRfcG5nXCJcblx0XSxcblx0XCIuL3RodW5kZXIucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy90aHVuZGVyLnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc190aHVuZGVyX3BuZ1wiXG5cdF0sXG5cdFwiLi93aW5kLnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvd2luZC5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfd2luZF9wbmdcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShpZHNbMV0pLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQoaWQsIDEgfCAxNik7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKE9iamVjdC5rZXlzKG1hcCkpO1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLnBuZyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vbW9kdWxlcy9kb20uanMnO1xuXG5yZW5kZXIoKTtcbiIsImFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJSZXF1ZXN0KGxvY2F0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke2xvY2F0aW9ufT9rZXk9UU40U0tCTlJOQlpQSlo4RUhKTlJFSkNVR2AsXG4gICAgKTtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc1dlYXRoZXJSZXF1ZXN0KHJlc3BvbnNlKSB7XG4gIGNvbnN0IG15UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlKHJlc3BvbnNlKSk7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IG15UHJvbWlzZTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyUmVxdWVzdCwgcHJvY2Vzc1dlYXRoZXJSZXF1ZXN0IH07XG4iLCJpbXBvcnQgeyBnZXRXZWF0aGVyUmVxdWVzdCwgcHJvY2Vzc1dlYXRoZXJSZXF1ZXN0IH0gZnJvbSAnLi9hcGkuanMnO1xuaW1wb3J0IHtcbiAgZGlzcGxheUN1cnJlbnRXZWF0aGVySWNvbixcbiAgZGlzcGxheUN1cnJlbnRDb25kaXRpb25zLFxuICBkaXNwbGF5Q3VycmVudERlc2NyaXB0aW9ucyxcbiAgZGlzcGxheURheUZvcmVjYXN0LFxufSBmcm9tICcuL3V0aWxzLmpzJztcblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1mb3JtJyk7XG4gIHNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlU2VhcmNoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGxvY2F0aW9uID0gZXZlbnQudGFyZ2V0WzBdLnZhbHVlO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBwcm9jZXNzV2VhdGhlclJlcXVlc3QoZ2V0V2VhdGhlclJlcXVlc3QobG9jYXRpb24pKTtcblxuICBpZiAoZGF0YSkge1xuICAgIGRpc3BsYXlDdXJyZW50V2VhdGhlckljb24oZGF0YSk7XG4gICAgZGlzcGxheUN1cnJlbnRDb25kaXRpb25zKGRhdGEpO1xuICAgIGRpc3BsYXlDdXJyZW50RGVzY3JpcHRpb25zKGRhdGEpO1xuICAgIGRpc3BsYXlEYXlGb3JlY2FzdChkYXRhKTtcbiAgICBldmVudC50YXJnZXRbMF0udmFsdWUgPSAnJztcbiAgICByZXR1cm47XG4gIH1cblxuICBhbGVydCgncGxlYXNlIGVudGVyIGEgdmFsaWQgbG9jYXRpb24nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuIiwiYXN5bmMgZnVuY3Rpb24gZ2V0SWNvbihpY29uKSB7XG4gIGNvbnN0IG15SWNvbiA9IGF3YWl0IGltcG9ydChgLi4vYXNzZXRzL1ZDV2VhdGhlckljb25zLyR7aWNvbn0ucG5nYCk7XG4gIHJldHVybiBteUljb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRXZWF0aGVySWNvbihpY29uVGV4dCkge1xuICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGljb25SZXNwb25zZSA9IGF3YWl0IGdldEljb24oaWNvblRleHQpO1xuICBpY29uLnNyYyA9IGljb25SZXNwb25zZS5kZWZhdWx0O1xuICByZXR1cm4gaWNvbjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50V2VhdGhlckljb24oanNvbkRhdGEpIHtcbiAgY29uc3QgaWNvbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC13ZWF0aGVyLWljb24td3JhcHBlcicpO1xuICBpY29uV3JhcHBlci5yZXBsYWNlQ2hpbGRyZW4oKTsgLy8gQ2xlYXIgcHJldmlvdXMgaWNvblxuXG4gIGNvbnN0IGljb24gPSBhd2FpdCBjcmVhdGVDdXJyZW50V2VhdGhlckljb24oanNvbkRhdGEuY3VycmVudENvbmRpdGlvbnMuaWNvbik7XG4gIGljb25XcmFwcGVyLmFwcGVuZENoaWxkKGljb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRDb25kaXRpb25zKGpzb25EYXRhKSB7XG4gIGNvbnN0IGN1cnJlbnRDb25kaXRpb25zV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5jdXJyZW50LWNvbmRpdGlvbnMtd3JhcHBlcicsXG4gICk7XG4gIGN1cnJlbnRDb25kaXRpb25zV3JhcHBlci5yZXBsYWNlQ2hpbGRyZW4oKTsgLy8gQ2xlYXIgcHJldmlvdXMgY29udGVudFxuXG4gIGNvbnN0IGN1cnJlbnRUZW1wID0ganNvbkRhdGEuY3VycmVudENvbmRpdGlvbnMudGVtcDtcbiAgY29uc3QgY3VycmVudFByZWNpcGl0YXRpb24gPSBqc29uRGF0YS5jdXJyZW50Q29uZGl0aW9ucy5wcmVjaXA7XG4gIGNvbnN0IGN1cnJlbnRIdW1pZGl0eSA9IGpzb25EYXRhLmN1cnJlbnRDb25kaXRpb25zLmh1bWlkaXR5O1xuICBjb25zdCBjdXJyZW50V2luZCA9IGpzb25EYXRhLmN1cnJlbnRDb25kaXRpb25zLndpbmRzcGVlZDtcblxuICBjb25zdCB3ZWF0aGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB3ZWF0aGVyVW5pdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZmFocmVuaGVpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjZWxzaXVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGZhaHJlbmhlaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb25zdCBjZWxzaXVzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29uc3QgY3VycmVudE90aGVyQ29uZGl0aW9uc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJlY2lwaXRhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGh1bWlkaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3Qgd2luZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgd2VhdGhlclRleHQuY2xhc3NOYW1lID0gJ2N1cnJlbnQtdGVtcGVyYXR1cmUgZmxleCc7XG4gIHdlYXRoZXJVbml0cy5jbGFzc05hbWUgPSAnd2VhdGhlci11bml0cyBmbGV4JztcbiAgZmFocmVuaGVpdC5jbGFzc05hbWUgPSAnZmFocmVuaGVpdCc7XG4gIGNlbHNpdXMuY2xhc3NOYW1lID0gJ2NlbHNpdXMnO1xuICBmYWhyZW5oZWl0TGluay5jbGFzc05hbWUgPSAnZmFocmVuaGVpdC1saW5rJztcbiAgY2Vsc2l1c0xpbmsuY2xhc3NOYW1lID0gJ2NlbHNpdXMtbGluayc7XG4gIGN1cnJlbnRPdGhlckNvbmRpdGlvbnNXcmFwcGVyLmNsYXNzTmFtZSA9XG4gICAgJ2N1cnJlbnQtb3RoZXItY29uZGl0aW9ucy13cmFwcGVyIGNvbCc7XG4gIHByZWNpcGl0YXRpb25UZXh0LmNsYXNzTmFtZSA9ICdjdXJyZW50LXByZWNpcGl0YXRpb24nO1xuICBodW1pZGl0eVRleHQuY2xhc3NOYW1lID0gJ2N1cnJlbnQtaHVtaWRpdHknO1xuICB3aW5kVGV4dC5jbGFzc05hbWUgPSAnY3VycmVudC13aW5kJztcblxuICBmYWhyZW5oZWl0TGluay50ZXh0Q29udGVudCA9ICdGwrAnO1xuICBjZWxzaXVzTGluay50ZXh0Q29udGVudCA9ICdDwrAnO1xuICB3ZWF0aGVyVGV4dC50ZXh0Q29udGVudCA9IE1hdGguY2VpbChjdXJyZW50VGVtcCk7XG4gIHByZWNpcGl0YXRpb25UZXh0LnRleHRDb250ZW50ID0gYFByZWNpcGl0YXRpb246ICR7Y3VycmVudFByZWNpcGl0YXRpb259JWA7XG4gIGh1bWlkaXR5VGV4dC50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtjdXJyZW50SHVtaWRpdHl9JWA7XG4gIHdpbmRUZXh0LnRleHRDb250ZW50ID0gYFdpbmQ6ICR7Y3VycmVudFdpbmR9IG1waGA7XG5cbiAgZmFocmVuaGVpdExpbmsuaHJlZiA9ICcjJztcbiAgY2Vsc2l1c0xpbmsuaHJlZiA9ICcjJztcblxuICBmYWhyZW5oZWl0LmFwcGVuZENoaWxkKGZhaHJlbmhlaXRMaW5rKTtcbiAgY2Vsc2l1cy5hcHBlbmRDaGlsZChjZWxzaXVzTGluayk7XG4gIHdlYXRoZXJVbml0cy5hcHBlbmQoZmFocmVuaGVpdCwgY2Vsc2l1cyk7XG4gIHdlYXRoZXJUZXh0LmFwcGVuZENoaWxkKHdlYXRoZXJVbml0cyk7XG4gIGN1cnJlbnRPdGhlckNvbmRpdGlvbnNXcmFwcGVyLmFwcGVuZChcbiAgICBwcmVjaXBpdGF0aW9uVGV4dCxcbiAgICBodW1pZGl0eVRleHQsXG4gICAgd2luZFRleHQsXG4gICk7XG4gIGN1cnJlbnRDb25kaXRpb25zV3JhcHBlci5hcHBlbmQod2VhdGhlclRleHQsIGN1cnJlbnRPdGhlckNvbmRpdGlvbnNXcmFwcGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50RGVzY3JpcHRpb25zKGpzb25EYXRhKSB7XG4gIGNvbnN0IGN1cnJlbnREZXNjcmlwdGlvbnNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLmN1cnJlbnQtZGVzY3JpcHRpb25zLXdyYXBwZXInLFxuICApO1xuICBjdXJyZW50RGVzY3JpcHRpb25zV3JhcHBlci5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBqc29uRGF0YS5yZXNvbHZlZEFkZHJlc3M7XG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gY29udmVydFRvU3RhbmRhcmRUaW1lKFxuICAgIGpzb25EYXRhLmN1cnJlbnRDb25kaXRpb25zLmRhdGV0aW1lLFxuICApO1xuICBjb25zdCBjdXJyZW50U2hvcnREZXNjcmlwdGlvbiA9IGpzb25EYXRhLmN1cnJlbnRDb25kaXRpb25zLmNvbmRpdGlvbnM7XG4gIGNvbnN0IGN1cnJlbnRUaW1lRXBvY2ggPSBqc29uRGF0YS5jdXJyZW50Q29uZGl0aW9ucy5kYXRldGltZUVwb2NoICogMTAwMDtcbiAgY29uc3QgY3VycmVudFRpbWVab25lT2Zmc2V0ID0ganNvbkRhdGEudHpvZmZzZXQgKiAzNjAwMDAwO1xuICBjb25zdCBjdXJyZW50V2Vla2RheSA9IGdldFdlZWtEYXkoY3VycmVudFRpbWVFcG9jaCArIGN1cnJlbnRUaW1lWm9uZU9mZnNldCk7IC8vIGNvbnZlcnQgdGltZXpvbmUgb2Zmc2V0IHRvIG1zIGFuZCB0aW1lcyAxMDBcblxuICBjb25zdCBjdXJyZW50TG9jYXRpb25FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGN1cnJlbnREYXRlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjdXJyZW50U2hvcnREZXNjcmlwdGlvbnNFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY3VycmVudExvY2F0aW9uRWxlbS5jbGFzc05hbWUgPSAnJztcbiAgY3VycmVudERhdGVFbGVtLmNsYXNzTmFtZSA9ICcnO1xuICBjdXJyZW50U2hvcnREZXNjcmlwdGlvbnNFbGVtLmNsYXNzTmFtZSA9ICcnO1xuXG4gIGN1cnJlbnRMb2NhdGlvbkVsZW0udGV4dENvbnRlbnQgPSBgJHtjdXJyZW50TG9jYXRpb259YDtcbiAgY3VycmVudERhdGVFbGVtLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlZWtkYXl9ICR7Y3VycmVudFRpbWV9YDtcbiAgY3VycmVudFNob3J0RGVzY3JpcHRpb25zRWxlbS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRTaG9ydERlc2NyaXB0aW9ufWA7XG5cbiAgY3VycmVudERlc2NyaXB0aW9uc1dyYXBwZXIuYXBwZW5kKFxuICAgIGN1cnJlbnRMb2NhdGlvbkVsZW0sXG4gICAgY3VycmVudERhdGVFbGVtLFxuICAgIGN1cnJlbnRTaG9ydERlc2NyaXB0aW9uc0VsZW0sXG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFdlZWtEYXkodGltZSkge1xuICBjb25zdCBkYXlOYW1lcyA9IFtcbiAgICAnU3VuZGF5JyxcbiAgICAnTW9uZGF5JyxcbiAgICAnVHVlc2RheScsXG4gICAgJ1dlZG5lc2RheScsXG4gICAgJ1RodXJzZGF5JyxcbiAgICAnRnJpZGF5JyxcbiAgICAnU2F0dXJkYXknLFxuICBdO1xuXG4gIC8vIG5lZWRzIHRvIHVzZSBVVEMgZGF5IGZvciBhY2N1cmF0ZSB0aW1lem9uZVxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKHRpbWUpLmdldFVUQ0RheSgpO1xuICByZXR1cm4gZGF5TmFtZXNbdG9kYXldO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9TdGFuZGFyZFRpbWUodGltZSkge1xuICBjb25zdCBbaG91ciwgbWluXSA9IHRpbWUuc3BsaXQoJzonKTtcblxuICBpZiAoTnVtYmVyKGhvdXIpIDwgMTIgJiYgTnVtYmVyKGhvdXIpICE9IDApIHtcbiAgICByZXR1cm4gYCR7aG91cn06JHttaW59IEFNYDtcbiAgfSBlbHNlIGlmIChOdW1iZXIoaG91cikgPj0gMTMpIHtcbiAgICByZXR1cm4gYCR7TnVtYmVyKGhvdXIpIC0gMTJ9OiR7bWlufSBQTWA7XG4gIH0gZWxzZSBpZiAoTnVtYmVyKGhvdXIpID09PSAxMikge1xuICAgIHJldHVybiBgJHtOdW1iZXIoaG91cil9OiR7bWlufSBQTWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGAke051bWJlcihob3VyKSArIDEyfToke21pbn0gQU1gO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkaXNwbGF5RGF5Rm9yZWNhc3QoanNvbkRhdGEpIHtcbiAgY29uc3QgYm90dG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvdHRvbScpO1xuICBjb25zdCBmb3JlY2FzdCA9IGpzb25EYXRhLmRheXMuc2xpY2UoMSwgOSk7XG5cbiAgYm90dG9tLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIGZvcmVjYXN0LmZvckVhY2goYXN5bmMgKGRheUZvcmVjYXN0KSA9PiB7XG4gICAgY29uc3QgZGF5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRheVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkYXlJY29uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRheVRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF5VGVtcGVyYXR1cmVMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZGF5VGVtcGVyYXR1cmVIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGRheUljb24gPSBhd2FpdCBjcmVhdGVDdXJyZW50V2VhdGhlckljb24oZGF5Rm9yZWNhc3QuaWNvbik7XG5cbiAgICBkYXlXcmFwcGVyLmNsYXNzTmFtZSA9ICdkYXktd3JhcHBlciBjb2wnO1xuICAgIGRheVRleHQuY2xhc3NOYW1lID0gJ2RheS10ZXh0JztcbiAgICBkYXlJY29uV3JhcHBlci5jbGFzc05hbWUgPSAnZGF5LWljb24td3JhcHBlcic7XG4gICAgZGF5VGVtcGVyYXR1cmUuY2xhc3NOYW1lID0gJ2RheS10ZW1wZXJhdHVyZSBmbGV4JztcblxuICAgIGRheVRleHQudGV4dENvbnRlbnQgPSBgJHtnZXRXZWVrRGF5KGRheUZvcmVjYXN0LmRhdGV0aW1lKX1gO1xuICAgIGRheVRlbXBlcmF0dXJlTG93LnRleHRDb250ZW50ID0gYCR7TWF0aC5jZWlsKGRheUZvcmVjYXN0LnRlbXBtaW4pfcKwYDtcbiAgICBkYXlUZW1wZXJhdHVyZUhpZ2gudGV4dENvbnRlbnQgPSBgJHtNYXRoLmNlaWwoZGF5Rm9yZWNhc3QudGVtcG1heCl9wrBgO1xuXG4gICAgZGF5SWNvbldyYXBwZXIuYXBwZW5kQ2hpbGQoZGF5SWNvbik7XG4gICAgZGF5VGVtcGVyYXR1cmUuYXBwZW5kKGRheVRlbXBlcmF0dXJlTG93LCBkYXlUZW1wZXJhdHVyZUhpZ2gpO1xuICAgIGRheVdyYXBwZXIuYXBwZW5kKGRheVRleHQsIGRheUljb25XcmFwcGVyLCBkYXlUZW1wZXJhdHVyZSk7XG4gICAgYm90dG9tLmFwcGVuZChkYXlXcmFwcGVyKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGlzcGxheUN1cnJlbnRXZWF0aGVySWNvbixcbiAgZGlzcGxheUN1cnJlbnRDb25kaXRpb25zLFxuICBkaXNwbGF5Q3VycmVudERlc2NyaXB0aW9ucyxcbiAgZGlzcGxheURheUZvcmVjYXN0LFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==