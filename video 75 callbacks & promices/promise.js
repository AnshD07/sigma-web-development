// solution of Callback hell is Promises


/*

resolve (value) => if the job is finished succesfullly
reject (error)  => if the job fail

*/

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();

    // Rejecting Promis
    if (a < 0.5) {
        reject("Random number Not Supporting You Sorry! 1")
    } 
    setTimeout(() => {
        console.log("This Timeout is Done Okay 1")
        resolve("Ansh 1");
    }, 3000);


    /* When this timeout is done then resolve with Ansh Text */
})


let prom2 = new Promise((resolve, reject) => {

    let a = Math.random();
    if (a < 0.5) {
        reject("Random number Not Supporting You Sorry! 2")
    } 

    setTimeout(() => {
        console.log("This Timeout is Done Okay 2")
        resolve("Ansh 2");
    }, 1000);
})

// Promice resolve then What to do for it Below code id written

// prom1.then((arg) => {
//     console.log(arg)
// }).catch((err) => {
//     console.log(err)
// })

// .then use for resolve happen and .catch to handle error


// Promise.all([prom1, prom2]).then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

// promise all give array of resolve value


// Promise.allSettled([prom1, prom2]).then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

// in allSettled it show after all promise settled like reject or resolve 

Promise.resolve([prom1, prom2]).then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})
