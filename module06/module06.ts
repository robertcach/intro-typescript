/* GENERICS */
// Are code template to define what type do you want to use when calling them
// Allows you to tell the component what type to expect at the time it is called

// Sintaxis
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items)
}

let numberArray = getArray<number>([5, 10, 15, 20]);
console.log(numberArray); // [5, 10, 15, 20]

numberArray.push(25);
console.log(numberArray); // [5, 10, 15, 20, 25]
// numberArray.push('This is not a number') // Error because is not number type


let stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);
console.log(stringArray); // ['Cats', 'Dogs', 'Birds']



// More than one variable
function identity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

 returnNumber = returnNumber * 100;   // OK
//returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
//returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'





/* METHODS AND PROPERTIES OF GENERIC TYPE */
function identityTwo<T, U> (value: T, message: U) : T {
  // let result: T = value + value; // Error.
  // The left part of an arithmetic operation must be of type "any", "number", "bigint", or an enumeration type because it doesn't know what value to pass to it at run time.

  console.log(message);
  return value
}



/* GENERIC RESTRICTIONS */
type ValidTypes = string | number;

// extends to accept any type of ValidTypes
function identityThree<T extends ValidTypes, U> (value: T, message: U) {
  let result: ValidTypes = '';
  let typeValue: string = typeof value;

  if (typeof value === 'number') result = value + value;
  else if (typeof value === 'string') result = value + value;

  console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);
  return result
}

let returnNumberThree = identityThree(100, 'Hello!');
let returnStringThree = identityThree('100', 'Hola!');
// let returnBooleanThree = identityThree(true, 'Bonjour!'); // Error because true is not a type in ValidTypes

let numberValue = identityThree<number, string>(100, 'Hello');
let stringValue = identityThree<string, string>('100', 'Hello');

console.log(numberValue);       // 200
console.log(stringValue);       // 100100