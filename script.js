let playCount = 0;  // Tracks how many times the audio has played
const maxPlays = 2; // Set the number of times the audio should play

// Countdown Timer Logic
function updateTimer() {
    const targetDate = new Date("2025-01-02T03:45:10"); // Adjust to the actual birthday date
    const now = new Date();
    const timeDiff = targetDate - now;

    const audioElement = document.getElementById('birthday-audio'); // Get the audio element

    if (timeDiff <= 0) {
        // When the countdown reaches 0, start the audio
        document.getElementById('timer').innerHTML = "It's Your Birthday! 🎂🎉";
        
        if (playCount === 0) {
            // Play the audio for the first time when countdown is over
            audioElement.play();
            playCount++;
        }
    } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

setInterval(updateTimer, 1000);

// Listen for when the audio ends to count and handle repeating
document.getElementById('birthday-audio').addEventListener('ended', function () {
    playCount++;

    if (playCount >= maxPlays) {
        // Stop the audio after maxPlays and reset play count
        document.getElementById('birthday-audio').pause();
        playCount = 0; // Reset the play count
    } else {
        // Play again if the count hasn't reached maxPlays
        document.getElementById('birthday-audio').play();
    }
});

// Gracefully handle audio errors (e.g., file not found)
document.getElementById('birthday-audio').addEventListener('error', function () {
    console.error('Error loading the audio file. Please make sure the path is correct.');
    alert('Oops! The audio file could not be loaded.');
});
