//! CRUD Operation in mongodb

use("CrudDb")

// console.log(db);

//!CREATE

// db.createCollection("courses")


// db.courses.insertOne({
//     name: "raj dholakiya",
//     goal: "big goal",
//     achievment: "acieve bigger than ansh"
// })

// db.courses.insertMany([
//     {
//         "name": "Java",
//         "price": "20000",
//         "instructor": "harry"
//     },
//     {
//         "name": "Python",
//         "price": "25000",
//         "instructor": "sally"
//     },
//     {
//         "name": "C++",
//         "price": "18000",
//         "instructor": "mark"
//     },
//     {
//         "name": "JavaScript",
//         "price": "22000",
//         "instructor": "jane"
//     },
//     {
//         "name": "Ruby",
//         "price": "21000",
//         "instructor": "alex"
//     },
//     {
//         "name": "Swift",
//         "price": "23000",
//         "instructor": "nina"
//     },
//     {
//         "name": "PHP",
//         "price": "17000",
//         "instructor": "john"
//     },
//     {
//         "name": "Go",
//         "price": "24000",
//         "instructor": "rita"
//     },
//     {
//         "name": "Rust",
//         "price": "26000",
//         "instructor": "karl"
//     },
//     {
//         "name": "Kotlin",
//         "price": "19000",
//         "instructor": "leo"
//     }
// ]
// )

//! READ
// let a = db.courses.find({ name: "raj dholakiya" })
// console.log(a);
// console.log(a.count());
// console.log(a.toArray());

// let b = db.courses.findOne({ name: "raj dholakiya" })
// if not get then return null
// console.log(b);


//! UPDATE

// db.courses.updateOne({ name: "raj dholakiya" }, { $set: { name: "raj hareshbhai dholakiya" } })


// db.courses.updateMany()
//todo==> work like this

//! DELETE

// db.courses.deleteOne({
//     name: "ram verma"
// })
//! it will delete whole data

// db.courses.deleteMany()
//? work similar as name



//! must learn ==> https://www.mongodb.com/docs/manual/reference/operator/



// let x = db.courses.find({price:{$eq:"25000"}})  //!price equal to number
// let x = db.courses.find({price : {$gt:"24000"}})  //!price greater than number
// let x = db.courses.find({price : {$gte : "26000"}}) //!greter than equalto
// let x = db.courses.find({price : {$lt : "20000"}})
// let x = db.courses.find({price : {$lte : "20000"}})
// let x = db.courses.find({price : {$lte : "20000"}})

// let x = db.courses.find({price : {$in : ["20000" , "123123"]} })
let x = db.courses.find({ price: { $ne: "20000" } }) //!not equal to

// console.log(x);


//! logical operator
// let y = db.courses.find({ $and: [{ price: { $gt: "20000" } }, { price: { $lt: "25000" } }] })
// let y = db.courses.find({ $or: [{ price: { $gt: "20000" } }, { price: { $lt: "25000" } }] })
// let y = db.courses.find({price:{$not : {$eq : "20000"}}})

// console.log(y);