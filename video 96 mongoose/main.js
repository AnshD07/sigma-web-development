// https://www.npmjs.com/package/mongodb

// https://mongoosejs.com/docs/index.html
import mongoose from "mongoose"
import express from "express"
import { Todo } from "./models/Todo.js"
//! this is name export so give here curly braces 

let connect = await mongoose.connect('mongodb://localhost:27017/');
const app = express()
const port = 3000


app.get('/', (req, res) => {
    const todo = new Todo({
        title: "hey first todo",
        desc: "Description of this todo",
        isDone: false,
        days: Math.floor(Math.random() * 112 + 1)
        // days: "this is sting"  //!it will give error because enter type is Number 
        // validation failed
    })

    todo.save();
    res.send('Hello World!');
})


app.get('/a',async (req, res) => {
    let todo = await Todo.findOne({})  //it take time to get data
    console.log(todo);
    res.json({ title: todo.title, desc: todo.desc })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

