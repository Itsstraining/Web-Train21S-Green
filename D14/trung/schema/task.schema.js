const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
     title:String,
     content:String,
     createDate:String,
     deadline:Number,
     priorty:Number,
});

module.exports = taskSchema;