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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,2CAA2C;AAC7C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA,kBAAkB;AAClB;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,eAAe;EACf,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC;;AAEA;;;;EAIE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;;EAEvB;IACE,UAAU;EACZ;AACF;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,WAAW;AACb","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100vh;\n  font-family: Helvetica, Verdana, sans-serif;\n}\n\nbody {\n  align-items: center;\n}\n\na {\n  text-decoration: none;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.grid-layout {\n  height: 80vh;\n  display: grid;\n  grid-template-rows: repeat(4, 1fr);\n}\n\n.flex {\n  display: flex;\n}\n\n.col {\n  display: flex;\n  flex-direction: column;\n}\n\n/* Search section*/\n.search-wrapper {\n  justify-content: center;\n  align-items: center;\n}\n\n.search-input,\n.search-btn {\n  font-size: 1rem;\n  padding: 0.5rem 0.25rem;\n  border: none;\n}\n\n.content-wrapper {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n}\n\n.current-weather-icon-wrapper,\n.current-conditions-wrapper,\n.current-descriptions-wrapper,\n.current-temperature-wrapper {\n  align-items: center;\n}\n\n.current-weather-icon-wrapper {\n  justify-content: center;\n\n  & > img {\n    width: 95%;\n  }\n}\n\n.current-conditions-wrapper {\n  grid-column: 2 / span 4;\n}\n\n.current-descriptions-wrapper {\n  grid-column: 6 / 9;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.current-temperature {\n  font-size: 4rem;\n  margin: 0 0.8rem;\n}\n\n.weather-units {\n  font-size: 1rem;\n  margin-top: 0.7rem;\n}\n\n.fahrenheit-link {\n  color: #fff;\n  padding-right: 0.3rem;\n  border-right: solid 1px gray;\n}\n\n.celsius-link {\n  padding-left: 0.3rem;\n}\n\n.day-wrapper {\n  align-items: center;\n}\n\n.day-temperature {\n  justify-content: center;\n  gap: 0.5rem;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUdzQjtBQUNnQjs7QUFFdEMsMkRBQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSE47QUFDQTtBQUNBO0FBQ0EsNkZBQTZGLFNBQVM7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJnQjtBQU1oRDs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiw4REFBcUIsQ0FBQywwREFBaUI7O0FBRTVEO0FBQ0EsSUFBSSxvRUFBeUI7QUFDN0IsSUFBSSxtRUFBd0I7QUFDNUIsSUFBSSxxRUFBMEI7QUFDOUIsSUFBSSw2REFBa0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CdEI7QUFDQSx1QkFBdUIsbUZBQU8sR0FBMEIsRUFBRSxLQUFLLEtBQUssQ0FBQztBQUNyRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELHFCQUFxQjtBQUN6RSwwQ0FBMEMsZ0JBQWdCO0FBQzFELGtDQUFrQyxhQUFhOztBQUUvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRTs7QUFFL0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsZ0JBQWdCO0FBQ3ZELG1DQUFtQyxnQkFBZ0IsRUFBRSxZQUFZO0FBQ2pFLGdEQUFnRCx3QkFBd0I7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxLQUFLLEdBQUcsS0FBSztBQUMzQixJQUFJO0FBQ0osY0FBYyxrQkFBa0IsR0FBRyxLQUFLO0FBQ3hDLElBQUk7QUFDSixjQUFjLGFBQWEsR0FBRyxLQUFLO0FBQ25DLElBQUk7QUFDSixjQUFjLGtCQUFrQixHQUFHLEtBQUs7QUFDeEM7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsaUNBQWlDO0FBQzlELHVDQUF1QywrQkFBK0I7QUFDdEUsd0NBQXdDLCtCQUErQjs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy8gbGF6eSBeXFwuXFwvLipcXC5wbmckIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYXBpLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZ3JpZC1sYXlvdXQge1xuICBoZWlnaHQ6IDgwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qIFNlYXJjaCBzZWN0aW9uKi9cbi5zZWFyY2gtd3JhcHBlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VhcmNoLWlucHV0LFxuLnNlYXJjaC1idG4ge1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjI1cmVtO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xufVxuXG4uY3VycmVudC13ZWF0aGVyLWljb24td3JhcHBlcixcbi5jdXJyZW50LWNvbmRpdGlvbnMtd3JhcHBlcixcbi5jdXJyZW50LWRlc2NyaXB0aW9ucy13cmFwcGVyLFxuLmN1cnJlbnQtdGVtcGVyYXR1cmUtd3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jdXJyZW50LXdlYXRoZXItaWNvbi13cmFwcGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgJiA+IGltZyB7XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxufVxuXG4uY3VycmVudC1jb25kaXRpb25zLXdyYXBwZXIge1xuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gNDtcbn1cblxuLmN1cnJlbnQtZGVzY3JpcHRpb25zLXdyYXBwZXIge1xuICBncmlkLWNvbHVtbjogNiAvIDk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5jdXJyZW50LXRlbXBlcmF0dXJlIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW46IDAgMC44cmVtO1xufVxuXG4ud2VhdGhlci11bml0cyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMC43cmVtO1xufVxuXG4uZmFocmVuaGVpdC1saW5rIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctcmlnaHQ6IDAuM3JlbTtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JheTtcbn1cblxuLmNlbHNpdXMtbGluayB7XG4gIHBhZGRpbmctbGVmdDogMC4zcmVtO1xufVxuXG4uZGF5LXdyYXBwZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGF5LXRlbXBlcmF0dXJlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7O0FBRUE7Ozs7RUFJRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7O0VBRXZCO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uZ3JpZC1sYXlvdXQge1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qIFNlYXJjaCBzZWN0aW9uKi9cXG4uc2VhcmNoLXdyYXBwZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0LFxcbi5zZWFyY2gtYnRuIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjI1cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWljb24td3JhcHBlcixcXG4uY3VycmVudC1jb25kaXRpb25zLXdyYXBwZXIsXFxuLmN1cnJlbnQtZGVzY3JpcHRpb25zLXdyYXBwZXIsXFxuLmN1cnJlbnQtdGVtcGVyYXR1cmUtd3JhcHBlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWljb24td3JhcHBlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICYgPiBpbWcge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcbn1cXG5cXG4uY3VycmVudC1jb25kaXRpb25zLXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDQ7XFxufVxcblxcbi5jdXJyZW50LWRlc2NyaXB0aW9ucy13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiA2IC8gOTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uY3VycmVudC10ZW1wZXJhdHVyZSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBtYXJnaW46IDAgMC44cmVtO1xcbn1cXG5cXG4ud2VhdGhlci11bml0cyB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAwLjdyZW07XFxufVxcblxcbi5mYWhyZW5oZWl0LWxpbmsge1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjNyZW07XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmF5O1xcbn1cXG5cXG4uY2Vsc2l1cy1saW5rIHtcXG4gIHBhZGRpbmctbGVmdDogMC4zcmVtO1xcbn1cXG5cXG4uZGF5LXdyYXBwZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRheS10ZW1wZXJhdHVyZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL2NsZWFyLWRheS5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL2NsZWFyLWRheS5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfY2xlYXItZGF5X3BuZ1wiXG5cdF0sXG5cdFwiLi9jbGVhci1uaWdodC5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL2NsZWFyLW5pZ2h0LnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc19jbGVhci1uaWdodF9wbmdcIlxuXHRdLFxuXHRcIi4vY2xvdWR5LnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvY2xvdWR5LnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc19jbG91ZHlfcG5nXCJcblx0XSxcblx0XCIuL2ZvZy5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL2ZvZy5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfZm9nX3BuZ1wiXG5cdF0sXG5cdFwiLi9oYWlsLnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvaGFpbC5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfaGFpbF9wbmdcIlxuXHRdLFxuXHRcIi4vcGFydGx5LWNsb3VkeS1kYXkucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy9wYXJ0bHktY2xvdWR5LWRheS5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfcGFydGx5LWNsb3VkeS1kYXlfcG5nXCJcblx0XSxcblx0XCIuL3BhcnRseS1jbG91ZHktbmlnaHQucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy9wYXJ0bHktY2xvdWR5LW5pZ2h0LnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc19wYXJ0bHktY2xvdWR5LW5pZ2h0X3BuZ1wiXG5cdF0sXG5cdFwiLi9yYWluLXNub3ctc2hvd2Vycy1kYXkucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy9yYWluLXNub3ctc2hvd2Vycy1kYXkucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX3JhaW4tc25vdy1zaG93ZXJzLWRheV9wbmdcIlxuXHRdLFxuXHRcIi4vcmFpbi1zbm93LXNob3dlcnMtbmlnaHQucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy9yYWluLXNub3ctc2hvd2Vycy1uaWdodC5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfcmFpbi1zbm93LXNob3dlcnMtbmlnaHRfcG5nXCJcblx0XSxcblx0XCIuL3JhaW4tc25vdy5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL3JhaW4tc25vdy5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfcmFpbi1zbm93X3BuZ1wiXG5cdF0sXG5cdFwiLi9yYWluLnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvcmFpbi5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfcmFpbl9wbmdcIlxuXHRdLFxuXHRcIi4vc2hvd2Vycy1kYXkucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy9zaG93ZXJzLWRheS5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfc2hvd2Vycy1kYXlfcG5nXCJcblx0XSxcblx0XCIuL3Nob3dlcnMtbmlnaHQucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy9zaG93ZXJzLW5pZ2h0LnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc19zaG93ZXJzLW5pZ2h0X3BuZ1wiXG5cdF0sXG5cdFwiLi9zbGVldC5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL3NsZWV0LnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc19zbGVldF9wbmdcIlxuXHRdLFxuXHRcIi4vc25vdy1zaG93ZXJzLWRheS5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL3Nub3ctc2hvd2Vycy1kYXkucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX3Nub3ctc2hvd2Vycy1kYXlfcG5nXCJcblx0XSxcblx0XCIuL3Nub3ctc2hvd2Vycy1uaWdodC5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL3Nub3ctc2hvd2Vycy1uaWdodC5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfc25vdy1zaG93ZXJzLW5pZ2h0X3BuZ1wiXG5cdF0sXG5cdFwiLi9zbm93LnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvc25vdy5wbmdcIixcblx0XHRcInNyY19hc3NldHNfVkNXZWF0aGVySWNvbnNfc25vd19wbmdcIlxuXHRdLFxuXHRcIi4vdGh1bmRlci1yYWluLnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMvdGh1bmRlci1yYWluLnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc190aHVuZGVyLXJhaW5fcG5nXCJcblx0XSxcblx0XCIuL3RodW5kZXItc2hvd2Vycy1kYXkucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy90aHVuZGVyLXNob3dlcnMtZGF5LnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc190aHVuZGVyLXNob3dlcnMtZGF5X3BuZ1wiXG5cdF0sXG5cdFwiLi90aHVuZGVyLXNob3dlcnMtbmlnaHQucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy90aHVuZGVyLXNob3dlcnMtbmlnaHQucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX3RodW5kZXItc2hvd2Vycy1uaWdodF9wbmdcIlxuXHRdLFxuXHRcIi4vdGh1bmRlci5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL1ZDV2VhdGhlckljb25zL3RodW5kZXIucG5nXCIsXG5cdFx0XCJzcmNfYXNzZXRzX1ZDV2VhdGhlckljb25zX3RodW5kZXJfcG5nXCJcblx0XSxcblx0XCIuL3dpbmQucG5nXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9WQ1dlYXRoZXJJY29ucy93aW5kLnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19WQ1dlYXRoZXJJY29uc193aW5kX3BuZ1wiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udChpZCwgMSB8IDE2KTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvVkNXZWF0aGVySWNvbnMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwucG5nJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9tb2R1bGVzL2RvbS5qcyc7XG5cbnJlbmRlcigpO1xuIiwiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlclJlcXVlc3QobG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7bG9jYXRpb259P2tleT1RTjRTS0JOUk5CWlBKWjhFSEpOUkVKQ1VHYCxcbiAgICApO1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzV2VhdGhlclJlcXVlc3QocmVzcG9uc2UpIHtcbiAgY29uc3QgbXlQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUocmVzcG9uc2UpKTtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgbXlQcm9taXNlO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59XG5cbmV4cG9ydCB7IGdldFdlYXRoZXJSZXF1ZXN0LCBwcm9jZXNzV2VhdGhlclJlcXVlc3QgfTtcbiIsImltcG9ydCB7IGdldFdlYXRoZXJSZXF1ZXN0LCBwcm9jZXNzV2VhdGhlclJlcXVlc3QgfSBmcm9tICcuL2FwaS5qcyc7XG5pbXBvcnQge1xuICBkaXNwbGF5Q3VycmVudFdlYXRoZXJJY29uLFxuICBkaXNwbGF5Q3VycmVudENvbmRpdGlvbnMsXG4gIGRpc3BsYXlDdXJyZW50RGVzY3JpcHRpb25zLFxuICBkaXNwbGF5RGF5Rm9yZWNhc3QsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWZvcm0nKTtcbiAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVTZWFyY2gpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVTZWFyY2goZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbG9jYXRpb24gPSBldmVudC50YXJnZXRbMF0udmFsdWU7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHByb2Nlc3NXZWF0aGVyUmVxdWVzdChnZXRXZWF0aGVyUmVxdWVzdChsb2NhdGlvbikpO1xuXG4gIGlmIChkYXRhKSB7XG4gICAgZGlzcGxheUN1cnJlbnRXZWF0aGVySWNvbihkYXRhKTtcbiAgICBkaXNwbGF5Q3VycmVudENvbmRpdGlvbnMoZGF0YSk7XG4gICAgZGlzcGxheUN1cnJlbnREZXNjcmlwdGlvbnMoZGF0YSk7XG4gICAgZGlzcGxheURheUZvcmVjYXN0KGRhdGEpO1xuICAgIGV2ZW50LnRhcmdldFswXS52YWx1ZSA9ICcnO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGFsZXJ0KCdwbGVhc2UgZW50ZXIgYSB2YWxpZCBsb2NhdGlvbicpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXI7XG4iLCJhc3luYyBmdW5jdGlvbiBnZXRJY29uKGljb24pIHtcbiAgY29uc3QgbXlJY29uID0gYXdhaXQgaW1wb3J0KGAuLi9hc3NldHMvVkNXZWF0aGVySWNvbnMvJHtpY29ufS5wbmdgKTtcbiAgcmV0dXJuIG15SWNvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ3VycmVudFdlYXRoZXJJY29uKGljb25UZXh0KSB7XG4gIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgaWNvblJlc3BvbnNlID0gYXdhaXQgZ2V0SWNvbihpY29uVGV4dCk7XG4gIGljb24uc3JjID0gaWNvblJlc3BvbnNlLmRlZmF1bHQ7XG4gIHJldHVybiBpY29uO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRXZWF0aGVySWNvbihqc29uRGF0YSkge1xuICBjb25zdCBpY29uV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXItaWNvbi13cmFwcGVyJyk7XG4gIGljb25XcmFwcGVyLnJlcGxhY2VDaGlsZHJlbigpOyAvLyBDbGVhciBwcmV2aW91cyBpY29uXG5cbiAgY29uc3QgaWNvbiA9IGF3YWl0IGNyZWF0ZUN1cnJlbnRXZWF0aGVySWNvbihqc29uRGF0YS5jdXJyZW50Q29uZGl0aW9ucy5pY29uKTtcbiAgaWNvbldyYXBwZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudENvbmRpdGlvbnMoanNvbkRhdGEpIHtcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbnNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLmN1cnJlbnQtY29uZGl0aW9ucy13cmFwcGVyJyxcbiAgKTtcbiAgY3VycmVudENvbmRpdGlvbnNXcmFwcGVyLnJlcGxhY2VDaGlsZHJlbigpOyAvLyBDbGVhciBwcmV2aW91cyBjb250ZW50XG5cbiAgY29uc3QgY3VycmVudFRlbXAgPSBqc29uRGF0YS5jdXJyZW50Q29uZGl0aW9ucy50ZW1wO1xuICBjb25zdCBjdXJyZW50UHJlY2lwaXRhdGlvbiA9IGpzb25EYXRhLmN1cnJlbnRDb25kaXRpb25zLnByZWNpcDtcbiAgY29uc3QgY3VycmVudEh1bWlkaXR5ID0ganNvbkRhdGEuY3VycmVudENvbmRpdGlvbnMuaHVtaWRpdHk7XG4gIGNvbnN0IGN1cnJlbnRXaW5kID0ganNvbkRhdGEuY3VycmVudENvbmRpdGlvbnMud2luZHNwZWVkO1xuXG4gIGNvbnN0IHdlYXRoZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHdlYXRoZXJVbml0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBmYWhyZW5oZWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNlbHNpdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZmFocmVuaGVpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IGNlbHNpdXNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb25zdCBjdXJyZW50T3RoZXJDb25kaXRpb25zV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcmVjaXBpdGF0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgaHVtaWRpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCB3aW5kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICB3ZWF0aGVyVGV4dC5jbGFzc05hbWUgPSAnY3VycmVudC10ZW1wZXJhdHVyZSBmbGV4JztcbiAgd2VhdGhlclVuaXRzLmNsYXNzTmFtZSA9ICd3ZWF0aGVyLXVuaXRzIGZsZXgnO1xuICBmYWhyZW5oZWl0LmNsYXNzTmFtZSA9ICdmYWhyZW5oZWl0JztcbiAgY2Vsc2l1cy5jbGFzc05hbWUgPSAnY2Vsc2l1cyc7XG4gIGZhaHJlbmhlaXRMaW5rLmNsYXNzTmFtZSA9ICdmYWhyZW5oZWl0LWxpbmsnO1xuICBjZWxzaXVzTGluay5jbGFzc05hbWUgPSAnY2Vsc2l1cy1saW5rJztcbiAgY3VycmVudE90aGVyQ29uZGl0aW9uc1dyYXBwZXIuY2xhc3NOYW1lID1cbiAgICAnY3VycmVudC1vdGhlci1jb25kaXRpb25zLXdyYXBwZXIgY29sJztcbiAgcHJlY2lwaXRhdGlvblRleHQuY2xhc3NOYW1lID0gJ2N1cnJlbnQtcHJlY2lwaXRhdGlvbic7XG4gIGh1bWlkaXR5VGV4dC5jbGFzc05hbWUgPSAnY3VycmVudC1odW1pZGl0eSc7XG4gIHdpbmRUZXh0LmNsYXNzTmFtZSA9ICdjdXJyZW50LXdpbmQnO1xuXG4gIGZhaHJlbmhlaXRMaW5rLnRleHRDb250ZW50ID0gJ0bCsCc7XG4gIGNlbHNpdXNMaW5rLnRleHRDb250ZW50ID0gJ0PCsCc7XG4gIHdlYXRoZXJUZXh0LnRleHRDb250ZW50ID0gTWF0aC5jZWlsKGN1cnJlbnRUZW1wKTtcbiAgcHJlY2lwaXRhdGlvblRleHQudGV4dENvbnRlbnQgPSBgUHJlY2lwaXRhdGlvbjogJHtjdXJyZW50UHJlY2lwaXRhdGlvbn0lYDtcbiAgaHVtaWRpdHlUZXh0LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2N1cnJlbnRIdW1pZGl0eX0lYDtcbiAgd2luZFRleHQudGV4dENvbnRlbnQgPSBgV2luZDogJHtjdXJyZW50V2luZH0gbXBoYDtcblxuICBmYWhyZW5oZWl0TGluay5ocmVmID0gJyMnO1xuICBjZWxzaXVzTGluay5ocmVmID0gJyMnO1xuXG4gIGZhaHJlbmhlaXQuYXBwZW5kQ2hpbGQoZmFocmVuaGVpdExpbmspO1xuICBjZWxzaXVzLmFwcGVuZENoaWxkKGNlbHNpdXNMaW5rKTtcbiAgd2VhdGhlclVuaXRzLmFwcGVuZChmYWhyZW5oZWl0LCBjZWxzaXVzKTtcbiAgd2VhdGhlclRleHQuYXBwZW5kQ2hpbGQod2VhdGhlclVuaXRzKTtcbiAgY3VycmVudE90aGVyQ29uZGl0aW9uc1dyYXBwZXIuYXBwZW5kKFxuICAgIHByZWNpcGl0YXRpb25UZXh0LFxuICAgIGh1bWlkaXR5VGV4dCxcbiAgICB3aW5kVGV4dCxcbiAgKTtcbiAgY3VycmVudENvbmRpdGlvbnNXcmFwcGVyLmFwcGVuZCh3ZWF0aGVyVGV4dCwgY3VycmVudE90aGVyQ29uZGl0aW9uc1dyYXBwZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUN1cnJlbnREZXNjcmlwdGlvbnMoanNvbkRhdGEpIHtcbiAgY29uc3QgY3VycmVudERlc2NyaXB0aW9uc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuY3VycmVudC1kZXNjcmlwdGlvbnMtd3JhcHBlcicsXG4gICk7XG4gIGN1cnJlbnREZXNjcmlwdGlvbnNXcmFwcGVyLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGpzb25EYXRhLnJlc29sdmVkQWRkcmVzcztcbiAgY29uc3QgY3VycmVudFRpbWUgPSBjb252ZXJ0VG9TdGFuZGFyZFRpbWUoXG4gICAganNvbkRhdGEuY3VycmVudENvbmRpdGlvbnMuZGF0ZXRpbWUsXG4gICk7XG4gIGNvbnN0IGN1cnJlbnRTaG9ydERlc2NyaXB0aW9uID0ganNvbkRhdGEuY3VycmVudENvbmRpdGlvbnMuY29uZGl0aW9ucztcbiAgY29uc3QgY3VycmVudFRpbWVFcG9jaCA9IGpzb25EYXRhLmN1cnJlbnRDb25kaXRpb25zLmRhdGV0aW1lRXBvY2ggKiAxMDAwO1xuICBjb25zdCBjdXJyZW50VGltZVpvbmVPZmZzZXQgPSBqc29uRGF0YS50em9mZnNldCAqIDM2MDAwMDA7XG4gIGNvbnN0IGN1cnJlbnRXZWVrZGF5ID0gZ2V0V2Vla0RheShjdXJyZW50VGltZUVwb2NoICsgY3VycmVudFRpbWVab25lT2Zmc2V0KTsgLy8gY29udmVydCB0aW1lem9uZSBvZmZzZXQgdG8gbXMgYW5kIHRpbWVzIDEwMFxuXG4gIGNvbnN0IGN1cnJlbnRMb2NhdGlvbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY3VycmVudERhdGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGN1cnJlbnRTaG9ydERlc2NyaXB0aW9uc0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjdXJyZW50TG9jYXRpb25FbGVtLmNsYXNzTmFtZSA9ICcnO1xuICBjdXJyZW50RGF0ZUVsZW0uY2xhc3NOYW1lID0gJyc7XG4gIGN1cnJlbnRTaG9ydERlc2NyaXB0aW9uc0VsZW0uY2xhc3NOYW1lID0gJyc7XG5cbiAgY3VycmVudExvY2F0aW9uRWxlbS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRMb2NhdGlvbn1gO1xuICBjdXJyZW50RGF0ZUVsZW0udGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2Vla2RheX0gJHtjdXJyZW50VGltZX1gO1xuICBjdXJyZW50U2hvcnREZXNjcmlwdGlvbnNFbGVtLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFNob3J0RGVzY3JpcHRpb259YDtcblxuICBjdXJyZW50RGVzY3JpcHRpb25zV3JhcHBlci5hcHBlbmQoXG4gICAgY3VycmVudExvY2F0aW9uRWxlbSxcbiAgICBjdXJyZW50RGF0ZUVsZW0sXG4gICAgY3VycmVudFNob3J0RGVzY3JpcHRpb25zRWxlbSxcbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0V2Vla0RheSh0aW1lKSB7XG4gIGNvbnN0IGRheU5hbWVzID0gW1xuICAgICdTdW5kYXknLFxuICAgICdNb25kYXknLFxuICAgICdUdWVzZGF5JyxcbiAgICAnV2VkbmVzZGF5JyxcbiAgICAnVGh1cnNkYXknLFxuICAgICdGcmlkYXknLFxuICAgICdTYXR1cmRheScsXG4gIF07XG5cbiAgLy8gbmVlZHMgdG8gdXNlIFVUQyBkYXkgZm9yIGFjY3VyYXRlIHRpbWV6b25lXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUodGltZSkuZ2V0VVRDRGF5KCk7XG4gIHJldHVybiBkYXlOYW1lc1t0b2RheV07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb1N0YW5kYXJkVGltZSh0aW1lKSB7XG4gIGNvbnN0IFtob3VyLCBtaW5dID0gdGltZS5zcGxpdCgnOicpO1xuXG4gIGlmIChOdW1iZXIoaG91cikgPCAxMiAmJiBOdW1iZXIoaG91cikgIT0gMCkge1xuICAgIHJldHVybiBgJHtob3VyfToke21pbn0gQU1gO1xuICB9IGVsc2UgaWYgKE51bWJlcihob3VyKSA+PSAxMykge1xuICAgIHJldHVybiBgJHtOdW1iZXIoaG91cikgLSAxMn06JHttaW59IFBNYDtcbiAgfSBlbHNlIGlmIChOdW1iZXIoaG91cikgPT09IDEyKSB7XG4gICAgcmV0dXJuIGAke051bWJlcihob3VyKX06JHttaW59IFBNYDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYCR7TnVtYmVyKGhvdXIpICsgMTJ9OiR7bWlufSBBTWA7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlEYXlGb3JlY2FzdChqc29uRGF0YSkge1xuICBjb25zdCBib3R0b20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm90dG9tJyk7XG4gIGNvbnN0IGZvcmVjYXN0ID0ganNvbkRhdGEuZGF5cy5zbGljZSgxLCA5KTtcblxuICBib3R0b20ucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgZm9yZWNhc3QuZm9yRWFjaChhc3luYyAoZGF5Rm9yZWNhc3QpID0+IHtcbiAgICBjb25zdCBkYXlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRheUljb25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF5VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkYXlUZW1wZXJhdHVyZUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkYXlUZW1wZXJhdHVyZUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZGF5SWNvbiA9IGF3YWl0IGNyZWF0ZUN1cnJlbnRXZWF0aGVySWNvbihkYXlGb3JlY2FzdC5pY29uKTtcblxuICAgIGRheVdyYXBwZXIuY2xhc3NOYW1lID0gJ2RheS13cmFwcGVyIGNvbCc7XG4gICAgZGF5VGV4dC5jbGFzc05hbWUgPSAnZGF5LXRleHQnO1xuICAgIGRheUljb25XcmFwcGVyLmNsYXNzTmFtZSA9ICdkYXktaWNvbi13cmFwcGVyJztcbiAgICBkYXlUZW1wZXJhdHVyZS5jbGFzc05hbWUgPSAnZGF5LXRlbXBlcmF0dXJlIGZsZXgnO1xuXG4gICAgZGF5VGV4dC50ZXh0Q29udGVudCA9IGAke2dldFdlZWtEYXkoZGF5Rm9yZWNhc3QuZGF0ZXRpbWUpfWA7XG4gICAgZGF5VGVtcGVyYXR1cmVMb3cudGV4dENvbnRlbnQgPSBgJHtNYXRoLmNlaWwoZGF5Rm9yZWNhc3QudGVtcG1pbil9wrBgO1xuICAgIGRheVRlbXBlcmF0dXJlSGlnaC50ZXh0Q29udGVudCA9IGAke01hdGguY2VpbChkYXlGb3JlY2FzdC50ZW1wbWF4KX3CsGA7XG5cbiAgICBkYXlJY29uV3JhcHBlci5hcHBlbmRDaGlsZChkYXlJY29uKTtcbiAgICBkYXlUZW1wZXJhdHVyZS5hcHBlbmQoZGF5VGVtcGVyYXR1cmVMb3csIGRheVRlbXBlcmF0dXJlSGlnaCk7XG4gICAgZGF5V3JhcHBlci5hcHBlbmQoZGF5VGV4dCwgZGF5SWNvbldyYXBwZXIsIGRheVRlbXBlcmF0dXJlKTtcbiAgICBib3R0b20uYXBwZW5kKGRheVdyYXBwZXIpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBkaXNwbGF5Q3VycmVudFdlYXRoZXJJY29uLFxuICBkaXNwbGF5Q3VycmVudENvbmRpdGlvbnMsXG4gIGRpc3BsYXlDdXJyZW50RGVzY3JpcHRpb25zLFxuICBkaXNwbGF5RGF5Rm9yZWNhc3QsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9