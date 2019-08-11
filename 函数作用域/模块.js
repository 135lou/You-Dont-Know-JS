function coolMoudle() {
    var something = 'cool';
    var another = [1, 2, 3];

    function doSomething() {
        console.log(something)
    }

    function doAnother() {
        console.log(another.join("!"));
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    }
}

var foo = coolMoudle();
foo.doSomething(); // cool
foo.doAnother(); // 1!2!3

// 上述例子中有一个叫做coolMoudle()独立子模块创建器，可以被调用多次，每次调用都会创建一个新的模块实例，当只需要一个实例时，可以对模式进行简单的改进来实现单例模式
var foo = (function coolMoudle() {
    var something = 'cool';
    var another = [1, 2, 3];

    function doSomething() {
        console.log(something)
    }

    function doAnother() {
        console.log(another.join("!"));
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    }
})();

foo.doAnother();
foo.doSomething();

