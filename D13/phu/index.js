const express = require('express')
const app = express()
const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:admin@cluster0.acsrb.mongodb.net/timetabledb?retryWrites=true&w=majority';



async function connectionToMongo() {
    return new Promise((solve, reject) => {
        mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const db = mongoose.connection;

        db.on("error", (err) => {
            reject(err);
        })

        db.once("open", () => {
            console.log("Connect Succesfully!")
            solve(db);
        })

    })
}

async function main() {
    try {
        let db = await connectionToMongo();
        app.listen(80, "0.0.0.0", () => {
            console.log("Server is turn on")
        })

        const timetableSchema = new mongoose.Schema({
            name: String,
            content: String,
            dateStart: Number,
            dateEnd: Number,
            status: String
        })
        
        const timeTable = mongoose.model("timeTable", timetableSchema);
    } catch (err) {
        console.error(err)
    }
}


main()