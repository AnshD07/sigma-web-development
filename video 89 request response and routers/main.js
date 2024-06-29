const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop.js')
const app = express()
const port = 3000





app.use(express.static("public"))  // you know what is this
app.use('/blog', blog)  //! /blog se start hone wale endpoint ko routes folder ke andar ki blog.js wali file handle kregi

//todo ==> like this we can organis our website


app.use('/shop', shop)
// app.get('/', (req, res) => { //! when we click on url
//   console.log("hey its get request");
//   res.send('Hello World! get request ')
// })

// app.post('/', (req, res) => { //! for more security
//   console.log("hey its post request");
//   res.send('hello world post request ')
// })

// app.put('/', (req, res) => {  //! use for update
//   console.log("hey its put request");
//   res.send('hello world put request ')
// })

// app.delete('/', (req, res) => {
//   console.log("hey its delete request");
//   res.send('hello world delete request ')
// })


//! Chanining of Request
app.get('/', (req, res) => { //! when we click on url
  console.log("hey its get request");
  res.send('Hello World! this is get request  ')
}).post('/', (req, res) => { //! for more security
  console.log("hey its post request");
  res.send('hello world post request ')
}).put('/', (req, res) => {  //! use for update
  console.log("hey its put request");
  res.send('hello world put request ')
}).delete('/', (req, res) => {
  console.log("hey its delete request");
  res.send('hello world delete request ')
})



app.get("/index", (req, res) => {
  console.log("hey its index");

  res.sendFile("/templates/index.html", { root: __dirname })  //we need spacify root of the library

  // res.json({  //! give json file as response
  //   ansh:"name",
  //   brother:"raj"
  // })

  // res.sendStatus(404) // send status code 

  // res.redirect("https://google.com")


})



console.log(__dirname);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

