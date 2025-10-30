// exporting the variable
export const name = 'JavaScript Program';

// exporting the function
export function sum(x, y) {
    return x + y;
}    


//define and (optionally) re-export with aliases
export function function1() { return 'fn1'; }
export function function2() { return 'fn2'; }
export function function3() { return 'fn3'; }
export function function4() { return 'fn4'; }



//renaming import inside module.js
export {
    function1 as newName1,
    function2 as newName2
};