"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = countReducer;

var _constant = require("../constant");

/* 
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/
var initState = 0; //初始化状态

function countReducer() {
  var preState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  // console.log('countReducer@#@#@#');
  //从action对象中获取：type、data
  var type = action.type,
      data = action.data; //根据type决定如何加工数据

  switch (type) {
    case _constant.INCREMENT:
      //如果是加
      return preState + data;

    case _constant.DECREMENT:
      //若果是减
      return preState - data;

    default:
      return preState;
  }
}