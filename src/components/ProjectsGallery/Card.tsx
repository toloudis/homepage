import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Icon,
  Box,
} from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import { motion, useAnimation } from "framer-motion";

const PREFIX = "MyCard";

const classes = {
  root: `${PREFIX}-root`,
  media: `${PREFIX}-media`,
  frontImage: `${PREFIX}-frontImage`,
  title: `${PREFIX}-title`,
  overview: `${PREFIX}-overview`,
  technologies: `${PREFIX}-technologies`,
  hover: `${PREFIX}-hover`,
};

const StyledMuiCard = styled(Card)(({ theme }) => ({
  [`&.${classes.root}`]: {
    position: "relative",
    height: 350,
    overflow: "hidden",
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main,
  },

  [`& .${classes.media}`]: {
    height: 200,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    overflow: "hidden",
  },

  [`& .${classes.frontImage}`]: {
    marginTop: "20px",
    objectFit: "cover",
    objectPosition: "center top",
    width: "90%",
    boxShadow: theme.shadows[8],
  },

  [`& .${classes.title}`]: {
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.contrastText,
  },

  [`& .${classes.overview}`]: {
    fontSize: "14px",
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.contrastText,
  },

  [`& .${classes.technologies}`]: {
    fontSize: "15px",
    color: "rgb(10,10,10)",
  },

  [`& .${classes.hover}`]: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.97)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
})) as typeof Card;

const hoverVariants = {
  hover: {
    opacity: 1,
  },
  initial: {
    opacity: 0,
  },
};

const titleVariants = {
  hover: {
    y: 0,
    opacity: 1,
  },
  initial: {
    opacity: 0,
    y: 50,
  },
};

interface MyCardProps {
  id: string;
  title: string;
  backgroundImage: string;
  frontImage: string;
  overview: string;
  technologies: string[];
  onClick: () => void;
  [x: string]: any;
}

const MyCard: React.FC<MyCardProps> = ({
  id,
  title,
  backgroundImage,
  frontImage,
  overview,
  technologies,
  onClick,
  ...rest
}) => {
  const controls = useAnimation();
  const handleMouseEnterControls = () => {
    controls.start("hover");
  };
  const handleMouseLeaveControls = () => {
    controls.start("initial");
  };
  useEffect(() => {
    controls.start("initial");
  }, []);
  return (
    <StyledMuiCard
      className={classes.root}
      elevation={10}
      component={motion.div}
      layoutId={id}
      onMouseEnter={handleMouseEnterControls}
      onMouseLeave={handleMouseLeaveControls}
      onClick={() => onClick()}
      {...rest}
    >
      <div>
        <CardMedia
          component={motion.div}
          layoutId={`img-container-${id}`}
          className={classes.media}
          image={backgroundImage}
          title={title}
        >
          <motion.img
            layoutId={`front-img-${id}`}
            className={classes.frontImage}
            src={frontImage}
            alt={title}
          />
        </CardMedia>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            className={classes.title}
            component={motion.h5}
            layoutId={`title-${id}`}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            className={classes.overview}
            component={motion.h5}
            layoutId={`overview-${id}`}
            style={{ flexGrow: 2 }}
          >
            {overview}
          </Typography>
          <Typography
            variant="body2"
            className={classes.technologies}
            component={motion.h5}
            layoutId={`technologies-${id}`}
            color="primary"
          >
            {technologies.join(" · ")}
          </Typography>
        </CardContent>
      </div>
      <motion.div
        transition={{ delay: 0.15 }}
        variants={hoverVariants}
        animate={controls}
        className={classes.hover}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          transition={{ delay: 0.3 }}
          component={motion.div}
          variants={titleVariants}
          animate={controls}
        >
          <Box mr={1}>
            <Typography variant="h4">View project </Typography>
          </Box>
          <Icon
            component={motion.div}
            transition={{
              delay: 0.3,
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
            variants={{ hover: { y: 7 }, intial: { y: -2 } }}
            animate="hover"
          >
            <ArrowDownward />
          </Icon>
        </Box>
      </motion.div>
    </StyledMuiCard>
  );
};

export default MyCard;
