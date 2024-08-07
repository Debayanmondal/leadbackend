const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the source schema
const sourceSchema = new Schema({
  sourceName: { type: String, required: true } // e.g., Website, Referral, Advertisement
});

// Define the Source model
const Source = mongoose.model('Source', sourceSchema);

// Export the Source model
module.exports = Source;
