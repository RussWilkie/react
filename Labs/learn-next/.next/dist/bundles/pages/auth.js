module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(6);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/User.js



var User_user = function user(props) {
    return external__react__default.a.createElement(
        'div',
        {
            className: 'jsx-3315532297'
        },
        external__react__default.a.createElement(
            'h1',
            {
                className: 'jsx-3315532297'
            },
            props.name
        ),
        external__react__default.a.createElement(
            'p',
            {
                className: 'jsx-3315532297'
            },
            'Age: ',
            props.age
        ),
        external__react__default.a.createElement(style__default.a, {
            styleId: '3315532297',
            css: ['div.jsx-3315532297{border:1px solid #eee;box-shadow:0 2px 3px #ccc;padding:20px;text-align:center;}']
        })
    );
};

/* harmony default export */ var User = (User_user);
// CONCATENATED MODULE: ./pages/auth/index.js




var auth_authIndexPage = function authIndexPage(props) {
    return external__react__default.a.createElement(
        'div',
        null,
        external__react__default.a.createElement(
            'h1',
            null,
            'The Auth page - ',
            props.appName
        ),
        external__react__default.a.createElement(User, { name: 'Manidoo', age: 24 })
    );
};

auth_authIndexPage.getInitialProps = function (context) {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({
                appName: 'Super App (Auth)'
            });
        }, 1000);
    });
    return promise;
};

/* harmony default export */ var auth = __webpack_exports__["default"] = (auth_authIndexPage);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })
/******/ ]);