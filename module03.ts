/* INTERFACES */
// Used to define object types
// The interface doesn't initialize or implement the properties
// The interface's job is describe a type
// It make test in compile time

// Interface declare
interface EmployeeTwo {
  firstName: string,
  lastName: string,
  fullName(): string
}

// Variable with EmployeeTwo type => Interface created before
let newEmployeeTwo: EmployeeTwo = {
  firstName: "Robert",
  lastName: "Cabrera",
  fullName(): string {
    return this.firstName + " " + this.lastName
  } 
}

console.log(newEmployeeTwo.firstName); // 'Robert'


interface ITodo {
  title: string,
  text: string
}

const showTodo = (todo: ITodo) => `${todo.title} ${todo.text}`
document.write(showTodo({title: 'Poner', text: 'lavadora'})) // NAVEGADOR: 'Poner lavadora'


function myTodo(todo: ITodo) {
  console.log(`${todo.title} ${todo.text}`)
}

myTodo({title: 'Hacer', text: 'cena'}) // CONSOLA: 'Hacer cena'


let myNewTodo: ITodo = {title: 'Eat dine', text: 'right now'}
myTodo(myNewTodo) // CONSOLA: 'Eat diner right now'





// EXERCISE
interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string // Optional because the property has ?
}

let iceCream: IceCream = {
  flavor: 'vanilla',
  scoops: 2
}

console.log(iceCream.flavor);

function tooManyScoops(dessert: IceCream) {
  if (dessert.scoops >= 4) return dessert.scoops + ' is too many scoops'
  return 'Your order will be ready soon!'
}

console.log(tooManyScoops({flavor: 'coco', scoops: 5, instructions: 'nope'}));




/* INTERFACE EXTENSION */
// We can copy all the properties of one interface to another
// Have to implements all properties of all interfaces

interface Sundae extends IceCream {
  sauce: 'chocolate' | 'caramel' | 'strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

let sundae: Sundae = {
  flavor: 'vanilla',
  scoops: 2,
  sauce: 'caramel',
  nuts: true
}

function tooManyScoopsTwo(dessert: Sundae) {
  if (dessert.scoops >= 4) return dessert.scoops + ' is too many scoops'
  return 'Your order will be ready soon!'
}

console.log(tooManyScoopsTwo({flavor: 'coco', scoops: 8, instructions: 'nope', sauce: 'caramel'}));




/* INDEXABLE TYPES */
// Objects whose properties can be accessed by an index
// Is the same way to access array's elements

interface IceCreamArray {
  [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];

let myStr: string = myIceCream[2];
console.log(myStr); // 'strawberry'




/* API AND INTERFACE */
const fetchURL = 'https://jsonplaceholder.typicode.com/posts';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(url: string) {
  let response = await fetch(url);
  let body = await response.json();
  console.log(body); // Body contains all post from API response
  return body as Post[] // Array of objects with all post with Post type
}

async function ShowPost() {
  let posts = await fetchPosts(fetchURL); // Contains all post after 'fetchPosts()' functions finish

  let post = posts[0] // Get the first post
  console.log(post);
  
  console.log('Post #' + post.id)
  console.log('Author: ' + (post.userId === 1 ? 'Administrator' : post.userId.toString()));
  console.log('Title: ' + post.title);
  console.log('Body: ' + post.body);
}

ShowPost()