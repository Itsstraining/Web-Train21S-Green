const server = require('./server');
const config = require('./config')
const {HOST} = require("./config")

server.listen(config.PORT,config.HOST, () =>{
    console.log('Server is running on ${config.HOST}:${config:PORT}');
})

const database = require('./database')