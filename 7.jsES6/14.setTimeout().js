// program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}

setTimeout(greet, 3000);
console.log('This message is shown first');


//program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}

let intervalid = setTimeout(greet, 3000);
console.log('Id:    ' + intervalid);


//program to display a name
function greet(name, lastName) {
    console.log('Hello' + '  ' + name + '  ' + lastName);
}

//passing argument to setTimeout
setTimeout(greet, 1000, 'John', 'Doe');