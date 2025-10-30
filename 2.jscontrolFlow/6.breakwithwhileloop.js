// Program to find the sum of positive numbers
// the while loop runs infinitely
// loop terminates only when user enters a negative number

let sum = 0;

// infinite loop
while (true) {

    // get number input
    let num = Number(prompt("Enter a number: "));

    // terminate the loop if num is negative
    if (num < 0) {
        break;
    }

    // otherwise, add num to sum
    else {
        sum += num;
    }
}

// print the sum
console.log(`Sum: ${sum}`);