// //program to display a text using setInterval method
// function greet() {
//     console.log('Hello world');
// }


// // setInterval(greet, 1000);

// // program to display time every 5 seconds
// function showTime() {

//     // return new date and time
//     let dateTime= new Date();

//     // return the time
//     let time = dateTime.toLocaleTimeString();

//     console.log(time)
// }

// let display = setInterval(showTime, 5000);


// program to stop the setInterval() method after five times

// let count = 0;

// // function creation
// let interval = setInterval(function(){

//     // increasing the count by 1
//     count += 1;

//     // when count equals to 5, stop the function
//     if(count === 5){
//         clearInterval(interval);
//     }

//     // display the current time
//     let dateTime= new Date();
//     let time = dateTime.toLocaleTimeString();
//     console.log(time);

// }, 2000);


// // program to display a name
// function greet(name, lastName) {
//     console.log('Hello' + ' ' + name + ' ' + lastName);
// }

// // passing argument to setInterval
// setInterval(greet, 1000, 'John', 'Doe');
