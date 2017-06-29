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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('dashjs');

var _video = require('video.js');

var _video2 = _interopRequireDefault(_video);

require('videojs-contrib-dash');

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