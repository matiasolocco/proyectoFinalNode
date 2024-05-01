const express = require("express");
const router = express.Router();

const {addAircraft, selectAircraft, updateAircraft, deleteAircraft, selectOneAircraft} = require("../controllers/aircraft.controller")

router.post("/add", addAircraft);
router.get("/select", selectAircraft);
router.get("/selectone/:id", selectOneAircraft);
router.put("/update/:id", updateAircraft);
router.delete("/delete/:id", deleteAircraft);

module.exports = router;
