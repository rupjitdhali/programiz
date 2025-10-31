// define a class named 'Person"

//Create Objects without Classes
//create an object 'person' without a formal class definition
let person = {
    name: "Jack",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
};

//call the greet() method on the person object
person.greet()



//Features of a JavaScript Class

//define a class named 'Person'
class Person {
    // class constructor to initializt the 'name' and 'age' properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //method to display a message
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

//create two objects of the Person class
let person1 = new Person("Jack", 30);
let person2 = new Person("Tina", 33);

//call greet() method on the two instances
person1.greet()
person2.greet()
