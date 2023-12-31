import dotenv from "dotenv";
// Load environment variables from .env file
dotenv.config();

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

const { JWT_SECRET } = process.env;

export const registerUser = async (req, res) => {
  try {

    const { username, name, email } = req.body;
    const newUser = new User({
      name,
      email,
      username,
      password: req.hashedPassword,
    });

    await newUser.save();
    // Create and sign a JWT token
    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ message: "User registered successfully", token, user: username});
  } catch (error) {
    res.status(500).json({ error: "An error occurred while registering" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(String(password), user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token, user: username });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while logging in" });
  }
};
