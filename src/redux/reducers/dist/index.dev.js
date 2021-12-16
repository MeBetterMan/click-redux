"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _count = _interopRequireDefault(require("./count"));

var _person = _interopRequireDefault(require("./person"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* 
	该文件用于汇总所有的reducer为一个总的reducer
*/
//引入combineReducers，用于汇总多个reducer
//引入为Person组件服务的reducer
//汇总所有的reducer变为一个总的reducer
var _default = (0, _redux.combineReducers)({
  count: _count["default"],
  persons: _person["default"]
});

exports["default"] = _default;