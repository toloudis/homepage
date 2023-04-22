import { useEffect } from "react";
import { styled } from "@mui/material";
import { Container, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Divider from "../components/Divider";

const PREFIX = "SectionContainer";

const classes = {
  container: `${PREFIX}-container`,
  titleContainer: `${PREFIX}-titleContainer`,
  title: `${PREFIX}-title`,
  childrenContainer: `${PREFIX}-childrenContainer`,
};

const StyledContainer = styled(Container)(({ theme }) => ({
  // [`&.${classes.container}`]: {
  //   paddingTop: (props: { padding: number }) =>
  //     props.padding ? `${props.padding}px` : "80px",
  //   paddingBottom: (props: { padding: number }) =>
  //     props.padding ? `${props.padding}px` : "80px",
  // },

  [`& .${classes.titleContainer}`]: {
    paddingBottom: theme.spacing(8),
    display: "flex",
    alignItems: "center",
    maxWidth: "100%",
  },

  [`& .${classes.title}`]: {
    margin: theme.spacing(0, 4),
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    color: theme.palette.text.primary,
  },

  [`& .${classes.childrenContainer}`]: {
    minHeight: "100%",
  },
})) as typeof Container;

interface SectionContainerProps {
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  full?: boolean;
  reverse?: boolean;
  title?: string;
  padding?: string;
  [x: string]: any;
}
const SectionContainer: React.FC<
  React.PropsWithChildren<SectionContainerProps>
> = ({ children, maxWidth, full, reverse, title, padding, ...rest }) => {
  const titleControls = useAnimation();
  const contentControls = useAnimation();
  const [titleRef, titleInView] = useInView();
  const [contentRef, contentInView] = useInView();
  // const [contentStart, setContentStart]=useState(false)

  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    }
  }, [titleControls, titleInView]);

  useEffect(() => {
    if (contentInView) {
      // setContentStart(true)
      contentControls.start("visible");
    }
  }, [contentControls, contentInView]);

  return (
    <StyledContainer
      component="section"
      className={classes.container}
      sx={{
        paddingTop: padding ? `${padding}px` : "80px",
        paddingBottom: padding ? `${padding}px` : "80px",
      }}
      {...rest}
    >
      {title && (
        <motion.div
          ref={titleRef}
          animate={titleControls}
          initial="hidden"
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: reverse ? 0 : 0 },
          }}
          className={classes.titleContainer}
        >
          <Divider width="20%" fullWidth={false} />
          <Typography variant="h4" color="initial" className={classes.title}>
            {title}
          </Typography>
          <Divider fullWidth width="" />
        </motion.div>
      )}
      <motion.div
        ref={contentRef}
        animate={contentControls}
        initial="hidden"
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 20,
          when: "beforeChildren",
        }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -50 },
        }}
      >
        {children}
      </motion.div>
    </StyledContainer>
  );
};

export default SectionContainer;
