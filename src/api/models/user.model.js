const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    lastname: { type: String, require: true },
    //Establezco la relacion entre user y los aviones (Aircraft) en los que ha volado
    aircraft: [{ type: Schema.ObjectId, ref: 'aircraft' }], 
    email: { type: String, require: true },
    password: { type: String, require: true },
    role: {
      type: String,
      default: 'user',
      enum: ['admin', 'user'],
    } 
  },
  {
    collection: 'user',
  }
);
const User = mongoose.model('user', userSchema);
module.exports = User;
