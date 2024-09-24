// const number = 6;
// let isPrime = true;

// if (number === 1) return "0 is not a prime number";

// if (number > 1) {
//     for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(`${number} is prime`);
//   } else {
//     console.log(`${number} is not prime`);
//   }
// }else{
//     console.log("The number is not a prime number.");
// }





// const number = 5;

// if (number === 1) {
//   console.log("1 is not a prime number");
// } else if (number > 1) {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       console.log(`${number} is not a prime number`);
//       return; // Exit the function if a divisor is found
//     }
//   }
//   console.log(`${number} is a prime number`);
// } else {
//   console.log("The number is not a prime number");
// }




let num =6
let isPrime = true;

if(num == 1){
    console.log("not a prime or nor")
}

if(num > 2){
    for(var i=2; i<num; i++){
        if(num % i == 0){
            isPrime = false;
            break
        }
    }
    if(isPrime){
        console.log(`${num} is prime`);
    }else{
        console.log(`${num} is not prime`);
    }
}