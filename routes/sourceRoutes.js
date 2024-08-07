import express from "express";
const router = express.Router();
const sourceController = require('../controller/sourceController');

// Route to get all sourceName
router.get('/sources', sourceController.getAllSources);

module.exports = router;
