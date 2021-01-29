const mongoose = require ('mongoose')


const tasKchema = new.mongoose.schema({
    title:String,
    content:String,
    createdDate:Number,
    deadline:Number,
    priority:Number,

})

module.exports = tasKchema;