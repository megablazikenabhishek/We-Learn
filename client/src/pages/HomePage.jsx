import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import { Box, Grid } from "@mui/material";
import CourseCard from "../components/CourseCard";
import axios from "axios";
import URI from "../URI";
import getAuthToken from "../utils/getAuthToken"

export default function HomePage() {
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

  return (
    <>
      <NavBar />
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
            <CourseCard course={course}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
