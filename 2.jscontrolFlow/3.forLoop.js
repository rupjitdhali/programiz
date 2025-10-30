for (let i = 0; i < 3; i++) {
    console.log("Hello, world!");
}

//Output:
//Hello, world!
//Hello, world!
//Hello, world!

// for (initialxpression; condition; updateExpression) {
//     // for loop body
// }

for (let i1 = 1; i1 < 6; i1++) {
    console.log(i1);
}


//program to display the sum of natural numbers

let sum = 0;
const n = 100

// loop from i = 1 to i = n
// in each iteration, i is increased by 1
for (let i2 = 1; i2 <= n; i2 ++) {
    sum += i2; // sum = sum + i
}

console.log(`sum: ${sum}`);

//Output: sum: 5050



// Iterate Though an Array

const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits [i]);
}