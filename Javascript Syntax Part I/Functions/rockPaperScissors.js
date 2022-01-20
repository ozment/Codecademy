function getUserChoice (userInput) {
    const input = userInput.toLowerCase()
    if (input === 'rock' || input === 'paper' || input === 'scissors' || input === 'bomb') {
        return input;
    } else {
        console.log('Error!');
    }
};


const getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            break;
    }
};


const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'Bomb beats all! You won!'
    } else {
        if (userChoice === computerChoice) {
            return 'The game is a tie!';
        } if (userChoice === 'rock'){
            if (computerChoice === 'paper') {
                return 'The computer won!';
            } else {
                return 'You won!';
            }
        }
        if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
                return 'The computer won!';
            } else {
                return 'You won!';
            }
        }
        if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
                return 'The computer won!';
            } else {
                return 'You won!'
            }
        }
    }
};


const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();