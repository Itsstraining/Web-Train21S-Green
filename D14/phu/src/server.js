const express = require('express')
const body = require('body-parser')
const config = require('./config');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())




module.exports = app;