import { useContext } from "react";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import LoaderContext from "../contexts/loaderContext";

const PREFIX = "LoaderContainer";

const classes = {
  container: `${PREFIX}-container`,
  content: `${PREFIX}-content`,
};

const Root = styled(motion.div)(({ theme: _theme }) => ({
  [`& .${classes.container}`]: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF4C29",
    zIndex: 10000,
  },

  [`& .${classes.content}`]: {
    margin: "0 auto",
  },
}));

const LoaderContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { setIsLoading } = useContext(LoaderContext);

  return (
    <Root
      initial={{
        y: 0,
      }}
      animate={{
        y: "-100vh",
      }}
      transition={{
        delay: 4.2,
        duration: 0.3,
      }}
      onAnimationComplete={(_definition) => {
        setIsLoading(false);
      }}
      className={classes.container}
    >
      <div className={classes.content}>{children}</div>
    </Root>
  );
};

export default LoaderContainer;
