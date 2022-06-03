const pool = require("../../config/db");

module.exports = {
    
    getCity: callback => {
        pool.query("SELECT * FROM city",
        (error, results, fields) => {
            if (error){
                callback(error);
            }
            return callback(null, results);
        })
    },

    getOneCity: (id_city, callback) => {
        pool.query("SELECT * FROM city WHERE id_city = ?",
        [
            id_city
        ],
        (error, results, fields) => {
            if (error){
                callback(error);
            }
            return callback(null, results);
        })
    },

    deleteCity: (id_city, callback) => {
        pool.query("DELETE FROM city WHERE id_city = ?",
        [
            id_city
        ],
        (error, results, fields) => {
            if (error){
                callback(error);
            }
            return callback(null, results);
        })
    },

    addCity: (data, callback) => {
        pool.query("INSERT INTO city (name, lat, lng) VALUES (?,?,?)",
        [
            data.name,
            data.lat,
            data.lng
        ],
        (error, results, fields) => {
            if (error){    
                callback(error)
            }
            return callback(null, results);
        }
        )
    },

    getPoint: (id_city, callback) => {
        pool.query("SELECT * FROM point WHERE id_city = ?",
        [
            id_city
        ],
        (error, results, fields) => {
            if (error){
                callback(error);
            }
            return callback(null, results);
        })
    },

    addPoint: (data, callback) => {
        pool.query("INSERT INTO point (name, lat, lng, id_city) VALUES (?,?,?,?)",
        [
            data.name,
            data.lat,
            data.lng,
            data.id_city
        ],
        (error, results, fields) => {
            if (error){
                callback(error);
            }
            return callback(null, results);
        })
    },

    

}
