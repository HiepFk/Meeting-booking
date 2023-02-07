const Department = require("../models/departmentModel");
const factory = require("./handlerFactory");

const departmentController = {
  getListDepartment: factory.getAll(Department),

  getDepartment: factory.getOne(Department),

  createDepartment: factory.createOne(Department),

  updateDepartment: factory.updateOne(Department),

  deleteDepartment: factory.deleteOne(Department),
};

module.exports = departmentController;
