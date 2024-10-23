const express = require('express');
const { getAllUsers, getUser } = require('../controllers/userController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// Get all users (admin only)
router.get('/', authenticate, getAllUsers);

// Get a specific user by ID
router.get('/:id', authenticate, getUser);

module.exports = router;
