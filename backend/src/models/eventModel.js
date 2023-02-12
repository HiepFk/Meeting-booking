const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: String,
    email: String,
    department: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Department",
    },
    room: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Room",
    },
    colorEvento: String,
    day: String,
    start: Object,
    end: Object,

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
    path: "department",
    select: "name",
  }).populate({
    path: "room",
    select: "name color",
  });
  next();
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
