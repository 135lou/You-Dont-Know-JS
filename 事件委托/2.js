// DOM 的事件操作（监听和触发），都定义在EventTarget接口。所有节点对象都部署了这个接口，其他一些需要事件通信的浏览器内置对象（比如，XMLHttpRequest、AudioNode、AudioContext）也部署了这个接口。
//
// 该接口主要提供三个实例方法。
//
// addEventListener：绑定事件的监听函数
// removeEventListener：移除事件的监听函数
// dispatchEvent：触发事件

// target.addEventListener(type, listener[, useCapture]);
// type：事件名称，大小写敏感。
// listener：监听函数。事件发生时，会调用该监听函数。
// useCapture：布尔值，表示监听函数是否在捕获阶段（capture）触发（参见后文《事件的传播》部分），默认为false（监听函数只在冒泡阶段被触发）。该参数可选。
// 下面是一个例子。
function hello() {
    console.log('Hello world');
}

var button = document.getElementById('btn');
button.addEventListener('click', hello, false);
