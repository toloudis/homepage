import React from "react";
import { styled } from "@mui/material/styles";
import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { motion } from "framer-motion";

const PREFIX = "ExtendedCard";

const classes = {
  wrapper: `${PREFIX}-wrapper`,
  container: `${PREFIX}-container`,
  root: `${PREFIX}-root`,
  media: `${PREFIX}-media`,
  frontImage: `${PREFIX}-frontImage`,
  title: `${PREFIX}-title`,
  overview: `${PREFIX}-overview`,
  technologies: `${PREFIX}-technologies`,
  closeBtn: `${PREFIX}-closeBtn`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.wrapper}`]: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: "10000",
  },

  [`& .${classes.container}`]: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.22)",
    backdropFilter: "blur(2px)",
    opacity: 0,
  },

  [`& .${classes.root}`]: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    margin: "0 auto",
    marginTop: `calc( ${theme.navbarHeight} + 20px )`,
    width: "90%",
    maxWidth: "600px",
    height: "600px",
    maxHeight: "80%",
    zIndex: "10000",
    boxShadow: theme.shadows[10],
    backgroundColor: theme.palette.secondary.main,
  },

  [`& .${classes.media}`]: {
    height: "300px",
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
    color: theme.palette.secondary.contrastText,
  },

  [`& .${classes.overview}`]: {
    fontSize: "14px",
    marginBottom: theme.spacing(1),
    color: theme.palette.secondary.contrastText,
  },

  [`& .${classes.technologies}`]: {
    fontSize: "15px",
    color: "rgb(10,10,10)",
  },

  [`& .${classes.closeBtn}`]: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: "2px",
    color: "white",
  },
}));

interface ExtendedCardProps {
  id: string;
  title?: string;
  backgroundImage?: string;
  frontImage?: string;
  overview: string;
  technologies?: string[];
  handleClose: () => void;
  [x: string]: any;
}
const ExtendedCard: React.FC<ExtendedCardProps> = ({
  id,
  title,
  backgroundImage,
  frontImage,
  overview,
  technologies,
  handleClose,
  //...rest
}) => {
  return (
    <Root className={classes.wrapper}>
      <MuiCard
        className={classes.root}
        elevation={0}
        component={motion.div}
        layoutId={id}
      >
        <div style={{ position: "relative" }}>
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
            <CardContent>
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
              >
                {overview}
              </Typography>
              <Typography
                variant="body1"
                className={classes.technologies}
                component={motion.h5}
                layoutId={`technologies-${id}`}
                color="primary"
              >
                {technologies?.join(" · ")}
              </Typography>
            </CardContent>
          </div>
          <IconButton
            className={classes.closeBtn}
            onClick={() => handleClose()}
            size="large"
          >
            <Close />
          </IconButton>
        </div>
      </MuiCard>
      <motion.div
        className={classes.container}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={() => handleClose()}
      ></motion.div>
    </Root>
  );
};

export default ExtendedCard;
