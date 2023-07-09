const router = require("express").Router();
const {checkForAuth, checkforTeacher} = require("../middleware/authMiddle")
const uploader = require("express-fileupload");

router.post(
  "/create",
  checkForAuth,
  checkforTeacher,
  uploader({ useTempFiles: true, limits: { fileSize: 50 * 1024 * 1024 } }),
  require("../controllers/courseController").Create_Course
);

router.put(
  "/create/addQuestions/:id",
  require("../controllers/courseController").addQuestions
);

router.get("/getAll", checkForAuth, checkforTeacher, require("../controllers/courseController").getAllCourse);

router.get("/get/:id", checkForAuth, checkforTeacher, require("../controllers/courseController").getCourse)
module.exports = router;