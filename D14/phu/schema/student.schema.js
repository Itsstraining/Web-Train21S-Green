const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:String,
    code:String,
    Class:String,
    yearOfBirth:Number,
    priority:Number
})


module.exports = studentSchema;