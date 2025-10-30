//Equal to Operator

const a = 3, b = 2;
console.log(a > b);

//Output: true

// same value, same type
console.log(5 == 5); // true

//same value, different type
console.log(2 == "2"); //true

//different values, same type
console.log("hello" == "Hello"); //false




//Not equal to Operator

// same value, same type
console.log(2 != 2); //false

//same value, different type
console.log(2 != "2"); //false

//different value, same type
console.log(2 != 3); //true

//Strict equal to Operator

//same value, same type
console.log(2 === 2); //true

//same value, different type
console.log(2 === "2"); //false




// Strict Not Equal to Operator

// same value, same type
console.log(2 !== 2); //false

//same value, different type
console.log(2 !== "2");  //true

//different value, same type
console.log("Hello" !== "World"); //true




//Greater Than Operator

//left operand is greater
console.log(3 > 2); //true

//both operands are equal
console.log(4 > 4); //false

//left operand is smaller
console.log(2 > 5); //false



//Greater Than Or Equal to Operator

// left operand is greater
console.log(3 >= 2); //true

//both operands are equal
console.log(4 >= 4); //true

//left operand is smaller
console.log(2 >= 5); //false





//Less Than Operator

//Left operand is smaller
console.log(2 < 5); //true

//both operands are equal
console.log(4 < 4); //false

//left operands is greater
console.log(3 < 2); //false




// Less Than Or Equal to Operator

// left operand is smaller
console.log(2 <= 5); //true

//both operands are equal
console.log(4 <= 4); //true

//left operand is greater
console.log(3 <=2); //false


//Logical Operators

const x = 5, y = 3;

console.log((x < 6) && (y < 5));

// Output: true


// Logical AND Operator

let x1 = 2;

//both expressions are true
console.log((x1<4)) && (4 >= x11); //true

//only one expression is true
console.log((x1 <= 4) && (2 == 4)); //false

//both expressions are false
console.log((x1 > 4) && (x1 == 4)); //false


//Logical OR Operator

let x2 = 2;
// both expressions are true
console.log((x2 < 4) || (4 >= x2)); // true

//only one expression is true
console.log((x2 <= 4) || (2 == 4)); //true

//both expressions are false
console.log((x2 > 4) || (x2 == 4)); //false

//Logical NOT Operator

// NOT on true
console.log(!true); //false

//NOT on false
console.log(!false); //true

//comparison example
console.log(!(2<3)); //false