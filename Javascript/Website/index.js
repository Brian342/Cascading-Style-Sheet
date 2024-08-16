/*Random Number generator */

const myButton = document.getElementById("myButton");
const myLabel1= document.getElementById("Label1");
const myLabel2= document.getElementById("Label2");
const myLabel3= document.getElementById("Label3");

const min = 1;
const max = 6;
let randomnum1;
let randomnum2;
let randomnum3;

myButton.onclick = function() {
        randomnum1 = Math.floor(Math.random() * max) + min;
        randomnum2 = Math.floor(Math.random() * max) + min;
        randomnum3 = Math.floor(Math.random() * max) + min;
        Label1.textContent = randomnum1;
        Label2.textContent = randomnum2;
        Label3.textContent = randomnum3;

}