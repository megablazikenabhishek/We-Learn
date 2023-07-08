const Course = require("../models/courseSchema")
const {uploadSingleFile, uploadMultipleFile} = require("../utils/uploadHandler")
const {rimraf} = require("rimraf");

exports.Create_Course = async(req, res, next)=>{
  try{
    // console.log(req.user);
    const { name, details, questions ,no_of_videos } = req.body;
    let course_data = {
      name, details, questions
    }      
    console.log(req.files,no_of_videos)
    let videos=[];
    for(let i=0;i<no_of_videos;i++){
      videos.push(req.files[`Video${i+1}`])
    }
    console.log(videos)
    course_data.thumbnail = await uploadSingleFile(req.files.thumbnail);
    course_data.Video = await uploadMultipleFile(videos);
    // course_data.Instructor = req.user._id;
    course_data.Instructor = "64a9b8996e676a0561795d77";

    // console.log(course_data);

    const data = await Course.create(course_data);

    rimraf("tmp");
    res.status(201).json({success: true, data})
  }catch(error){
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}

exports.addQuestions = async(req, res, next)=>{
  try {
    // console.log(req.body);
    const {id} = req.params;

    const data = await Course.findByIdAndUpdate(id, {
      questions: req.body.questions,
    });

    // console.log(data)

    res.status(201).json({sucess: true, data});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}

exports.getAllCourse = async(req, res, next)=>{
  try{
    const data = await Course.find({});
    res.status(200).json({success: true, data});
  }catch(error){
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}

exports.getCourse = async(req, res, next)=>{
  try {
    // console.log("hii")
    const {id: courseId} = req.params;
    const data = await Course.findById(courseId);
    res.status(200).json({success: true, data: data})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}