const express = require("express");
const router = express.Router();

const { addAirline, selectAirline, selectOneAirline, updateAirline, deleteAirline} = require("../controllers/airlines.controller")


router.post("/add", addAirline);
router.get("/select", selectAirline);
router.get("/selectone/:id", selectOneAirline);
router.put("/update/:id", updateAirline);
router.delete("/delete/:id", deleteAirline);


module.exports = router;