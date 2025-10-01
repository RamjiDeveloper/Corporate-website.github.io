//set target date / time

const targetDate = new Date("Oct 20, 2025 12:00:00").getTime();
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountDown() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days < 0 ? 0 : days;
    hoursEl.textContent = days < 0 ? 0 : hours;
    minutesEl.textContent = days < 0 ? 0 : minutes;
    secondsEl.textContent = days < 0 ? 0 : seconds;
}

updateCountDown();
setInterval(updateCountDown, 1000);