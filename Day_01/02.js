import { input } from "../readlineInput.js";

async function main() {
  const userData = await input("Enter The Number: ");

  if (userData === "") {
    return "Enter a Valid Number";
  }

  const userNumber = Number(userData);

  if (isNaN(userNumber)) {
    return "Enter a Valid Number";
  }

  if (userNumber < 0) {
    return "Negative";
  } else if (userNumber > 0) {
    return "Positive";
  } else {
    return "Zero";
  }
}

const result = await main();
console.log(result);
