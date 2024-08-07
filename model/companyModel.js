const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the company schema
const companySchema = new Schema({
  companyName: { type: String, required: true },
  website: { type: String },
  annualRevenue: { type: Number },
  numberOfEmployees: { type: Number },
  industryId: { type: Schema.Types.ObjectId, ref: 'Industry', required: true } // Reference to industry collection
});

// Define the Company model
const Company = mongoose.model('Company', companySchema);

// Export the Company model
module.exports = Company;
