const sql = require("mysql");
const dotenv = require('dotenv');
dotenv.config();

const conn = sql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME
});

// conn.connect((err) => {
//     if (err)
//         console.log("Error in connection...");
// });

module.exports = conn;