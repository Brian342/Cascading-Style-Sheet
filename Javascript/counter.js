let counter = 0;

function count(){
    counter++;
    document.querySelector('h1').innerHTML = counter;
    
    if (counter % 10 === 0) {
        alert(`Count is now ${counter}`); // `` they are know as template literal
    }
}
//functional programming
document.addEventListener('DOMcontentLoaded', function(){
    document.querySelector('button').onclick = count;

});//addEventListener takes 2 actions the  event and the function
