const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

router.post("/login", authController.login);
router.post("/sign-google", authController.googleAuth);
router.post("/signup", authController.signup);
router.get("/logout", authController.logout);

router.post("/activation", authController.activateEmail);
router.post("/forgot", authController.forgotPassword);
router.post("/reset", authController.resetPassword);

router.post("/refresh", authController.requestRefreshToken);

router.use(isAuthenticatedUser);
router.get("/me", userController.getMe);
router.patch("/updateMyPassword", authController.updatePassword);
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
