import React, { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import { Tab, Tabs, Button, Link as MuiLink } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { Link, Events } from "react-scroll";
import LoaderContext from "../../contexts/loaderContext";
import t from "../../i18n";

const PREFIX = "Menu";

const classes = {
  root: `${PREFIX}-root`,
  indicator: `${PREFIX}-indicator`,
  wrapper: `${PREFIX}-wrapper`,
  tabs: `${PREFIX}-tabs`,
  navMenuItem: `${PREFIX}-navMenuItem`,
};

const PreStyledTab: React.FC<{ [x: string]: any }> = (props) => (
  <Tab disableRipple {...props} />
);

const StyledTab = styled(PreStyledTab)(({ theme }) => ({
  [`& .${classes.root}`]: {
    transition: ".2s",
    minWidth: 120,
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },

  [`& .${classes.indicator}`]: {
    "& > span": {
      maxWidth: 20,
    },
  },
}));

const PreStyledTabs: React.FC<{ [x: string]: any }> = (props) => (
  <Tabs
    {...props}
    variant="fullWidth"
    TabIndicatorProps={{ children: <span /> }}
    classes={{
      indicator: classes.indicator,
    }}
  />
);

const StyledTabs = styled(PreStyledTabs)(({ theme }) => ({
  [`& .${classes.wrapper}`]: {
    display: "flex",
    alignItems: "center",
  },

  [`& .${classes.tabs}`]: {
    marginRight: theme.spacing(4),
  },

  [`& .${classes.navMenuItem}`]: {
    marginRight: theme.spacing(1),
  },
}));

interface Props {
  custom: number;
  animate: boolean;
  to: string;
}
export type Ref = HTMLDivElement;
const AnimatedLink = React.forwardRef<Ref, Props>((props, ref) => (
  <motion.div ref={ref} custom={props.custom} animate={props.animate}>
    <Link spy smooth offset={-70} duration={500} {...props} />
  </motion.div>
));

const Menu: React.FC<{ homeIsActive: boolean }> = ({ homeIsActive }) => {
  const [value, setValue] = useState<number | boolean>(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const { isLoading } = useContext(LoaderContext);
  const controls = useAnimation();

  useEffect(() => {
    Events.scrollEvent.register("begin", (_to, _element) => {
      setIsScrolling(true);
    });

    Events.scrollEvent.register("end", (_to, _element) => {
      setIsScrolling(false);
    });
  });

  useEffect(() => {
    if (!isLoading) {
      controls.start((i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.1 + 0.3 },
      }));
    } else {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isLoading, controls]);

  const handleChange = (_event: React.SyntheticEvent, newValue: boolean) => {
    setValue(newValue);
  };

  const spyHandleChange = (index: number | boolean) => {
    if (!isScrolling) {
      setValue(index);
    }
  };

  useEffect(() => {
    if (homeIsActive) {
      setValue(false);
    }
  }, [homeIsActive]);

  return (
    <div
      className={classes.wrapper}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <StyledTabs
        className={classes.tabs}
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        classes={{
          indicator: classes.indicator,
        }}
      >
        <StyledTab
          component={AnimatedLink}
          custom={0}
          animate={controls}
          to="about"
          label={t["menu_about"]}
          onSetActive={() => spyHandleChange(0)}
          onSetInactive={() => spyHandleChange(false)}
          classes={{
            root: classes.root,
          }}
        />
        <StyledTab
          component={AnimatedLink}
          animate={controls}
          custom={1}
          to="experience"
          label={t["menu_experience"]}
          onSetActive={() => spyHandleChange(1)}
          classes={{
            root: classes.root,
          }}
        />
        <StyledTab
          component={AnimatedLink}
          animate={controls}
          custom={2}
          to="projects"
          label={t["menu_projects"]}
          onSetActive={() => spyHandleChange(2)}
          classes={{
            root: classes.root,
          }}
        />
        <StyledTab
          component={AnimatedLink}
          animate={controls}
          custom={3}
          to="contact"
          label={t["menu_contact"]}
          onSetActive={() => spyHandleChange(3)}
          classes={{
            root: classes.root,
          }}
        />
      </StyledTabs>
      <motion.div custom={4} animate={controls}>
        <Button
          component={MuiLink}
          href="/resume.pdf"
          variant="outlined"
          color="primary"
          underline="none"
        >
          {t["menu_resume"]}
        </Button>
      </motion.div>
    </div>
  );
};

export default Menu;
