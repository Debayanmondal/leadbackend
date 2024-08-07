import express from "express";
const router = express.Router();
const userController = require('../controller/userController');

// Route to get all userName where role is Lead Owner
router.get('/lead-owners', userController.getLeadOwners);

module.exports = router;
