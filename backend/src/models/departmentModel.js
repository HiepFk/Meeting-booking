const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    name: String,
    desc: String,
  },
  {
    timestamps: true,
  }
);

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;
