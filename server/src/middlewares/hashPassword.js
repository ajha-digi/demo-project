import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(String(req.body.password), saltRounds);
    req.hashedPassword = hashedPassword;
    next();
  } catch (error) {
    res.status(500).json({ error: 'Error hashing password' });
  }
};
