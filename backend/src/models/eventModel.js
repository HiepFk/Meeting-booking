const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    summary: String,
    email: {
      type: String,
      unique: true,
      lowcase: true,
    },
    group: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Department",
    },
    room: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Room",
    },
    date: String,
    start: Date,
    end: Date,

    isRepeat: {
      type: Boolean,
      default: false,
    },
    weekly: Array,
    fromDate: String,
    toDate: String,
  },
  {
    timestamps: true,
  }
);

eventSchema.pre(/^find/, function (next) {
  this.populate({
    path: "group",
    select: "name",
  }).populate({
    path: "room",
    select: "name",
  });
  next();
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
