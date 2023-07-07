import React from 'react'
import './AddCourse.css'

const AddCourse = () => {
  return (
    <>
        <div className="signup_container">
        <div className="signup_form_container">
          <div className="right">
          <p>Add Course</p>
            <form className="form_container" >
            {/* onSubmit={handleSubmit} */}
              <input
                type="text"
                placeholder="Course Name"
                name="name"
                // onChange={handleChange}
                // value={data.state_name}
                required
                className="input"
              />
              <input
                type="text"
                placeholder="Course Details"
                name="details"
                // onChange={handleChange}
                // value={data.population_male}
                required
                className="input"
              />
              <input
                type="text"
                placeholder="Instructor Name"
                name="Instructor"
                // onChange={handleChange}
                // value={data.population_female}
                required
                className="input"
              />
              <input
                type="file"
                placeholder="Upload Thumbnail"
                name="thumbnail"
                // onChange={handleChange}
                // value={data.literates_male}
                required
                className="input"
              />
              {/* <input
                type="number"
                placeholder="Female Literates"
                name="literates_female"
                // onChange={handleChange}
                // value={data.literates_female}
                required
                className="input"
              /> */}
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