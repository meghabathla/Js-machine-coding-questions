const inputfield = document.getElementById("input-field");
const outputfield = document.getElementById("output-field");
const buttons = document.querySelectorAll(".btn");

inputfield.addEventListener("keyup", () => {
  outputfield.innerHTML = inputfield.value;
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const output = outputfield.innerHTML;
    if (btn.classList.contains("uppercase")) {
      outputfield.innerHTML = output.toUpperCase();
    }
    if (btn.classList.contains("lowercase")) {
      outputfield.innerHTML = output.toLowerCase();
    }
    if (btn.classList.contains("capitalize")) {
      outputfield.innerHTML =
        output.charAt(0).toUpperCase() + output.slice(1).toLowerCase();
    }
    if (btn.classList.contains("bold")) {
      outputfield.innerHTML = `<b> ${output}</b>`;
    }
    if (btn.classList.contains("italic")) {
      outputfield.innerHTML = `<i> ${output}</i>`;
    }
    if (btn.classList.contains("underline")) {
      outputfield.innerHTML = `<u> ${output}</u>`;
    }
  });
});
