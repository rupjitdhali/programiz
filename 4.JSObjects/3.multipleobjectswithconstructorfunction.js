//contructor function
function Person () {
    this.name = "John",
    this.age = 23,

    this.greet = function () {
        console.log("hello");
    }
}

//create objects
const person1 = new Person();
const person2 = new Person();

//access properties
console.log(person1.name); //John
console.log(person2.name); //John


//constructor function with parameters
function Person(person_name, person_age, person_gender) {
    
    //assign parameter values to the calling object
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,

    this.greet = function () {
        return (`Hi ${this.name}`)
    }
}

//create objects and pass arguments
const person3 = new Person("John", 23, "male");
const person4 = new Person("Sam", 25, "female");

//access properies
console.log(person3.name); //John
console.log(person4.name); //Sam


//Built-In Constuctors

//use Object() constructor to create object
const person = new Object ({ name: "John", age: 30});

//use String() constructor to create string object
const name = new String ("John");

//use Number() constructor to create number object
const number = new Number (57);

//use Boolean() constructor to create boolean object
const count = new Boolean(true);

console.log(person);
console.log(name);
console.log(number);
console.log(count);

