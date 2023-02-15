const Event = require("../models/eventModel");
const factory = require("./handlerFactory");
const catchAsync = require("./../middleware/catchAsync");
const eventController = {
  getListEvent: factory.getAll(Event),

  getEvent: factory.getOne(Event),

  createEvent: catchAsync(async (req, res, next) => {
    // const { room, day, start, end } = req.body;
    // // console.log(end, start);
    // const event = await Event.find({ room: room, day: day });

    // let data = [];
    // event.forEach((o) => {
    //   if (o.start >= end || o.end <= start) {
    //     data.push(o);
    //   }
    // });
    // console.log(data);
    const data = await Event.create(req.body);
    res.status(200).json({
      status: "success",
      message: "Create success",
      data,
    });
  }),

  updateEvent: factory.updateOne(Event),

  deleteEvent: factory.deleteOne(Event),
};

module.exports = eventController;
