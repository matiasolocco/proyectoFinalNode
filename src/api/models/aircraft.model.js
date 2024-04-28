const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aircraftSchema = new Schema({
  manufacturer: { type: String, require: true },
  model: { type: String, require: true },
  series: { type: String, require: true },
  year: { type: Number, require: true },
});

const Aircraft = mongoose.model('aircraft', aircraftSchema);
module.exports = Aircraft;
