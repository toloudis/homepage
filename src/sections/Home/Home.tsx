import { useContext, useEffect, forwardRef } from "react";
import { styled } from "@mui/material";
import { Typography, Button, useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import HomeContainer from "../../containers/HomeContainer";
import t from "../../i18n";
import loaderContext from "../../contexts/loaderContext";

const PREFIX = "Home";

const classes = {
  subTitle: `${PREFIX}-subTitle`,
};

const StyledHomeContainer = styled(HomeContainer)(({ theme }) => ({
  [`& .${classes.subTitle}`]: {
    marginBottom: "16px",
    fontSize: "75px",
    [theme.breakpoints.down("md")]: {
      fontSize: "45px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
    },
  },
}));

interface Props {
  to: string;
  [x: string]: any;
}
export type Ref = HTMLDivElement;
const SLink = forwardRef<Ref, Props>((props, _ref) => <Link {...props} />);

const Home = () => {
  const { isLoading } = useContext(loaderContext);
  const controls = useAnimation();
  const theme = useTheme();
  useEffect(() => {
    if (!isLoading) {
      controls.start((i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.1 + 1.2 },
      }));
    } else {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isLoading, controls]);

  return (
    <StyledHomeContainer id="home">
      <div>
        <Typography
          component={motion.div}
          animate={controls}
          custom={0}
          color="primary"
          variant="h5"
          style={{ marginBottom: "0px" }}
        >
          {t["home_welcome"]}
          {/* <motion.div
            style={{ display: "inline-block" }}
            animate={{ rotate: [50, 90, 50] }}
            transition={{ repeat: Infinity, duration: 1.4, repeatDelay: 0.7 }}
          >
            👋
          </motion.div> */}
          {t["home_i"]}
        </Typography>
        <motion.div animate={controls} custom={1}>
          {/* <VideoLogo /> */}
        </motion.div>
        <Typography
          component={motion.p}
          animate={controls}
          custom={2}
          variant="h2"
          color="secondary"
          className={classes.subTitle}
          sx={{
            marginBottom: "16px",
            fontSize: "75px",
            [theme.breakpoints.down("md")]: {
              fontSize: "45px",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "35px",
            },
          }}
        >
          {t["home_what_i_do"]}
        </Typography>
        <Typography
          component={motion.p}
          animate={controls}
          custom={3}
          variant="body2"
          color={theme.palette.text.secondary}
          style={{ marginBottom: "0" }}
        >
          {t["home_job"]}
        </Typography>
        <Typography
          component={motion.p}
          animate={controls}
          custom={4}
          variant="body1"
          color={theme.palette.text.secondary}
          style={{ marginBottom: "30px" }}
        >
          {t["home_location"]}
        </Typography>
        <motion.div animate={controls} custom={5}>
          <Button
            component={SLink}
            spy
            smooth
            offset={0}
            duration={500}
            to="contact"
            variant="outlined"
            color="primary"
            size="large"
          >
            {t["home_contact_btn"]}
          </Button>
        </motion.div>
      </div>
    </StyledHomeContainer>
  );
};

export default Home;
