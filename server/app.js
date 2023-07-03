const express = require("express");
const { connectDB } = require("./db/connectDb");
const authRoutes = require("./routes/authRoutes");
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/auth/user", authRoutes);

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
