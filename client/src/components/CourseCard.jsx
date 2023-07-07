import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

export default function CourseCard(props) {
  // console.log(props)
  const {course}  = props;

  return (
    <Card sx={{ width: 400, height: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={course.thumbnail}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {course.details}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions mx={2}>
        <Button
          size="medium"
          variant="contained"
          endIcon={<SubscriptionsIcon />}
          sx = {{display: "flex", justifyContent: "centre", alignItems: "centre"}}
        >
          Enroll
        </Button>
      </CardActions>
    </Card>
  );
}
