const { log } = require('console')
const express = require('express')
const fs = require("fs")
const blog = require('./routes/blog.js')
const app = express()
const port = 3000




app.use('/blog', blog)
app.use(express.static("public")) //! this is also middleware

//! threw middle ware we can edit request


// Middleware 1
app.use((req, res, next) => {
    // res.send("Hacked by middleware 1")
    // we can give response from middle ware also then need to //! need to remove next() because it generate error

    console.log(req.headers);
    req.ansh = "I am ansh dholakiya don't cheat parents" //! also can add somethin in request
    
    console.log('middeware 1')
    next()  // giving request to next middleware
    
    // there is so much middleware so next is writing
    //! if we don't write next becase it stuck in here and page loading continuously
})

// Middleware 2
app.use((req, res, next) => {
    req.ansh = "I am Raj bhai" //! order matter bro 
    fs.appendFileSync("logs.txt", `middle ware 2 reporting time ${new Date().toLocaleTimeString()} is ${req.method}\n`) // waiting for appending logs
    next()
})




app.get('/', (req, res) => {
    res.send('home world!')
}).get('/about', (req, res) => {
    res.send(`${req.ansh}`)
}).get('/contact', (req, res) => {
    res.send('contact us!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
