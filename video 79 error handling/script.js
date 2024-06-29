let a = prompt("Enter First Number ")
let b = prompt("Enter Second Number ")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("This is Not a Number")
    // for throwing custom made by developer error
}


let sum = parseInt(a) + parseInt(b);

function main() {


    try {
        console.log("Your Sum is", sum * x);
        return true

        /* below code catch not get exucuted */

        // setTimeout(() => {
        //     console.log("Your Sum is", sum * x);
        // }, 3000);

    } catch (error) {
        console.log("Error Aa gya Bhai")
        return false
    } finally {
        console.log("files are being closed ans db conection is being closed")
    }
}

let c = main()

// try check error hai ya nhi agar error hoga to catch wala block execute hoga



// try {
//     b1ah

//     // varible not declare
// } catch (error) {
//     console.log(error.name)
//     // console.log(error.message)
//     // console.log(error.stack)
// }