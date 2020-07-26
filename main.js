const timeDiv = document.querySelector(".time");
const description = document.querySelector(".description");
const btn = document.querySelector(".btn");
const cross = document.querySelector(".cross");
const text = document.querySelector(".text");
const title = document.querySelector(".title");
const dateDiv = document.querySelector(".date");
const videoContainer = document.querySelector(".video-container");

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
function displayVideo(result) {
  let video = document.createElement("iframe");
  video.setAttribute("src", "movie.mp4");
  video.setAttribute("width", "100%");
  video.setAttribute("height", "100%");
  video.setAttribute("position", "absolute");
  video.setAttribute("controls", "controls");
  video.classList.add("video");
  video.src = `${result.url}`;

  videoContainer.appendChild(video);
}

function displayResult(result) {
  if (`${result.media_type}` !== "video") {
    document.body.style.backgroundImage = `url(${result.url})`;
  } else {
    displayVideo(result);
  }
  btn.innerHTML = result.title;

  text.innerHTML = result.explanation;
  title.innerHTML = result.title;
}

/*
video.addEventListener("onended", () => {
  console.log("Does it work?");
  this.load();
  this.play();
});
*/

const setTime = setInterval(() => {
  let now = moment();
  let clock = now.format("HH:mm:ss");
  timeDiv.textContent = clock;
}, 1000);

const setDate = () => {
  let day = moment().format("dddd, DD MMMM YYYY");
  dateDiv.textContent = day;
};

document.addEventListener("DOMContentLoaded", () => {
  setTime;
  getResult();
  setDate();
});
