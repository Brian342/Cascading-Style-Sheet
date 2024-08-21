/* Method chaining = calling one method after another
in one continuous line of code

*/

// No method chaning

// let userName = window.prompt("Enter your username! ");
// userName = userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = userName.slice(1);
// extraChars = extraChars.toLowerCase();
// userName = letter + extraChars;

// console.log(userName);

// Method Chaining
let username = window.prompt("Enter your username! ");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username)

