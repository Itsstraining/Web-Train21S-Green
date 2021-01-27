const express = require ("express");
const database = require ("./Database");
const app = express();

const db = new database;

app.get ("/item", (require,response)=>{
    response.send ({
        item:db.getAllItem
    })
})
module.exports = app;
