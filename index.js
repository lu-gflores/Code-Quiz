//id variables from html
var quizSection = document.getElementById("quiz-container");
var startQuiz = document.getElementById("start");
var introScreen = document.getElementById("intro");
var verify = document.getElementById("verify")[0];
var showChoices = document.querySelector(".showChoices");
var showResults = document.getElementById("results");
//hides choice buttons at start
showChoices.style.visibility = "hidden";
//value for questions
var questionTopic = document.getElementById("question");

//timer span
var quizTimer = document.getElementById("timer");
var secondsLeft = 80;

//questions array
var questions = [ {
    question: "Commonly used data types do NOT include: ",
    answers : ["1. string ", "2. alerts ", "3. boolean ", "4. numbers"],
    correct: "2. alerts",
} , {
    question: "Which of the following type of variable takes precedence over other if the names are the same?",
    answers: ['1. Gobal variable', '2. Local variable', '3. Super variable', '4. none of the above'],
    correct: '2. Local variable',
}, {
    question: "Which function returns a character at a specifc index?",
    answers: ['1. indexOf()', '2. getCharAt()', '3. getIndexOf()', '4. charAt()' ],
    correct: '4. charAt()',

}, {
    question: "Which HTML tag allows you to write JavaScript code in an .html file?",
    answers: ['1. <script>', '2. <java>', '3. <javascript>', '4. <link>'],
    correct: '1. <script>',   
} 
]
var currentQuestion = 0;
var userChoice;
//timer begins once user hits the start button
function myTimer() {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    quizTimer.textContent = "Time: " + secondsLeft;
    
    if(secondsLeft < 1 || currentQuestion === questions.length) {
        clearInterval(timerInterval);
        //once timer runs out, hide quiz and display results
        quizSection.setAttribute("class", "container d-none");
        showChoices.style.visibility = "hidden";
        finalResults();
    }
}, 1000);
}

//click event to start quiz
startQuiz.addEventListener('click', start);

//starts quiz and hides start screen
function start() {
    //hides intro screen
    startQuiz.style.display = "none";
    introScreen.style.display = "none";
    //call timer and showQuestions 
    myTimer();
    showQuestions();
    showChoices.style.visibility = "visible";
};

//displays quiz questions
function showQuestions() {
    //takes question from object array and sets it as the head question 
    questionTopic.textContent= questions[currentQuestion].question;
    showChoices.innerHTML = "";
    var answers = questions[currentQuestion].answers;

    for (var i = 0 ; i < answers.length; i++) {
        //create button element for answer choices
        var next = document.createElement("button");
        next.textContent = answers[i];
        var answerButton;
        //appending to html
        answerButton = showChoices.appendChild(next).setAttribute("class", "btn btn-info btn-block");
    }
}
//event listener for showChoices
showChoices.addEventListener("click", function(event) {
    if (event.target.textContent === answers) {
        verify.innerHTML ="Right on!";
        setTimeout(verify, 1000);
    } else {
        verify.innerHTML = "Wrong...";
        secondsLeft -= 10;
        setTimeout(verify, 1000);
    }
    showQuestions();
});

//display results and allow to add to high score
function finalResults () {
    showResults.textContent = "Here is your score: " + secondsLeft;
    var inputScore = document.createElement("input");


}