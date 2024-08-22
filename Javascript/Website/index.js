/* while loop = repeat some code WHILE some condition is True*/
// let userName = "";

// while(userName === "" || userName === null){
//         userName = window.prompt("Enter your Name")
// }

// // do{
// //         userName = window.prompt("Enter your Name");
// // }while(userName === "" || userName === null)

// console.log(`Hello ${userName}`)  

let loggedIn = false;
let username;
let password;

do{
        username = window.prompt("Enter your username");
        password = window.prompt("Enter your password");

        if(username === "myusername" && password === "mypassword"){
                loggedIn = true;
                console.log(`You are logged in! enjoy`);
        }
        else if(username !== "myusername" ){
                console.log(`Incorrect username`);
        }
        else{
                console.log(`Incorrect password`);
        }
         
}while (!loggedIn)