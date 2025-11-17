import { input } from "../readlineInput.js";

async function main() {
  const nameOfUser = await input("Enter Your Name: ");
  const ageOfUser = Number(await input("Enter Your Age: "));
  console.log(`Hello World ${nameOfUser} Ji, Your age is ${ageOfUser}`);
}

main();
