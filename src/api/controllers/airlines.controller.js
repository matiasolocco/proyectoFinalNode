/*const Airline = require("../models/airline.model")
const addAirline = async (req, res) => {
    try {
        console.log(req.body)
        const newAirline = new Airline(req.body)
        const findAirline = await Airline.find({ name: req.body.name })
        console.log(findAirline)
        if (findAirline.length !== 0) {
            return res.json({ message: "Esta ya está registrada" })
        }
        const createdAirline = await newAirline.save();
        return res.json(createdAirline)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
const selectAirline = async (req, res) => {
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
const updateAirline = async (req, res) => {
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
module.exports = {addAirline,selectAirline, updateAirline }*/