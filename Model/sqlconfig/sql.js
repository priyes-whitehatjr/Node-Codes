require('custom-env').env(true);
const mysql = require('mysql');


module.exports = {
    name: process.env.NODE_ENV,
    hostname : process.env.HOST,
    port: process.env.PORT,
    db: {
        get : mysql.createConnection({
            host     : process.env.HOST,
            user     : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DATABASE
		})
    }
}