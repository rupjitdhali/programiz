const age = [17, 18, 15, 19, 14]

let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Orange";


let fruits = ["Apple", "Banana", "Orange",];

const numbers1 = [10, 30, 40, 60, 80];

//access first element


let numbers = [10, 30, 40, 60, 80];

//access first element
console.log(numbers[0]); //10

//access third element
console.log(numbers[2]); //40


//Add element to an array

let dailyActivities = ["eat", "sleep"];

//an an element at the end
dailyActivities.push("code", "repeat");
console.log(dailyActivities);

// Output: ['eat', 'sleep', 'code', 'repeat']


let dailyActivities2 = ["eat", "sleep"];

//add an element at the beginning
dailyActivities2.unshift("code");

console.log(dailyActivities2);


//Change the Elements of an Array

let dailyActivities3 = ["eat", "breathe", "sleep"];

//change the second element
//use array index 1
dailyActivities3[1] = "code";

console.log(dailyActivities3);

// Outout: [ 'eat', 'code' , 'sleep']


//Remove Elements From an Array

let numbers2 = [1, 2, 3, 4, 5];

//remove one element
//starting from index 2
numbers.splice(2, 1);

console.log(numbers2);

// Output: [1, 2, 4, 5 ]