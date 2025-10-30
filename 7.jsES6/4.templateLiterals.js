//JS Template Literals

let name = "Alice";
let greeting = `Hello ${name}`;

console.log(greeting);

// Output: Helli Alice



// JS Template Literals

let number1 = 8;
let number2 = 3;

//embed expression within template literal
let result = `tHE SUM Of ${number1} and ${number2} is ${number1 + number2}.`;

console.log(result);

//Output: The sum of 8 and 3 is 11.


//Tagged Templates

function displayMessage(message) {
    return message;
}

// create a tagged template
let result1 = displayMessage`Hello Jack`;
console.log(result1);  // ['Hello Jack']


