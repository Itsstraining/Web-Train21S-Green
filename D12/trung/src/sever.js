const { response , request } = require('express');
const express = require('express')
const database = require('./database');
const itemdetail = require('./models/item-detail.model');
const bodyParser = require('body-parser');
const app = express();
let db = new database();

app.use(bodyParser.json());

app.get("/items", (request, response) => {
    const { id } = request.query;
    if (id != undefined) {
        response.send({
            items: db.getItembyid(id)
        });
        return;
    }
    response.send({
        items: db.getAllitems()
    });
});
app.post("/items",(request , response)=>{
    const{id , name , price , inStock} = request.body;
    try{
        db.addItems(new itemdetail(id , name , price , inStock));
        response.status(201).send({
            message:`Item [${id}] was created`,
            item:`${db.item[0].name}`
        })
    }
    catch(erro){
        response.status(400).send({
            message: `Invaild item`
        });
    }
    app.delete("/items", (request, response) => {
        const { id } = request.query;
        if (id != undefined) {
            response.send({
                items: db.delectItembyid(id)
            });
            return;
        }
    });
})
module.exports = app;