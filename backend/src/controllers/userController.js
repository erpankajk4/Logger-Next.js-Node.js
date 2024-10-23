const User = require('../models/userModel');

const userController = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find().select('-password'); // Exclude passwords
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
  },

  async getUser(req, res) {
    try {
      const userId = req.params.id;
// src/controllers/userController.js (continued)
const user = await User.findById(userId).select('-password'); // Exclude password

if (!user) {
  return res.status(404).json({ message: 'User not found' });
}

return res.status(200).json({ user });
} catch (error) {
return res.status(500).json({ message: 'Error retrieving user', error: error.message });
}
},
};

module.exports = userController;

