// function foo() {
//     console.log(this.a);
// }
// var obj1 = {
//     a:2,
//     foo:foo
// };
// var obj2 = {
//     a:3,
//     foo:foo
// };
// // 隐式绑定
// obj1.foo(); // 2
// obj2.foo(); // 3
// // 显示绑定更高
// obj1.foo.call(obj2); //3
// obj2.foo.call(obj1); //2


function something(something) {
    this.a = something;
}

// var obj1 = {
//     foo: foo
// };
// var obj2 = {};
// obj1.foo(2); // 将2绑定在obj1上
// console.log(obj1.a);  //2;
// obj1.foo.call(obj2, 3);
// console.log(obj2.a); //3
//
// // new的绑定 优先级更高 令人惊讶的是辅助函数new操作符的调用无法修改this的绑定，但是在 刚才的代码中new确实修改了this的绑定
// var bar = new obj1.foo(4);
// console.log(obj1.a); //a
// console.log(bar.a); //4
//

function foo(something) {
    this.a = something;
}
var obj1 = {};
var bar = foo.bind(obj1);
bar(2);
console.log(obj1.a); //2

var baz = new bar(3);
console.log(baz.a); //3
console.log(obj.a); //2

//
function bind(fn, obj) {
    return function () {
        fn.apply(obj, arguments);
    }
}
// es5 的内置函数
if(!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if(typeof this!=="function") {
            throw  new TypeError("function pro......")
        }
    }
}




