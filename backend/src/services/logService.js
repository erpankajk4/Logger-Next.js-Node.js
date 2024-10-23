const Log = require("../models/logModel");

const logService = {
  async createLog(logData) {
    try {
      const logEntry = new Log(logData);
      await logEntry.save(); // Save the log entry to the database
      return logEntry;
    } catch (error) {
      throw new Error("Error creating log entry: " + error.message);
    }
  },

  async getLogs(filters) {
    const query = {};

    // If userId is not null (admin case), add it to the query
    if (filters.userId) {
      query.userId = filters.userId;
    }

    if (filters.actionType) {
      query.actionType = filters.actionType;
    }

    if (filters.startDate || filters.endDate) {
      query.timestamp = {};
      if (filters.startDate) {
        query.timestamp.$gte = new Date(filters.startDate);
      }
      if (filters.endDate) {
        query.timestamp.$lte = new Date(filters.endDate);
      }
    }

    // Handle the deleted status filter
    if (filters.deleted !== undefined) {
      query.deleted = filters.deleted ? { $ne: false } : { $ne: true };
    }

    // Find logs based on the constructed query
    const logs = await Log.find(query).sort({ timestamp: -1 });

    return logs;
  },

  async softDeleteLog(logId) {
    const log = await Log.findById(logId);
    if (!log) throw new Error("Log not found");
    log.deleted = true; // Mark as deleted
    await log.save();
    return log;
  },
};

module.exports = logService;
