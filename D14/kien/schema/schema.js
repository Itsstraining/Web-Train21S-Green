const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: String,
    content: String,
    createdDate: Number,
    deadline: Number,
    status: String,
});

module.exports = taskSchema;