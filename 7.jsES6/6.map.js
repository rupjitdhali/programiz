// create a Map
const map1 = new Map(); // an empty map
console.log(map1); // Map {};

// insert key-value pair
map1.set('info' , {name: 'Jack', age: 26});
console.log(map1); // Map {"info" => {name: "Jack", age: 26}}


// Map with object key
let map2 = new Map();

let obj = {};
map2.set(obj, {name: 'Jack', age: "26"});

console.log(map2); // Map {{} => {name: "Jack", age: "26"}}

//Access Map Elements

console.log(map1.get('info'));


//Map elements

const set1 = new Set([1, 2, 3]);

let map3 = new Map();
map3.set('info', {name: 'Jack', age: "26"});

//check if an element is in Set
console.log(map3.has('info'));  //true



//Removing Elements


map1.delete('address'); //false
console.log(map1); //Map {"info" => {name: "Jack", age: "26"}}

map1.delete('info'); //true
console.log(map1); // Map {}


//removing all element
map1.clear();
console.log(map1); //Map {}