const express = require("express");
const { connectDB } = require("./db/connectDb");
const { checkForAuth, checkforTeacher } = require("./middleware/authMiddle");
require("dotenv").config();
const app = express();
//middlewares
app.use(require("cors")())
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/auth/teacher", require("./routes/teacherAuth"));
app.use("/api/auth/student", require("./routes/studAuth"));
app.use("/api/course", require("./routes/course"));
app.get("/test", checkForAuth, (req, res) => res.send("hi"));
const port = process.env.PORT || 8000;
(async () => {
  try {
    console.log(process.env.MONGO_URI);
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running at ${port}..`);
    });
  } catch (error) {
    console.log(error);
  }
})();
