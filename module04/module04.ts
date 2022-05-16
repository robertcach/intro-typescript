/* FUNCTIONS */

// Named function
// Named function declarations are loaded into the execution context before the code is executed.
// We can use the function before declaring it.
function addNumbersTwo(x: number, y: number) {
  return x + y
}

console.log(addNumbersTwo(1, 2))





// Anonymous function
// Anonymous function declarations are NOT loaded into the execution context before the code is executed.
// We CAN'T use the function before declaring it.
let anonymousAddNumbers = function(x: number, y: number): number {
  return x + y
}

console.log(anonymousAddNumbers(3, 5));

let total = function(input: number[]): number {
  let total: number = 0;

  for (let i = 0; i < input.length; i++) {
    if(isNaN(input[i])) {
      continue
    }
    total += Number(input[i]);
  }

  return total
}

console.log(total([1, 2, 3]));


// Arrow functions
// Other way to write anonymous function
let addNumbersAnonymous = function (x: number, y: number): number {
  return x + y;
}

let addNumbersArrow = (x: number, y: number): number => x + y






/* EXERCISE */
function displayAlert(message: string | number) {
  alert('The message is ' + message)
}

displayAlert("hola")


function sumExercise(input: number[]): number {
  let total: number =  0;

  for(let count = 0; count < input.length; count++) {
      if(isNaN(input[count])){
          continue;
      }
      total += Number(input[count]);
  }
  return total;
}

console.log(sumExercise([2, 5, 3]))






/* MANDATORY PARAMETERS */
// By default, the parameters are mandatory

function addNumbersMandatory (x: number, y: number): number {
  return x + y;
}

addNumbersMandatory(1, 2); // Returns 3
// addNumbersMandatory(1);    // Returns an error





/* OPTIONAL PARAMETERS */
// Define a parameter as optional with '?' after parameter's name
// Optional parameters have to be after mandatory parameters

function addNumbersOptional (x: number, y?: number): number {
  if (y === undefined) { // In case don't have 'y' parameter and function still works
      return x;
  } else {
      return x + y; // In case we had all parameters
  }
}

addNumbersOptional(1, 2); // Returns 3
addNumbersOptional(1);    // Returns 1




/* DEFAULT PARAMETERS */
// Default parameters have to be after mandatory parameters
// The parameter take default value in case we don't have it when function is called

function addNumbersDefault (x: number, y = 25): number {
  return x + y;
}

addNumbersDefault(1, 2);  // Returns 3
addNumbersDefault(1);     // Returns 26




/* REST PARAMETERS */
// REST parameters is like a infinite optional parameters numbers
// Helpful to use a parameter like a group (in an array). That's because the type have to finish with []
// To use, use '...' before parameter's name

let addAllNumbersRest = (firstNumber: number, ...restOfNumbers: number[]): number => {
  let total: number =  firstNumber;
  for(let counter = 0; counter < restOfNumbers.length; counter++) {
     if(isNaN(restOfNumbers[counter])){
        continue;
     }
     total += Number(restOfNumbers[counter]);
  }
  return total;
}

addAllNumbersRest(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbersRest(2);                    // returns 2
// addAllNumbersRest(2, 3, "three");        // flags error due to data type at design time, returns 5


function myName(firstName: string, ...info: string[]): string {
  return firstName + " " + info
}

console.log(myName('Robert', 'Cabrera')); // Robert Cabrera
console.log(myName('Robert', 'Cabrera', 'Chiclayo')); // Robert Cabrera,Chiclayo
console.log(myName('Robert', 'Cabrera', 'Chiclayo', 'Perú')); // Robert Cabrera,Chiclayo,Perú





/* DESTRUCTURING OBJECT PARAMETERS */
// Use an interface to define properties wich have to be the parameter's function
// In this way, we use parameters with names and we can call the function changing parameter position

interface ObjectMessage {
  text: string;
  sender: string
}

function messageObject({text, sender}: ObjectMessage) {
  console.log(`Message from ${sender}: ${text}`);
}

messageObject({sender: 'Robert', text:'Hola'})




// EXERCISE
let addThreeNumbers = (x: number, y: number, z?: number): number => {
  if(z === undefined) return x + y
  return x + y + z
};

console.log(addThreeNumbers(10, 20)); // 30
console.log(addThreeNumbers(10, 20, 30, 40)); // 60. Returns 60 because the fourth arguments is ignored



let addThreeMyNumbers = (x: number, y: number, z?: number): number => z === undefined ? x + y : x + y + z
console.log(addThreeMyNumbers(4, 5)); // 9
console.log(addThreeMyNumbers(4, 5, 6)); // 11



let subtractThreeNumbers = (x: number, y: number, z: number = 100): number => x - y - z;
console.log(subtractThreeNumbers(10, 20)); // -110
console.log(subtractThreeNumbers(10, 20, 15)); // -25




// EXERCISE TWO
/* type calculator = (x: number, y: number) => number */

interface Calculator {
  (x: number, y: number): number;
}

let addNumbersCalculator: Calculator = (x: number, y: number): number => x + y
let subtractNumbersCalculator: Calculator = (x: number, y: number): number => x - y

console.log(addNumbersCalculator(4, 5)); // 9
console.log(subtractNumbersCalculator(3, 2)); // 1


let doCalculation = (operation: 'add' | 'subtract'): Calculator => operation === 'add' ? addNumbersCalculator : subtractNumbersCalculator
console.log(doCalculation('add')(1, 2));