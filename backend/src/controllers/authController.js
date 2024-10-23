const authService = require("../services/authService");

const authController = {
  async register(req, res) {
    try {
      const userData = req.body;
      const { token, user } = await authService.register(userData);
      return res
        .status(201)
        .json({ message: "User registered successfully", token, user });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async login(req, res) {
    try {
      const credentials = req.body;
      const { token, user } = await authService.login(credentials);
      return res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};

module.exports = authController;
