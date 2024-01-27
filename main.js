//Variables

    let playerName = document.querySelector('#player-name');

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

    const btnContainer = document.querySelector('button-container');


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
        btnNextRound.classList.add('btn-play');
        btnNextRound.textContent = 'Next Round';


//Event Listeners

    //ON CLICK
    
    playerName.addEventListener('click', changeName)

    btnPlay.addEventListener('click', playGame);




//Functions


//PLAY A ROUND

function changeName() {
    let playerName = prompt('Please enter your name.', "Player");
}

function playGame() {
    alert('HELLO!!!');
    
    btnContainer.removeChild('button');
    
    btnContainer.appendChild(btnRock);
    btnContainer.appendChild(btnPaper);
    btnContainer.appendChild(btnScissors);
    
}


function playRound(choice) {
    let options = ['ROCK', 'PAPER', 'SCISSORS'];
    let choiceComp = options[Math.floor(Math.random() * options.length)];

    resultComp.textContent = choiceComp;
    resultPlayer.textContent = choice;
    
    switch (choice) {

        case choiceComp:
            message = "It's a tie! No points awarded.";
            break;

        case "ROCK":
            if (computer === "PAPER") {
                ++computerScore;
                message = "Paper beats rock! The computer wins!";
            } else {
                ++playerScore;
                message = "Rock beats scissors! You win!";
            }
            break;

        case "PAPER":
            if (computer === "SCISSORS") {
                ++computerScore;
                message = "Scissors beats paper! The computer wins!";
            } else {
                ++playerScore;
                message = "Paper beats rock! You win!";
            }
            break;

        case "SCISSORS":
            if (computer === "ROCK") {
                ++computerScore;
                message = "Rock beats scissors! The computer wins!";
            } else {
                ++playerScore;
                message = "Scissors beats paper! You win!";
            }
            break;
    }

    resultsRound.textContent = message;
    tallyScore();

    btnNextRound.addEventListener('click', playGame);
}

function tallyScore() {
    scoreComp.textContent = computerScore;
    scorePlayer.textContent = playerScore;

    if (computerScore === 5 || playerScore === 5) {
        computerScore === 5 ? 
            message = "Game over! The computer won the game!" :
            message = "Congratulations! You won the game!!!" ;
            resultsRound.removeChild(btnNextRound);
    } else {
        btnContainer.appendChild(resultsRound);
        btnContainer.appendChild(btnNextRound);
    }

}

