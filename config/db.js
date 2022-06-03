const { createPool } = require("mysql");

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'busroute'
});

module.exports = pool;