// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip


const fs = require('fs-extra');
const path = require("path")

async function main() {

    let directory = path.join(__dirname, "/temp")
    const files = await fs.readdirSync(directory);

    let extension_list = [".xlsx"]
    files.forEach(file => {
        if (extension_list.includes(path.extname(file)) === false) {
            extension_list.push(path.extname(file))
        }
    });

    if (fs.readdirSync(__dirname).includes("output") == false) {
        await fs.mkdir("output")
    }

    extension_list.forEach(async (e) => {
        await fs.mkdir(`output/${e.slice(1,)}`, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Directory created successfully!');
            }
        });
        // console.log(e.slice(1,))
    });

    files.forEach(async (e) => {
        console.log(e);
        await fs.move(`temp/${e}`, `output/${path.extname(e).slice(1,)}/${e}`)
    })
}
main()
// fs.move("temp/day 14(1).png", "temp2/day 14(1).png")
