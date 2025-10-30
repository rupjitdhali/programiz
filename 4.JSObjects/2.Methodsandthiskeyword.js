// dog object
const dog = {
    name: "Rocky",

    //bark method
    bark: function () {
        console.log("Woof!");
    }
};

//access method
dog.bark();

//Output: Woof!


//JS this keyword

//person object
const person = {
    name: "John",
    age: 30,

    //method
    introduce: function () {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    }
};

//access the introduce() method
person.introduce();

//Output: My name is John and I'm 30 years old.



//Add Methods to an Object

//student object
let student = {
    name: "John"
};

//add new method
student.greet = function() {
    console.log("Hello");
};

//access greet() method
student.greet();

//Output: Hello


//constructor function
function Person () {
    this.name = "John",
    this.age = 23
}

//create an object
const person3 = new Person();

//print object attributes
console.log(person3.name);
console.log(person3.age);

//Output:
//John
//23