/* How to accept user input
1. Easy way = window prompt
2. Proffessional way = HTML textbox*/

// 1. Easy way
// let username = window.prompt("What's your username?")

// console.log(`Your username is ${username}`)

// proffesional way
let username ;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(`Your username is ${username}`)
}