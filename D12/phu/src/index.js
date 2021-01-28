const { HOST } = require("./config");

const app = require('./server')
const config = require('./config')

app.listen(config.PORT, config.HOST, () => {
    console.log(`Mine-server is running on ${config.HOST}:${config.PORT}`);
})