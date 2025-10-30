let name = "John";

//strings example
let name1 = 'Peter';
let name2 = "Jack";
let result = `The names are ${name1} and ${name2}`;


console.log(result);

//Output: The names are Peter and Jack


//Access String Characters

//1. Using Indexes

let message = "hello";

//use index 1 to access
//2nd character of message
console.log(message[1]); // e

//2. Using the charAt Method

let message1 = "hello";

// use charAt(1) to get the
// 2nd character of message
console.log(message.charAt(1));   //e



//Features of JavaScript Strings

let message2 = "hello";
message2[0] = "H";
console.log(message); //hello

let message3 = "hello";
message3 = "Hello";
console.log(message3); //Hello

let value1 = "a";
let value2 = "A";
console.log(value1 == value2); //false


let text1 = "hello";
let text2 = "world";
let text3 = "           JavaScript          ";

//concatenate two strings
let result1 = text1. concat("  ", text2);
console.log(result1); //Hello world

//convert the text to uppercase
let result2 = text1.toUpperCase()
console.log(result2); //HELLO

// remove whiespace from the string
let result3 = text3.trim();
console.log(result3);  //JavaScript

//convert the string into an array
let result4 = text1.split();
console.log(result4); // ['hello']

//slice the string
let result5 = text1.slice(1, 3);
console.log(result5);  //el