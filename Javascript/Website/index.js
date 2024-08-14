/* Counter Program
*/
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetbtn");
const increaseBtn = document.getElementById("increasebtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

//increase
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

//decrease
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}