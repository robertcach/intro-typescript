"use strict";
/* FUNCTIONS */
// Named function
// Named function declarations are loaded into the execution context before the code is executed.
// We can use the function before declaring it.
function addNumbersTwo(x, y) {
    return x + y;
}
console.log(addNumbersTwo(1, 2));
// Anonymous function
// Anonymous function declarations are NOT loaded into the execution context before the code is executed.
// We CAN'T use the function before declaring it.
let anonymousAddNumbers = function (x, y) {
    return x + y;
};
console.log(anonymousAddNumbers(3, 5));
let total = function (input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(total([1, 2, 3]));
// Arrow functions
// Other way to write anonymous function
let addNumbersAnonymous = function (x, y) {
    return x + y;
};
let addNumbersArrow = (x, y) => x + y;
/* EXERCISE */
function displayAlert(message) {
    alert('The message is ' + message);
}
displayAlert("hola");
function sumExercise(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
console.log(sumExercise([2, 5, 3]));
/* MANDATORY PARAMETERS */
// By default, the parameters are mandatory
function addNumbersMandatory(x, y) {
    return x + y;
}
addNumbersMandatory(1, 2); // Returns 3
// addNumbersMandatory(1);    // Returns an error
/* OPTIONAL PARAMETERS */
// Define a parameter as optional with '?' after parameter's name
// Optional parameters have to be after mandatory parameters
function addNumbersOptional(x, y) {
    if (y === undefined) { // In case don't have 'y' parameter and function still works
        return x;
    }
    else {
        return x + y; // In case we had all parameters
    }
}
addNumbersOptional(1, 2); // Returns 3
addNumbersOptional(1); // Returns 1
/* DEFAULT PARAMETERS */
// Default parameters have to be after mandatory parameters
// The parameter take default value in case we don't have it when function is called
function addNumbersDefault(x, y = 25) {
    return x + y;
}
addNumbersDefault(1, 2); // Returns 3
addNumbersDefault(1); // Returns 26
/* REST PARAMETERS */
// REST parameters is like a infinite optional parameters numbers
// Helpful to use a parameter like a group (in an array). That's because the type have to finish with []
// To use, use '...' before parameter's name
let addAllNumbersRest = (firstNumber, ...restOfNumbers) => {
    let total = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};
addAllNumbersRest(1, 2, 3, 4, 5, 6, 7); // returns 28
addAllNumbersRest(2); // returns 2
// addAllNumbersRest(2, 3, "three");        // flags error due to data type at design time, returns 5
function myName(firstName, ...info) {
    return firstName + " " + info;
}
console.log(myName('Robert', 'Cabrera')); // Robert Cabrera
console.log(myName('Robert', 'Cabrera', 'Chiclayo')); // Robert Cabrera,Chiclayo
console.log(myName('Robert', 'Cabrera', 'Chiclayo', 'Perú')); // Robert Cabrera,Chiclayo,Perú
function messageObject({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
messageObject({ sender: 'Robert', text: 'Hola' });
// EXERCISE
let addThreeNumbers = (x, y, z) => {
    if (z === undefined)
        return x + y;
    return x + y + z;
};
console.log(addThreeNumbers(10, 20));
console.log(addThreeNumbers(10, 20, 30, 40));
let addThreeMyNumbers = (x, y, z) => z === undefined ? x + y : x + y + z;
console.log(addThreeMyNumbers(4, 5));
console.log(addThreeMyNumbers(4, 5, 6));
let subtractThreeNumbers = (x, y, z = 100) => x - y - z;
console.log(subtractThreeNumbers(10, 20));
console.log(subtractThreeNumbers(10, 20, 15));
