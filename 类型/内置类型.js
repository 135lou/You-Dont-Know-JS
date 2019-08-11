// js内置类型
// null
 // undefined
 // string
 // boolean
 // object
 // number
 // symbol
 // 除了对象外，其他都为基本类型

// console.log(typeof undefined === 'undefined');
//  console.log(typeof true === "boolean");
//  console.log(typeof "42" === "string");
//  console.log(typeof 2 === "number");
//  console.log(typeof Symbol === "symbol");
//  console.log(typeof {life:14} === 'object');
//  console.log(typeof Symbol() === 'symbol');
//
// console.log(typeof null === "object"); //true 特殊处理

// 通常用复合条件来判断
var a = null;
console.log((!a && typeof a) === "object"); // true
console.log(typeof function a(){} ==='function'); // true
// function（函数）也是js中的一个内置类型，然后查阅规范实际上object的一个"子类型"，function是可调用对象

// ？？？？数组是否也是一个特殊类型呢
console.log(typeof [1,2,3]); //object
