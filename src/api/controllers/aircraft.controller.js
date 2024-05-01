const Aircraft = require('../models/aircraft.model');

//1º endpoint CRUD (Create) --> añadir nuevos aviones
//Prueba postman ruta aircraft/add: OK
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

//2º endpoint CRUD (Read) --> buscar aviones
//Prueba postman ruta aircraft/select: OK
const selectAircraft = async (req, res) => {
  const aircrafts = await Aircraft.find();
  return res.status(200).json(aircrafts)
}
const selectOneAircraft = async (req, res) => {
  try {
      const { id } = req.params;
      const findAicraft = await Aircraft.findOne({ _id: id })
      return res.status(200).json(findAicraft)

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

module.exports = {addAircraft, selectAircraft, selectOneAircraft, updateAircraft, deleteAircraft};
