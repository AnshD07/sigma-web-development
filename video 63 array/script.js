let arr = ["ansh", "raj", "parth", "srutesh"]
console.log(arr.length);

// arr[2] = "Goti Dholakiya"

// console.log(arr); 
// console.log(arr[2]) 

// console.log(typeof(arr))

console.log(arr.toString())
console.log(arr.join(" & "))


arr.pop()  /* this remove last element from array */

console.log(arr)

arr.push(100)  /* this add element to array */
console.log(arr)

arr.shift();  /* remove First element */
console.log(arr)

arr.unshift("Boss")  /* Add first element */
console.log(arr)


let a1 = [2, 1, 5, 8, 6];

delete a1[3]
console.log(a1)

let a2 = [32, 54, 67, 88]

let concat = a1.concat(a2, "hello")
console.log(concat)

let ar = [3, 5, 2, 1, 4]  /* it will short all number with appropriate order */
console.log(ar.sort())

let a = ["Ansh", "Kishan", "jay", "Vivek", "Amit"]
console.log(a.sort())



let number2 = [1, 2, 3, 4, 5]
console.log(number2.reverse())


// this is you can see in notes of code with harry



// splice Method 

let num = [23, 54, 1, 64, 87, 33, 5]

num.splice(2, 3, 1021, 1022, 1023)
/*         ^  ^    ^     ^     ^
           |  |    |_____|_____|____>Elements to be 
          /   |                       Added
position to   |
add           |
              |
        no of element
        to Remove
 
*/

let Deletedvalue = num.splice(2, 3, 1021, 1022, 1023)

// console.log(Deletedvalue);
console.log(num);
