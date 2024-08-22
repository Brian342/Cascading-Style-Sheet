// Number Guessing game
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum * 1)) + minNum;

let attempts = 0;
let guess;
let running = true

while (running) {
    guess = prompt(`Guess a number between ${minNum} and ${maxNum}: `)
    guess = Number(guess);

    if(isNaN(guess)){
        alert("please enter a valid number")
    }
    else if(guess < minNum || guess > maxNum){
        prompt("please enter a valid number")
    }
    else{
        attempts++;
        if(guess < answer){
            alert("TOO LOW! TRY AGAIN!")
        }
        else if(guess > answer){
            alert("TOO HIGH! TRY AGAIN!")
        }else{
            alert(`YOU WON! IT TOOK YOU ${attempts} ATTEMPTS. The answer was ${answer}`);
            running = false
        }
    }
}