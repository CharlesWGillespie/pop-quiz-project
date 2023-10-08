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
        question: "",
        answer: "",
        options: [

        ]
    },
    {
        numb: 6,
        question: "",
        answer: "",
        options: [
            
        ]
    },
    {
        numb: 7,
        question: "",
        answer: "",
        options: [
            
        ]
    },
    {
        numb: 8,
        question: "",
        answer: "",
        options: [
            
        ]
    }
];