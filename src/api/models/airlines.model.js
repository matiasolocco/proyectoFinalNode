const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const airlineSchema = new Schema(
  {
    name: { type: String, require: true },//Nombre de la aerolinea
    country: { type: String, require: true  },//Pais o paises en donde tiene su base
    //Aqui podemos generar una tercera relación con las alianzas, por ejemplo Sky Team, One World, Star Alliance, las cuales englogan a varias aerolineas
  },
  {
    collection: 'airlines',
  }
);
const Airline = mongoose.model('airlines', airlineSchema);
module.exports = Airline;