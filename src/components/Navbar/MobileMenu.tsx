import React from "react";
import { styled } from "@mui/material/styles";
import {
  Drawer,
  List,
  Button,
  Divider,
  ListItem,
  ListItemButton,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-scroll";
import DarkModeSwitcher from "../DarkModeSwitcher";
import t from "../../i18n";
import { ReactScrollLinkProps } from "react-scroll/modules/components/Link";

const PREFIX = "MobileMenu";

const classes = {
  drawer: `${PREFIX}-drawer`,
  list: `${PREFIX}-list`,
  fullList: `${PREFIX}-fullList`,
  listItem: `${PREFIX}-listItem`,
  btnContainer: `${PREFIX}-btnContainer`,
  active: `${PREFIX}-active`,
};

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  [`& .${classes.drawer}`]: {
    backgroundColor: theme.palette.background.default,
  },

  [`& .${classes.list}`]: {
    width: 250,
  },

  [`& .${classes.fullList}`]: {
    width: "auto",
    marginTop: theme.spacing(4),
  },

  [`& .${classes.listItem}`]: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2, 0),
    "&:hover": {
      backgroundColor: "rgb(80,80,80)",
    },
  },

  [`& .${classes.btnContainer}`]: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(1),
  },

  [`& .${classes.active}`]: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const MobileMenu: React.FC<{ open: any; onClose: any; onOpen: any }> = (
  props
) => {
  const { open, onClose } = props;
  const listItemProps: Partial<ReactScrollLinkProps> = {
    activeClass: classes.active,
    duration: 500,
    offset: 0,
    smooth: true,
    spy: true,
    onClick: onClose,
    //onKeyDown: onClose,
  };
  return (
    <StyledDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      classes={{ paper: classes.drawer }}
    >
      <div className={classes.list} role="presentation">
        <List className={classes.fullList}>
          <ListItemButton
            className={classes.listItem}
            {...listItemProps}
            component={Link}
            to="about"
          >
            {t["menu_about"]}
          </ListItemButton>
          <ListItemButton
            className={classes.listItem}
            {...listItemProps}
            component={Link}
            to="experience"
          >
            {t["menu_experience"]}
          </ListItemButton>
          <ListItemButton
            className={classes.listItem}
            {...listItemProps}
            component={Link}
            to="projects"
          >
            {t["menu_projects"]}
          </ListItemButton>
          <ListItemButton
            className={classes.listItem}
            {...listItemProps}
            component={Link}
            to="contact"
          >
            {t["menu_contact"]}
          </ListItemButton>
          <ListItem className={classes.btnContainer}>
            <Button
              component={MuiLink}
              href="/resume.pdf"
              variant="outlined"
              color="primary"
              underline="none"
            >
              {t["menu_resume"]}
            </Button>
          </ListItem>
          <ListItem className={classes.btnContainer}>
            <DarkModeSwitcher onClose={onClose} />
          </ListItem>
          <Divider />
        </List>
      </div>
    </StyledDrawer>
  );
};

export default MobileMenu;
