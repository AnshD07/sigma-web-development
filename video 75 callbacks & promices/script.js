console.log("This is First Line")
console.log("This is Second Line ")

// Whole Script Read then settimeout run Okay this is Asyncronas nature of Javascript

setTimeout(() => {
    console.log("I am inside setTimeout")
}, 3000);

console.log("The End");


const callback = (arg) => {
    console.log(arg)
}

const LoadScript = (src, callback) => {
    let script = document.createElement("script")
    script.src = src;
    script.onload = callback("Ansh")
    document.head.append(script);
}


LoadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback )

// Basically Callback Function is Function in Function