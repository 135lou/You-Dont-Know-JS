// function foo(num) {
//     console.log("foo", num);
//     this.count++;
// }
// foo.count = 0;
// for (i = 0 ;i<10;i++) {
//     if(i>5) {
//         foo(i)
//     }
// }
// // foo 6
// // foo 7
// // foo 8
// // foo 9
// console.log(foo.count); //0

// 上述代码中foo被 调用了4次，但是foo.count的值还是0，所有this不是指向函数本身
// 执行foo.count = 0，为foo函数 添加了 一个函数，但是在 函数内部this.count 中的this并不是指向函数本身

// 可能会这么解决
// function foo(num) {
//     console.log("foo", num);
//     data.count++;
// }
//
// var data = {
//     count: 0
// };
// for (i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo(i)
//     }
// }
// foo 6
// foo 7
// foo 8
// foo 9
// console.log(data.count); //4

// 也有可能这么解决,用foo表示标识符来代替this来引用函数对象
// function foo(num) {
//     console.log("foo", num);
//     foo.count++;
// }
// foo.count = 0;
// for (i = 0 ;i<10;i++) {
//     if(i>5) {
//         foo(i)
//     }
// }
// console.log(foo.count); // 4


// 强制将this指向foo函数
function foo(num) {
    console.log("foo", num);
    this.count++;
}
foo.count = 0;
for (i = 0 ;i<10;i++) {
    if(i>5) {
        foo.call(foo, i)
    }
}
console.log(foo.count); // 4
