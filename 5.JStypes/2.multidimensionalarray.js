// multidimensional array
//contains 3 separate arrays as elements
const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];

console.log(data);

//Output : [[1, 2, 3], [1, 3, 4], [4, 5, 6]]


//declare three arrays

let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

//create multidimensional array
//using student1, student2, and student3
let studentsData = [student1, student2, student3];

//print the multidimensional array
console.log(studentsData);

// Output: [['Jack', 24], ['Sara', 23], ['Peter', 24]]


//Access Elements of an Array

let x = [
    ['Jack', 24],
    ['Sara', 23],
    ['Peter', 24]
];

//access the first item
console.log(x[0]); // ['Jack', 24]

//access the first item of the first inner array
console.log(x[0][0]); // 'Jack'

//access the second item of the third inner array
console.log(x[2][1]); //24


//Add Elements to a Multidimensional Array

let studentsData1 = [["Jack, 24"], ["Sara", 23]];

//add "hello" as the 3rd element
//of the 2nd inner array
studentsData1[1][2] = "hello"

console.log(studentsData1);


let studentsData2 = [["Jack", 24], ["Sara", 23]]

//add element to the end of the outer array
studentsData2.push(["Peter", 24]);

console.log(studentsData2);

//add "hello" as the final element
// of the 2nd inner array
studentsData2[1].push("hello");

console.log(studentsData2);

//Output: [['Jack', 24], ['Sara', 23, 'hello']]





//Remove Elements From a Multidimensional Array


let studentsData4 = [['Jack', 24], ['Sara', 23]];

//remove one element
//starting from index 0
studentsData4.splice(0,1);

console.log(studentsData4);

//Output: [['Sara', 23]]


//Iterate Over Multidimensional Array


let studentsData5 = [["jack", 24], ["Sara", 23]];

//loop over outer array
for(let i = 0; i < studentsData5.length; i++) {

    //loop over inner array elements
    for(let j = 0; j < studentsData5[i].length; j++) {
        console.log(studentsData5[i][j]);
    }
}