const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    size: {
      type: Number,
    },
    color: String,
    hasDevice: {
      type: Boolean,
      default: false,
    },
    isVip: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
