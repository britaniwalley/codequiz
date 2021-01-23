var = secondsLeft = 60;


you have a quiz game

functions
start game

function
timer starts (interval)
timer continues throughout the game
time 0 ends game

functions
question prompts

functions(event listener)
select answer

if statement
if correct, next question


if statement
if wrong, time penalty

function
check for last question

times up 
check scores

// function checkAnswer(answer){
//   if(myQuestions[runningQuestion].correct == answer){
//     score++;
//     //correct answer
//     answerisCorrect
//   }else{
//     //answer is wrong
//     answerisWrong();
//   //check if there are still questions
//   }if(runningQuestion < lastQuestion){
//     //set count to 0 so it starts over from 0
//     count = 0;
//     //increment question by 1
//     runningQuestion++;
//     renderQuestion();
//   }else{// clear time and show score 
//     // scoreRender function

//   }
// }

let lastQuestion = myQuestions.length - 1;
let runningQuestion = 0;