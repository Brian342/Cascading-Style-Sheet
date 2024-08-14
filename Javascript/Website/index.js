/*const = a variable that can't be changed */

const PI = 3.14159;
let radius;
let circumference;

//  radius = window.prompt(`Enter the radius of the circle`);


document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myResult").value = circumference + "cm";


}