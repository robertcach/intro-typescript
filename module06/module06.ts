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