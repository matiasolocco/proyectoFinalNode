const Aircraft = require('../models/aircraft.model');

const addAircraft = async (req, res) => {
  try {
    console.log(req.body);
    const newAircraft = new Aicraft(req.body);
    const createdAircraft = await newAircraft.save();
    return res.json(createdAircraft);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = { addAircraft };
