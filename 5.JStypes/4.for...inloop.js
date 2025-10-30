const student = {
    name: "Monica",
    class: 7
};

//loop through the keys of student object
for (let key in student) {

    //display the key-value pairs
    console.log(`${key} => ${student[key]}`);
};

//Output:
//name => Monica
// class => 7


const salaries = {
    Jack: 24000,
    Paul: 34000,
    Monica: 55000,
};

//use for...in to loop through
//properties of salaries
for (let i in salaries) {

    //access object key using [ ]
    //add a $ symbol before the key
    let salary = "$" + salaries[i];

    //display the values
    console.log(`${i}: ${salary}`);
};