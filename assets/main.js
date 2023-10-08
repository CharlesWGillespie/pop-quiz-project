const optionElements = document.querySelectorAll('.option');
const questionTotalElement = document.querySelector('.question-total');
const nextButton = document.querySelector('.next-btn');
let currentQuestionIndex = 0;
let score = 0; // Initialize the score variable

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

// Function to handle "NEXT" button click
function handleNextButtonClick() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    // Load the next question
    loadQuestion(currentQuestionIndex);
  } else {
    // Quiz has ended, calculate and display the score
    const totalQuestions = questions.length;
    const percentageScore = (score / totalQuestions) * 100;

    // Display the score as an alert or on the page as you prefer
    alert(`Quiz completed!\nYour score: ${score} / ${totalQuestions}\nPercentage Score: ${percentageScore}%`);
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
