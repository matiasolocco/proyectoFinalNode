const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const airlineSchema = new Schema(
  {
    name: { type: String, require: true },
    country: { type: String, require: true  },
    
    
  },
  {
    collection: 'airlines',
  }
);
const Airline = mongoose.model('airlines', airlineSchema);
module.exports = Airline;