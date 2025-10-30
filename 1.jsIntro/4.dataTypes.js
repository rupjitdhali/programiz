// string enclosed within single quotes
let fruit = 'apple';
console.log(fruit);

//string enclosed within double quotes
let country = "USA";
console.log(country);

//string enclosed within backticks
let result = `fail`;
console.log(result);

// integer value
let integer_number = -3;
console.log(integer_number);

// floating-point value
let float_number = 3.15;
console.log(float_number);

// BigInt value
let value1 = 9007199251247440998n;

//add two big integers
let result1 = value1 + 1n;
console.log(result1); //"9007199251247440999n"

let value2 = 9007199251247440998n

//TypeError: Cannot mix BigInt and other types, use explicit conversions

let dataChecked = true;
console.log(dataChecked); //true

let valueCounted = false;
console.log(valueCounted); //false


let name;
console.log(name); //undefined

let name1 = undefined;
console.log(name1); //undefined

// We should avoid explicitly assigning undefined to a variable. Usually, we assign null to variables to indicate "unknown" or "empty" values.

let number = null;
console.log(number); //null

// two symbols with the same description
let value3 = Symbol("programiz");
let value4 = Symbol("programiz");

console.log(value3 === value4); //false

let student = {
    firstName: "John",
    lastName: null,
    class: 10
};