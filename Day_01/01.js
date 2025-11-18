import { input } from "../readlineInput.js";

async function main() {
  const userData = await input("Enter Your Age: ");

  if (userData === "") {
    return "Enter a Valid Age Number";
  }

  const personAge = Number(userData);

  if (isNaN(personAge)) {
    return "Enter a Valid Age Number";
  }

  if (personAge < 13) {
    return "Child";
  } else if (personAge < 20) {
    return "Teen";
  } else if (personAge < 60) {
    return "Adult";
  } else {
    return "Senior";
  }
}

const result = await main();
console.log(result);
