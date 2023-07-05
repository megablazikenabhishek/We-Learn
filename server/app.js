const express = require("express");
const { connectDB } = require("./db/connectDb");
const { checkForAuth, checkforTeacher } = require("./middleware/authMiddle");
const app = express();
require("dotenv").config();
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/auth/teacher", require("./routes/teacherAuth"));
app.use("/api/auth/student", require("./routes/studAuth"));
app.get("/test", checkForAuth, checkforTeacher, (req, res) => res.send("hi"));
const port = process.env.PORT || 8000;
(async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running at ${port}..`);
    });
  } catch (error) {
    console.log(error);
  }
})();
