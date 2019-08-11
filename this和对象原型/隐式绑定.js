// 调用位置会使用obj上下文来引用函数，函数被调用时obj对象拥有他或者是包含它。
// function foo() {
//     console.log(this.a);
// }
// var obj =  {
//     a:2,
//     foo:foo
// };
// obj.foo(); //2 foo被调用的时候，落脚点在obj对象上，当函数引用有上下文对象的时候，隐式规则会把函数调用中 的this绑定在这个上下文对象中，foo调用的时候this绑定在obj中

// 例子2

// function foo() {
//     console.log(this.a);
// }
// var obj2 = {
//     a: 42,
//     foo: foo
// };
// var obj1 = {
//     a: 2,
//     obj2: obj2
// };
// obj1.obj2.foo(); //42

// ### 隐式丢失
function foo() {
    console.log(this.a); // global
}

var obj = {
    a: 2,
    foo: foo
};
var bar = obj.foo;
var a = 'global';
bar(); // bar 是obj.foo的引用，但是实际上他引用的是foo函数本身，此时的bar不带任何修饰的函数的调用，所有是默认绑定

