const { get } = require("express/lib/response");
const {
    getRoute,
    addRoute,
    getType,
    getTransport,
    addTransport,
    getPoint,
    addPointRoute,
    getPointRoute,
    addTime,
    getTime
} = require("./service");

module.exports = {
    GetRoute: (req, res) => {
       const id_city = req.params.id_city;
        getRoute(id_city, (err, results) => {
            if (err){
                console.log(err);
            }
            if (!results) {
                return res.status(500).json("Нет данных");
            } else {
                return res.json(results);
            }
        });
    },

    GetTransport: (req, res) => {
        const id_route = req.params.id_route;
        getTransport(id_route, (err, results) => {
             if (err){
                 console.log(err);
             }
             if (!results) {
                 return res.status(500).json("Нет данных");
             } else {
                 return res.json(results);
             }
         });
     },

     GetPoint: (req, res) => {
        const id_point = req.params.id_point;
        getPoint(id_point, (err, results) => {
             if (err){
                 console.log(err);
             }
             if (!results) {
                 return res.status(500).json("Нет данных");
             } else {
                 return res.json(results);
             }
         });
     },

     GetTime: (req, res) => {
        const id_point = req.params.id_route;
        getTime(id_point, (err, results) => {
             if (err){
                 console.log(err);
             }
             if (!results) {
                 return res.status(500).json("Нет данных");
             } else {
                 return res.json(results);
             }
         });
     },

     GetPointRoute: (req, res) => {
        const id_point = req.params.id_route;
        getPointRoute(id_point, (err, results) => {
             if (err){
                 console.log(err);
             }
             if (!results) {
                 return res.status(500).json("Нет данных");
             } else {
                 return res.json(results);
             }
         });
     },

    GetType: (req, res) => {
        getType((err, results) => {
            if (err){
                 console.log(err);
             }
             if (!results) {
                 return res.status(500).json("Нет данных");
             } else {
                 return res.json(results);
             }
         });
     },

    AddRoute: (req, res) => {
        const body = req.body;
	    addRoute (body, (err, results) => {
            if (err){
                console.log(err);
            }
            return res.json(results);
        })
    },

    AddTransport: (req, res) => {
        const body = req.body;
	    addTransport (body, (err, results) => {
            if (err){
                console.log(err);
            }
            return res.json(results);
        })
    },

    AddPointRoute: (req, res) => {
        const body = req.body;
	    addPointRoute (body, (err, results) => {
            if (err){
                console.log(err);
            }
            return res.json(results);
        })
    },

    AddTime: (req, res) => {
        const body = req.body;
	    addTime (body, (err, results) => {
            if (err){
                console.log(err);
            }
            return res.json(results);
        })
    },
    
}