let rand1 = Math.random()
console.log(rand1)

let rand2 = Math.round(Math.random() * (4 - 0) + 0);
let rand3 = Math.round(Math.random() * (4 - 0) + 0);
let rand4 = Math.round(Math.random() * (4 - 0) + 0);
let rand5 = Math.round(Math.random() * (4 - 0) + 0);
let rand6 = Math.round(Math.random() * (4 - 0) + 0);

document.getElementsByClassName("box")[rand6].style.backgroundColor = "red";
document.getElementsByClassName("box")[rand2].style.backgroundColor = "green";
document.getElementsByClassName("box")[rand3].style.backgroundColor = "yellow";
document.getElementsByClassName("box")[rand4].style.backgroundColor = "purple";
document.getElementsByClassName("box")[rand5].style.backgroundColor = "black";



// let boxes = document.getElementsByClassName("box");

// if (boxes.length > 0) {
//   let rand1 = Math.floor(Math.random() * boxes.length);
//   let rand2 = Math.floor(Math.random() * boxes.length);
//   let rand3 = Math.floor(Math.random() * boxes.length);
//   let rand4 = Math.floor(Math.random() * boxes.length);
//   let rand5 = Math.floor(Math.random() * boxes.length);

//   boxes[rand1].style.backgroundColor = "red";
//   boxes[rand2].style.backgroundColor = "green";
//   boxes[rand3].style.backgroundColor = "yellow";
//   boxes[rand4].style.backgroundColor = "purple";
//   boxes[rand5].style.backgroundColor = "black";
// } else {
//   console.error("No elements with class 'box' found on the page.");
// }
 