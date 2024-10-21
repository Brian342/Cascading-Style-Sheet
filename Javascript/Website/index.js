let username;
document.getElementById(`mySubmit`).onclick = function(){
    username = document.getElementById(`myName`).value;
    document.getElementById(`myheader`).textContent = `Welcome ${username}`
    // console.log(username)
} 