const express = require("express");
const router = express.Router();

const {addAircraft, selectAircraft, updateAircraft, deleteAircraft} = require("../controllers/aircraft.controller")

router.post("/add", addAircraft);
router.get("/select", selectAircraft);
//router.get("/selectpet/:id", selectOnePet)
router.put("/update/:id", updateAircraft)
router.delete("/delete/:id", deleteAircraft)

module.exports = router;
