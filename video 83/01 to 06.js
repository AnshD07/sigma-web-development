// The Magical Sorting Hat:
// Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.


let student = ["ansh", "rohan", "pruthviraj"]

let house = []
student.forEach((e) => {
    if (e.length < 6) {
        house.push("Gryffindor")
    }
    else if (e.length < 8) {
        house.push("Hufflepuff")
    }
    else if (e.length < 12) {
        house.push("Ravenclaw")
    }
    else if (e.length >= 12) {
        house.push("Slytherin")
    }
})

// console.log(house);

/*
2. The Double Trouble:
   You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them
*/

function doubleElement(arr) {

    for (let index = 0; index < arr.length; index++) {
        if (index + 1 < arr.length) {
            if (arr[index] === arr[index + 1]) {
                let oldIndex = index;
                while (arr[index] === arr[index + 1]) {
                    index++;
                }
                let max = index + 2
                let randomIndex = Math.floor(Math.random() * (max - oldIndex) + oldIndex)
                arr[randomIndex] = arr[randomIndex] ** 2;
            }
            else {
                arr[index] = arr[index] ** 2;
            }
        }
    }
    return arr
}

let a = [1, 2, 2, 2, 3, 4, 5]
// console.log(doubleElement(a))

/**
 . The Mirror Mirror:
   Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself
 */

function reverse(str) {
    let lastIndex = str.length - 1;
    let str2 = ""
    while (lastIndex >= 0) {
        str2 += str[lastIndex--];
    }
    return str2;
}

// console.log(reverse("kishan"));

/*
The Password Validator:
   You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
*/

function passwordValidater(password) {
    if (password.length < 8) {
        return false
    }

    let hasUpperCase = false
    let hasLowerCase = false

    for (i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
            hasUpperCase = true
        }
        if (password[i] >= 'a' && password[i] <= 'z') {
            hasLowerCase = true
        }
    }

    if (!(hasLowerCase && hasUpperCase)) {
        return false
    }

    let hadDigit = false
    for (let i = 0; i < password.length; i++) {
        if (!isNaN(parseInt(password[i]))) {
            hasDigit = true
            break
        }
    }
    if (!hasDigit) {
        return false
    }

    return true;
}
// console.log(passwordValidater("anshA1234"))


/*
 The Sum Selector:
   You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
*/

function sum(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] < 0) return sum
        else sum += array[index]
    }
    return sum
}

// console.log(sum([1,2,3,4,5,1,2]));

/*
The Vowel Counter:
   You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels
*/

function vowelCounter(str) {
    let count = 0;
    Array.from(str).forEach((e) => {
        e = e.toLowerCase();
        if (e == 'a' || e == 'e' || e == 'i' || e == 'o' || e == 'u') {
            count++;
        }
    })
    return count;
}
// console.log(vowelCounter("aeiouxyx"));

/*
 Async Array Mapping:
   Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
*/

async function Multipy(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            num = num * 2;
            resolve(num);
        }, 500);
    })
}
async function asyncMap(arr) {
    for (let i = 0; i < arr.length; i++) {
        let result = await Multipy(arr[i]);
        // arr[i] = result;
        console.log(result);
    }
    // return arr;
}

let numbers = [1, 2, 3, 4, 5, 6, 7]

// asyncMap(numbers).then(function (result) {
//     // console.log(result);
// })

// console.log(asyncMap(numbers)); //! here this will not give any answer promise is pending because it call first



/*

9. The Asynchronous Shopper:
   Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

*/
async function confirmation() {
    let isAvailable = true
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isAvailable) {
                resolve("Your Order get Confirmed")
            } else reject()
        }, (Math.random() * 3 + 1) * 1000);
    })
}

async function placeOrder() {
    try {
        let result = await confirmation();
        console.log(result);
    } catch (error) {
        console.log("your order cancelled please try again");
    }
}

// placeOrder()


/*
10. The Coffee Machine:
    In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.
*/

let coffes = ["normal_coffee", "capatino", "stobery"]

function makingTime(coffee){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`your ${coffee} is redy`)
        },1000)
    })
}
async function brewCoffee(coffes) {
    for (let i = 0; i < coffes.length; i++) {
        let answer = await makingTime(coffes[i])
        console.log(answer);
    }
}

// brewCoffee(coffes)


/*
    You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

*/
let products=[
    { id: 1, name: 'Product 1', category: 'Electronics' },
    { id: 2, name: 'Product 2', category: 'Clothing' },
    { id: 3, name: 'Product 3', category: 'Electronics' },
    { id: 4, name: 'Product 4', category: 'Books' }
]

function fliterProduct(products,criterion){
    return products.filter(products=>products.category===criterion)
}

let fliteredProduct = fliterProduct(products,'Electronics')
// console.log(fliteredProduct)



