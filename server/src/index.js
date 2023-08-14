import express from "express";
import path from "path";
import dotenv from "dotenv";
// Load environment variables from .env file
dotenv.config();
const cors = require('cors');
import { connectDB } from "./config/db";
import userRoutes from './routes/userRoutes';

const app = express();
const port = process.env.SERVER_PORT || 4000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "src/public")));

// Allow requests from specific origins (e.g., http://localhost:3000)
const allowedOrigins = ['http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

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
