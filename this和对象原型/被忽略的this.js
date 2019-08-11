// null 或者 undefined绑定对象传入call、apply、bind 这些在调用的时候会被忽略，实际应用采用默认绑定规则
// function foo() {
//     console.log(this.a);
// }
// var a = 2;
// foo.call(null); //2

// apply
function foo(a, b) {
    console.log("a:", + a, "b:"+b);
}
foo.apply(null, [2,3]); // a:2 b:3  =

// es6
foo(...[2,3]);
// 使用bind 柯里化
var bar = foo.bind(null, 2);
 bar(3); // a:2 b:3
