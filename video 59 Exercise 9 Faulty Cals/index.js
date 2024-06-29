/* 
create a faulty calculator using javascript.

This Faulty Calculator does Following:
1.It takes two number as input from the user  
2.it performs wrong operation as follows

    + ---> -
    * ---> +
    - ---> /
    / ---> ** 

    It perform Wrong Operation 10% of Times 
*/

let a = 4;
let b = 2;

let random = Math.random();

console.log(random)

if (random < 0.1) {
    console.log("a + b =", a - b)
    console.log("a * b =", a + b)
    console.log("a - b =", a / b)
    console.log("a / b =", a ** b)
} else {
    console.log("a + b =", a + b)
    console.log("a * b =", a * b)
    console.log("a - b =", a - b)
    console.log("a / b =", a / b)
}
