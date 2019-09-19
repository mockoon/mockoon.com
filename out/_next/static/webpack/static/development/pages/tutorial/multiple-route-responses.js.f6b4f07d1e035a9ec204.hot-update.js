webpackHotUpdate("static\\development\\pages\\tutorial\\multiple-route-responses.js",{

/***/ "./pages/tutorial/multiple-route-responses.js":
/*!****************************************************!*\
  !*** ./pages/tutorial/multiple-route-responses.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tutorial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/tutorial */ "./components/tutorial.js");
/* harmony import */ var _partials_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/image */ "./pages/tutorial/partials/image.js");
var _jsxFileName = "D:\\dev\\mockoon.com\\pages\\tutorial\\multiple-route-responses.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var meta = {
  title: 'Define multiple responses for each route',
  description: 'Multiple responses can be defined for each route with different body, headers and status. They are triggered with rules.'
};

function MultipleRouteResponses() {
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
  }, "Since ", __jsx("a", {
    href: "https://github.com/mockoon/mockoon/releases/tag/v1.4.0",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "v1.5.0"), ", you can define multiple responses for each route and trigger them using a set of rules."), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Default route response"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "There is always at least one response when you create a new route. You can modify it and add more responses. But you can never delete the last route response.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), "Without rules or when a request does not match the one you defined, the default response will always be the first one in the list. You can easily change the default response by reordering the responses menu with a drag and drop:")), __jsx(_partials_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/images/tutorials/reorder-responses.gif",
    alt: "Reorder route responses",
    size: "medium",
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
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Defining rules")), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "You can define an unlimited number of rules for each route. At each request, Mockoon will read each route rules and will return the response which contains the first matching rule. There is no logic between the rules. You can read them like this: ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "[rule OR rule] OR [rule OR rule]"), " the brackets symbolizing each route."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Rules have three parts:"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "a ", __jsx("a", {
    href: "#target",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "target")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "a ", __jsx("a", {
    href: "#property",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "property name or path")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "a ", __jsx("a", {
    href: "#value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "value")))), __jsx(_partials_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/images/tutorials/add-route-response-rules.gif",
    alt: "Add route response rules",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h4", {
    id: "target",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("li", {
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Target"))), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "In the dropdown menu you can choose between:"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "a property value in a JSON and form data ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "body"), " (if request ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Content-Type"), " is either ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "application/json"), " or ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "application/x-www-form-urlencoded"), ")."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "the value of a ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "header"), "."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "the value of a ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "route param"), "."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "the value of a ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "query string field"), ".")), __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h4", {
    id: "property",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("li", {
    value: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Property name or path"))), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Depending on the ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "target"), ", the way to access properties may be different:"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "body"), ": access a property value using a path (based on NPM package ", __jsx("a", {
    href: "https://www.npmjs.com/package/object-path",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "object-path"), ") like ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "users.0.name"), " for JSON content or a single field for form data."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "headers"), ": a header name like ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Accept"), " or ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Content-Type"), "."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "route param"), ": a route param name without the colon (\":\"), ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, ":userId"), " becoming ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "userId"), "."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "query string"), ": either provide a property name like ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "filter"), " or a path if the query string field is an object ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "filter.primary"), ".")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "For body and query string, if the property is an array, Mockoon will automatically check in the array if at least one item matches the value."), __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("h4", {
    id: "value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("li", {
    value: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Value"))), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "You can either set a simple text value like \"value expected\" or any kind of regex. To use a regex write it without the leading and trailing slashes and tick the checkbox on the right.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), "Examples:", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "primary|secondary"), ", ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "^user1-9"), ", ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "UTF-.*"))));
}

/* harmony default export */ __webpack_exports__["default"] = (MultipleRouteResponses);

/***/ })

})
//# sourceMappingURL=multiple-route-responses.js.f6b4f07d1e035a9ec204.hot-update.js.map