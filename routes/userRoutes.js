import express from "express";
const router = express.Router();
const userController = require('../controller/userController.js');

// Route to get all userName where role is Lead Owner
router.get('/lead-owners', userController.getLeadOwners);

module.exports = router;
