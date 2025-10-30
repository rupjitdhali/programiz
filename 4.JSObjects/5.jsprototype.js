function Car() {
    console.log("Car instance created!");
}

//add a property to prototype
Car.prototype.color = "Red";

//add a method to the prototype
Car.prototype.drive = function() {
    console.log(`Driving the car painted in ${this.color}...`);
};

//display the added property
console.log(`The car's color is: ${Car.prototype.color}`);

//call the added method
Car.prototype.drive();



//Property Inheritance


function Car1 (model, year) {
    this.model = model;
    this.year = year;
};

//create multiple objects
let c1 = new Car1("Mustang", 1964);
let c2 = new Car1("Corolla", 1966);

//add property
Car1.prototype.color = "Red";

//add method
Car1.prototype.drive = function() {
    console.log(`Driving ${this.model}`);
};

//display added property using c1 and c2 objects
console.log(`${c1.model} color: ${c1.color}`);
console.log(`${c2.model} color: ${c2.color}`);

//display added method using c1 and c2 objcts
c1.drive();
c2.drive();


//Prototype Chaining

function Car2() {
    this.color = "Red";
}

//add property that already exists
Car2.prototype.color = "Blue";

//add a new property
Car2.prototype.wheels = 4;

const c3 = new Car2()

console.log(`The car's color is ${c1.color}.`);
console.log(`The car has ${c1.wheels} wheels`);
