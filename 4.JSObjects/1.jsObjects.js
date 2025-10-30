//JS objects

//student object

const student = {
    firstName: "jack",
    roll:32
};

console.log(student);

//Output: {firstName: 'Jack', rollNo: 32 }

// const objectName = {
//     key1: value1,
//     key2: value2,
//     ...
//     keyN: valueN
// };

//create person object
const person = {
    name: "john",
    age: 20
};

console.log(person);

// Output: {name: "John", age: 20}


//Access Object Properties

const dog = {
    name: "Rocky",
};

//access property
console.log(dog.name);

//Output: Rocky


const cat = {
    name: "Luna"
};


//access property
console.log(cat["name"]);

//Output: Luna





//JavaScript Object Operations

//1. Modify Object Properties

const person1 = {
    name: "Bobby",
    hobby: "Dancing",
};

//modify property
person.hobby = "Singing";

//display the object
console.log(person1);

//Output: {name: 'Bobby', hobby: 'Singing' }


//2. Add Object Properties

const student1 = {
    name: "John",
    age: 20,
};

//add properties
student1.rollNo = 14;
student1.faculty = "Science";

//display the object
console.log(student1);

//Output: {name: 'John', age: 20, rollNo: 14, faculty: "Science"}


//3. Delete Object Properies

const employee = {
    name: "Tomy",
    position: "Officer",
    salary: 30000,
};

//delete object property
delete employee.salary

//display the object
console.log(employee);

//Output: { name: 'Tony', postion: 'Officer'}




//JavaScript Object Methods
const person2 = {
    name: "Bob",
    age: 30,

    //use function as value
    greet: function () {
        console.log("Bob says Hi!");
    }

};


//call object method
person2.greet();  //Bob says Hi!