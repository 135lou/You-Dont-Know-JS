// 有可能创建了一个函数的"间接引用"在这种情况下就会调用函数的默认绑定规则
// 间接引用最容易出现在赋值的时候发生
function foo() {
    console.log(this.a);
}
var a = 2;
var o = {a:2,foo:foo};
var p = {a:4};
// o.foo(); //2
(p.foo = o.foo)(); //2 // 赋值表达式p.foo = 0.foo返回的是目标函数的引用。调用的位置是foo,应该就是默认绑定
p.foo(); //4

