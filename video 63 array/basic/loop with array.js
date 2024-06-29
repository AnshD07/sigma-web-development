let num = [2, 3, 5, 11]

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i])
// }


// For Each Loop 
num.forEach((value,index,array)=>{
// console.log(value*value); 
   console.log(value,index,array)
})

// Array.from
let from = Array.from("AnshRaj")
console.log(from)

// For....of
    for (let i of num) {
        console.log(i)
    }
    /* Use to print element of array */

// For..in
    for (let i in num) {
        console.log(i)
    }
    /* Use to print key of Array*/