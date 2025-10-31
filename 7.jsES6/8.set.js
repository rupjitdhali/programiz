// create Set
const set1 = new Set(); //an empty set
console.log(set1); //Set{}

//Set with multiple types of value
const set2 = new Set([1, 'hello', {count : true}]);
console.log(set2); // Set {1, "hello", {count: true}}


//Set with duplicate values
const set3 = new Set([1, 1, 2, 2]);
console.log(set3); // Set {1, 2}


//Access Set Elements

const set4 = new Set([1, 2, 3]);

//access the elements of a Set
console.log(set4.values()); //Set Iterator [1, 2, 3]


//check if an element is in Set
console.log(set1.has(1));


//Adding New Elements

const set5 = new Set([1, 2]);
console.log(set5.values());

//adding new elements
set5.add(3);
console.log(set5.values());

//adding duplicate elements
//does not add to Set
set5.add(1);
console.log(set5.values());

const set6 = new Set([1, 2, 3]);
console.log(set6.values());  // Set Iterator [1, 2, 3]

//removing a particular element
set6.delete(2);
console.log(set6.values()); //Set Iterator [1, 3]


//remove all elements of Set
set6.clear();
console.log(set6.values()); //Set Iterator []



//Iterate Sets

const set = new Set([1, 2, 3]);

//looping through Set
for (let i of set) {
    console.log(i);
}


//JS weakSet

// const weakSet = new WeakSet();
// console.log(weakSet); //weakSet {}
// let obj = {
//     message: 'Hi',
//     sendMessage: true
// }

// //adding object (element) to WeakSet
// weakSet.add(obj);

// console.log(weakSet); //WeakSet {{message: "Hi", sendMessage: true}}


const weakSet =new WeakSet();

let obj = { message: 'Hi', sendMessage: true };
weakSet.add(obj);

console.log(weakSet.has(obj));


//trying to add string to WeakSet
const setOfStrings = new Set();
setOfStrings.add('hello');
console.log(setOfStrings.has('hello'));


//throws error
//TypeError: Attempted to add a non-object key to a WeakSet
console.log(weakSet);


//WeakSet Methods


const weakSet1 = new WeakSet();

console.log(weakSet1); //WeakSet {}

const obj1 = {a:1};

//add to a weakSet
weakSet1.add(obj);
console.log(weakSet1); // WeakSet {{a:1}}

//check if an element is in Set
console.log(weakSet1.has(obj)); //true


//delete elements
weakSet1.delete(obj);
console.log(weakSet1); // WeakSet {}