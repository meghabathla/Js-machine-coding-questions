const card = 1234;

function maskify(cardNumber) {
  if (typeof cardNumber === "number") {
    cardNumber = cardNumber.toString();
  }
  if (cardNumber.length < 16) {
    return cardNumber;
  }

  const firstNumber = cardNumber[0];
  const lastFourNumber = cardNumber.slice(-4);

  let maskedSection = "";

  for (let i = 1; i < cardNumber.length - 4; i++) {
    const char = cardNumber[i];
    console.log(parseInt(char));
    maskedSection += isNaN(parseInt(char)) ? char : "#";
  }
  return firstNumber + maskedSection + lastFourNumber;
}

const result = maskify("4536-3456-7890-1237");
console.log(result);
