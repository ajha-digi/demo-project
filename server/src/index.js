import express from "express";
import path from "path";
import dotenv from "dotenv";
// Load environment variables from .env file
dotenv.config();

import { connectDB } from "./config/db";
import userRoutes from './routes/userRoutes';

const app = express();
const port = process.env.SERVER_PORT || 4000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "src/public")));
app.use(express.json());

// Define your routes and middleware here
app.use('/user', userRoutes);

// Start the server
(async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port http://localhost/${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
})();
