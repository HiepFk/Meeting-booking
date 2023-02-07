const Booking = require("../models/bookingModel");
const factory = require("./handlerFactory");

const bookingController = {
  getListBooking: factory.getAll(Booking),

  getBooking: factory.getOne(Booking),

  createBooking: factory.createOne(Booking),

  updateBooking: factory.updateOne(Booking),

  deleteBooking: factory.deleteOne(Booking),
};

module.exports = bookingController;
