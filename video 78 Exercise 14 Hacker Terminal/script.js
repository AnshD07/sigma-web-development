// let words = [
//     "Reading your Files...",
//     "Password files Detected...", 
//     "Sending all passwords and personal files to server...",
//     "Cleaning up..."
// ]

// for (const item of words) {
//     addItem(item)
// }


// function randomDelay() {
//     let time = Math.random()*6 + 1
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve()
//         }, time*1000);
//     })
    
// }


// async function addItem(item){

//     await randomDelay(); // this will return promise
    
//     let div = document.createElement("div")
//     div.innerHTML = item
//     document.body.append(div)
// }

let a = document.querySelector(".container")
// console.log(a.lastElementChild.textNode);
console.log(a.lastElementChild.innerHTML)