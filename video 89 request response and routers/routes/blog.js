const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {  //! if we write ..../blog then it home page is this line
    res.send('Blog home page')
})

// define the about route
router.get('/about', (req, res) => {
    res.send('About birds')
})

// define the blogpost of particular user
router.get('/blogspost/:slug', (req, res) => {
    res.send(`fetch the blogpost for ${req.params.slug}`)
})

module.exports = router