// js 不具有动态作用域，只具有词法作用域，所有function foo 中的a在当前作用域中找到，a = 2
function foo() {
    console.log(a); // 2
}
function bar() {
    var a = 3;
    foo();
}
var a = 2;
bar();
// 词法作用域，写代码的时候或者说是定义的时的确定的
// 动态作用域：运行时确定的（this）

