const jwt = require("jsonwebtoken");
const teacherModel = require("../models/teacherModel");
const studentModel = require("../models/studentSchema")

exports.checkForAuth = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const payload = jwt.verify(token, process.env.SECRET_KEY);
      let user = await studentModel.findById(payload._id);
      if(!user){
        user = await teacherModel.findById(payload._id);
      }
      req.user = user;
      return next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  } else {
    return res.status(401).json({ message: "Authorization token missing" });
  }
};

exports.checkforTeacher = async (req, res, next) => {
  try {
    const user = await teacherModel.findById(req.user._id);
    if (user) {
      return next();
    }
    return res.status(400).send({ msg: "User is not a teacher " });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};
