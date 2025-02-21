/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Roboto-VariableFont_wdth,wght.ttf */ "./src/font/Roboto-VariableFont_wdth,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/PlayfairDisplay-VariableFont_wght.ttf */ "./src/font/PlayfairDisplay-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/github-142-svgrepo-com.svg */ "./src/img/github-142-svgrepo-com.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/linkedin-rounded-svgrepo-com.svg */ "./src/img/linkedin-rounded-svgrepo-com.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/twitter-154-svgrepo-com.svg */ "./src/img/twitter-154-svgrepo-com.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Roboto;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: Playfair-display;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

*{
    box-sizing: border-box;
    border:2px solid red;
    margin:5px;
}

img{
    display: block;
    width: 100%;
    max-width: 400px;
}

.tablet-design-img{
    visibility: hidden;
    display: none;
}

html,body{
    margin:0;
    padding:0;
}



.container-1 img{
    max-width: 300px;
    width: 100%;
}

.container-1{
    background: linear-gradient(169.9deg, #37afe1 540px, white 70px);
}


.main-container{
    display: flex;
    justify-content: center;
    max-width: 1200px;
    min-width: 900px;
    margin: 0 auto;
    padding: 2rem 0 5rem 0;
}



/* FIRST CONTAINER: TITLE/DESCRIPTION/ICONS */

.about-me__descr{
    padding:1rem;
    max-width: 600px;
    align-self: center;
    box-shadow: 2px 2px 2px 2px black;
}

.about-me__descr h1{
    margin: 2rem 0 2rem 0;
    font-size: 40px;
    font-family: 'Roboto';
}

.about-me__descr__para{
    display: inline;
    font-size: 23px;
    font-family: 'Playfair-display';
}

.about-me__img{
    position:relative;
}

.about-me__name{
    font-size: 44px;
    color:white;
    position: absolute;
    top:400px;
}

/* FIRST CONTAINER: TITLE/DESCRIPTION/ICONS */


/* ICONS */

.about-me__descr__icons{
    display: flex;
    justify-content: end;
    margin-top: 3rem;
    gap:1rem;
}

.icon1{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size:contain;
    height: 2rem;
    width: 2rem;
}

.icon2{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size:contain;
    height: 2rem;
    width: 2rem;
}

.icon3{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    background-size:contain;
    height: 2rem;
    width: 2rem;
}



/* FINISH ICONS */


/* MY WORK CONTAINER */

.container-2__div{
    padding:0 1rem 0 0;
}

.container-2__title{
    display: flex;
    justify-content: start;
    padding: 1rem 0 1rem 0;
    font-size: 2.2rem;
}

.my-work__grid{
    box-shadow: 5px 5px 10px;
}

.my-work__child-div{
    max-width: 970px;
    padding:1rem 1rem 1rem 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap:30px;
}

.my-work__grid__internal{
    display: flex;
    justify-content:flex-end;
    padding:10px 10px 0 10px;
}


.my-work__grid__internal + p{
    padding:0 10px 10px 10px;
}

.my-work__grid__internal img{
    padding-right: 5px;
    max-width: 30px;
}

.my-work__grid__internal p{
    flex-grow: 1;
    justify-self: start;
    font-size: 1.5rem;
}

/* END OF MY WORK CONTAINER */



/* THIRD CONTAINER */

.container-3{
    background-color: #00879e;
}

.container-3 p,
.container-3 h1{
    margin:10px;
}


.container-3__main-child{
    padding:3rem;
    gap:80px;
    font-size: 2rem;
}

.container-3__left img{
    max-width: 30px;
}

.container-3__left > h1{
    font-size: 3rem;
}

.container-3__right img{
    max-width: 400px;
    min-width: 350px;
}

.container-3__left__phone,
.container-3__left__mail,
.container-3__left__links{
    display: flex;
    gap:10px;
}

.container-3__left__links{
    margin-top: 30px;
    gap:20px;
}

/* END OF THIRD CONTAINER */


@media (max-width: 1000px) and (min-width: 500px) {

    .tablet-design-img{
        max-width: 450px;
        max-height: 450px;
        visibility: visible;
        display: block;
        float: left;
    }

    .about-me__img img{
        display: none;
        visibility: hidden;
        position: static;
    }

    .about-me__descr h1{
        margin-top: 100px;
    }

    .about-me__descr__para{
        font-size: 1.5rem;
    }

    .about-me__name{
        width: 360px;
        font-size: 52px;
        top:20px;
        left:250px;
    }

    .main-container{
        min-width: 100px;
    }

    .my-work__child-div{
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }

    img{
        max-width: 450px;
    }

    .container-2__div.main-container{
        justify-content: flex-start;
    }

    .container-2__title.main-container{
        margin:0 0 0 40px;
    }

    .container-3__right img{
        max-width: 200px;
    }

    .container-3__main-child{
        padding:1rem;
        gap:10px;
    }
   
}

@media (max-width:660px) and (min-width:500px) {
    .about-me__name{
        left:15px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,4CAAmD;AACvD;;AAEA;IACI,6BAA6B;IAC7B,4CAAsD;AAC1D;;AAEA;IACI,sBAAsB;IACtB,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,cAAc;IACd,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,QAAQ;IACR,SAAS;AACb;;;;AAIA;IACI,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,gEAAgE;AACpE;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,sBAAsB;AAC1B;;;;AAIA,6CAA6C;;AAE7C;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,SAAS;AACb;;AAEA,6CAA6C;;;AAG7C,UAAU;;AAEV;IACI,aAAa;IACb,oBAAoB;IACpB,gBAAgB;IAChB,QAAQ;AACZ;;AAEA;IACI,yDAAyD;IACzD,uBAAuB;IACvB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,yDAA+D;IAC/D,uBAAuB;IACvB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,yDAA0D;IAC1D,uBAAuB;IACvB,YAAY;IACZ,WAAW;AACf;;;;AAIA,iBAAiB;;;AAGjB,sBAAsB;;AAEtB;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;IAChB,6BAA6B;IAC7B,aAAa;IACb,kCAAkC;IAClC,2BAA2B;IAC3B,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,wBAAwB;AAC5B;;;AAGA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA,6BAA6B;;;;AAI7B,oBAAoB;;AAEpB;IACI,yBAAyB;AAC7B;;AAEA;;IAEI,WAAW;AACf;;;AAGA;IACI,YAAY;IACZ,QAAQ;IACR,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;;;IAGI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,gBAAgB;IAChB,QAAQ;AACZ;;AAEA,2BAA2B;;;AAG3B;;IAEI;QACI,gBAAgB;QAChB,iBAAiB;QACjB,mBAAmB;QACnB,cAAc;QACd,WAAW;IACf;;IAEA;QACI,aAAa;QACb,kBAAkB;QAClB,gBAAgB;IACpB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,YAAY;QACZ,eAAe;QACf,QAAQ;QACR,UAAU;IACd;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,8BAA8B;QAC9B,+BAA+B;IACnC;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,2BAA2B;IAC/B;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,YAAY;QACZ,QAAQ;IACZ;;AAEJ;;AAEA;IACI;QACI,SAAS;IACb;AACJ","sourcesContent":["@font-face {\n    font-family: Roboto;\n    src: url(./font/Roboto-VariableFont_wdth\\,wght.ttf);\n}\n\n@font-face {\n    font-family: Playfair-display;\n    src: url(./font/PlayfairDisplay-VariableFont_wght.ttf);\n}\n\n*{\n    box-sizing: border-box;\n    border:2px solid red;\n    margin:5px;\n}\n\nimg{\n    display: block;\n    width: 100%;\n    max-width: 400px;\n}\n\n.tablet-design-img{\n    visibility: hidden;\n    display: none;\n}\n\nhtml,body{\n    margin:0;\n    padding:0;\n}\n\n\n\n.container-1 img{\n    max-width: 300px;\n    width: 100%;\n}\n\n.container-1{\n    background: linear-gradient(169.9deg, #37afe1 540px, white 70px);\n}\n\n\n.main-container{\n    display: flex;\n    justify-content: center;\n    max-width: 1200px;\n    min-width: 900px;\n    margin: 0 auto;\n    padding: 2rem 0 5rem 0;\n}\n\n\n\n/* FIRST CONTAINER: TITLE/DESCRIPTION/ICONS */\n\n.about-me__descr{\n    padding:1rem;\n    max-width: 600px;\n    align-self: center;\n    box-shadow: 2px 2px 2px 2px black;\n}\n\n.about-me__descr h1{\n    margin: 2rem 0 2rem 0;\n    font-size: 40px;\n    font-family: 'Roboto';\n}\n\n.about-me__descr__para{\n    display: inline;\n    font-size: 23px;\n    font-family: 'Playfair-display';\n}\n\n.about-me__img{\n    position:relative;\n}\n\n.about-me__name{\n    font-size: 44px;\n    color:white;\n    position: absolute;\n    top:400px;\n}\n\n/* FIRST CONTAINER: TITLE/DESCRIPTION/ICONS */\n\n\n/* ICONS */\n\n.about-me__descr__icons{\n    display: flex;\n    justify-content: end;\n    margin-top: 3rem;\n    gap:1rem;\n}\n\n.icon1{\n    background-image: url('./img/github-142-svgrepo-com.svg');\n    background-size:contain;\n    height: 2rem;\n    width: 2rem;\n}\n\n.icon2{\n    background-image: url('./img/linkedin-rounded-svgrepo-com.svg');\n    background-size:contain;\n    height: 2rem;\n    width: 2rem;\n}\n\n.icon3{\n    background-image: url('./img/twitter-154-svgrepo-com.svg');\n    background-size:contain;\n    height: 2rem;\n    width: 2rem;\n}\n\n\n\n/* FINISH ICONS */\n\n\n/* MY WORK CONTAINER */\n\n.container-2__div{\n    padding:0 1rem 0 0;\n}\n\n.container-2__title{\n    display: flex;\n    justify-content: start;\n    padding: 1rem 0 1rem 0;\n    font-size: 2.2rem;\n}\n\n.my-work__grid{\n    box-shadow: 5px 5px 10px;\n}\n\n.my-work__child-div{\n    max-width: 970px;\n    padding:1rem 1rem 1rem 1.5rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap:30px;\n}\n\n.my-work__grid__internal{\n    display: flex;\n    justify-content:flex-end;\n    padding:10px 10px 0 10px;\n}\n\n\n.my-work__grid__internal + p{\n    padding:0 10px 10px 10px;\n}\n\n.my-work__grid__internal img{\n    padding-right: 5px;\n    max-width: 30px;\n}\n\n.my-work__grid__internal p{\n    flex-grow: 1;\n    justify-self: start;\n    font-size: 1.5rem;\n}\n\n/* END OF MY WORK CONTAINER */\n\n\n\n/* THIRD CONTAINER */\n\n.container-3{\n    background-color: #00879e;\n}\n\n.container-3 p,\n.container-3 h1{\n    margin:10px;\n}\n\n\n.container-3__main-child{\n    padding:3rem;\n    gap:80px;\n    font-size: 2rem;\n}\n\n.container-3__left img{\n    max-width: 30px;\n}\n\n.container-3__left > h1{\n    font-size: 3rem;\n}\n\n.container-3__right img{\n    max-width: 400px;\n    min-width: 350px;\n}\n\n.container-3__left__phone,\n.container-3__left__mail,\n.container-3__left__links{\n    display: flex;\n    gap:10px;\n}\n\n.container-3__left__links{\n    margin-top: 30px;\n    gap:20px;\n}\n\n/* END OF THIRD CONTAINER */\n\n\n@media (max-width: 1000px) and (min-width: 500px) {\n\n    .tablet-design-img{\n        max-width: 450px;\n        max-height: 450px;\n        visibility: visible;\n        display: block;\n        float: left;\n    }\n\n    .about-me__img img{\n        display: none;\n        visibility: hidden;\n        position: static;\n    }\n\n    .about-me__descr h1{\n        margin-top: 100px;\n    }\n\n    .about-me__descr__para{\n        font-size: 1.5rem;\n    }\n\n    .about-me__name{\n        width: 360px;\n        font-size: 52px;\n        top:20px;\n        left:250px;\n    }\n\n    .main-container{\n        min-width: 100px;\n    }\n\n    .my-work__child-div{\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n    }\n\n    img{\n        max-width: 450px;\n    }\n\n    .container-2__div.main-container{\n        justify-content: flex-start;\n    }\n\n    .container-2__title.main-container{\n        margin:0 0 0 40px;\n    }\n\n    .container-3__right img{\n        max-width: 200px;\n    }\n\n    .container-3__main-child{\n        padding:1rem;\n        gap:10px;\n    }\n   \n}\n\n@media (max-width:660px) and (min-width:500px) {\n    .about-me__name{\n        left:15px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./src/font/PlayfairDisplay-VariableFont_wght.ttf":
/*!********************************************************!*\
  !*** ./src/font/PlayfairDisplay-VariableFont_wght.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf46a6bcddc9999a295e.ttf";

/***/ }),

/***/ "./src/font/Roboto-VariableFont_wdth,wght.ttf":
/*!****************************************************!*\
  !*** ./src/font/Roboto-VariableFont_wdth,wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c9d0f6513f7cfe91016.ttf";

/***/ }),

/***/ "./src/img/github-142-svgrepo-com.svg":
/*!********************************************!*\
  !*** ./src/img/github-142-svgrepo-com.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5531be85d7a8d6f333e5.svg";

/***/ }),

/***/ "./src/img/linkedin-rounded-svgrepo-com.svg":
/*!**************************************************!*\
  !*** ./src/img/linkedin-rounded-svgrepo-com.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7455a3a96a01aa50c56.svg";

/***/ }),

/***/ "./src/img/twitter-154-svgrepo-com.svg":
/*!*********************************************!*\
  !*** ./src/img/twitter-154-svgrepo-com.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aedcb58ce5a258131a16.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZKQUEyRDtBQUN2Ryw0Q0FBNEMscUtBQStEO0FBQzNHLDRDQUE0Qyw2SUFBbUQ7QUFDL0YsNENBQTRDLHlKQUF5RDtBQUNyRyw0Q0FBNEMsK0lBQW9EO0FBQ2hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxTQUFTLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxjQUFjLFlBQVksS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFFBQVEsY0FBYyxjQUFjLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sZUFBZSxjQUFjLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxxQ0FBcUMsMEJBQTBCLDJEQUEyRCxHQUFHLGdCQUFn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QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udC9Sb2JvdG8tVmFyaWFibGVGb250X3dkdGgsd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvUGxheWZhaXJEaXNwbGF5LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL2dpdGh1Yi0xNDItc3ZncmVwby1jb20uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWcvbGlua2VkaW4tcm91bmRlZC1zdmdyZXBvLWNvbS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy90d2l0dGVyLTE1NC1zdmdyZXBvLWNvbS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogUGxheWZhaXItZGlzcGxheTtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xuICAgIG1hcmdpbjo1cHg7XG59XG5cbmltZ3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4udGFibGV0LWRlc2lnbi1pbWd7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbmh0bWwsYm9keXtcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG59XG5cblxuXG4uY29udGFpbmVyLTEgaW1ne1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXItMXtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTY5LjlkZWcsICMzN2FmZTEgNTQwcHgsIHdoaXRlIDcwcHgpO1xufVxuXG5cbi5tYWluLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1pbi13aWR0aDogOTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMnJlbSAwIDVyZW0gMDtcbn1cblxuXG5cbi8qIEZJUlNUIENPTlRBSU5FUjogVElUTEUvREVTQ1JJUFRJT04vSUNPTlMgKi9cblxuLmFib3V0LW1lX19kZXNjcntcbiAgICBwYWRkaW5nOjFyZW07XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IGJsYWNrO1xufVxuXG4uYWJvdXQtbWVfX2Rlc2NyIGgxe1xuICAgIG1hcmdpbjogMnJlbSAwIDJyZW0gMDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuXG4uYWJvdXQtbWVfX2Rlc2NyX19wYXJhe1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpci1kaXNwbGF5Jztcbn1cblxuLmFib3V0LW1lX19pbWd7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi5hYm91dC1tZV9fbmFtZXtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo0MDBweDtcbn1cblxuLyogRklSU1QgQ09OVEFJTkVSOiBUSVRMRS9ERVNDUklQVElPTi9JQ09OUyAqL1xuXG5cbi8qIElDT05TICovXG5cbi5hYm91dC1tZV9fZGVzY3JfX2ljb25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBnYXA6MXJlbTtcbn1cblxuLmljb24xe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG59XG5cbi5pY29uMntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOmNvbnRhaW47XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xufVxuXG4uaWNvbjN7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbn1cblxuXG5cbi8qIEZJTklTSCBJQ09OUyAqL1xuXG5cbi8qIE1ZIFdPUksgQ09OVEFJTkVSICovXG5cbi5jb250YWluZXItMl9fZGl2e1xuICAgIHBhZGRpbmc6MCAxcmVtIDAgMDtcbn1cblxuLmNvbnRhaW5lci0yX190aXRsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbSAwIDFyZW0gMDtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuLm15LXdvcmtfX2dyaWR7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4O1xufVxuXG4ubXktd29ya19fY2hpbGQtZGl2e1xuICAgIG1heC13aWR0aDogOTcwcHg7XG4gICAgcGFkZGluZzoxcmVtIDFyZW0gMXJlbSAxLjVyZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICBnYXA6MzBweDtcbn1cblxuLm15LXdvcmtfX2dyaWRfX2ludGVybmFse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xuICAgIHBhZGRpbmc6MTBweCAxMHB4IDAgMTBweDtcbn1cblxuXG4ubXktd29ya19fZ3JpZF9faW50ZXJuYWwgKyBwe1xuICAgIHBhZGRpbmc6MCAxMHB4IDEwcHggMTBweDtcbn1cblxuLm15LXdvcmtfX2dyaWRfX2ludGVybmFsIGltZ3tcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgbWF4LXdpZHRoOiAzMHB4O1xufVxuXG4ubXktd29ya19fZ3JpZF9faW50ZXJuYWwgcHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLyogRU5EIE9GIE1ZIFdPUksgQ09OVEFJTkVSICovXG5cblxuXG4vKiBUSElSRCBDT05UQUlORVIgKi9cblxuLmNvbnRhaW5lci0ze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg3OWU7XG59XG5cbi5jb250YWluZXItMyBwLFxuLmNvbnRhaW5lci0zIGgxe1xuICAgIG1hcmdpbjoxMHB4O1xufVxuXG5cbi5jb250YWluZXItM19fbWFpbi1jaGlsZHtcbiAgICBwYWRkaW5nOjNyZW07XG4gICAgZ2FwOjgwcHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uY29udGFpbmVyLTNfX2xlZnQgaW1ne1xuICAgIG1heC13aWR0aDogMzBweDtcbn1cblxuLmNvbnRhaW5lci0zX19sZWZ0ID4gaDF7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uY29udGFpbmVyLTNfX3JpZ2h0IGltZ3tcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1pbi13aWR0aDogMzUwcHg7XG59XG5cbi5jb250YWluZXItM19fbGVmdF9fcGhvbmUsXG4uY29udGFpbmVyLTNfX2xlZnRfX21haWwsXG4uY29udGFpbmVyLTNfX2xlZnRfX2xpbmtze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOjEwcHg7XG59XG5cbi5jb250YWluZXItM19fbGVmdF9fbGlua3N7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBnYXA6MjBweDtcbn1cblxuLyogRU5EIE9GIFRISVJEIENPTlRBSU5FUiAqL1xuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuXG4gICAgLnRhYmxldC1kZXNpZ24taW1ne1xuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0NTBweDtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cblxuICAgIC5hYm91dC1tZV9faW1nIGltZ3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIH1cblxuICAgIC5hYm91dC1tZV9fZGVzY3IgaDF7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIH1cblxuICAgIC5hYm91dC1tZV9fZGVzY3JfX3BhcmF7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cblxuICAgIC5hYm91dC1tZV9fbmFtZXtcbiAgICAgICAgd2lkdGg6IDM2MHB4O1xuICAgICAgICBmb250LXNpemU6IDUycHg7XG4gICAgICAgIHRvcDoyMHB4O1xuICAgICAgICBsZWZ0OjI1MHB4O1xuICAgIH1cblxuICAgIC5tYWluLWNvbnRhaW5lcntcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICB9XG5cbiAgICAubXktd29ya19fY2hpbGQtZGl2e1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XG4gICAgfVxuXG4gICAgaW1ne1xuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgIH1cblxuICAgIC5jb250YWluZXItMl9fZGl2Lm1haW4tY29udGFpbmVye1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci0yX190aXRsZS5tYWluLWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luOjAgMCAwIDQwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci0zX19yaWdodCBpbWd7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci0zX19tYWluLWNoaWxke1xuICAgICAgICBwYWRkaW5nOjFyZW07XG4gICAgICAgIGdhcDoxMHB4O1xuICAgIH1cbiAgIFxufVxuXG5AbWVkaWEgKG1heC13aWR0aDo2NjBweCkgYW5kIChtaW4td2lkdGg6NTAwcHgpIHtcbiAgICAuYWJvdXQtbWVfX25hbWV7XG4gICAgICAgIGxlZnQ6MTVweDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUFtRDtBQUN2RDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw0Q0FBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztBQUNiOzs7O0FBSUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0VBQWdFO0FBQ3BFOzs7QUFHQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCOzs7O0FBSUEsNkNBQTZDOztBQUU3QztJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUEsNkNBQTZDOzs7QUFHN0MsVUFBVTs7QUFFVjtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHlEQUF5RDtJQUN6RCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlEQUErRDtJQUMvRCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlEQUEwRDtJQUMxRCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7OztBQUlBLGlCQUFpQjs7O0FBR2pCLHNCQUFzQjs7QUFFdEI7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsd0JBQXdCO0FBQzVCOzs7QUFHQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUEsNkJBQTZCOzs7O0FBSTdCLG9CQUFvQjs7QUFFcEI7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksV0FBVztBQUNmOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixRQUFRO0FBQ1o7O0FBRUEsMkJBQTJCOzs7QUFHM0I7O0lBRUk7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsV0FBVztJQUNmOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLFFBQVE7UUFDUixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSw4QkFBOEI7UUFDOUIsK0JBQStCO0lBQ25DOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFFBQVE7SUFDWjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksU0FBUztJQUNiO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICAgIHNyYzogdXJsKC4vZm9udC9Sb2JvdG8tVmFyaWFibGVGb250X3dkdGhcXFxcLHdnaHQudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBQbGF5ZmFpci1kaXNwbGF5O1xcbiAgICBzcmM6IHVybCguL2ZvbnQvUGxheWZhaXJEaXNwbGF5LVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxufVxcblxcbip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xcbiAgICBtYXJnaW46NXB4O1xcbn1cXG5cXG5pbWd7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG59XFxuXFxuLnRhYmxldC1kZXNpZ24taW1ne1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmh0bWwsYm9keXtcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG59XFxuXFxuXFxuXFxuLmNvbnRhaW5lci0xIGltZ3tcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXItMXtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2OS45ZGVnLCAjMzdhZmUxIDU0MHB4LCB3aGl0ZSA3MHB4KTtcXG59XFxuXFxuXFxuLm1haW4tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICAgIG1pbi13aWR0aDogOTAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAycmVtIDAgNXJlbSAwO1xcbn1cXG5cXG5cXG5cXG4vKiBGSVJTVCBDT05UQUlORVI6IFRJVExFL0RFU0NSSVBUSU9OL0lDT05TICovXFxuXFxuLmFib3V0LW1lX19kZXNjcntcXG4gICAgcGFkZGluZzoxcmVtO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCBibGFjaztcXG59XFxuXFxuLmFib3V0LW1lX19kZXNjciBoMXtcXG4gICAgbWFyZ2luOiAycmVtIDAgMnJlbSAwO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG59XFxuXFxuLmFib3V0LW1lX19kZXNjcl9fcGFyYXtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXItZGlzcGxheSc7XFxufVxcblxcbi5hYm91dC1tZV9faW1ne1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuLmFib3V0LW1lX19uYW1le1xcbiAgICBmb250LXNpemU6IDQ0cHg7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDo0MDBweDtcXG59XFxuXFxuLyogRklSU1QgQ09OVEFJTkVSOiBUSVRMRS9ERVNDUklQVElPTi9JQ09OUyAqL1xcblxcblxcbi8qIElDT05TICovXFxuXFxuLmFib3V0LW1lX19kZXNjcl9faWNvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICBnYXA6MXJlbTtcXG59XFxuXFxuLmljb24xe1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2dpdGh1Yi0xNDItc3ZncmVwby1jb20uc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4uaWNvbjJ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvbGlua2VkaW4tcm91bmRlZC1zdmdyZXBvLWNvbS5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOmNvbnRhaW47XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5pY29uM3tcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy90d2l0dGVyLTE1NC1zdmdyZXBvLWNvbS5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOmNvbnRhaW47XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblxcblxcblxcbi8qIEZJTklTSCBJQ09OUyAqL1xcblxcblxcbi8qIE1ZIFdPUksgQ09OVEFJTkVSICovXFxuXFxuLmNvbnRhaW5lci0yX19kaXZ7XFxuICAgIHBhZGRpbmc6MCAxcmVtIDAgMDtcXG59XFxuXFxuLmNvbnRhaW5lci0yX190aXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgcGFkZGluZzogMXJlbSAwIDFyZW0gMDtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxufVxcblxcbi5teS13b3JrX19ncmlke1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHg7XFxufVxcblxcbi5teS13b3JrX19jaGlsZC1kaXZ7XFxuICAgIG1heC13aWR0aDogOTcwcHg7XFxuICAgIHBhZGRpbmc6MXJlbSAxcmVtIDFyZW0gMS41cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdhcDozMHB4O1xcbn1cXG5cXG4ubXktd29ya19fZ3JpZF9faW50ZXJuYWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcXG4gICAgcGFkZGluZzoxMHB4IDEwcHggMCAxMHB4O1xcbn1cXG5cXG5cXG4ubXktd29ya19fZ3JpZF9faW50ZXJuYWwgKyBwe1xcbiAgICBwYWRkaW5nOjAgMTBweCAxMHB4IDEwcHg7XFxufVxcblxcbi5teS13b3JrX19ncmlkX19pbnRlcm5hbCBpbWd7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gICAgbWF4LXdpZHRoOiAzMHB4O1xcbn1cXG5cXG4ubXktd29ya19fZ3JpZF9faW50ZXJuYWwgcHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLyogRU5EIE9GIE1ZIFdPUksgQ09OVEFJTkVSICovXFxuXFxuXFxuXFxuLyogVEhJUkQgQ09OVEFJTkVSICovXFxuXFxuLmNvbnRhaW5lci0ze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NzllO1xcbn1cXG5cXG4uY29udGFpbmVyLTMgcCxcXG4uY29udGFpbmVyLTMgaDF7XFxuICAgIG1hcmdpbjoxMHB4O1xcbn1cXG5cXG5cXG4uY29udGFpbmVyLTNfX21haW4tY2hpbGR7XFxuICAgIHBhZGRpbmc6M3JlbTtcXG4gICAgZ2FwOjgwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lci0zX19sZWZ0IGltZ3tcXG4gICAgbWF4LXdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyLTNfX2xlZnQgPiBoMXtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uY29udGFpbmVyLTNfX3JpZ2h0IGltZ3tcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgbWluLXdpZHRoOiAzNTBweDtcXG59XFxuXFxuLmNvbnRhaW5lci0zX19sZWZ0X19waG9uZSxcXG4uY29udGFpbmVyLTNfX2xlZnRfX21haWwsXFxuLmNvbnRhaW5lci0zX19sZWZ0X19saW5rc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjEwcHg7XFxufVxcblxcbi5jb250YWluZXItM19fbGVmdF9fbGlua3N7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGdhcDoyMHB4O1xcbn1cXG5cXG4vKiBFTkQgT0YgVEhJUkQgQ09OVEFJTkVSICovXFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkgYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XFxuXFxuICAgIC50YWJsZXQtZGVzaWduLWltZ3tcXG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA0NTBweDtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB9XFxuXFxuICAgIC5hYm91dC1tZV9faW1nIGltZ3tcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICB9XFxuXFxuICAgIC5hYm91dC1tZV9fZGVzY3IgaDF7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgfVxcblxcbiAgICAuYWJvdXQtbWVfX2Rlc2NyX19wYXJhe1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmFib3V0LW1lX19uYW1le1xcbiAgICAgICAgd2lkdGg6IDM2MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA1MnB4O1xcbiAgICAgICAgdG9wOjIwcHg7XFxuICAgICAgICBsZWZ0OjI1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWNvbnRhaW5lcntcXG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XFxuICAgIH1cXG5cXG4gICAgLm15LXdvcmtfX2NoaWxkLWRpdntcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIH1cXG5cXG4gICAgaW1ne1xcbiAgICAgICAgbWF4LXdpZHRoOiA0NTBweDtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyLTJfX2Rpdi5tYWluLWNvbnRhaW5lcntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyLTJfX3RpdGxlLm1haW4tY29udGFpbmVye1xcbiAgICAgICAgbWFyZ2luOjAgMCAwIDQwcHg7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lci0zX19yaWdodCBpbWd7XFxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXItM19fbWFpbi1jaGlsZHtcXG4gICAgICAgIHBhZGRpbmc6MXJlbTtcXG4gICAgICAgIGdhcDoxMHB4O1xcbiAgICB9XFxuICAgXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOjY2MHB4KSBhbmQgKG1pbi13aWR0aDo1MDBweCkge1xcbiAgICAuYWJvdXQtbWVfX25hbWV7XFxuICAgICAgICBsZWZ0OjE1cHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=