const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authService = {
  async register(userData) {
    const { username, password, role } = userData;
    const existingUser = await User.findOne({ username });
    if (existingUser) throw new Error("User already exists");
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, role });
    await newUser.save();
    return { id: newUser._id, username: newUser.username, role: newUser.role };
  },

  async login(credentials) {
    const { username, password } = credentials;
    const user = await User.findOne({ username });
    if (!user) throw new Error("Invalid username or password");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid username or password");
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return {
      token,
      user: { id: user._id, username: user.username, role: user.role },
    };
  },
};

module.exports = authService;
