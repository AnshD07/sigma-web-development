console.log("This is exercise 12")

// let boxes = document.getElementsByClassName("box")

let boxes = document.querySelector(".container").children

// Generate random numer between a & b;
// a = 0, b = 255                                                                                                
// a+Math.random()*(b-a)

function getrandomcolor() {
    let val1 = Math.ceil(0 + (Math.random() * (255 - 0)));
    let val2 = Math.ceil(0 + (Math.random() * (255 - 0)));
    let val3 = Math.ceil(0 + (Math.random() * (255 - 0)));
    return `rgba(${val1},${val2},${val3})`
}


Array.from(boxes).forEach((e) => {
    e.style.backgroundColor = getrandomcolor()
    e.style.color = getrandomcolor()
})