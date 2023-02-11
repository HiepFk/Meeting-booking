const Event = require("../models/eventModel");
const factory = require("./handlerFactory");

const eventController = {
  getListEvent: factory.getAll(Event),

  getEvent: factory.getOne(Event),

  createEvent: factory.createOne(Event),

  updateEvent: factory.updateOne(Event),

  deleteEvent: factory.deleteOne(Event),
};

module.exports = eventController;
