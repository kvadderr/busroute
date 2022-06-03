const router = require("express").Router();

const {
    AddCity,
    GetCity,
    GetOneCity,
    DeleteCity,
    GetPoint,
    AddPoint
} = require("./controller");

router.get("/", GetCity);
router.get("/:id_city", GetOneCity);
router.post("/", AddCity);
router.post("/point", AddPoint);
router.delete("/:id_city", DeleteCity);
router.get("/point/:id_city", GetPoint);

module.exports = router;