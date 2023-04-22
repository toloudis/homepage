import React from "react";
import { styled } from "@mui/material/styles";
import VideoMask from "../../assets/images/VideoMask";

const PREFIX = "VideoLogo";

const classes = {
  wrapper: `${PREFIX}-wrapper`,
  mask: `${PREFIX}-mask`,
  video: `${PREFIX}-video`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.wrapper}`]: {
    overflow: "hidden",
    position: "relative",
    width: "300px",
    height: "68px",
    [theme.breakpoints.down("sm")]: {
      width: "230px",
      height: "53px",
    },
  },

  [`& .${classes.mask}`]: {
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "300px",
    [theme.breakpoints.down("sm")]: {
      width: "230px",
      height: "52px",
    },
  },

  [`& .${classes.video}`]: {
    zIndex: 0,
    position: "absolute",
    top: 0,
    left: "1px",
    right: "1px",
    width: "298px",
    height: "68px",
    [theme.breakpoints.down("sm")]: {
      width: "228px",
      height: "52px",
    },
  },
}));

const VideoLogo: React.FC<{ [x: string]: any }> = (props) => {
  return (
    <Root className={classes.wrapper} {...props}>
      <VideoMask className={classes.mask} />
      <video autoPlay muted loop preload="auto" className={classes.video}>
        <source src="https://d33wubrfki0l68.cloudfront.net/ab4c4ea31f1543825102ebf15a35080cdc1397ce/b8c4f/static/images/frontpage/hero/gradient.mp4" />
      </video>
    </Root>
  );
};

export default VideoLogo;
