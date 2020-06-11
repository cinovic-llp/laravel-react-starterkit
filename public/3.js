(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/Module/Users/Action/Index.js":
/*!***************************************************!*\
  !*** ./resources/js/Module/Users/Action/Index.js ***!
  \***************************************************/
/*! exports provided: GET_USER, DISPLAY_USER, GET_USER_LIST, DISPLAY_USER_LIST, ActionGetUserDetails, ActionDisplayUserDetails, ActionDisplayUserList, ActionGetUserList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER", function() { return GET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_USER", function() { return DISPLAY_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_LIST", function() { return GET_USER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_USER_LIST", function() { return DISPLAY_USER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionGetUserDetails", function() { return ActionGetUserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDisplayUserDetails", function() { return ActionDisplayUserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDisplayUserList", function() { return ActionDisplayUserList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionGetUserList", function() { return ActionGetUserList; });
var GET_USER = "GET_USER";
var DISPLAY_USER = "DISPLAY_USER";
var GET_USER_LIST = "GET_USER_LIST";
var DISPLAY_USER_LIST = "DISPLAY_USER_LIST";
var ActionGetUserDetails = function ActionGetUserDetails() {
  return {
    type: GET_USER
  };
};
var ActionDisplayUserDetails = function ActionDisplayUserDetails(user) {
  return {
    type: DISPLAY_USER,
    payload: user
  };
};
var ActionDisplayUserList = function ActionDisplayUserList(user) {
  return {
    type: DISPLAY_USER_LIST,
    payload: user
  };
};
var ActionGetUserList = function ActionGetUserList(perPage, page) {
  return {
    type: GET_USER_LIST,
    payload: {
      perPage: perPage,
      page: page
    }
  };
};

/***/ }),

/***/ "./resources/js/Module/Users/Views/Users.js":
/*!**************************************************!*\
  !*** ./resources/js/Module/Users/Views/Users.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Action_Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Action/Index */ "./resources/js/Module/Users/Action/Index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 //import usersData from './UsersData'

var Users = /*#__PURE__*/function (_Component) {
  _inherits(Users, _Component);

  var _super = _createSuper(Users);

  function Users(props) {
    var _this;

    _classCallCheck(this, Users);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function (async) {
      var _this$state = _this.state,
          perPage = _this$state.perPage,
          page = _this$state.page;

      _this.props.ActionGetUserList(perPage, page);
    });

    _this.state = {
      perPage: 10,
      page: 1
    };
    return _this;
  }

  _createClass(Users, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var fetchUsers = function fetchUsers(async) {
        var _this2$state = _this2.state,
            perPage = _this2$state.perPage,
            page = _this2$state.page;

        _this2.props.ActionGetUserList(perPage, page);
      };

      var handlePerRowsChange = function handlePerRowsChange(newPerPage, page) {
        _this2.setState({
          perPage: newPerPage
        });

        _this2.setState({
          page: page
        });

        fetchUsers();
      };

      var handlePageChange = function handlePageChange(page) {
        _this2.setState({
          page: page
        });

        fetchUsers();
      };

      var BootyCheckbox = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {
        var onClick = _ref.onClick,
            rest = _objectWithoutProperties(_ref, ["onClick"]);

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "custom-control custom-checkbox"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
          type: "checkbox",
          className: "custom-control-input",
          ref: ref
        }, rest)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "custom-control-label",
          onClick: onClick
        }));
      });
      var columns = [{
        name: "Name",
        selector: "name",
        sortable: true
      }, {
        name: "Email",
        selector: "email",
        sortable: true,
        right: true
      }, {
        name: "Created At",
        selector: "created_at",
        sortable: true,
        right: true
      }, {
        name: "Updated At",
        selector: "updated_at",
        sortable: true,
        right: true
      }];
      var userList = [];
      var totalRows = 0;
      var user = this.props.user;

      if (user.user == '' || user.user == undefined) {} else {
        if (user.user.data && user.user.data.length != 0) {
          userList = user.user.data;
          totalRows = user.user.total;
        }
      }

      var loading = this.props.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, loading, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_data_table_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
        title: "Users",
        columns: columns,
        data: userList,
        progressPending: loading,
        pagination: true,
        paginationServer: true,
        paginationTotalRows: totalRows,
        selectableRows: true,
        onChangeRowsPerPage: handlePerRowsChange,
        onChangePage: handlePageChange,
        selectableRowsComponent: BootyCheckbox
      }));
    }
  }]);

  return Users;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(_ref2) {
  var user = _ref2.user;
  return {
    user: user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  ActionGetUserList: _Action_Index__WEBPACK_IMPORTED_MODULE_6__["ActionGetUserList"],
  ActionDisplayUserList: _Action_Index__WEBPACK_IMPORTED_MODULE_6__["ActionDisplayUserList"]
}))(Users));

/***/ })

}]);