const express = require("express");
const {
  registerController,
  VerifyEmail,
  LoginController,
} = require("../controllers/authControllers");

const router = express.Router();

router.post("/register", registerController);

router.put("/verify/:id", VerifyEmail);

router.post("/login", LoginController);

module.exports = router;
