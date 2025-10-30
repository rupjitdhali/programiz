const student = {

    //data property
    firstName: 'Monica'
};

const student2 = {

    //data property
    firstName: 'Monica',

    //accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

//accessing data property
console.log(student2.firstName); //Monica

//accessing getter methods
console.log(student2.getName); //Monica

//trying to access as a method
// console.log(student.getName()); //error



//JS Setter

const student1 = {
    firstName: 'Monica',

    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student1.firstName); //Monica

//change(set) object property using a setter
student1.changeName = 'Sarah';

console.log(student1.firstName); //Sarah


//JS object.defineProperty()

const student4 = {
    firstName: 'Monica'
};

//getting property
Object.defineProperty(student4, "getName", {
    get : function () {
        return this.firstName;
    }
});


//setting property
Object.defineProperty(student4, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student4.firstName); //Monica

//changing the property value
student4.changeName = 'Sarah';

console.log(student4.firstName); //Sarah