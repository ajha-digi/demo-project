export const validateRegistration = (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name && !email) {
    return res
      .status(400)
      .json({ error: "Name or email is required for registration" });
  }

  if (!name) {
    return res.status(400).json({ error: "Name is required for registration" });
  }

  if (!email) {
    return res
      .status(400)
      .json({ error: "Email is required for registration" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  req.body.name = name;
  req.body.email = email;
  next();
};

