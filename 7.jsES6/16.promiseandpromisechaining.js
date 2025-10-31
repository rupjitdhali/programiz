// let promise = new Promise(function(resolve, reject){
//     //do something
// });


const count = true;
let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value");
    } else {
        reject("There is no count value")
    }
});

console.log(countValue);

//Promise Chaining

//then() method

//chaining the promise with then()

//returns a promise

let countValue1 = new Promise(function(resolve, reject) {
    resolve("Promise resolved");
});

//executes when promise is resolved successfully

countValue1
   .then(function successValue(result) {
    console.log("Promise resolved");
   })

   .then(function successValue1() {
    console.log("You can call multiple functions this way.");
   });


   //returns a promise
let countValue2 = new Promise(function (resolve, reject) {
    reject('Promise rejected')
});

//executes when promise is resolved successfully
countValue2.then(
    function successValue2(params) {
        console.log(result);
    },
)


//eecutes if there is an error

.catch(
    function errorValue(result) {
        console.log(result);
    }
);


//Promise Vs Callback

api().then(function(result) {
    return api2() ;
}).then(function(result2) {
    return api3();
}).then(function(result3) {
    //do work
}).catch(function(error) {
    //handle any error that may occur before this point
});



//JS Callback

// api(function(result){
//     api2(function(result2){
//         api3(function(result3){
//             //do work
//             if(error) {
//                 //do something
//             }
//             else {
//                 //do something
//             }
//         });
//     });
// });