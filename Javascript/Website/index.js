/*Type Conversion = change the datatype of a value to another
                    (Strings, numbers, boolean)*/

let age = window.prompt(`How old are you?`);
age = Number(age);
age += 1;

console.log(age, typeof age);