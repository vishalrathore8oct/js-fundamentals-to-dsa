import { input } from "../readlineInput.js";

async function main() {
  const userNumber1 = Number(await input("Enter The Number 1: "));
  const userNumber2 = Number(await input("Enter The Number 2: "));
  const userNumber3 = Number(await input("Enter The Number 3: "));
  
  if (userNumber1 > userNumber2 && userNumber1 > userNumber3) {
    return userNumber1
  } else if (userNumber2 > userNumber3) {
    return userNumber2
  } else {
    return userNumber3
  }
}


const result = await main();
console.log(result);

