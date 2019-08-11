// ### 默认绑定 this 默认绑定全局对象; 在 代码中，foo直接不带任何修饰的函数引用进行调用
// function foo() {
//     console.log(this.a);
// }
// var a= 2;
// foo(); // 2


function foo() {
    'use strict';
    console.log(this.a);
}
var a= 2;
foo(); // 2 this is not defined
