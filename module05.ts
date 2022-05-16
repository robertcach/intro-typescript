/* CLASSES */
class Car {
  // Properties
  private static numberOfCars: number = 0; // Static property
  private _make: string;
  private _color: string;
  private _doors: number;

  // Constructor
  constructor(make: string, color: string, doors: number = 4) {
    this._make = make;
    this._color = color;

    // Validations have to be in constructor
    if ((doors % 2) === 0) {
      this._doors = doors;
    } else {
      throw new Error('Doors must be an even number');
    }

    Car.numberOfCars++; // Increments the value of the static property. Use className to access them instead "this." because is a static property
  }

  // Accessors
  // set >> get

  // get: read value (return it). Before we have to declare the value with 'set'. Don't have parameters
  get make(): string {
    return this._make;
  }

  // set: define a value to property. Must have parameters
  set make(make: string) {
    this._make = make;
  }

  get color(): string {
    return 'The color of the car is ' + this._color;
  }

  set color(color: string) {
    this._color = color
  }

  get doors(): number {
    return this._doors;
  }

  set doors(doors: number) {
    this._doors = doors
  }


  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`
  }

  brake(): string {
      return `${this.worker()} is braking with the standard braking system.`
  }

  turn(direction: 'left' | 'right') {
    return `${this.worker()} is turning to ${direction}`
  }

  // protected to the subclasses can execute this method
  protected worker(): string {
    return this._make
  }

  // static method
  public static getNumberOfCars(): number {
    return Car.numberOfCars;
  } 
}





/* EXERCISE */
let myCar1 = new Car('Cool Car Company', 'blue', 2);
// console.log(myCar1._color); // Access value WITHOUT get and set accessors and defined in CLASS. => 'blue'
console.log(myCar1.color); // Access value THROUGH get and set accessors and defined in CONSTRUCTOR.  => 'The color of the car is blue'


let myCar2 = new Car('Galaxy Motors', 'red', 8)
console.log(myCar2.doors);
console.log(myCar2.doors = 5); // Error appears

let myCar3 = new Car('Space Digital', 'Gray')
console.log(myCar3.doors); // Shows 4. The default value

console.log(myCar1.accelerate(35)); // Cool Car Company is accelerating to 35 MPH.
console.log(myCar2.brake()); // Galaxy Motors is braking with the standard braking system.
console.log(myCar3.turn('right')); // Space Digital is turning to right



/* EXERCISE STATIC PROPERTIES */
console.log(Car.getNumberOfCars()); // Shows 3 because we created 3 instances of Car class. All of that instances shares properties and methods statics




/* EXTEND CLASSES */
class ElectricCar extends Car {
  // Properties unique to ElectricCar
  private _range: number;

  // Constructor: the parameters it mas have all properties=> father class "Car" and this subclass "ElectricCar"
  constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors); // Include father class properties
    this._range = range
  }

  // Accessors
  get range() {
    return this._range
  }
  
  set range(range: number) {
    this._range = range;
  }

  // Methods
  charge() {
    console.log(this.worker() + " is charging");
  }
}

let spark = new ElectricCar('Spark Motor', 'silver', 124, 2);
console.log(spark.charge()); // Spark Motor is charging

let eCar = new ElectricCar('Electric Car Co.', 'black', 263)
console.log(eCar.doors);