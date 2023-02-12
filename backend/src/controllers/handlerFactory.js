const catchAsync = require("./../middleware/catchAsync");
const AppError = require("./../utils/appError");

const handlerFactory = {
  createOne: (Model) =>
    catchAsync(async (req, res, next) => {
      const data = await Model.create(req.body);
      res.status(200).json({
        status: "success",
        message: "Create success",
        data,
      });
    }),
  getOne: (Model, popOptions) =>
    catchAsync(async (req, res, next) => {
      let query = Model.findOne({ slug: req.params.id });

      if (popOptions) query = query.populate(popOptions);

      const data = await query;

      if (!data) {
        return next(new AppError("No document found with that ID", 404));
      }

      res.status(200).json({
        status: "success",
        data,
      });
    }),
  getOneById: (Model, popOptions) =>
    catchAsync(async (req, res, next) => {
      let query = Model.findById(req.params.id);

      if (popOptions) query = query.populate(popOptions);

      const data = await query;

      if (!data) {
        return next(new AppError("No document found with that ID", 404));
      }

      res.status(200).json({
        status: "success",
        data,
      });
    }),
  getAll: (Model) =>
    catchAsync(async (req, res, next) => {
      data = await Model.find();
      res.status(200).json({
        status: "success",
        results: data.length,
        data,
      });
    }),
  deleteOne: (Model) =>
    catchAsync(async (req, res, next) => {
      const data = await Model.findByIdAndDelete(req.params.id);
      if (!data) {
        return next(new AppError("No document found with that ID", 404));
      }
      const query = await Model.find();

      res.status(200).json({
        status: "success",
        message: "Delete success",
        data: query,
      });
    }),
  deleteAll: (Model) =>
    catchAsync(async (req, res, next) => {
      const data = await Model.deleteMany({ user: req.params.id, paid: true });

      if (!data) {
        return next(new AppError("No document found with that ID", 404));
      }

      res.status(200).json({
        status: "success",
        data: null,
      });
    }),
  updateOne: (Model) =>
    catchAsync(async (req, res, next) => {
      const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!data) {
        return next(new AppError("No document found with that ID", 404));
      }

      res.status(200).json({
        status: "success",
        message: "Update success",
        data,
      });
    }),
};
module.exports = handlerFactory;
