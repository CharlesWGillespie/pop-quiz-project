const timerCD = document.querySelector('#timerCD');
const intro = document.querySelector('#intro');
const quizHide = document.querySelector('#quiz-hide');
const startBtn = document.querySelector('#startBtn');
const startBtnHide = document.querySelector('#startBtnHide');
const endHeader = document.querySelector('#end-h1');
const endPara = document.querySelector('#end-p');
const highScore = document.querySelector('#high-score')

let timeLeft = 60;



// starts timer on start click
function startTimer() {
  const countdown = setInterval(function () {
    timerCD.textContent = timeLeft;
    timeLeft--;
    if (timeLeft === 57) {
      clearInterval(countdown);
      ending();
    }
  }, 1000);
}


// hides header and button in html and unhides quiz when start button is clicked
function showQuiz() {
  intro.setAttribute('class', 'hide');
  startBtnHide.setAttribute('class', 'hide');
  quizHide.removeAttribute('class', 'hide');
  timerCD.removeAttribute('class', 'hide');
}



//when the timer hits -1 the quiz will disapear and tell the user what to do 
function ending() {
  if(timeLeft === 57) {
    quizHide.setAttribute('class', 'hide');
    highScore.removeAttribute('class', 'hide');//issue: link is not showing
    endHeader.removeAttribute('class', 'hide');
    endPara.removeAttribute('class', 'hide');
    timerCD.setAttribute('class', 'hide');//issue: timer will not disapear
  } 
}





let questions = [
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
    }
  ];
  
  
  
  // starts timer
  startBtn.addEventListener('click', startTimer);
  //hides header + startbtn and shows quiz
  startBtn.addEventListener('click', showQuiz);
