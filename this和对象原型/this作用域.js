// this 在任何情况下都不指向函数的词法作用域，在js内部，作用域和对象类似，可见的标识符都是他 的属性，但是作用域对象无法通过js代码访问，而是存在js引擎内部
// function foo() {
//     var a =2;
//     this.bar();
// }
// function bar() {
//     console.log(this.a);
// }
// foo(); // undefined

// this 是在运行时候绑定的，并不是在编写的时候绑定的，其中他的上下文 取决于函数调用时候的各种条件 ,this的绑定和函数声明的位置无关，只取决于函数的调用方式
// 当一个函数被调用的 时候，会创建一个活动记录 （有时候称呼为上下文）这个 记录包含函数在你哪里被 调用、函数的调用方法、传入 参数 等 ，this就是记录的其中一个属性

function baz() {
    console.log("baz");
    bar();
}
function bar() {
    console.log("bar");
    foo();
}

function foo() {
    console.log('foo');
}
bar(); // 《--- baz被调用的位置
