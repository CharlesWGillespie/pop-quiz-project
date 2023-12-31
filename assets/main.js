const questions = [
  {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "A. Hyper Text Markup Language",
    options: [
      "A. Hyper Text Markup Language",
      "B. Hyperlinks and Text Markup Language",
      "C. Home Tool Markup Language",
      "D. Home Tool Mediator Language"
    ]
  },
  {
    numb: 2,
      question: "Who is making the Web standards?",
      answer: "C. The World Wide Web Consortium",
      options: [
        "A. Mozilla",
        "B. Microsoft",
        "C. The World Wide Web Consortium",
        "D. Google"
      ]
    },
    {
      numb: 3,
      question: "Choose the correct HTML element for the largest heading:",
      answer: "B. <h1>",
      options: [
        "A. <heading>",
        "B. <h1>",
        "C. <head>",
        "D. <h6>"
      ]
    },
    {
      numb: 4,
      question: "What is the correct HTML element for inserting a line break?",
      answer: "C. <br>",
      options: [
        "A. <lb>",
        "B. <brake>",
        "C. <br>",
        "D. <break>"
      ]
    },
    {
      numb: 5,
      question: "What does CSS stand for?",
      answer: "C. Cascading Style Sheets",
      options: [
        "A. Creative Style Sheets",
        "B. Computer Style Sheers",
        "C. Cascading Style Sheets",
        "D. Colorful Style Sheets"
      ]
    },
    {
      numb: 6,
      question: "How do you insert a comment in a CSS file?",
      answer: "C. /*this is a comment*/",
      options: [
        "A. // this is a comment //",
        "B. // this is a comment",
        "C. /*this is a comment*/",
        "D. */this is a comment /*"
      ]
    },
    {
      numb: 7,
      question: "Inside which HTML element do we put the JavaScript?",
      answer: "D. <script>",
      options: [
        "A. <scripting>",
        "B. <javascript>",
        "C. <js>",
        "D. <script>"
      ]
    },
    {
      numb: 8,
      question: "What is the correct syntax for referring to an external script called 'xyz.js'?",
      answer: "A. <script src='xyz.js'>",
      options: [
        "A. <script src='xyz.js'>",
        "B. <script id='xyz.js'>",
        "C. <script class='xyz.js'>",
        "D. <script href='xyz.js'>"
      ]
    },
    {
      numb: 9,
      question: "How do you write 'Hello World' in an alert box?",
      answer: "D. alert('Hello World');",
      options: [
        "A. msg('Hello World');",
        "B. msgBox('Hello World');",
        "C. alertBox('Hello World');",
        "D. alert('Hello World');"
      ]
    },
    {
      numb: 10,
      question: "Choose the correct HTML element to define emphasized text",
      answer: "C. <em>",
      options: [
        "A. <i>",
        "B. <tal>",
        "C. <em>",
        "D. <emp>"
      ]
    },
    {
      numb: 11,
      question: "Which property is used to change the background color?",
      answer: "A. background-color",
      options: [
        "A. background-color",
        "B. bg-col",
        "C. background",
        "D. color-background"
      ]
    },
    {
      numb: 12,
      question: "Which jQuery method is used to hide selected elements?",
      answer: "A. hide()",
      options: [
        "A. hide()",
        "B. hidden()",
        "C. display(none)",
        "D. display(0)"
      ]
    },
    {
      numb: 13,
      question: "How can you add a comment in a JavaScript?",
      answer: "A. //",
      options: [
        "A. //",
        "B. /*",
        "C. --!",
        "D. !--"
      ]
    },
    {
      numb: 14,
      question: "Which character is used to indicate an end tag?",
      answer: "D. /",
      options: [
        "A. *",
        "B. <",
        "C. ^",
        "D. /"
      ]
    },
    {
      numb: 15,
      question: "Which CSS property is used to change the text color of an element?",
      answer: "B. color",
      options: [
        "A. text-color",
        "B. color",
        "C. fgcolor",
        "D. color-text"
      ]
    },
    {
      numb: 16,
      question: "Which jQuery method is used to set one or more style properties for selected elements?",
      answer: "C. css()",
      options: [
        "A. html()",
        "B. style()",
        "C. css()",
        "D. color()"
      ]
    },
    {
      numb: 17,
      question: "How do you round the number 7.25, to the nearest integer?",
      answer: "B. Math.round(7.25)",
      options: [
        "A. Math.rnd(7.25)",
        "B. Math.round(7.25)",
        "C. rnd(7.25)",
        "D. round(7.25)"
      ]
    },
    {
      numb: 18,
      question: "Whats the name of this Quiz?",
      answer: "C. Code Quiz",
      options: [
        "A. CODING QUIZ",
        "B. Coding Quiz",
        "C. Code Quiz",
        "D. Cod Quiz"
      ]
    }, 
];

const timerCD = document.querySelector('#timerCD');
const intro = document.querySelector('#intro');
const quizHide = document.querySelector('#quiz-hide');
const startBtn = document.querySelector('#startBtn');
const startBtnHide = document.querySelector('#startBtnHide');
const endHeader = document.querySelector('#end-h1');
const endPara = document.querySelector('#end-p');
const highScore = document.querySelector('#high-score');
const questionContainer = document.querySelector('.quiz-form');
const optionElements = document.querySelectorAll('.option');
const nextButton = document.querySelector('.next-btn');
const questionTotal = document.querySelector('.question-total');
const headerScore = document.querySelector('.header-score');
const input = document.querySelector('#input')
const saveBtn = document.querySelector('#saveBtn')
const userInitScore = document.querySelector('#h-score')

let questionIndex = 0;
let score = 0;
let timeLeft = 60;

function displayQuestion() {
  if (questionIndex < questions.length) {
    const currentQuestion = questions[questionIndex];
    questionContainer.textContent = currentQuestion.question;
    for (let i = 0; i < optionElements.length; i++) {
      optionElements[i].textContent = currentQuestion.options[i];
      optionElements[i].addEventListener('click', (event) => checkAnswer(i, event));
    }
    questionTotal.textContent = `${questionIndex + 1} of ${questions.length} Questions`;
  } else {
    // All questions have been answered
    alert(`Quiz is finished! Your score is ${score} out of ${questions.length}`);
  }
}

function checkAnswer(selectedIndex, event) {
  const currentQuestion = questions[questionIndex];
  if (currentQuestion.options[selectedIndex] === currentQuestion.answer) {
    event.stopImmediatePropagation()
    score++; // Increase the score if the answer is correct
    headerScore.textContent = `Score: ${score}`;
  } else if (currentQuestion.options[selectedIndex]!== currentQuestion.answer){
    event.stopImmediatePropagation()
    // Deduct 5 seconds for a wrong answer
    timeLeft -= 5;
  }
  if (questionIndex < questions.length - 1) {
    questionIndex++;
    displayQuestion();
  } 
}

displayQuestion();

function startTimer() {
  const countdown = setInterval(function () {
    timerCD.textContent = timeLeft;
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      ending();
    }
  }, 1000);
}

function saveScore() {
  localStorage.setItem('score', score)
  localStorage.setItem('initial', input.value)
}

function getScore(){
  let userScore = localStorage.getItem('score');
  let userInit = localStorage.getItem('initial');
userInitScore.textContent = `Score: ${userScore} - Player: ${userInit}`
}

function showQuiz() {
  intro.setAttribute('class', 'hide');
  startBtnHide.setAttribute('class', 'hide');
  quizHide.removeAttribute('class', 'hide');
  timerCD.removeAttribute('class', 'hide');
}

function ending() {
  if(timeLeft <= 0) {
    quizHide.setAttribute('class', 'hide');
    highScore.removeAttribute('class', 'hide');
    endHeader.removeAttribute('class', 'hide');
    endPara.removeAttribute('class', 'hide');
    input.removeAttribute('class', 'hide')
    saveBtn.removeAttribute('class', 'hide')
    timerCD.textContent = '';
  } 

}

startBtn.addEventListener('click', function() {
  showQuiz()
  startTimer()
});

saveBtn.addEventListener('click', saveScore)