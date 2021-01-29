const config = require('./config');
const sever = require('./sever')

 sever.listen(config.PORT,config.HOST,()=>{
     console.log(`Sever is running on ${config.HOST}:${config.PORT}`);
 });

