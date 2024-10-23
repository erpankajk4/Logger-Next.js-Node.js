const logService = require("../services/logService");

const logController = {
  async logAction(req, res) {
    // console.log(req.user);
    try {
      const logData = {
        actionType: req.body.actionType, // Ensure you get this from the request body
        timestamp: new Date(),
        userId: req.user.id, // Ensure req.user is set correctly
        role: req.user.role,
        additionalData: {
          body: req.body,
          query: req.query,
          params: req.params,
        },
      };

      const logEntry = await logService.createLog(logData);
      return res.status(201).json({ message: "Log entry created", logEntry });
    } catch (error) {
      console.error("Error logging action:", error); // Log the error on the server
      return res
        .status(500)
        .json({ message: "Error logging action", error: error.message });
    }
  },

  async getLogs(req, res) {
    console.log(req.user, "user");
    console.log(req.query, "query");
    try {
      const filters = {
        userId: req.user.id,
        role: req.user.role,
        actionType: req.query.actionType || null,
        startDate: req.query.startDate || null,
        endDate: req.query.endDate || null,
        deleted: req.query.deleted === "true",
      };
      const logs = await logService.getLogs(filters);
      return res.status(200).json({ logs });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error retrieving logs", error: error.message });
    }
  },

  async deleteLog(req, res) {
    try {
      const logId = req.params.id;
      const deletedLog = await logService.softDeleteLog(logId);
      return res
        .status(200)
        .json({ message: "Log entry soft deleted", deletedLog });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error deleting log", error: error.message });
    }
  },
};

module.exports = logController;
