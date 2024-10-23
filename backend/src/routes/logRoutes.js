const express = require('express');
const { logAction, getLogs, deleteLog } = require('../controllers/logController');
const { authenticate } = require('../middleware/authMiddleware');
const logMiddleware = require('../middleware/logMiddleware');

const router = express.Router();

// Log a user action (applies logging middleware)
router.post('/', authenticate, logMiddleware, logAction);

// Get logs (with filtering)
router.get('/', authenticate, getLogs);

// Soft delete a log
router.delete('/:id', authenticate, deleteLog);

module.exports = router;
