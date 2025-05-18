// const { use } = require("react");

document
  .getElementById("user-input")
  .addEventListener("input", debounce(fetchRandomUser, 500));

function fetchRandomUser() {
  const userInput = document.getElementById("user-input").value;
  if (userInput.length > 0) {
    console.log("call");
    fetch(`https://randomuser.me/api/?result=1`)
      .then((response) => response.json())
      .then((data) => displayUser(data.results[0]))
      .catch((error) => console.error("error", error));
  }
}

function displayUser(user) {
  const userCard = document.getElementById("user-card");
  userCard.style.display = "block";
  userCard.innerHTML = ` 
    <img src = "${user.picture.large}" />
    <p>${user.email}</p>
    `;
}

function debounce(func, delay) {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}
