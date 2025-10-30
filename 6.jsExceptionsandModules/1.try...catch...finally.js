// try {
//     //body of try
// }
// catch(error) {
//     //body of catch
// }

//program to show try...catch in a program
const numerator= 100, denominator = 'a';

try {
    console.log(numerator / denominator);

    //forgot to define variable a
    console.log(a);
}
catch(error) {
    console.log('An error caught');
    console.log('Error message: ' + error);
}


//try...catch...finally Statement

try {
    //try_Statements
}
catch(error) {
    //catch_statements
}
finally {
    //codes that gets executed anyway
}


//try...catch...finally Example

const numerator1 = 100, denominator1 = 'a';

try{
    console.log(numerator/denominator);
        console.log(a);
}
catch(error) {
    console.log('An error caught');
    console.log('Error message: ' + error);
}
finally {
    console.log('FInally will execute every time');
}


//try...catch in setTimeout


try {
    setTimeout(function(){
        // error in the code
    },3000);
} catch (e) {
    console.log("won't work");
}


setTimeout(function(){
    try {
        // error in the code
    } catch {
        console.log('error is caught');
    }
}, 3000);