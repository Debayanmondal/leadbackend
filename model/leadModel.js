import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
});

const leadSchema = mongoose.Schema(
  {
    leadImage: { type: String },
    leadOwner: { type: String, required: true },
    firstName: { type: String, required: true },
    title: { type: String },
    phone: { type: String },
    mobile: { type: String },
    leadSource: { type: String },
    industry: { type: String },
    annualRevenue: { type: Number },
    emailOptOut: { type: Boolean, default: false },
    company: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    fax: { type: String },
    website: { type: String },
    leadStatus: { type: String },
    numberOfEmployees: { type: Number },
    rating: { type: String },
    skypeID: { type: String },
    secondaryEmail: { type: String },
    twitter: { type: String },
    address: { type: addressSchema, required: true },
    description: { type: String },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;
