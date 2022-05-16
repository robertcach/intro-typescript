"use strict";
/* CLASSES */
class Car {
    // Constructor
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        // Validations have to be in constructor
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
        Car.numberOfCars++; // Increments the value of the static property. Use className to access them instead "this." because is a static property
    }
    // Accessors
    // set >> get
    // get: read value (return it). Before we have to declare the value with 'set'. Don't have parameters
    get make() {
        return this._make;
    }
    // set: define a value to property. Must have parameters
    set make(make) {
        this._make = make;
    }
    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        this._doors = doors;
    }
    // Methods
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning to ${direction}`;
    }
    worker() {
        return this._make;
    }
    static getNumberOfCars() {
        return Car.numberOfCars;
    }
}
// Properties
Car.numberOfCars = 0; // Static property
/* EXERCISE */
let myCar1 = new Car('Cool Car Company', 'blue', 2);
// console.log(myCar1._color); // Access value WITHOUT get and set accessors and defined in CLASS. => 'blue'
console.log(myCar1.color); // Access value THROUGH get and set accessors and defined in CONSTRUCTOR.  => 'The color of the car is blue'
let myCar2 = new Car('Galaxy Motors', 'red', 8);
console.log(myCar2.doors);
console.log(myCar2.doors = 5); // Error appears
let myCar3 = new Car('Galaxy Motors', 'Gray');
console.log(myCar3.doors); // Shows 4. The default value
console.log(myCar1.accelerate(35));
console.log(myCar2.brake());
console.log(myCar3.turn('right'));
/* EXERCISE */
console.log(Car.getNumberOfCars());
