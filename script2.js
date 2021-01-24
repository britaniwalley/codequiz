// create your variables here 
var  timerCount;
var questionAsked = document.getElementById("question");


let time = 15;
setTimeout ( function() {

}, 5000)
var timeInterval = setInterval(() => {
const timer = document.getElementById("timer");
timer.textContent = "Time:" + time;
// make this better, Dan said its sucks :( 
time--;
    if (time === 0){
clearInterval(timeInterval);
console.log("Time's Up!");
alert("Your score is")
    }
}, 1000);


btnStartGame.addEventListener("click", function () {
    //hide start container 
    document.querySelector(".start").style.display = "block";
    //display the game container
    document.querySelector(".game").style.display = "block";
    document.querySelector(".btn-outline-dark").style.color = "pink";

    //populate question into game container??z
});




var list = [
    {
        question: "What does JS stand for?",
        answer1: "Just Saying.",
        answer2: "JoJo Siwa",
        answer3: "JavaScript",
        answer4: "JamSession",
        correctAnswer: "JavaScript",
    },
    {
        question: "What is CSS?",
        answer1: "Cats Singing Songs",
        answer2: "Cascading Style Sheets",
        answer3: "Code Style Semantics",
        answer4: "Camping Sleep Styles",
        correctAnswer: "Cascading Style Sheets",
    },
    {
        question: "What does HTML stand for?",
        answer1: "Hyper Text Markup Language",
        answer2: "Happy Times Make Linguine",
        answer3: "Hyper Text Makeup Language",
        answer4: "Having Tater-Tots Mid Lunge",
        correctAnswer: "Hyper Text Markup Language",
    }
];

var index = 0;

function askQuestion(index) {
    list[index].question;
    document.getElementById("question").textContent = list[index].question;
    document.getElementById("answer1").textContent = list[index].answer1;
    document.getElementById("answer2").textContent = list[index].answer2;
    document.getElementById("answer3").textContent = list[index].answer3;
    document.getElementById("answer4").textContent = list[index].answer4;

    console.log(list.question, list.correctAnswer,);
}
askQuestion(0);

function buttonAlert(id) {
    alert(id)
}