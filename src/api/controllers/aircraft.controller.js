const Aircraft = require('../models/aircraft.model');

const addAircraft = async (req, res) => {
  try {
    console.log(req.body);
    const newAircraft = new Aircraft(req.body);
    const createdAircraft = await newAircraft.save();
    return res.json(createdAircraft);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};


const selectAircraft = async (req, res) => {
  const aircrafts = await Aircraft.find();
  return res.status(200).json(aircrafts)
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
      const petBody = new Aircraft(req.body)
      aircraftBody._id = id;
      const updateAircraft = await Aircraft.findByIdAndUpdate(id, aircraftBody, { new: true })
      console.log(updateAircraft)
      if (!updateAircraft) {
          return res.status(404).json({ message: "Aircraft no existe" })
      }
      return res.status(200).json(updateAircraft)

  } catch (error) {
      console.log(error)
      return res.status(500).json(error)
  }

}

const deleteAircraft = async (req, res) => {
  try {
      const id = req.params.id;
      const deleteAircraft = await Aircraft.findByIdAndDelete(id);
      if (!deleteAircraft) {
          return res.status(404).json({ message: "This aircraft does not exists" })
      }
      return res.status(200).json(deleteAircraft)
  } catch (error) {
      console.log(error)
      return res.status(500).json(error)
  }

}

module.exports = {addAircraft, selectAircraft, updateAircraft, deleteAircraft};
