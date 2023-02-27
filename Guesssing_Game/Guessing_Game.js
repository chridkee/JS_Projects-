var max;
var min;
var guessed = false
var answer;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function acceptMax(num) {
    max = num
    rl.question('Enter a Min Number ', acceptMin)
}

function acceptMin(num){
    min = num
    console.log('I am thinking of a number between ' + min + ' and ' + max)
    answer = getRandomInt(min, max)
    rl.question('Enter a guess: ', acceptGuess)
}

function acceptGuess(num){
    if (guessed == true){
        return;
    }
    else {
        if (num == answer){
            console.log('Correct!')
            console.log('You Win')
            rl.close()
            return;
        }
        if (num < answer){
            console.log('Too low.')
            rl.question('Enter a guess: ', acceptGuess)
        }
        else{
            console.log('Too high.')
            rl.question('Enter a guess: ', acceptGuess)
        }
    }
}

rl.question ('Enter a Max Number ', acceptMax)
