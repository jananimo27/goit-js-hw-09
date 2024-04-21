const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId = null; 


function getRandomColor() {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
}

function startColorChange() {
    if (!intervalId) { 
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = getRandomColor();
        }, 1000);
    }
}

// Function to stop changing the background color
function stopColorChange() {
    clearInterval(intervalId);
    intervalId = null; 
}

startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);

