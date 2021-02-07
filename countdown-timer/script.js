const newYear = "1 Jan 2021";

function countDown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  x = newYearDate - currentDate;
  const seconds = Math.floor(x / 1000);
  const secs = Math.floor(x / 1000) % 60;
  const minutes = Math.floor(seconds / 60) % 60;
  const hours = Math.floor(seconds / 60 / 60) % 24;
  const days = Math.floor(seconds / 60 / 60 / 24);

  const getDays = document.getElementById("days");
  const getHours = document.getElementById("hours");
  const getMinutes = document.getElementById("minutes");
  const getSeconds = document.getElementById("seconds");

  getDays.innerHTML = formatTime(days);
  getHours.innerHTML = formatTime(hours);
  getMinutes.innerHTML = formatTime(minutes);
  getSeconds.innerHTML = formatTime(secs);

  function formatTime(time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  }
}

countDown();

setInterval(countDown, 1000);

const mine = document.querySelector("TIME");

