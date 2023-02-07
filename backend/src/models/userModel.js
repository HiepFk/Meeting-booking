const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      lowcase: true,
    },
    number: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    group: {
      type: mongoose.Schema.ObjectId,
      ref: "Department",
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre(/^find/, function (next) {
  this.populate({
    path: "group",
    select: "name",
  });
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
