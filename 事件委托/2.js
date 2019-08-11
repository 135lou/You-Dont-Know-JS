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
function hello(event) {
    console.log('Hello world');
}

var button = document.getElementById('btn');
// button.addEventListener('click', hello, false); // 默认监听事件在冒泡阶段

// 第二个参数除了是一个监听事件,还可以是一个具有handleEvent方法的对象
// button.addEventListener('click', {
//     handleEvent: function (event) {
//       console.log('click');
//     }
//   });

// 第三个参数除了是一个boolean,还可以是一个可配置的对象
// capture：布尔值，表示该事件是否在捕获阶段触发监听函数。
// once：布尔值，表示监听函数是否只触发一次，然后就自动移除。
// passive：布尔值，表示监听函数不会调用事件的preventDefault方法。如果监听函数调用了，浏览器将忽略这个要求，并在监控台输出一行警告。
// button.addEventListener('click', hello, {once: true});


// addEventListener方法可以为针对当前对象的同一个事件，添加多个不同的监听函数。这些函数按照添加顺序触发，即先添加先触发。如果为同一个事件多次添加同一个监听函数，该函数只会执行一次，多余的添加将自动被去除（不必使用removeEventListener方法手动去除）
// 下面只执行一次
//   document.addEventListener('click', hello, false);
//   document.addEventListener('click', hello, false);

// 依次执行
// function print(x) {
//     console.log(x);
//   }
//   document.addEventListener('click', hello, false);
//   document.addEventListener('click', print('hello'), false);
  


//  eventTarget.removeEventListener
//   EventTarget.removeEventListener方法用来移除addEventListener方法添加的事件监听函数。该方法没有返回值。

// button.addEventListener('click', listener, false);
// button.removeEventListener('click', listener, false);

// eventTarget.dispatchEvent(event)

// EventTarget.dispatchEvent方法在当前节点上触发指定事件，
// 从而触发监听函数的执行。该方法返回一个布尔值，只要有一个监听函数调用了Event.preventDefault()，则返回值为false，否则为true。

// 触发了click事件
button.addEventListener('click', hello, false);
var event = new Event('click');
button.dispatchEvent(event)

