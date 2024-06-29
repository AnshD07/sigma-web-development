// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection     


import express from "express"
import mongoose from "mongoose"
import { Employee } from "./models/employe_model.js";

await mongoose.connect('mongodb://localhost:27017/company');


const app = express()
const port = 3000
app.set('view engine', 'ejs');

let name_arr = ["raj", "ansh", "hareshbhai", "sudhaben", "ukabhai", "radhaben"]
let city_arr = ["surat", "babra", "ahemdabad", "mumbai"]
let language_arr = ["python", "java", "javascript", "c", "c++"]
function random_choice(arr) {
    let rand_index = Math.floor(Math.random() * arr.length)
    return arr[rand_index]
}
function rand_num() {
    return Math.floor(Math.random() * (2500000 - 2000000 + 1)) + 2000000;
}
function rand_bool() {
    if (Math.random() <= 0.5) return true
    return false
}


app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
});


app.get('/generate', async (req, res) => {
    // Clear the collection Employee
    await Employee.deleteMany({})

    // Generate random data
    for (let i = 0; i < 10; i++) {
        const employe_data = new Employee({
            name: random_choice(name_arr),
            salary: rand_num(),
            language: random_choice(language_arr),
            city: random_choice(city_arr),
            isManager: rand_bool()
        })
        employe_data.save();
    }

    res.render('index', { foo: 'FOO' });
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 