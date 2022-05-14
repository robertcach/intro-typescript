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




/* TYPE INFERENCE: ANY AND UNKNOW */
// 'Any' doesn't make any test in compile time but we can get troubles in runtime
let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK

// unknown
let randomValue2: unknown = 10;
randomValue2 = true; // Can change data type
randomValue2 = 'Mateo';
randomValue2 = { name: 'pepe' };

//console.log(randomValue2.name);   // Error: Object is of type unknown
//randomValue2();                  // Error: Object is of type unknown
// randomValue2.toUpperCase();      // Error: Object is of type unknown

// The differences is that we can't interact/access with variables of type "unknown"
// In this way, is like we are protected of errors in runtime




/* TYPE ASSERTION */
// We can convert a 'unknown' type in other before to do any test or instruction

// randomValue2.toUpperCase(); // Error
// (randomValue2 as string).toUpperCase(); // OK

// Other way to test if 'randomValue2' is a string type before call toUpperCase method
let randomValueMy: unknown = 10;
randomValueMy = true;
randomValueMy = 'Robert';

typeof randomValueMy === 'string' ? console.log(randomValueMy.toLowerCase()) : console.log('Error');