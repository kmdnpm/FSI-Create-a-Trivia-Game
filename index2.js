
let restartGame = true;
let userName = window.prompt('Please enter your name:');



while (restartGame === true){
    beginGame();
    continueGame(restartGame);
}
window.alert('Thanks for playing!');

function beginGame(){

//let userName = window.prompt('Please enter your name:');
let userScore = 0;

for(let i=0; i<questions.length; i++){
    let question = questions[i];
    let userAnswer = window.prompt(questions[i].text);
    if(userAnswer === question.correctAnswer){
        userScore = userScore + 10;
    }
}

window.alert('Your score is: ' +userScore);

}


function continueGame(choice){
    choice = window.prompt('Would you like to continue? yes or no?:');

    if(choice === "yes"){
        return true;
    }
    else if (choice === "no"){
        return false;
    }
}