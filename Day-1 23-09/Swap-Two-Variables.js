// Example 1: Using a Temporary Variable
// let a =10
// let b= 20

// let temp;

// //swap variables

// temp = a
// a = b
// b=temp;

// console.log("before a = 10, after a",a)
// console.log("before b = 20, after b",b)




// Example 2: Using es6(ES2015) Destructuring assignment
// let a =10
// let b = 20;

// // using destructuring objects
// [a,b] = [b,a];

// console.log("before a = 10, after a",a);
// console.log("before b = 20, after b",b);




// Example 3: Using Arithmetic Operators
// let a = 10;
// let b = 20;

// a = a + b; //30
// b = a - b; //30-20 = 10
// a = a - b; //30-10= 20

// console.log("before a = 10, after a", a);
// console.log("before b = 20, after b", b);




// Example 4: Using Bitwise XOR operator
let a = 4;
let b = 2;

// XOR operator
a= a^b;
b= a^b;
a= a^b;

console.log("before a = 10, after a", a);
console.log("before b = 20, after b", b);