const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    nam: String,
    desc: String,
  },
  {
    timestamps: true,
  }
);

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;
