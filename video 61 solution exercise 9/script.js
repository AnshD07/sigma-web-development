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

let random = Math.random();
console.log(random)

let a = prompt("Enter First Number");
let b = prompt("Enter operation");
let c = prompt("Enter Second Number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random > 0.1) {
    // perform correct calculation 
    alert(`Answer is ${eval(`${a} ${b} ${c}`)}`)
    
}
else {
    // perform wrong calculation
    
    b = obj[b]; 
    // it will go in object and select value of key
    
    alert(`Answer is ${eval(`${a} ${b} ${c}`)}`)
}       