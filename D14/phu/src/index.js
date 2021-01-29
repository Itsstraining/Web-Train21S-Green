const config = require('./config');
const server = require('./server')
const Database = require('./database')

const db = new Database()





async function main() {
    await db.connectionToMongoDB();
    server.listen(config.POST, config.HOST, () => {
        console.log(`Server is running on ${config.HOST}:${config.POST}`);
    })
}


main();