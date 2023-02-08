const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    title: String,
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

bookingSchema.pre(/^find/, function (next) {
  this.populate({
    path: "group",
    select: "name",
  }).populate({
    path: "room",
    select: "name",
  });
  next();
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
