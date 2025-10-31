//async function example

// async function name(parameter1, parameter2, ...parameterN) {
//     //statement
// }


//async function example

async function f() {
    console.log('Async function');
    return Promise.resolve(1);
}

f();

async function f1() {
    console.log('Aync function. ');
    return Promise.resolve(1);
}

f1().then(function(result) {
    console.log(result);
});


//JS await Keyword

//a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise resolved')}, 4000);
});

//async function
async function asyncFunc() {

    //wait until the promise resolves
    let result = await promise;

    console.log(result);
    console.log('hello');
}

//calling the async function
// asyncFunc1();



let promise1;
let promise2;
let promise3;

async function asyncFunc() {
    let resu = await promise1;
    let resul = await promise2;
    let results = await promise3;

    console.log(resu);
    console.log(resul);
    console.log(results);
}


//Error Handling

asyncFunc().catch(
    //catch error and do something
)

//a promise
let promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000);
});

//async function
async function asyncFunc() {
    try {
        //wait until the promise resolves
        let result4 = await promise;

        console.log(result4);
    }
    catch(error) {
        console.log(error);
    }
}

//calling the async function
asyncFunc(); //Promise resolved