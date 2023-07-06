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

module.exports = router;