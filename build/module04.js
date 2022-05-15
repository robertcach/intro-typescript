"use strict";
/* FUNCTIONS */
// Function with name
function addNumbersTwo(x, y) {
    return x + y;
}
console.log(addNumbersTwo(1, 2));
// Anonymous function
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
console.log(total([1, "2", 3]));
