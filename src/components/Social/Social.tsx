import React, { useContext, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { LinkedIn, Instagram, GitHub, Email } from "@mui/icons-material";
import IconBtn from "../IconBtn";
import DarkModeSwitcher from "../DarkModeSwitcher";
import loaderContext from "../../contexts/loaderContext";

const PREFIX = "Social";

const classes = {
  socialIcon: `${PREFIX}-socialIcon`,
  wrapperx: `${PREFIX}-wrapperx`,
  mobileWrapper: `${PREFIX}-mobileWrapper`,
};

const MyRoot = styled(motion.div)(({ theme: _theme }) => ({
  [`& .${classes.socialIcon}`]: {
    marginBottom: "5px",
  },

  //   [`& .${classes.wrapperx}`]: {
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "flex-end",
  //     position: "fixed",
  //     bottom: 0,
  //     right: 0,
  //     padding: theme.spacing(2),
  //     zIndex: 100,
  //   },

  [`& .${classes.mobileWrapper}`]: {
    display: "flex",
  },
}));

const Social: React.FC<{ mobile: boolean }> = ({ mobile }) => {
  const { isLoading } = useContext(loaderContext);
  const controls = useAnimation();
  const theme = useTheme();
  useEffect(() => {
    if (!isLoading) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: 1.8 + i * 0.1,
        },
      }));
    } else {
      // to animate during loading, set opacity=0
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isLoading, controls]);

  if (mobile) {
    return (
      <div className={classes.mobileWrapper}>
        <IconBtn icon={GitHub} m={1} href="https://github.com/toloudis" />
        <IconBtn
          icon={Instagram}
          m={1}
          href="https://www.instagram.com/dmtoloudis/"
        />
        <IconBtn
          icon={LinkedIn}
          m={1}
          href="https://www.linkedin.com/in/toloudis/"
        />
        <IconBtn icon={Email} m={1} href="mailto:dmt.reg@gmail.com" />
      </div>
    );
  } else {
    return (
      <MyRoot
        // className={classes.wrapperx}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          position: "fixed",
          bottom: 0,
          right: 0,
          padding: theme.spacing(2),
          zIndex: 100,
        }}
      >
        <MyRoot animate={controls} custom={0} className={classes.socialIcon}>
          <IconBtn icon={GitHub} m={1} href="https://github.com/toloudis" />
        </MyRoot>
        <MyRoot animate={controls} custom={1} className={classes.socialIcon}>
          <IconBtn
            icon={Instagram}
            m={1}
            href="https://www.instagram.com/dmtoloudis/"
          />
        </MyRoot>
        <MyRoot animate={controls} custom={2} className={classes.socialIcon}>
          <IconBtn
            icon={LinkedIn}
            m={1}
            href="https://www.linkedin.com/in/toloudis/"
          />
        </MyRoot>
        <MyRoot animate={controls} custom={3} className={classes.socialIcon}>
          <IconBtn icon={Email} m={1} href="mailto:dmt.reg@gmail.com" />
        </MyRoot>
        <MyRoot animate={controls} custom={4} className={classes.socialIcon}>
          <DarkModeSwitcher />
        </MyRoot>
      </MyRoot>
    );
  }
};

export default Social;
