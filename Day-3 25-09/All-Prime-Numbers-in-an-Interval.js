// program to print prime numbers between the two numbers

// take input from the user
const lowerNumber = 2;
const higherNumber = 20;

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are`);

// looping from lowerNumber to higherNumber

for (var i = lowerNumber; i <= higherNumber; i++) {
  let flag = 0;

  // looping through 2 to user input number
  for (var j = 2; j <= i/2; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  if (i > 1 && flag == 0) {
    console.log(i);
  }
}
