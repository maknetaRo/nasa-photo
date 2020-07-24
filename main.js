const dateDiv = document.querySelector(".date");
const description = document.querySelector(".description");
const btn = document.querySelector(".btn");
const cross = document.querySelector(".cross");
const text = document.querySelector(".text");
const title = document.querySelector(".title");

description.style.display = "none";
btn.addEventListener("click", () => {
  btn.style.display = "none";
  description.style.display = "block";
});

cross.addEventListener("click", () => {
  btn.style.display = "block";
  description.style.display = "none";
});

const api = {
  key: "aL5cf27b9rSuUeQd4fUbFVbpw5QkFjZWvnmGSgv2",
  url: "https://api.nasa.gov/planetary/apod",
};

function getResult() {
  fetch(`${api.url}?api_key=${api.key}`)
    .then((result) => {
      return result.json();
    })
    .then(displayResult);
}

function displayResult(result) {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${result.url})`;
  text.innerHTML = result.explanation;
  title.innerHTML = result.title;
}

function setTime() {
  let date = new Date();
  let hour = date.getHours();
  let hourFormatted = ("0" + hour).slice(-2);
  let minutes = date.getMinutes();
  let minutesFormatted = ("0" + minutes).slice(-2);
  let seconds = date.getSeconds();
  let secondsFormatted = ("0" + seconds).slice(-2);
  let time = `${hourFormatted}:${minutesFormatted}:${secondsFormatted}`;
  return {
    hour: hourFormatted,
    minutes: minutesFormatted,
    seconds: secondsFormatted,
    time: time,
  };
}

function displayTime() {
  let time = setTime();
  let elemH1 = document.createElement("H1");
  elemH1.innerText = time.time;
  dateDiv.appendChild(elemH1);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(setTime(), 1000);
  getResult();
});
