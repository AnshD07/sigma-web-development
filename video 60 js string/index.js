console.log("This is String Tutorial of JS")

let a = `Ansh isn't "bad" Boy`;
// Here ` ` is templates litrals 

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[5]);
// console.log(a[20]);


console.log(a.length);

let real_name = "Ansh"
let friend = "Kishan"

console.log("my name is " + real_name + " and his friend name is " + friend);

console.log(`my name is ${real_name} and his friend name is ${friend}`)

let b = "ansh"
console.log(b.toUpperCase());

let c = "RAJDHOLAKIYA";
console.log(c.toLowerCase());

console.log(c.slice(1, 4));
console.log(c.slice(1));

console.log(c.replace("DHOLAKIYA", " is my brother")); /* like that we can replace any string character */

console.log(c.concat(b,"parth","srutesh"))