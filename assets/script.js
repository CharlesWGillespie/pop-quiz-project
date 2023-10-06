function startTimer(duration, display) {
    let timer = duration, minutes, seconds;

    const countdown = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
    
        // Show only seconds if the timer is not at 1 minute
        if (minutes === 0) {
            display.textContent = seconds < 10 ? "0" + seconds : seconds;
        } else {
            display.textContent = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
        }
    
        if (--timer < 0) {
            clearInterval(countdown);
            // Timer has reached zero, you can add your logic here.
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