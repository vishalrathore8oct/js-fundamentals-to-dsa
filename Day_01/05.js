import { input } from "../readlineInput.js";

async function main() {
  const userScore = await input("Enter The Score: ");

  if (userScore === "") {
    return "Please enter a valid number";
  }

  const score = Number(userScore);

  if (isNaN(score)) {
    return "Please enter a valid number";
  }

  if (score < 0 || score > 100) {
    return "Enter a Number Range Between 0 to 100";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

const result = await main();
console.log(result);
