//JS Symbol
//two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); //false


//Add Symbol as an Object Key

let id = Symbol("id");

let person = {
    name: "Jack",

    //adding symbol as a key
    [id]: 123 // not "id": 123
};

console.log(person); // {name: "Jack", Symbol(id): 123}


let id1 = Symbol("id");

let person2 = {
    name: "Jack",
    age : 25,
    [id1]: 12
};

//using for...in
for (let key in person2) {
    console.log(key);
}


//Benefit of Using Symbols in Object

let person3 = {
    name: "Jack"
};

//creating Symbol
let id3 = Symbol("id");

//adding symbol as a key
person[id3] = 12;

console.log(person3);


let person4 = {
    name: "Jack"
};

//using string as key
person.id = 12;
console.log(person.id); //12

//Anoher program overwrites value
person.id = 'Another value';
console.log(person.id); //Another value

//Symbol Methods
//get symbol by name
let sym = Symbol.for('hello');
let sym1 = Symbol.for('id');

// get same by symbol
console.log(Symbol.keyFor(sym) ); //hello
console.log(Symbol.keyFor(sym1)); //id

const x = Symbol('hey');

//description property
console.log(x.description); //hey

const stringArray = ['a', 'b', 'c'];
const numberArray = [1, 2, 3];

//isConcatSpreadable property
numberArray[Symbol.isConcatSpreadable] = false;

let result = stringArray.concat(numberArray);
console.log(result); //["a", "b", "c", [1, 2, 3]]