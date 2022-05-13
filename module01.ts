function addNumbers(x: number, y: number) {
  return x + y;
}

console.log(addNumbers(3, 6));



/* TYPE INFERENCE */
let x: number;   // Explicitly declares x as a "number" type
let x2: number = 1 // Explicitly declares x as a "number" type and "1" value

let y = 1;       // Implicitly declares y as a "number" type
let z;           // Declares z without initializing it. It is "any" type


// Explicitly declares bothTypes can be "number" or "string" type
let bothTypes : number | string 
bothTypes = 5
bothTypes = "five"