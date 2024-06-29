console.log("hello this is my first video for backend")


var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a);

// if you prefer something other than '-' as separator
let b = slugify('some@$@#$***&&**!@#^$&%&@!#41234!@#$@!#$@!#4232 2 425#$%#$ string', '_')  // some_string
console.log(b);


// https://nodejs.org/en/learn/getting-started/introduction-to-nodejs