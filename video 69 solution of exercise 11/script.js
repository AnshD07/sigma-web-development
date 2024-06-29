let a = 4;

// using array method
function factorial(number) {
    let arr = Array.from(Array(number + 1).keys())
    console.log(arr.slice(1,))

    let c = arr.slice(1,).reduce((a, b) => {
        return a * b;
    })
    return c
}
// using for loop
function facFor(number) {
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index;
    }
    return fac;
}

factorial(a)
console.log(facFor(a));