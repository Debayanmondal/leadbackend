import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
//const bodyParser = require("body-parser");
import leadRoutes from "./routes/leadRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDBURI;

// MongoDB connection
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}

// Routes
app.use("/api/leads", leadRoutes);
app.use('/api/users', userRoutes);
app.use('/api/sources', sourceRoutes);
app.use('/api/industries', industryRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
