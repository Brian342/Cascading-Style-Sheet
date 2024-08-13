/* Variables = A container that stores a value 
                behaves as if it were the value it contains*/

let fullName = "Brian Kim";
let age = 22;
let student = true;

document.getElementById("p1").textContent = `Your Name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled at school ${student}`;