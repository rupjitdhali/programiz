//function
function greetSimple(name) {
    console.log('Hi' + ' ' + name);
}

greetSimple('Peter'); //Hi Peter


// //function
// function greet(name) {
//     console.log('Hi' + '   ' + name);    
// }

// greet('Peter'); // Hi Peter

function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    if (typeof callback === 'function') callback();
}

//callback function
function callMe() {console.log('I am callback function');}

//passing function as an argument
greet('Peter', callMe);


// program with setTimeoyt()
// program that shows the delay in execution

function greetLater() {
    console.log(console.log('Hello world'));
}


function sayName(name) {
    console.log('Hello' + '  ' + name);    
}

//calling the function
setTimeout(greetLater, 2000);
sayName('John');


//Using a callback function

//Callback Function Example
function greetwithCallback(name, myFunction) {
    console.log('Hello world');   

    //callback function
    //executed only after the greet() is executed
    myFunction(name);
}

//callback function
function sayName(name) {
    console.log('Hello' + '  ' + name);    
}

//calling the function after 2 seconds
setTimeout(greetwithCallback, 2000, 'John', sayName);