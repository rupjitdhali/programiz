// for (element of iterable) {
//     // body of for...of
// }


//array
const students = ['John', 'Sara', 'Jack'];

//using for...of
for (let element of students) {

    //display the values
    console.log(element);
}


//for..of with Strings
// string
const string = 'code';

//using for...of loop
for (let i of string) {
    console.log(i);
}

//for...ofwithSets
//define Set
const set = new Set([1, 2, 3]);

//looping though Set
for (let i of set) {
    console.log(i);
}

//for...ofwithMaps
//define Map
let map = new Map();

//inserting elements
map.set('name', 'Jack');
map.set('age', '27');

//looping through Map
for (let [key, value] of map) {
    console.log(key + '  ' + value);
}

//User defined Iterators

//creating iterable object
const iterableObj = {

    //iterator method
    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                step++;
                if (step === 1) {
                    return { value: `1`, done: false};
                }
                else if (step === 2) {
                    return { value: `2`, done: false};
                }
                else if (step === 3) {
                    return { value: '3', done: false};
                } 
                return {value: ``, done: true}
            }
        }
    }
}

//iterating using for...of
for (const i of iterableObj) {
    console.log(i);
}


//for...ofwithGenerators

//generator function
function* generatorFunc() {

    yield 10;
    yield 20;
    yield 30;
}

const obj = generatorFunc();

//iteration through generator
for (let value of obj) {
    console.log(value);
}