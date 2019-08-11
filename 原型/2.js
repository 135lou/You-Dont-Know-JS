// function Foo(name) {
//     this.name = name;
// }
// Foo.prototype.myName = function () {
//     return this.name;
// };
// var  a = new Foo('A');
// var b = new Foo('b');
// a.myName();
// b.myName();


// 原型继承
// function Foo(name) {
//     this.name = name;
// }
//
// Foo.prototype.myName = function () {
//     return this.name;
// };
//
// function Bar(name, label) {
//     Foo.call(this, name);
//     this.label = label;
// }
//
// // 我们创建一个一个新的Bar.prototype对象关联到Foo.prototype
// Bar.prototype = Object.create(Foo.prototype); // 创建一个空对象,吧对象 的内部protype关联到指定的对象
// // Bar.prototype = Foo.prototype;
// Bar.prototype.myLabel = function () {
//     return this.label;
// };
// var a = new Bar('A', "obj a");
// Bar.prototype.myName = function () {
//     return '修改';
// };
// var b = new Foo('A');
// console.log(b.myName()); // A
// console.log(a.myLabel());
// console.log(a.myName());


//  instanceof a instanceof Bar


// 判断o1是否关联到o2的辅助函数
function isRelatedTo(o1, o2) {
    function F() {
    }

    F.prototype = o2;
    return o1 instanceof F;
}

var a = {};
var b = Object.create(a);
console.log(isRelatedTo(b, a)); //true
console.log(Object.getPrototypeOf(b) === a); //true
console.log(Object.getPrototypeOf(b));
