// if  (condition) {
//     //block of code
// }


// Program to check if the number is positive

// const number = prompt("Enter a number: ")

// // check if number is greater than 0
// if (number > 0) {
//     // the body of the if statement
//     console.log("positive number");
// }

// console.log("nice number");

//Javascript else Statement

// if (condition) {
//     //block of code
//     //execute this if condition is true
// }
// else {
//     // block of code
//     // execute this if condition is true
// }

let age = 19;
//if age is 18 or above, you are an adult
//otherwise, you are a minor

if (age >=18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// Output: You are an adult





// //else if statement
// //check for first condition
// if (condition1) {
//     //if body
// }

// // check for second condition
// else if (condition2){
//     // else if body
// }

// // if no condition matches
// else {
//     //else body
// }

//if...else if Statement

let rating = 4;

//rating of 2 or below is bad
//rating of 4 or above is good
//else, the rating is average

if (rating <= 2) {
    console.log("Bad rating");
}
else if (rating >= 4) {
    console.log("Good rating!");
}
else {
    console.log("Average rating");
}

//Output: Good rating!

//Nasted if...else Statement
let marks = 60;
//outer if...else statement
//student passed if marks 40 or above
//otherwise, student failed

if (marks >= 40) {
    // inner if...else statement
    // Distinction if marks is 80 or above

    if (marks >= 80) {
        console.log("Distinction");
    }
    else {
        console.log("Passed");
    }
}

else {
    console.log("Failed");
}

// Oouput: Passed