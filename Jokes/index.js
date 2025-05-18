const url = "https://api.chucknorris.io/jokes/random";

// handle this end point with XMLHttpRequest

// handle this end point with promises

// handle the case of race condition

const displayJoke = document.getElementById("display-joke");
const button = document.getElementById("getJoke");
let latestRequest = 0;

button.addEventListener("click", getRandomJoke);

function getRandomJoke() {
  latestRequest++;
  const currentRequest = latestRequest;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP request fail status:", response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log("currentRequest", currentRequest);
      console.log("latestRequest", latestRequest);

      if (latestRequest == currentRequest) {
        displayJoke.innerHTML = `${data.value}`;
      }
    })
    .catch((error) => console.log(error, "error find while fetching the data"));
}
