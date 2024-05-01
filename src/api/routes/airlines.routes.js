const express = require("express");
const router = express.Router();

const { addAirline, selectAirline, updateAirline, deleteAirline} = require("../controllers/airlines.controller")


router.post("/add", addAirline);
router.get("/select", selectAirline);
router.put("/update/:id", updateAirline);
router.delete("/delete/:id", deleteAirline);


module.exports = router;