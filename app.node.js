module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(38);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(6);

  var _libLocation = __webpack_require__(4);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  var _componentsLayout = __webpack_require__(12);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(16);
    }, '/500': function _() {
      return __webpack_require__(17);
    }, '/blog': function blog() {
      return __webpack_require__(18);
    }, '/blog/test-article-one': function blogTestArticleOne() {
      return __webpack_require__(19);
    }, '/blog/test-article-two': function blogTestArticleTwo() {
      return __webpack_require__(20);
    }, '/contact-cn': function contactCn() {
      return __webpack_require__(21);
    }, '/contact': function contact() {
      return __webpack_require__(22);
    }, '/faq-cn': function faqCn() {
      return __webpack_require__(23);
    }, '/faq': function faq() {
      return __webpack_require__(24);
    }, '/index-cn': function indexCn() {
      return __webpack_require__(25);
    }, '/': function _() {
      return __webpack_require__(26);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            { path: path },
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _libLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready
    // and page content is loaded
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', run);
    } else {
      window.attachEvent('onload', run);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(27);

  var Container = (function (_Component) {
    _inherits(Container, _Component);

    function Container() {
      _classCallCheck(this, Container);

      _get(Object.getPrototypeOf(Container.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Container, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Container' },
          this.props.children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element.isRequired
      },
      enumerable: true
    }]);

    return Container;
  })(_react.Component);

  exports['default'] = Container;
  module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(6);

  var _historyLibCreateBrowserHistory = __webpack_require__(36);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibUseQueries = __webpack_require__(37);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = _fbjsLibExecutionEnvironment.canUseDOM ? (0, _historyLibUseQueries2['default'])(_historyLibCreateBrowserHistory2['default'])() : {};

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ".datepicker__tether-element-attached-top .datepicker__triangle, .datepicker__tether-element-attached-bottom .datepicker__triangle, .datepicker__year-read-view--down-arrow {\n  margin-left: -8px;\n  position: absolute;\n}\n.datepicker__tether-element-attached-top .datepicker__triangle, .datepicker__tether-element-attached-bottom .datepicker__triangle, .datepicker__year-read-view--down-arrow, .datepicker__tether-element-attached-top .datepicker__triangle::before, .datepicker__tether-element-attached-bottom .datepicker__triangle::before, .datepicker__year-read-view--down-arrow::before {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  position: absolute;\n  border: 8px solid transparent;\n  height: 0;\n  width: 1px;\n}\n.datepicker__tether-element-attached-top .datepicker__triangle::before, .datepicker__tether-element-attached-bottom .datepicker__triangle::before, .datepicker__year-read-view--down-arrow::before {\n  content: \"\";\n  z-index: -1;\n  border-width: 8px;\n  left: -8px;\n  border-bottom-color: #aeaeae;\n}\n\n.datepicker__tether-element-attached-top .datepicker__triangle {\n  top: 0;\n  margin-top: -8px;\n}\n.datepicker__tether-element-attached-top .datepicker__triangle, .datepicker__tether-element-attached-top .datepicker__triangle::before {\n  border-top: none;\n  border-bottom-color: #f0f0f0;\n}\n.datepicker__tether-element-attached-top .datepicker__triangle::before {\n  top: -1px;\n  border-bottom-color: #aeaeae;\n}\n\n.datepicker__tether-element-attached-bottom .datepicker__triangle, .datepicker__year-read-view--down-arrow {\n  bottom: 0;\n  margin-bottom: -8px;\n}\n.datepicker__tether-element-attached-bottom .datepicker__triangle, .datepicker__year-read-view--down-arrow, .datepicker__tether-element-attached-bottom .datepicker__triangle::before, .datepicker__year-read-view--down-arrow::before {\n  border-bottom: none;\n  border-top-color: #fff;\n}\n.datepicker__tether-element-attached-bottom .datepicker__triangle::before, .datepicker__year-read-view--down-arrow::before {\n  bottom: -1px;\n  border-top-color: #aeaeae;\n}\n\n.datepicker {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 11px;\n  background-color: #fff;\n  color: #000;\n  border: 1px solid #aeaeae;\n  border-radius: 4px;\n  display: inline-block;\n  position: relative;\n}\n\n.datepicker__triangle {\n  position: absolute;\n  left: 50px;\n}\n\n.datepicker__tether-element-attached-bottom.datepicker__tether-element {\n  margin-top: -20px;\n}\n\n.datepicker__header {\n  text-align: center;\n  background-color: #f0f0f0;\n  border-bottom: 1px solid #aeaeae;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  padding-top: 8px;\n  position: relative;\n}\n\n.datepicker__current-month {\n  margin-top: 0;\n  color: #000;\n  font-weight: bold;\n  font-size: 13px;\n}\n.datepicker__current-month--hasYearDropdown {\n  margin-bottom: 16px;\n}\n\n.datepicker__navigation {\n  line-height: 24px;\n  text-align: center;\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  width: 0;\n  border: 6px solid transparent;\n}\n.datepicker__navigation--previous {\n  left: 10px;\n  border-right-color: #ccc;\n}\n.datepicker__navigation--previous:hover {\n  border-right-color: #b3b3b3;\n}\n.datepicker__navigation--next {\n  right: 10px;\n  border-left-color: #ccc;\n}\n.datepicker__navigation--next:hover {\n  border-left-color: #b3b3b3;\n}\n.datepicker__navigation--years {\n  position: relative;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.datepicker__navigation--years-previous {\n  top: 4px;\n  border-top-color: #ccc;\n}\n.datepicker__navigation--years-previous:hover {\n  border-top-color: #b3b3b3;\n}\n.datepicker__navigation--years-upcoming {\n  top: -4px;\n  border-bottom-color: #ccc;\n}\n.datepicker__navigation--years-upcoming:hover {\n  border-bottom-color: #b3b3b3;\n}\n\n.datepicker__week-day {\n  color: #ccc;\n  display: inline-block;\n  width: 28px;\n  line-height: 24px;\n}\n\n.datepicker__month {\n  margin: 5px;\n  text-align: center;\n}\n\n.datepicker__day {\n  color: #000;\n  display: inline-block;\n  width: 24px;\n  line-height: 24px;\n  text-align: center;\n  margin: 2px;\n  cursor: pointer;\n}\n.datepicker__day:hover {\n  border-radius: 4px;\n  background-color: #f0f0f0;\n}\n.datepicker__day--today {\n  font-weight: bold;\n}\n.datepicker__day--selected, .datepicker__day--in-range {\n  border-radius: 4px;\n  background-color: #216ba5;\n  color: #fff;\n}\n.datepicker__day--selected:hover, .datepicker__day--in-range:hover {\n  background-color: #1d5d90;\n}\n.datepicker__day--disabled {\n  cursor: default;\n  color: #ccc;\n}\n.datepicker__day--disabled:hover {\n  background-color: transparent;\n}\n\n.datepicker__input-container {\n  position: relative;\n}\n\n.datepicker__input {\n  position: relative;\n  font-size: 13px;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 2px 2px #e9e9e9;\n          box-shadow: inset 0 2px 2px #e9e9e9;\n  border: 1px solid #aeaeae;\n  line-height: 16px;\n  padding: 6px 10px 5px;\n}\n.datepicker__input:focus {\n  outline: none;\n  border-color: #aeaeae;\n  -webkit-box-shadow: inset 0 2px 2px #e9e9e9, 0 0 10px 0 rgba(73, 107, 125, 0.3);\n          box-shadow: inset 0 2px 2px #e9e9e9, 0 0 10px 0 rgba(73, 107, 125, 0.3);\n}\n.datepicker__input:not(:valid) ~ .close-icon {\n  display: none;\n}\n\n.datepicker__year-read-view {\n  width: 50%;\n  left: 25%;\n  position: absolute;\n  bottom: 25px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.datepicker__year-read-view:hover {\n  cursor: pointer;\n}\n.datepicker__year-read-view:hover .datepicker__year-read-view--down-arrow {\n  border-top-color: #b3b3b3;\n}\n.datepicker__year-read-view--down-arrow {\n  border-top-color: #ccc;\n  margin-bottom: 3px;\n  left: 5px;\n  top: 9px;\n  position: relative;\n  border-width: 6px;\n}\n.datepicker__year-read-view--selected-year {\n  right: 6px;\n  position: relative;\n}\n\n.datepicker__year-dropdown {\n  background-color: #f0f0f0;\n  position: absolute;\n  width: 50%;\n  left: 25%;\n  top: 30px;\n  text-align: center;\n  border-radius: 4px;\n  border: 1px solid #aeaeae;\n}\n.datepicker__year-dropdown:hover {\n  cursor: pointer;\n}\n\n.datepicker__year-option {\n  line-height: 20px;\n  width: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.datepicker__year-option:first-of-type {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.datepicker__year-option:last-of-type {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.datepicker__year-option:hover {\n  background-color: #ccc;\n}\n.datepicker__year-option:hover .datepicker__navigation--years-upcoming {\n  border-bottom-color: #b3b3b3;\n}\n.datepicker__year-option:hover .datepicker__navigation--years-previous {\n  border-top-color: #b3b3b3;\n}\n.datepicker__year-option--selected {\n  position: absolute;\n  left: 30px;\n}\n\n.close-icon {\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  display: inline-block;\n  height: 0;\n  outline: 0;\n  padding: 0;\n  vertical-align: middle;\n}\n.close-icon::after {\n  background-color: #216ba5;\n  border-radius: 50%;\n  bottom: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  content: \"\\D7\";\n  cursor: pointer;\n  font-size: 12px;\n  height: 16px;\n  width: 16px;\n  line-height: 1;\n  margin: -8px auto 0;\n  padding: 2px;\n  position: absolute;\n  right: 7px;\n  text-align: center;\n  top: 50%;\n}\n\n.datepicker__today-button {\n  background: #f0f0f0;\n  border-top: 1px solid #aeaeae;\n  cursor: pointer;\n  text-align: center;\n  font-weight: bold;\n  padding: 5px 0;\n}\n", ""]);

  // exports


/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("moment");

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = require("react-datepicker");

/***/ },
/* 9 */
/***/ function(module, exports) {

  module.exports = require("react-google-recaptcha");

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("whatwg-fetch");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactIconsLibFa = __webpack_require__(39);

  __webpack_require__(28);

  var _Container = __webpack_require__(2);

  var _Container2 = _interopRequireDefault(_Container);

  var Footer = (function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
      _classCallCheck(this, Footer);

      _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Footer, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Footer' },
          _react2['default'].createElement(
            _Container2['default'],
            null,
            _react2['default'].createElement(
              'div',
              { className: 'Footer-list' },
              _react2['default'].createElement(
                'div',
                { className: 'Footer-item' },
                _react2['default'].createElement(
                  'div',
                  null,
                  '71 Ayer Rajah Crescent',
                  _react2['default'].createElement('br', null),
                  '#04-11 S(139951)'
                ),
                _react2['default'].createElement(
                  'a',
                  { href: 'https://www.google.com.sg/maps/place/71+Ayer+Rajah+Crescent,+Singapore+139951/@1.2967471,103.7844749,17z/data=!3m1!4b1!4m2!3m1!1s0x31da1a4fd6a29643:0x1cbb8a56dd8c9ccf!6m1!1e1', className: 'btn Footer-maps-button', target: '_blank' },
                  _react2['default'].createElement('img', { src: 'footer-map.png' }),
                  _react2['default'].createElement(
                    'span',
                    { className: 'Footer-maps-label' },
                    'Find Location'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'Footer-item' },
                _react2['default'].createElement(
                  'div',
                  { className: 'Footer-tel' },
                  '6873 0132'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    'a',
                    { href: 'mailto:contact@ebeecare.com' },
                    'contact@ebeecare.com'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'Footer-item' },
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    'span',
                    null,
                    'Find us on:'
                  ),
                  _react2['default'].createElement(
                    'a',
                    { href: 'https://www.facebook.com/ebeecare/', className: 'Footer-social-media' },
                    _react2['default'].createElement(_reactIconsLibFa.FaFacebook, null)
                  ),
                  _react2['default'].createElement(
                    'a',
                    { href: 'https://twitter.com/ebeecaresg', className: 'Footer-social-media' },
                    _react2['default'].createElement(_reactIconsLibFa.FaTwitter, null)
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'Copyright' },
              _react2['default'].createElement(
                'div',
                null,
                '© Copyright ',
                new Date().getFullYear(),
                ' by eBeeCare Pte. Ltd. (201415751N). '
              ),
              _react2['default'].createElement(
                'div',
                null,
                'All Rights Reserved.'
              )
            )
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element.isRequired
      },
      enumerable: true
    }]);

    return Footer;
  })(_react.Component);

  exports['default'] = Footer;
  module.exports = exports['default'];
  /*
  <a href="" className="Footer-social-media"><i className="fa fa-instagram"></i></a>
  <a href="" className="Footer-social-media"><i className="fa fa-google-plus"></i></a>
  <a href="" className="Footer-social-media"><i className="fa fa-linkedin"></i></a>
  */

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(29);

  var _Container = __webpack_require__(2);

  var _Container2 = _interopRequireDefault(_Container);

  var _Navigation = __webpack_require__(15);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _Footer = __webpack_require__(11);

  var _Footer2 = _interopRequireDefault(_Footer);

  var Layout = (function (_Component) {
    _inherits(Layout, _Component);

    function Layout() {
      _classCallCheck(this, Layout);

      _get(Object.getPrototypeOf(Layout.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Layout, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Layout' },
          _react2['default'].createElement(
            'div',
            { className: 'NavWrapper' },
            _react2['default'].createElement(
              _Container2['default'],
              null,
              _react2['default'].createElement(_Navigation2['default'], { path: this.props.path, locale: this.props.path.indexOf("-cn") > -1 ? "cn" : "en" })
            )
          ),
          this.props.children,
          _react2['default'].createElement(_Footer2['default'], { locale: this.props.locale })
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element.isRequired
      },
      enumerable: true
    }]);

    return Layout;
  })(_react.Component);

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(30);

  var _libLocation = __webpack_require__(4);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({ onClick: Link.handleClick.bind(this) }, props),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _libLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(31);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Logo' },
          _react2['default'].createElement('img', { src: 'logo.png' })
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _classNames = __webpack_require__(35);

  var _classNames2 = _interopRequireDefault(_classNames);

  __webpack_require__(32);

  var _Logo = __webpack_require__(14);

  var _Logo2 = _interopRequireDefault(_Logo);

  var _Link = __webpack_require__(13);

  var _Link2 = _interopRequireDefault(_Link);

  var Navigation = (function (_Component) {
    _inherits(Navigation, _Component);

    function Navigation(props) {
      _classCallCheck(this, Navigation);

      _get(Object.getPrototypeOf(Navigation.prototype), 'constructor', this).call(this, props);
      var locale;
      try {
        if (this.props.locale == null) {
          locale = "en";
        } else {
          locale = this.props.locale;
        }
      } catch (e) {
        locale = "en";
      }
      // console.log("locale " + locale);

      try {
        if (this.state.componentMount) {
          if (locale == "en") {
            //this is currently a chinese page
            if (window.location.pathname.indexOf("-cn") > -1) {
              if (window.location.pathname == "/index-cn") {
                window.location.href = "/?locale=en";
              } else {
                window.location.href = location.pathname.replace("-cn", "") + "?locale=en";
              }
            }
          } else {
            //this is currently an english page
            if (window.location.pathname.indexOf("-cn") == -1) {
              if (window.location.pathname == "/") {
                window.location.href = "/index-cn" + "?locale=cn";
              } else {
                window.location.href = window.location.pathname + "-cn" + "?locale=cn";
              }
            }
          }
        }
      } catch (e) {}
      this.state = { locale: locale };
      // console.log("state locale " + this.state.locale);
    }

    _createClass(Navigation, [{
      key: 'toggleChat',
      value: function toggleChat() {
        Tawk_API.toggle();
        return false;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.setState({ componentMount: true });
      }
    }, {
      key: 'onLocaleChange',
      value: function onLocaleChange() {
        var language_select = document.getElementById("language_select");
        // this is not synchronous
        this.setState({ locale: language_select.value }, function () {});
        // do something with new state
        // console.log(language_select.value);
        // console.log("path " + window.location.pathname)
        if (language_select.value == "en") {
          if (window.location.pathname == "/index-cn") {
            window.location.href = "/?locale=en";
          } else {
            window.location.href = window.location.pathname.replace("-cn", "") + "?locale=en";
          }
        } else {
          if (window.location.pathname == "/") {
            window.location.href = "/index-cn" + "?locale=cn";
          } else {
            window.location.href = window.location.pathname + "-cn" + "?locale=cn";
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Navigation-wrapper' },
          _react2['default'].createElement(_Logo2['default'], null),
          _react2['default'].createElement(
            'ul',
            { className: 'Navigation', role: 'menu' },
            _react2['default'].createElement(
              'li',
              { className: 'Navigation-item' },
              _react2['default'].createElement(
                'a',
                { className: (0, _classNames2['default'])('Navigation-link', this.props.path === '/' || this.props.path === '/index-cn' ? 'active' : ''), href: this.props.locale == "en" ? '/' : '/index-cn', onClick: _Link2['default'].handleClick },
                this.props.locale == "en" ? 'Home' : '家'
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'Navigation-item' },
              _react2['default'].createElement(
                'a',
                { className: (0, _classNames2['default'])('Navigation-link', this.props.path === '/about' || this.props.path === '/about-cn' ? 'active' : ''), href: 'http://www.ebeecare.com/about/' },
                this.props.locale == "en" ? 'About' : '关于'
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'Navigation-item' },
              _react2['default'].createElement(
                'a',
                { className: (0, _classNames2['default'])('Navigation-link', this.props.path === '/faq' || this.props.path === '/faq-cn' ? 'active' : ''), href: this.props.locale == "en" ? '/faq' : '/faq-cn', onClick: _Link2['default'].handleClick },
                this.props.locale == "en" ? 'FAQ' : '常问问题'
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'Navigation-item' },
              _react2['default'].createElement(
                'a',
                { className: (0, _classNames2['default'])('Navigation-link', this.props.path === '/services' || this.props.path === '/services-cn' ? 'active' : ''), href: 'http://www.ebeecare.com/services/' },
                this.props.locale == "en" ? 'Service' : '服务'
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'Navigation-item' },
              _react2['default'].createElement(
                'a',
                { className: (0, _classNames2['default'])('Navigation-link', this.props.path === '/contact' || this.props.path === '/contact-cn' ? 'active' : ''), href: this.props.locale == "en" ? '/contact' : '/contact-cn', onClick: _Link2['default'].handleClick },
                this.props.locale == "en" ? 'Contact' : '联系'
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'Navigation-item' },
              _react2['default'].createElement(
                'a',
                { className: (0, _classNames2['default'])('Navigation-link', this.props.path === '/ask-fatimah' || this.props.path === '/ask-fatimah-cn' ? 'active' : ''), onClick: this.toggleChat.bind(this), href: this.props.locale == "en" ? '#chat' : '#chat' },
                this.props.locale == "en" ? 'Ask Fatimah' : '问法蒂玛'
              )
            )
          ),
          _react2['default'].createElement(
            'select',
            { id: 'language_select', onChange: this.onLocaleChange.bind(this), value: this.props.locale },
            _react2['default'].createElement(
              'option',
              { value: 'en' },
              'English'
            ),
            _react2['default'].createElement(
              'option',
              { value: 'cn' },
              '中文'
            )
          )
        );
      }
    }]);

    return Navigation;
  })(_react.Component);

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Blog'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 1'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 2'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContainerContainer = __webpack_require__(2);

  var _componentsContainerContainer2 = _interopRequireDefault(_componentsContainerContainer);

  var gmapsCode = { __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7965194576377!2d103.78447491475404!3d1.29674169905421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a4fd6a29643%3A0x1cbb8a56dd8c9ccf!2s71+Ayer+Rajah+Crescent%2C+Singapore+139951!5e0!3m2!1sen!2ssg!4v1454553406755" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>' };

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _componentsContainerContainer2['default'],
            null,
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'h1',
                { className: 'text-center' },
                '联系eBeeCare'
              ),
              _react2['default'].createElement('div', { dangerouslySetInnerHTML: gmapsCode })
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContainerContainer = __webpack_require__(2);

  var _componentsContainerContainer2 = _interopRequireDefault(_componentsContainerContainer);

  var gmapsCode = { __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7965194576377!2d103.78447491475404!3d1.29674169905421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a4fd6a29643%3A0x1cbb8a56dd8c9ccf!2s71+Ayer+Rajah+Crescent%2C+Singapore+139951!5e0!3m2!1sen!2ssg!4v1454553406755" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>' };

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _componentsContainerContainer2['default'],
            null,
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'h1',
                { className: 'text-center' },
                'Contact eBeeCare'
              ),
              _react2['default'].createElement('div', { dangerouslySetInnerHTML: gmapsCode })
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
      value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContainerContainer = __webpack_require__(2);

  var _componentsContainerContainer2 = _interopRequireDefault(_componentsContainerContainer);

  var _default = (function (_Component) {
      _inherits(_default, _Component);

      function _default() {
          _classCallCheck(this, _default);

          _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
      }

      _createClass(_default, [{
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                      _componentsContainerContainer2['default'],
                      null,
                      _react2['default'].createElement(
                          'div',
                          null,
                          _react2['default'].createElement(
                              'h1',
                              { className: 'text-center' },
                              '常问问题'
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'faq-item' },
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-question' },
                              '1）可以注册和登记护士占用兼职护理任务在新加坡？'
                          ),
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-answer' },
                              '是的，也有在新加坡注册护士和登记护士兼职工作没有任何限制。'
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'faq-item' },
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-question' },
                              '2）护士让自己直接提供护理服务？'
                          ),
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-answer' },
                              '在第52条护士和助产士条例规定，'
                          ),
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-answer' },
                              '"（1）任何注册护士或登记护士可以实行他/她自己的账户护理或与其他合作伙伴除了与董事会的事先书面同意。'
                          ),
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-answer' },
                              '（2）注册助产士可以实行他/她自己的账户助产或与其他合作伙伴除了与董事会的事先书面同意。"'
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'faq-item' },
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-question' },
                              '3）是eBeeCare注册的私人护士代理？'
                          ),
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-answer' },
                              'eBeecare是在新加坡注册的家庭医疗保健服务提供商。我们能够在他们的院址的家庭提供家庭/私人护理服务，以及治疗和联合保健服务。'
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'faq-item' },
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-question' },
                              '4）不要其他护理机构使用兼职护士吗？'
                          ),
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-answer' },
                              '是的，几乎所有的政府和私营机构和护理服务提供商使用兼职护士。'
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'faq-item' },
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-question' },
                              '5）eBeecare护士资格提供家庭护理？'
                          ),
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-answer' },
                              '是的，我们所有的护士注册护士或登记护士与新加坡护士管理委员会。他们有至少2年的经验。我们不接受目前的外国护士。'
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'faq-item' },
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-question' },
                              '6）是否eBeecare护理人员的培训和资格家庭提供社会照顾？'
                          ),
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-answer' },
                              '是的，我们的看护者证书由WDA / AIC发行并经历了至少40个小时的培训。'
                          )
                      )
                  )
              );
          }
      }]);

      return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
      value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContainerContainer = __webpack_require__(2);

  var _componentsContainerContainer2 = _interopRequireDefault(_componentsContainerContainer);

  var _default = (function (_Component) {
      _inherits(_default, _Component);

      function _default() {
          _classCallCheck(this, _default);

          _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
      }

      _createClass(_default, [{
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                      _componentsContainerContainer2['default'],
                      null,
                      _react2['default'].createElement(
                          'div',
                          null,
                          _react2['default'].createElement(
                              'h1',
                              { className: 'text-center' },
                              'FAQ'
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'faq-item' },
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-question' },
                              '1) Can registered and enrolled nurses take up part time nursing assignments in Singapore?'
                          ),
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-answer' },
                              'Yes, there are no restrictions for part time work for RNs and ENs in Singapore.'
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'faq-item' },
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-question' },
                              '2) Are nurses allowed to provide nursing services on their own directly?'
                          ),
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-answer' },
                              'Section 52 of the ',
                              _react2['default'].createElement(
                                  'i',
                                  null,
                                  'Nurses and Midwives Regulations '
                              ),
                              ' states that'
                          ),
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-answer' },
                              '"(1) No registered nurse or enrolled nurse may practise nursing on his/her own account or in partnership with another except with the prior written consent of the Board.'
                          ),
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-answer' },
                              '(2) No registered midwife may practise midwifery on his/her own account or in partnership with another except with the prior written consent of the Board."'
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'faq-item' },
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-question' },
                              '3) Is eBeeCare a registered private nurses\' agency?'
                          ),
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-answer' },
                              'eBeecare is a registered Home Healthcare service provider in Singapore. We are able to provide home/private nursing services as well as therapy and allied health services for families in their home premises.'
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'faq-item' },
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-question' },
                              '4) Do other nursing agencies use part-time nurses too?'
                          ),
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-answer' },
                              'Yes, almost all government and private agencies and nursing service providers use part-time nurses.'
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'faq-item' },
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-question' },
                              '5) Are eBeecare nurses qualified to provide home nursing?'
                          ),
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-answer' },
                              'Yes, all our nurses are registered nurses or enrolled nurses with Singapore Nursing Board. They have at least 2 years of experience. We do not accept foreign nurses at the moment.'
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'faq-item' },
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-question' },
                              '6) Are eBeecare caregiver trained and qualified to provide home social care?'
                          ),
                          _react2['default'].createElement(
                              'p',
                              { className: 'faq-answer' },
                              'Yes, our caregivers have certificates issued by WDA/AIC and have undergone at least 40 hours of training.'
                          )
                      )
                  )
              );
          }
      }]);

      return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
      value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContainerContainer = __webpack_require__(2);

  var _componentsContainerContainer2 = _interopRequireDefault(_componentsContainerContainer);

  var _reactDatepicker = __webpack_require__(8);

  var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

  var _moment = __webpack_require__(7);

  var _moment2 = _interopRequireDefault(_moment);

  __webpack_require__(5);

  __webpack_require__(10);

  var _reactGoogleRecaptcha = __webpack_require__(9);

  var _reactGoogleRecaptcha2 = _interopRequireDefault(_reactGoogleRecaptcha);

  var _default = (function (_Component) {
      _inherits(_default, _Component);

      function _default(props) {
          _classCallCheck(this, _default);

          _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);
          this.state = { startDate: (0, _moment2['default'])(), sitekey: "6LcJmBgTAAAAAOcQwGqLbi-JxggAuVhnuBOb3UDY", captchaCompleted: false };
          this.handleChange = this.handleChange.bind(this);
      }

      _createClass(_default, [{
          key: 'loaded',

          // specifying your onload callback function
          value: function loaded() {
              console.log('Done!!!!');
          }
      }, {
          key: 'verifyCallback',
          value: function verifyCallback(response) {
              console.log(response);
              this.setState({
                  captchaCompleted: true
              });
          }
      }, {
          key: 'expiredCallback',
          value: function expiredCallback() {
              console.log("Recaptcha expired");
          }
      }, {
          key: 'handleChange',
          value: function handleChange(date) {
              this.setState({
                  startDate: date
              });
          }
      }, {
          key: 'radioButtonsClicked',
          value: function radioButtonsClicked(value) {
              //alert(value);
              var buttons = document.getElementsByName("meantesting-passed");
              for (var i = 0; i < buttons.length; i++) {
                  if (buttons[i].value == value) {
                      buttons[i].checked = true;
                  } else {
                      buttons[i].checked = false;
                  }
              }
          }
      }, {
          key: 'postalcodeInputChange',
          value: function postalcodeInputChange() {
              var postalCodeInput = document.getElementById("postal");
              var addressInput = document.getElementById("address");
              if (postalCodeInput.value.length == 6) {
                  try {
                      postalCodeInput.disabled = true;
                      var geocoder = new google.maps.Geocoder();
                      geocoder.geocode({
                          'address': postalCodeInput.value,
                          'region': 'SG'
                      }, function (results, status) {
                          if (status == google.maps.GeocoderStatus.OK) {
                              var position = results[0].geometry.location;
                              geocoder.geocode({
                                  latLng: position
                              }, function (responses) {
                                  if (responses && responses.length > 0) {
                                      addressInput.value = responses[0].formatted_address;
                                      postalCodeInput.disabled = false;
                                  } else {
                                      addressInput.value = "Invalid postal code.";
                                      postalCodeInput.disabled = false;
                                  }
                              });
                          } else {
                              postalCodeInput.disabled = false;
                              addressInput.value = "Invalid postal code.";
                          }
                      });
                  } catch (e) {
                      postalCodeInput.disabled = false;
                      addressInput.value = "Unable to find your address.";
                  }
              }
          }
      }, {
          key: 'submitForm',
          value: function submitForm() {
              if (!this.state.captchaCompleted) {
                  alert("Please complete Captcha before continuing");
              } else {
                  var fullname = document.getElementById("fullname").value;
                  var email = document.getElementById("email").value;
                  var mobile = document.getElementById("mobile").value;
                  var date = this.state.startDate;
                  var timeSelect = document.getElementById("time");
                  var time = timeSelect.options[timeSelect.selectedIndex].value;
                  var postal = document.getElementById("postal").value;
                  var floor = document.getElementById("floor").value;
                  var unit = document.getElementById("unit").value;
                  var address = document.getElementById("address").value;
                  var medicalSelect = document.getElementById("medical");
                  var medical = medicalSelect.options[medicalSelect.selectedIndex].value;
                  var family = document.getElementById("family").checked;
                  var meantesting = document.getElementsByName('meantesting-passed');
                  var meantesting_val = "";
                  for (var i = 0; i < meantesting.length; i++) {
                      if (meantesting[i].checked) {
                          meantesting_val = meantesting[i].value;
                          break;
                      }
                  }
                  var referral_code = document.getElementById('referral').value;
                  var messages = [];

                  if (fullname.trim() == "") {
                      messages.push("Invalid/Blank name");
                  }
                  if (email.trim() == "" || email.indexOf("@") < 1) {
                      messages.push("Invalid/Blank email");
                  }
                  if (mobile.trim() == "" || mobile.toString().length != 8) {
                      messages.push("Invalid/Blank mobile");
                  }
                  if (date == null) {
                      messages.push("Invalid/Blank date");
                  }
                  if (time.trim() == "") {
                      messages.push("Please select a valid time slot");
                  }

                  if (postal.trim() == "") {
                      messages.push("Invalid/Blank postal code");
                  }
                  if (floor.trim() == "") {
                      messages.push("Invalid/Blank floor");
                  }
                  if (unit.trim() == "") {
                      messages.push("Invalid/Blank unit");
                  }
                  if (address.trim() == "") {
                      messages.push("Invalid/Blank address");
                  }
                  if (medical.trim() == "") {
                      messages.push("Please select a medical condition");
                  }
                  if (meantesting_val.trim() == "") {
                      messages.push("Please select a valid mean testing.");
                  }

                  if (messages.length > 0) {

                      alert(messages.join('\n'));
                  } else {
                      //remove the extra letters

                      var timeSplitted = time.split("-");

                      var startTime = timeSplitted[0];
                      var endTime = timeSplitted[1];
                      var startDateTime = date.clone().startOf('day').hours(startTime).minutes(0).seconds(0);
                      var endDateTime = date.clone().startOf('day').hours(endTime).minutes(0).seconds(0);
                      var startDTString = startDateTime.format("YYYY-MM-DD HH:mm:ss");
                      var endDTString = endDateTime.format("YYYY-MM-DD HH:mm:ss");
                      console.log(startDTString + " - " + endDTString);
                      var jsonParams = {
                          "fullName": fullname,
                          "email": email,
                          "mobile": mobile,
                          "date": date,
                          "time": time,
                          "dateTimeStart": startDTString,
                          "dateTimeEnd": endDTString,
                          "postal": postal,
                          "floor": floor,
                          "unit": unit,
                          "address": address,
                          "medical": medical,
                          "family": family,
                          "meantesting_val": meantesting_val,
                          "referral": referral_code
                      };
                      console.log("everything " + JSON.stringify(jsonParams));
                      fetch('http://161.202.19.121/api/registerFreeCampaignUsers', {
                          method: 'post',
                          headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json',
                              'Authorization': 'Basic ' + btoa("secret:secret0nlyWeilsonKnowsShhh852~")
                          },
                          body: JSON.stringify(jsonParams)
                      }).then(function (response) {
                          return response.json();
                      }).then(function (data) {
                          if (data.status == 1) {
                              alert("Successful call : " + data.message);
                              location.reload(true);
                              this.setState({
                                  captchaCompleted: false
                              });
                          } else {
                              alert("Unsuccessful call : " + data.message);
                          }
                      })['catch'](function () {
                          console.log("Error ");
                      });
                  }
              }
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'Body' },
                  _react2['default'].createElement(
                      'div',
                      { className: 'top-header-label' },
                      _react2['default'].createElement(
                          'h2',
                          null,
                          _react2['default'].createElement(
                              'b',
                              null,
                              ' 注册一个免费家庭护理今天的访问！ '
                          )
                      )
                  ),
                  _react2['default'].createElement(
                      _componentsContainerContainer2['default'],
                      null,
                      _react2['default'].createElement(
                          'div',
                          { className: 'content-details-top' },
                          _react2['default'].createElement(
                              'div',
                              { className: 'content-details-left' },
                              _react2['default'].createElement(
                                  'h3',
                                  null,
                                  _react2['default'].createElement(
                                      'b',
                                      null,
                                      '我们提供'
                                  )
                              ),
                              _react2['default'].createElement(
                                  'p',
                                  { className: 'description' },
                                  'eBeeCare免费家庭护理的访问计划旨在提升老年人住在自己的房子的生活。我们的慈善老人将享受半小时至一小时上门安全检查，聊天，笑了一杯茶来增强一个孤独的人的生命，并让他们与他们的日常事务和环境之外的人的社会交往。'
                              ),
                              _react2['default'].createElement(
                                  'h3',
                                  null,
                                  _react2['default'].createElement(
                                      'b',
                                      null,
                                      '服务包括在家访'
                                  )
                              ),
                              _react2['default'].createElement(
                                  'ul',
                                  { className: 'no-style-list description' },
                                  _react2['default'].createElement(
                                      'li',
                                      null,
                                      _react2['default'].createElement(
                                          'p',
                                          null,
                                          _react2['default'].createElement(
                                              'b',
                                              null,
                                              '家庭健康体检'
                                          )
                                      ),
                                      _react2['default'].createElement(
                                          'p',
                                          { className: 'description' },
                                          '我们直接提供专业血presure，脉搏，呼吸频率，体重，肌肉力量和健康评估服务到您家。'
                                      )
                                  ),
                                  _react2['default'].createElement(
                                      'li',
                                      null,
                                      _react2['default'].createElement(
                                          'p',
                                          null,
                                          _react2['default'].createElement(
                                              'b',
                                              null,
                                              '出院后恢复'
                                          )
                                      ),
                                      _react2['default'].createElement(
                                          'p',
                                          { className: 'description' },
                                          '我们从医院出院病人提供家庭为基础的慢性疾病，精神病和绝症护理服务。'
                                      )
                                  ),
                                  _react2['default'].createElement(
                                      'li',
                                      null,
                                      _react2['default'].createElement(
                                          'p',
                                          null,
                                          _react2['default'].createElement(
                                              'b',
                                              null,
                                              '首页保姆培训'
                                          )
                                      ),
                                      _react2['default'].createElement(
                                          'p',
                                          { className: 'description' },
                                          '我们把有经验的护士到你家来教你如何处理家庭成员中风，老年痴呆症和精神病。'
                                      )
                                  )
                              ),
                              _react2['default'].createElement(
                                  'h3',
                                  null,
                                  _react2['default'].createElement(
                                      'b',
                                      null,
                                      'WHO IS提供服务?'
                                  )
                              ),
                              _react2['default'].createElement(
                                  'p',
                                  { className: 'description' },
                                  '在这个项目的所有服务供应商的注册医疗专业人士，用最少有两年与地方或私营医院的经验。他们中许多人都是自愿的基础上。'
                              ),
                              _react2['default'].createElement(
                                  'p',
                                  { className: 'special-text description' },
                                  _react2['default'].createElement(
                                      'i',
                                      null,
                                      '“研究表明，经常谁志愿的人活得更长。” '
                                  ),
                                  '-艾伦克莱恩 '
                              )
                          ),
                          _react2['default'].createElement(
                              'div',
                              { className: 'content-details-right' },
                              _react2['default'].createElement(
                                  'div',
                                  { className: 'sign-up-form' },
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'header' },
                                      '注册及获得免费上门访问护理'
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement('input', { className: 'input fill-width', type: 'text', name: 'fullname', id: 'fullname', placeholder: '全名*' })
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement('input', { className: 'input fill-width', type: 'email', name: 'email', id: 'email', placeholder: '电邮*' })
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement('input', { className: 'input fill-width', type: 'number', name: 'mobile', id: 'mobile', placeholder: '手机*' })
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement(_reactDatepicker2['default'], {
                                          className: 'input',
                                          selected: this.state.startDate,
                                          onChange: this.handleChange.bind(this),
                                          isClearable: true,
                                          placeholderText: '日期' })
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement(
                                          'select',
                                          { name: 'time', id: 'time', className: 'input fill-width', defaultValue: '' },
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '', hidden: true, className: 'place_holder' },
                                              '时间*'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '7-9' },
                                              '7am - 9am'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '9-11' },
                                              '9am - 11am'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '11-1' },
                                              '11am - 1pm'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '13-15' },
                                              '1pm - 3pm'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '15-17' },
                                              '3pm - 5pm'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '17-19' },
                                              '5pm - 7pm'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '19-21' },
                                              '7pm - 9pm'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '21-23' },
                                              '9pm - 11pm'
                                          )
                                      )
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement('input', { className: 'input fill-width', type: 'text', name: 'postal', id: 'postal', placeholder: '邮政编码*', onChange: this.postalcodeInputChange.bind(this) })
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement('input', { type: 'number', name: 'floor', id: 'floor', placeholder: '楼*', className: 'input col4' }),
                                      ' - ',
                                      _react2['default'].createElement('input', { type: 'number', name: 'unit', id: 'unit', placeholder: '门牌*', className: 'input col2' })
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement('textarea', { className: 'input fill-width', name: 'address', id: 'address', placeholder: '地址*' })
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement(
                                          'select',
                                          { name: 'medical', id: 'medical', className: 'input fill-width', defaultValue: '' },
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '', disabled: true, hidden: true, className: 'place_holder' },
                                              '免费服务类型*'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: 'Home Health Checkup' },
                                              '家庭健康检查'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: 'Post-discharge Recovery' },
                                              '出院后恢复'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: 'Home Caregiver Training' },
                                              '首页保姆培训'
                                          )
                                      )
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement(
                                          'label',
                                          { className: 'input fill-width' },
                                          _react2['default'].createElement('input', { type: 'checkbox', name: 'family', id: 'family' }),
                                          ' 与家人共处'
                                      )
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement(
                                          'p',
                                          { className: 'col1' },
                                          '平均测试通过呢?'
                                      ),
                                      _react2['default'].createElement('input', { type: 'radio', name: 'meantesting-passed', value: 'yes', onClick: this.radioButtonsClicked.bind(this, "yes") }),
                                      ' 是  ',
                                      _react2['default'].createElement('input', { type: 'radio', name: 'meantesting-passed', value: 'no', onClick: this.radioButtonsClicked.bind(this, "no") }),
                                      ' 没有  ',
                                      _react2['default'].createElement('input', { type: 'radio', name: 'meantesting-passed', value: 'unknown', onClick: this.radioButtonsClicked.bind(this, "unknown") }),
                                      ' 未知  '
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement('input', { className: 'input fill-width', type: 'text', name: 'referral', id: 'referral', placeholder: '推荐码' })
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement(_reactGoogleRecaptcha2['default'], {
                                          ref: 'recaptcha',
                                          sitekey: this.state.sitekey,
                                          onChange: this.verifyCallback.bind(this)
                                      })
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'submit', onClick: this.submitForm.bind(this) },
                                      '注册'
                                  )
                              )
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'content-details-bottom' },
                          _react2['default'].createElement(
                              'div',
                              { className: 'content-details-left' },
                              _react2['default'].createElement(
                                  'div',
                                  { className: 'how-it-work-info' },
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'details' },
                                      _react2['default'].createElement(
                                          'h2',
                                          null,
                                          '它是怎么工作？'
                                      ),
                                      _react2['default'].createElement(
                                          'p',
                                          null,
                                          '第1步：注册与我们订家访插槽。.'
                                      ),
                                      _react2['default'].createElement(
                                          'p',
                                          null,
                                          '第2步：电子邮件将发送到您预订的确认。'
                                      ),
                                      _react2['default'].createElement(
                                          'p',
                                          null,
                                          '第3步：我们会通知你在访问前一周'
                                      )
                                  ),
                                  _react2['default'].createElement('img', { src: 'PrettyNurse.png' })
                              )
                          ),
                          _react2['default'].createElement(
                              'div',
                              { className: 'content-details-right' },
                              _react2['default'].createElement(
                                  'div',
                                  { className: 'nurse-comment-section' },
                                  _react2['default'].createElement('img', { src: 'PrettyNurseIcon.png' }),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'content' },
                                      _react2['default'].createElement(
                                          'div',
                                          { className: 'comment' },
                                          '“我很享受与我们的资深志愿者工作，在他们的家。”'
                                      ),
                                      _react2['default'].createElement(
                                          'div',
                                          { className: 'name' },
                                          '具有讽刺意味的​​法蒂玛（医院护士）'
                                      )
                                  )
                              )
                          )
                      )
                  )
              );
          }
      }]);

      return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
      value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContainerContainer = __webpack_require__(2);

  var _componentsContainerContainer2 = _interopRequireDefault(_componentsContainerContainer);

  var _reactDatepicker = __webpack_require__(8);

  var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

  var _moment = __webpack_require__(7);

  var _moment2 = _interopRequireDefault(_moment);

  __webpack_require__(5);

  __webpack_require__(10);

  var _reactGoogleRecaptcha = __webpack_require__(9);

  var _reactGoogleRecaptcha2 = _interopRequireDefault(_reactGoogleRecaptcha);

  var _default = (function (_Component) {
      _inherits(_default, _Component);

      function _default(props) {
          _classCallCheck(this, _default);

          _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);
          this.state = { startDate: (0, _moment2['default'])(), sitekey: "6LcJmBgTAAAAAOcQwGqLbi-JxggAuVhnuBOb3UDY", captchaCompleted: false };
          this.handleChange = this.handleChange.bind(this);
      }

      _createClass(_default, [{
          key: 'loaded',

          // specifying your onload callback function
          value: function loaded() {
              console.log('Done!!!!');
          }
      }, {
          key: 'verifyCallback',
          value: function verifyCallback(response) {
              console.log(response);
              this.setState({
                  captchaCompleted: true
              });
          }
      }, {
          key: 'expiredCallback',
          value: function expiredCallback() {
              console.log("Recaptcha expired");
          }
      }, {
          key: 'handleChange',
          value: function handleChange(date) {
              this.setState({
                  startDate: date
              });
          }
      }, {
          key: 'radioButtonsClicked',
          value: function radioButtonsClicked(value) {
              //alert(value);
              var buttons = document.getElementsByName("meantesting-passed");
              for (var i = 0; i < buttons.length; i++) {
                  if (buttons[i].value == value) {
                      buttons[i].checked = true;
                  } else {
                      buttons[i].checked = false;
                  }
              }
          }
      }, {
          key: 'postalcodeInputChange',
          value: function postalcodeInputChange() {
              var postalCodeInput = document.getElementById("postal");
              var addressInput = document.getElementById("address");
              if (postalCodeInput.value.length == 6) {
                  try {
                      postalCodeInput.disabled = true;
                      var geocoder = new google.maps.Geocoder();
                      geocoder.geocode({
                          'address': postalCodeInput.value,
                          'region': 'SG'
                      }, function (results, status) {
                          if (status == google.maps.GeocoderStatus.OK) {
                              var position = results[0].geometry.location;
                              geocoder.geocode({
                                  latLng: position
                              }, function (responses) {
                                  if (responses && responses.length > 0) {
                                      addressInput.value = responses[0].formatted_address;
                                      postalCodeInput.disabled = false;
                                  } else {
                                      addressInput.value = "Invalid postal code.";
                                      postalCodeInput.disabled = false;
                                  }
                              });
                          } else {
                              postalCodeInput.disabled = false;
                              addressInput.value = "Invalid postal code.";
                          }
                      });
                  } catch (e) {
                      postalCodeInput.disabled = false;
                      addressInput.value = "Unable to find your address.";
                  }
              }
          }
      }, {
          key: 'submitForm',
          value: function submitForm() {
              if (!this.state.captchaCompleted) {
                  alert("Please complete Captcha before continuing");
              } else {
                  var fullname = document.getElementById("fullname").value;
                  var email = document.getElementById("email").value;
                  var mobile = document.getElementById("mobile").value;
                  var date = this.state.startDate;
                  var timeSelect = document.getElementById("time");
                  var time = timeSelect.options[timeSelect.selectedIndex].value;
                  var postal = document.getElementById("postal").value;
                  var floor = document.getElementById("floor").value;
                  var unit = document.getElementById("unit").value;
                  var address = document.getElementById("address").value;
                  var medicalSelect = document.getElementById("medical");
                  var medical = medicalSelect.options[medicalSelect.selectedIndex].value;
                  var family = document.getElementById("family").checked;
                  var meantesting = document.getElementsByName('meantesting-passed');
                  var meantesting_val = "";
                  for (var i = 0; i < meantesting.length; i++) {
                      if (meantesting[i].checked) {
                          meantesting_val = meantesting[i].value;
                          break;
                      }
                  }
                  var referral_code = document.getElementById('referral').value;
                  var messages = [];

                  if (fullname.trim() == "") {
                      messages.push("Invalid/Blank name");
                  }
                  if (email.trim() == "" || email.indexOf("@") < 1) {
                      messages.push("Invalid/Blank email");
                  }
                  if (mobile.trim() == "" || mobile.toString().length != 8) {
                      messages.push("Invalid/Blank mobile");
                  }
                  if (date == null) {
                      messages.push("Invalid/Blank date");
                  }
                  if (time.trim() == "") {
                      messages.push("Please select a valid time slot");
                  }

                  if (postal.trim() == "") {
                      messages.push("Invalid/Blank postal code");
                  }
                  if (floor.trim() == "") {
                      messages.push("Invalid/Blank floor");
                  }
                  if (unit.trim() == "") {
                      messages.push("Invalid/Blank unit");
                  }
                  if (address.trim() == "") {
                      messages.push("Invalid/Blank address");
                  }
                  if (medical.trim() == "") {
                      messages.push("Please select a medical condition");
                  }
                  if (meantesting_val.trim() == "") {
                      messages.push("Please select a valid mean testing.");
                  }

                  if (messages.length > 0) {

                      alert(messages.join('\n'));
                  } else {
                      //remove the extra letters

                      var timeSplitted = time.split("-");

                      var startTime = timeSplitted[0];
                      var endTime = timeSplitted[1];
                      var startDateTime = date.clone().startOf('day').hours(startTime).minutes(0).seconds(0);
                      var endDateTime = date.clone().startOf('day').hours(endTime).minutes(0).seconds(0);
                      var startDTString = startDateTime.format("YYYY-MM-DD HH:mm:ss");
                      var endDTString = endDateTime.format("YYYY-MM-DD HH:mm:ss");
                      console.log(startDTString + " - " + endDTString);
                      var jsonParams = {
                          "fullName": fullname,
                          "email": email,
                          "mobile": mobile,
                          "date": date,
                          "time": time,
                          "dateTimeStart": startDTString,
                          "dateTimeEnd": endDTString,
                          "postal": postal,
                          "floor": floor,
                          "unit": unit,
                          "address": address,
                          "medical": medical,
                          "family": family,
                          "meantesting_val": meantesting_val,
                          "referral": referral_code
                      };
                      console.log("everything " + JSON.stringify(jsonParams));
                      fetch('http://161.202.19.121/api/registerFreeCampaignUsers', {
                          method: 'post',
                          headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json',
                              'Authorization': 'Basic ' + btoa("secret:secret0nlyWeilsonKnowsShhh852~")
                          },
                          body: JSON.stringify(jsonParams)
                      }).then(function (response) {
                          return response.json();
                      }).then(function (data) {
                          if (data.status == 1) {
                              alert("Successful call : " + data.message);
                              location.reload(true);
                              this.setState({
                                  captchaCompleted: false
                              });
                          } else {
                              alert("Unsuccessful call : " + data.message);
                          }
                      })['catch'](function () {
                          console.log("Error ");
                      });
                  }
              }
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'Body' },
                  _react2['default'].createElement(
                      'div',
                      { className: 'top-header-label' },
                      _react2['default'].createElement(
                          'h2',
                          null,
                          _react2['default'].createElement(
                              'b',
                              null,
                              ' Sign Up for a FREE Home Nursing Visit Today! '
                          )
                      )
                  ),
                  _react2['default'].createElement(
                      _componentsContainerContainer2['default'],
                      null,
                      _react2['default'].createElement(
                          'div',
                          { className: 'content-details-top' },
                          _react2['default'].createElement(
                              'div',
                              { className: 'content-details-left' },
                              _react2['default'].createElement(
                                  'h3',
                                  null,
                                  _react2['default'].createElement(
                                      'b',
                                      null,
                                      'WHAT ARE WE OFFERING'
                                  )
                              ),
                              _react2['default'].createElement(
                                  'p',
                                  { className: 'description' },
                                  'eBeeCare\'s free home nursing visit program aims to enhance the lives of elderly staying at home. Elderly in our program will enjoy a half to one hour home safety inspection, chat and laugh over a cuppa to enhance a lonely person’s life and give them social contact with someone outside their normal routine and environment.'
                              ),
                              _react2['default'].createElement(
                                  'h3',
                                  null,
                                  _react2['default'].createElement(
                                      'b',
                                      null,
                                      'SERVICES INCLUDED IN A HOME VISIT'
                                  )
                              ),
                              _react2['default'].createElement(
                                  'ul',
                                  { className: 'no-style-list description' },
                                  _react2['default'].createElement(
                                      'li',
                                      null,
                                      _react2['default'].createElement(
                                          'p',
                                          null,
                                          _react2['default'].createElement(
                                              'b',
                                              null,
                                              'Home Health Checkup'
                                          )
                                      ),
                                      _react2['default'].createElement(
                                          'p',
                                          { className: 'description' },
                                          'We deliver a professional blood pressure, pulse rate, respiratory rate, BMI, muscle strength and health assessment service directly at your home.'
                                      )
                                  ),
                                  _react2['default'].createElement(
                                      'li',
                                      null,
                                      _react2['default'].createElement(
                                          'p',
                                          null,
                                          _react2['default'].createElement(
                                              'b',
                                              null,
                                              'Post-discharge Recovery'
                                          )
                                      ),
                                      _react2['default'].createElement(
                                          'p',
                                          { className: 'description' },
                                          'We provide home-based chronic illness, mental illness and terminal illness care services for patients discharged from hospitals.'
                                      )
                                  ),
                                  _react2['default'].createElement(
                                      'li',
                                      null,
                                      _react2['default'].createElement(
                                          'p',
                                          null,
                                          _react2['default'].createElement(
                                              'b',
                                              null,
                                              'Home Caregiver Training'
                                          )
                                      ),
                                      _react2['default'].createElement(
                                          'p',
                                          { className: 'description' },
                                          'We bring experienced nurses to your home to teach you how to handle family members with stroke, dementia and mental illnesses.'
                                      )
                                  )
                              ),
                              _react2['default'].createElement(
                                  'h3',
                                  null,
                                  _react2['default'].createElement(
                                      'b',
                                      null,
                                      'WHO IS PROVIDING THE SERVICE?'
                                  )
                              ),
                              _react2['default'].createElement(
                                  'p',
                                  { className: 'description' },
                                  'All service providers in this program are registered healthcare professionals with at least two years’ experience in local or private hospitals. Most of them are providing this service on a volunteering basis. '
                              ),
                              _react2['default'].createElement(
                                  'p',
                                  { className: 'special-text description' },
                                  _react2['default'].createElement(
                                      'i',
                                      null,
                                      '“Research has shown that people who volunteer often live longer.” '
                                  ),
                                  '- Allen Klein'
                              )
                          ),
                          _react2['default'].createElement(
                              'div',
                              { className: 'content-details-right' },
                              _react2['default'].createElement(
                                  'div',
                                  { className: 'sign-up-form' },
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'header' },
                                      'Sign Up & get a FREE Home Nursing Visit'
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement('input', { className: 'input fill-width', type: 'text', name: 'fullname', id: 'fullname', placeholder: 'Enter Full Name*' })
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement('input', { className: 'input fill-width', type: 'email', name: 'email', id: 'email', placeholder: 'Enter Email*' })
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement('input', { className: 'input fill-width', type: 'number', name: 'mobile', id: 'mobile', placeholder: 'Enter Mobile Phone*' })
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement(_reactDatepicker2['default'], {
                                          className: 'input',
                                          selected: this.state.startDate,
                                          onChange: this.handleChange.bind(this),
                                          isClearable: true,
                                          placeholderText: 'Select date' })
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement(
                                          'select',
                                          { name: 'time', id: 'time', className: 'input fill-width', defaultValue: '' },
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '', hidden: true, className: 'place_holder' },
                                              'Select Time*'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '7-9' },
                                              '7am - 9 am'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '9-11' },
                                              '9am - 11am'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '11-1' },
                                              '11am - 1pm'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '13-15' },
                                              '1pm - 3pm'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '15-17' },
                                              '3pm - 5pm'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '17-19' },
                                              '5pm - 7pm'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '19-21' },
                                              '7pm - 9pm'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '21-23' },
                                              '9pm - 11pm'
                                          )
                                      )
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement('input', { className: 'input fill-width', type: 'text', name: 'postal', id: 'postal', placeholder: 'Postal Code*', onChange: this.postalcodeInputChange.bind(this) })
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement('input', { type: 'number', name: 'floor', id: 'floor', placeholder: 'Floor*', className: 'input col4' }),
                                      ' - ',
                                      _react2['default'].createElement('input', { type: 'number', name: 'unit', id: 'unit', placeholder: 'Unit number*', className: 'input col2' })
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement('textarea', { className: 'input fill-width', name: 'address', id: 'address', placeholder: 'Address*' })
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement(
                                          'select',
                                          { name: 'medical', id: 'medical', className: 'input fill-width', defaultValue: '' },
                                          _react2['default'].createElement(
                                              'option',
                                              { value: '', disabled: true, hidden: true, className: 'place_holder' },
                                              'Free Service Type*'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: 'Home Health Checkup' },
                                              'Home Health Checkup'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: 'Post-discharge Recovery' },
                                              'Post-discharge Recovery'
                                          ),
                                          _react2['default'].createElement(
                                              'option',
                                              { value: 'Home Caregiver Training' },
                                              'Home Caregiver Training'
                                          )
                                      )
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement(
                                          'label',
                                          { className: 'input fill-width' },
                                          _react2['default'].createElement('input', { type: 'checkbox', name: 'family', id: 'family' }),
                                          ' Stay with family members'
                                      )
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement(
                                          'p',
                                          { className: 'col1' },
                                          'Mean testing passed?'
                                      ),
                                      _react2['default'].createElement('input', { type: 'radio', name: 'meantesting-passed', value: 'yes', onClick: this.radioButtonsClicked.bind(this, "yes") }),
                                      ' Yes  ',
                                      _react2['default'].createElement('input', { type: 'radio', name: 'meantesting-passed', value: 'no', onClick: this.radioButtonsClicked.bind(this, "no") }),
                                      ' No  ',
                                      _react2['default'].createElement('input', { type: 'radio', name: 'meantesting-passed', value: 'unknown', onClick: this.radioButtonsClicked.bind(this, "unknown") }),
                                      ' Unknown  '
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement('input', { className: 'input fill-width', type: 'text', name: 'referral', id: 'referral', placeholder: 'Referral/ Invite Code' })
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'item' },
                                      _react2['default'].createElement(_reactGoogleRecaptcha2['default'], {
                                          ref: 'recaptcha',
                                          sitekey: this.state.sitekey,
                                          onChange: this.verifyCallback.bind(this)
                                      })
                                  ),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'submit', onClick: this.submitForm.bind(this) },
                                      'Sign Up'
                                  )
                              )
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'content-details-bottom' },
                          _react2['default'].createElement(
                              'div',
                              { className: 'content-details-left' },
                              _react2['default'].createElement(
                                  'div',
                                  { className: 'how-it-work-info' },
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'details' },
                                      _react2['default'].createElement(
                                          'h2',
                                          null,
                                          'HOW IT WORKS?'
                                      ),
                                      _react2['default'].createElement(
                                          'p',
                                          null,
                                          'Step 1: Sign up with us and book a timeslot for your home visit.'
                                      ),
                                      _react2['default'].createElement(
                                          'p',
                                          null,
                                          'Step 2: Email will be sent to you with a booking confirmation.'
                                      ),
                                      _react2['default'].createElement(
                                          'p',
                                          null,
                                          'Step 3: We will inform you of the visit one week before.'
                                      )
                                  ),
                                  _react2['default'].createElement('img', { src: 'PrettyNurse.png' })
                              )
                          ),
                          _react2['default'].createElement(
                              'div',
                              { className: 'content-details-right' },
                              _react2['default'].createElement(
                                  'div',
                                  { className: 'nurse-comment-section' },
                                  _react2['default'].createElement('img', { src: 'PrettyNurseIcon.png' }),
                                  _react2['default'].createElement(
                                      'div',
                                      { className: 'content' },
                                      _react2['default'].createElement(
                                          'div',
                                          { className: 'comment' },
                                          '"I enjoyed the volunteer work with our senior at his home."'
                                      ),
                                      _react2['default'].createElement(
                                          'div',
                                          { className: 'name' },
                                          'Fatimah Naroni (Staff nurse)'
                                      )
                                  )
                              )
                          )
                      )
                  )
              );
          }
      }]);

      return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Container {\n  margin: 0 auto\n}\n\n.Container.nav {\n  background-color: #999;\n  width: 100% !important\n}\n\n@media (max-width: 768px) {\n  .Container {\n    width: 97%;\n  }\n}\n\n@media (min-width: 768px) {\n  .Container {\n    width: calc(768px - 18px);\n  }\n}\n\n@media (min-width: 992px) {\n  .Container {\n    width: calc(992px - 22px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .Container {\n    width: calc(1200px - 30px);\n  }\n}\n", ""]);

  // exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n.Footer {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.Footer {\n  margin: 0 auto;\n  padding: 40px 0 20px 0;\n  color: #ffffff;\n  background-color: #fdbc1d;\n  font-weight: 600;\n  font-size: 15px;\n}\n\n.Footer-list {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0 0 5em 0;\n  list-style: none;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start\n}\n\n@media (max-width: 768px) {\n  .Footer-list {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n  }\n  }\n\n.Footer-item {\n  padding: 0 0.5em;\n}\n\n.Footer-item .Footer-maps-button {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  max-height: 32px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #eee;\n}\n\n.Footer-item .Footer-maps-button .Footer-maps-label {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  line-height: 0.75em;\n  padding: 5px;\n  color: #444;\n}\n\n.Footer-item .Footer-maps-button:hover {\n  -webkit-box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);\n  -ms-box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);\n  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);\n}\n\n.Footer-item .Footer-social-media {\n  color: #fbeaaa;\n  margin-left: 10px\n}\n\n.Footer-item .Footer-social-media:hover {\n  color: #fff;\n}\n\n.Footer-tel {\n  font-size: 25px;\n  font-weight: bold;\n}\n", ""]);

  // exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio, canvas, progress, video {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden], template {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active, a:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb, strong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode, kbd, pre, samp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton, input, optgroup, select, textarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton, select {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton, html input[type=\"button\"], input[type=\"reset\"], input[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled], html input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner, input::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button, input[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button, input[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd, th {\n  padding: 0;\n}\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\na.btn-primary, .Actions .Actions-list .Actions-item-title, .Actions .Actions-list .Actions-item-button {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: #ffffff;\n  color: #444;\n  font-family: 'Proxima Nova',sans-serif;\n  font-size: 18px;\n}\n\nh1 {\n  color: #f78d00;\n  font-weight: normal;\n  font-size: 40px;\n}\n\nh2 {\n  font-weight: normal;\n}\n\na {\n  color: #fff;\n  text-decoration: none\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nstrong {\n  font-weight: 600;\n}\n\nhr {\n  border: 0;\n  border-top: 1px solid #E0DFDF;\n  border-bottom: 1px solid #FEFEFE;\n  background: transparent url(" + __webpack_require__(34) + ") no-repeat center 0;\n  height: 6px;\n}\n\na.btn {\n  text-decoration: none;\n  cursor:pointer;\n}\n\na.btn-primary {\n  display: inline-block;\n  background-color: #f78d00;\n  text-decoration: none;\n  color: #fff;\n  width: 260px;\n  padding: 0.3em 0 0.3em 0;\n  text-transform: uppercase;\n  font-size: 25px;\n  cursor:pointer\n}\n\na.btn-primary:hover {\n  background-color: #fdbc1d;\n}\n\n.Layout {\n  margin: 0 auto;\n}\n\n.NavWrapper {\n  background-color: #FFF;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.featured {\n  font-size: 25px;\n  line-height: 2em;\n}\n\n.Banner .Banner-item {\n  height: 500px;\n  background-color: #ffffff;\n  background-position: center;\n  -webkit-background-size: cover;\n          background-size: cover;\n  background-repeat: no-repeat\n}\n\n.Banner .Banner-item-text-wrapper {\n  position: relative;\n  color: #fff;\n}\n\n.Banner .Banner-item-text-wrapper .Banner-item-text {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  -webkit-text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n  -moz-text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n  -ms-text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n\n.Banner .Banner-item-text-wrapper .Banner-item-button {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n}\n\n.Banner #Banner-item-1 .Banner-item-text-1 {\n  top: 140px;\n  font-size: 25px;\n}\n\n.Banner #Banner-item-1 .Banner-item-text-2 {\n  top: 200px;\n  font-weight: bold;\n  font-size: 60px;\n  text-transform: uppercase;\n}\n\n.Banner #Banner-item-1 .Banner-item-text-3 {\n  top: 272px;\n  font-size: 37px;\n}\n\n.Banner #Banner-item-1 .Banner-item-text-4 {\n  top: 340px;\n}\n\n@media (max-width: 768px) {\n\n  .Banner .Banner-item {\n    background-position: -550px 0px;\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .Banner #Banner-item-1 .Banner-item-text-1 {\n    top: 70px;\n  }\n\n  .Banner #Banner-item-1 .Banner-item-text-2 {\n    top: 140px;\n  }\n\n  .Banner #Banner-item-1 .Banner-item-text-3 {\n    top: 300px;\n  }\n\n  .Banner #Banner-item-1 .Banner-item-text-4 {\n    top: 400px;\n  }\n    }\n\n.Features-list {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin: 0 0 5em 0;\n  list-style: none;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding: 50px 0 0 0\n}\n\n@media (max-width: 768px) {\n\n  .Features-list {\n    padding: 0;\n  }\n  }\n\n.Features-item {\n  padding: 0 0.5em;\n  width: 200px;\n  text-align: center\n}\n\n@media (max-width: 768px) {\n\n  .Features-item {\n    width: 100%;\n  }\n  }\n\n.Features-item-icon {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.Features-item-title {\n  color: #f78d00;\n  font-size: 22px;\n  padding: 5px 0 5px 0;\n}\n\n.Actions {\n  background-color: #fdbc1d;\n}\n\n.Actions .Actions-list {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0 0 5em 0;\n  padding-top: 60px;\n  padding-bottom: 60px;\n  list-style: none;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.Actions .Actions-list .Actions-item {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  padding: 20px 60px;\n  text-align: center;\n}\n\n.Actions .Actions-list .Actions-item-title {\n  color: #ffffff;\n  font-weight: 100;\n  font-size: 40px;\n  text-transform: uppercase;\n  padding: 5px;\n}\n\n.Actions .Actions-list .Actions-item-button {\n  display: inline-block;\n  padding: 5px;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 26px;\n  text-transform: uppercase;\n  width: 260px;\n  border: 1px solid #ffffff;\n  border-radius: 5px\n}\n\n.Actions .Actions-list .Actions-item-button:hover {\n  background-color: rgba(255, 255, 255, 0.25);\n}\n\n@media (max-width: 768px) {\n\n  .Actions .Actions-list {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n  }\n    }\n\n@media (min-width: 768px) {\n\n  .Actions .Actions-list .Actions-item + .Actions-item {\n    border-left: 1px solid #ffffff;\n  }\n    }\n\n@media (max-width: 768px) {\n\n  .Actions .Actions-list .Actions-item + .Actions-item {\n    border-top: 1px solid #ffffff;\n  }\n    }\n\n.Testimonials-list {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0 0 5em 0;\n  list-style: none;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start\n}\n\n@media (max-width: 768px) {\n\n  .Testimonials-list {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n  }\n  }\n\n.Testimonials-item {\n  position: relative;\n  margin: 0 15px 65px 15px;\n  padding: 0;\n  width: 310px;\n  height: 390px;\n  border: 1px solid #f78d00;\n  text-align: center;\n  font-size: 18px;\n  line-height: 1.5em;\n}\n\n.Testimonials-item .Testimonials-wrapper {\n  padding: 1.5em;\n}\n\n.Testimonials-item .Testimonials-wrapper .Testimonials-item-text {\n  color: #444;\n  max-height: 230px;\n  overflow: hidden;\n}\n\n.Testimonials-item .Testimonials-wrapper .Testimonials-item-name {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  bottom: 80px;\n  color: #fdbc1d;\n}\n\n.Testimonials-item .Testimonials-wrapper .Testimonials-item-avatar {\n  position: absolute;\n  width: 120px;\n  height: 120px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  bottom: -60px;\n}\n\n/* Manage Booking page */\n.page-padding{\n    padding: 16px;\n}\n\n.flexi-layout{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    /* Then we define the flow direction and if we allow the items to wrap \n    * Remember this is the same as:\n    * flex-direction: row;\n    * flex-wrap: wrap;\n    */\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n\n.card_shadow{\n    background-color: #F5F5F5;\n    -webkit-box-shadow: 0px 5px 5px -0px rgba(0,0,0,0.3);\n    -ms-box-shadow: 0px 5px 5px -0px rgba(0,0,0,0.3);\n    box-shadow: 0px 5px 5px -0px rgba(0,0,0,0.3);\n}\n\n.mytab{\n    cursor:pointer;\n\ttext-align:center;\n\tcolor:#eaaa1b;\n\tpadding-top:15px;\n\tpadding-bottom:15px;\n\tmargin:0px;\n\tpadding-left:0px;\n\tpadding-right:0px;\n\tvertical-align: middle\n}\n\n.mytab:hover, .mytab.active:hover {\n  background: #f78d00;\n  color: white;\n}\n\n.mytab.active {\n  background: #fdbc1d;\n  color: white;\n}\n\n\n\n.col1{\n    width:100%; \n}\n\n.col2{\n    width:50%; \n}\n\n.col4{\n    width:25%; \n}\n\n.myTabLayout{\n    margin-bottom: 15px;\n}\n\n.myForm {\n    width:100%;\n    margin: 0 auto; \n    padding: 16px; \n    text-align: center;\n}\n\n.myForm .formLabel {\n  padding: 5px;\n  margin: 0px;\n}\n\n.myForm .formItem {\n  padding-bottom: 25px;\n}\n\n.myForm .formInput {\n  height: 34px;\n  padding-left: 5px;\n  line-height: 34px;\n}\n/*---------- Modal  -------*/\n\n/*\n@define-mixin translate $x $y {\n  -webkit-transform: translate($x, $y);\n      -ms-transform: translate($x, $y); \n          transform: translate($x, $y);\n}\n@define-mixin transition $transition {\n  -webkit-transition: $transition;\n          transition: $transition;\n}\n@define-mixin transition-transform $transition {\n  -webkit-transition: -webkit-transform $transition;\n     -moz-transition: -moz-transform $transition;\n       -o-transition: -o-transform $transition;\n          transition: transform $transition;\n}\n*/\n.modal{\n  /* This is modal bg */\n}\n.modal:before {\n  content: \"\";\n  display: none;\n  background: rgba(0,0,0,.6);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n}\n/* Active animate in modal */\n.modal:target .modal-dialog {/*@mixin translate(0, 0);*/\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n     transform: translate(0, 0);\n  top: 20%;\n}\n.modal:target:before {\n  display: block;\n}\n\n.modal-dialog{\n  background: #fefefe;\n  border: #333 solid 1px;\n  border-radius: 5px;\n  margin-left: -200px;\n  position: fixed; \n  left: 50%; \n  top: -100%;  \n  z-index: 11; \n  width: 360px;\n  /*@mixin translate(0, -500%);*/\n  -webkit-transform: translate(0, -500%);\n  -ms-transform: translate(0, -500%); \n  -o-transform: translate(0, -500%); \n     transform: translate(0, -500%);  \n  /*@mixin transition-transform(~\"0.3s ease-out\");*/\n  -webkit-transition: -webkit-transform ~\"0.3s ease-out\";\n  -o-transition: -o-transform ~\"0.3s ease-out\";\n  transition: -webkit-transform ~\"0.3s ease-out\";\n  -o-transition: transform ~\"0.3s ease-out\", -o-transform ~\"0.3s ease-out\";\n  transition: transform ~\"0.3s ease-out\";\n  transition: transform ~\"0.3s ease-out\", -webkit-transform ~\"0.3s ease-out\", -o-transform ~\"0.3s ease-out\";\n}\n\n\n.modal-body{\n  padding: 40px/2;\n}\n\n.modal-header, .modal-footer{\n  padding: 40px/4 40px/2;\n}\n\n.modal-header{\n  border-bottom: #eee solid 1px;\n}\n\n.modal-header h2{\n  font-size: 20px;\n}\n\n.modal-footer{\n  border-top: #eee solid 1px;\n  text-align: right;\n}\n\n/*ADDED TO STOP SCROLLING TO TOP*/\n#close {\n  display: none; \n}\n\n/* Free campaign landing page */\n.Body {\n  background-image: url(" + __webpack_require__(33) + ");\n}\n\n.top-header-label{\n    background-color: #fdbc1d;\n}\n\n.top-header-label h2{\n  color:#FFF;\n  padding:32px;\n  text-align:center;\n}\n\n.content-details-top{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    /* Then we define the flow direction and if we allow the items to wrap \n    * Remember this is the same as:\n    * flex-direction: row;\n    * flex-wrap: wrap;\n    */\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    padding-bottom:8px\n}\n\n@media (max-width: 768px) {\n\n  .content-details-top {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n  }\n    }\n\n.content-details-bottom{\n    padding-top:8px;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    /* Then we define the flow direction and if we allow the items to wrap \n    * Remember this is the same as:\n    * flex-direction: row;\n    * flex-wrap: wrap;\n    */\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row\n}\n\n@media (max-width: 992px) {\n\n  .content-details-bottom {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n  }\n    }\n\n.content-details-left{\n    -webkit-box-flex: 2;\n    -webkit-flex-grow: 2;\n        -ms-flex-positive: 2;\n            flex-grow: 2;\n    margin-right:2%\n}\n\n@media (max-width: 992px) {\n\n  .content-details-left {\n    width: 100%;\n    margin-right: 0;\n  }\n    }\n.content-details-right{\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    margin-left:5%\n\n}\n@media (max-width: 992px) {\n\n  .content-details-right {\n    width: 100%;\n    margin-left: 0;\n  }\n    }\n\n.special-text{\n    color: #fdbc1d;\n    font-weight: bold;\n}\n.fill-width {\n    width:100%;\n    max-width: 100%;\n}\n\nselect .place_holder{\n  color: #a5a5a5;\n}\n\nselect option {\n  color : #000;\n}\n\n.no-style-list{\n    list-style-type: none;\n    margin: 0px;\n    padding : 0px;\n}\n\n.no-style-list li{\n  margin:0px;\n  padding:0px;\n}\n\n.description {\n    margin-left:15px;\n}\n\n.sign-up-form .header {\n  background-color: #fdbc1d;\n  color: #FFF;\n  text-align:center;\n  padding:5px;\n  font-weight: bold;\n}\n\n.sign-up-form .item {\n  border-width: 0px 1px 1px 1px;\n  border-style: solid;\n  border-color: #e7e7e7;\n  padding:5px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.sign-up-form .item .input {\n  padding:5px;\n  outline: none;\n  border: 0px;\n}\n\n.sign-up-form .submit {\n  background-color: #f78d00;\n  color: #FFF;\n  cursor:pointer;\n  text-align:center;\n  padding:5px;\n  font-weight: bold;\n}\n\n.how-it-work-info{\n    position: relative;\n    margin-top:16px;\n    display:inline-block;\n}\n\n.how-it-work-info img{\n  bottom:0;\n  position: absolute\n}\n\n.how-it-work-info .details{\n  margin-left:200px;\n  margin-top:120px;\n  padding: 20px;\n  padding-bottom : 10px;\n  background-color: #6e6e6e;\n  color: #fff;\n}\n\n.how-it-work-info .details h2{\n  margin-left:125px;\n  font-weight:bold;\n  color:white;\n}\n\n.how-it-work-info .details p{\n  margin-left:125px;\n  color:white;\n}\n\n@media (max-width: 768px) {\n\n  .how-it-work-info img {\n    top: 0;\n  }\n        }\n\n@media (max-width: 768px) {\n\n  .how-it-work-info .details {\n    margin: 0;\n    margin-top: 315px;\n  }\n        }\n\n@media (max-width: 768px) {\n\n  .how-it-work-info .details h2 {\n    margin-left: 0;\n  }\n            }\n\n@media (max-width: 768px) {\n\n  .how-it-work-info .details p {\n    margin: 0 auto;\n  }\n            }\n\n.relativePosition {\n    position : relative;\n}\n\n.nurse-comment-section {\n    position : relative;\n    margin: 0 auto;\n    display:inline-block;\n    margin-top:80px;\n    height:100%;\n    bottom:0;\n}\n\n.nurse-comment-section img{\n  z-index:100;\n  position: absolute;\n  left:0;\n  right:0;\n  top:0;\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.nurse-comment-section .content {\n  margin-top:50px;\n  vertical-align:middle;\n  height:100%;\n  border-width: 2px 2px 0px 2px;\n  border-style: solid;\n  border-color: #f78d00;\n  text-align:center;\n}\n\n.nurse-comment-section .content .comment{\n  text-align:center;\n  display:block;\n  margin-top:115px;\n}\n\n.nurse-comment-section .content .name {\n  color : #f78d00;\n  padding-top:16px;\n  display:block;\n  margin-bottom:100px;\n}\n\n/* FAQ page */\n.faq-item .faq-question{\n  font-weight: bold;\n}\n.faq-item .faq-answer{\n  padding-bottom:10px;\n}\n\n\n/* */\n", ""]);

  // exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, ".Link {\n\n}\n", ""]);

  // exports


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Logo {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.Logo img {\n  width: 260px;\n  height: 90px\n}\n\n@media (max-width: 768px) {\n\n  .Logo img {\n    width: 130px;\n    height: 45px;\n  }\n    }\n", ""]);

  // exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports


  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Navigation-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  list-style: none;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center\n}\n\n@media (max-width: 768px) {\n\n  .Navigation-wrapper {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column\n  }\n  }\n\n.Navigation {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center\n}\n\n@media (max-width: 1200px) {\n\n  .Navigation {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap\n  }\n  }\n\n@media (max-width: 768px) {\n\n  .Navigation {\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center\n  }\n  }\n\n.Navigation-item {\n  padding: 0 0.5em;\n}\n\n.Navigation-link {\n  display: inline-block;\n  padding: 0.5em 1em;\n  color: #444;\n  font-size: 15px;\n  text-decoration: none;\n  text-transform: uppercase;\n  cursor: pointer\n}\n\n.Navigation-link:hover {\n  border-bottom: 3px solid #444;\n  color: #444;\n  text-decoration: none\n}\n\n@media (max-width: 768px) {\n\n  .Navigation-link {\n    font-size: 12px\n  }\n  }\n\n.Navigation-link.active {\n  border-bottom: 3px solid #fdbc1d;\n  color: #fdbc1d;\n  font-weight: bold;\n}\n", ""]);

  // exports


/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAABLCAYAAAC85F+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MzExQURGM0NFNDAxMUU1OTRCMEE5QzgzREM5NjA1OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MzExQURGNENFNDAxMUU1OTRCMEE5QzgzREM5NjA1OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYzMTFBREYxQ0U0MDExRTU5NEIwQTlDODNEQzk2MDU5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYzMTFBREYyQ0U0MDExRTU5NEIwQTlDODNEQzk2MDU5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GtsudwAACDNJREFUeNrsXVlvVVUY3eeKIiCixaGCQkWoCBYRBGkpWCaZikOMJEbffPVH+KAv/gPjmz4QiQQ0gEOZWigCVosgKqMIKNhJFEQmua7lXpcWC/ROkLuHL1k5oSQ3Z++zzrfX9+1vfycxRbaurq4puLwLTADWA236rzSQmNKxf4D+wHigAvgAeLusrOxXE6D1uwG/+QBwHmgEmoHTJUwEjv9P4CwwCBjS2dl5fOjQoelIhMK8wX241AFHgLfwdu0q9QnAPd+By1JgCTA1SRJ6hD9CI0KqiBPK33pWbnalCySg4T7psdYA3wG1QCW8QhKJkL+NBJ4BjgINjs1DB/AFMBiYBq9wTyRC/raAayywAW9Zh0uTgPulXtgNtHJ5AB6LRMhvWRiHSw2wH9js6FxQNK6VbpqBMd0fiZC7NnhBv7UOb1eXixOB+76Ey/cKeScBUyIRcrNaTdzXwHaXJ0NLxMfA7xS+IHlFJEJ23mCIvAEnbiMm8ozrE4IxtOOyAhhF3RNKBJEqgAQpCcSR0gV7PJqXDRKPdYggJkUiXN/GKG9AgbgFb9J5XyYFYzmHy4fALfR4IP2ASISre4O7RYKBXBKAw75NDMiwU56uCpgVidCbBP00OVTV3wA7pbh9NGYcfwMWY9xlkQhXWjnjbOCisRtL7b5ODgh+EJdNwL0iQyoSwXqD23B5AmACaQew12NvkLGtWvrqJIwjEWDDgWrgjLTB6QAENfdOvpQemh88EaQNqAseBZqAA0rAeG3yeEyU/QBMxzxMCN0jVBq7u3gCWBsCCTKWTqePm+49FGqFQUESQdqAIdQwYBVI0GkCMlUstUoXMcE0zTfhmO1guCRMB3YZd3cXC10iTiqC4BY7M6oPBkUElXItNjbLttynDGIets/Y9HOF9MLAkDzCfLnDZpBgT8AkyKSeGU6yJpOZ1ceDIAIY/7Dp3l381EQzEsusWWDhygLM0TCviYABcil4WQNegbdhf+TA5ZoFhs8s1WdZ21QfhOP1BjAamAi0SCRF6yYDE2ksYDmpOSr3mQgUiCzKaEIc3Rkffy9jWds2YxNsk70kAlwdWf408C1j5xBP/mThFZhxXG3sKSkWuw73iggKiV4ydj+h0dVi1Jth8JQ/47LO2CKdOm+IoPo8DqhKYmhXfNzXNnlKeoVfgLl4icZ4QYQkSbjN+jxApjfBG/wVH3efSwTPSa4E7mKo7Wqxa6rHksAMIpNHPO7FI2uH4mPO2poUXVXjZZrmukfg9upMY88ntIDpF+PzzdorXFA4ybByqYu7kyl5A/Y0mGts+Rm9QVt8vDmTgaepuQ8xyjhYwJJSBpGhIg9+bmF8HED52Y0yVm0xA7vEtXAypdCHB1iZNNqIkOhMfJ55ewWKbBb0cmmoV1WXE8YbZdVRhZTvoZg8KthYwPIkMI/hN8jAEPxCJjArlRTI/+5nAInwurHp0u1xSSiKsfUOz3twm/pNY3cq+bdzpnT6SKUFygI2BxlNIjxibAlWzCAWZ3m4BC/QrgfOUJKd25hwOqu/lRIReC93ckXopxiYTbCYTDoZH2VhJl1QIf31vqKwE4rISm15IHiucwRv+j3gNWOLLPaB0X/Hx1mQjZHuojZ4B/N51IF73pqSR+DS8BTDyBA7ihXRG9xubD6Gha3LHCGBDR9VZLFRGmFRkiTD4yPN25iPYQcZppu3uJZHoO013VmxGT5V595Eb8BWAYv0z2WupehTUrpUtKzO5elf7jdUxiUiZ2PegKfBGlys7+y56URl+zlAZteE2HSyAG/wEC6zje2lsNrFMaR6xL8XlAhhpxCebBobH3HfJs+50Gj7HvN4wmkiyNh0kq1oqX6rQ2s6mY/BczIhx72an4zDxwGvIIJSzLulFxhOToyPuk+r14vDDbt2L4jQY4lgkQXPOM725STPDdIGk+QN+PI0u7xhd9VydpDhiETPOImgaL1JkKn2Zl3netUuGq+IIGNHscMMizDoKBx7G/tFsJinWQLbeEkEMPwULsuNbb3PppO3xmd/Rbj4nLH9lTYrD2N89Qg8wME06TaFk9WRApervTPhIrOxB30Y13WJIPGzUmElvcLgwEnAQg5+FW6GloPtvlR793mcGwPlPsQmY/fYFwaeei6XNkjLG3hT7Z3tuf5GCcc5SZIMC9QbsKFYlTwCl8s9PpX2ZUUEDJgk2CrhuCBQb8DteW4zs8qbGcRTPg0ul04fLF45YOw2dWWA2oCVyWPlDfb71mcyFyIcU8zMSVmEyekfEBdYp1Er0dzgQ7iYNxG0HrZILdNFTg7EGzB/whoNFveuwTwc83GcOTWB0veOGrVOshVteQBcqBIRmC9Y7+sg8+kG9qPIwPWyVgWbvnoDlnozecT8yUc+94vImQgqdmXlMzem5hjbfc1XoyfINBvd4bPby7c/IHPsnxmbZp2pwk3fvAHHVC+BuML39S8vIih04scs2HWN+xBVPmUcNZbFyh00KI8SiXANMvBNYVtequrpSZJ4IxzVS2qeBOK6EKKjQlvH7lRIyQKWiR55Ay4JFIr8um1bJEJ2SwS9AnfganwIJ+ENSGp+m4LlZ1+ZQKwYzaSZdmbuna1oax0XiNxYYvnZf4230+l0RyRCbl7hE2PPTrLYdYTD81GjcJFCuDWk7jFFaS8PMvDNWSOVXe+oN+AZjhcBfsirSWLYRCLkbky/8gsvszCpVQ4uCYwSRmocwX2bomhEwBvE/YdVADenXnUs9TxeRKBA3Obj7mJfVuz2b5m+AK8Ab4AMbBvDAzOlmGwiYakBqGmWGLuf0KClITj7V4ABAIb6mVXpeLd9AAAAAElFTkSuQmCC"

/***/ },
/* 34 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABFkAAAAGCAYAAAAYCkEPAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDIvMjQvMTP88lKFAAAB50lEQVR4nO2c23LDIAxExUz//5fJk6eYxAaDLgve89RppNUiux1QnKScs4iIpJSk4usXnbTyenU14jRrrRSjUQOp/xpeve+F0XhL7ZF4rVxtLU0vlpqRdVqg+KhB9bUa7OO7yY3XU0fMm0HtTbQvr/radWb1NPzMaDzJfVqnN15bt0dPw5tGnavXLbV7Y2b1Z3vXG2ftw+teuc055ioiIn9fkf9Dl9F/Bk/zLDeCEQdKjzwvb1bxKEMKhFgk7afxUQMbz8GSRr6VlrWu9yF9haHACh5nuDt47772SKIPzpGgr91zqGAx+LLwr6XpPfjwOteM5O04RLH0ENlbhD6h6s/kzOR5a54L5PzrYRVJ5cSFtEkpnaZUv5pqVdqrkGFNVD0NHSQv0TpIQ4nofCstK010PZRaSLV7WcEjGQd9Mxfpb8WnLzhs8fEQuQYE7wjXUCNfSwNdK7xW/QkYzhGu4ZCFuOE4kGpRv1sEY6zC+4Cai5+92bFm1H11XEuU+xrFx0HpB6lPI6zsncSw8qav/HtFWweCH6unYXprr6yPUM/z2iHcryX1njzUH8/GRAMOWQh5MVeDr5vvatqFbRc2Cftyhv0gxJfIQQESb19/zVb9aO2xeDYjZH04ZCGEEEIIIYQQQghR4AOrl5z54BICNwAAAABJRU5ErkJggg=="

/***/ },
/* 35 */
/***/ function(module, exports) {

  module.exports = require("classNames");

/***/ },
/* 36 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 37 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 38 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ },
/* 39 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa");

/***/ }
/******/ ]);