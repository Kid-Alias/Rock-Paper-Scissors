const choices = ['rock','paper','scissors'];

const emojis = {
    rock:     '✊',
    paper:    '✋',
    scissors: '✌️'
};

const beats = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};

let scores = {
    user: 0,
    computer: 0,
    tie: 0,
};

function getComputerChoice () {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

const gameButtons = document.querySelectorAll('.game-btn') // this is search for all the elements with the class attribute assigned to game-btn

gameButtons.forEach(button => {
    button.addEventListener('click', () => {play(button.id);});
});

function play(playerChoice){
    const computerChoice = getComputerChoice ();
    if (playerChoice === computerChoice) {
        result = 'tie';
    } else if (beats[playerChoice] === computerChoice) {
        result = 'user'
    } else {
        result = 'computer';
    }
    scores[result]++;
    updateUI(playerChoice, computerChoice, result);
}

function updateUI(player, computer, result) {
document.querySelector('.user-display').textContent = emojis[player];
document.querySelector('.computer-display').textContent = emojis[computer];

document.querySelector('.score-user').textContent = scores.user;
document.querySelector('.score-computer').textContent = scores.computer;
document.querySelector('.score-tie').textContent = scores.tie;

const resultDisplay = document.querySelector('.result-display');

if (result === 'user') {
    resultDisplay.textContent = "WINNER";
} else if (result === 'computer') {
    resultDisplay.textContent = "LOSER";
} else {
    resultDisplay.textContent = "TIE";
}
}

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () =>{

scores.user = 0;
scores.computer = 0;
scores.tie = 0;

document.querySelector('.user-display').textContent = '🤜';
document.querySelector('.computer-display').textContent = '🤛';
document.querySelector('.result-display').textContent = 'Choose';
document.querySelector('.score-user').textContent = scores.user;
document.querySelector('.score-computer').textContent = scores.computer;
document.querySelector('.score-tie').textContent = scores.tie;
});