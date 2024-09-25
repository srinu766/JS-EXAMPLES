

// without boolean   

const num = 5;

if (num === 1) {
  console.log("1 is not a prime num");
} else if (num > 1) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(`${num} is not a prime num`);
      return; // Exit the function if a divisor is found
    }
  }
  console.log(`${num} is a prime num`);
} else {
  console.log("The num is not a prime num");
}




// with boolean   

let number = 5;
let isPrime = true;

if(number ==1) return "1 is nor prime number";

if(number > 1){
    for(var i=2; i<=number/2; i++){ // Loop only up to half of the number
        if(number % i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(`${number} is a prime number`)
    }else{
        console.log(`${number} is not a prime number`)
    }
}else{
    console.log("error");
}





let number2 = 5;
let isPrime2 = true;

if(number2 ==1) return "1 is nor prime number2";

if(number2 > 1){
    for(var i=2; i<number2; i++){ // Loop through all numbers up to number-1
        if(number2 % i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime2){
        console.log(`${number2} is a prime number2`)
    }else{
        console.log(`${number2} is not a prime number2`)
    }
}else{
    console.log("error");
}