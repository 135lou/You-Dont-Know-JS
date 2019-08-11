function Foo(who) {
    this.me = who;
}
Foo.prototype.identify = function () {
    return "i am " + this.me;
};
function Bar(who) {
  Foo.call(this, who);
}
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.speak = function () {
    alert('hello,' + this.identify() + '');
};
var b1 = new Bar("B1"); // b1 委托了Bar.prototype
var b2 =  new Bar("B2");
b1.speak();
b2.speak();
