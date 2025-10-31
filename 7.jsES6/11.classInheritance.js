// parent class
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

//inheriting parent class

class Student extends Person {

}


let student1 = new Student('Jack');
student1.greet();


//JavaScript super() keyword

//parent class
class Person1 {
    constructor(name){
        this.name = name;
    }

    greet1(){
        console.log(`Hello ${this.name}`);
    }
}

//inheriting parent class
class Student2 extends Person1 {

    constructor(name) {
        
        console.log("Creating student class");

        //call the super class constructor and pass in the name parameter
        super(name);
    }
}

let student2 = new Student2('Jack');
student2.greet1();


//Overriding Method or Property

//parent class
class Person3 {
    constructor(name) {
        this.name = name;
        this.occupation = "unemployed"
    }

    greet2() {
        console.log(`Hello ${this.name}`);
    }
}

//inheriting parent class
class Student3 extends Person3 {
    
    constructor(name) {
        
        //call the super class constructor and pass in the name parameter
        super(name);

        //Overriding an occupation roperty
        this.occupation = 'Student';
    }

    //overriding Person's method
    greet() {
        console.log(`Hello student ${this.name}.`);
        console.log(`Hello student ${this.occupation}.`);
    }
}

let p = new Student3('Jack');
p.greet2();