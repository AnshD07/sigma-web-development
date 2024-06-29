let a = [23, 42, 53, 89]



// for (let index = 0; index < a.length; index++) { 
//     const element = a[index];
//     console.log(element)
// }

a.forEach((element, index, array) => {
    console.log(element + element, index, array)
});


// let obj = {
//     a:1,
//     b:2,
//     c:3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element)
//     }
// }



// for (const iterator of a) {
//     console.log(iterator)
// }


