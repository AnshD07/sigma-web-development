// documentation - https://expressjs.com/en/starter/static-files.html

const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000


//! Static files 
app.use(express.static('public'))
app.use('/blog', blog)
//! some js,css file image give public so every one can see that

// app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
    res.send('Hello World! this is express')
})

//! request parameters and queries

app.get("/about-us", (req, res) => {
    res.send("About us")
})
app.get("/contact", (req, res) => {
    res.send("contact us")
})
app.get("/blogs", (req, res) => {
    res.send("blogs")
})

// app.get("/blogs/intro-to-js", (req, res) => {
//     res.send("this is intro-to-python")
// })
// app.get("/blogs/intro-to-python", (req, res) => {
//     res.send("this is intro-to-python")
// })

//! we have solution for this don't need to write plenty of code for this 
//todo ===> insted using varible

app.get("/blogs/:slug/:second",(req,res)=>{ 
    // logic to fetch {slug} from data base


    // when URL is this ==> http://127.0.0.1:3000/blogs/intro-to-intro-to-padosi/hareshbhai-dholakiya?mode=dark&region=india
    res.send(`this is ${req.params.slug} and ${req.params.second}`)
    console.log(req.params);  //{ slug: 'intro-to-intro-to-padosi', second: 'hareshbhai-dholakiya' }
    console.log(req.query);  //{ mode: 'dark', region: 'india' }
 
    // console.log(req);
    
})


 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})