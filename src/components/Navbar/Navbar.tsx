import React, { useContext, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  Hidden,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import Logo from "./Logo";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import HamburgerIcon from "./HamburgerIcon";
import loaderContext from "../../contexts/loaderContext";

const PREFIX = "Navbar";

const classes = {
  logo: `${PREFIX}-logo`,
  navbar: `${PREFIX}-navbar`,
  toolbar: `${PREFIX}-toolbar`,
};

const Root = styled(motion.div)(({ theme }) => ({
  [`& .${classes.logo}`]: {
    width: "150px",
  },

  [`& .${classes.navbar}`]: {
    backgroundColor: theme.palette.background.default,
  },

  [`& .${classes.toolbar}`]: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: (props: { isMobile: boolean }) =>
      props.isMobile ? theme.spacing(0, 2) : theme.spacing(0, 6),
  },
}));

const Navbar: React.FC = () => {
  const [homeIsActive, setHomeIsActive] = useState(true);
  const isMobile = useMediaQuery("(max-width:700px)");
  const { isLoading } = useContext(loaderContext);
  const controls = useAnimation();
  const theme = useTheme();
  const [scroll, setScroll] = useState(false);
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  useEffect(() => {
    const handleNav = () => setScroll(window.scrollY > 30);
    window.addEventListener("scroll", handleNav);
  });

  const appbarVariants = {
    initial: { height: isMobile ? 70 : 100, boxShadow: theme.shadows[0] },
    scrolled: { height: theme.navbarHeight, boxShadow: theme.shadows[10] },
  };

  useEffect(() => {
    if (!isLoading) {
      controls.start({
        y: 0,
        transition: {
          delay: 0.05,
          type: "spring",
          stiffness: 260,
          damping: 20,
        },
      });
    } else {
      controls.start({ y: 0 });
    }
  }, [isLoading, controls]);

  return (
    <Root animate={controls}>
      <AppBar
        position="fixed"
        elevation={0}
        className={classes.navbar}
        component="nav"
      >
        <Toolbar
          className={classes.toolbar}
          component={motion.div}
          variants={appbarVariants}
          animate={scroll ? "scrolled" : "initial"}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Logo className={classes.logo} setHomeIsActive={setHomeIsActive} />
          <Hidden mdDown>
            <Menu homeIsActive={homeIsActive} />
          </Hidden>
          <Hidden mdUp>
            <HamburgerIcon
              isOpen={mobileNavIsOpen}
              onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}
            />
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <MobileMenu
          open={mobileNavIsOpen}
          onClose={() => setMobileNavIsOpen(false)}
          onOpen={() => setMobileNavIsOpen(true)}
        />
      </Hidden>
    </Root>
  );
};

export default Navbar;
