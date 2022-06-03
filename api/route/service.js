const pool = require("../../config/db");

module.exports = {
    
    getRoute: (id_city, callback) => {
        pool.query("SELECT * FROM route WHERE id_city = ?",
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

    getTransport: (id_route, callback) => {
        pool.query("SELECT t.id_transport, t.number, tt.name FROM transport t, type tt WHERE t.id_type = tt.id_type  AND  t.id_route = ?",
        [
            id_route
        ],
        (error, results, fields) => {
            if (error){
                callback(error);
            }
            return callback(null, results);
        })
    },

    getType: callback => {
        pool.query("SELECT * FROM type",
        (error, results, fields) => {
            if (error){
                callback(error);
            }
            return callback(null, results);
        })
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

    getPointRoute: (id_route, callback) => {
        pool.query("SELECT p.id_point, p.name FROM route_point r, point p WHERE r.id_point = p.id_point AND r.id_route = ?",
        [
            id_route
        ],
        (error, results, fields) => {
            if (error){
                callback(error);
            }
            return callback(null, results);
        })
    },


    getTime: (id_route, callback) => {
        pool.query("SELECT p.name, t.number, tr.time FROM transport_point tr, point p, transport t WHERE tr.id_point = p.id_point AND tr.id_transport = t.id_transport AND t.id_route = ?",
        [
            id_route
        ],
        (error, results, fields) => {
            if (error){
                callback(error);
            }
            return callback(null, results);
        })
    },

    
    addRoute: (data, callback) => {
        pool.query("INSERT INTO route (name, id_city) VALUES (?,?)",
        [
            data.name,
            data.id_city
        ],
        (error, results, fields) => {
            if (error){
                callback(error);
            }
            return callback(null, results);
        })
    },

    addTransport: (data, callback) => {
        pool.query("INSERT INTO transport (number, id_route, id_type) VALUES (?,?,?)",
        [
            data.number,
            data.id_route,
            data.id_type
        ],
        (error, results, fields) => {
            if (error){
                callback(error);
            }
            return callback(null, results);
        })
    },

    addPointRoute: (data, callback) => {
        pool.query("INSERT INTO route_point (id_route, id_point) VALUES (?,?)",
        [
            data.id_route,
            data.id_point
        ],
        (error, results, fields) => {
            if (error){
                callback(error);
            }
            return callback(null, results);
        })
    },
    addTime: (data, callback) => {
        pool.query("INSERT INTO transport_point (id_transport, id_point, time) VALUES (?,?,?)",
        [
            data.id_transport,
            data.id_point,
            data.time
        ],
        (error, results, fields) => {
            if (error){
                callback(error);
            }
            return callback(null, results);
        })
    },

}
