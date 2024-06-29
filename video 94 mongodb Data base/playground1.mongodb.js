
// Select the database to use.
use('sigma_database');

// Insert a 10 documents into the courses collection.
db.getCollection('courses').insertMany([
  {
    "name": "Java",
    "price": "20000",
    "instructor": "harry"
  },
  {
    "name": "Python",
    "price": "25000",
    "instructor": "sally"
  },
  {
    "name": "C++",
    "price": "18000",
    "instructor": "mark"
  },
  {
    "name": "JavaScript",
    "price": "22000",
    "instructor": "jane"
  },
  {
    "name": "Ruby",
    "price": "21000",
    "instructor": "alex"
  },
  {
    "name": "Swift",
    "price": "23000",
    "instructor": "nina"
  },
  {
    "name": "PHP",
    "price": "17000",
    "instructor": "john"
  },
  {
    "name": "Go",
    "price": "24000",
    "instructor": "rita"
  },
  {
    "name": "Rust",
    "price": "26000",
    "instructor": "karl"
  },
  {
    "name": "Kotlin",
    "price": "19000",
    "instructor": "leo"
  }
]
);

console.log("done inserting the data");
