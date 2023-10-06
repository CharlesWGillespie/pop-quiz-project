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
    