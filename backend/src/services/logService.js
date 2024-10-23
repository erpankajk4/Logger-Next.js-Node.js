const Log = require('../models/logModel');

const logService = {
  async createLog(logData) {
    const logEntry = new Log(logData);
    await logEntry.save();
    return logEntry;
  },

  async getLogs(filters) {
    const query = {};
    if (filters.userId) query.userId = filters.userId;
    if (filters.actionType) query.actionType = filters.actionType;
    if (filters.startDate || filters.endDate) {
      query.timestamp = {};
      if (filters.startDate) query.timestamp.$gte = new Date(filters.startDate);
      if (filters.endDate) query.timestamp.$lte = new Date(filters.endDate);
    }
    query.deleted = filters.deleted ? {} : { $ne: true }; // Exclude soft-deleted logs
    const logs = await Log.find(query).sort({ timestamp: -1 });
    return logs;
  },

  async softDeleteLog(logId) {
    const log = await Log.findById(logId);
    if (!log) throw new Error('Log not found');
    log.deleted = true; // Mark as deleted
    await log.save();
    return log;
  },
};

module.exports = logService;
