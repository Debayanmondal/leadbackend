const Source = require('../model/sourceModel.js');

// Get all sourceName
exports.getAllSources = async (req, res) => {
  try {
    const sources = await Source.find({}).select('sourceName');
    res.status(200).json(sources);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
