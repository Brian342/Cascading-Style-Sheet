/* Strings methods = allow you to manipulate and work with text (strings) */

let userName = "BroCode";

console.log(userName.charAt(0)) // used to get a specific value 
console.log(userName.charCodeAt(0)) // used to get the ASCII value of a character
console.log(userName.indexOf("o")) // used to get the index of a specific value
console.log(userName.lastIndexOf("o")) // used to get the last index of a specific value
console.log(userName.length) // used to get the length of a string
console.log(userName.localeCompare("BroCode")) // used to compare two strings
console.log(userName.toLowerCase()) // used to convert a string to lowercase
console.log(userName.toUpperCase()) // used to convert a string to uppercase
console.log(userName.trim()) // used to remove spaces from a string
console.log(userName.replace("Bro", "Brother")) // used to replace a value in a string