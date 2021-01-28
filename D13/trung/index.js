const express = require('express')
const app = express();
const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://trungtan0:trungtan0@cluster0.vbkfr.mongodb.net/Todolist?retryWrites=true&w=majority'


/**
 * @returns {Promise<mongoose.Connection>}
 */
async function connectToDB() {
    return new Promise((resolve, reject) => {
        mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

        const db = mongoose.connection;
        db.on('error',(err)=>{
            reject(err);

        });
        db.once('open', () =>{
            console.log('Connect successfully')
            resolve(db)
        });
        

    });
    



}
async function main() {
    try{
        let db = await connectToDB();
        app.listen(8080, "0.0.0.0", ()=>{
            console.log("sever is running")
        })
        const kittySchema = new mongoose.Schema({
            type:String,
            content:String,
            createDtate:Number,
            deadline:Number,
            status:String,
          });
       const Task = mongoose.model("task",taskSchema);
    }catch(err){
        console.error(err)
    }
}
main()