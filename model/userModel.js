const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the user schema
const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true } // e.g., Lead Owner
});

// Define the User model
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
