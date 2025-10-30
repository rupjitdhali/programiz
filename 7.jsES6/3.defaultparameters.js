function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);    
}

greet();

// Output: Hello, Guest!


function sum(x = 3, y = 5) {
    //return sum
    return x + y;    
}

//pass arguments to x and y
var result = sum(5, 15);
console.log(`Sum of 5 and 15: ${result}`);

//pass argument to x ut not to y
result =sum(7);
console.log(`Sum of 7 and default value(5): ${result}`);

//pass no arguments
//use default values for x and y
result = sum();
console.log(`Sum of default values (3 and 5): ${result}`);