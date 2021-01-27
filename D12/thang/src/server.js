const express = require("express");
const app = require("./database");
const database = require("./database")

const app = express();
const db = new database();

app.get("/items",(req,res)=> {
    const {id} = req.query;
    if(id!= undefined){
        res.send ({
            item:db.getItemById(id)
        });
    }
    res.send ({
        item:db.getALLItems(),

    });
    

});


app.post("/items",(req,res)=>{
    const{id, name, price, instock, discount} = req.body;
    try{
        db.createItem(new ShopItem(id,name,price,instock,discount));
        res.status(201).send({
            message:`Item [${id}] was created`
        });
    } catch(err) {
        res.status(400).send({
            message: "invaled item",
        });
    }
});
module.exports = app;