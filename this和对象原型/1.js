// 为什么要使用 this
function identify() {
    return this.name.toUpperCase();
}
function speak() {
    var greet = 'hello， i am ' + identify.call(this);
    console.log(greet);
}

var me = {
    name: 'kyle'
};

var you = {
    name: 'reader'
};
console.log(identify.call(me)); // KYLE
console.log(identify.call(you));//READER
speak.call(me);
speak.call(you);
