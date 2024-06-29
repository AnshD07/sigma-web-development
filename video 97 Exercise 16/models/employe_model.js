import mongoose from "mongoose";

const employee_schema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});


export const Employee = mongoose.model('Employees', employee_schema);

// this is name export


// module.exports = Employee //! use if type is commonjs 