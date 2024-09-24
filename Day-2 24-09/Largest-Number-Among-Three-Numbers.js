const number1 = 203;
const number2 = 202;
const number3 = 300;

let largest;

if (number1 >= number2 && number1 >= number3) {
  largest = number1;
} else if (number2 >= number1 && number2 >= number3) {
  largest = number2;
} else {
  largest = number3;
}



// console.log(largest)


// using math.max

const largestWithMax = Math.max(number1, number2, number3)

console.log(largestWithMax)