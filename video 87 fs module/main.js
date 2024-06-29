const fs = require("fs")
// const fs = require("fs/promises")
// console.log(fs);


// console.log("starting");
// fs.writeFileSync("harry.txt","Harry is good boy")  //! this is synchronous means block code , line wise excution happen bad method for writing code 


fs.writeFile("harry2.txt", "ansh is good boy never cheat his parents", (e) => {
    console.log("end"); //asynchronous method parralel work
    // console.log(e);
    fs.readFile("harry2.txt", (error, data) => {
        console.log(error, data.toString());
    })
})  //! don't make it callback hell
console.log("ending");

//! this is first callback hell example


fs.appendFile("harry2.txt", " This text is appended", (e, d) => {
    console.log(e);
})

fs.readFile("harry2.txt", (e, d) => {
    console.log(d.toString());
})

// async function temp() {
//  //! if type is module then we will use await without async rapper but here is commonJs
//     let a = await fs.readFile("harry2.txt")
//     console.log(a.toString());
// }

// temp()