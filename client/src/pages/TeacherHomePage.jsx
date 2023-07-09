import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Box, Grid } from "@mui/material";
import TeacherCourseCard from "../components/TeacherCourseCard";
import axios from "axios";
import URI from '../URI';
import getAuthToken from "../utils/getAuthToken";

const TeacherHomePage = () => {
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        // console.log(getAuthToken())
        try {
          let config = {
            headers: {
              authorization: getAuthToken().token,
            },
          };
          // console.log(config);
          const response = await axios.get(`${URI}/api/course/getAll`, config);
          // console.log(response.data.data[0]._id)
          setCourseData(response.data.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);

    const navigate=useNavigate();
  
    return (
      <>
        <NavBar />
        <h1 style={{textAlign:'center',margin:10,textDecoration:'underline'}}>All courses of our team</h1>
        <Grid container my={2} px={2} rowSpacing={4} columnSpacing={2}>
          {courseData.map((course) => (
            <Grid
              key={course._id}
              item
              xs={12}
              sm={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TeacherCourseCard course={course} />
            </Grid>
          ))}
        </Grid>

        <button className="green_btn" onClick={()=>navigate("/add_course")}>
        Add Course
        </button>

      </>
    );
}

export default TeacherHomePage