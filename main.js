//Variables

    //SCOREBOARD

    const scoreComp = document.querySelector('#score-computer');
    const scorePlayer = document.querySelector('#score-player');

    let playerScore = 0;
    let computerScore = 0;


    //RESULTS

    const resultComp = document.querySelector('#computer-result');
    const resultPlayer = document.querySelector('#player-result');

    const message = document.querySelector('#status');
    
    
    //CONTAINERS

    const playerNameScore = document.querySelector('#name-score');
    const playerNameAction = document.querySelector('#name-action');

    const btnContainer = document.querySelector('#button-container');

    const scoreBoxComp = document.querySelector('#comp-box');
    const scoreBoxPlayer = document.querySelector('#player-box');

    //BUTTONS

    const btnPlay = document.querySelector('#btn-play');
    
    const btnRock = document.createElement('button');
        btnRock.classList.add('btn-choice');
        btnRock.textContent = 'ROCK';

    const btnPaper = document.createElement('button');
        btnPaper.classList.add('btn-choice');
        btnPaper.textContent = 'PAPER';

    const btnScissors = document.createElement('button');
        btnScissors.classList.add('btn-choice');
        btnScissors.textContent = 'SCISSORS';

    const btnNextRound = document.createElement('button');
        btnNextRound.classList.add('btn-nextRound');
        btnNextRound.textContent = 'Next Round';

    const btnPlayAgain = document.createElement('button');
        btnPlayAgain.classList.add('btn-nextRound');
        btnPlayAgain.textContent = 'Play Again';


//Event Listeners

    //ON CLICK
    
    btnPlay.addEventListener('click', addName)
    btnPlay.addEventListener('click', () => {playGame(btnPlay)});

    btnRock.addEventListener('click', () => {playRound('ROCK')});
    btnPaper.addEventListener('click', () => {playRound('PAPER')});
    btnScissors.addEventListener('click', () => {playRound('SCISSORS')});

    btnNextRound.addEventListener('click', () => {playGame(btnNextRound)});
    
    btnPlayAgain.addEventListener('click', () => {playGame(btnPlayAgain)});
    btnPlayAgain.addEventListener('click', resetGame);



//Functions

function addName() {
    let playerName = prompt("What is your name?", "Player");
    playerNameScore.textContent = playerName;
    playerNameAction.textContent = playerName.toUpperCase();

}

function playGame(button) {
    
    btnContainer.removeChild(button);
    
    message.textContent = "Select Rock, Paper, or Scissors";

    btnContainer.appendChild(btnRock);
    btnContainer.appendChild(btnPaper);
    btnContainer.appendChild(btnScissors);

    resultComp.textContent = "";
    resultPlayer.textContent = "";
    
}

function nextRound() {

    btnContainer.removeChild(btnRock);
    btnContainer.removeChild(btnPaper);
    btnContainer.removeChild(btnScissors);

    btnContainer.appendChild(btnNextRound);

}

function resetGame() {

    scoreBoxComp.classList.remove('winner');
    scoreBoxPlayer.classList.remove('winner');

    computerScore = 0;
    playerScore = 0;

    scoreComp.textContent = "0";
    scorePlayer.textContent = "0";

    resultComp.textContent = "";
    resultPlayer.textContent = "";

}


function playRound (choice) {
    let options = ['ROCK', 'PAPER', 'SCISSORS'];
    let choiceComp = options[Math.floor(Math.random() * options.length)];

    resultComp.textContent = choiceComp;
    resultPlayer.textContent = choice;
    
    switch (choice) {

        case choiceComp:
            message.textContent = "It's a tie! No points awarded.";
            break;

        case "ROCK":
            if (choiceComp === "PAPER") {
                ++computerScore;
                message.textContent = "Paper beats rock! The computer wins!";
            } else {
                ++playerScore;
                message.textContent = "Rock beats scissors! You win!";
            }
            break;

        case "PAPER":
            if (choiceComp === "SCISSORS") {
                ++computerScore;
                message.textContent = "Scissors beats paper! The computer wins!";
            } else {
                ++playerScore;
                message.textContent = "Paper beats rock! You win!";
            }
            break;

        case "SCISSORS":
            if (choiceComp === "ROCK") {
                ++computerScore;
                message.textContent = "Rock beats scissors! The computer wins!";
            } else {
                ++playerScore;
                message.textContent = "Scissors beats paper! You win!";
            }
            break;
    }

    tallyScore();
    nextRound();

}

function tallyScore() {
    scoreComp.textContent = computerScore;
    scorePlayer.textContent = playerScore;

    if (computerScore === 5 || playerScore === 5) {

        if (computerScore === 5) {
            scoreBoxComp.classList.add('winner');
            message.textContent = "Game over! The computer won the game!";
        } else {
            scoreBoxPlayer.classList.add('winner');
            message.textContent = "Congratulations! You won the game!!!" ;
        }

        btnContainer.removeChild(btnRock);
        btnContainer.removeChild(btnPaper);
        btnContainer.removeChild(btnScissors);

        btnContainer.appendChild(btnPlayAgain);
    }

}
