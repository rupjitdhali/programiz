const { cacheSignal } = require("react");

let trafficlight = "green";
let message = ""

switch (trafficlight) {
    case "red":
        message = "Stop immediately.";
        break;
    case "yellow":
        message = "Prepare to step."
        break
    case "green":
        message = "proceed or continue driving."
        break;
    default:
        message = "Invalid traffic light color.";
}

console.log(message);

// Output: Proceed or continue driving.



// Syntax of the switch...case Statement

// switch (expression) {

//     case value1:
//         //code block to be executed
//         //if expression matches value1
//         break;

//     case value2:
//         // code block to be executed
//         // if expression matches vakue2
//         break;

        
//     default:
//         // code block to be executed
//         // if expression doesn't match any case
// }


let day = 3;
let activity;

switch (day) {

    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    case 4:
        console.log("Wednesday");
        break;

    case 5:
        console.log("Thursday");
        break;

    case 6:
        console.log("Friday");
        break;

    case 7:
        console.log("saturday");
        break;

    default;
        console.log("Invalid Day");     
}