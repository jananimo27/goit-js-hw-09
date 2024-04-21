// Selecting the Start and Stop buttons
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId = null; // To hold the interval ID for the setInterval function

// Function to generate a random hex color
function getRandomColor() {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
}

// Function to start changing the background color
function startColorChange() {
    if (!intervalId) { // Only set the interval if it's not already set
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = getRandomColor();
        }, 1000);
    }
}

// Function to stop changing the background color
function stopColorChange() {
    clearInterval(intervalId);
    intervalId = null; // Reset the interval ID
}

// Event listeners for the buttons
startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);

