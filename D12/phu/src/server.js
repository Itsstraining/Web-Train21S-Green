const { request, response } = require('express');
const express = require('express')
const Database = require('./database');
const ItemProperties = require('./models/item-properties.model');
const bodyParser = require('body-parser')

const app = express();

const db = new Database();

app.use(bodyParser.json());

app.get("/items", (request, response) => {
    const { id } = request.query;
    if (id != undefined) {
        response.send({
            items: db.getItemsByID(id)
        });
        return;
    }
    response.send({
        items: db.getAllItems()
    });
});

app.post("/items", (request, response) => {
    const { id, name, price, inStock } = request.body;
    try {
        db.createItem(new ItemProperties(id, name, price, inStock))
        response.status(201).send({
            message: `Item [${id}] was created`
        })
    }
    catch (err) {
        response.status(400).send({
            message: `Invalid item`
        });

    }
});

app.delete("/items", (request, response) => {
    const { id } = request.query;
    if (id != undefined){
        response.send({
            items:db.deleteItemsByID(id)
        });
        return;
    }
});


module.exports = app;