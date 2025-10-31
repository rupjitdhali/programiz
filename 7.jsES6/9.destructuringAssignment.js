// assigning object attributes to variables
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'
}

// destructuring assignment
//using different variable names
let { name, age, gender } = person;

console.log(name); //Sara
console.log(age);  //25
console.log(gender);  //female


//Array Destructuring
const arrValue = ['one', 'two', 'three'];


//destructuring assignment in arrays
const [x, y, z] = arrValue;

console.log(x); //one
console.log(y); //two
console.log(z); //three


//Assign Default Values

let arrValue1 = [10];

//assigning default value 5 and 7
let [x1 = 5, y1 = 7] = arrValue1;

console.log(x1); //10
console.log(y1); //7


const person1 = { 
    name1: 'Jack',
}

//assign default value 26 to age if undefined
const {name1, age1 = 26} = person1;

console.log(name1);  //Jack
console.log(age1);   //26


//Swapping Variables

//program to swap variables

let x2 = 4;
let y2 = 7;

//swapping variables
[x2, y2] = [y2, x2];

console.log(x2);  //7
console.log(y2);  //4


//Skip Items

const arrValue2 = [ 'one', 'two', 'three'];

//destructuring assignment in arrays
const [x3,  ,z3] = arrValue2;

console.log(x3); // one
console.log(z3); // three


//Assign Remaining Elements to a Single Variable

const arrValue3 = ['one', 'two', 'three', 'four'];

//destructuring assignment in arrays
//assigning remaining elements to y
const [x4, ...y4]  = arrValue3

console.log(x4); //one
console.log(y4); //["two", "three", "four"]


