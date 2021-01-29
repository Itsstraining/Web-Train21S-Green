const { request } = require('express');
const { Mongoose, connect } = require('mongoose');
const tasKchema = require ('./schema/task.schema')


class database{

    constructor(connectionString){
        /**
         * @ Type {string}
         */
        this.connectionString = connectionString;
        /**
         * @ Tyoe {mongoose.Model.<any>}
         */
        this.Task = Mongoose.model("task",tasKchema);
    }
}

async connect(){
    return new Promise((resolve,request)) => {

    }

}