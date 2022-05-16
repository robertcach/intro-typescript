/* CLASSES */
class Car {
  // Properties
  _make: string;
  _color: string;
  _doors: number;

  // Constructor
  constructor(make: string, color: string, doors: number = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
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
    if (doors % 2 === 0) {
      this._doors = doors
    }
    throw new Error('Doors must be an even number')
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

  worker(): string {
    return this._make
  }
}