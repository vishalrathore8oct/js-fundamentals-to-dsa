import { input } from "../readlineInput.js";

async function main() {
  const userData1 = await input("Enter The Number 1: ");
  const userData2 = await input("Enter The Number 2: ");
  const userData3 = await input("Enter The Number 3: ");

  if (userData1 === "" || userData2 === "" || userData3 === "") {
    return "Please enter all three numbers";
  }

  const userNumber1 = Number(userData1);
  const userNumber2 = Number(userData2);
  const userNumber3 = Number(userData3);

  if (isNaN(userNumber1) || isNaN(userNumber2) || isNaN(userNumber3)) {
    return "Please enter valid numbers";
  }

  if (userNumber1 > userNumber2 && userNumber1 > userNumber3) {
    return userNumber1;
  } else if (userNumber2 > userNumber3) {
    return userNumber2;
  } else {
    return userNumber3;
  }
}

const result = await main();
console.log(result);
