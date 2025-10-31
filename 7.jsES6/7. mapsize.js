let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

console.log(map1.size); //1


//Iterate Through a Map

let map2 = new Map();
map2.set('name', 'Jack');
map2.set('age', '27');

// looping through Map
for (let [key, value] of map2) {
    console.log(key + '    ' + value);
}



//looping through Map
map2.forEach(function(value, key) {
    console.log(key + '    ' + value);
})

//looping through the Map
for (let key of map2.keys()) {
    console.log(key);
}

//Iterate Over Map Vaues

//looping through the Map
for (let values of map2.values()) {
    console.log(values);
}


//Get Key/Values of Map

//looping through the Map
for (let elem of map2.entries()) {
    console.log(`${elem[0]}: ${elem[1]}`);
}


//JS WeakMap

const weakMap = new WeakMap();
console.log(weakMap); //WeakMap {}

let obj = {};

//adding object (element) to WeakMap
weakMap.set(obj, 'hello');

console.log(weakMap); // WeakMap {{} => "hello"}

//adding string as a key to WeakMap
// weakMap.set('obj', 'hello');


//WeakMap Methods

// adding object(element) to WeakMap
weakMap.set(obj, 'hello');

console.log(weakMap); //WeakMap {{} => "hello"}

//get the element of a weakMap
console.log(weakMap.get(obj)); //hello

//check if an element is present in WeakMap
console.log(weakMap.has(obj)); //true

//delete the element of WeakMap
console.log(weakMap.delete(obj)); //true

console.log(weakMap); // WeakMap {}


//WeakMaps are not iterable

//adding object (element) to WeakMap
weakMap.set(obj, 'hello');

// //looping through WeakMap
// for (let i of weakMap) {
//     console.log(i);   //TypeError
// }

