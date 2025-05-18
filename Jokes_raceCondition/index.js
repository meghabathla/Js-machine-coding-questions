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
  console.log(
    latestRequest,
    "latest request before assigning to currentRequest"
  );
  const currentRequest = latestRequest;
  console.log(
    currentRequest,
    "value of currentRequest after getting value from latestRequest"
  );
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP request fail status:", response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log("currentRequest inside condition", currentRequest);
      console.log("latestRequest inside condition", latestRequest);

      if (latestRequest == currentRequest) {
        displayJoke.innerText = `${data.value}`;
      }
    })
    .catch((error) => console.log(error, "error find while fetching the data"));
}
