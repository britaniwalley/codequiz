// create your variables here 
var timerCount;
var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector("timer-count");
var scoreCount = document.querySelector(".score-count");
var questionAsked = document.getElementById("question");
var placeHolder1 = document.getElementById("placeholder1");
var placeHolder2 = document.getElementById("placeholder2")
var correctAnswer;
var questionNumber = 0

//timer function

// setTimeout(function () {
// }, 5000)
let time = 60;
btnStartGame.addEventListener("click", function () {
var timeInterval = setInterval(() => {
    const timer = document.getElementById("timer");
    timer.textContent = "Time:" + time;
   
    time--;
    if (time === 0) {
        clearInterval(timeInterval);
        console.log("Time's Up!");
    }
}, 1000);
nextQuestion(0)
});

var list = [
    {
        question: "What does JS stand for?",
        answers: ["Just Saying", "JoJo Siwa", "JavaScript", "Jam Session"],
        correctAnswer: "JavaScript",
    },
    {
        question: "What is CSS?",
        answers: ["Cats Singing Songs","Cascading Style Sheets","Code Style Semantics","Camping Sleep Styles"],
        correctAnswer: "Cascading Style Sheets",
    },
    {
        question: "What does HTML stand for?", 
        answers: ["Hyper Text Markup Language", "Happy Times Make Linguine", "Hyper Text Makeup Language", "Having Tater-Tots Mid Lunge"],
        correctAnswer: "Hyper Text Markup Language",
    }
];

// var qIndex = 0;

// log the answer 
// once the answer is logged, move on to next question 
// these are functions 

function askQuestion(qIndex) {
    
    list[qIndex].question;
    document.getElementById("question").textContent = list[qIndex].question;
    document.getElementById("answer1").textContent = list[qIndex].answers[0];
    document.getElementById("answer2").textContent = list[qIndex].answers[1];
    document.getElementById("answer3").textContent = list[qIndex].answers[2];
    document.getElementById("answer4").textContent = list[qIndex].answers[3];

   
}
// askQuestion();

function nextQuestion(qIndex) {
    askQuestion(qIndex);
        
      }
    
// function click event for question answered, logs clicked answer 
answer1.addEventListener("click", function () {
    document.getElementById("answer1");
    console.log("answers1");
    if (list[questionNumber].correctAnswer === document.getElementById("answer1").textContent) {
        alert = "Correct!"
        scoreCount = + 100 
    } else {
        alert = "Wrong Answer!"
        timeInterval = (-10)
    }
    console.log("questionNumber" + questionNumber)
    if (list.length -1!== questionNumber ) {
        questionNumber += 1
    nextQuestion(questionNumber);
    } else {
        window.location.href="./assets/highscores.html"
    }
});
answer2.addEventListener("click", function () {
    document.getElementById("answer2");
    console.log("answer2");
    if (list[questionNumber].correctAnswer === document.getElementById("answer2").textContent) {
        alert("Correct!");
    } else {
        alert("Wrong Answer!");
    }
    console.log("questionNumber" + questionNumber)
    if (list.length -1!== questionNumber ) {
        questionNumber += 1
    nextQuestion(questionNumber);
    } else {
        window.location.href="./assets/highscores.html"
    }
});
answer3.addEventListener("click", function () {
    document.getElementById("answer3");
    console.log("answer3");
    if (list[questionNumber].correctAnswer === document.getElementById("answer3").textContent) {
        alert("Correct!");
    } else {
        alert("Wrong Answer!");
    }
    console.log("questionNumber" + questionNumber)
    if (list.length -1!== questionNumber ) {
        questionNumber += 1
    nextQuestion(questionNumber);
    } else {
        window.location.href="./assets/highscores.html"
    }
});
answer4.addEventListener("click", function () {
    document.getElementById("answer4");
    if (list[questionNumber].correctAnswer === document.getElementById("answer4").textContent) {
        alert("Correct!");

    } else {
        alert("Wrong Answer!");
    }
    console.log("questionNumber" + questionNumber)
    if (list.length -1!== questionNumber ) {
        questionNumber += 1
    nextQuestion(questionNumber);
    } else {
        window.location.href="assets/highscores.html"
    }
    
});

// function nextQuestion (userChoice) {
//     console.log(userChoice)
// }
// nextQuestion();






// for (i=0, i < qIndex.length, i++) {

// }