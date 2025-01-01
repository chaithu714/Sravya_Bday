// Countdown Timer Logic
function updateTimer() {
    const targetDate = new Date("2025-01-02T03:07:00"); // Replace with the actual date of Sravya's birthday
    const now = new Date();
    const timeDiff = targetDate - now;

    const audioElement = document.getElementById('birthday-audio'); // Get the audio element

    if (timeDiff <= 0) {
        document.getElementById('timer').innerHTML = "It's Your Birthday! 🎂🎉";
        if (audioElement.paused) {
            audioElement.play(); // Play the audio once the timer is done
            toggleAudioButtons(true); // Show the Pause button
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

// Toggle Play/Pause buttons based on the audio status
function toggleAudio() {
    const audioElement = document.getElementById('birthday-audio');
    const playButton = document.getElementById('play-btn');
    const pauseButton = document.getElementById('pause-btn');

    if (audioElement.paused) {
        audioElement.play();
        toggleAudioButtons(true); // Show Pause button
    } else {
        audioElement.pause();
        toggleAudioButtons(false); // Show Play button
    }
}

// Function to show/hide Play and Pause buttons
function toggleAudioButtons(isPlaying) {
    const playButton = document.getElementById('play-btn');
    const pauseButton = document.getElementById('pause-btn');

    if (isPlaying) {
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
    } else {
        playButton.style.display = 'inline-block';
        pauseButton.style.display = 'none';
    }
}

// Pause the audio when the pause button is clicked
function pauseAudio() {
    const audioElement = document.getElementById('birthday-audio');
    audioElement.pause();
    toggleAudioButtons(false); // Show Play button
}

// Ensure audio is paused when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const audioElement = document.getElementById('birthday-audio');
    audioElement.pause();  // Ensures the audio is paused on initial load
});
