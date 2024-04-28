const express = require("express");
const router = express.Router();

const {addAirline,selectAirline, updateAirline } = require("../controllers/airline.controller")

router.post("/add", addAirline);
router.get("/select", selectAirline);
//router.get("/selectpet/:id", selectOnePet)
router.put("/update/:id", updateAirline)
//router.delete("/delete/:id", deletePet)

module.exports = router;
