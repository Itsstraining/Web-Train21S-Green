const mongoose = require('mongoose');
const taskSchema = require('../schema/task.schema')
class Datbase{
    constructor(connectionString){
        /**
         * @type {String}
         */
         this.connectionString= connectionString;
        /**
         * @type {mongoose.Model<any>}
         */
        this.Task =mongoose.model("tasks", taskSchema);

    }
    async connect()
    {
        return new Promise((resolve,reject)=>{
            mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
        });
    }
}
module.exports = Datbase;