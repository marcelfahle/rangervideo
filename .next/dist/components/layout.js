"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mf/code/ranger/code/video-demo/components/layout.js";

exports.default = function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? "Ranger TV" : _ref$title;
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, title), _react2.default.createElement("meta", { charSet: "utf-8", __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement("script", {
    type: "text/javascript",
    src: "https://bitmovin-a.akamaihd.net/bitmovin-player/stable/7/bitmovinplayer.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Ubuntu:300,400",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "\n          body { \n            background: #fff;\n            margin: 0;\n            padding: 0;\n            font-family: 'Ubuntu', sans-serif;\n          }\n          header {\n            position: relative;\n            margin-bottom: 30px;\n            max-width: 1200px;\n            padding-left: 30px;\n            padding-right: 30px;\n            margin: 0 auto;\n          }\n          h1 {\n            margin: 0;\n            padding: 0;\n            text-align: left;\n          }\n          header img {\n            width: 180px;\n          }\n          footer {\n            padding: 30px 30px 60px 30px;\n            max-width: 1140px;\n            margin: 0 auto;\n          }\n          a {\n            color: #FF6B00;\n          }\n          nav {\n          position: absolute;\n          right: 30px;\n          top: 50px;\n          }\n          nav ul {\n            padding-left: 0;\n            list-style: none;\n          }\n          nav ul li {\n            display: inline-block;\n            padding-left: 20px;\n            padding-right: 20px;\n          }\n          nav a {\n            text-decoration: none;\n          }\n          ")), _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, _react2.default.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, _react2.default.createElement("img", { src: "/static/ranger-logo.jpg", alt: "Ranger", __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  })), _react2.default.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, _react2.default.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, _react2.default.createElement("a", { href: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, "Video 1")), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, _react2.default.createElement("a", { href: "/video2", __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, "Video 2"))))), children, _react2.default.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, "Demo von Marcel Fahle (", _react2.default.createElement("a", {
    href: "https://marcelfahle.net",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, "marcelfahle.net"), ")"))));
};