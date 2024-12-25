// Countdown Timer
const targetDate = new Date("2025-01-03").getTime(); // Replace with the actual birthday date
const timer = document.getElementById("timer");

function updateCountdown() {
    const now = new Date().getTime();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
        timer.textContent = "🎉 It's Your Birthday! 🎂";
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);

// Quiz Functionality
function checkAnswer() {
    const answer = document.getElementById("answer").value.toLowerCase();
    const result = document.getElementById("quiz-result");
    result.textContent = answer === "blue" ? "Correct! 💙" : "Try Again!";
}
