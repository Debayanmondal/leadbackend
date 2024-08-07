const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the industry schema
const industrySchema = new Schema({
  industryName: { type: String, required: true } // e.g., Software, Manufacturing, Healthcare
});

// Define the Industry model
const Industry = mongoose.model('Industry', industrySchema);

// Export the Industry model
module.exports = Industry;
