// for ... in 可以用来遍历对象的可枚举列表
var myArray = [1, 2, 3];
// for (var i = 0 ; i<myArray;i++) {
//     console.log(myArray[i]);
// }

// es6 新增愈发 for of
// for
// for (var v in myArray) {
//     console.log(v); // 序号
// }
// for (var v of myArray) {
//     console.log(v); // 值
// }
// for of 首先会先向问对象请求一个迭代器对象，然后通过迭代器对象next方法来遍历所有的值
// 数组中内置@@iterator 迭代器 因此for。of可以直接使用在数组是
// var myArray= [1,2,3];
// var it = myArray[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }


// 和数组不同的，普通的对象是没有迭代器@@iterator，无法自动完成for...of遍历之所
// 当然也可以给遍历的对象加上@@iterator
var obj = {
    a: 1,
    b: 2
};
// for (i of obj) {
//     console.log(i);
// } // obj is not iterable
Object.defineProperty(obj, Symbol.iterator, {
    enumerable: true,
    writable: false,
    configurable: true,
    value: function () {
        var o = this;
        var idx = 0;
        var ks = Object.keys(o);
        return {
            next: function () {
                return {
                    value: o[ks[idx++]],
                    done: (idx > ks.length)
                }
            }
        }
    }
});
for (i of obj) {
    console.log(i);
} // obj is not iterable
var it = obj[Symbol.iterator]();
console.log(it.next());
