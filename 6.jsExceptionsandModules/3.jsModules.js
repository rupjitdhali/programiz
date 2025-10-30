//importing greetPerson from greet.js file
import { greetPerson } from './greet.js'

//using greetPerson() defined in greet.js
let displayName = greetPerson('Jack');

console.log(displayName); //Hello Jack


import {function1, name, sum} from './module.js';

console.log(name);
let add = sum(4, 9);
console.log(add); //13

// when you want to use the module
// import in the main file
import {newName1, newName2 } from './module.js';

// when you want to use the modulw
// import in the required file with different name
import { function3 as newName3, function4 as newName4 } from './module.js';

console.log(newName1()); // "fn1"
console.log(newName2()); // "fn2"
console.log(newName3()); // "fn3"
console.log(newName4()); // "fn4"


import random_name from './greet.js'


//Modules Always use Strict Mose
