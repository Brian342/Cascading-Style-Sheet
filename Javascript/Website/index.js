/* Ternary operator = a shortcut to if{} and else{} statements
helps to assign a variable based on a condition
condition ? codeiftrue : codeiffalse */
// let age = 21;

// let message = age >= 18 ? `you're an adult` : `you're a minor`;
// console.log(message);

// let time = 16;
// let greeting = time < 12 || time > 18 ? 'Good morning' : `Good afternoon`;
// console.log(greeting); // Good afternoon

// let isstudent = true;
// let message = isstudent ? `You are a student` : `You are not a student`;
// console.log(message); // You are a student

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is ${purchaseAmount - purchaseAmount * discount/100}`); // 10