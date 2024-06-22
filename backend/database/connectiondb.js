const mysql2 = require('mysql2/promise');

async function ConnectionDataBase(){
    const connection = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'blue_rental_db',
    })
    return connection
}

module.exports = {ConnectionDataBase}