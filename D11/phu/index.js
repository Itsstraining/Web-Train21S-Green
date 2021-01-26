const { request, response } = require('express');
const express = require('express');
const app = express();

app.get("/sum", (request, response) => {
    response.send(
        `<h1>Helo may cung</h1>`
    )
})

app.listen(80,"0.0.0.0", () => {
    console.log("mine is online")
})

