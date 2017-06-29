webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wNjRlODMxZWM3YzdjNGZlNDRjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuLy9pbXBvcnQgJy4vQXBwLmNzcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vY29tcG9uZW50cy9sYXlvdXQuanMnO1xuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJy4vLi4vY29tcG9uZW50cy9WaWRlb1BsYXllcic7XG5cblxuY29uc3QgdmlkZW9Kc09wdGlvbnMgPSB7XG4gIGF1dG9wbGF5OiBmYWxzZSxcbiAgY29udHJvbHM6IHRydWUsXG4gIHdpZHRoOiA3MjAsXG4gIGhlaWdodDogMzYxLFxuICBwb3N0ZXI6ICcvc3RhdGljL3Bvc3RlcjEucG5nJyxcbiAgc291cmNlczogW3tcbiAgICBzcmM6ICdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3N0ZWVscHVjay9jb250ZW50L3Nscm1hZ2ljLzYwMTMzM18xMjAxODRkODYyYTAyMjlmZjAxMTBmMDc0MDdiNzQzYS82MDEzMzMubXBkJyxcbiAgICB0eXBlOiAnYXBwbGljYXRpb24vZGFzaCt4bWwnXG4gIH1dXG59XG5cblxuLy9zcmM6ICdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3N0ZWVscHVjay9jb250ZW50L3Nscm1hZ2ljL3Nscm1hZ2ljLThtbS1vc21vLWluc3BpcmUtemVubXVzZXg1ci0xMDgwLm1wNCcsXG4vL3R5cGU6ICd2aWRlby9tcDQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR2YXIgY29uZiA9IHtcbiAgICAgICAga2V5OiAgICAgICBcImYzOTBmMGEzLTU5MmMtNGYwOC05OWI4LTAyOTFhMTExZGU4NlwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHdpZHRoOiBcIjcyMHB4XCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjM2MXB4XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHNvdXJjZToge1xuICAgICAgICAgIGRhc2g6ICAgICAgICBcImh0dHBzOi8vZHY4MGV4Nm9zYmZoZy5jbG91ZGZyb250Lm5ldC9jb250ZW50L3Nscm1hZ2ljLzYwMTMzM18xMjAxODRkODYyYTAyMjlmZjAxMTBmMDc0MDdiNzQzYS82MDEzMzMubXBkXCIsXG4gICAgICAgICAgaGxzOiAgICAgICAgIFwiaHR0cHM6Ly9kdjgwZXg2b3NiZmhnLmNsb3VkZnJvbnQubmV0L2NvbnRlbnQvc2xybWFnaWMvNjAxMzMzXzEyMDE4NGQ4NjJhMDIyOWZmMDExMGYwNzQwN2I3NDNhLzYwMTMzMy5tM3U4XCIsXG4gICAgICAgICAgcHJvZ3Jlc3NpdmU6IFwiaHR0cHM6Ly9kdjgwZXg2b3NiZmhnLmNsb3VkZnJvbnQubmV0L2NvbnRlbnQvc2xybWFnaWMvc2xybWFnaWMtOG1tLW9zbW8taW5zcGlyZS16ZW5tdXNleDVyLTEwODAubXA0XCIsXG4gICAgICAgICAgcG9zdGVyOiAgICAgIFwiL3N0YXRpYy9wb3N0ZXIxLnBuZ1wiXG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBwbGF5ZXIgPSBiaXRtb3Zpbi5wbGF5ZXIoXCJwbGF5ZXJcIik7XG4gICAgcGxheWVyLnNldHVwKGNvbmYpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgLy8gU3VjY2Vzc1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBjcmVhdGVkIGJpdG1vdmluIHBsYXllciBpbnN0YW5jZVwiKTtcbiAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgLy8gRXJyb3IhXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgY3JlYXRpbmcgYml0bW92aW4gcGxheWVyIGluc3RhbmNlXCIpO1xuICAgIH0pO1x0XG5cblx0fVxuXG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8td3JhcHBlclwiPlxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJwbGF5ZXJcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC52aWRlby13cmFwcGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA3MjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzYxcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDlweCAyNHB4IDZweCByZ2JhKDAsMCwwLDAuMzIpO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggOXB4IDI0cHggNnB4IHJnYmEoMCwwLDAsMC4zMik7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggOXB4IDI0cHggNnB4IHJnYmEoMCwwLDAsMC4zMik7XG4gICAgICAgICAgfVxuXHRcdFx0XHRcdC5ibXB1aS1jb250YWluZXItd3JhcHBlciA+IGJ1dHRvbiB7IGRpc3BsYXk6IG5vbmU7IH1cblx0XHRcdFx0ICBidXR0b24uYm1wdWktdWktd2F0ZXJtYXJrXHR7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAgICAgICAgIC5ibXB1aS11aS1za2luLW1vZGVybiAuYm1wdWktdWktd2F0ZXJtYXJrIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUhBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUtBO0FBTkE7QUFDQTtBQU1BO0FBZEE7QUFDQTtBQUFBO0FBZUE7Ozs7Ozs7Ozs7O0FBSUE7QUFBQTtBQUVBOztBQUVBO0FBRUE7QUFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFHQTtBQU5BO0FBTkE7QUFZQTtBQUNBO0FBRUE7QUFBQTtBQUZBO0FBS0E7QUFBQTtBQUdBOzs7O0FBS0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTs7QUFGQTtBQTJCQTtBQTNCQTs7Ozs7QUFoQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=