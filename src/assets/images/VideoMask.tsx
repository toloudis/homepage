import * as React from "react";
import { useTheme } from "@mui/material";

const VideoMask: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const theme = useTheme();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 60" {...props}>
      {/* TODO SVG PATH TO USE AS MASK */}
      <path fill={theme.palette.background.default} d="" />
    </svg>
  );
};

export default VideoMask;
