const Industry = require('../model/industryModel.js');

// Get all industryName
exports.getAllIndustries = async (req, res) => {
  try {
    const industries = await Industry.find({}).select('industryName');
    res.status(200).json(industries);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
