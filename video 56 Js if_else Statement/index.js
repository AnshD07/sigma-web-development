console.log("hi I am Conditional Statement")

let age = 3;
let grace = 2;

age += grace;

console.log(age);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace);
// ** use for Square of something

console.log(age % grace);

// if ((age + grace) > 18) {
//     console.log("you can Drive");
// }
// else {
//     console.log("you Can Not Drive");
// }


// Ternary Operator

let a = 4;
let b = 50;

let c = a > b ? (a - b) : (b - a);

/*
  if a greater than b then (a-b) else (b-a)
*/

console.log(c);