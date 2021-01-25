var startButton = document.querySelector(".start-button");
//the number that is displayed on the timer
var timerElement = document.querySelector(".timer-count");
// the variable that will count down 
var scoreCount = document.querySelector(".score-count");
var timerCount;
var questionAsked = document.getElementById("question");
var placeHolder1 = document.getElementById("placeholder1");
var placeHolder2 = document.getElementById("placeholder2");
var answers = document.getElementById("answers"); 

var timer;
// the start button event listener *should* trigger timer to start and first question to show
var score = 0;
scoreCount.textContent = score;


function startQuiz () {
    timerCount = 60;
    //prevents a restart
    startButton.disabled = true;
    //call the function for the timer to start running
    // startTimer ();
    console.log("start button works", timerCount);
    startTimer();
    askQuestion();
    placeHolder1.textContent = "";
    placeHolder2.textContent = "";
}

function startTimer() {
    //need to set the timer as we did in the word search game
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;

        if (timerCount === 0) {
            //clear interval
            clearInterval(timer);
            //this should end the quiz. need to put the high scores here *** how the fuck do you do that?

        }
    })
}

var questions = [{
    question: "The correct answer to this question is 1",
    answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: "Option 1"
},
{
    question: "The correct answer to this question is 2",
    answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: "Option 2"
},
{
    question: "The correct answer to this question is 3",
    answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: "Option 3"
},
{
    question: "The correct answer to this question is 4",
    answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: "Option 4"
},
] 

var qIndex = 0;
var currentQuestion = questions[qIndex]

function askQuestion() {
    qIndex = qIndex + 1; 
    currentQuestion = questions[qIndex];
    questionAsked.textContent = currentQuestion.question;

    currentQuestion.answers,forEach(function(answer) {
        var answerDiv = document.createElement("div");
        answerDiv.textContent = answer
        answerDiv.addEventListener("click", clickFunction);
    })
}

// {
        //     question: "What does JS stand for?",
        //     answers: [ "A. Just Saying", "B. JoJo Siwa", "C. JavaScript", "D. JamSession"],
        //     correctAnswer: "C. JavaScript"
        // }, 
        // {
        //     question: "What is CSS?",
        //     answers: [ "A. Cats Singing Songs", "B. Cascading Style Sheets", "C. Code Style Semantics", "D. Camping Sleep Styles"],
        //     correctAnswer: "B. Cascading Style Sheets"
        // },
        // {
        //     question: "What does HTML stand for?",
        //     answers: [ "A. Hyper Text Markup Language", "B. Happy Times Make Linguine", "C. Hyper Text Makeup Language", "D. Having Tater-Tots Mid-Lunge"],
        //     correctAnswer: "A. Hyper Text Markup Language"
        // }