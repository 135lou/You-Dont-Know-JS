//
class Vehicle {
    engines = 1;
    // 点火
    ignition() {
        console.log('turning on my engine');
    }
    drive() {
        this.ignition();
        console.log('steering and moving forward');
    }
}
class Car inherits  Vehicle{
    wheels = 4;
    drive() {
        inherits:drive();
        console.log("rooll on all,"+  this.wheels);
    }
}
