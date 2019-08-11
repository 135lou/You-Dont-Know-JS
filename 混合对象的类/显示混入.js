function mixin(sourceObj, targetObj) {
    for (var key in sourceObj){
        if(!(key in targetObj)) {
            targetObj[key] = sourceObj[key];
        }
    }
    return targetObj;
}
var Vehicle = {
    engines: 1,
    ignition: function () {
        console.log('turning on engine');
    },
    drive: function () {
        this.ignition();
        console.log('steering and moving forward!')
    }
};
var Car = mixin(Vehicle, {
    wheels: 4,
    drive: function () {
        Vehicle.drive.call(this); // 显示多态
        console.log('roll,' + this.wheels);
    }
});
Vehicle.ignition = function() {
    console.log('test');
};

console.log(Vehicle.ignition());
console.log(Car.ignition());
