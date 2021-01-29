const mongoose = require('mongoose')
const studentSchema = require('../schema/student.schema')

const connectionString = 'mongodb+srv://admin:admin@cluster0.acsrb.mongodb.net/<dbname>?retryWrites=true&w=majority';

class Database {

    async connectionToMongoDB() {
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

}

module.exports = Database;