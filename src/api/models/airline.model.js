const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const airlineSchema = new Schema(
  {
    name: { type: String, require: true },
    country: { type: String, require: true  },
    image: { type: String, default: "" }
    
  },
  {
    collection: 'airline',
  }
);
const Airline = mongoose.model('airline', airlineSchema);
module.exports = Airline;
