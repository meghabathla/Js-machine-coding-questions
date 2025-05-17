const inputfield = document.getElementById("input-field");
const outputfield = document.getElementById("output-field");
const buttons = document.querySelectorAll(".btn");

let inputText = "";
inputfield.value = inputText;
let isBold = false;
let isItalic = false;
let isUnderline = false;

inputfield.addEventListener("keyup", () => {
  inputText = inputfield.value;

  if (outputfield.innerHTML === "") {
    outputfield.innerHTML = inputText;
  }
  outputfield.innerHTML = outputfield.innerHTML;
});

function applyStyles(text) {
  if (isBold) text = `<b>${text}</b>`;
  if (isItalic) text = `<i>${text}</i>`;
  if (isUnderline) text = `<u>${text}</u>`;
  return text;
}

function printOutput(value) {
  outputfield.innerHTML = value;
  //  inputfield.value = value;
}
// function getUpdatedInput(text) {
//    inputfield.value = text;
//  }
buttons.forEach((btn) => {
  // getUpdatedInput(outputfield.innerHTML);
  btn.addEventListener("click", () => {
    if (btn.classList.contains("uppercase")) {
      inputText = inputfield.value.toUpperCase();
    }
    if (btn.classList.contains("lowercase")) {
      inputText = inputfield.value.toLowerCase();
    }
    if (btn.classList.contains("capitalize")) {
      inputText =
        inputfield.value.charAt(0).toUpperCase() +
        inputfield.value.slice(1).toLowerCase();
    }
    if (btn.classList.contains("bold")) {
      outputfield.classList.add("bold");
      // inputText = `<b>${inputfield.value}</b>`;
    }
    if (btn.classList.contains("italic")) {
      outputfield.classList.add("italic");

      // inputText = `<i> ${inputfield.value}</i>`;
    }
    if (btn.classList.contains("underline")) {
      outputfield.classList.add("underline");

      // inputText = `<u> ${inputfield.value}</u>`;
    }
    outputfield.innerHTML = inputText;

    //     // printOutput(inputText);
    //     // btn.classList.toggle("button-clicked");
    //     // btn.classList.toggle("button");
  });
});

// const inputfield = document.getElementById("input-field");
// const outputfield = document.getElementById("output-field");
// const buttons = document.querySelectorAll(".btn");

// let inputText = "";

// function applyStyles(text) {
//   if (isBold) text = `<b>${text}</b>`;
//   if (isItalic) text = `<i>${text}</i>`;
//   if (isUnderline) text = `<u>${text}</u>`;
//   return text;
// }

// function updateOutput() {
//   const styledText = applyStyles(inputText);
//   outputfield.innerHTML = styledText;
// }

// inputfield.addEventListener("keyup", () => {
//   inputText = inputfield.value;
//   updateOutput();
// });

// buttons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const rawText = inputfield.value;

//     if (btn.classList.contains("uppercase")) {
//       inputText = rawText.toUpperCase();
//     }

//     if (btn.classList.contains("lowercase")) {
//       inputText = rawText.toLowerCase();
//     }

//     if (btn.classList.contains("capitalize")) {
//       inputText = rawText
//         .split(" ")
//         .map(
//           (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//         )
//         .join(" ");
//     }

//     if (btn.classList.contains("bold")) {
//       isBold = !isBold;
//     }

//     if (btn.classList.contains("italic")) {
//       isItalic = !isItalic;
//     }

//     if (btn.classList.contains("underline")) {
//       isUnderline = !isUnderline;
//     }

//     updateOutput();
//   });
// });
