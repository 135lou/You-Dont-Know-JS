//
// var myObject = {
//     a:2
// };
//
// // in 操作符会检查属性是否在对象及其原型链中
// console.log("a" in myObject) ; //true
// console.log("b" in myObject) ; //false
// // hasOwnProperty 只会检查是否在myObject对象中，不会检查原型链
// myObject.hasOwnProperty('a');
// myObject.hasOwnProperty('b');

var  myObject = {};
Object.defineProperty(myObject, 'a', {
    enumerable: true,
    value: 2
});
Object.defineProperty(myObject, 'b', {
    enumerable: false, //不可枚举 就不会出现在对象的编辑中
    value: 3
});
console.log(myObject.b); //3
myObject.propertyIsEnumerable('a');








