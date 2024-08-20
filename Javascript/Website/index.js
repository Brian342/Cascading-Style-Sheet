/* Checked = property that determines the checked state of an
        HTML checkbox or radio button element */
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const MastercardBtn = document.getElementById("MastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
       if(myCheckBox.checked){
        subResult.textContent = `You are subscribed`;
       } 
       else{
        subResult.textContent = `You are not subscribed`;
       }
}