

const { response, request } = require('express');
const express = require('express');
const app = express ();

app.get ("/tinhtong", (request,response) => {
    let {num1,num2} = request.query;
   tong = parseInt(num1) + parseInt(num2);
    response.send(""+tong)
})
app.listen (8080,() => {
    console.log ("server is running");
})

app.get ("/home", (request,request) => {
    console.log= ("hellu");
})


