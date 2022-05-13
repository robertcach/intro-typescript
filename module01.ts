function addNumbers(x: number, y: number) {
  return x + y;
}

console.log(addNumbers(3, 6));



/* TYPE INFERENCE: NUMBER AND STRING */
let x: number;   // Explicitly declares x as a "number" type
let x2: number = 1 // Explicitly declares x as a "number" type and "1" value

let y = 1;       // Implicitly declares y as a "number" type
let z;           // Declares z without initializing it. It is "any" type


// Explicitly declares bothTypes can be "number" or "string" type
let bothTypes : number | string 
bothTypes = 5
bothTypes = "five"



/* TYPE INFERENCE: ENUM */
enum ContractStatus {
  Permanent, // 0: initial value
  Temp, // 1
  Apprentice // 2
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus); // Show the value: 1
console.log(ContractStatus[employeeStatus]); // Show the name associated with the enumeration: 'Temp'