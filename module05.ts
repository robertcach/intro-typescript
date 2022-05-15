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
    get make() {
      return this._make;
    }

    set make(make) {
      this._make = make;
    }

    get color() {
      return 'The color of the car is ' + this._color;
    }

    set color(color) {
      this._color = color
    }

    get doors() {
      return this._doors;
    }

    set doors(doors) {
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