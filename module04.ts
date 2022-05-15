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
let addNumbersAnonymous = function (x: number, y: number): number {
  return x + y;
}

let addNumbersArrow = (x: number, y: number): number => x + y