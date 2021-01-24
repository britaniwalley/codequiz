// create your variables here 
var timerCount;
var questionAsked = document.getElementById("question");
var correctAnswer;

let time = 60;
setTimeout(function () {

}, 5000)
btnStartGame.addEventListener("click", function () {
var timeInterval = setInterval(() => {
    const timer = document.getElementById("timer");
    timer.textContent = "Time:" + time;
    // make this better, Dan said its sucks :( 
    time--;
    if (time === 0) {
        clearInterval(timeInterval);
        console.log("Time's Up!");
        alert("Your score is")
    }
}, 1000);
});
// answer1.addEventListener("click", function () {
//     document.getElementById("answer1").style.color = "blue";
//     console.log("answer1");
// });
// btnStartGame.addEventListener("click", function () {
//     document.getElementById("start").style.display = "block";
//     document.getElementById("game").style.display = "block";
// });




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

// function click event for question answered 
answer1.addEventListener("click", function () {
    document.getElementById("answer1").style.color = "blue";
    console.log("answer1");
});
answer2.addEventListener("click", function () {
    document.getElementById("answer1").style.color = "blue";
    console.log("answer2");
});
answer3.addEventListener("click", function () {
    document.getElementById("answer3").style.color = "blue";
    console.log("answer3");
});
answer4.addEventListener("click", function () {
    document.getElementById("answer1").style.color = "blue";
    console.log("answer4");
});

if (correctAnswer === true) {

    list[Math.floor(math.random() * askQuestion.length)]

}