// Importing flatpickr library from a CDN
import flatpickr from 'https://cdn.skypack.dev/flatpickr';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const now = new Date();
    if (selectedDate <= now) {
      window.alert("Please choose a date in the future");
    } else {
      const startButton = document.querySelector('[data-start]');
      startButton.disabled = false; // Enable the Start button
      startButton.addEventListener('click', () => startCountdown(selectedDate), { once: true });
    }
  },
};

flatpickr("#datetime-picker", options);

function startCountdown(endDate) {
  const intervalId = setInterval(() => {
    const now = new Date();
    const timeLeft = endDate - now;
    if (timeLeft <= 0) {
      clearInterval(intervalId);
      displayTime(0);
    } else {
      displayTime(timeLeft);
    }
  }, 1000);
}

function displayTime(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);
  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
