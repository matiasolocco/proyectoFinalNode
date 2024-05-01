const express = require("express");
const router = express.Router();

const {addAircraft, selectAircraft, updateAircraft, deleteAircraft, addFavorite} = require("../controllers/aircraft.controller")

router.post("/add", addAircraft);
router.get("/select", selectAircraft);
router.get("/addfavorite/:id", addFavorite);
router.put("/update/:id", updateAircraft);
router.delete("/delete/:id", deleteAircraft);

module.exports = router;
