// https://ejs.co/
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

const express = require('express')
const app = express()
const port = 3000
const links = [
  {
    href: '/',
    icon: '<svg>...</svg>',
    text: 'Home'
  },
  {
    href: 'collection',
    icon: '<svg>...</svg>',
    text: 'Collection'
  },
  {
    href: 'live',
    icon: '<svg>...</svg>',
    text: 'Live'
  }
];


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let siteName = "Adidas"
  let searchText = "Search Now"
  let arr = [12, 423, 543, 6, 54645, 74]
  // res.render("index", { siteName, searchText ,arr }) //! we can write like this thing also because it is object object chhe ne bhai

  res.render("index",{links})
})

app.get('/blogs/:slug', (req, res) => {
  let blogTitle = "why adidas"
  let blogText = "this is very good brand"
  res.render("blogpost", { blogTitle: blogTitle, blogText: blogText })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})