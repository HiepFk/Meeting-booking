const bookingController = require("../controllers/bookingController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

router.use(isAuthenticatedUser);
router.route("/:id").get(bookingController.getBooking);
router.route("/").get(bookingController.getListBooking);

router.use(isAdmin);
router.route("/").post(bookingController.createBooking);
router
  .route("/:id")
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

module.exports = router;
