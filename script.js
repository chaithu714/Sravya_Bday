// Function to start countdown and handle the audio
function startCountdown() {
    const countdownDate = new Date("January 3, 2025 00:00:00").getTime(); // Set your target date
    const timerElement = document.getElementById("timer");

    const interval = setInterval(function() {
        let now = new Date().getTime();
        let distance = countdownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If countdown reaches 0, play music and stop the countdown
        if (distance < 0) {
            clearInterval(interval);
            timerElement.innerHTML = "It's Your Day! 🎉";
            playMusic();
        }
    }, 1000);
}

// Function to handle audio play after countdown
function playMusic() {
    const audio = document.getElementById("birthday-audio");
    audio.play().catch((error) => {
        console.error("Error playing audio: ", error);
        alert("Sorry, there was an issue with the audio. Please check your browser settings.");
    });
}

window.onload = function() {
    startCountdown();
};
