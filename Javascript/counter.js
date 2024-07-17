if (!localStorage.getItem('counter')){
    localStorage.setItem('counter', 0);
}

function count(){
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter);
    
    // if (counter % 10 === 0) {
    //     alert(`Count is now ${counter}`); // `` they are know as template literal
    // }
}
//functional programming
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;


});//addEventListener takes 2 actions the  event and the function
