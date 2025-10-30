export function greetPerson(name) {
    return `Hello ${name}`;
}

//default export
export default function greet(name) {
    return `Hello ${name}`;
}

export const age = 23;


//in greet.js
function greet1() {
    //strict by default
}

export {greet1};