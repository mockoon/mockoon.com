webpackHotUpdate("static\\development\\pages\\tutorial\\import-export-environments-routes.js",{

/***/ "./pages/tutorial/import-export-environments-routes.js":
/*!*************************************************************!*\
  !*** ./pages/tutorial/import-export-environments-routes.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tutorial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/tutorial */ "./components/tutorial.js");
/* harmony import */ var _partials_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/image */ "./pages/tutorial/partials/image.js");
var _jsxFileName = "C:\\dev\\mockoon.com\\pages\\tutorial\\import-export-environments-routes.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var meta = {
  title: 'Import and export environments and routes',
  description: 'Learn how to easily import and export your environments and routes in JSON format with Mockoon'
};

function ImportExportEnvironmentsRoutes() {
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
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Mockoon supports two types of import/export. Full import/export to JSON files or a single environment or route directly copied to the clipboard."), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Export all environments to a JSON file"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "To export all environments to a file, open the ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Tools"), " menu and select ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Export all environments to a file (JSON)"), ":")), __jsx(_partials_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/images/tutorials/export-all-environments.gif",
    alt: "Export all environments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Since v1.7.0, exported data is independent of Mockoon's version. They can be imported in a more recent version and data will be automatically migrated. Once migrated, environments cannot be imported anymore in an older version. For older versions, exports are locked to the version on which they are created and cannot be imported on a different version.")), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Single environment or route export to clipboard"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "To export a specific environment or route's JSON data to the clipboard, right-click on the environment or route and select ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Copy to clipboard (JSON)"), ":")), __jsx(_partials_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/images/tutorials/export-environment-clipboard.gif",
    alt: "Copy environment JSON data to the clipboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Starting with v1.7.0, the resulting JSON is fully compatible with the file-based import. It can either be imported through the \"Import from clipboard\" feature, or copied in a JSON file and imported through the \"Import from a file\" feature.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), "One limitation: exported routes cannot be imported on a different version of Mockoon as data migration are not played for routes.")), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Import from a JSON file"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "To import data from a JSON file, open the ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Tools"), " menu and select ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Import from a file (JSON)"), ":")), __jsx(_partials_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/images/tutorials/import-all-environments.gif",
    alt: "Import from a file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Any type of export can be imported from a JSON file: environments or single environment and route copied to the clipboard and saved to a JSON file. Environments imported from a file will be added at the end of the environments list. No data will be overwritten even if imported environments share the same names. Imported routes will be added to the active environment.")), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Import from clipboard"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "To import data from the clipboard, open the ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Tools"), " menu and select ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Import from clipboard"), ":")), __jsx(_partials_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/images/tutorials/import-environment-clipboard.gif",
    alt: "Import environment JSON data from the clipboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Again, any type of exported data can be imported through this method.")), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Note for older version"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Prior to v1.7.0, data exported through the clipboard method was not compatible with import from a file and vice versa. Also, exported data from one version couldn't be imported to another version of Mockoon. These limitiations have been removed in v1.7.0")));
}

/* harmony default export */ __webpack_exports__["default"] = (ImportExportEnvironmentsRoutes);

/***/ })

})
//# sourceMappingURL=import-export-environments-routes.js.37d6f6f6f953bc07f433.hot-update.js.map