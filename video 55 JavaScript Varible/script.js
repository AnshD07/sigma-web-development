console.log("Hey This is Tutorial 55")

let a = 5;
var b = 7.8;
let c = "Ansh";

let _a = "Harry";
// var 3k = "Rohan" //Not applicable

// console.log(a + b + 3); 
// console.log(typeof a, typeof b, typeof c);


// let is Block Scope varible 
// var is globally scope varible
{
    let a = 66;
    console.log(a)
}
console.log(a)


// const a1 = 7;
// a1 = a1 + 3;
// Not Allowed Because a1 is Constant 

// Primitive Data Type

let x = "AnshDholakiya";
let y = 22;
let z = 3.5;
const p = true;
let q = undefined;
let r = null;


console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// Objects

let o = {
    name: "ansh",
    "job code": 777,
    is_handsome:true
}

console.log(o);

o.salary = "100crores";
console.log(o);

o.salary = "500crores";
console.log(o);