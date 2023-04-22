import { useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import { motion, useAnimation } from "framer-motion";
import loaderContext from "../../contexts/loaderContext";

const PREFIX = "Background3d";

const classes = {
  container: `${PREFIX}-container`,
  iframe: `${PREFIX}-iframe`,
  wrapper: `${PREFIX}-wrapper`,
  hideLogo: `${PREFIX}-hideLogo`,
};

const Root = styled(motion.div)(({ theme }) => ({
  [`& .${classes.container}`]: {
    position: "relative",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  },

  [`& .${classes.iframe}`]: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    maxWidth: "600px",
  },

  [`& .${classes.wrapper}`]: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    zIndex: -1,
  },

  [`& .${classes.hideLogo}`]: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: "100px",
    height: "100px",
    backgroundColor: theme.palette.background.default,
  },
}));

const Background3d = () => {
  const { isLoading } = useContext(loaderContext);
  const controls = useAnimation();

  useEffect(() => {
    if (!isLoading) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          delay: 3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        },
      });
    } else {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isLoading, controls]);

  return (
    <Root animate={controls} className={classes.wrapper}>
      <div className={classes.container}>
        <iframe
          title="background-3d"
          src="https://my.spline.design/awesomefolio-0c39efc3de701ba97be395cc128e4e2f/"
          frameBorder="0"
          height="100%"
          className={classes.iframe}
        ></iframe>
        <div className={classes.hideLogo} />
      </div>
    </Root>
  );
};

export default Background3d;
