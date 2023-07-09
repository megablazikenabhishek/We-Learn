const teacherModel = require("../models/teacherModel");
const { sendMailforVerification } = require("../utils/emailHandler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//MethoOS
// for register
exports.registerController = async (req, res) => {
  try {
    let student = false;
    let teacher = true;
    const { name, email, qualification, proficiency, experience, password } =
      req.body;
    switch (true) {
      case !name:
        return res.status(400).json({ message: "Name is required" });
      case !email:
        return res.status(400).json({ message: "Email is required" });
      case !password:
        return res.status(400).json({ message: "Password is required" });
      case !qualification:
        return res.status(400).json({ message: "Qualification is required" });
      case !proficiency:
        return res.status(400).json({ message: "Proficiency is required" });
      case !experience:
        return res.status(400).json({ message: "Experience is required" });
      default:
        break;
    }
    const preUser = await teacherModel.findOne({ name, email });
    if (preUser) {
      return res.status(400).json({
        msg: `${name} had already registered. Please Login to continue`,
      });
    }
    const newUser = new teacherModel({ ...req.body });
    const temp = await newUser.save();
    sendMailforVerification(temp.name, temp.email, temp._id, teacher, student);
    res.status(201).json({
      success: true,
      msg: "Registration Successfull.Please check your email for verification",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      msg: "Error while Registering",
      error,
    });
  }
};

//METHOD - put; verify email

exports.VerifyEmail = async (req, res) => {
  try {
    const { id } = req.params;
    await teacherModel.updateOne({ _id: id }, { $set: { isVerified: true } });
    res.status(200).json({ msg: "Email Verified" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};

//METHOD-POST ; for login

exports.LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Please fill all the fields" });
    }
    const user = await teacherModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "Create Account",
      });
    }
    if (!user.isVerified) {
      return res.status(400).json({
        success: false,
        msg: "You are not verified. Check your email",
      });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({
        success: false,
        msg: "Wrong Password. Please enter correct Password",
      });
    }
    const payload = { _id: user._id };
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    res.status(200).json({
      success: true,
      msg: "Login Successfull",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      msg: "Error while login",
      error,
    });
  }
};
