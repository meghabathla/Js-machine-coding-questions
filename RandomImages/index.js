const baseURL = "https://unsplash.com/t/nature"; // link is not working
const container = document.querySelector(".content");
const rows = 7;

// this url gives an image. Use this and NO API calls

function randomNumber() {
  return Math.floor(Math.random() * 10 + 300);
}

function randomSize() {
  return `${randomNumber()} X ${randomNumber()}`;
}

function getRandomImages() {
  for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement("img");
    img.src = `${baseURL}${randomSize()}`;
    console.log(img.src);
    container.appendChild(img);
  }
}

getRandomImages();
