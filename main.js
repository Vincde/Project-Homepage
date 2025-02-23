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

    .container-3__left{
        max-width: 450px;
        min-width: 300px;
        color:white;
    }

    .container-3__right{
        max-width: 450px;
    }

    .container-3__right img{
        min-width: auto;
        max-width: 450px;
    }

    .container-3__main-child{
        padding:1rem;
        gap:0;
    }

    .container-3__left__mail > p{
        font-size: 1.5rem;
    }
   
}

@media (max-width:660px) and (min-width:500px) {
    .about-me__name{
        left:15px;
    }
}

@media (max-width: 500px) {
    .main-container{
        min-width: auto;
        flex-direction: column;
    }
    .about-me__img img{
        margin:0 auto;
    }
    .about-me__name{
        left: 0px;
        top:170px;
    }

    .about-me__descr__icons{
        justify-content: center;
    }
}



/* SINGLE MEDIA QUERY */

@media (min-width:367px) and (max-width:500px) {
    .about-me__name{
        width: 150px;
        left:15px;
        top:350px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: Roboto;\n    src: url(./font/Roboto-VariableFont_wdth\\,wght.ttf);\n}\n\n@font-face {\n    font-family: Playfair-display;\n    src: url(./font/PlayfairDisplay-VariableFont_wght.ttf);\n}\n\n*{\n    box-sizing: border-box;\n    border:2px solid red;\n    margin:5px;\n}\n\nimg{\n    display: block;\n    width: 100%;\n    max-width: 400px;\n}\n\n.tablet-design-img{\n    visibility: hidden;\n    display: none;\n}\n\nhtml,body{\n    margin:0;\n    padding:0;\n}\n\n\n\n.container-1 img{\n    max-width: 300px;\n    width: 100%;\n}\n\n.container-1{\n    background: linear-gradient(169.9deg, #37afe1 540px, white 70px);\n}\n\n\n.main-container{\n    display: flex;\n    justify-content: center;\n    max-width: 1200px;\n    min-width: 900px;\n    margin: 0 auto;\n    padding: 2rem 0 5rem 0;\n}\n\n\n\n/* FIRST CONTAINER: TITLE/DESCRIPTION/ICONS */\n\n.about-me__descr{\n    padding:1rem;\n    max-width: 600px;\n    align-self: center;\n    box-shadow: 2px 2px 2px 2px black;\n}\n\n.about-me__descr h1{\n    margin: 2rem 0 2rem 0;\n    font-size: 40px;\n    font-family: 'Roboto';\n}\n\n.about-me__descr__para{\n    display: inline;\n    font-size: 23px;\n    font-family: 'Playfair-display';\n}\n\n.about-me__img{\n    position:relative;\n}\n\n.about-me__name{\n    font-size: 44px;\n    color:white;\n    position: absolute;\n    top:400px;\n}\n\n/* FIRST CONTAINER: TITLE/DESCRIPTION/ICONS */\n\n\n/* ICONS */\n\n.about-me__descr__icons{\n    display: flex;\n    justify-content: end;\n    margin-top: 3rem;\n    gap:1rem;\n}\n\n.icon1{\n    background-image: url('./img/github-142-svgrepo-com.svg');\n    background-size:contain;\n    height: 2rem;\n    width: 2rem;\n}\n\n.icon2{\n    background-image: url('./img/linkedin-rounded-svgrepo-com.svg');\n    background-size:contain;\n    height: 2rem;\n    width: 2rem;\n}\n\n.icon3{\n    background-image: url('./img/twitter-154-svgrepo-com.svg');\n    background-size:contain;\n    height: 2rem;\n    width: 2rem;\n}\n\n\n\n/* FINISH ICONS */\n\n\n/* MY WORK CONTAINER */\n\n.container-2__div{\n    padding:0 1rem 0 0;\n}\n\n.container-2__title{\n    display: flex;\n    justify-content: start;\n    padding: 1rem 0 1rem 0;\n    font-size: 2.2rem;\n}\n\n.my-work__grid{\n    box-shadow: 5px 5px 10px;\n}\n\n.my-work__child-div{\n    max-width: 970px;\n    padding:1rem 1rem 1rem 1.5rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap:30px;\n}\n\n.my-work__grid__internal{\n    display: flex;\n    justify-content:flex-end;\n    padding:10px 10px 0 10px;\n}\n\n\n.my-work__grid__internal + p{\n    padding:0 10px 10px 10px;\n}\n\n.my-work__grid__internal img{\n    padding-right: 5px;\n    max-width: 30px;\n}\n\n.my-work__grid__internal p{\n    flex-grow: 1;\n    justify-self: start;\n    font-size: 1.5rem;\n}\n\n/* END OF MY WORK CONTAINER */\n\n\n\n/* THIRD CONTAINER */\n\n.container-3{\n    background-color: #00879e;\n}\n\n.container-3 p,\n.container-3 h1{\n    margin:10px;\n}\n\n\n.container-3__main-child{\n    padding:3rem;\n    gap:80px;\n    font-size: 2rem;\n}\n\n.container-3__left img{\n    max-width: 30px;\n}\n\n.container-3__left > h1{\n    font-size: 3rem;\n}\n\n.container-3__right img{\n    max-width: 400px;\n    min-width: 350px;\n}\n\n.container-3__left__phone,\n.container-3__left__mail,\n.container-3__left__links{\n    display: flex;\n    gap:10px;\n}\n\n.container-3__left__links{\n    margin-top: 30px;\n    gap:20px;\n}\n\n/* END OF THIRD CONTAINER */\n\n\n@media (max-width: 1000px) and (min-width: 500px) {\n\n    .tablet-design-img{\n        max-width: 450px;\n        max-height: 450px;\n        visibility: visible;\n        display: block;\n        float: left;\n    }\n\n    .about-me__img img{\n        display: none;\n        visibility: hidden;\n        position: static;\n    }\n\n    .about-me__descr h1{\n        margin-top: 100px;\n    }\n\n    .about-me__descr__para{\n        font-size: 1.5rem;\n    }\n\n    .about-me__name{\n        width: 360px;\n        font-size: 52px;\n        top:20px;\n        left:250px;\n    }\n\n    .main-container{\n        min-width: 100px;\n    }\n\n    .my-work__child-div{\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n    }\n\n    img{\n        max-width: 450px;\n    }\n\n    .container-2__div.main-container{\n        justify-content: flex-start;\n    }\n\n    .container-2__title.main-container{\n        margin:0 0 0 40px;\n    }\n\n    .container-3__left{\n        max-width: 450px;\n        min-width: 300px;\n        color:white;\n    }\n\n    .container-3__right{\n        max-width: 450px;\n    }\n\n    .container-3__right img{\n        min-width: auto;\n        max-width: 450px;\n    }\n\n    .container-3__main-child{\n        padding:1rem;\n        gap:0;\n    }\n\n    .container-3__left__mail > p{\n        font-size: 1.5rem;\n    }\n   \n}\n\n@media (max-width:660px) and (min-width:500px) {\n    .about-me__name{\n        left:15px;\n    }\n}\n\n@media (max-width: 500px) {\n    .main-container{\n        min-width: auto;\n        flex-direction: column;\n    }\n    .about-me__img img{\n        margin:0 auto;\n    }\n    .about-me__name{\n        left: 0px;\n        top:170px;\n    }\n\n    .about-me__descr__icons{\n        justify-content: center;\n    }\n}\n\n\n\n/* SINGLE MEDIA QUERY */\n\n@media (min-width:367px) and (max-width:500px) {\n    .about-me__name{\n        width: 150px;\n        left:15px;\n        top:350px;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZKQUEyRDtBQUN2Ryw0Q0FBNEMscUtBQStEO0FBQzNHLDRDQUE0Qyw2SUFBbUQ7QUFDL0YsNENBQTRDLHlKQUF5RDtBQUNyRyw0Q0FBNEMsK0lBQW9EO0FBQ2hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxTQUFTLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxjQUFjLFlBQVksS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFFBQVEsY0FBYyxjQUFjLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sZUFBZSxjQUFjLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVB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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udC9Sb2JvdG8tVmFyaWFibGVGb250X3dkdGgsd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvUGxheWZhaXJEaXNwbGF5LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL2dpdGh1Yi0xNDItc3ZncmVwby1jb20uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWcvbGlua2VkaW4tcm91bmRlZC1zdmdyZXBvLWNvbS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy90d2l0dGVyLTE1NC1zdmdyZXBvLWNvbS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogUGxheWZhaXItZGlzcGxheTtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xuICAgIG1hcmdpbjo1cHg7XG59XG5cbmltZ3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4udGFibGV0LWRlc2lnbi1pbWd7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbmh0bWwsYm9keXtcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG59XG5cblxuXG4uY29udGFpbmVyLTEgaW1ne1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXItMXtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTY5LjlkZWcsICMzN2FmZTEgNTQwcHgsIHdoaXRlIDcwcHgpO1xufVxuXG5cbi5tYWluLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1pbi13aWR0aDogOTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMnJlbSAwIDVyZW0gMDtcbn1cblxuXG5cbi8qIEZJUlNUIENPTlRBSU5FUjogVElUTEUvREVTQ1JJUFRJT04vSUNPTlMgKi9cblxuLmFib3V0LW1lX19kZXNjcntcbiAgICBwYWRkaW5nOjFyZW07XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IGJsYWNrO1xufVxuXG4uYWJvdXQtbWVfX2Rlc2NyIGgxe1xuICAgIG1hcmdpbjogMnJlbSAwIDJyZW0gMDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuXG4uYWJvdXQtbWVfX2Rlc2NyX19wYXJhe1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpci1kaXNwbGF5Jztcbn1cblxuLmFib3V0LW1lX19pbWd7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi5hYm91dC1tZV9fbmFtZXtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo0MDBweDtcbn1cblxuLyogRklSU1QgQ09OVEFJTkVSOiBUSVRMRS9ERVNDUklQVElPTi9JQ09OUyAqL1xuXG5cbi8qIElDT05TICovXG5cbi5hYm91dC1tZV9fZGVzY3JfX2ljb25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBnYXA6MXJlbTtcbn1cblxuLmljb24xe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG59XG5cbi5pY29uMntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOmNvbnRhaW47XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xufVxuXG4uaWNvbjN7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbn1cblxuXG5cbi8qIEZJTklTSCBJQ09OUyAqL1xuXG5cbi8qIE1ZIFdPUksgQ09OVEFJTkVSICovXG5cbi5jb250YWluZXItMl9fZGl2e1xuICAgIHBhZGRpbmc6MCAxcmVtIDAgMDtcbn1cblxuLmNvbnRhaW5lci0yX190aXRsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbSAwIDFyZW0gMDtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuLm15LXdvcmtfX2dyaWR7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4O1xufVxuXG4ubXktd29ya19fY2hpbGQtZGl2e1xuICAgIG1heC13aWR0aDogOTcwcHg7XG4gICAgcGFkZGluZzoxcmVtIDFyZW0gMXJlbSAxLjVyZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICBnYXA6MzBweDtcbn1cblxuLm15LXdvcmtfX2dyaWRfX2ludGVybmFse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xuICAgIHBhZGRpbmc6MTBweCAxMHB4IDAgMTBweDtcbn1cblxuXG4ubXktd29ya19fZ3JpZF9faW50ZXJuYWwgKyBwe1xuICAgIHBhZGRpbmc6MCAxMHB4IDEwcHggMTBweDtcbn1cblxuLm15LXdvcmtfX2dyaWRfX2ludGVybmFsIGltZ3tcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgbWF4LXdpZHRoOiAzMHB4O1xufVxuXG4ubXktd29ya19fZ3JpZF9faW50ZXJuYWwgcHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLyogRU5EIE9GIE1ZIFdPUksgQ09OVEFJTkVSICovXG5cblxuXG4vKiBUSElSRCBDT05UQUlORVIgKi9cblxuLmNvbnRhaW5lci0ze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg3OWU7XG59XG5cbi5jb250YWluZXItMyBwLFxuLmNvbnRhaW5lci0zIGgxe1xuICAgIG1hcmdpbjoxMHB4O1xufVxuXG5cbi5jb250YWluZXItM19fbWFpbi1jaGlsZHtcbiAgICBwYWRkaW5nOjNyZW07XG4gICAgZ2FwOjgwcHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uY29udGFpbmVyLTNfX2xlZnQgaW1ne1xuICAgIG1heC13aWR0aDogMzBweDtcbn1cblxuLmNvbnRhaW5lci0zX19sZWZ0ID4gaDF7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uY29udGFpbmVyLTNfX3JpZ2h0IGltZ3tcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1pbi13aWR0aDogMzUwcHg7XG59XG5cbi5jb250YWluZXItM19fbGVmdF9fcGhvbmUsXG4uY29udGFpbmVyLTNfX2xlZnRfX21haWwsXG4uY29udGFpbmVyLTNfX2xlZnRfX2xpbmtze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOjEwcHg7XG59XG5cbi5jb250YWluZXItM19fbGVmdF9fbGlua3N7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBnYXA6MjBweDtcbn1cblxuLyogRU5EIE9GIFRISVJEIENPTlRBSU5FUiAqL1xuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuXG4gICAgLnRhYmxldC1kZXNpZ24taW1ne1xuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0NTBweDtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cblxuICAgIC5hYm91dC1tZV9faW1nIGltZ3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIH1cblxuICAgIC5hYm91dC1tZV9fZGVzY3IgaDF7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIH1cblxuICAgIC5hYm91dC1tZV9fZGVzY3JfX3BhcmF7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cblxuICAgIC5hYm91dC1tZV9fbmFtZXtcbiAgICAgICAgd2lkdGg6IDM2MHB4O1xuICAgICAgICBmb250LXNpemU6IDUycHg7XG4gICAgICAgIHRvcDoyMHB4O1xuICAgICAgICBsZWZ0OjI1MHB4O1xuICAgIH1cblxuICAgIC5tYWluLWNvbnRhaW5lcntcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICB9XG5cbiAgICAubXktd29ya19fY2hpbGQtZGl2e1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XG4gICAgfVxuXG4gICAgaW1ne1xuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgIH1cblxuICAgIC5jb250YWluZXItMl9fZGl2Lm1haW4tY29udGFpbmVye1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci0yX190aXRsZS5tYWluLWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luOjAgMCAwIDQwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci0zX19sZWZ0e1xuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyLTNfX3JpZ2h0e1xuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgIH1cblxuICAgIC5jb250YWluZXItM19fcmlnaHQgaW1ne1xuICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci0zX19tYWluLWNoaWxke1xuICAgICAgICBwYWRkaW5nOjFyZW07XG4gICAgICAgIGdhcDowO1xuICAgIH1cblxuICAgIC5jb250YWluZXItM19fbGVmdF9fbWFpbCA+IHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgIFxufVxuXG5AbWVkaWEgKG1heC13aWR0aDo2NjBweCkgYW5kIChtaW4td2lkdGg6NTAwcHgpIHtcbiAgICAuYWJvdXQtbWVfX25hbWV7XG4gICAgICAgIGxlZnQ6MTVweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIC5tYWluLWNvbnRhaW5lcntcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuYWJvdXQtbWVfX2ltZyBpbWd7XG4gICAgICAgIG1hcmdpbjowIGF1dG87XG4gICAgfVxuICAgIC5hYm91dC1tZV9fbmFtZXtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB0b3A6MTcwcHg7XG4gICAgfVxuXG4gICAgLmFib3V0LW1lX19kZXNjcl9faWNvbnN7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbn1cblxuXG5cbi8qIFNJTkdMRSBNRURJQSBRVUVSWSAqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDozNjdweCkgYW5kIChtYXgtd2lkdGg6NTAwcHgpIHtcbiAgICAuYWJvdXQtbWVfX25hbWV7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgbGVmdDoxNXB4O1xuICAgICAgICB0b3A6MzUwcHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJt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OEJBQThCO1FBQzlCLCtCQUErQjtJQUNuQzs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsV0FBVztJQUNmOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixLQUFLO0lBQ1Q7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLFNBQVM7SUFDYjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2Ysc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxTQUFTO1FBQ1QsU0FBUztJQUNiOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0o7Ozs7QUFJQSx1QkFBdUI7O0FBRXZCO0lBQ0k7UUFDSSxZQUFZO1FBQ1osU0FBUztRQUNULFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgICBzcmM6IHVybCguL2ZvbnQvUm9ib3RvLVZhcmlhYmxlRm9udF93ZHRoXFxcXCx3Z2h0LnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUGxheWZhaXItZGlzcGxheTtcXG4gICAgc3JjOiB1cmwoLi9mb250L1BsYXlmYWlyRGlzcGxheS1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbn1cXG5cXG4qe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcXG4gICAgbWFyZ2luOjVweDtcXG59XFxuXFxuaW1ne1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxufVxcblxcbi50YWJsZXQtZGVzaWduLWltZ3tcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5odG1sLGJvZHl7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxufVxcblxcblxcblxcbi5jb250YWluZXItMSBpbWd7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyLTF7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjkuOWRlZywgIzM3YWZlMSA1NDBweCwgd2hpdGUgNzBweCk7XFxufVxcblxcblxcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbiAgICBtaW4td2lkdGg6IDkwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMnJlbSAwIDVyZW0gMDtcXG59XFxuXFxuXFxuXFxuLyogRklSU1QgQ09OVEFJTkVSOiBUSVRMRS9ERVNDUklQVElPTi9JQ09OUyAqL1xcblxcbi5hYm91dC1tZV9fZGVzY3J7XFxuICAgIHBhZGRpbmc6MXJlbTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggYmxhY2s7XFxufVxcblxcbi5hYm91dC1tZV9fZGVzY3IgaDF7XFxuICAgIG1hcmdpbjogMnJlbSAwIDJyZW0gMDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxufVxcblxcbi5hYm91dC1tZV9fZGVzY3JfX3BhcmF7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyLWRpc3BsYXknO1xcbn1cXG5cXG4uYWJvdXQtbWVfX2ltZ3tcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5hYm91dC1tZV9fbmFtZXtcXG4gICAgZm9udC1zaXplOiA0NHB4O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6NDAwcHg7XFxufVxcblxcbi8qIEZJUlNUIENPTlRBSU5FUjogVElUTEUvREVTQ1JJUFRJT04vSUNPTlMgKi9cXG5cXG5cXG4vKiBJQ09OUyAqL1xcblxcbi5hYm91dC1tZV9fZGVzY3JfX2ljb25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgZ2FwOjFyZW07XFxufVxcblxcbi5pY29uMXtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9naXRodWItMTQyLXN2Z3JlcG8tY29tLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLmljb24ye1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2xpbmtlZGluLXJvdW5kZWQtc3ZncmVwby1jb20uc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4uaWNvbjN7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvdHdpdHRlci0xNTQtc3ZncmVwby1jb20uc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG5cXG5cXG4vKiBGSU5JU0ggSUNPTlMgKi9cXG5cXG5cXG4vKiBNWSBXT1JLIENPTlRBSU5FUiAqL1xcblxcbi5jb250YWluZXItMl9fZGl2e1xcbiAgICBwYWRkaW5nOjAgMXJlbSAwIDA7XFxufVxcblxcbi5jb250YWluZXItMl9fdGl0bGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDA7XFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbn1cXG5cXG4ubXktd29ya19fZ3JpZHtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4O1xcbn1cXG5cXG4ubXktd29ya19fY2hpbGQtZGl2e1xcbiAgICBtYXgtd2lkdGg6IDk3MHB4O1xcbiAgICBwYWRkaW5nOjFyZW0gMXJlbSAxcmVtIDEuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6MzBweDtcXG59XFxuXFxuLm15LXdvcmtfX2dyaWRfX2ludGVybmFse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XFxuICAgIHBhZGRpbmc6MTBweCAxMHB4IDAgMTBweDtcXG59XFxuXFxuXFxuLm15LXdvcmtfX2dyaWRfX2ludGVybmFsICsgcHtcXG4gICAgcGFkZGluZzowIDEwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4ubXktd29ya19fZ3JpZF9faW50ZXJuYWwgaW1ne1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICAgIG1heC13aWR0aDogMzBweDtcXG59XFxuXFxuLm15LXdvcmtfX2dyaWRfX2ludGVybmFsIHB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi8qIEVORCBPRiBNWSBXT1JLIENPTlRBSU5FUiAqL1xcblxcblxcblxcbi8qIFRISVJEIENPTlRBSU5FUiAqL1xcblxcbi5jb250YWluZXItM3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODc5ZTtcXG59XFxuXFxuLmNvbnRhaW5lci0zIHAsXFxuLmNvbnRhaW5lci0zIGgxe1xcbiAgICBtYXJnaW46MTBweDtcXG59XFxuXFxuXFxuLmNvbnRhaW5lci0zX19tYWluLWNoaWxke1xcbiAgICBwYWRkaW5nOjNyZW07XFxuICAgIGdhcDo4MHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jb250YWluZXItM19fbGVmdCBpbWd7XFxuICAgIG1heC13aWR0aDogMzBweDtcXG59XFxuXFxuLmNvbnRhaW5lci0zX19sZWZ0ID4gaDF7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmNvbnRhaW5lci0zX19yaWdodCBpbWd7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG1pbi13aWR0aDogMzUwcHg7XFxufVxcblxcbi5jb250YWluZXItM19fbGVmdF9fcGhvbmUsXFxuLmNvbnRhaW5lci0zX19sZWZ0X19tYWlsLFxcbi5jb250YWluZXItM19fbGVmdF9fbGlua3N7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDoxMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyLTNfX2xlZnRfX2xpbmtze1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBnYXA6MjBweDtcXG59XFxuXFxuLyogRU5EIE9GIFRISVJEIENPTlRBSU5FUiAqL1xcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xcblxcbiAgICAudGFibGV0LWRlc2lnbi1pbWd7XFxuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgICAgICAgbWF4LWhlaWdodDogNDUwcHg7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBmbG9hdDogbGVmdDtcXG4gICAgfVxcblxcbiAgICAuYWJvdXQtbWVfX2ltZyBpbWd7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgfVxcblxcbiAgICAuYWJvdXQtbWVfX2Rlc2NyIGgxe1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIH1cXG5cXG4gICAgLmFib3V0LW1lX19kZXNjcl9fcGFyYXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5hYm91dC1tZV9fbmFtZXtcXG4gICAgICAgIHdpZHRoOiAzNjBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNTJweDtcXG4gICAgICAgIHRvcDoyMHB4O1xcbiAgICAgICAgbGVmdDoyNTBweDtcXG4gICAgfVxcblxcbiAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5teS13b3JrX19jaGlsZC1kaXZ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICB9XFxuXFxuICAgIGltZ3tcXG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lci0yX19kaXYubWFpbi1jb250YWluZXJ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lci0yX190aXRsZS5tYWluLWNvbnRhaW5lcntcXG4gICAgICAgIG1hcmdpbjowIDAgMCA0MHB4O1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXItM19fbGVmdHtcXG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XFxuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICAgICAgY29sb3I6d2hpdGU7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lci0zX19yaWdodHtcXG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lci0zX19yaWdodCBpbWd7XFxuICAgICAgICBtaW4td2lkdGg6IGF1dG87XFxuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXItM19fbWFpbi1jaGlsZHtcXG4gICAgICAgIHBhZGRpbmc6MXJlbTtcXG4gICAgICAgIGdhcDowO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXItM19fbGVmdF9fbWFpbCA+IHB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcbiAgIFxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo2NjBweCkgYW5kIChtaW4td2lkdGg6NTAwcHgpIHtcXG4gICAgLmFib3V0LW1lX19uYW1le1xcbiAgICAgICAgbGVmdDoxNXB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICBtaW4td2lkdGg6IGF1dG87XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIC5hYm91dC1tZV9faW1nIGltZ3tcXG4gICAgICAgIG1hcmdpbjowIGF1dG87XFxuICAgIH1cXG4gICAgLmFib3V0LW1lX19uYW1le1xcbiAgICAgICAgbGVmdDogMHB4O1xcbiAgICAgICAgdG9wOjE3MHB4O1xcbiAgICB9XFxuXFxuICAgIC5hYm91dC1tZV9fZGVzY3JfX2ljb25ze1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuXFxuXFxuLyogU0lOR0xFIE1FRElBIFFVRVJZICovXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6MzY3cHgpIGFuZCAobWF4LXdpZHRoOjUwMHB4KSB7XFxuICAgIC5hYm91dC1tZV9fbmFtZXtcXG4gICAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICAgIGxlZnQ6MTVweDtcXG4gICAgICAgIHRvcDozNTBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==