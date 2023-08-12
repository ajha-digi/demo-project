import express from "express";
import multer from "multer";
import { getAllPagesByRoute } from "../controllers/pageController";
import { hashPassword } from "../middlewares/hashPassword";
import { validateRegistration } from "../middlewares/validateRegistration";
import { authenticateUser } from "../middlewares/authMiddleware";
import { registerUser, loginUser } from "../controllers/userController";
import { uploadFile } from "../controllers/uploadController";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/pages/:route", getAllPagesByRoute);
router.post("/register", hashPassword, validateRegistration, registerUser);
router.post("/login", loginUser);
router.post(
  "/upload",
  authenticateUser,
  upload.single("image"), // 'image' is the name of the field in the form
  uploadFile
);


export default router;
