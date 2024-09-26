
// A positive integer is called an Armstrong number (of order n) if

// abcd... = an + bn + cn + dn + ...

// 153 = 1*1*1 + 5*5*5 + 3*3*3

// 1634 = 1*1*1*1 + 6*6*6*6* + 3*3*3*3 + 4*4*4*4


// program to check an Armstrong number of three digits

let sum =0;

let number = 1634;

let temp = number;

while(temp >0){
    remainder = temp % 10;
    sum += remainder * remainder * remainder* remainder

    temp = parseInt(temp/10);
}

if(number == sum){
    console.log(`${number} is armstrong`)
}else{
    console.log(`${number} is not armstrong`)
}