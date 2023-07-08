import React, { useState } from 'react'
import './AddCourse.css'
import axios from 'axios'
import NavBar from '../NavBar'

const AddCourse = () => {

  const [file,setFile]=useState(null)
  const [video,setVideo]=useState([])
  const [data, setData] = useState({ name: "", details: "" , Instructor :"",});

  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  const FileChange=(e)=>{
    console.log(e.target.value)
    setFile(e.target.files[0])
  } 

  const VideoChange=(e)=>{
    const newvideo=Array.from(e.target.files)
    console.log(newvideo)
    setVideo(newvideo)
  } 

  const handleSubmit=(e)=>{
    e.preventDefault();

    const formData =new FormData();
    formData.append('photo',file)
    formData.append('video',video)



    const config={
      headers:{
        'content-type':'multipart/form-data'
      }
    }

    const url="http://localhost:8000/api/course/create";

    axios.post(url,formData,config).then((response)=>{
      alert('Image Uploaded Successfully');
    }).catch((err)=>{
      console.log('err',err)
    })

  }

  return (
    <>
        <NavBar></NavBar>
        <div className="signup_container">
        <div className="signup_form_container">
          <div className="right">
          <p>Add Course</p>
            <form className="form_container" action="/" method="POST" >
              <input
                type="text"
                placeholder="Course Name"
                name="name"
                onChange={handleChange}
                value={data.name}
                required
                className="input"
              />
              <input
                type="text"
                placeholder="Course Details"
                name="details"
                onChange={handleChange}
                value={data.details}
                required
                className="input"
              />
              <input
                type="text"
                placeholder="Instructor Name"
                name="Instructor"
                onChange={handleChange}
                value={data.Instructor}
                required
                className="input"
              />
              <input
                type="file"
                placeholder="Upload Thumbnail"
                name="thumbnail"
                onChange={FileChange}
                // value={data.literates_male}
                required
                className="input"
              />
              <input
                type="file"
                multiple
                accept='video/mp4'
                placeholder="Video"
                name="video"
                onChange={VideoChange}
                // value={data.literates_female}
                required
                className="input"
              />
              {/* {error && <div className="error_msg">{error}</div>} */}
              <button type="submit" className="green_btn">
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddCourse