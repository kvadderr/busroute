const router = require("express").Router();

const {
    GetRoute,
    AddRoute,
    GetType,
    GetTransport,
    AddTransport,
    GetPoint,
    AddPointRoute,
    GetPointRoute,
    AddTime,
    GetTime
} = require("./controller");

router.get("/id_city/:id_city", GetRoute);
router.get("/type", GetType);
router.get("/transport/:id_route", GetTransport);
router.post("/", AddRoute);
router.post("/transport", AddTransport);
router.get("/point/:id_point", GetPoint);
router.get("/time/:id_route", GetTime);
router.get("/point_route/:id_route", GetPointRoute);
router.post("/point", AddPointRoute);
router.post("/time", AddTime);
module.exports = router;