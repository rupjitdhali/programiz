function addNumbers() {
    var sum = 5 + 4;
}


//JavaScript Local Variables

function greet() {

    //local variable
    var message = "Hello";

    console.log(`Local: ${message}`);
}

greet();

//try to access message variable
//outside the greet() function
// console.log(`Global: ${message}`);







//JavaScript Global Variables

//declare global variable
var message = "Hello";

function greet() {
    console.log(`Local:${message}`);
}    

greet();
console.log(`global: ${message}`);



//JavaScript Block-Level Variables

function display_scopes() {
    //declare variable in local scope
    let message = "local";

    if (true) {

        //declare block-level variable
        let message = "block=level";

        console.log(`inner scope: ${message}`);
    }

    console.log((`outer scope: ${message}`));
}

display_scopes();