const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aircraftSchema = new Schema({
  airline: { type: String, require: true },
  manufacturer: { type: String, require: true },
  model: { type: String, require: true },
  series: { type: String, require: true },
  year: { type: Number, require: true },
  image: { type: String, default: "" }
},
{
  collection: 'aircraft',
});

const Aircraft = mongoose.model('aircraft', aircraftSchema);
module.exports = Aircraft;
