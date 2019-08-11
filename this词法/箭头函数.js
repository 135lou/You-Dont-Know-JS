// var foo = a=> {
//     console.log(a)
// };
// foo(2); //2

// var obj = {
//     id: 'awesome',
//     cool: function cooFn() {
//         console.log(this.id)
//     }
// };
// var id = 'not awesome';
// obj.cool(); // function
// setTimeout(obj.cool, 100); // undefined

// 上述问题,由于cool函数缺失了同this的绑定，解决方法

// var obj = {
//     id: 'not awesome',
//     count: 0,
//     cool: function cooFn() {
//         var self = this;
//         if (self.count<1) {
//             setTimeout(function timer() {
//                 self.count++;
//                 console.log(self.id)
//             },100)
//         }
//     }
// };
// obj.cool();

// this 箭头函数
// var obj = {
//     id: 'not awesome',
//     count: 0,
//     cool: function cooFn() {
//         if (this.count < 1) {
//             setTimeout(() => {
//                 this.count++;
//                 console.log(this.id)
//             }, 100)
//         }
//     }
// };
// obj.cool(); // not awesome


var obj = {
    id: 'not awesome',
    count: 0,
    cool: function cooFn() {
        if (this.count < 1) {
            setTimeout(function timer() {
                this.count++;
                console.log(this.id)
            }.bind(this), 100)
        }
    }
};
obj.cool();
