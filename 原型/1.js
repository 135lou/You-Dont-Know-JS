// var anotherObj = {
//     a:2
// };
// var myObj = Object.create(anotherObj); //创建一个对象并把这个对象的原型[[prototype]关联到指定的对象
// console.log(myObj.a); //2
//
// // 属性设置和屏蔽 给一个对象设置属性并不仅仅是 添加一个新属性或者修改已有的属性值
// myObj.foo = 'bar';
// 1. 如果myObj已经有 这个名为foo的 普通数据访问属性，这条赋值就只会修改 已有的属性
// 2. 如果foo不是直接存在myObj上的,[[prototype]链就会被遍历，类似get操作,如果在原型 链上找不到 这个属性，foo就会直接添加到myObj上
// 3. 如果foo存在原型链上赋 值 myObj.foo = 'bar';的行为？？？？？？？
//         1.如果属性值foo即存在myObj上，也出现在原型链上层，那么就会 发生屏蔽，屏蔽原型链上层的foo属性
//         2.如果不在myObj上，
//                 1.如果原型链上层名为 foo的普通数据访问属性 ，并且没有标记 为只读模式，那么模式 myObj添加一个名为foo的 新属性，它是屏蔽属性
//                  2. 如果是只读，报错

function Foo() {
//    .....
}
var a = new Foo();
console.log(Object.getPrototypeOf(a) === Foo.prototype); // true
