const optionElements = document.querySelectorAll('.option');
const questionTotalElement = document.querySelector('.question-total');
const nextButton = document.querySelector('.next-btn'); // Select the "NEXT" button

let currentQuestionIndex = 0;

// Function to load a question by its index
function loadQuestion(index) {
  const currentQuestion = questions[index];
  questionTotalElement.textContent = `${index + 1} of ${questions.length} Questions`;

  // Reset option backgrounds
  optionElements.forEach((option) => {
    option.style.backgroundColor = '';
    option.style.pointerEvents = 'auto';
  });

  // Set the question and options
  document.querySelector('.quiz-form').textContent = currentQuestion.question;
  currentQuestion.options.forEach((option, i) => {
    optionElements[i].textContent = option;
  });
}
//function for next button
function handleNextButtonClick() {
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    // Load the next question
    loadQuestion(currentQuestionIndex);
  } else {
  }
}

// Event listener for option clicks
optionElements.forEach((option, index) => {
  option.addEventListener('click', () => {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options[index];

    if (selectedOption === currentQuestion.answer) {
      option.style.backgroundColor = 'green'; // Set the correct answer to green
      score++; // Increment the score for correct answers
    } else {
      option.style.backgroundColor = 'red'; // Set incorrect answers to red
    }

    // Disable further clicks on options for this question
    optionElements.forEach((opt) => opt.style.pointerEvents = 'none');
    
    handleNextButtonClick();
  });
});

// Event listener for "NEXT" button click
nextButton.addEventListener('click', handleNextButtonClick);

// Start the quiz by loading the first question
loadQuestion(currentQuestionIndex);