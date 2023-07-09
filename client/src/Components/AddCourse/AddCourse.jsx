import React, { useState } from 'react'
import './AddCourse.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar'
import URI from '../../URI'
import getAuthToken from "../../utils/getAuthToken";


const AddCourse = () => {
  const [file, setFile] = useState(null);
  const [name, setname] = useState(null);
  const [details, setdetails] = useState(null);
  const [videos, setVideos] = useState([]);
  // const [data, setData] = useState({ name: "", details: "" , Instructor :"",});

  // const handleChange = ({ currentTarget: input }) => {
  // 	setData({ ...data, [input.name]: input.value });
  // };

  const navigate = useNavigate();

  const FileChange = (e) => {
    console.log(e.target.value);
    setFile(e.target.files[0]);
  };

  const VideoChange = (e) => {
    setVideos(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("thumbnail", file);
    for (let i = 0; i < videos.length; i++) {
      formData.append(`Video${i + 1}`, videos[i]);
    }

    formData.append("no_of_videos", videos.length);
    formData.append("name", name);
    formData.append("details", details);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        authorization: getAuthToken().token,
      },
    };

    axios
      .post(`${URI}/api/course/create`, formData, config)
      .then((response) => {
        alert("Course Uploaded Successfully");
        if (response.status == 201) {
          navigate(`/add_question/${response.data.data._id}`);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      <NavBar/>
        <div className="signup_container">
        <div className="signup_form_container">
          <div className="right">
            <p>Add Course</p>
            <form className="form_container" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Course Name"
                name="name"
                onChange={(e) => {
                  setname(e.target.value);
                }}
                // value={data.name}
                required
                className="input"
              />
              <input
                type="text"
                placeholder="Course Details"
                name="details"
                onChange={(e) => {
                  setdetails(e.target.value);
                }}
                // value={data.details}
                required
                className="input"
              />
              <input
                type="file"
                placeholder="Upload Thumbnail"
                name="thumbnail"
                onChange={FileChange}
                required
                className="input"
              />
              <input
                type="file"
                multiple
                accept="video/mp4"
                placeholder="Video"
                name="Video"
                onChange={VideoChange}
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
  );
};

export default AddCourse;
