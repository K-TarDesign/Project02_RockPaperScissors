        // VARIABLES
        const userName = prompt("You're about to play Rock, Paper, Scissors. Please enter your name.", "Jimmy");

        var gameRound = 1;
        var userScore = 0;
        var computerScore = 0;

        var scoreBoard;
        var computerSelect;
        var userSelect;


    // FUNCTIONS
        function welcomeUser() {
            let welcome = `Welcome, ${userName}! You'll be playing a set of 5 rounds against the computer. `;
            return welcome;
        }

        function score() {
            return scoreBoard = `The score is:
        ${userName}: ${userScore}
        Computer: ${computerScore}`;
        }

        function getUserChoice() {
            let selection = prompt("Choose rock, paper, or scissors.")
            userSelect = selection.toLowerCase()
                
                if (!(userSelect === "rock" || userSelect === "paper" || userSelect === "scissors") || userSelect === null) {
                    alert("Your answer is invalid. Please try again.");
                    getUserChoice();
                } else {
                    return userSelect;
                }
            }
        
        function getComputerChoice() {
            let options = ['rock', 'paper', 'scissors'];
            computerSelect = options[Math.floor(Math.random() * options.length)];
            return computerSelect;
        }

        // Switch Function
        function compareSelections(player, computer) {
            let message;
            let result = `Round ${gameRound}: You chose ${player} and the computer chose ${computer}. `;

            switch (player) {

                case computer:
                    message = "It's a tie! No points awarded. ";
                    break;

                case "rock":
                    if (computer === "paper") {
                        ++computerScore;
                        message = "Paper beats rock! The computer wins! ";
                    } else {
                        ++userScore;
                        message = "Rock beats scissors! You win! ";
                    }
                    break;

                case "paper":
                    if (computer === "scissors") {
                        ++computerScore;
                        message = "Scissors beats paper! The computer wins! ";
                    } else {
                        ++userScore;
                        message = "Paper beats rock! You win! ";
                    }
                    break;

                case "scissors":
                    if (computer === "rock") {
                        ++computerScore;
                        message = "Rock beats scissors! The computer wins! ";
                    } else {
                        ++userScore;
                        message = "Scissors beats paper! You win! ";
                    }
                    break;
            }
            
            return result + message;
        }

        function gameOver(player, computer) {
            let message = "Game Over! ";
            let results;

                if (player === computer) {
                    results = "It's a tie! No winners this time. "
                } else {
                    (player < computer) ? 
                        (results = "The computer wins! ") : 
                        (results = "Congratualtions! You won the game!!! ");
                }
            return message + results;
        }
        
        function playRound() {
            
            if (gameRound < 5) {
                getComputerChoice();
                getUserChoice();
                alert(compareSelections(userSelect, computerSelect) + score());
                ++gameRound;
                playRound();
            } else {
                getComputerChoice();
                getUserChoice();
                alert(compareSelections(userSelect, computerSelect));
                alert(gameOver(userScore, computerScore) + score());
            }
        }


    // ACTIONS

        alert(welcomeUser());
        playRound();
        
