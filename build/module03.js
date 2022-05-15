"use strict";
/* INTERFACES */
// Used to define object types
// The interface doesn't initialize or implement the properties
// The interface's job is describe a type
// It make test in compile time
// Variable with EmployeeTwo type => Interface created before
let newEmployeeTwo = {
    firstName: "Robert",
    lastName: "Cabrera",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(newEmployeeTwo.firstName); // 'Robert'
const showTodo = (todo) => `${todo.title} ${todo.text}`;
document.write(showTodo({ title: 'Poner', text: 'lavadora' })); // NAVEGADOR: 'Poner lavadora'
function myTodo(todo) {
    console.log(`${todo.title} ${todo.text}`);
}
myTodo({ title: 'Hacer', text: 'cena' }); // CONSOLA: 'Hacer cena'
let myNewTodo = { title: 'Eat dine', text: 'right now' };
myTodo(myNewTodo); // CONSOLA: 'Eat diner right now'
let iceCream = {
    flavor: 'vanilla',
    scoops: 2
};
console.log(iceCream.flavor);
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4)
        return dessert.scoops + ' is too many scoops';
    return 'Your order will be ready soon!';
}
console.log(tooManyScoops({ flavor: 'coco', scoops: 5, instructions: 'nope' }));
let sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
};
function tooManyScoopsTwo(dessert) {
    if (dessert.scoops >= 4)
        return dessert.scoops + ' is too many scoops';
    return 'Your order will be ready soon!';
}
console.log(tooManyScoopsTwo({ flavor: 'coco', scoops: 8, instructions: 'nope', sauce: 'caramel' }));
