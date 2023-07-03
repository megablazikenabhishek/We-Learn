const jwt = require("jsonwebtoken");

exports.checkForAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const payload = jwt.verify(token, process.env.SECRET_KEY);
      req.user = payload;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  } else {
    return res.status(401).json({ message: "Authorization token missing" });
  }
};
