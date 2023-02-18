const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.get("/refresh", authController.requestRefreshToken);

router.use(isAuthenticatedUser);
router.use(isAdmin);
router
  .route("/")
  .post(userController.createUser)
  .get(userController.getListUser);

router
  .route("/:id")
  .patch(userController.updateUser)
  .get(userController.getUser)
  .delete(userController.deleteUser);

module.exports = router;
