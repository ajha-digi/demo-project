import express from "express";
import { hashPassword } from "../middlewares/hashPassword";
import { validateRegistration } from "../middlewares/validateRegistration";
import { registerUser, loginUser } from "../controllers/userController";


const router = express.Router();

router.post("/register", hashPassword,validateRegistration, registerUser);
router.post("/login", loginUser);

export default router;
