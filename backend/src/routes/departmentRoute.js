const departmentController = require("../controllers/departmentController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

router.use(isAuthenticatedUser);
router.route("/:id").get(departmentController.getDepartment);
router.route("/").get(departmentController.getListDepartment);

router.use(isAdmin);
router.route("/").post(departmentController.createDepartment);
router
  .route("/:id")
  .patch(departmentController.updateDepartment)
  .delete(departmentController.deleteDepartment);

module.exports = router;
