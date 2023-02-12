const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    userName: String,
    email: {
      type: String,
      unique: true,
      lowcase: true,
    },
    photo: String,
    department: {
      type: mongoose.Schema.ObjectId,
      ref: "Department",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isAuthRoomVip: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre(/^find/, function (next) {
  this.populate({
    path: "department",
    select: "name",
  });
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
