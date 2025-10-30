// Program to countdoen till 1

//recursive function
function counter(count) {

    //display count
    console.log(count);

    //condition for stopping
    if(count > 1) {

        //decrease count
        count = count - 1;

        //call counter with new value of count
        counter(count);
    } else {

        //terminate execution
        return;
    };

};

// access function

counter(5);



//recursive function
function factorial(num) {

    //base case
    //recurse only if num is greater than 0
    if (num > 1) {
        return num * factorial(num - 1);
    }
    else {
        return 1;
    };
};

let x = 4;

//store result of factorial() in variable
let y = factorial(x);

console.log(`The factorial of ${x} is ${y}`);