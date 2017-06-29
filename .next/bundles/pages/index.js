
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(661);


/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(47);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(662);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(663);

var _layout2 = _interopRequireDefault(_layout);

var _VideoPlayer = __webpack_require__(667);

var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mf/code/slrmagic/video-demo/pages/index.js?entry';
//import './App.css';


var videoJsOptions = {
  autoplay: false,
  controls: true,
  width: 720,
  height: 361,
  poster: '/static/poster1.png',
  sources: [{
    src: 'https://s3-us-west-2.amazonaws.com/steelpuck/content/slrmagic/601333_120184d862a0229ff0110f07407b743a/601333.mpd',
    type: 'application/dash+xml'
  }]

  //src: 'https://s3-us-west-2.amazonaws.com/steelpuck/content/slrmagic/slrmagic-8mm-osmo-inspire-zenmusex5r-1080.mp4',
  //type: 'video/mp4'

};
var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var conf = {
        key: "f390f0a3-592c-4f08-99b8-0291a111de86",
        style: {
          width: "720px",
          height: "361px"
        },
        source: {
          dash: "https://dv80ex6osbfhg.cloudfront.net/content/slrmagic/601333_120184d862a0229ff0110f07407b743a/601333.mpd",
          hls: "https://dv80ex6osbfhg.cloudfront.net/content/slrmagic/601333_120184d862a0229ff0110f07407b743a/601333.m3u8",
          progressive: "https://dv80ex6osbfhg.cloudfront.net/content/slrmagic/slrmagic-8mm-osmo-inspire-zenmusex5r-1080.mp4",
          poster: "/static/poster1.png"
        }
      };
      var player = bitmovin.player("player");
      player.setup(conf).then(function (value) {
        // Success
        console.log("Successfully created bitmovin player instance");
      }, function (reason) {
        // Error!
        console.log("Error while creating bitmovin player instance");
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('div', { className: 'video-wrapper', 'data-jsx': 1795821276,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('div', { id: 'player', 'data-jsx': 1795821276,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: 1795821276,
        css: '.video-wrapper[data-jsx="1795821276"]{position:absolute;width:720px;height:361px;margin-bottom:100px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);-webkit-box-shadow:0px 9px 24px 6px rgba(0,0,0,0.32);-moz-box-shadow:0px 9px 24px 6px rgba(0,0,0,0.32);box-shadow:0px 9px 24px 6px rgba(0,0,0,0.32)}.bmpui-container-wrapper[data-jsx="1795821276"]>button[data-jsx="1795821276"]{display:none}button.bmpui-ui-watermark[data-jsx="1795821276"]{display:none !important}.bmpui-ui-skin-modern[data-jsx="1795821276"] .bmpui-ui-watermark[data-jsx="1795821276"]{display:none !important;opacity:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEb0IsQUFHK0IsQUFBOFksQUFBMkQsQUFDbmMsY0FEeVksS0FBdFgsTUFBaWIsQUFDN2EsT0FEc0IsSUFDWCxVQUQ0QyxxQkFBc0IsVUFBd0MsZ0dBQWtFLHNEQUErRCxtREFBMEQsOENBQVciLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21mL2NvZGUvc2xybWFnaWMvdmlkZW8tZGVtbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vL2ltcG9ydCAnLi9BcHAuY3NzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi8uLi9jb21wb25lbnRzL2xheW91dC5qcyc7XG5pbXBvcnQgVmlkZW9QbGF5ZXIgZnJvbSAnLi8uLi9jb21wb25lbnRzL1ZpZGVvUGxheWVyJztcblxuXG5jb25zdCB2aWRlb0pzT3B0aW9ucyA9IHtcbiAgYXV0b3BsYXk6IGZhbHNlLFxuICBjb250cm9sczogdHJ1ZSxcbiAgd2lkdGg6IDcyMCxcbiAgaGVpZ2h0OiAzNjEsXG4gIHBvc3RlcjogJy9zdGF0aWMvcG9zdGVyMS5wbmcnLFxuICBzb3VyY2VzOiBbe1xuICAgIHNyYzogJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vc3RlZWxwdWNrL2NvbnRlbnQvc2xybWFnaWMvNjAxMzMzXzEyMDE4NGQ4NjJhMDIyOWZmMDExMGYwNzQwN2I3NDNhLzYwMTMzMy5tcGQnLFxuICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9kYXNoK3htbCdcbiAgfV1cbn1cblxuXG4vL3NyYzogJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vc3RlZWxwdWNrL2NvbnRlbnQvc2xybWFnaWMvc2xybWFnaWMtOG1tLW9zbW8taW5zcGlyZS16ZW5tdXNleDVyLTEwODAubXA0Jyxcbi8vdHlwZTogJ3ZpZGVvL21wNCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHZhciBjb25mID0ge1xuICAgICAgICBrZXk6ICAgICAgIFwiZjM5MGYwYTMtNTkyYy00ZjA4LTk5YjgtMDI5MWExMTFkZTg2XCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6IFwiNzIwcHhcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMzYxcHhcIixcbiAgICAgICAgfSxcbiAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgZGFzaDogICAgICAgIFwiaHR0cHM6Ly9kdjgwZXg2b3NiZmhnLmNsb3VkZnJvbnQubmV0L2NvbnRlbnQvc2xybWFnaWMvNjAxMzMzXzEyMDE4NGQ4NjJhMDIyOWZmMDExMGYwNzQwN2I3NDNhLzYwMTMzMy5tcGRcIixcbiAgICAgICAgICBobHM6ICAgICAgICAgXCJodHRwczovL2R2ODBleDZvc2JmaGcuY2xvdWRmcm9udC5uZXQvY29udGVudC9zbHJtYWdpYy82MDEzMzNfMTIwMTg0ZDg2MmEwMjI5ZmYwMTEwZjA3NDA3Yjc0M2EvNjAxMzMzLm0zdThcIixcbiAgICAgICAgICBwcm9ncmVzc2l2ZTogXCJodHRwczovL2R2ODBleDZvc2JmaGcuY2xvdWRmcm9udC5uZXQvY29udGVudC9zbHJtYWdpYy9zbHJtYWdpYy04bW0tb3Ntby1pbnNwaXJlLXplbm11c2V4NXItMTA4MC5tcDRcIixcbiAgICAgICAgICBwb3N0ZXI6ICAgICAgXCIvc3RhdGljL3Bvc3RlcjEucG5nXCJcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHBsYXllciA9IGJpdG1vdmluLnBsYXllcihcInBsYXllclwiKTtcbiAgICBwbGF5ZXIuc2V0dXAoY29uZikudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAvLyBTdWNjZXNzXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYml0bW92aW4gcGxheWVyIGluc3RhbmNlXCIpO1xuICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAvLyBFcnJvciFcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBjcmVhdGluZyBiaXRtb3ZpbiBwbGF5ZXIgaW5zdGFuY2VcIik7XG4gICAgfSk7XHRcblxuXHR9XG5cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby13cmFwcGVyXCI+XG5cdFx0XHRcdFx0PGRpdiBpZD1cInBsYXllclwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnZpZGVvLXdyYXBwZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDcyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNjFweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOXB4IDI0cHggNnB4IHJnYmEoMCwwLDAsMC4zMik7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA5cHggMjRweCA2cHggcmdiYSgwLDAsMCwwLjMyKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA5cHggMjRweCA2cHggcmdiYSgwLDAsMCwwLjMyKTtcbiAgICAgICAgICB9XG5cdFx0XHRcdFx0LmJtcHVpLWNvbnRhaW5lci13cmFwcGVyID4gYnV0dG9uIHsgZGlzcGxheTogbm9uZTsgfVxuXHRcdFx0XHQgIGJ1dHRvbi5ibXB1aS11aS13YXRlcm1hcmtcdHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gICAgICAgICAgLmJtcHVpLXVpLXNraW4tbW9kZXJuIC5ibXB1aS11aS13YXRlcm1hcmsge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mf/code/slrmagic/video-demo/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mf/code/slrmagic/video-demo/pages/index.js"); } } })();
    (function (Component, route) {
      if (!module.hot) return
      if (false) return

      var qs = __webpack_require__(69)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(664);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(227);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mf/code/slrmagic/video-demo/components/layout.js';

exports.default = function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'SLR Magic- CDN Demo' : _ref$title;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, title), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('script', { type: 'text/javascript', src: 'https://bitmovin-a.akamaihd.net/bitmovin-player/stable/7/bitmovinplayer.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/video-js.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('style', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, '\n          body { \n            background: #D8D8D8; \n          }\n          header {\n            text-align: center;\n            margin-bottom: 30px;\n          }\n          header img {\n            width: 280px;\n          }\n          ')), _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('img', { src: '/static/slrmagic_logo_white.svg', alt: 'SLR Magic', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }))), children, _react2.default.createElement('footer', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mf/code/slrmagic/video-demo/components/layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mf/code/slrmagic/video-demo/components/layout.js"); } } })();

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(47);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(583);

var _video = __webpack_require__(786);

var _video2 = _interopRequireDefault(_video);

__webpack_require__(796);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mf/code/slrmagic/video-demo/components/VideoPlayer.js';


var VideoPlayer = function (_React$Component) {
  (0, _inherits3.default)(VideoPlayer, _React$Component);

  function VideoPlayer() {
    (0, _classCallCheck3.default)(this, VideoPlayer);

    return (0, _possibleConstructorReturn3.default)(this, (VideoPlayer.__proto__ || (0, _getPrototypeOf2.default)(VideoPlayer)).apply(this, arguments));
  }

  (0, _createClass3.default)(VideoPlayer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // instantiate video.js
      //console.log("dash", dash);

      //videojs.Html5DashJS.beforeInitialize = function (player, media_player) {
      //	media_player.getDebug().setLogToBrowserConsole(false);
      //};

      window.videojs = _video2.default;
      this.player = (0, _video2.default)(this.videoNode, this.props, function onPlayerReady() {
        console.log('onPlayerReady', this);
      });
    }

    // destroy player on unmount

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.player) {
        this.player.dispose();
      }
    }

    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', { 'data-vjs-player': true, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('video', { ref: function ref(node) {
          return _this2.videoNode = node;
        }, className: 'video-js', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }));
    }
  }]);

  return VideoPlayer;
}(_react2.default.Component);

exports.default = VideoPlayer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mf/code/slrmagic/video-demo/components/VideoPlayer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mf/code/slrmagic/video-demo/components/VideoPlayer.js"); } } })();

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 797:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[660]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2IxM2QzYzciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQuanM/YjEzZDNjNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzP2IxM2QzYzciLCJ3ZWJwYWNrOi8vL21pbi1kb2N1bWVudCAoaWdub3JlZCk/YjEzZDNjNyIsIndlYnBhY2s6Ly8vbWluLWRvY3VtZW50IChpZ25vcmVkKT8yODE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vL2ltcG9ydCAnLi9BcHAuY3NzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi8uLi9jb21wb25lbnRzL2xheW91dC5qcyc7XG5pbXBvcnQgVmlkZW9QbGF5ZXIgZnJvbSAnLi8uLi9jb21wb25lbnRzL1ZpZGVvUGxheWVyJztcblxuXG5jb25zdCB2aWRlb0pzT3B0aW9ucyA9IHtcbiAgYXV0b3BsYXk6IGZhbHNlLFxuICBjb250cm9sczogdHJ1ZSxcbiAgd2lkdGg6IDcyMCxcbiAgaGVpZ2h0OiAzNjEsXG4gIHBvc3RlcjogJy9zdGF0aWMvcG9zdGVyMS5wbmcnLFxuICBzb3VyY2VzOiBbe1xuICAgIHNyYzogJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vc3RlZWxwdWNrL2NvbnRlbnQvc2xybWFnaWMvNjAxMzMzXzEyMDE4NGQ4NjJhMDIyOWZmMDExMGYwNzQwN2I3NDNhLzYwMTMzMy5tcGQnLFxuICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9kYXNoK3htbCdcbiAgfV1cbn1cblxuXG4vL3NyYzogJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vc3RlZWxwdWNrL2NvbnRlbnQvc2xybWFnaWMvc2xybWFnaWMtOG1tLW9zbW8taW5zcGlyZS16ZW5tdXNleDVyLTEwODAubXA0Jyxcbi8vdHlwZTogJ3ZpZGVvL21wNCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHZhciBjb25mID0ge1xuICAgICAgICBrZXk6ICAgICAgIFwiZjM5MGYwYTMtNTkyYy00ZjA4LTk5YjgtMDI5MWExMTFkZTg2XCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6IFwiNzIwcHhcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMzYxcHhcIixcbiAgICAgICAgfSxcbiAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgZGFzaDogICAgICAgIFwiaHR0cHM6Ly9kdjgwZXg2b3NiZmhnLmNsb3VkZnJvbnQubmV0L2NvbnRlbnQvc2xybWFnaWMvNjAxMzMzXzEyMDE4NGQ4NjJhMDIyOWZmMDExMGYwNzQwN2I3NDNhLzYwMTMzMy5tcGRcIixcbiAgICAgICAgICBobHM6ICAgICAgICAgXCJodHRwczovL2R2ODBleDZvc2JmaGcuY2xvdWRmcm9udC5uZXQvY29udGVudC9zbHJtYWdpYy82MDEzMzNfMTIwMTg0ZDg2MmEwMjI5ZmYwMTEwZjA3NDA3Yjc0M2EvNjAxMzMzLm0zdThcIixcbiAgICAgICAgICBwcm9ncmVzc2l2ZTogXCJodHRwczovL2R2ODBleDZvc2JmaGcuY2xvdWRmcm9udC5uZXQvY29udGVudC9zbHJtYWdpYy9zbHJtYWdpYy04bW0tb3Ntby1pbnNwaXJlLXplbm11c2V4NXItMTA4MC5tcDRcIixcbiAgICAgICAgICBwb3N0ZXI6ICAgICAgXCIvc3RhdGljL3Bvc3RlcjEucG5nXCJcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHBsYXllciA9IGJpdG1vdmluLnBsYXllcihcInBsYXllclwiKTtcbiAgICBwbGF5ZXIuc2V0dXAoY29uZikudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAvLyBTdWNjZXNzXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYml0bW92aW4gcGxheWVyIGluc3RhbmNlXCIpO1xuICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAvLyBFcnJvciFcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBjcmVhdGluZyBiaXRtb3ZpbiBwbGF5ZXIgaW5zdGFuY2VcIik7XG4gICAgfSk7XHRcblxuXHR9XG5cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby13cmFwcGVyXCI+XG5cdFx0XHRcdFx0PGRpdiBpZD1cInBsYXllclwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnZpZGVvLXdyYXBwZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDcyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNjFweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOXB4IDI0cHggNnB4IHJnYmEoMCwwLDAsMC4zMik7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA5cHggMjRweCA2cHggcmdiYSgwLDAsMCwwLjMyKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA5cHggMjRweCA2cHggcmdiYSgwLDAsMCwwLjMyKTtcbiAgICAgICAgICB9XG5cdFx0XHRcdFx0LmJtcHVpLWNvbnRhaW5lci13cmFwcGVyID4gYnV0dG9uIHsgZGlzcGxheTogbm9uZTsgfVxuXHRcdFx0XHQgIGJ1dHRvbi5ibXB1aS11aS13YXRlcm1hcmtcdHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gICAgICAgICAgLmJtcHVpLXVpLXNraW4tbW9kZXJuIC5ibXB1aS11aS13YXRlcm1hcmsge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIHRpdGxlID0gJ1NMUiBNYWdpYy0gQ0ROIERlbW8nIH0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cblx0XHRcdDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImh0dHBzOi8vYml0bW92aW4tYS5ha2FtYWloZC5uZXQvYml0bW92aW4tcGxheWVyL3N0YWJsZS83L2JpdG1vdmlucGxheWVyLmpzXCI+PC9zY3JpcHQ+XG5cdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvdmlkZW8tanMubWluLmNzc1wiIC8+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIHtgXG4gICAgICAgICAgYm9keSB7IFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0Q4RDhEODsgXG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9IZWFkPlxuICAgIDxoZWFkZXI+XG4gICAgICA8aDE+PGltZyBzcmM9XCIvc3RhdGljL3Nscm1hZ2ljX2xvZ29fd2hpdGUuc3ZnXCIgYWx0PVwiU0xSIE1hZ2ljXCIgLz48L2gxPlxuICAgIDwvaGVhZGVyPlxuXG4gICAgeyBjaGlsZHJlbiB9XG5cbiAgICA8Zm9vdGVyPlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnZGFzaGpzJztcbmltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcbmltcG9ydCAndmlkZW9qcy1jb250cmliLWRhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb1BsYXllciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGluc3RhbnRpYXRlIHZpZGVvLmpzXG4gICAgLy9jb25zb2xlLmxvZyhcImRhc2hcIiwgZGFzaCk7XG5cblx0XHQvL3ZpZGVvanMuSHRtbDVEYXNoSlMuYmVmb3JlSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChwbGF5ZXIsIG1lZGlhX3BsYXllcikge1xuXHRcdC8vXHRtZWRpYV9wbGF5ZXIuZ2V0RGVidWcoKS5zZXRMb2dUb0Jyb3dzZXJDb25zb2xlKGZhbHNlKTtcblx0XHQvL307XG5cblx0XHR3aW5kb3cudmlkZW9qcyA9IHZpZGVvanM7XG4gICAgdGhpcy5wbGF5ZXIgPSB2aWRlb2pzKHRoaXMudmlkZW9Ob2RlLCB0aGlzLnByb3BzLCBmdW5jdGlvbiBvblBsYXllclJlYWR5KCkge1xuICAgICAgY29uc29sZS5sb2coJ29uUGxheWVyUmVhZHknLCB0aGlzKVxuICAgIH0pO1xuICB9XG5cbiAgLy8gZGVzdHJveSBwbGF5ZXIgb24gdW5tb3VudFxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5wbGF5ZXIpIHtcbiAgICAgIHRoaXMucGxheWVyLmRpc3Bvc2UoKVxuICAgIH1cbiAgfVxuXG4gIC8vIHdyYXAgdGhlIHBsYXllciBpbiBhIGRpdiB3aXRoIGEgYGRhdGEtdmpzLXBsYXllcmAgYXR0cmlidXRlXG4gIC8vIHNvIHZpZGVvanMgd29uJ3QgY3JlYXRlIGFkZGl0aW9uYWwgd3JhcHBlciBpbiB0aGUgRE9NXG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vdmlkZW9qcy92aWRlby5qcy9wdWxsLzM4NTZcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGRhdGEtdmpzLXBsYXllcj5cbiAgICAgICAgPHZpZGVvIHJlZj17IG5vZGUgPT4gdGhpcy52aWRlb05vZGUgPSBub2RlIH0gY2xhc3NOYW1lPVwidmlkZW8tanNcIj48L3ZpZGVvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzIiwiLyogKGlnbm9yZWQpICovXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gbWluLWRvY3VtZW50IChpZ25vcmVkKVxuLy8gbW9kdWxlIGlkID0gNzg4XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIG1pbi1kb2N1bWVudCAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDc5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFIQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFLQTtBQU5BO0FBQ0E7QUFNQTtBQWRBO0FBQ0E7QUFBQTtBQWVBOzs7Ozs7Ozs7OztBQUlBO0FBQUE7QUFFQTs7QUFFQTtBQUVBO0FBSEE7O0FBS0E7QUFDQTtBQUNBO0FBR0E7QUFOQTtBQU5BO0FBWUE7QUFDQTtBQUVBO0FBQUE7QUFGQTtBQUtBO0FBQUE7QUFHQTs7OztBQUtBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7O0FBRkE7QUEyQkE7QUEzQkE7Ozs7O0FBaENBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSEE7QUFLQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTdCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBSEE7Ozs7OztBQTVCQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7QUNOQTs7Ozs7OztBQ0FBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        