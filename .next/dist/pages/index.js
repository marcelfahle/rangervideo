'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('./../components/layout.js');

var _layout2 = _interopRequireDefault(_layout);

var _VideoPlayer = require('./../components/VideoPlayer');

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