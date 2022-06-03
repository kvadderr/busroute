const {
    getCity,
    addCity,
    getPoint,
    addPoint,
    getOneCity,
    deleteCity
} = require("./service");

module.exports = {
    GetCity: (req, res) => {
       
        getCity((err, results) => {
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

    GetOneCity: (req, res) => {
       const id_city = req.params.id_city
        getOneCity(id_city, (err, results) => {
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

    DeleteCity: (req, res) => {
        const id_city = req.params.id_city
         deleteCity(id_city, (err, results) => {
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

    AddCity: (req, res) => {
        const body = req.body;
	    addCity (body, (err, results) => {
            if (err){
                console.log(err);
            }
            return res.json(results);
        })
    },

    GetPoint: (req, res) => {
        const id_city = req.params.id_city;
        getPoint(id_city, (err, results) => {
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

    AddPoint: (req, res) => {
        const body = req.body;
	    addPoint (body, (err, results) => {
            if (err){
                console.log(err);
            }
            return res.json(results);
        })
    },
}