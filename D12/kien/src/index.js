const app = require ("./server");
const config = require ("./config");
const { HOST } = require("./config");

app.listen (config.PORT,config.HOST,() => {
    console.log (`server is on ${config.HOST}:${config.PORT}`);
});