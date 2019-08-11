//   闭包例子1
// function foo() {
//     var  a =  2;
//     // 可以访问foo中内部的作用域，bar有对该作用域的引用,而这个引用就叫做闭包哦
//     function bar() {
//         console.log(a)
//     }
//     return bar;
// }
// var baz = foo();
// baz(); // 2 是在自己定义的此法作用域以外的地方执行的

// 闭包例子2
// 把函数内部的函数baz传递给了bar，当调用这个内部函数时fn
// function foo() {
//     var a = 2;
//     function baz() {
//         console.log(a);
//     }
//     bar(baz);
// }
// function bar(fn) {
//     fn() // 这个就是闭包
// }
// foo();


// 闭包例子3
// var fn;
// function foo() {
//     var a = 2;
//     function baz() {
//         console.log(a)
//     }
//     fn = baz; // 将baz分配给全局变量
// }
//
// function bar() {
//     fn(); // 闭包
// }
// foo(); // 赋值
// bar(); // 2

// for 循环
for (var i = 0;i<=5;i++) {
    setTimeout(function timer() {
        console.log(i); // i 被封闭在一个全局的作用域中，实际上i只有 一个
    }, i*1000) // 6
}
for (var i = 0;i<=5;i++) {
    (function (i) {
        setTimeout(function timer() {
            console.log(i);
        },i*1000 )
    })(i) // 在迭代使用IFEE会为每个迭代都生成一个新的作用域，使得延迟函数的回调可以将新的作用域封闭在每个迭代内部
}
