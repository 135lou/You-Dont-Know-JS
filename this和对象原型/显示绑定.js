// 使用call和apply方法
// function foo() {
//     console.log(this.a);
// }
// var obj = {
//     a:2
// };
// foo.call(obj); //2

// 硬绑定 创建一个包裹函数，传入所有参数并返回接收的返回值
// function foo(something) {
//     console.log(this.a, something);
//     return this.a + something;
// }
//
// var obj = {
//     a: 2
// };
// var bar = function () {
//     return foo.apply(obj, arguments);
// };
// var b = bar(3); // 2 3
// console.log(b); // 5

// 创建一个i可以重复使用的辅助函数
// function foo(something) {
//     console.log(this.a, something);
//     return this.a + something;
// }
// function bind(fn, obj) {
//     return function () {
//         return fn.apply(obj, arguments);
//     }
// }
// var obj = {
//     a: 2
// };
// var bar  = bind(foo,obj);
// var b  = bar(3); // 2,3
// console.log(b);


// 在 es5中，提供来内部是的bind
// function foo(something) {
//     console.log(this.a, something);
//     return this.a + something;
// }
//
// var obj = {
//     a: 2
// };
// var bar = foo.bind(obj);
// var b = bar(3); // 2 3
// console.log(b); //5

// api调用的上下文
function foo(el) {
    console.log(el, this.id);
}

var obj = {
    id: 'ss'
};
[1, 2, 3].forEach(foo, obj);
// 1 'ss'
// 2 'ss'
// 3 'ss'
