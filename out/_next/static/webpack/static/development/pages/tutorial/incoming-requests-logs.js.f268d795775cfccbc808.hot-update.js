webpackHotUpdate("static\\development\\pages\\tutorial\\incoming-requests-logs.js",{

/***/ "./pages/tutorial/incoming-requests-logs.js":
/*!**************************************************!*\
  !*** ./pages/tutorial/incoming-requests-logs.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tutorial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/tutorial */ "./components/tutorial.js");
/* harmony import */ var _partials_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/image */ "./pages/tutorial/partials/image.js");
var _jsxFileName = "D:\\dev\\mockoon.com\\pages\\tutorial\\incoming-requests-logs.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var meta = {
  title: 'Access incoming requests and outgoing responses logs',
  description: 'Check how to access Mockoon\'s entering requests and outgoing responses logs for easier debugging'
};

function IncomingRequestsLogs() {
  return __jsx(_components_tutorial__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meta: meta,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "For easier debugging, Mockoon log all entering requests together with their respective outgoing responses for each of your environment. To access the logs it's very simple:", __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "After selecting the environment you are interested in, open the ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "logs"), " by clicking on the clock icon in the upper right corner:"))), __jsx(_partials_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/images/tutorials/open-request-logs.gif",
    alt: "Open requests logs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "You will see in the list all the intercepted requests and how Mockoon answered them, on the currently selected environment. Please note that all requests are intercepted even favicon requests made by browsers! You can also easily see if a request has been caught by Mockoon or passed to another URL if proxy mode is activated for the environment."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Complete headers list, route (URL) params, query params, and body in raw format are all included in the request's or response's details.")));
}

/* harmony default export */ __webpack_exports__["default"] = (IncomingRequestsLogs);

/***/ })

})
//# sourceMappingURL=incoming-requests-logs.js.f268d795775cfccbc808.hot-update.js.map