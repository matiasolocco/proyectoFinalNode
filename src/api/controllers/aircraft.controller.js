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


const selectAircraft = async (req, res) => {
  const airlines = await Airline.find();
  return res.status(200).json(airlines)
}
const selectOnePet = async (req, res) => {
  try {
      const { id } = req.params;
      const findPet = await Pet.findOne({ _id: id })
      return res.status(200).json(findPet)

  } catch (error) {
      console.log(error)
      return res.status(500).json(error)
  }
}
const updateAircraft = async (req, res) => {
  try {
      const { id } = req.params;
      const petBody = new Airline(req.body)
      airlineBody._id = id;
      const updateAirline = await Airline.findByIdAndUpdate(id, airlineBody, { new: true })
      console.log(updateAirline)
      if (!updateAirline) {
          return res.status(404).json({ message: "Airline no existe" })
      }
      return res.status(200).json(updateAirline)

  } catch (error) {
      console.log(error)
      return res.status(500).json(error)
  }

}

module.exports = {addAircraft, selectAircraft, updateAircraft, deleteAircraft};
