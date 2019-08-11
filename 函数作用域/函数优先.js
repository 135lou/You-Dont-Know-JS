// 函数声明和变量声明都会被提升，但是值得注意的是函数会首先被提升，然后是变量
foo();
var foo;
foo = function () {
    console.log(2)
};
function foo() {
    console.log(1);
}

// 上述代码可以理解为
// var foo;
// function foo() {
//     console.log('1');
// }
// foo();// 1
// foo = function () {
//     console.log(2)
// };




