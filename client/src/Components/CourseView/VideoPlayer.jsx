import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function MediaCover(props) {
  const {poster, src} = props;
  return (
    <>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1, minHeight: 450 }}>
        <CardCover>
          <video controls poster={poster}>
            <source
              src={src}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <Typography
        level="h6"
        fontWeight="lg"
        textColor="#fff"
        mt={{ xs: 12, sm: 18 }}
        style={{ marginTop: 0}}
        zIndex={1}
        >
        Video
        </Typography>
      </Card>
    </>
  );
}
