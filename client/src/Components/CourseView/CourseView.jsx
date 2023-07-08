import { Paper } from "@mui/material";
import { useState } from "react";
import NavBar from "../Navbar";
import "./CourseView.css";
import RenderVideo from "./RenderVideo"
import { useParams } from "react-router-dom";

export default function CourseView(props){
    const {id: courseId} = useParams();
    console.log(courseId);
    return (
        <>
            <NavBar/>
            <div style={{display: "flex","alignItems": "center", justifyContent: "center"}}>
                <Paper elevation={24} sx={{marginTop: "10px", marginBottom: "10px", minHeight:"85vh", width: "90vw"}}>
                    <RenderVideo courseId={courseId}/>
                </Paper>
            </div>
        </>
    )
}