import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Link } from "@mui/material";
import { useTheme } from "@mui/material";
import { motion } from "framer-motion";

const PREFIX = "IconBtn";

const classes = {
  icon: `${PREFIX}-icon`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`& .${classes.icon}`]: {
    color: theme.palette.text.secondary,
    transition: "0.1s",
    cursor: "pointer",
    fontSize: (props: { fontSize: number }) =>
      props.fontSize ? `${props.fontSize}px` : "32px",
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
})) as typeof Box;

interface IconBtnProps {
  href: string;
  fontSize?: number;
  [x: string]: any;
}
const IconBtn: React.FC<React.PropsWithChildren<IconBtnProps>> = ({
  icon: Icon,
  href,
  fontSize,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <StyledBox
      display="inline"
      {...rest}
      component={motion.div}
      whileHover={{ scale: 1.1 }}
    >
      <Link href={href} underline="hover">
        <Icon
          className={classes.icon}
          sx={{
            color: theme.palette.text.secondary,
            transition: "0.1s",
            cursor: "pointer",
            fontSize: fontSize ? `${fontSize}px` : "32px",
            "&:hover": {
              color: theme.palette.text.primary,
            },
          }}
        />
      </Link>
    </StyledBox>
  );
};

export default IconBtn;
