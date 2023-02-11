const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

router.post("/sign-google", authController.googleAuth);
router.get("/logout", authController.logout);

router.post("/refresh", authController.requestRefreshToken);

router.use(isAuthenticatedUser);
router.get("/me", userController.getMe);
router.patch("/updateInfo", userController.updateMe);

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
