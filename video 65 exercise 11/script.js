
let num = prompt("Enter a Number For Factorial: ");
let Number = [];
for (let i = 1; i <= num; i++) {
    
    Number.push(i) 
}
// let i = 1
// do {
//     Number.push(i)
//     i++
// } while (i <= num);

let factorial = (a, b) => {
    return a * b;
}

console.log(Number.reduce(factorial))
console.log(Number)