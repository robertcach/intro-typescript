"use strict";
function addNumbers01(x, y) {
    return x + y;
}
console.log(addNumbers01(3, 6));
/* TYPE INFERENCE: NUMBER AND STRING */
let x; // Explicitly declares x as a "number" type
let x2 = 1; // Explicitly declares x as a "number" type and "1" value
let y = 1; // Implicitly declares y as a "number" type
let z; // Declares z without initializing it. It is "any" type
// Explicitly declares bothTypes can be "number" or "string" type
let bothTypes;
bothTypes = 5;
bothTypes = "five";
/* TYPE INFERENCE: ENUM */
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 0] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 1] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 2] = "Apprentice"; // 2
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus); // Show the value: 1
console.log(ContractStatus[employeeStatus]); // Show the name associated with the enumeration: 'Temp'
/* TYPE INFERENCE: ANY AND UNKNOW */
// 'Any' doesn't make any test in compile time but we can get troubles in runtime
let randomValue = 10;
randomValue = 'Mateo'; // OK
randomValue = true; // OK
// unknown
let randomValue2 = 10;
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
let randomValueMy = 10;
randomValueMy = true;
randomValueMy = 'Robert';
typeof randomValueMy === 'string' ? console.log(randomValueMy.toLowerCase()) : console.log('Error');
/* UNION TYPES */
// A variable to which more than one data type can be defined
let multiType;
multiType = 8;
multiType = true;
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number')
        return x + y;
    if (typeof x === 'string' && typeof y === 'string')
        return x.concat(y);
    throw new Error('The data is not number or string');
}
console.log(add(4, 8));
console.log(add('Hola ', 'Robert'));
let newManager = {
    employeeId: 123,
    age: 24,
    stockPlan: true
};
let newEmployee = {
    employeeId: 456,
    age: 18,
    stockPlan: false
};
let myTest;
myTest = 'pass'; //* Valid
myTest = 'fail'; //* Valid
myTest = 'incomplete'; //* Valid
let diceRoll;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
// diceRoll = 7;    //* Invalid
/* ARRAYS */
let list = [1, 2, 3];
let otherList = [4, 5, 6];
/* TUPLES */
// Array with different value types
let person1 = ['Robert', 30]; //* Valid
let person2 = ['Nico', 7, 'Madrid']; //* Valid
// person2 = ['Nico', 7, 'Madrid', true]   //* Invalid
