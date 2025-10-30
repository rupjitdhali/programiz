{
    // block of code

    //declare variable ith var
    var name = "Peter";

    //can be accessed here
    console.log(name);
}

// can be accessed here
console.log(name);



const firstName = "Jack";
const lastName = "Sparrow";

console.log(`Hello ${firstName} ${lastName}`);

// Output: Hello Jack Sparrow


//Default Parameter Values

//function to find sum of two numbers
function sum(numA, numB = 5) {
    
    //default value of numB is 5
    console.log(numA + numB);
};

//pass 10 to numA but
//don't pass value to numB
//numB takes default value 5
sum(10); //15

//pass 5 to numA and 15 to numB
sum(5, 15); //20



//JS Arrow Function

//function expression using arrow function
let product = (x, y) => x * y

result = product(5, 10);

console.log(result);  //50


//JS Classes

// declare a class
class Person {

    //constructor function
    constructor(name) {
        this.name = name;
    };
};

// create objects
let p1 = new Person("John");
let p2 = new Person ("Rachel");

//print object properties

console.log(p1.name); //John
console.log(p2.name); //Rachel


//JavaScript Destructuring

//object of hospital
const hospital = {
    doctors: 23,
    patients: 44,
};

//assign individual values
let doctors = hospital.doctors;
let patients = hospital.patients;

console.log(doctors);  //23
console.log(patients); //44


//JS import and export

//JS promise

//define a promise
let countValue = new Promise(function (resolve, reject) {
    setTimeout(function() {
        resolve("promise resolved!");
    }, 5000);
});

//executes when promise reslves
countValue.then(function successValue(result) {
    console.log(result);
})


//Output: promise resolved!


// function with ...args rest parameter
function show(a, b, ...args) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("args:", args);
}


//call function with parameters
show(1, 2, 3, 4, 5);


// Spread Operatoe

let numArr = [1, 2, 3];

//without spread operator
console.log([numArr], 4, 5); // [[1, 2, 3], 4, 5]

//with spread operator
console.log([...numArr, 4, 5]); // [1, 2, 3, 4, 5]