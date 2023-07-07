const {Schema, model} = require("mongoose");

const CourseSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    details:{
        type: String,
        required: true,
        trim: true
    },
    Instructor:{
        type: Schema.Types.ObjectId,
        ref: "teacher",
        required: true
    },
    thumbnail:{
        type: String,
        required: true
    },
    Video:{
        type: Array,
        required: true
    },
    questions:{
        type: Array,
    }
}, {time_stamps: true});

module.exports = model("course", CourseSchema)