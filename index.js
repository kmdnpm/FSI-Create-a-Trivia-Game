//Get the user's name:
let userName = window.prompt('Please enter your name:')

for(let i=0; i<questions.length; i++){
    let question = questions[i];
    let userAnswer = window.prompt(questions[i].text)
    if(userAnswer === question.correctAnswer){
        console.log('Correct')
    }else{
        console.log('Incorrect')
    }
}