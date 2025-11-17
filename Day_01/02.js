import { input } from "../readlineInput.js";

async function main() {
  const userNumber = Number(await input("Enter The Number: "));
  if (userNumber < 0) {
    return "Negative";
  } else if (userNumber > 0) {
    return "Positive";
  } else if (userNumber === 0) {
    return "Zero";
  }else {
    return "Enter a Valid Number";
  }
}


const result = await main();
console.log(result);

