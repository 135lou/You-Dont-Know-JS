//  变量和函数在内的所有声明都会在任何代码执行之前被执行
// 1. 变量会被执行
a = 2;
var a;
console.log(a);

//  2. 函数声明会被提升
foo();
function foo() {
    console.log(b); // undefined
    var b = 2;

    // 上述等价于
    //     var b;
    //     console.log(b);
    //     b = 2
}

// 3. 函数表达式不会被提升
test(); // test not function
bar(); // bar is not defined
var test = function bar() {
    console.log('我是函数表达式');
};
// 上述代码等价于
// var test;
// test();
// bar();
// test = function () {
//     console.log('我是函数表达式');
// };








