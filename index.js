//id variables from html
var quizSection = document.getElementById("quiz-container");
var startQuiz = document.getElementById("start");
var introScreen = document.getElementById("intro");
var verify = document.getElementById("verify");
var showChoices = document.querySelector(".showChoices");
var showResults = document.getElementById("results");
var submitBtn = document.getElementById("submitScore");
var userInput = document.getElementById("userName");
var formEL = document.getElementById("showHighScore");
//hides choice buttons at start
showChoices.style.visibility = "hidden";

//value for questions
var questionTopic = document.getElementById("question");

//timer span
var quizTimer = document.getElementById("timer");
var secondsLeft = 80;

//counter set to negative to it can be incremeted to 0 as the index for questions[] in showQuestions()
var currentQuestion = -1;
var rightChoice;
//questions array
var questions = [ {
    question: "Commonly used data types do NOT include: ",
    answers : ["1. string ", "2. alerts", "3. boolean ", "4. numbers"],
    correct: '2. alerts',
} , {
    question: "Commonly used data types do NOT include: ",
    answers : ["1. string ", "2. alerts", "3. boolean ", "4. numbers"],
    correct: '2. alerts',
} ,
    {
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
} , {
    question: "What value(s) does comfirm() return?",
    answers: ['1. 0', '2. string', '3. true or false', '4. null'],
    correct: '3. true or false',
}
]


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
        //call final results and show form element to submit score
        finalResults();
        formEL.style.visibility = "visible";
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
    currentQuestion++;
    rightChoice = questions[currentQuestion].correct;
     //takes question from object array and sets it as the head question 
    questionTopic.textContent= questions[currentQuestion].question;
    showChoices.innerHTML = "";
    var answerList = questions[currentQuestion].answers;
    for (var i = 0 ; i < answerList.length; i++) {
        //create button element for answer choices
        var next = document.createElement("button");
        next.textContent = answerList[i];
        var answerButton;
        //appending answer buttons to html
        answerButton = showChoices.appendChild(next).setAttribute("class", "btn btn-info btn-block");    
    }    
}

//event listener for showChoices and checks answers
showChoices.addEventListener("click", function(event) {
    //if user clicks the right choice, then "right on" will display to verify feedback
    if (event.target.textContent === rightChoice) {
        verify.innerHTML ="Right on!";   
    }
    //if wrong answer chosen, then display 'wrong...' and lose 10 seconds from timer 
    else {
        verify.innerHTML = "Wrong...";
        secondsLeft -= 10;
    }
    showQuestions();//move on to next question
});

//display results and allow to add to high score
function finalResults () {
    showResults.textContent = "Here is your score: " + secondsLeft;
    var highScore =  JSON.parse(localStorage.getItem("highScore"));

    localStorage.setItem("highScore", JSON.stringify(highScore));

}
//event listener for submitting high score
submitBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    finalResults();
})
