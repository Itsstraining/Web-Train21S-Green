const app = require('./sever')
const config = require('./config')

app.listen(config.PORT,config.HOST,()=>{
    console.log(`Sever is running on ${config.HOST}:${config.PORT}`)
});