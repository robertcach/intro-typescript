"use strict";
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 6));
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
    ContractStatus[ContractStatus["Apprentice"] = 2] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]); // Show the name associated with the enumeration: 'Temp'
