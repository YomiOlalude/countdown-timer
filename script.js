function dateGetter() {
  let dateInput = document.querySelector("#date-input");
  return dateInput.value
}

function countDown() {
  const newYearDate = new Date(dateGetter());
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
  const daysTag = document.querySelector(".days-tag")
  const hoursTag = document.querySelector(".hours-tag")
  const minutesTag = document.querySelector(".minutes-tag")
  const secondsTag = document.querySelector(".seconds-tag")
  let significance = document.querySelector(".significance")
  let dateSignificance = document.querySelector("#date-significance")
 

  getDays.innerHTML = formatTime(days);
  getHours.innerHTML = formatTime(hours);
  getMinutes.innerHTML = formatTime(minutes);
  getSeconds.innerHTML = formatTime(secs);

  function formatTime(time) {

    significance.textContent = dateSignificance.value;

    if (isNaN(time)) {
      return 0;
    }
    if (time < 10 && time > 0) {
      return "0" + time;
    }
    if (time < 0) {
      return 0
    }
    else {
      return time;
    }
  }

  if (getDays.innerHTML == 1) {
    daysTag.textContent = "Day";
  } else {
    daysTag.textContent = "Days"
  }
  if (getHours.innerHTML == 1) {
    hoursTag.textContent = "Hour";
  } else {
    hoursTag.textContent = "Hours"
  }
  if (getMinutes.innerHTML == 1) {
    minutesTag.textContent = "Minute";
  } else {
    minutesTag.textContent = "Minutes"
  }
  if (getSeconds.innerHTML == 1) {
    secondsTag.textContent = "Second";
  } else {
    secondsTag.textContent = "Seconds"
  }
 
}



countDown();

setInterval(countDown, 1000);

const mine = document.querySelector("TIME");

