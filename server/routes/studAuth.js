const express = require("express");
const {
  registerControllerForStudent,
  VerifyEmailForStudent,
  LoginControllerForStudent,
} = require("../controllers/studAuthController");

const router = express.Router();

router.post("/register", registerControllerForStudent);

router.put("/verify/:id", VerifyEmailForStudent);

router.post("/login", LoginControllerForStudent);

module.exports = router;
