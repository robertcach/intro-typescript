"use strict";
/* INTERFACES */
// Used to define object types
// The interface doesn't initialize or implement the properties
// The interface's job is describe a type
// It make test in compile time
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
let myIceCream;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr = myIceCream[2];
console.log(myStr); // 'strawberry'
/* API AND INTERFACE */
const fetchURL = 'https://jsonplaceholder.typicode.com/posts';
function fetchPosts(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(url);
        let body = yield response.json();
        console.log(body); // Body contains all post from API response
        return body; // Array of objects with all post with Post type
    });
}
function ShowPost() {
    return __awaiter(this, void 0, void 0, function* () {
        let posts = yield fetchPosts(fetchURL); // Contains all post after 'fetchPosts()' functions finish
        let post = posts[0]; // Get the first post
        console.log(post);
        console.log('Post #' + post.id);
        console.log('Author: ' + (post.userId === 1 ? 'Administrator' : post.userId.toString()));
        console.log('Title: ' + post.title);
        console.log('Body: ' + post.body);
    });
}
ShowPost();
