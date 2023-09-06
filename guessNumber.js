let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let namGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click',function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a Valid Number')
    }else if (guess < 1) {
        alert('Please Enter a number greater then 1')
    }else if (guess > 100) {
        alert('Please Enter a number less then 100')
    }else{
        prevGuess.push(guess)
        if (namGuess === 11) {
            displayGuess(guess)
            DisplayMessage(`Game Over, Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        DisplayMessage(`You guessed it right`)
        endGame()
    }else if (guess < randomNumber) {
        DisplayMessage(`Number is tooo low`)
    }else if (guess > randomNumber) {
        DisplayMessage(`Number is tooo high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `
    namGuess++;
    remaining.innerHTML =`${11-namGuess}`
}

function DisplayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        namGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `$(11-numGuess)`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = ture
    })
}

