// an arrow function to add two numbers
const addNumbers = (a, b) => a + b;

// call the function to add two numbers
const result = addNumbers(5, 3);
console.log(result);

//Output: 8


//Arrow Function Syntax

// let myFunction = (arg1, arg2, ...argN) => {
//     statement(s)
// }


const sayHello = () => "Hello, World!";

//call the arrow function and print its return value
console.log(sayHello());

//Output: Hello, World!

//Arrow Function with One Argument

const square = x => x * x;

// use the arrow function to square a number
console.log(square(5));

//Output:25


//this Keyword With Arrow Function


// constructor function
function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayAge = function() {
        console.log(this.age);

        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}


const x = new Person();
x.sayAge();