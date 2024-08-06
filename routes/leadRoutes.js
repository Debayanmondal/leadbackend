import express from "express";
import { leadController } from "../controller/leadController.js";
const router = express.Router();
// Route to create a new lead
router.post("/", leadController.createLead);

export default router;
