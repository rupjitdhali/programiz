// new Proxy(EventTarget, handler);

let student1 = {
    age: 24,
    name: "Felix"
}

const handler = {
    get: function(obj, prop) {
        return obj[prop] ? obj[prop] : 'property does not exist';
    }
}

const proxy = new Proxy(student1, handler);

console.log(proxy.name); //Felix
console.log(proxy.age); //24
console.log(proxy.class); //property does not exist

let student = {
    name: 'Jack',
    age: 24
}

const handler1 = { };

//passing empty handler
const proxy1 = new Proxy(student, {});

console.log(proxy1); //Proxy {name: "Jack", age: 24}

console.log(proxy1.name); //Jack


//get() handler
let student2 = {
    name: 'Jack',
    age: 24
}

const handler2 = {

    //get tehe object key and value
    get(obj, prop) {

        return obj[prop];
    }
}

const proxy2 = new Proxy(student2, handler);
console.log(proxy2.name); //Jack


//set() handler

let student3 = {
    name: 'John'
}

let setNewValue = {
    set: function(obj, prop, value) {

        obj[prop] = value;
        return;
    }
};

//setting new proxy
let person = new Proxy(student, setNewValue);

//setting new key/value
person.age = 25;
console.log(person); // Proxy {name: "John", age: 25}


//Uses of Proxy
//1. for Validation

let student4 = {
    name: 'Jack',
    age: 24
}

const handler3 = {

    //get the object key and value
    get(obj, prop) {

        //check condition
        if (prop == 'name') {
            return obj[prop];
        } else {
            return 'Not allowed'
        }
    }
}

const proxy3 = new Proxy(student4, handler3);
console.log(proxy3.name); //Jack
console.log(proxy3.age); //Not allowed



//Read Only View of an Object


let student5 = {
    name: 'Jack',
    age: 23
}

const handler4 = {
    set: function (obj, prop, value) {
        if (obj[prop]) {

            //cannot change the student value
            console.log('Read only');
        }
    }
};


const proxy4 = new Proxy(student5, handler4);

proxy4.name = 'John'; //Read only
proxy4.age = 33  //Read only