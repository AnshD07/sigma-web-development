console.log("Ansh Dholakiya");

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"
/* it only set at third box by class */

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green"
// It return first element of .box

// console.log(document.querySelectorAll(".box"))


document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green"
    // console.log(e)
});

document.getElementsByTagName("div")