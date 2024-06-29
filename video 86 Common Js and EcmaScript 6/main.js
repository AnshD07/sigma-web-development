//! here we change "type": "module" that is ES6 module latest module 
// in normal this will not work
//! ES6 is modarn syntax


//todo ===> this is modern sytax ES6

// import { a, b, d } from "./myModules.js"  //!here carly braces is neccessary for name export
// console.log(a, b, d);


// import obj from "./myModules.js"
// import ansh from "./myModules.js"   //! here curly bracket nthi avta
// console.log(ansh);
//! we can also change name of it because it is default export


/*
"type": "module"
this is run Ecma script6 when we paste it into package.json

if there is not this then it is Common Js module
*/



/*

2 Two ways to create JS modules: single script t6 module and common JS module
02:04 Using createServer method and setting content type in Node.js HTTP module
04:09 NVM is useful for managing multiple versions of Node.js
06:00 ES6 modules provide asynchronous module loading and modern syntax
08:03 Understanding import and export syntax in CommonJS and EcmaScript Modules
09:57 Default export allows importing with any name
11:44 Comparison between CommonJS and EcmaScript Modules
14:30 Understanding module exports and require in ES6 modules and CommonJS
16:23 CommonJS and ES6 module differences

*/


//! old syntax

let a = require("./myModule2.js")
console.log(a , __dirname , __filename);