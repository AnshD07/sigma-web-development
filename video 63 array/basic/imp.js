/* Map Filter Reduce */


// Array Map Method
let arr = [23, 12, 43]
// let Newarr = arr.map((value, index, array) => {
//     console.log(value, index, array);
//     return value + 10;
// })

// console.log(Newarr)

/* create a new aray by performing some operation in each array element */


// Array Filter Method

let arr2 = [23, 12, 13, 4, 6, 8, 2]
let filt = arr2.filter((value) => {
    return value < 10;
})
console.log(filt);


// Array Reduce Method

let arr3 = [1, 2, 3, 4]
let reduce = arr3.reduce((a1, a2) => {
    return a1 + a2;
})
console.log(reduce)