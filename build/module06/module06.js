"use strict";
/* GENERICS */
// Are code template to define what type do you want to use when calling them
// Allows you to tell the component what type to expect at the time it is called
// Sintaxis
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([5, 10, 15, 20]);
console.log(numberArray); // [5, 10, 15, 20]
numberArray.push(25);
console.log(numberArray); // [5, 10, 15, 20, 25]
// numberArray.push('This is not a number') // Error because is not number type
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
console.log(stringArray); // ['Cats', 'Dogs', 'Birds']
// More than one variable
function identity(value, message) {
    console.log(message);
    return value;
}
let returnNumber = identity(100, 'Hello!');
let returnString = identity('100', 'Hola!');
let returnBoolean = identity(true, 'Bonjour!');
returnNumber = returnNumber * 100; // OK
//returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
//returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'
/* METHODS AND PROPERTIES OF GENERIC TYPE */
function identityTwo(value, message) {
    let result = value + value; // Error.
    // The left part of an arithmetic operation must be of type "any", "number", "bigint", or an enumeration type because it doesn't know what value to pass to it at run time.
    console.log(message);
    return value;
}
function identityThree(value, message) {
    let result = '';
    let typeValue = typeof value;
    if (typeof value === 'number')
        result = value + value;
    else if (typeof value === 'string')
        result = value + value;
    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);
    return result;
}
/* let returnNumberThree = identityThree(100, 'Hello!');
let returnStringThree = identityThree('100', 'Hola!'); */
// let returnBooleanThree = identityThree(true, 'Bonjour!'); // Error because true is not a type in ValidTypes
let numberValue = identityThree(100, 'Hello');
let stringValue = identityThree('100', 'Hello');
console.log(numberValue); // 200
console.log(stringValue); // 100100
