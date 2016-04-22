(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterActions = function () {
  function FooterActions() {
    _classCallCheck(this, FooterActions);

    this.generateActions('getTopCharactersSuccess', 'getTopCharactersFail');
  }

  _createClass(FooterActions, [{
    key: 'getTopCharacters',
    value: function getTopCharacters() {
      this.actions.getTopCharactersSuccess([]);
      /*
      $.ajax({ url: '/api/characters/top' })
        .done((data) => {
          this.actions.getTopCharactersSuccess(data)
        })
        .fail((jqXhr) => {
          this.actions.getTopCharactersFail(jqXhr)
        });
      */
    }
  }]);

  return FooterActions;
}();

exports.default = _alt2.default.createActions(FooterActions);

},{"../alt":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LessonsActions = function () {
  function LessonsActions() {
    _classCallCheck(this, LessonsActions);

    this.generateActions('getLessonsSuccess', 'getLessonsFail');

    this.compareLessons = function (a, b) {
      // console.log(parseInt(a.grouporder) + " " + parseInt(b.grouporder))
      if (parseInt(a.grouporder) < parseInt(b.grouporder)) return -1;else if (parseInt(a.grouporder) > parseInt(b.grouporder)) return 1;else return 0;
    };
  }

  _createClass(LessonsActions, [{
    key: 'getLessons',
    value: function getLessons() {
      var _this = this;

      $.ajax({ url: '/api/lessons' }).done(function (data) {
        var lessons = data.filter(function (lesson) {
          if (parseInt(lesson.restrictedaccess) == 1) return false;
          return true;
        }).map(function (lesson) {
          return {
            "name": lesson.ActivityGroupName,
            "id": lesson.ActivityGroupID,
            "displayId": lesson.ActivityGroupCode,
            "topic": lesson.Topic,
            "order": parseInt(lesson.GroupOrder)
          };
        });

        lessons.sort(function (a, b) {
          return a.order - b.order;
        });
        console.log("pula");
        console.log(lessons);

        _this.actions.getLessonsSuccess(lessons);
      }).fail(function (jqXhr) {
        _this.actions.getLessonsFail(jqXhr);
      });
    }
  }]);

  return LessonsActions;
}();

exports.default = _alt2.default.createActions(LessonsActions);

},{"../alt":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebcamActions = function () {
  function WebcamActions() {
    _classCallCheck(this, WebcamActions);

    this.generateActions('webcamUpdate', 'windowSizeUpdate', 'getNoVisitorsSuccess', 'getNoVisitorsFail');
  }

  _createClass(WebcamActions, [{
    key: 'getNoVisitors',
    value: function getNoVisitors() {
      var _this = this;

      setTimeout(function () {
        _this.actions.getNoVisitorsSuccess(5000);
      }, 1000);
    }
  }]);

  return WebcamActions;
}();

exports.default = _alt2.default.createActions(WebcamActions);

},{"../alt":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('./Footer.jsx');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',

    /* <Footer /> */
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

},{"./Footer.jsx":6,"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _FooterStore = require('../stores/FooterStore.jsx');

var _FooterStore2 = _interopRequireDefault(_FooterStore);

var _FooterActions = require('../actions/FooterActions.jsx');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).call(this, props));

    _this.state = _FooterStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Footer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _FooterStore2.default.listen(this.onChange);
      _FooterActions2.default.getTopCharacters();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _FooterStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'footer',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-8' },
              _react2.default.createElement(
                'h3',
                { className: 'lead' },
                _react2.default.createElement(
                  'strong',
                  null,
                  'Information'
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                'Powered by ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Node.js'
                ),
                ', ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'MongoDB'
                ),
                ' and ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'React'
                ),
                ' with Flux architecture and server-side rendering.'
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

},{"../actions/FooterActions.jsx":1,"../stores/FooterStore.jsx":21,"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
  _inherits(About, _React$Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(About).apply(this, arguments));
  }

  _createClass(About, [{
    key: "render",

    /* <Footer /> */
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "text-page-container about-container" },
        _react2.default.createElement(
          "div",
          { className: "text-page-left-column about-left-column" },
          _react2.default.createElement(
            "div",
            { className: "text-page-title about-title" },
            "about the exhibition"
          ),
          _react2.default.createElement(
            "div",
            { className: "paragraph-content about-contents" },
            "Organized by the ",
            _react2.default.createElement(
              "a",
              { href: "http://artgallery.yale.edu", target: "_blank" },
              "Yale University Art Gallery"
            ),
            ", Robert Adams: The Place We Live, A Retrospective Selection of Photographs features over three hundred prints from the Gallery’s master sets of the photographer’s work, along with an array of his monographs. The exhibition traces Adams’s deep engagement with the geography of the American West, weaving together various aspects of over four decades of work into a cohesive, epic narrative of the American experience.",
            _react2.default.createElement("br", null),
            _react2.default.createElement("br", null),
            "Each of the photographer’s major projects are represented in the exhibition, including his seminal work in the rapidly expanding suburbs of Colorado Springs and Denver, his elegiac portrayal of a once-verdant paradise in southern California choked by violence and smog, and his meditations on the promise and ruin of the Pacific Northwestern region that Adams now calls home. Taken as a whole, the exhibition elucidates the photographer’s civic goals: to consider the privilege of the place we were given and the obligations of citizenship—not only in the western United States but also, by extension, in the wider world.",
            _react2.default.createElement("br", null),
            _react2.default.createElement("br", null),
            "Robert Adams: The Place We Live was organized by Joshua Chuang, Assistant Curator of Photographs, and Jock Reynolds, the Henry J. Heinz II Director, both of the Yale University Art Gallery. The exhibition is accompanied by a three-volume retrospective publication of the same title, as well as the retrospective monograph What Can We Believe Where?: Photographs of the American West. For more information on these publications,",
            _react2.default.createElement(
              "a",
              { href: "http://artgallery.yale.edu", target: "_blank" },
              " click here"
            ),
            "."
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "text-page-right-column about-right-column" },
          _react2.default.createElement(
            "div",
            { className: "side-element" },
            _react2.default.createElement(
              "div",
              { className: "section-title" },
              "schedule"
            ),
            _react2.default.createElement(
              "div",
              { className: "side-paragraph-content" },
              "Mondays closed",
              _react2.default.createElement("br", null),
              "Tuesday—Friday: 3pm to 5pm",
              _react2.default.createElement("br", null),
              "Saturday—Sunday: 10am to 5pm",
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "a",
                { href: "http://bit.ly/1V0HJBs", target: "_blank" },
                "Open now"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "side-element" },
            _react2.default.createElement(
              "div",
              { className: "section-title" },
              "location"
            ),
            _react2.default.createElement(
              "div",
              { className: "side-paragraph-content" },
              "600 Main St, Hartford, CT 06103"
            )
          )
        )
      );
    }
  }]);

  return About;
}(_react2.default.Component);

exports.default = About;

},{"react":"react"}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Credits = function (_React$Component) {
  _inherits(Credits, _React$Component);

  function Credits() {
    _classCallCheck(this, Credits);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Credits).apply(this, arguments));
  }

  _createClass(Credits, [{
    key: "render",

    /* <Footer /> */
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "text-page-container credits-container" },
        _react2.default.createElement(
          "div",
          { className: "text-page-left-column credits-left-column" },
          _react2.default.createElement(
            "div",
            { className: "text-page-title credits-title" },
            "credits"
          ),
          _react2.default.createElement(
            "div",
            { className: "paragraph-content credits-contents" },
            "Each of the photographer’s major projects are represented in the exhibition, including his seminal work in the rapidly expanding suburbs of Colorado Springs and Denver, his elegiac portrayal of a once-verdant paradise in southern California choked by violence and smog, and his meditations on the promise and ruin of the Pacific Northwestern region that Adams now calls home. Taken as a whole, the exhibition elucidates the photographer’s civic goals: to consider the privilege of the place we were given and the obligations of citizenship—not only in the western United States but also, by extension, in the wider world.",
            _react2.default.createElement("br", null),
            _react2.default.createElement("br", null),
            "Robert Adams: The Place We Live was organized by Joshua Chuang, Assistant Curator of Photographs, and Jock Reynolds, the Henry J. Heinz II Director, both of the Yale University Art Gallery. The exhibition is accompanied by a three-volume retrospective publication of the same title, as well as the retrospective monograph What Can We Believe Where?: Photographs of the American West. For more information on these publications,",
            _react2.default.createElement(
              "a",
              { href: "http://artgallery.yale.edu", target: "_blank" },
              " click here"
            ),
            "."
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "text-page-right-column credits-right-column" },
          _react2.default.createElement(
            "div",
            { className: "side-element" },
            _react2.default.createElement(
              "div",
              { className: "section-title" },
              "curators"
            ),
            _react2.default.createElement(
              "div",
              { className: "side-paragraph-content" },
              "Jennifer Ha, YUAG",
              _react2.default.createElement("br", null),
              "Marcus Wallace, WAMA",
              _react2.default.createElement("br", null)
            )
          )
        )
      );
    }
  }]);

  return Credits;
}(_react2.default.Component);

exports.default = Credits;

},{"react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WebcamStore = require('../../stores/WebcamStore.jsx');

var _WebcamStore2 = _interopRequireDefault(_WebcamStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Exhibition = function (_React$Component) {
  _inherits(Exhibition, _React$Component);

  /* <Footer /> */

  function Exhibition(props) {
    _classCallCheck(this, Exhibition);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Exhibition).call(this, props));

    _this.state = _WebcamStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    console.log(_this.state);
    return _this;
  }

  _createClass(Exhibition, [{
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _WebcamStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _WebcamStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'render',
    value: function render() {
      var context = this;

      return _react2.default.createElement(
        'div',
        { className: 'text-page-container credits-container' },
        _react2.default.createElement(
          'div',
          { className: 'text-page-left-column exhibition-left-column' },
          _react2.default.createElement(
            'div',
            { className: 'text-page-title exhibition-title' },
            'warrior ',
            _react2.default.createElement('br', null),
            this.state.webcamParams.Z,
            ' ',
            this.state.webcamParams.X,
            ' ',
            this.state.webcamParams.Y
          ),
          _react2.default.createElement(
            'div',
            { className: 'paragraph-content exhibition-contents' },
            _react2.default.createElement('img', { src: 'img/01.png', style: { height: 10 * this.state.webcamParams.Z + 'px',
                marginLeft: 400 - 30 * this.state.webcamParams.X + 'px' } })
          )
        ),
        _react2.default.createElement('div', { className: 'text-page-right-column history-right-column' })
      );
    }
  }]);

  return Exhibition;
}(_react2.default.Component);

exports.default = Exhibition;

},{"../../stores/WebcamStore.jsx":23,"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WebcamStore = require('../../stores/WebcamStore.jsx');

var _WebcamStore2 = _interopRequireDefault(_WebcamStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExhibitionDiscrete = function (_React$Component) {
  _inherits(ExhibitionDiscrete, _React$Component);

  /* <Footer /> */

  function ExhibitionDiscrete(props) {
    _classCallCheck(this, ExhibitionDiscrete);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ExhibitionDiscrete).call(this, props));

    _this.state = _WebcamStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    console.log(_this.state);
    return _this;
  }

  _createClass(ExhibitionDiscrete, [{
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _WebcamStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _WebcamStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'text-page-container credits-container' },
        _react2.default.createElement(
          'div',
          { className: 'text-page-left-column exhibition-left-column' },
          _react2.default.createElement(
            'div',
            { className: 'text-page-title exhibition-title' },
            'warrior ',
            parseInt(this.state.webcamParams.Z),
            ' ',
            parseInt(this.state.webcamParams.X),
            ' ',
            parseInt(this.state.webcamParams.Y),
            ' ',
            this.state.webcamParams.angle
          ),
          _react2.default.createElement(
            'div',
            { className: 'paragraph-content exhibition-contents' },
            _react2.default.createElement('img', { className: 'image-warrior', src: 'img/01.png', style: { transform: 'rotate(' + -(this.state.webcamParams.angle / 3.14 * 360 + 180) + 'deg)', height: (this.state.webcamParams.Z > 55 ? 500 : 350) + 'px', marginLeft: 400 + 'px' } })
          )
        ),
        _react2.default.createElement('div', { className: 'text-page-right-column history-right-column' })
      );
    }
  }]);

  return ExhibitionDiscrete;
}(_react2.default.Component);

exports.default = ExhibitionDiscrete;

},{"../../stores/WebcamStore.jsx":23,"react":"react"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WebcamStore = require('../../stores/WebcamStore.jsx');

var _WebcamStore2 = _interopRequireDefault(_WebcamStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExhibitionLeftRight = function (_React$Component) {
  _inherits(ExhibitionLeftRight, _React$Component);

  /* <Footer /> */

  function ExhibitionLeftRight(props) {
    _classCallCheck(this, ExhibitionLeftRight);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ExhibitionLeftRight).call(this, props));

    _this.state = _WebcamStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    console.log(_this.state);
    return _this;
  }

  _createClass(ExhibitionLeftRight, [{
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _WebcamStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _WebcamStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'render',
    value: function render() {
      // {parseInt(this.state.webcamParams.Z)} {parseInt(this.state.webcamParams.X)} {parseInt(this.state.webcamParams.Y)} {this.state.webcamParams.angle}
      return _react2.default.createElement(
        'div',
        { className: 'text-page-container credits-container' },
        _react2.default.createElement(
          'div',
          { className: 'text-page-left-column exhibition-left-column' },
          _react2.default.createElement(
            'div',
            { className: 'text-page-title exhibition-title' },
            'warrior'
          ),
          _react2.default.createElement(
            'div',
            { className: 'paragraph-content exhibition-contents' },
            _react2.default.createElement('img', { className: 'image-warrior-rotating', src: 'img/glass_01.png', style: { display: this.state.webcamParams.X < -7 ? 'block' : 'none' } }),
            _react2.default.createElement('img', { className: 'image-warrior-rotating', src: 'img/glass_02.png', style: { display: this.state.webcamParams.X >= -7 && this.state.webcamParams.X < -6 ? 'block' : 'none' } }),
            _react2.default.createElement('img', { className: 'image-warrior-rotating', src: 'img/glass_03.png', style: { display: this.state.webcamParams.X >= -6 && this.state.webcamParams.X < -5 ? 'block' : 'none' } }),
            _react2.default.createElement('img', { className: 'image-warrior-rotating', src: 'img/glass_04.png', style: { display: this.state.webcamParams.X >= -5 && this.state.webcamParams.X < -4 ? 'block' : 'none' } }),
            _react2.default.createElement('img', { className: 'image-warrior-rotating', src: 'img/glass_05.png', style: { display: this.state.webcamParams.X >= -4 && this.state.webcamParams.X < -3.5 ? 'block' : 'none' } }),
            _react2.default.createElement('img', { className: 'image-warrior-rotating', src: 'img/glass_06.png', style: { display: this.state.webcamParams.X >= -3.5 && this.state.webcamParams.X < -2.5 ? 'block' : 'none' } }),
            _react2.default.createElement('img', { className: 'image-warrior-rotating', src: 'img/glass_07.png', style: { display: this.state.webcamParams.X >= -2.5 && this.state.webcamParams.X < 2.5 ? 'block' : 'none' } }),
            _react2.default.createElement('img', { className: 'image-warrior-rotating', src: 'img/glass_08.png', style: { display: this.state.webcamParams.X >= 2.5 && this.state.webcamParams.X < 3.5 ? 'block' : 'none' } }),
            _react2.default.createElement('img', { className: 'image-warrior-rotating', src: 'img/glass_09.png', style: { display: this.state.webcamParams.X >= 3.5 && this.state.webcamParams.X < 4.5 ? 'block' : 'none' } }),
            _react2.default.createElement('img', { className: 'image-warrior-rotating', src: 'img/glass_10.png', style: { display: this.state.webcamParams.X >= 4.5 && this.state.webcamParams.X < 5 ? 'block' : 'none' } }),
            _react2.default.createElement('img', { className: 'image-warrior-rotating', src: 'img/glass_11.png', style: { display: this.state.webcamParams.X >= 5 && this.state.webcamParams.X < 5.5 ? 'block' : 'none' } }),
            _react2.default.createElement('img', { className: 'image-warrior-rotating', src: 'img/glass_12.png', style: { display: this.state.webcamParams.X >= 5.5 ? 'block' : 'none' } })
          )
        ),
        _react2.default.createElement('div', { className: 'text-page-right-column history-right-column' })
      );
    }
  }]);

  return ExhibitionLeftRight;
}(_react2.default.Component);

exports.default = ExhibitionLeftRight;

},{"../../stores/WebcamStore.jsx":23,"react":"react"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',

    /* <Footer /> */
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'header-container' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-6 col-xs-2 no-padding' },
          _react2.default.createElement(
            'div',
            { className: 'logo-container' },
            _react2.default.createElement(
              'span',
              { className: 'logo' },
              'a handful of ',
              _react2.default.createElement(
                'span',
                { className: 'bronze' },
                'bronze'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'logo-museum' },
            _react2.default.createElement(
              'span',
              { className: 'at-the' },
              'at the '
            ),
            _react2.default.createElement(
              'span',
              { className: 'host-museum' },
              'WADSWORTH ATHENEUM ',
              _react2.default.createElement(
                'span',
                { className: 'grey' },
                'MUSEUM OF ART'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-6 col-xs-2 no-padding nav-container' },
          _react2.default.createElement(
            'span',
            { className: 'top-nav' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: "/" + this.props.prefix + "/about" },
              'ABOUT'
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'top-nav' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: "/" + this.props.prefix + "/exhibition" },
              'E1'
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'top-nav' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: "/" + this.props.prefix + "/exhibition2" },
              'E2'
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'top-nav' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: "/" + this.props.prefix + "/exhibition3" },
              'E3'
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'top-nav' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: "/" + this.props.prefix + "/history" },
              'HISTORY'
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'top-nav' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: "/" + this.props.prefix + "/credits" },
              'CREDITS'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

},{"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var History = function (_React$Component) {
  _inherits(History, _React$Component);

  function History() {
    _classCallCheck(this, History);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(History).apply(this, arguments));
  }

  _createClass(History, [{
    key: "render",

    /* <Footer /> */
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "text-page-container credits-container" },
        _react2.default.createElement(
          "div",
          { className: "text-page-left-column history-left-column" },
          _react2.default.createElement(
            "div",
            { className: "text-page-title history-title" },
            "history"
          ),
          _react2.default.createElement(
            "div",
            { className: "paragraph-content history-contents" },
            "Robert Adams: The Place We Live was organized by Joshua Chuang, Assistant Curator of Photographs, and Jock Reynolds, the Henry J. Heinz II Director, both of the Yale University Art Gallery. The exhibition is accompanied by a three-volume retrospective publication of the same title, as well as the retrospective monograph What Can We Believe Where?: Photographs of the American West. For more information on these publications,",
            _react2.default.createElement(
              "a",
              { href: "http://artgallery.yale.edu", target: "_blank" },
              " click here"
            ),
            "."
          )
        ),
        _react2.default.createElement("div", { className: "text-page-right-column history-right-column" })
      );
    }
  }]);

  return History;
}(_react2.default.Component);

exports.default = History;

},{"react":"react"}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "col-sm-12 home" },
        _react2.default.createElement(
          "h1",
          { className: "home-page-title" },
          " Cezar Mocan—CPSC 490—Prototypes "
        ),
        _react2.default.createElement(
          "h3",
          null,
          " ",
          _react2.default.createElement(
            "a",
            { href: "/testApp1/about" },
            "#1"
          ),
          " "
        ),
        _react2.default.createElement(
          "h3",
          null,
          " ",
          _react2.default.createElement(
            "a",
            { href: "/testApp2/about" },
            "#2"
          ),
          " "
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

},{"react":"react"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _LessonsStore = require('../stores/LessonsStore.jsx');

var _LessonsStore2 = _interopRequireDefault(_LessonsStore);

var _LessonsActions = require('../actions/LessonsActions.jsx');

var _LessonsActions2 = _interopRequireDefault(_LessonsActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lessons = function (_React$Component) {
  _inherits(Lessons, _React$Component);

  function Lessons(props) {
    _classCallCheck(this, Lessons);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Lessons).call(this, props));

    _this.state = _LessonsStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Lessons, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _LessonsStore2.default.listen(this.onChange);
      _LessonsActions2.default.getLessons();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _LessonsStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      console.log("render");
      console.log(this.state.lessons);
      var lessons = this.state.lessons.map(function (lesson) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            null,
            ' ',
            _react2.default.createElement(
              'a',
              { href: "/activity/" + lesson.id },
              lesson.displayId,
              ' ',
              lesson.topic,
              ': ',
              lesson.name
            )
          )
        )
        /*
        <li key={character.characterId}>
          <Link to={'/characters/' + character.characterId}>
            <img className='thumb-md' src={'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg'} />
          </Link>
        </li>
        */
        ;
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'col-sm-5' },
          _react2.default.createElement(
            'h1',
            null,
            ' Lessons '
          ),
          _react2.default.createElement(
            'div',
            null,
            lessons
          )
        )
      );
    }
  }]);

  return Lessons;
}(_react2.default.Component);

exports.default = Lessons;

},{"../actions/LessonsActions.jsx":2,"../stores/LessonsStore.jsx":22,"react":"react","react-router":"react-router"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpringModel = { stiffness: 80, damping: 15, precision: 0.05 };

var RouteTransition = _react2.default.createClass({
  displayName: 'RouteTransition',

  propTypes: {
    id: _react2.default.PropTypes.string.isRequired,
    height: _react2.default.PropTypes.number.isRequired
  },
  willEnter: function willEnter() {
    return { opacity: 0.15 };
  },
  willLeave: function willLeave() {
    return { opacity: (0, _reactMotion.spring)(1, SpringModel) };
  },
  getStyles: function getStyles() {
    var _props = this.props;
    var id = _props.id;
    var children = _props.children;

    return [{
      key: id,
      style: { opacity: (0, _reactMotion.spring)(1, SpringModel) },
      data: { children: children }
    }];
  },
  render: function render() {
    var height = this.props.height;

    return _react2.default.createElement(
      _reactMotion.TransitionMotion,
      {
        styles: this.getStyles,
        willEnter: this.willEnter,
        willLeave: this.willLeave },
      function (values) {
        return _react2.default.createElement(
          'div',
          { style: { height: height } },
          values.map(function (_ref) {
            var key = _ref.key;
            var style = _ref.style;
            var data = _ref.data;
            return _react2.default.createElement(
              'div',
              {
                key: key,
                style: {
                  height: height,
                  opacity: style.opacity
                } },
              data.children
            );
          })
        );
      }
    );
  }
});

exports.default = RouteTransition;

},{"react":"react","react-motion":49}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RouteTransition = require('./RouteTransition.jsx');

var _RouteTransition2 = _interopRequireDefault(_RouteTransition);

var _Footer = require('./Footer.jsx');

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = require('./GalleryConservative/Header.jsx');

var _Header2 = _interopRequireDefault(_Header);

var _WebcamStore = require('../stores/WebcamStore.jsx');

var _WebcamStore2 = _interopRequireDefault(_WebcamStore);

var _WebcamActions = require('../actions/WebcamActions.jsx');

var _WebcamActions2 = _interopRequireDefault(_WebcamActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestApp1 = function (_React$Component) {
  _inherits(TestApp1, _React$Component);

  function TestApp1(props) {
    _classCallCheck(this, TestApp1);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TestApp1).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    // this.state = {height: 600}
    _this.state = _WebcamStore2.default.getState();
    _this.currentUsersInterval = {};
    _this.lastSocketEmit = 0;
    _this.colorMap = {};
    console.log(_this.state);
    return _this;
  }

  _createClass(TestApp1, [{
    key: 'onChange',
    value: function onChange(newState) {
      this.setState(newState);
    }
  }, {
    key: 'killAllEvents',
    value: function killAllEvents(context) {
      $(document).unbind('headtrackingEvent');
      $(document).unbind('headtrackrStatus');
      console.log(this.htracker);
      delete this.htracker;
    }
  }, {
    key: 'navigateAway',
    value: function navigateAway() {
      window.location = '/testApp1/credits';
    }
  }, {
    key: 'headTrackingFun',
    value: function headTrackingFun(ev) {
      var angle = this.state.webcamParams.angle;
      var event = ev.originalEvent;

      var timestamp = Date.now();

      if (timestamp - this.lastSocketEmit > 50) {
        this.socket.emit('facetracking', { x: event.x, y: event.y });
        this.lastSocketEmit = timestamp;
      }

      var obj = {
        X: event.x,
        Y: event.y,
        Z: event.z,
        angle: angle
      };
      //console.log(obj)
      _WebcamActions2.default.webcamUpdate(obj);
    }
  }, {
    key: 'headStatusFun',
    value: function headStatusFun(ev) {
      var event = ev.originalEvent;
      //console.log(event);
      if (event.status == 'redetecting') {
        this.killAllEvents(this);
        this.navigateAway();
      }
    }
  }, {
    key: 'faceTrackingFun',
    value: function faceTrackingFun(ev) {
      var event = ev.originalEvent;
      var x = this.state.webcamParams.X;
      var y = this.state.webcamParams.Y;
      var z = this.state.webcamParams.Z;

      var obj = {
        X: x,
        Y: y,
        Z: z,
        angle: event.angle
      };

      _WebcamActions2.default.webcamUpdate(obj);
    }
  }, {
    key: 'resizeCanvas',
    value: function resizeCanvas() {
      _WebcamActions2.default.windowSizeUpdate({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
  }, {
    key: 'drawPastUsers',
    value: function drawPastUsers(canvasContext) {
      var imgData = canvasContext.createImageData(this.state.width, this.state.height); // only do this once per page
      var windowWidth = this.state.width;
      for (var i = 0; i < this.state.noVisitors; i++) {
        var y = this.state.pointData[i].x;
        var x = this.state.pointData[i].y;
        var index = (x * windowWidth + y) * 4;

        imgData.data[index + 0] = 0;
        imgData.data[index + 1] = 0;
        imgData.data[index + 2] = 0;
        // Un-comment below if you want a random RGB color. Otherwise, all points are black.
        // imgData.data[index + Math.round(Math.random() * 3)] = 255;
        imgData.data[index + 3] = 255;
      }

      canvasContext.putImageData(imgData, 0, 0);
    }
  }, {
    key: 'getRandom',
    value: function getRandom(maxVal) {
      return Math.round(Math.random() * maxVal);
    }
  }, {
    key: 'drawCurrentUsers',
    value: function drawCurrentUsers(currentUsersCoords, canvasContext) {
      var positionList = [];
      for (var key in currentUsersCoords) {
        //console.log(currentUsersCoords[key].y);
        if (!(key in this.colorMap)) {
          this.colorMap[key] = {
            r: this.getRandom(255),
            g: this.getRandom(255),
            b: this.getRandom(255)
          };
        }
        var y = Math.round((currentUsersCoords[key].x + 15) / 30.0 * this.state.width); //Math.round(Math.random() * window.innerWidth)
        var x = Math.round((20 - currentUsersCoords[key].y) / 20.0 * this.state.height);
        positionList.push({
          x: x,
          y: y,
          key: key
        });
      }

      var imgData = canvasContext.getImageData(0, 0, this.state.width, this.state.height);
      var windowWidth = this.state.width;

      for (var i = 0; i < positionList.length; i++) {
        var index = (positionList[i].x * windowWidth + positionList[i].y) * 4;
        var squareSize = 2;

        for (var iBlink = 0; iBlink < squareSize; iBlink++) {
          for (var jBlink = 0; jBlink < squareSize; jBlink++) {
            imgData.data[index + jBlink * 4 + iBlink * windowWidth * 4 + 0] = this.colorMap[positionList[i].key].r;
            imgData.data[index + jBlink * 4 + iBlink * windowWidth * 4 + 1] = this.colorMap[positionList[i].key].g;
            imgData.data[index + jBlink * 4 + iBlink * windowWidth * 4 + 2] = this.colorMap[positionList[i].key].b;
            imgData.data[index + jBlink * 4 + iBlink * windowWidth * 4 + 3] = 255;
          }
        }
      }

      canvasContext.putImageData(imgData, 0, 0);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _WebcamStore2.default.listen(this.onChange);
      _WebcamActions2.default.windowSizeUpdate({
        height: window.innerHeight,
        width: window.innerWidth
      });
      _WebcamActions2.default.getNoVisitors();

      var videoInput = document.getElementById('inputVideo');
      var canvasInput = document.getElementById('inputCanvas');
      var canvasOutput = document.getElementById('outputCanvas');

      this.htracker = new headtrackr.Tracker({ ui: false, detectionInterval: 20, debug: canvasOutput, calcAngles: true });
      this.htracker.init(videoInput, canvasInput);
      this.htracker.start();

      $(document).bind('headtrackrStatus', this.headStatusFun.bind(this));
      $(document).bind('headtrackingEvent', this.headTrackingFun.bind(this));
      $(document).bind('facetrackingEvent', this.faceTrackingFun.bind(this));

      var currentUsersCanvas = document.getElementById('currentUsersCanvas');
      var context = currentUsersCanvas.getContext('2d');

      // resize the canvas to fill browser window dynamically
      window.addEventListener('resize', this.resizeCanvas.bind(this), false);
      this.resizeCanvas();
      // this.drawCurrentUsers([], context);

      var that = this;
      this.socket = io();
      this.socket.on('positionUpdate', function (users) {
        that.drawCurrentUsers(users, context);
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.height == this.state.height && prevState.width == this.state.width && prevState.noVisitors == this.state.noVisitors) {
        return;
      }

      var pastUsersCanvas = document.getElementById('pastUsersCanvas');
      var canvasContext = pastUsersCanvas.getContext('2d');
      pastUsersCanvas.width = this.state.width;
      pastUsersCanvas.height = this.state.height;
      this.drawPastUsers(canvasContext);

      var currentUsersCanvas = document.getElementById('currentUsersCanvas');
      canvasContext = currentUsersCanvas.getContext('2d');
      currentUsersCanvas.width = this.state.width;
      currentUsersCanvas.height = this.state.height;
      var imgData = canvasContext.createImageData(this.state.width, this.state.height); // only do this once per page
      this.drawCurrentUsers([], canvasContext);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _WebcamStore2.default.unlisten(this.onChange);
      this.killAllEvents();
    }
  }, {
    key: 'render',
    value: function render() {
      var context = this;
      // TODO: Set up default style in RouteTransition such that even initial load works.
      return _react2.default.createElement(
        'div',
        { className: 'gallery-conservative' },
        _react2.default.createElement(_Header2.default, { prefix: "testApp1" }),
        _react2.default.createElement('canvas', { id: 'inputCanvas', width: '320', height: '240', style: { display: 'none' } }),
        _react2.default.createElement('canvas', { id: 'outputCanvas', width: '320', height: '240', style: { display: 'none', position: 'fixed', top: 0, right: 0 } }),
        _react2.default.createElement('video', { id: 'inputVideo', autoPlay: true, loop: true, style: { display: 'none' } }),
        _react2.default.createElement('canvas', { id: 'pastUsersCanvas', style: { zIndex: -100, position: 'fixed', top: 0, left: 0, height: '100%', width: '100%' } }),
        _react2.default.createElement('canvas', { id: 'currentUsersCanvas', style: { zIndex: -100, position: 'fixed', top: 0, left: 0, height: '100%', width: '100%' } }),
        _react2.default.createElement(
          _RouteTransition2.default,
          { id: this.props.location.pathname, height: context.state.height - 200 },
          this.props.children
        )
      );
    }
  }]);

  return TestApp1;
}(_react2.default.Component);

exports.default = TestApp1;

},{"../actions/WebcamActions.jsx":3,"../stores/WebcamStore.jsx":23,"./Footer.jsx":6,"./GalleryConservative/Header.jsx":12,"./RouteTransition.jsx":16,"react":"react"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RouteTransition = require('./RouteTransition.jsx');

var _RouteTransition2 = _interopRequireDefault(_RouteTransition);

var _Footer = require('./Footer.jsx');

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = require('./GalleryConservative/Header.jsx');

var _Header2 = _interopRequireDefault(_Header);

var _WebcamStore = require('../stores/WebcamStore.jsx');

var _WebcamStore2 = _interopRequireDefault(_WebcamStore);

var _WebcamActions = require('../actions/WebcamActions.jsx');

var _WebcamActions2 = _interopRequireDefault(_WebcamActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import d3 from 'd3';


var TestApp2 = function (_React$Component) {
  _inherits(TestApp2, _React$Component);

  function TestApp2(props) {
    _classCallCheck(this, TestApp2);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TestApp2).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    // this.state = {height: 600}
    _this.state = _WebcamStore2.default.getState();
    _this.currentUsersInterval = {};
    _this.lastSocketEmit = 0;
    _this.colorMap = {};
    return _this;
  }

  _createClass(TestApp2, [{
    key: 'onChange',
    value: function onChange(newState) {
      this.setState(newState);
    }
  }, {
    key: 'killAllEvents',
    value: function killAllEvents(context) {
      $(document).unbind('headtrackingEvent');
      $(document).unbind('headtrackrStatus');
      console.log(this.htracker);
      delete this.htracker;
    }
  }, {
    key: 'navigateAway',
    value: function navigateAway() {
      window.location = '/testApp2/credits';
    }
  }, {
    key: 'headTrackingFun',
    value: function headTrackingFun(ev) {
      var angle = this.state.webcamParams.angle;
      var event = ev.originalEvent;

      var timestamp = Date.now();

      if (timestamp - this.lastSocketEmit > 50) {
        this.socket.emit('facetracking', { x: event.x, y: event.y });
        this.lastSocketEmit = timestamp;
      }

      var obj = {
        X: event.x,
        Y: event.y,
        Z: event.z,
        angle: angle
      };
      //console.log(obj)
      _WebcamActions2.default.webcamUpdate(obj);
    }
  }, {
    key: 'headStatusFun',
    value: function headStatusFun(ev) {
      var event = ev.originalEvent;
      //console.log(event);
      if (event.status == 'redetecting') {
        this.killAllEvents(this);
        this.navigateAway();
      }
    }
  }, {
    key: 'faceTrackingFun',
    value: function faceTrackingFun(ev) {
      var event = ev.originalEvent;
      var x = this.state.webcamParams.X;
      var y = this.state.webcamParams.Y;
      var z = this.state.webcamParams.Z;

      var obj = {
        X: x,
        Y: y,
        Z: z,
        angle: event.angle
      };

      _WebcamActions2.default.webcamUpdate(obj);
    }
  }, {
    key: 'resizeCanvas',
    value: function resizeCanvas() {
      _WebcamActions2.default.windowSizeUpdate({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
  }, {
    key: 'drawPastUsers',
    value: function drawPastUsers(canvasContext) {
      var imgData = canvasContext.createImageData(this.state.width, this.state.height); // only do this once per page
      var windowWidth = this.state.width;
      for (var i = 0; i < this.state.noVisitors; i++) {
        var y = this.state.pointData[i].x;
        var x = this.state.pointData[i].y;
        var index = (x * windowWidth + y) * 4;

        imgData.data[index + 0] = 0;
        imgData.data[index + 1] = 0;
        imgData.data[index + 2] = 0;
        // Un-comment below if you want a random RGB color. Otherwise, all points are black.
        // imgData.data[index + Math.round(Math.random() * 3)] = 255;
        imgData.data[index + 3] = 255;
      }

      canvasContext.putImageData(imgData, 0, 0);
    }
  }, {
    key: 'getRandom',
    value: function getRandom(maxVal) {
      return Math.round(Math.random() * maxVal);
    }
  }, {
    key: 'drawCurrentUsers',
    value: function drawCurrentUsers(svg, currentUsersCoords) {
      var positionList = [];
      for (var key in currentUsersCoords) {
        //console.log(currentUsersCoords[key].y);
        if (!(key in this.colorMap)) {
          this.colorMap[key] = {
            r: this.getRandom(255),
            g: this.getRandom(255),
            b: this.getRandom(255)
          };
        }
        var y = Math.round((currentUsersCoords[key].x + 15) / 30.0 * this.state.width);
        var x = Math.round((20 - currentUsersCoords[key].y) / 20.0 * this.state.height);
        positionList.push({
          x: x,
          y: y,
          key: key
        });
      }

      var windowWidth = this.state.width;
      console.log('New positions');
      for (var i = 0; i < Math.min(positionList.length, 1); i++) {
        console.log(positionList[i].x, positionList[i].y);
        svg.insert("circle", "rect").attr("cy", positionList[i].x).attr("cx", positionList[i].y).attr("r", 1e-5).style("stroke", d3.rgb(this.colorMap[positionList[i].key].r, this.colorMap[positionList[i].key].g, this.colorMap[positionList[i].key].b)).style("stroke-opacity", 1).transition().duration(500).ease(Math.sqrt).attr("r", 20).style("stroke-opacity", 1e-6).remove();

        //d3.event.preventDefault();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _WebcamStore2.default.listen(this.onChange);
      _WebcamActions2.default.windowSizeUpdate({
        height: window.innerHeight,
        width: window.innerWidth
      });
      _WebcamActions2.default.getNoVisitors();

      var videoInput = document.getElementById('inputVideo');
      var canvasInput = document.getElementById('inputCanvas');
      var canvasOutput = document.getElementById('outputCanvas');

      this.htracker = new headtrackr.Tracker({ ui: false, detectionInterval: 20, debug: canvasOutput, calcAngles: true });
      this.htracker.init(videoInput, canvasInput);
      this.htracker.start();

      $(document).bind('headtrackrStatus', this.headStatusFun.bind(this));
      $(document).bind('headtrackingEvent', this.headTrackingFun.bind(this));
      $(document).bind('facetrackingEvent', this.faceTrackingFun.bind(this));

      this.svg = d3.select(".gallery-conservative-v2").append("svg").attr("width", window.innerWidth).attr("height", window.innerHeight);

      this.svg.append("rect").attr("width", window.innerWidth).attr("height", window.innerHeight);

      // resize the canvas to fill browser window dynamically
      window.addEventListener('resize', this.resizeCanvas.bind(this), false);
      this.resizeCanvas();

      var that = this;
      this.socket = io();
      this.socket.on('positionUpdate', function (users) {
        that.drawCurrentUsers(that.svg, users);
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.height == this.state.height && prevState.width == this.state.width && prevState.noVisitors == this.state.noVisitors) {
        return;
      }

      var pastUsersCanvas = document.getElementById('pastUsersCanvas');
      var canvasContext = pastUsersCanvas.getContext('2d');
      pastUsersCanvas.width = this.state.width;
      pastUsersCanvas.height = this.state.height;
      this.drawPastUsers(canvasContext);

      this.drawCurrentUsers(this.svg, []);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _WebcamStore2.default.unlisten(this.onChange);
      this.killAllEvents();
    }
  }, {
    key: 'render',
    value: function render() {
      var context = this;
      // TODO: Set up default style in RouteTransition such that even initial load works.
      return _react2.default.createElement(
        'div',
        { className: 'gallery-conservative gallery-conservative-v2' },
        _react2.default.createElement(_Header2.default, { prefix: "testApp2" }),
        _react2.default.createElement('canvas', { id: 'inputCanvas', width: '320', height: '240', style: { display: 'none' } }),
        _react2.default.createElement('canvas', { id: 'outputCanvas', width: '320', height: '240', style: { display: 'none', position: 'fixed', top: 0, right: 0 } }),
        _react2.default.createElement('video', { id: 'inputVideo', autoPlay: true, loop: true, style: { display: 'none' } }),
        _react2.default.createElement('canvas', { id: 'pastUsersCanvas', style: { zIndex: -100, position: 'fixed', top: 0, left: 0, height: '100%', width: '100%' } }),
        _react2.default.createElement(
          _RouteTransition2.default,
          { id: this.props.location.pathname, height: context.state.height - 200 },
          this.props.children
        )
      );
    }
  }]);

  return TestApp2;
}(_react2.default.Component);

exports.default = TestApp2;

},{"../actions/WebcamActions.jsx":3,"../stores/WebcamStore.jsx":23,"./Footer.jsx":6,"./GalleryConservative/Header.jsx":12,"./RouteTransition.jsx":16,"react":"react"}],19:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":20,"history/lib/createBrowserHistory":30,"react":"react","react-dom":"react-dom","react-router":"react-router"}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _TestApp = require('./components/TestApp1.jsx');

var _TestApp2 = _interopRequireDefault(_TestApp);

var _TestApp2_Navigation = require('./components/TestApp2_Navigation.jsx');

var _TestApp2_Navigation2 = _interopRequireDefault(_TestApp2_Navigation);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Lessons = require('./components/Lessons.jsx');

var _Lessons2 = _interopRequireDefault(_Lessons);

var _Credits = require('./components/GalleryConservative/Credits.jsx');

var _Credits2 = _interopRequireDefault(_Credits);

var _About = require('./components/GalleryConservative/About.jsx');

var _About2 = _interopRequireDefault(_About);

var _History = require('./components/GalleryConservative/History.jsx');

var _History2 = _interopRequireDefault(_History);

var _Exhibition = require('./components/GalleryConservative/Exhibition.jsx');

var _Exhibition2 = _interopRequireDefault(_Exhibition);

var _ExhibitionDiscrete = require('./components/GalleryConservative/ExhibitionDiscrete.jsx');

var _ExhibitionDiscrete2 = _interopRequireDefault(_ExhibitionDiscrete);

var _ExhibitionLeftRight = require('./components/GalleryConservative/ExhibitionLeftRight.jsx');

var _ExhibitionLeftRight2 = _interopRequireDefault(_ExhibitionLeftRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/lessons', component: _Lessons2.default }),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/testApp1', component: _TestApp2.default },
    _react2.default.createElement(_reactRouter.Route, { path: 'credits', component: _Credits2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _About2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'history', component: _History2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'exhibition', component: _Exhibition2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'exhibition2', component: _ExhibitionDiscrete2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'exhibition3', component: _ExhibitionLeftRight2.default })
  ),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/testApp2', component: _TestApp2_Navigation2.default },
    _react2.default.createElement(_reactRouter.Route, { path: 'credits', component: _Credits2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _About2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'history', component: _History2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'exhibition', component: _Exhibition2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'exhibition2', component: _ExhibitionDiscrete2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'exhibition3', component: _ExhibitionLeftRight2.default })
  )
);

},{"./components/App":5,"./components/GalleryConservative/About.jsx":7,"./components/GalleryConservative/Credits.jsx":8,"./components/GalleryConservative/Exhibition.jsx":9,"./components/GalleryConservative/ExhibitionDiscrete.jsx":10,"./components/GalleryConservative/ExhibitionLeftRight.jsx":11,"./components/GalleryConservative/History.jsx":13,"./components/Home":14,"./components/Lessons.jsx":15,"./components/TestApp1.jsx":17,"./components/TestApp2_Navigation.jsx":18,"react":"react","react-router":"react-router"}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _FooterActions = require('../actions/FooterActions.jsx');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterStore = function () {
  function FooterStore() {
    _classCallCheck(this, FooterStore);

    this.bindActions(_FooterActions2.default);
    this.characters = [];
  }

  _createClass(FooterStore, [{
    key: 'onGetTopCharactersSuccess',
    value: function onGetTopCharactersSuccess(data) {
      this.characters = data.slice(0, 5);
    }
  }, {
    key: 'onGetTopCharactersFail',
    value: function onGetTopCharactersFail(jqXhr) {
      // Handle multiple response formats, fallback to HTTP status code number.
      toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
  }]);

  return FooterStore;
}();

exports.default = _alt2.default.createStore(FooterStore);

},{"../actions/FooterActions.jsx":1,"../alt":4}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _LessonsActions = require('../actions/LessonsActions.jsx');

var _LessonsActions2 = _interopRequireDefault(_LessonsActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LessonsStore = function () {
  function LessonsStore() {
    _classCallCheck(this, LessonsStore);

    this.bindActions(_LessonsActions2.default);
    this.lessons = [];
  }

  _createClass(LessonsStore, [{
    key: 'onGetLessonsSuccess',
    value: function onGetLessonsSuccess(data) {
      this.lessons = data;
    }
  }, {
    key: 'onGetLessonsFail',
    value: function onGetLessonsFail(jqXhr) {
      // Handle multiple response formats, fallback to HTTP status code number.
      toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
  }]);

  return LessonsStore;
}();

exports.default = _alt2.default.createStore(LessonsStore);

},{"../actions/LessonsActions.jsx":2,"../alt":4}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _WebcamActions = require('../actions/WebcamActions.jsx');

var _WebcamActions2 = _interopRequireDefault(_WebcamActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebcamStore = function () {
  function WebcamStore() {
    _classCallCheck(this, WebcamStore);

    this.bindActions(_WebcamActions2.default);
    this.webcamParams = {
      X: 0,
      Y: 0,
      Z: 0,
      angle: 0
    };
    this.height = 600;
    this.width = 600;
    this.pointData = [];
    this.noVisitors = 0;
  }

  _createClass(WebcamStore, [{
    key: 'onWebcamUpdate',
    value: function onWebcamUpdate(webcamParams) {
      //console.log(webcamParams)
      this.webcamParams = webcamParams;
    }
  }, {
    key: 'onWindowSizeUpdate',
    value: function onWindowSizeUpdate(windowSizeObj) {
      this.height = windowSizeObj.height;
      this.width = windowSizeObj.width;
      this.updatePastUsersCanvas();
    }
  }, {
    key: 'onGetNoVisitorsSuccess',
    value: function onGetNoVisitorsSuccess(noVisitors) {
      this.noVisitors = noVisitors;
      this.updatePastUsersCanvas();
    }
  }, {
    key: 'updatePastUsersCanvas',
    value: function updatePastUsersCanvas() {
      this.pointData = [];
      for (var i = 0; i < this.noVisitors; i++) {
        var y = Math.round(Math.random() * this.height);
        var x = Math.round(Math.random() * this.width);
        this.pointData.push({
          x: x,
          y: y
        });
      }
    }
  }]);

  return WebcamStore;
}();

exports.default = _alt2.default.createStore(WebcamStore);

},{"../actions/WebcamActions.jsx":3,"../alt":4}],24:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],25:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],26:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],27:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))
},{"_process":24,"warning":42}],28:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],29:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],30:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./Actions":25,"./DOMStateStorage":27,"./DOMUtils":28,"./ExecutionEnvironment":29,"./createDOMHistory":31,"./parsePath":36,"_process":24,"invariant":41}],31:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./DOMUtils":28,"./ExecutionEnvironment":29,"./createHistory":32,"_process":24,"invariant":41}],32:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":25,"./AsyncUtils":26,"./createLocation":33,"./deprecate":34,"./parsePath":36,"./runTransitionHook":37,"deep-equal":38}],33:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if (typeof action === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":25,"./parsePath":36}],34:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];
},{}],35:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],36:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./extractPath":35,"_process":24,"warning":42}],37:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":24,"warning":42}],38:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":39,"./lib/keys.js":40}],39:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],40:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],41:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))
},{"_process":24}],42:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))
},{"_process":24}],43:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mapToZero = require('./mapToZero');

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = require('./stripStyle');

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = require('./stepper');

var _stepper4 = _interopRequireDefault(_stepper3);

var _performanceNow = require('performance-now');

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = require('./shouldStopAnimation');

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var msPerFrame = 1000 / 60;

var Motion = _react2['default'].createClass({
  displayName: 'Motion',

  propTypes: {
    // TOOD: warn against putting a config in here
    defaultStyle: _react.PropTypes.objectOf(_react.PropTypes.number),
    style: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object])).isRequired,
    children: _react.PropTypes.func.isRequired,
    onRest: _react.PropTypes.func
  },

  getInitialState: function getInitialState() {
    var _props = this.props;
    var defaultStyle = _props.defaultStyle;
    var style = _props.style;

    var currentStyle = defaultStyle || _stripStyle2['default'](style);
    var currentVelocity = _mapToZero2['default'](currentStyle);
    return {
      currentStyle: currentStyle,
      currentVelocity: currentVelocity,
      lastIdealStyle: currentStyle,
      lastIdealVelocity: currentVelocity
    };
  },

  wasAnimating: false,
  animationID: null,
  prevTime: 0,
  accumulatedTime: 0,
  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400
  unreadPropStyle: null,
  // after checking for unreadPropStyle != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)
  clearUnreadPropStyle: function clearUnreadPropStyle(destStyle) {
    var dirty = false;
    var _state = this.state;
    var currentStyle = _state.currentStyle;
    var currentVelocity = _state.currentVelocity;
    var lastIdealStyle = _state.lastIdealStyle;
    var lastIdealVelocity = _state.lastIdealVelocity;

    for (var key in destStyle) {
      if (!destStyle.hasOwnProperty(key)) {
        continue;
      }

      var styleValue = destStyle[key];
      if (typeof styleValue === 'number') {
        if (!dirty) {
          dirty = true;
          currentStyle = _extends({}, currentStyle);
          currentVelocity = _extends({}, currentVelocity);
          lastIdealStyle = _extends({}, lastIdealStyle);
          lastIdealVelocity = _extends({}, lastIdealVelocity);
        }

        currentStyle[key] = styleValue;
        currentVelocity[key] = 0;
        lastIdealStyle[key] = styleValue;
        lastIdealVelocity[key] = 0;
      }
    }

    if (dirty) {
      this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
    }
  },

  startAnimationIfNecessary: function startAnimationIfNecessary() {
    var _this = this;

    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
    // call cb? No, otherwise accidental parent rerender causes cb trigger
    this.animationID = _raf2['default'](function () {
      // check if we need to animate in the first place
      var propsStyle = _this.props.style;
      if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
        if (_this.wasAnimating && _this.props.onRest) {
          _this.props.onRest();
        }

        // no need to cancel animationID here; shouldn't have any in flight
        _this.animationID = null;
        _this.wasAnimating = false;
        _this.accumulatedTime = 0;
        return;
      }

      _this.wasAnimating = true;

      var currentTime = _performanceNow2['default']();
      var timeDelta = currentTime - _this.prevTime;
      _this.prevTime = currentTime;
      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
      // more than 10 frames? prolly switched browser tab. Restart
      if (_this.accumulatedTime > msPerFrame * 10) {
        _this.accumulatedTime = 0;
      }

      if (_this.accumulatedTime === 0) {
        // no need to cancel animationID here; shouldn't have any in flight
        _this.animationID = null;
        _this.startAnimationIfNecessary();
        return;
      }

      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

      var newLastIdealStyle = {};
      var newLastIdealVelocity = {};
      var newCurrentStyle = {};
      var newCurrentVelocity = {};

      for (var key in propsStyle) {
        if (!propsStyle.hasOwnProperty(key)) {
          continue;
        }

        var styleValue = propsStyle[key];
        if (typeof styleValue === 'number') {
          newCurrentStyle[key] = styleValue;
          newCurrentVelocity[key] = 0;
          newLastIdealStyle[key] = styleValue;
          newLastIdealVelocity[key] = 0;
        } else {
          var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
          var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
          for (var i = 0; i < framesToCatchUp; i++) {
            var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

            newLastIdealStyleValue = _stepper[0];
            newLastIdealVelocityValue = _stepper[1];
          }

          var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

          var nextIdealX = _stepper2[0];
          var nextIdealV = _stepper2[1];

          newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
          newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
          newLastIdealStyle[key] = newLastIdealStyleValue;
          newLastIdealVelocity[key] = newLastIdealVelocityValue;
        }
      }

      _this.animationID = null;
      // the amount we're looped over above
      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

      _this.setState({
        currentStyle: newCurrentStyle,
        currentVelocity: newCurrentVelocity,
        lastIdealStyle: newLastIdealStyle,
        lastIdealVelocity: newLastIdealVelocity
      });

      _this.unreadPropStyle = null;

      _this.startAnimationIfNecessary();
    });
  },

  componentDidMount: function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (this.unreadPropStyle != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyle);
    }

    this.unreadPropStyle = props.style;
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  },

  render: function render() {
    var renderedChildren = this.props.children(this.state.currentStyle);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  }
});

exports['default'] = Motion;
module.exports = exports['default'];
},{"./mapToZero":46,"./shouldStopAnimation":51,"./stepper":53,"./stripStyle":54,"performance-now":55,"raf":56,"react":"react"}],44:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mapToZero = require('./mapToZero');

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = require('./stripStyle');

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = require('./stepper');

var _stepper4 = _interopRequireDefault(_stepper3);

var _performanceNow = require('performance-now');

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = require('./shouldStopAnimation');

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var msPerFrame = 1000 / 60;

function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
  for (var i = 0; i < currentStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
      return false;
    }
  }
  return true;
}

var StaggeredMotion = _react2['default'].createClass({
  displayName: 'StaggeredMotion',

  propTypes: {
    // TOOD: warn against putting a config in here
    defaultStyles: _react.PropTypes.arrayOf(_react.PropTypes.objectOf(_react.PropTypes.number)),
    styles: _react.PropTypes.func.isRequired,
    children: _react.PropTypes.func.isRequired
  },

  getInitialState: function getInitialState() {
    var _props = this.props;
    var defaultStyles = _props.defaultStyles;
    var styles = _props.styles;

    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
    var currentVelocities = currentStyles.map(function (currentStyle) {
      return _mapToZero2['default'](currentStyle);
    });
    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: currentStyles,
      lastIdealVelocities: currentVelocities
    };
  },

  animationID: null,
  prevTime: 0,
  accumulatedTime: 0,
  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400
  unreadPropStyles: null,
  // after checking for unreadPropStyles != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)
  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
    var _state = this.state;
    var currentStyles = _state.currentStyles;
    var currentVelocities = _state.currentVelocities;
    var lastIdealStyles = _state.lastIdealStyles;
    var lastIdealVelocities = _state.lastIdealVelocities;

    var someDirty = false;
    for (var i = 0; i < unreadPropStyles.length; i++) {
      var unreadPropStyle = unreadPropStyles[i];
      var dirty = false;

      for (var key in unreadPropStyle) {
        if (!unreadPropStyle.hasOwnProperty(key)) {
          continue;
        }

        var styleValue = unreadPropStyle[key];
        if (typeof styleValue === 'number') {
          if (!dirty) {
            dirty = true;
            someDirty = true;
            currentStyles[i] = _extends({}, currentStyles[i]);
            currentVelocities[i] = _extends({}, currentVelocities[i]);
            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
          }
          currentStyles[i][key] = styleValue;
          currentVelocities[i][key] = 0;
          lastIdealStyles[i][key] = styleValue;
          lastIdealVelocities[i][key] = 0;
        }
      }
    }

    if (someDirty) {
      this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
    }
  },

  startAnimationIfNecessary: function startAnimationIfNecessary() {
    var _this = this;

    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
    // call cb? No, otherwise accidental parent rerender causes cb trigger
    this.animationID = _raf2['default'](function () {
      var destStyles = _this.props.styles(_this.state.lastIdealStyles);

      // check if we need to animate in the first place
      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
        // no need to cancel animationID here; shouldn't have any in flight
        _this.animationID = null;
        _this.accumulatedTime = 0;
        return;
      }

      var currentTime = _performanceNow2['default']();
      var timeDelta = currentTime - _this.prevTime;
      _this.prevTime = currentTime;
      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
      // more than 10 frames? prolly switched browser tab. Restart
      if (_this.accumulatedTime > msPerFrame * 10) {
        _this.accumulatedTime = 0;
      }

      if (_this.accumulatedTime === 0) {
        // no need to cancel animationID here; shouldn't have any in flight
        _this.animationID = null;
        _this.startAnimationIfNecessary();
        return;
      }

      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

      var newLastIdealStyles = [];
      var newLastIdealVelocities = [];
      var newCurrentStyles = [];
      var newCurrentVelocities = [];

      for (var i = 0; i < destStyles.length; i++) {
        var destStyle = destStyles[i];
        var newCurrentStyle = {};
        var newCurrentVelocity = {};
        var newLastIdealStyle = {};
        var newLastIdealVelocity = {};

        for (var key in destStyle) {
          if (!destStyle.hasOwnProperty(key)) {
            continue;
          }

          var styleValue = destStyle[key];
          if (typeof styleValue === 'number') {
            newCurrentStyle[key] = styleValue;
            newCurrentVelocity[key] = 0;
            newLastIdealStyle[key] = styleValue;
            newLastIdealVelocity[key] = 0;
          } else {
            var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
            var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
            for (var j = 0; j < framesToCatchUp; j++) {
              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              newLastIdealStyleValue = _stepper[0];
              newLastIdealVelocityValue = _stepper[1];
            }

            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

            var nextIdealX = _stepper2[0];
            var nextIdealV = _stepper2[1];

            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
            newLastIdealStyle[key] = newLastIdealStyleValue;
            newLastIdealVelocity[key] = newLastIdealVelocityValue;
          }
        }

        newCurrentStyles[i] = newCurrentStyle;
        newCurrentVelocities[i] = newCurrentVelocity;
        newLastIdealStyles[i] = newLastIdealStyle;
        newLastIdealVelocities[i] = newLastIdealVelocity;
      }

      _this.animationID = null;
      // the amount we're looped over above
      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

      _this.setState({
        currentStyles: newCurrentStyles,
        currentVelocities: newCurrentVelocities,
        lastIdealStyles: newLastIdealStyles,
        lastIdealVelocities: newLastIdealVelocities
      });

      _this.unreadPropStyles = null;

      _this.startAnimationIfNecessary();
    });
  },

  componentDidMount: function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (this.unreadPropStyles != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  },

  render: function render() {
    var renderedChildren = this.props.children(this.state.currentStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  }
});

exports['default'] = StaggeredMotion;
module.exports = exports['default'];
},{"./mapToZero":46,"./shouldStopAnimation":51,"./stepper":53,"./stripStyle":54,"performance-now":55,"raf":56,"react":"react"}],45:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mapToZero = require('./mapToZero');

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = require('./stripStyle');

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = require('./stepper');

var _stepper4 = _interopRequireDefault(_stepper3);

var _mergeDiff = require('./mergeDiff');

var _mergeDiff2 = _interopRequireDefault(_mergeDiff);

var _performanceNow = require('performance-now');

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = require('./shouldStopAnimation');

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var msPerFrame = 1000 / 60;

// the children function & (potential) styles function asks as param an
// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
// {key: string, data?: any, style: PlainStyle}. However, the way we keep
// internal states doesn't contain such a data structure (check the state and
// TransitionMotionState). So when children function and others ask for such
// data we need to generate them on the fly by combining mergedPropsStyles and
// currentStyles/lastIdealStyles
function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
  if (unreadPropStyles == null) {
    // $FlowFixMe
    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
      return {
        key: mergedPropsStyle.key,
        data: mergedPropsStyle.data,
        style: plainStyles[i]
      };
    });
  }
  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
    // $FlowFixMe
    for (var j = 0; j < unreadPropStyles.length; j++) {
      // $FlowFixMe
      if (unreadPropStyles[j].key === mergedPropsStyle.key) {
        return {
          // $FlowFixMe
          key: unreadPropStyles[j].key,
          data: unreadPropStyles[j].data,
          style: plainStyles[i]
        };
      }
    }
    // $FlowFixMe
    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
  });
}

function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
  if (mergedPropsStyles.length !== destStyles.length) {
    return false;
  }

  for (var i = 0; i < mergedPropsStyles.length; i++) {
    if (mergedPropsStyles[i].key !== destStyles[i].key) {
      return false;
    }
  }

  // we have the invariant that mergedPropsStyles and
  // currentStyles/currentVelocities/last* are synced in terms of cells, see
  // mergeAndSync comment for more info
  for (var i = 0; i < mergedPropsStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
      return false;
    }
  }

  return true;
}

// core key merging logic

// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
// c}, previous current (interpolating) style is {a, b}
// **invariant**: current[i] corresponds to merged[i] in terms of key

// steps:
// turn merged style into {a?, b, c}
//    add c, value of c is destStyles.c
//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
// turn current (interpolating) style from {a, b} into {a?, b, c}
//    maybe remove a
//    certainly add c, value of c is willEnter(c)
// loop over merged and construct new current
// dest doesn't change, that's owner's
function mergeAndSync(willEnter, willLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
    var leavingStyle = willLeave(oldMergedPropsStyle);
    if (leavingStyle == null) {
      return null;
    }
    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
      return null;
    }
    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
  });

  var newCurrentStyles = [];
  var newCurrentVelocities = [];
  var newLastIdealStyles = [];
  var newLastIdealVelocities = [];
  for (var i = 0; i < newMergedPropsStyles.length; i++) {
    var newMergedPropsStyleCell = newMergedPropsStyles[i];
    var foundOldIndex = null;
    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
        foundOldIndex = j;
        break;
      }
    }
    // TODO: key search code
    if (foundOldIndex == null) {
      var plainStyle = willEnter(newMergedPropsStyleCell);
      newCurrentStyles[i] = plainStyle;
      newLastIdealStyles[i] = plainStyle;

      // $FlowFixMe
      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
      newCurrentVelocities[i] = velocity;
      newLastIdealVelocities[i] = velocity;
    } else {
      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
    }
  }

  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
}

var TransitionMotion = _react2['default'].createClass({
  displayName: 'TransitionMotion',

  propTypes: {
    defaultStyles: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      key: _react.PropTypes.string.isRequired,
      data: _react.PropTypes.any,
      style: _react.PropTypes.objectOf(_react.PropTypes.number).isRequired
    })),
    styles: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.arrayOf(_react.PropTypes.shape({
      key: _react.PropTypes.string.isRequired,
      data: _react.PropTypes.any,
      style: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object])).isRequired
    }))]).isRequired,
    children: _react.PropTypes.func.isRequired,
    willLeave: _react.PropTypes.func,
    willEnter: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      willEnter: function willEnter(styleThatEntered) {
        return _stripStyle2['default'](styleThatEntered.style);
      },
      // recall: returning null makes the current unmounting TransitionStyle
      // disappear immediately
      willLeave: function willLeave() {
        return null;
      }
    };
  },

  getInitialState: function getInitialState() {
    var _props = this.props;
    var defaultStyles = _props.defaultStyles;
    var styles = _props.styles;
    var willEnter = _props.willEnter;
    var willLeave = _props.willLeave;

    var destStyles = typeof styles === 'function' ? styles() : styles;

    // this is special. for the first time around, we don't have a comparison
    // between last (no last) and current merged props. we'll compute last so:
    // say default is {a, b} and styles (dest style) is {b, c}, we'll
    // fabricate last as {a, b}
    var oldMergedPropsStyles = undefined;
    if (defaultStyles == null) {
      oldMergedPropsStyles = destStyles;
    } else {
      // $FlowFixMe
      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
        // TODO: key search code
        for (var i = 0; i < destStyles.length; i++) {
          if (destStyles[i].key === defaultStyleCell.key) {
            return destStyles[i];
          }
        }
        return defaultStyleCell;
      });
    }
    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
      return _stripStyle2['default'](s.style);
    }) : defaultStyles.map(function (s) {
      return _stripStyle2['default'](s.style);
    });
    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
      return _mapToZero2['default'](s.style);
    }) : defaultStyles.map(function (s) {
      return _mapToZero2['default'](s.style);
    });

    var _mergeAndSync = mergeAndSync(
    // $FlowFixMe
    willEnter,
    // $FlowFixMe
    willLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
    oldCurrentVelocities);

    var mergedPropsStyles = _mergeAndSync[0];
    var currentStyles = _mergeAndSync[1];
    var currentVelocities = _mergeAndSync[2];
    var lastIdealStyles = _mergeAndSync[3];
    var lastIdealVelocities = _mergeAndSync[4];
    // oldLastIdealVelocities really

    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: lastIdealStyles,
      lastIdealVelocities: lastIdealVelocities,
      mergedPropsStyles: mergedPropsStyles
    };
  },

  animationID: null,
  prevTime: 0,
  accumulatedTime: 0,
  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400
  unreadPropStyles: null,
  // after checking for unreadPropStyles != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)
  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
    var _mergeAndSync2 = mergeAndSync(
    // $FlowFixMe
    this.props.willEnter,
    // $FlowFixMe
    this.props.willLeave, this.state.mergedPropsStyles, unreadPropStyles, this.state.currentStyles, this.state.currentVelocities, this.state.lastIdealStyles, this.state.lastIdealVelocities);

    var mergedPropsStyles = _mergeAndSync2[0];
    var currentStyles = _mergeAndSync2[1];
    var currentVelocities = _mergeAndSync2[2];
    var lastIdealStyles = _mergeAndSync2[3];
    var lastIdealVelocities = _mergeAndSync2[4];

    for (var i = 0; i < unreadPropStyles.length; i++) {
      var unreadPropStyle = unreadPropStyles[i].style;
      var dirty = false;

      for (var key in unreadPropStyle) {
        if (!unreadPropStyle.hasOwnProperty(key)) {
          continue;
        }

        var styleValue = unreadPropStyle[key];
        if (typeof styleValue === 'number') {
          if (!dirty) {
            dirty = true;
            currentStyles[i] = _extends({}, currentStyles[i]);
            currentVelocities[i] = _extends({}, currentVelocities[i]);
            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
            mergedPropsStyles[i] = {
              key: mergedPropsStyles[i].key,
              data: mergedPropsStyles[i].data,
              style: _extends({}, mergedPropsStyles[i].style)
            };
          }
          currentStyles[i][key] = styleValue;
          currentVelocities[i][key] = 0;
          lastIdealStyles[i][key] = styleValue;
          lastIdealVelocities[i][key] = 0;
          mergedPropsStyles[i].style[key] = styleValue;
        }
      }
    }

    // unlike the other 2 components, we can't detect staleness and optionally
    // opt out of setState here. each style object's data might contain new
    // stuff we're not/cannot compare
    this.setState({
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      mergedPropsStyles: mergedPropsStyles,
      lastIdealStyles: lastIdealStyles,
      lastIdealVelocities: lastIdealVelocities
    });
  },

  startAnimationIfNecessary: function startAnimationIfNecessary() {
    var _this = this;

    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
    // call cb? No, otherwise accidental parent rerender causes cb trigger
    this.animationID = _raf2['default'](function () {
      var propStyles = _this.props.styles;
      var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;

      // check if we need to animate in the first place
      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
        // no need to cancel animationID here; shouldn't have any in flight
        _this.animationID = null;
        _this.accumulatedTime = 0;
        return;
      }

      var currentTime = _performanceNow2['default']();
      var timeDelta = currentTime - _this.prevTime;
      _this.prevTime = currentTime;
      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
      // more than 10 frames? prolly switched browser tab. Restart
      if (_this.accumulatedTime > msPerFrame * 10) {
        _this.accumulatedTime = 0;
      }

      if (_this.accumulatedTime === 0) {
        // no need to cancel animationID here; shouldn't have any in flight
        _this.animationID = null;
        _this.startAnimationIfNecessary();
        return;
      }

      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

      var _mergeAndSync3 = mergeAndSync(
      // $FlowFixMe
      _this.props.willEnter,
      // $FlowFixMe
      _this.props.willLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

      var newMergedPropsStyles = _mergeAndSync3[0];
      var newCurrentStyles = _mergeAndSync3[1];
      var newCurrentVelocities = _mergeAndSync3[2];
      var newLastIdealStyles = _mergeAndSync3[3];
      var newLastIdealVelocities = _mergeAndSync3[4];

      for (var i = 0; i < newMergedPropsStyles.length; i++) {
        var newMergedPropsStyle = newMergedPropsStyles[i].style;
        var newCurrentStyle = {};
        var newCurrentVelocity = {};
        var newLastIdealStyle = {};
        var newLastIdealVelocity = {};

        for (var key in newMergedPropsStyle) {
          if (!newMergedPropsStyle.hasOwnProperty(key)) {
            continue;
          }

          var styleValue = newMergedPropsStyle[key];
          if (typeof styleValue === 'number') {
            newCurrentStyle[key] = styleValue;
            newCurrentVelocity[key] = 0;
            newLastIdealStyle[key] = styleValue;
            newLastIdealVelocity[key] = 0;
          } else {
            var newLastIdealStyleValue = newLastIdealStyles[i][key];
            var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
            for (var j = 0; j < framesToCatchUp; j++) {
              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              newLastIdealStyleValue = _stepper[0];
              newLastIdealVelocityValue = _stepper[1];
            }

            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

            var nextIdealX = _stepper2[0];
            var nextIdealV = _stepper2[1];

            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
            newLastIdealStyle[key] = newLastIdealStyleValue;
            newLastIdealVelocity[key] = newLastIdealVelocityValue;
          }
        }

        newLastIdealStyles[i] = newLastIdealStyle;
        newLastIdealVelocities[i] = newLastIdealVelocity;
        newCurrentStyles[i] = newCurrentStyle;
        newCurrentVelocities[i] = newCurrentVelocity;
      }

      _this.animationID = null;
      // the amount we're looped over above
      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

      _this.setState({
        currentStyles: newCurrentStyles,
        currentVelocities: newCurrentVelocities,
        lastIdealStyles: newLastIdealStyles,
        lastIdealVelocities: newLastIdealVelocities,
        mergedPropsStyles: newMergedPropsStyles
      });

      _this.unreadPropStyles = null;

      _this.startAnimationIfNecessary();
    });
  },

  componentDidMount: function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (this.unreadPropStyles) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    if (typeof props.styles === 'function') {
      // $FlowFixMe
      this.unreadPropStyles = props.styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
    } else {
      this.unreadPropStyles = props.styles;
    }

    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  },

  render: function render() {
    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
    var renderedChildren = this.props.children(hydratedStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  }
});

exports['default'] = TransitionMotion;
module.exports = exports['default'];

// list of styles, each containing interpolating values. Part of what's passed
// to children function. Notice that this is
// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
// contains the key & data info (so that we only have a single source of truth
// for these, and to save space). Check the comment for `rehydrateStyles` to
// see how we regenerate the entirety of what's passed to children function

// the array that keeps track of currently rendered stuff! Including stuff
// that you've unmounted but that's still animating. This is where it lives
},{"./mapToZero":46,"./mergeDiff":47,"./shouldStopAnimation":51,"./stepper":53,"./stripStyle":54,"performance-now":55,"raf":56,"react":"react"}],46:[function(require,module,exports){


// currently used to initiate the velocity style object to 0
'use strict';

exports.__esModule = true;
exports['default'] = mapToZero;

function mapToZero(obj) {
  var ret = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      ret[key] = 0;
    }
  }
  return ret;
}

module.exports = exports['default'];
},{}],47:[function(require,module,exports){


// core keys merging algorithm. If previous render's keys are [a, b], and the
// next render's [c, b, d], what's the final merged keys and ordering?

// - c and a must both be before b
// - b before d
// - ordering between a and c ambiguous

// this reduces to merging two partially ordered lists (e.g. lists where not
// every item has a definite ordering, like comparing a and c above). For the
// ambiguous ordering we deterministically choose to place the next render's
// item after the previous'; so c after a

// this is called a topological sorting. Except the existing algorithms don't
// work well with js bc of the amount of allocation, and isn't optimized for our
// current use-case bc the runtime is linear in terms of edges (see wiki for
// meaning), which is huge when two lists have many common elements
'use strict';

exports.__esModule = true;
exports['default'] = mergeDiff;

function mergeDiff(prev, next, onRemove) {
  // bookkeeping for easier access of a key's index below. This is 2 allocations +
  // potentially triggering chrome hash map mode for objs (so it might be faster

  var prevKeyIndex = {};
  for (var i = 0; i < prev.length; i++) {
    prevKeyIndex[prev[i].key] = i;
  }
  var nextKeyIndex = {};
  for (var i = 0; i < next.length; i++) {
    nextKeyIndex[next[i].key] = i;
  }

  // first, an overly elaborate way of merging prev and next, eliminating
  // duplicates (in terms of keys). If there's dupe, keep the item in next).
  // This way of writing it saves allocations
  var ret = [];
  for (var i = 0; i < next.length; i++) {
    ret[i] = next[i];
  }
  for (var i = 0; i < prev.length; i++) {
    if (!nextKeyIndex.hasOwnProperty(prev[i].key)) {
      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
      // merge in keys that the user desires to kill
      var fill = onRemove(i, prev[i]);
      if (fill != null) {
        ret.push(fill);
      }
    }
  }

  // now all the items all present. Core sorting logic to have the right order
  return ret.sort(function (a, b) {
    var nextOrderA = nextKeyIndex[a.key];
    var nextOrderB = nextKeyIndex[b.key];
    var prevOrderA = prevKeyIndex[a.key];
    var prevOrderB = prevKeyIndex[b.key];

    if (nextOrderA != null && nextOrderB != null) {
      // both keys in next
      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
    } else if (prevOrderA != null && prevOrderB != null) {
      // both keys in prev
      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
    } else if (nextOrderA != null) {
      // key a in next, key b in prev

      // how to determine the order between a and b? We find a "pivot" (term
      // abuse), a key present in both prev and next, that is sandwiched between
      // a and b. In the context of our above example, if we're comparing a and
      // d, b's (the only) pivot
      for (var i = 0; i < next.length; i++) {
        var pivot = next[i].key;
        if (!prevKeyIndex.hasOwnProperty(pivot)) {
          continue;
        }

        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
          return -1;
        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
          return 1;
        }
      }
      // pluggable. default to: next bigger than prev
      return 1;
    }
    // prevOrderA, nextOrderB
    for (var i = 0; i < next.length; i++) {
      var pivot = next[i].key;
      if (!prevKeyIndex.hasOwnProperty(pivot)) {
        continue;
      }
      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
        return 1;
      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
        return -1;
      }
    }
    // pluggable. default to: next bigger than prev
    return -1;
  });
}

module.exports = exports['default'];
// to loop through and find a key's index each time), but I no longer care
},{}],48:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports["default"] = {
  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
  gentle: { stiffness: 120, damping: 14 },
  wobbly: { stiffness: 180, damping: 12 },
  stiff: { stiffness: 210, damping: 20 }
};
module.exports = exports["default"];
},{}],49:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

var _Motion = require('./Motion');

exports.Motion = _interopRequire(_Motion);

var _StaggeredMotion = require('./StaggeredMotion');

exports.StaggeredMotion = _interopRequire(_StaggeredMotion);

var _TransitionMotion = require('./TransitionMotion');

exports.TransitionMotion = _interopRequire(_TransitionMotion);

var _spring = require('./spring');

exports.spring = _interopRequire(_spring);

var _presets = require('./presets');

exports.presets = _interopRequire(_presets);

// deprecated, dummy warning function

var _reorderKeys = require('./reorderKeys');

exports.reorderKeys = _interopRequire(_reorderKeys);
},{"./Motion":43,"./StaggeredMotion":44,"./TransitionMotion":45,"./presets":48,"./reorderKeys":50,"./spring":52}],50:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports['default'] = reorderKeys;

var hasWarned = false;

function reorderKeys() {
  if (process.env.NODE_ENV === 'development') {
    if (!hasWarned) {
      hasWarned = true;
      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
    }
  }
}

module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":24}],51:[function(require,module,exports){


// usage assumption: currentStyle values have already been rendered but it says
// nothing of whether currentStyle is stale (see unreadPropStyle)
'use strict';

exports.__esModule = true;
exports['default'] = shouldStopAnimation;

function shouldStopAnimation(currentStyle, style, currentVelocity) {
  for (var key in style) {
    if (!style.hasOwnProperty(key)) {
      continue;
    }

    if (currentVelocity[key] !== 0) {
      return false;
    }

    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
    // stepper will have already taken care of rounding precision errors, so
    // won't have such thing as 0.9999 !=== 1
    if (currentStyle[key] !== styleValue) {
      return false;
    }
  }

  return true;
}

module.exports = exports['default'];
},{}],52:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = spring;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _presets = require('./presets');

var _presets2 = _interopRequireDefault(_presets);

var defaultConfig = _extends({}, _presets2['default'].noWobble, {
  precision: 0.01
});

function spring(val, config) {
  return _extends({}, defaultConfig, config, { val: val });
}

module.exports = exports['default'];
},{"./presets":48}],53:[function(require,module,exports){


// stepper is used a lot. Saves allocation to return the same array wrapper.
// This is fine and danger-free against mutations because the callsite
// immediately destructures it and gets the numbers inside without passing the
"use strict";

exports.__esModule = true;
exports["default"] = stepper;

var reusedTuple = [];

function stepper(secondPerFrame, x, v, destX, k, b, precision) {
  // Spring stiffness, in kg / s^2

  // for animations, destX is really spring length (spring at rest). initial
  // position is considered as the stretched/compressed position of a spring
  var Fspring = -k * (x - destX);

  // Damping, in kg / s
  var Fdamper = -b * v;

  // usually we put mass here, but for animation purposes, specifying mass is a
  // bit redundant. you could simply adjust k and b accordingly
  // let a = (Fspring + Fdamper) / mass;
  var a = Fspring + Fdamper;

  var newV = v + a * secondPerFrame;
  var newX = x + newV * secondPerFrame;

  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
    reusedTuple[0] = destX;
    reusedTuple[1] = 0;
    return reusedTuple;
  }

  reusedTuple[0] = newX;
  reusedTuple[1] = newV;
  return reusedTuple;
}

module.exports = exports["default"];
// array reference around.
},{}],54:[function(require,module,exports){

// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}

'use strict';

exports.__esModule = true;
exports['default'] = stripStyle;

function stripStyle(style) {
  var ret = {};
  for (var key in style) {
    if (!style.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
  }
  return ret;
}

module.exports = exports['default'];
},{}],55:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.7.1
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

}).call(this,require('_process'))
},{"_process":24}],56:[function(require,module,exports){
(function (global){
var now = require('performance-now')
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function() {
  root.requestAnimationFrame = raf
  root.cancelAnimationFrame = caf
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"performance-now":55}]},{},[19]);
