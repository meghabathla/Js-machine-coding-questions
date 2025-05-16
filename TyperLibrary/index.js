const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Love", "Jhakaas", "mast", "dhinchak", "Weird"];

let index = 0;
let charIndex = 0;

const typingword = document.querySelector(".typed-text");
document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, 2000);
  }
});
function type() {
  const currentWord = words[index];
  if (charIndex < currentWord.length) {
    setInterval(() => {
      console.log("writing", currentWord[charIndex]);
      charIndex++;
    }, 1000);
  } else if (charIndex >= currentWord.length - 1) {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    setInterval(() => {
      console.log("erasing", currentWord[charIndex]);
      charIndex--;
    }, 1000);
  }
}
