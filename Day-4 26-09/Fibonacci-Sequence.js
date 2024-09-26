// A fibonacci sequence is written as:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

let number = 10;

let n1 = 0,
  n2 = 1,
  nextNumber;

for (var i = 0; i <= number; i++) {
  console.log(n1);
  nextNumber = n1 + n2;
  n1 = n2;
  n2 = nextNumber;
}




// const number  =5;

// let n1 = 0,
//   n2 = 1,
//   nextNumber;

//   console.log('Fibonacci Series:');
// console.log(n1); // print 0
// console.log(n2); // print 1

// nextNumber = n1+n2;

// while(nextNumber <= number){
//     console.log(nextNumber)
//     n1 = n2;
//     n2 = nextNumber;
//     nextNumber = n1 + n2;
// }