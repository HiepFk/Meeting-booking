const eventController = require("../controllers/eventController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

router.use(isAuthenticatedUser);
router.route("/:id").get(eventController.getEvent);
router.route("/").get(eventController.getListEvent);

router.use(isAdmin);
router.route("/").post(eventController.createEvent);
router
  .route("/:id")
  .patch(eventController.updateEvent)
  .delete(eventController.deleteEvent);

module.exports = router;
