const roomController = require("../controllers/roomController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

// router.use(isAuthenticatedUser);
router.route("/:id").get(roomController.getRoom);
router.route("/").get(roomController.getListRoom);

// router.use(isAdmin);
router.route("/").post(roomController.createRoom);
router
  .route("/:id")
  .patch(roomController.updateRoom)
  .delete(roomController.deleteRoom);

module.exports = router;
