const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    database: "security",
    user: "root",
    password: "azie122333",
    multipleStatements: true,
});

module.exports = pool;
