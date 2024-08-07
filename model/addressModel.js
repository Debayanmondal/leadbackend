const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the address schema
const addressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true }
});

// Define the Address model
const Address = mongoose.model('Address', addressSchema);

// Export the Address model
module.exports = Address;
