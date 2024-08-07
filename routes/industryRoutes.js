import express from "express";
const router = express.Router();
const industryController = require('../controller/industryController');

// Route to get all industryName
router.get('/industries', industryController.getAllIndustries);

module.exports = router;
