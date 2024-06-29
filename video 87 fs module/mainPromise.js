import fs from "fs/promises"
//! for preventing call back hell there is another module promise module
// console.log(fs);

let a =  await fs.readFile("harry2.txt")  // if not set await then return promise

//!Yes, that is correct. If you have set the type field to module in your package.json file, then you can use the await keyword at the top level of your module files without having to wrap it in an async function. This is a feature that was introduced in Node.js 14.8.0.

console.log(a.toString());


// let b = await fs.writeFile("ansh.txt","\n\n\nansh brother raj is very nice boy")
// console.log("after b");

