// Number Guessing game
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum * 1)) + minNum;

let attempts = 0;
let guess;
let running = true

while (running) {
    guess = prompt(`Guess a number between ${minNum} and ${maxNum}: `)
    guess = Number(guess)
    console.log(typeof guess, guess);
    running = false
}