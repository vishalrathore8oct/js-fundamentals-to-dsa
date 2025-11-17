import { input } from "../readlineInput.js";

async function main() {
  const userNumber = Number(await input("Enter The Number : "));
  if ((userNumber % 3 === 0) && (userNumber % 5 === 0)) {
    return "FizzBuzz"
  } else if (userNumber % 3 === 0) {
    return "Fizz"
  }else if (userNumber % 5 === 0) {
    return "Buzz"
  } else {
    return userNumber
  }
}


const result = await main();
console.log(result);

