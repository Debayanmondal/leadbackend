const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the contact method schema
const contactMethodSchema = new Schema({
  method: { type: String, required: true } // e.g., Email, Phone, Skype
});

// Define the ContactMethod model
const ContactMethod = mongoose.model('ContactMethod', contactMethodSchema);

// Export the ContactMethod model
module.exports = ContactMethod;
