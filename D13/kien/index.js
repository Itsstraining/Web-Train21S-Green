const express = require("express");
const app = express();
const mongoose = require("mongoose");



/**
 * @returns {Promise <mongoose.Connection}
 */

async function conectionToDB() {
    return new Promise((resolve, reject) => {
        const connectionString = "mongodb+srv://admin:admin@cluster0.oi6pz.mongodb.net/todoapp?retryWrites=true&w=majority"
        mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
        });

        const db = mongoose.connection;

        db.on("error", (err) => {
            reject(err);
        });
        db.once("open", () => {
            console.log("connect success");
            resolve(db);
        });
    });
}

async function main() {
    try {
        let db = await conectionToDB();
        app.listen(1919, "0.0.0.0", () => {
            console.log("cíu pé")
        });

        const taskSchema = new mongoose.Schema({
            name: String,
            content: String,
            createdDate: Number,
            deadline: Number,
            status: String,
        });

        const Task = mongoose.model("Task", taskSchema);

        const task1 = new Task({
            name: "Đi chợ",
            content: "Đi mua đồ ăn",
            createdDate: Date.now(),
            deadline: Date.now() + 1000 * 60 * 60,
            status: "Todo", 
        });

        await task1.save();
    } catch (err) {
        console.error(err);
    }
}
main();