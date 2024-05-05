const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aircraftSchema = new Schema(
  {
  manufacturer: { type: String, require: true },//Fabricante
  model: { type: String, require: true },//Modelo de avion
  series: { type: String, require: true },//serie o version
  year: { type: Number, require: true },// Año de fabricacion
  airline: [{ type: Schema.ObjectId, ref: 'airlines' }],//RELACION CON LA COLECCION AIRLINES
},
{
  collection: 'aircraft',
});

const Aircraft = mongoose.model('aircraft', aircraftSchema);
module.exports = Aircraft;
