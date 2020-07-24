const timeDiv = document.querySelector(".time");
const description = document.querySelector(".description");
const btn = document.querySelector(".btn");
const cross = document.querySelector(".cross");
const text = document.querySelector(".text");
const title = document.querySelector(".title");

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
  btn.innerHTML = result.title;
  document.body.style.backgroundImage = `url(${result.url})`;
  text.innerHTML = result.explanation;
  title.innerHTML = result.title;
}

const setTime = setInterval(() => {
  let now = moment();
  let clock = now.format("HH:mm:ss");
  timeDiv.textContent = clock;
}, 1000);

document.addEventListener("DOMContentLoaded", () => {
  setTime;
  getResult();
});
