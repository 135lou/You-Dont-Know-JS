// 类型
// string
// number
// boolean
// object
// null
// undefined
// 符号 symbol es新增

// 简单的基本类型（string number boolean null defined）本身不是对象，null有时候会被当作对象 typeof null ==== object

// 内置对象； String Number Boolean Object Function Array Data RegExp Error

// 可计算属性名 es6 新增了计算属性名
// var  prefix = 'foo';
// var myObject = {
//     [prefix+'baz'] : 'hello',
//     [prefix+'bar']: 'world'
// };
// console.log(myObject['foobaz']); // hello


// // 复制对象
// function anotherFunction() {
//     //
// }
//
// var anotherObject = {
//     c: true
// };
// var anotherArray = [1,2];
// var myObject = {
//     a: 2,
//     b: anotherObject,
//     c: anotherArray,
//     d: anotherFunction
// };
// anotherArray.push(anotherObject, myObject);

// 浅拷贝： 浅拷贝 object.assign(...) 第一参数是目标函数后面是多个源对象（会遍历一个或多个可源对象中可枚举的）

// 属性描述符号
// var myObject = {
//     a:2
// };
// console.log(Object.getOwnPropertyDescriptor(myObject, "a"));  // { value: 2, writable: true, enumerable: true, configurable: true }

// 禁止扩展
var myObject = {
    a:2
};
Object.preventExtensions(myObject);
myObject.b = 3;
// myObject.b  // undefined

// 密封
// Object.seal(); 创建一个密封对象，实际上会在现有对象上调用Object.preventExtensions()，并把所有属性标记为configurable:false

// freeze
// Object.freeze(); // 会创建一个冻结对象这个方式实际上会在掉object.seal 然后设置writable:false

