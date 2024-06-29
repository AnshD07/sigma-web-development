const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {  //! if we write ..../blog then it home page is this line
    res.send('shop home page')
})

// define the about route
router.get('/about', (req, res) => {
    res.send('About shop')
})


module.exports = router