const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const teacherSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    proficiency: {
      type: Array,
      default: [],
    },
    experience: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

teacherSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  } catch (error) {
    console.log(error);
  }
});

const teacherModel = model("teacher", teacherSchema);

module.exports = teacherModel;
