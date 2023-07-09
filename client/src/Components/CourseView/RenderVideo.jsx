import * as React from "react";
import { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideoPlayer from "./VideoPlayer"
import axios from "axios";
import URI from "../../URI";
import Quiz from "../Quiz/Quiz";

export default function RenderVideo(props) {
  const {courseId} = props;

  const [courseData, setCourseData] = React.useState({});

  useEffect(() => {
    
    const fetchData = async()=>{
      const {data} = await axios.get(`${URI}/api/course/get/${courseId}`);
      // console.log(data)
      setCourseData((prev)=>{
        return data.data;
      })
    }
    
    fetchData();
  }, []);

  // console.log(courseData);

  return (
    <div>
      {courseData.Video &&
        courseData.Video.map((val, i) => {
          console.log(val, i);
          return (
            <Accordion key={i}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Lesson {i + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <VideoPlayer poster={courseData.thumbnail} src={val} />
              </AccordionDetails>
            </Accordion>
          );
        })}
      {courseData.questions && courseData.questions.length > 0 && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Assignment</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Quiz QuizData = {courseData.questions}/>
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
}
