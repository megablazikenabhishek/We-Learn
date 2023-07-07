import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import { Box, Grid } from "@mui/material";
import CourseCard from "../components/CourseCard";
import axios from "axios";
import URI from "../URI"

export default function HomePage() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URI}/api/course/getAll`);
        console.log(response)
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
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
