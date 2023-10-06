function startTimer(duration, display) {
    let timer = duration, minutes, seconds;

    const countdown = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(countdown);
            
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function (){
    const timerDisplay = document.getElementById("timer");
    const initialTime = 60;
    startTimer(initialTime, timerDisplay)
})

document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");

    quizForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting

        // Get the selected answer
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');

        if (!selectedAnswer) {
            alert("Please select an answer."); // Display an alert if no answer is selected
            return;
        }

        const userAnswer = selectedAnswer.value;

        // Check the user's answer (you can add your logic here)
        if (userAnswer === "A") {
            alert("Correct!"); // Display a message for a correct answer
        } else {
            alert("Incorrect. Try again!"); // Display a message for an incorrect answer
        }
    });
});