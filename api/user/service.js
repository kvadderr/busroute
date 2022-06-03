const pool = require("../../config/db");

module.exports = {
    userLogin: (login, pass, callback) => {
        pool.query("SELECT * FROM users WHERE login = ? AND password = ?",
        [
            login,
            pass
        ],
        (error, results, fields) => {
            if (error){
                callback(error);
            }
            return callback(null, results);
        })
    },

    userRegister: (data, callback) => {
        pool.query("INSERT INTO users (login, password, id_city, id_role) VALUES (?,?,?,?)",
        [
            data.login,
            data.password,
            data.id_city,
            data.id_role
        ],
        (error, results, fields) => {
            if (error){    
                callback(error)
            }
            return callback(null, results);
        }
        )
    }
}
