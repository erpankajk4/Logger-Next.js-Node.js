const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
  {
    actionType: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: { type: String, required: true },
    additionalData: { type: Object, default: {} },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Log", logSchema);
