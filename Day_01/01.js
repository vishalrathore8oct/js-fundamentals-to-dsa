import { input } from "../readlineInput.js";

async function main() {
  const personAge = Number(await input("Enter Your Age: "));
  if (personAge < 13) {
    return "Child";
  } else if (personAge < 20) {
    return "Teen";
  } else if (personAge < 60) {
    return "Adult";
  } else if (personAge >= 60) {
    return "Senior";
  } else {
    return "Enter a Valid Age Number";
  }
}


const result = await main();
console.log(result);

