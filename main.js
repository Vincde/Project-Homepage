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
    }
    .about-me{
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

    .my-work__child-div{
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6,1fr);
    }

    .container-3__main-child{
        flex-direction: column;
        padding:1rem;
        gap:50px;
    }

    .container-3 p,
    .container-3 h1{
        margin:5px;
    }

    .container-3__left{
        min-width: auto;
    }

    .container-3__left__mail > p{
        font-size: 1.5rem;
        word-break: break-all;
        white-space: normal;
    }

    .container-3__right img{
        max-width: 400px;
        min-width: auto;
    }

    .container-3__left__links{
        justify-content: center;
        margin-top: 10px;
        gap: 10px;
    }
}



/* SINGLE MEDIA QUERY */

@media (min-width:367px) and (max-width:500px) {
    .about-me__name{
        width: 150px;
        left:15px;
        top:350px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,4CAAmD;AACvD;;AAEA;IACI,6BAA6B;IAC7B,4CAAsD;AAC1D;;AAEA;IACI,sBAAsB;IACtB,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,cAAc;IACd,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,QAAQ;IACR,SAAS;AACb;;;;AAIA;IACI,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,gEAAgE;AACpE;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,sBAAsB;AAC1B;;;;AAIA,6CAA6C;;AAE7C;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,SAAS;AACb;;AAEA,6CAA6C;;;AAG7C,UAAU;;AAEV;IACI,aAAa;IACb,oBAAoB;IACpB,gBAAgB;IAChB,QAAQ;AACZ;;AAEA;IACI,yDAAyD;IACzD,uBAAuB;IACvB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,yDAA+D;IAC/D,uBAAuB;IACvB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,yDAA0D;IAC1D,uBAAuB;IACvB,YAAY;IACZ,WAAW;AACf;;;;AAIA,iBAAiB;;;AAGjB,sBAAsB;;AAEtB;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;IAChB,6BAA6B;IAC7B,aAAa;IACb,kCAAkC;IAClC,2BAA2B;IAC3B,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,wBAAwB;AAC5B;;;AAGA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA,6BAA6B;;;;AAI7B,oBAAoB;;AAEpB;IACI,yBAAyB;AAC7B;;AAEA;;IAEI,WAAW;AACf;;;AAGA;IACI,YAAY;IACZ,QAAQ;IACR,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;;;IAGI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,gBAAgB;IAChB,QAAQ;AACZ;;AAEA,2BAA2B;;;AAG3B;;IAEI;QACI,gBAAgB;QAChB,iBAAiB;QACjB,mBAAmB;QACnB,cAAc;QACd,WAAW;IACf;;IAEA;QACI,aAAa;QACb,kBAAkB;QAClB,gBAAgB;IACpB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,YAAY;QACZ,eAAe;QACf,QAAQ;QACR,UAAU;IACd;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,8BAA8B;QAC9B,+BAA+B;IACnC;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,2BAA2B;IAC/B;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,gBAAgB;QAChB,gBAAgB;QAChB,WAAW;IACf;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,eAAe;QACf,gBAAgB;IACpB;;IAEA;QACI,YAAY;QACZ,KAAK;IACT;;IAEA;QACI,iBAAiB;IACrB;;AAEJ;;AAEA;IACI;QACI,SAAS;IACb;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;IACA;QACI,sBAAsB;IAC1B;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,SAAS;QACT,SAAS;IACb;;IAEA;QACI,uBAAuB;IAC3B;;IAEA;QACI,0BAA0B;QAC1B,iCAAiC;IACrC;;IAEA;QACI,sBAAsB;QACtB,YAAY;QACZ,QAAQ;IACZ;;IAEA;;QAEI,UAAU;IACd;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,iBAAiB;QACjB,qBAAqB;QACrB,mBAAmB;IACvB;;IAEA;QACI,gBAAgB;QAChB,eAAe;IACnB;;IAEA;QACI,uBAAuB;QACvB,gBAAgB;QAChB,SAAS;IACb;AACJ;;;;AAIA,uBAAuB;;AAEvB;IACI;QACI,YAAY;QACZ,SAAS;QACT,SAAS;IACb;AACJ","sourcesContent":["@font-face {\n    font-family: Roboto;\n    src: url(./font/Roboto-VariableFont_wdth\\,wght.ttf);\n}\n\n@font-face {\n    font-family: Playfair-display;\n    src: url(./font/PlayfairDisplay-VariableFont_wght.ttf);\n}\n\n*{\n    box-sizing: border-box;\n    border:2px solid red;\n    margin:5px;\n}\n\nimg{\n    display: block;\n    width: 100%;\n    max-width: 400px;\n}\n\n.tablet-design-img{\n    visibility: hidden;\n    display: none;\n}\n\nhtml,body{\n    margin:0;\n    padding:0;\n}\n\n\n\n.container-1 img{\n    max-width: 300px;\n    width: 100%;\n}\n\n.container-1{\n    background: linear-gradient(169.9deg, #37afe1 540px, white 70px);\n}\n\n\n.main-container{\n    display: flex;\n    justify-content: center;\n    max-width: 1200px;\n    min-width: 900px;\n    margin: 0 auto;\n    padding: 2rem 0 5rem 0;\n}\n\n\n\n/* FIRST CONTAINER: TITLE/DESCRIPTION/ICONS */\n\n.about-me__descr{\n    padding:1rem;\n    max-width: 600px;\n    align-self: center;\n    box-shadow: 2px 2px 2px 2px black;\n}\n\n.about-me__descr h1{\n    margin: 2rem 0 2rem 0;\n    font-size: 40px;\n    font-family: 'Roboto';\n}\n\n.about-me__descr__para{\n    display: inline;\n    font-size: 23px;\n    font-family: 'Playfair-display';\n}\n\n.about-me__img{\n    position:relative;\n}\n\n.about-me__name{\n    font-size: 44px;\n    color:white;\n    position: absolute;\n    top:400px;\n}\n\n/* FIRST CONTAINER: TITLE/DESCRIPTION/ICONS */\n\n\n/* ICONS */\n\n.about-me__descr__icons{\n    display: flex;\n    justify-content: end;\n    margin-top: 3rem;\n    gap:1rem;\n}\n\n.icon1{\n    background-image: url('./img/github-142-svgrepo-com.svg');\n    background-size:contain;\n    height: 2rem;\n    width: 2rem;\n}\n\n.icon2{\n    background-image: url('./img/linkedin-rounded-svgrepo-com.svg');\n    background-size:contain;\n    height: 2rem;\n    width: 2rem;\n}\n\n.icon3{\n    background-image: url('./img/twitter-154-svgrepo-com.svg');\n    background-size:contain;\n    height: 2rem;\n    width: 2rem;\n}\n\n\n\n/* FINISH ICONS */\n\n\n/* MY WORK CONTAINER */\n\n.container-2__div{\n    padding:0 1rem 0 0;\n}\n\n.container-2__title{\n    display: flex;\n    justify-content: start;\n    padding: 1rem 0 1rem 0;\n    font-size: 2.2rem;\n}\n\n.my-work__grid{\n    box-shadow: 5px 5px 10px;\n}\n\n.my-work__child-div{\n    max-width: 970px;\n    padding:1rem 1rem 1rem 1.5rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap:30px;\n}\n\n.my-work__grid__internal{\n    display: flex;\n    justify-content:flex-end;\n    padding:10px 10px 0 10px;\n}\n\n\n.my-work__grid__internal + p{\n    padding:0 10px 10px 10px;\n}\n\n.my-work__grid__internal img{\n    padding-right: 5px;\n    max-width: 30px;\n}\n\n.my-work__grid__internal p{\n    flex-grow: 1;\n    justify-self: start;\n    font-size: 1.5rem;\n}\n\n/* END OF MY WORK CONTAINER */\n\n\n\n/* THIRD CONTAINER */\n\n.container-3{\n    background-color: #00879e;\n}\n\n.container-3 p,\n.container-3 h1{\n    margin:10px;\n}\n\n\n.container-3__main-child{\n    padding:3rem;\n    gap:80px;\n    font-size: 2rem;\n}\n\n.container-3__left img{\n    max-width: 30px;\n}\n\n.container-3__left > h1{\n    font-size: 3rem;\n}\n\n.container-3__right img{\n    max-width: 400px;\n    min-width: 350px;\n}\n\n.container-3__left__phone,\n.container-3__left__mail,\n.container-3__left__links{\n    display: flex;\n    gap:10px;\n}\n\n.container-3__left__links{\n    margin-top: 30px;\n    gap:20px;\n}\n\n/* END OF THIRD CONTAINER */\n\n\n@media (max-width: 1000px) and (min-width: 500px) {\n\n    .tablet-design-img{\n        max-width: 450px;\n        max-height: 450px;\n        visibility: visible;\n        display: block;\n        float: left;\n    }\n\n    .about-me__img img{\n        display: none;\n        visibility: hidden;\n        position: static;\n    }\n\n    .about-me__descr h1{\n        margin-top: 100px;\n    }\n\n    .about-me__descr__para{\n        font-size: 1.5rem;\n    }\n\n    .about-me__name{\n        width: 360px;\n        font-size: 52px;\n        top:20px;\n        left:250px;\n    }\n\n    .main-container{\n        min-width: 100px;\n    }\n\n    .my-work__child-div{\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n    }\n\n    img{\n        max-width: 450px;\n    }\n\n    .container-2__div.main-container{\n        justify-content: flex-start;\n    }\n\n    .container-2__title.main-container{\n        margin:0 0 0 40px;\n    }\n\n    .container-3__left{\n        max-width: 450px;\n        min-width: 300px;\n        color:white;\n    }\n\n    .container-3__right{\n        max-width: 450px;\n    }\n\n    .container-3__right img{\n        min-width: auto;\n        max-width: 450px;\n    }\n\n    .container-3__main-child{\n        padding:1rem;\n        gap:0;\n    }\n\n    .container-3__left__mail > p{\n        font-size: 1.5rem;\n    }\n   \n}\n\n@media (max-width:660px) and (min-width:500px) {\n    .about-me__name{\n        left:15px;\n    }\n}\n\n@media (max-width: 500px) {\n    .main-container{\n        min-width: auto;\n    }\n    .about-me{\n        flex-direction: column;\n    }\n\n    .about-me__img img{\n        margin:0 auto;\n    }\n    \n    .about-me__name{\n        left: 0px;\n        top:170px;\n    }\n\n    .about-me__descr__icons{\n        justify-content: center;\n    }\n\n    .my-work__child-div{\n        grid-template-columns: 1fr;\n        grid-template-rows: repeat(6,1fr);\n    }\n\n    .container-3__main-child{\n        flex-direction: column;\n        padding:1rem;\n        gap:50px;\n    }\n\n    .container-3 p,\n    .container-3 h1{\n        margin:5px;\n    }\n\n    .container-3__left{\n        min-width: auto;\n    }\n\n    .container-3__left__mail > p{\n        font-size: 1.5rem;\n        word-break: break-all;\n        white-space: normal;\n    }\n\n    .container-3__right img{\n        max-width: 400px;\n        min-width: auto;\n    }\n\n    .container-3__left__links{\n        justify-content: center;\n        margin-top: 10px;\n        gap: 10px;\n    }\n}\n\n\n\n/* SINGLE MEDIA QUERY */\n\n@media (min-width:367px) and (max-width:500px) {\n    .about-me__name{\n        width: 150px;\n        left:15px;\n        top:350px;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZKQUEyRDtBQUN2Ryw0Q0FBNEMscUtBQStEO0FBQzNHLDRDQUE0Qyw2SUFBbUQ7QUFDL0YsNENBQTRDLHlKQUF5RDtBQUNyRyw0Q0FBNEMsK0lBQW9EO0FBQ2hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFNBQVMsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLGNBQWMsWUFBWSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsUUFBUSxjQUFjLGNBQWMsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxlQUFlLGNBQWMsTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFP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V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvUm9ib3RvLVZhcmlhYmxlRm9udF93ZHRoLHdnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250L1BsYXlmYWlyRGlzcGxheS1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9naXRodWItMTQyLXN2Z3JlcG8tY29tLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nL2xpbmtlZGluLXJvdW5kZWQtc3ZncmVwby1jb20uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWcvdHdpdHRlci0xNTQtc3ZncmVwby1jb20uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFBsYXlmYWlyLWRpc3BsYXk7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbip7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcbiAgICBtYXJnaW46NXB4O1xufVxuXG5pbWd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLnRhYmxldC1kZXNpZ24taW1ne1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5odG1sLGJvZHl7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xufVxuXG5cblxuLmNvbnRhaW5lci0xIGltZ3tcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyLTF7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2OS45ZGVnLCAjMzdhZmUxIDU0MHB4LCB3aGl0ZSA3MHB4KTtcbn1cblxuXG4ubWFpbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtaW4td2lkdGg6IDkwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDJyZW0gMCA1cmVtIDA7XG59XG5cblxuXG4vKiBGSVJTVCBDT05UQUlORVI6IFRJVExFL0RFU0NSSVBUSU9OL0lDT05TICovXG5cbi5hYm91dC1tZV9fZGVzY3J7XG4gICAgcGFkZGluZzoxcmVtO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCBibGFjaztcbn1cblxuLmFib3V0LW1lX19kZXNjciBoMXtcbiAgICBtYXJnaW46IDJyZW0gMCAycmVtIDA7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbn1cblxuLmFib3V0LW1lX19kZXNjcl9fcGFyYXtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXItZGlzcGxheSc7XG59XG5cbi5hYm91dC1tZV9faW1ne1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4uYWJvdXQtbWVfX25hbWV7XG4gICAgZm9udC1zaXplOiA0NHB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6NDAwcHg7XG59XG5cbi8qIEZJUlNUIENPTlRBSU5FUjogVElUTEUvREVTQ1JJUFRJT04vSUNPTlMgKi9cblxuXG4vKiBJQ09OUyAqL1xuXG4uYWJvdXQtbWVfX2Rlc2NyX19pY29uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgZ2FwOjFyZW07XG59XG5cbi5pY29uMXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOmNvbnRhaW47XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xufVxuXG4uaWNvbjJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbn1cblxuLmljb24ze1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG59XG5cblxuXG4vKiBGSU5JU0ggSUNPTlMgKi9cblxuXG4vKiBNWSBXT1JLIENPTlRBSU5FUiAqL1xuXG4uY29udGFpbmVyLTJfX2RpdntcbiAgICBwYWRkaW5nOjAgMXJlbSAwIDA7XG59XG5cbi5jb250YWluZXItMl9fdGl0bGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDA7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG59XG5cbi5teS13b3JrX19ncmlke1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweDtcbn1cblxuLm15LXdvcmtfX2NoaWxkLWRpdntcbiAgICBtYXgtd2lkdGg6IDk3MHB4O1xuICAgIHBhZGRpbmc6MXJlbSAxcmVtIDFyZW0gMS41cmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAgZ2FwOjMwcHg7XG59XG5cbi5teS13b3JrX19ncmlkX19pbnRlcm5hbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcbiAgICBwYWRkaW5nOjEwcHggMTBweCAwIDEwcHg7XG59XG5cblxuLm15LXdvcmtfX2dyaWRfX2ludGVybmFsICsgcHtcbiAgICBwYWRkaW5nOjAgMTBweCAxMHB4IDEwcHg7XG59XG5cbi5teS13b3JrX19ncmlkX19pbnRlcm5hbCBpbWd7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIG1heC13aWR0aDogMzBweDtcbn1cblxuLm15LXdvcmtfX2dyaWRfX2ludGVybmFsIHB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi8qIEVORCBPRiBNWSBXT1JLIENPTlRBSU5FUiAqL1xuXG5cblxuLyogVEhJUkQgQ09OVEFJTkVSICovXG5cbi5jb250YWluZXItM3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NzllO1xufVxuXG4uY29udGFpbmVyLTMgcCxcbi5jb250YWluZXItMyBoMXtcbiAgICBtYXJnaW46MTBweDtcbn1cblxuXG4uY29udGFpbmVyLTNfX21haW4tY2hpbGR7XG4gICAgcGFkZGluZzozcmVtO1xuICAgIGdhcDo4MHB4O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmNvbnRhaW5lci0zX19sZWZ0IGltZ3tcbiAgICBtYXgtd2lkdGg6IDMwcHg7XG59XG5cbi5jb250YWluZXItM19fbGVmdCA+IGgxe1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLmNvbnRhaW5lci0zX19yaWdodCBpbWd7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtaW4td2lkdGg6IDM1MHB4O1xufVxuXG4uY29udGFpbmVyLTNfX2xlZnRfX3Bob25lLFxuLmNvbnRhaW5lci0zX19sZWZ0X19tYWlsLFxuLmNvbnRhaW5lci0zX19sZWZ0X19saW5rc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDoxMHB4O1xufVxuXG4uY29udGFpbmVyLTNfX2xlZnRfX2xpbmtze1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZ2FwOjIwcHg7XG59XG5cbi8qIEVORCBPRiBUSElSRCBDT05UQUlORVIgKi9cblxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcblxuICAgIC50YWJsZXQtZGVzaWduLWltZ3tcbiAgICAgICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNDUwcHg7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG5cbiAgICAuYWJvdXQtbWVfX2ltZyBpbWd7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB9XG5cbiAgICAuYWJvdXQtbWVfX2Rlc2NyIGgxe1xuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICB9XG5cbiAgICAuYWJvdXQtbWVfX2Rlc2NyX19wYXJhe1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG5cbiAgICAuYWJvdXQtbWVfX25hbWV7XG4gICAgICAgIHdpZHRoOiAzNjBweDtcbiAgICAgICAgZm9udC1zaXplOiA1MnB4O1xuICAgICAgICB0b3A6MjBweDtcbiAgICAgICAgbGVmdDoyNTBweDtcbiAgICB9XG5cbiAgICAubWFpbi1jb250YWluZXJ7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgfVxuXG4gICAgLm15LXdvcmtfX2NoaWxkLWRpdntcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xuICAgIH1cblxuICAgIGltZ3tcbiAgICAgICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyLTJfX2Rpdi5tYWluLWNvbnRhaW5lcntcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgIC5jb250YWluZXItMl9fdGl0bGUubWFpbi1jb250YWluZXJ7XG4gICAgICAgIG1hcmdpbjowIDAgMCA0MHB4O1xuICAgIH1cblxuICAgIC5jb250YWluZXItM19fbGVmdHtcbiAgICAgICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci0zX19yaWdodHtcbiAgICAgICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyLTNfX3JpZ2h0IGltZ3tcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgIH1cblxuICAgIC5jb250YWluZXItM19fbWFpbi1jaGlsZHtcbiAgICAgICAgcGFkZGluZzoxcmVtO1xuICAgICAgICBnYXA6MDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyLTNfX2xlZnRfX21haWwgPiBwe1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gICBcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6NjYwcHgpIGFuZCAobWluLXdpZHRoOjUwMHB4KSB7XG4gICAgLmFib3V0LW1lX19uYW1le1xuICAgICAgICBsZWZ0OjE1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAubWFpbi1jb250YWluZXJ7XG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICB9XG4gICAgLmFib3V0LW1le1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5hYm91dC1tZV9faW1nIGltZ3tcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICB9XG4gICAgXG4gICAgLmFib3V0LW1lX19uYW1le1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHRvcDoxNzBweDtcbiAgICB9XG5cbiAgICAuYWJvdXQtbWVfX2Rlc2NyX19pY29uc3tcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLm15LXdvcmtfX2NoaWxkLWRpdntcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsMWZyKTtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyLTNfX21haW4tY2hpbGR7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmc6MXJlbTtcbiAgICAgICAgZ2FwOjUwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci0zIHAsXG4gICAgLmNvbnRhaW5lci0zIGgxe1xuICAgICAgICBtYXJnaW46NXB4O1xuICAgIH1cblxuICAgIC5jb250YWluZXItM19fbGVmdHtcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIH1cblxuICAgIC5jb250YWluZXItM19fbGVmdF9fbWFpbCA+IHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci0zX19yaWdodCBpbWd7XG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICAuY29udGFpbmVyLTNfX2xlZnRfX2xpbmtze1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbn1cblxuXG5cbi8qIFNJTkdMRSBNRURJQSBRVUVSWSAqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDozNjdweCkgYW5kIChtYXgtd2lkdGg6NTAwcHgpIHtcbiAgICAuYWJvdXQtbWVfX25hbWV7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgbGVmdDoxNXB4O1xuICAgICAgICB0b3A6MzUwcHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBbUQ7QUFDdkQ7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsNENBQXNEO0FBQzFEOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7QUFDYjs7OztBQUlBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdFQUFnRTtBQUNwRTs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHNCQUFzQjtBQUMxQjs7OztBQUlBLDZDQUE2Qzs7QUFFN0M7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFD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RUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsU0FBUztJQUNiO0FBQ0o7Ozs7QUFJQSx1QkFBdUI7O0FBRXZCO0lBQ0k7UUFDSSxZQUFZO1FBQ1osU0FBUztRQUNULFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgICBzcmM6IHVybCguL2ZvbnQvUm9ib3RvLVZhcmlhYmxlRm9udF93ZHRoXFxcXCx3Z2h0LnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUGxheWZhaXItZGlzcGxheTtcXG4gICAgc3JjOiB1cmwoLi9mb250L1BsYXlmYWlyRGlzcGxheS1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbn1cXG5cXG4qe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcXG4gICAgbWFyZ2luOjVweDtcXG59XFxuXFxuaW1ne1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxufVxcblxcbi50YWJsZXQtZGVzaWduLWltZ3tcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5odG1sLGJvZHl7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxufVxcblxcblxcblxcbi5jb250YWluZXItMSBpbWd7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyLTF7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjkuOWRlZywgIzM3YWZlMSA1NDBweCwgd2hpdGUgNzBweCk7XFxufVxcblxcblxcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbiAgICBtaW4td2lkdGg6IDkwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMnJlbSAwIDVyZW0gMDtcXG59XFxuXFxuXFxuXFxuLyogRklSU1QgQ09OVEFJTkVSOiBUSVRMRS9ERVNDUklQVElPTi9JQ09OUyAqL1xcblxcbi5hYm91dC1tZV9fZGVzY3J7XFxuICAgIHBhZGRpbmc6MXJlbTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggYmxhY2s7XFxufVxcblxcbi5hYm91dC1tZV9fZGVzY3IgaDF7XFxuICAgIG1hcmdpbjogMnJlbSAwIDJyZW0gMDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxufVxcblxcbi5hYm91dC1tZV9fZGVzY3JfX3BhcmF7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyLWRpc3BsYXknO1xcbn1cXG5cXG4uYWJvdXQtbWVfX2ltZ3tcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5hYm91dC1tZV9fbmFtZXtcXG4gICAgZm9udC1zaXplOiA0NHB4O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6NDAwcHg7XFxufVxcblxcbi8qIEZJUlNUIENPTlRBSU5FUjogVElUTEUvREVTQ1JJUFRJT04vSUNPTlMgKi9cXG5cXG5cXG4vKiBJQ09OUyAqL1xcblxcbi5hYm91dC1tZV9fZGVzY3JfX2ljb25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgZ2FwOjFyZW07XFxufVxcblxcbi5pY29uMXtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9naXRodWItMTQyLXN2Z3JlcG8tY29tLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLmljb24ye1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2xpbmtlZGluLXJvdW5kZWQtc3ZncmVwby1jb20uc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4uaWNvbjN7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvdHdpdHRlci0xNTQtc3ZncmVwby1jb20uc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG5cXG5cXG4vKiBGSU5JU0ggSUNPTlMgKi9cXG5cXG5cXG4vKiBNWSBXT1JLIENPTlRBSU5FUiAqL1xcblxcbi5jb250YWluZXItMl9fZGl2e1xcbiAgICBwYWRkaW5nOjAgMXJlbSAwIDA7XFxufVxcblxcbi5jb250YWluZXItMl9fdGl0bGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDA7XFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbn1cXG5cXG4ubXktd29ya19fZ3JpZHtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4O1xcbn1cXG5cXG4ubXktd29ya19fY2hpbGQtZGl2e1xcbiAgICBtYXgtd2lkdGg6IDk3MHB4O1xcbiAgICBwYWRkaW5nOjFyZW0gMXJlbSAxcmVtIDEuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6MzBweDtcXG59XFxuXFxuLm15LXdvcmtfX2dyaWRfX2ludGVybmFse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XFxuICAgIHBhZGRpbmc6MTBweCAxMHB4IDAgMTBweDtcXG59XFxuXFxuXFxuLm15LXdvcmtfX2dyaWRfX2ludGVybmFsICsgcHtcXG4gICAgcGFkZGluZzowIDEwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4ubXktd29ya19fZ3JpZF9faW50ZXJuYWwgaW1ne1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICAgIG1heC13aWR0aDogMzBweDtcXG59XFxuXFxuLm15LXdvcmtfX2dyaWRfX2ludGVybmFsIHB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi8qIEVORCBPRiBNWSBXT1JLIENPTlRBSU5FUiAqL1xcblxcblxcblxcbi8qIFRISVJEIENPTlRBSU5FUiAqL1xcblxcbi5jb250YWluZXItM3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODc5ZTtcXG59XFxuXFxuLmNvbnRhaW5lci0zIHAsXFxuLmNvbnRhaW5lci0zIGgxe1xcbiAgICBtYXJnaW46MTBweDtcXG59XFxuXFxuXFxuLmNvbnRhaW5lci0zX19tYWluLWNoaWxke1xcbiAgICBwYWRkaW5nOjNyZW07XFxuICAgIGdhcDo4MHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jb250YWluZXItM19fbGVmdCBpbWd7XFxuICAgIG1heC13aWR0aDogMzBweDtcXG59XFxuXFxuLmNvbnRhaW5lci0zX19sZWZ0ID4gaDF7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmNvbnRhaW5lci0zX19yaWdodCBpbWd7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG1pbi13aWR0aDogMzUwcHg7XFxufVxcblxcbi5jb250YWluZXItM19fbGVmdF9fcGhvbmUsXFxuLmNvbnRhaW5lci0zX19sZWZ0X19tYWlsLFxcbi5jb250YWluZXItM19fbGVmdF9fbGlua3N7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDoxMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyLTNfX2xlZnRfX2xpbmtze1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBnYXA6MjBweDtcXG59XFxuXFxuLyogRU5EIE9GIFRISVJEIENPTlRBSU5FUiAqL1xcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xcblxcbiAgICAudGFibGV0LWRlc2lnbi1pbWd7XFxuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgICAgICAgbWF4LWhlaWdodDogNDUwcHg7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBmbG9hdDogbGVmdDtcXG4gICAgfVxcblxcbiAgICAuYWJvdXQtbWVfX2ltZyBpbWd7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgfVxcblxcbiAgICAuYWJvdXQtbWVfX2Rlc2NyIGgxe1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIH1cXG5cXG4gICAgLmFib3V0LW1lX19kZXNjcl9fcGFyYXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5hYm91dC1tZV9fbmFtZXtcXG4gICAgICAgIHdpZHRoOiAzNjBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNTJweDtcXG4gICAgICAgIHRvcDoyMHB4O1xcbiAgICAgICAgbGVmdDoyNTBweDtcXG4gICAgfVxcblxcbiAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5teS13b3JrX19jaGlsZC1kaXZ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICB9XFxuXFxuICAgIGltZ3tcXG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lci0yX19kaXYubWFpbi1jb250YWluZXJ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lci0yX190aXRsZS5tYWluLWNvbnRhaW5lcntcXG4gICAgICAgIG1hcmdpbjowIDAgMCA0MHB4O1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXItM19fbGVmdHtcXG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XFxuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICAgICAgY29sb3I6d2hpdGU7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lci0zX19yaWdodHtcXG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lci0zX19yaWdodCBpbWd7XFxuICAgICAgICBtaW4td2lkdGg6IGF1dG87XFxuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXItM19fbWFpbi1jaGlsZHtcXG4gICAgICAgIHBhZGRpbmc6MXJlbTtcXG4gICAgICAgIGdhcDowO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXItM19fbGVmdF9fbWFpbCA+IHB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcbiAgIFxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo2NjBweCkgYW5kIChtaW4td2lkdGg6NTAwcHgpIHtcXG4gICAgLmFib3V0LW1lX19uYW1le1xcbiAgICAgICAgbGVmdDoxNXB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICBtaW4td2lkdGg6IGF1dG87XFxuICAgIH1cXG4gICAgLmFib3V0LW1le1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuYWJvdXQtbWVfX2ltZyBpbWd7XFxuICAgICAgICBtYXJnaW46MCBhdXRvO1xcbiAgICB9XFxuICAgIFxcbiAgICAuYWJvdXQtbWVfX25hbWV7XFxuICAgICAgICBsZWZ0OiAwcHg7XFxuICAgICAgICB0b3A6MTcwcHg7XFxuICAgIH1cXG5cXG4gICAgLmFib3V0LW1lX19kZXNjcl9faWNvbnN7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAubXktd29ya19fY2hpbGQtZGl2e1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LDFmcik7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lci0zX19tYWluLWNoaWxke1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHBhZGRpbmc6MXJlbTtcXG4gICAgICAgIGdhcDo1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXItMyBwLFxcbiAgICAuY29udGFpbmVyLTMgaDF7XFxuICAgICAgICBtYXJnaW46NXB4O1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXItM19fbGVmdHtcXG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyLTNfX2xlZnRfX21haWwgPiBwe1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXItM19fcmlnaHQgaW1ne1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyLTNfX2xlZnRfX2xpbmtze1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxufVxcblxcblxcblxcbi8qIFNJTkdMRSBNRURJQSBRVUVSWSAqL1xcblxcbkBtZWRpYSAobWluLXdpZHRoOjM2N3B4KSBhbmQgKG1heC13aWR0aDo1MDBweCkge1xcbiAgICAuYWJvdXQtbWVfX25hbWV7XFxuICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgICBsZWZ0OjE1cHg7XFxuICAgICAgICB0b3A6MzUwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=