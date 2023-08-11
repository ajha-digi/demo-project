import express from "express";
import path from "path";
import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 4000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "src/public")));

// Define your routes and middleware here
app.get("/", (req, res) => {
  res.send({ message: "Hello World !!!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
