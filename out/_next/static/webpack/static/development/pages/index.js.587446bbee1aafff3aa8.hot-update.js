webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_donate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/donate */ "./components/donate.js");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/hero */ "./components/hero.js");
/* harmony import */ var _components_meta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/meta */ "./components/meta.js");
/* harmony import */ var _components_newsletter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/newsletter */ "./components/newsletter.js");
/* harmony import */ var _layout_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layout/layout */ "./layout/layout.js");





var _jsxFileName = "D:\\dev\\mockoon.com\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







var version = __webpack_require__(/*! ../package.json */ "./package.json").version;

var meta = {
  title: 'Mock API in seconds'
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // add Twitter script
      var script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_layout_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx(_components_meta__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: meta.title,
        description: "Mockoon is a free and open source desktop application allowing to quickly mock servers and API.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), __jsx(_components_hero__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: meta.title,
        subtitle: "Mockoon is the easiest and quickest way to run mock APIs locally.<br>No remote deployment, no account required, open source.",
        withDownloadCTA: "true",
        mainPicture: "/static/images/main.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), __jsx("section", {
        className: "section",
        id: "download",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("div", {
        className: "columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("div", {
        className: "column has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("h1", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Download Mockoon ", __jsx("a", {
        href: 'https://github.com/mockoon/mockoon/releases/tag/v' + version,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("span", {
        className: "is-size-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "v", version))))), __jsx("div", {
        className: "columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("div", {
        className: "column is-4 has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("p", {
        className: "is-size-1 is-brand mb20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("i", {
        className: "icon-windows",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), __jsx("a", {
        className: "button is-primary is-outlined",
        href: "https://github.com/mockoon/mockoon/releases/download/v".concat(version, "/mockoon.setup.").concat(version, ".exe"),
        onClick: function onClick() {
          return ga('send', 'event', 'application', 'download', 'windows');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("span", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("i", {
        className: "icon-download",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "exe installer")), __jsx("p", {
        className: "content is-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "or ", __jsx("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "choco install mockoon"))), __jsx("div", {
        className: "column is-4 has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("p", {
        className: "is-size-1 is-brand mb20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("i", {
        className: "icon-linux",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), __jsx("div", {
        "class": "buttons has-addons is-centered is-marginless",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("a", {
        className: "button is-primary is-outlined",
        href: "https://github.com/mockoon/mockoon/releases/download/v".concat(version, "/mockoon-").concat(version, "-x86_64.AppImage"),
        onClick: function onClick() {
          return ga('send', 'event', 'application', 'download', 'linux');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("span", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("i", {
        className: "icon-download",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "deb")), __jsx("a", {
        className: "button is-primary is-outlined",
        href: "https://github.com/mockoon/mockoon/releases/download/v".concat(version, "/mockoon-").concat(version, "-x86_64.AppImage"),
        onClick: function onClick() {
          return ga('send', 'event', 'application', 'download', 'linux');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("span", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("i", {
        className: "icon-download",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "rpm")), __jsx("a", {
        className: "button is-primary is-outlined",
        href: "https://github.com/mockoon/mockoon/releases/download/v".concat(version, "/mockoon-").concat(version, "-x86_64.AppImage"),
        onClick: function onClick() {
          return ga('send', 'event', 'application', 'download', 'linux');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("span", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("i", {
        className: "icon-download",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "AppImage"))), __jsx("p", {
        className: "content is-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "or ", __jsx("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "sudo snap install mockoon"))), __jsx("div", {
        className: "column has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("p", {
        className: "is-size-1 is-brand mb20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("i", {
        className: "icon-apple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), __jsx("a", {
        className: "button is-primary is-outlined",
        href: "https://github.com/mockoon/mockoon/releases/download/v".concat(version, "/mockoon.setup.").concat(version, ".dmg"),
        onClick: function onClick() {
          return ga('send', 'event', 'application', 'download', 'osx');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("span", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("i", {
        className: "icon-download",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "OS X")), __jsx("p", {
        className: "content is-small is-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "dmg file", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), "or ", __jsx("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "brew cask install mockoon")))), __jsx("div", {
        className: "columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("div", {
        className: "column has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Mockoon is released under the MIT license. Feel free to ", __jsx("a", {
        href: "https://github.com/mockoon/mockoon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "contribute"), "."))))), __jsx("section", {
        className: "section",
        id: "features",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("div", {
        className: "columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("div", {
        className: "column has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("h1", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Some great features!"))), __jsx("div", {
        className: "columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx("div", {
        className: "column has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("figure", {
        className: "image rounded is-75 cb mb20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("img", {
        src: "/static/images/feature1.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })), __jsx("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("p", {
        className: "title is-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Unlimited fast mocking"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Create an unlimited number of mock local servers and routes, and run them in parallel."))), __jsx("div", {
        className: "column has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("figure", {
        className: "image rounded is-75 cb mb20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("img", {
        src: "/static/images/feature2.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      })), __jsx("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("p", {
        className: "title is-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Complete control"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Customize routes: HTTP methods, regex paths, HTTP status, file serving, custom headers..."))), __jsx("div", {
        className: "column has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx("figure", {
        className: "image rounded is-75 cb mb20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx("img", {
        src: "/static/images/feature3.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      })), __jsx("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, __jsx("p", {
        className: "title is-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "... and more"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Import / export, JSON templating, auto save, proxy mode, HTTPS, latency simulation, CORS support...")))), __jsx("div", {
        className: "columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("div", {
        className: "column has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx("a", {
        href: "features",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Complete list of features"))))), __jsx(_components_donate__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), __jsx("section", {
        className: "section",
        id: "testimonials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx("div", {
        className: "columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx("div", {
        className: "column has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx("h1", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "What developers say"))), __jsx("div", {
        className: "columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx("div", {
        className: "column is-one-quarter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx("blockquote", {
        className: "twitter-tweet",
        "data-cards": "hidden",
        "data-dnt": "true",
        "data-conversation": "none",
        "data-lang": "en",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx("p", {
        lang: "en",
        dir: "ltr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Mockoon is a nice and simple local API mocking tool by ", __jsx("a", {
        href: "https://twitter.com/255kb?ref_src=twsrc%5Etfw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "@255kb"), " ", __jsx("a", {
        href: "https://t.co/6pr3uXpZ4r",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "https://t.co/6pr3uXpZ4r")), "\u2014 Damir Arh (@DamirArh) ", __jsx("a", {
        href: "https://twitter.com/DamirArh/status/1043813625163583488?ref_src=twsrc%5Etfw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "23 septembre 2018"))), __jsx("div", {
        className: "column is-one-quarter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, __jsx("blockquote", {
        className: "twitter-tweet",
        "data-cards": "hidden",
        "data-dnt": "true",
        "data-conversation": "none",
        "data-lang": "en",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx("p", {
        lang: "en",
        dir: "ltr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "Mockoon by ", __jsx("a", {
        href: "https://twitter.com/255kb?ref_src=twsrc%5Etfw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "@255kb"), " - amazing tool for mocking APIs locally. Def a keeper ", __jsx("a", {
        href: "https://twitter.com/hashtag/API?src=hash&ref_src=twsrc%5Etfw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "#API"), " ", __jsx("a", {
        href: "https://twitter.com/hashtag/Programming?src=hash&ref_src=twsrc%5Etfw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "#Programming"), " ", __jsx("a", {
        href: "https://t.co/Ut6wZQUXBF",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "https://t.co/Ut6wZQUXBF"), " ", __jsx("a", {
        href: "https://t.co/C0FuDN9Bo5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "pic.twitter.com/C0FuDN9Bo5")), "\u2014 \uD83D\uDE80 Marius (@Maephisto) ", __jsx("a", {
        href: "https://twitter.com/Maephisto/status/926431521220841473?ref_src=twsrc%5Etfw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "3 novembre 2017"))), __jsx("div", {
        className: "column is-one-quarter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, __jsx("blockquote", {
        className: "twitter-tweet",
        "data-cards": "hidden",
        "data-dnt": "true",
        "data-conversation": "none",
        "data-lang": "en",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, __jsx("p", {
        lang: "en",
        dir: "ltr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Mockoon looks like a promising tool for creating local mocks for testing ", __jsx("a", {
        href: "https://t.co/6rrAkmIk2M",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "https://t.co/6rrAkmIk2M"), " ", __jsx("a", {
        href: "https://t.co/WMIxTgnpyU",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "pic.twitter.com/WMIxTgnpyU")), "\u2014 Nexmo Developer (@NexmoDev) ", __jsx("a", {
        href: "https://twitter.com/NexmoDev/status/922560022055284739?ref_src=twsrc%5Etfw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "23 octobre 2017"))), __jsx("div", {
        className: "column is-one-quarter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx("blockquote", {
        className: "twitter-tweet",
        "data-cards": "hidden",
        "data-dnt": "true",
        "data-conversation": "none",
        "data-lang": "en",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("p", {
        lang: "en",
        dir: "ltr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Wow ", __jsx("a", {
        href: "https://twitter.com/255kb?ref_src=twsrc%5Etfw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "@255kb"), " Mockoon is incredibly easy to use! Thank you."), "\u2014 Gareth Fuller (@GarethAFuller) ", __jsx("a", {
        href: "https://twitter.com/GarethAFuller/status/920218814331187200?ref_src=twsrc%5Etfw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "17 octobre 2017")))), __jsx("div", {
        className: "columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, __jsx("div", {
        className: "column is-one-quarter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, __jsx("blockquote", {
        className: "twitter-tweet",
        "data-cards": "hidden",
        "data-dnt": "true",
        "data-conversation": "none",
        "data-lang": "en",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, __jsx("p", {
        lang: "en",
        dir: "ltr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Mockoon - the easiest and quickest way to run mock APIs locally.", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), "No remote deployment, no account required, open source", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), " ", __jsx("a", {
        href: "https://t.co/IyFXC4ispf",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "https://t.co/IyFXC4ispf")), "\u2014 Geoffrey Crofte \uD83D\uDC32 \uD83C\uDDF1\uD83C\uDDFA (@geoffrey_crofte) ", __jsx("a", {
        href: "https://twitter.com/geoffrey_crofte/status/1034707726000168960?ref_src=twsrc%5Etfw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "29 ao\xFBt 2018"))), __jsx("div", {
        className: "column is-one-quarter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, __jsx("blockquote", {
        className: "twitter-tweet",
        "data-cards": "hidden",
        "data-dnt": "true",
        "data-conversation": "none",
        "data-lang": "en",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx("p", {
        lang: "en",
        dir: "ltr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "OMG Mockoon, where have you been all these years?! ", __jsx("a", {
        href: "https://t.co/8xnuDTLSZE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "https://t.co/8xnuDTLSZE"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), "Thank you ", __jsx("a", {
        href: "https://twitter.com/255kb?ref_src=twsrc%5Etfw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "@255kb"), "!"), "\u2014 Benjamin Reitzammer (@benjamin) ", __jsx("a", {
        href: "https://twitter.com/benjamin/status/1097149234183397378?ref_src=twsrc%5Etfw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "17 f\xE9vrier 2019"))), __jsx("div", {
        className: "column is-one-quarter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx("blockquote", {
        className: "twitter-tweet",
        "data-cards": "hidden",
        "data-dnt": "true",
        "data-conversation": "none",
        "data-lang": "en",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, __jsx("p", {
        lang: "en",
        dir: "ltr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, __jsx("a", {
        href: "https://twitter.com/255kb?ref_src=twsrc%5Etfw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "@255kb"), " Great Job !! with mockoon. Latest update looks supercool!!.."), "\u2014 ;; (@notthatthing_) ", __jsx("a", {
        href: "https://twitter.com/notthatthing_/status/1046706165772513280?ref_src=twsrc%5Etfw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "1 octobre 2018"))), __jsx("div", {
        className: "column is-one-quarter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, __jsx("blockquote", {
        className: "twitter-tweet",
        "data-cards": "hidden",
        "data-dnt": "true",
        "data-conversation": "none",
        "data-lang": "en",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx("p", {
        lang: "en",
        dir: "ltr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "Mockoon is easy to use & intuitive, great user experience. Thank you for creating this ", __jsx("a", {
        href: "https://twitter.com/255kb?ref_src=twsrc%5Etfw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "@255kb")), "\u2014 Steffen Laurens (@L_gondrong) ", __jsx("a", {
        href: "https://twitter.com/L_gondrong/status/1044774814009835521?ref_src=twsrc%5Etfw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "26 septembre 2018")))))), __jsx(_components_newsletter__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }), __jsx("section", {
        className: "section",
        id: "feedback",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, __jsx("div", {
        className: "columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, __jsx("div", {
        className: "column has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, __jsx("h1", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "Feedback welcome!"), __jsx("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "You have found a bug, you have an idea? Submit them on Mockoon's ", __jsx("a", {
        href: "https://github.com/mockoon/mockoon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "GitHub repository"), "."), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "You like Mockoon? Spread the word :)"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, __jsx("a", {
        title: "Share on Twitter",
        href: "http://twitter.com/share?url=https://mockoon.com&text=Mockoon+is+the+easiest+and+quickest+way+to+run+mock+APIs+locally.+No+remote+deployment,+no+account+required,+open+source.&via=255kb&",
        onClick: function onClick(event) {
          event.preventDefault();
          window.open('http://twitter.com/share?url=https://mockoon.com&amp;text=Mockoon+is+the+easiest+and+quickest+way+to+run+mock+APIs+locally.+No+remote+deployment,+no+account+required,+open+source.&amp;via=255kb&amp;', 'twitter-share', 'width=800,height=600');
          return false;
        },
        className: "button is-primary is-outlined twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, __jsx("span", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, __jsx("i", {
        className: "icon-twitter",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      })), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "Twitter")), __jsx("a", {
        title: "Share on Facebook",
        href: "http://www.facebook.com/sharer/sharer.php?u=https://mockoon.com",
        onClick: function onClick(event) {
          event.preventDefault();
          window.open('http://www.facebook.com/sharer/sharer.php?u=https://mockoon.com', 'facebook-share', 'width=800,height=600');
          return false;
        },
        className: "button is-primary is-outlined facebook",
        style: {
          marginLeft: 5 + 'px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, __jsx("span", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, __jsx("i", {
        className: "icon-facebook",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      })), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "Facebook")))))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.587446bbee1aafff3aa8.hot-update.js.map