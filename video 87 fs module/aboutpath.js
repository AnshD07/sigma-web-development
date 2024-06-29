import path from "path"


let myPath = "E:\\Sigma Web Development Course For Ansh\\video 87 fs module\\ansh.txt"


console.log(path.extname(myPath));

console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.isAbsolute(myPath));


console.log(path.join("c:/", "programs\\ansh.html"));  //! it will join the two path no matter there is backslash or forwardslash
