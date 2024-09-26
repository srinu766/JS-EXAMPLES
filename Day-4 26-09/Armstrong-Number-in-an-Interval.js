let heighestNumber = 500;
let lowestNumber = 100;
console.log("Armstrong Numbers:");

for (var i = lowestNumber; i <= heighestNumber; i++) {
  let sum = 0;
  let temp = i;
  while (temp > 0) {
    let rem = temp % 10;
    sum += rem * rem * rem;
    temp = parseInt(temp / 10);
  }
  if (sum == i) {
    console.log(i);
  }
}
