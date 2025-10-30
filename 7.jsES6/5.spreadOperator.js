//Spread Operator

let numbers = [1, 2, 3];

//equivalent to
//console.log(numbers[0], numbers[1], numbers[2])
console.log(...numbers);

// Output: 1 2 3


//Spread Operator Inside Arrays

let fruits = ["Apple", "Banana", "Cherry"];

//add fruits array to moreFruits1
//without using the ...operator
let moreFruits1 = ["Dragonfruit", fruits, "Elderberry"];

//spread fruits array within moreFruits2 array
let moreFruits2 = ["Dragonfruit", ...fruits, "Elderberry"];

console.log(moreFruits1);
console.log(moreFruits2);


//Spread Operator with Object

let obj1 = { x : 1, y : 2};
let obj2 = { z : 3 };

//use the spread operator to add
//members of obj1 and obj2 to obj3
let obj3 = {...obj1, ...obj2};

//add obj1 and obj2 without spread operator
let obj4 = {obj1, obj2};
console.log("obj3 =", obj3);
console.log("obj4 =", obj4);


//Rest Parameter

let printArray = function(...args) {
    console.log(args);    
}

//pass a single argument
printArray(3);

//pass multiple arguments
printArray(4, 5, 6);



//Spread Operator as Part of Function Argument

function sum(num1, num2, num3) {
    console.log(num1 + num2 + num3);    
}

let num1 = [1, 3, 4, 5];

//pass the first three array elements
sum(...num1);

//Output: 8