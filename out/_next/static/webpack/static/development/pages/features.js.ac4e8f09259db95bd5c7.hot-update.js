webpackHotUpdate("static\\development\\pages\\features.js",{

/***/ "./pages/features.js":
/*!***************************!*\
  !*** ./pages/features.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/download */ "./components/download.js");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hero */ "./components/hero.js");
/* harmony import */ var _components_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meta */ "./components/meta.js");
/* harmony import */ var _components_newsletter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/newsletter */ "./components/newsletter.js");
/* harmony import */ var _layout_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/layout */ "./layout/layout.js");
var _jsxFileName = "D:\\dev\\mockoon.com\\pages\\features.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var featuresList = [{
  title: "Unlimited mocking",
  description: "Mock an unlimited number of environments with unlimited number of routes and run them in parallel."
}, {
  title: "Import / export",
  description: "Environment import / export either from or to a file or the clipboard. <a href=\"/tutorial/import-export-environments-routes\">Learn more</a>"
}, {
  title: "Route regex",
  description: "Route regex supported (/.*, /[a-z]{3}, ...), based on ExpressJS syntax."
}, {
  title: "Multiple responses per route",
  description: "Serve multiple <a href=\"/tutorial/multiple-route-responses\">rules-triggered responses</a> for each route with any headers body, or HTTP status codes."
}, {
  title: "CORS",
  description: "Automatically send CORS headers (<code>Access-Control-Allow-Origin</code>, etc.) for OPTIONS requests. <a href=\"/tutorial/automatic-handling-preflight-requests\">Learn more</a>"
}, {
  title: "HTTPS",
  description: "Serve your mock API over TLS with self-signed certificate. <a href=\"/tutorial/serve-mock-api-tls/\">Learn more</a>"
}, {
  title: "Response headers",
  description: "Add any response headers to your routes and environments. With auto-completion. <a href=\"/tutorial/define-response-headers\">Learn more</a>"
}, {
  title: "Latency",
  description: "Add latency at environment or route level or even both."
}, {
  title: "Requests and responses logs",
  description: "All incoming requests and outgoing responses are logged for easier debugging. <a href=\"/tutorial/incoming-requests-logs\">Learn more</a>"
}, {
  title: "Proxy mode",
  description: "Redirect all non-defined routes to the specified host with Mockoon's proxy mode."
}, {
  title: "File serving",
  description: "File serving with automatic mime type detection and templating support."
}, {
  title: "Rich text editor",
  description: "Rich text editor for body content supporting multiple languages (JSON, HTML, etc)."
}, {
  title: "Templating",
  description: "Templating supported in body, file content and header, with many helpers: url params, query params, JSON body lookup, etc. <a href=\"/tutorial/dynamic-response-with-templating\">Learn more</a>"
}, {
  title: "Auto-save",
  description: "Real-time auto save as you type. Never worry again about saving!"
}, {
  title: "Offline",
  description: "No account, no sign-up, no cloud deployment required."
}];

function Features() {
  var numberOfRows = Math.ceil(featuresList.length / 3);
  var featuresContent = [];

  for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    featuresContent.push(__jsx("div", {
      key: 'featureRow' + rowIndex,
      className: "tile is-horizontal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, featuresList.slice(rowIndex * 3, rowIndex * 3 + 3).map(function (feature, featureIndex) {
      return __jsx("article", {
        key: 'feature' + featureIndex,
        className: "tile is-child notification",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("p", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, feature.title), __jsx("p", {
        className: "subtitle",
        dangerouslySetInnerHTML: {
          __html: feature.description
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }));
    })));
  }

  return __jsx(_layout_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_components_meta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Complete list of features",
    description: "List of all features offered by Mockoon, the REST API mocking tool compatible with Windows, Mac and Linux.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(_components_hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Complete list of features",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(_components_download__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: "column is-10 is-offset-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, featuresContent))), __jsx(_components_newsletter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Features);

/***/ })

})
//# sourceMappingURL=features.js.ac4e8f09259db95bd5c7.hot-update.js.map