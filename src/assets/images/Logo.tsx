import * as React from "react";
import { useTheme } from "@mui/material";

const LogoSVG: React.FC = (props) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 378.9 110.9"
      {...props}
    >
      <path
        fill="none"
        stroke={theme.logoColor}
        strokeWidth={2}
        strokeMiterlimit={10}
        d="M12.7 14.8h349.7v83.3H12.7z"
      />
    </svg>
  );
};

export default LogoSVG;
