import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Language, Facebook, Instagram } from "@mui/icons-material";
import { experienceList } from "../../data";
import IconBtn from "../IconBtn";
import t from "../../i18n";

const PREFIX = "StyledTabs";

const classes = {
  root: `${PREFIX}-root`,
  tabs: `${PREFIX}-tabs`,
  indicator: `${PREFIX}-indicator`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: (props: { isMobile: boolean }) =>
      props.isMobile ? "column" : "row",
  },

  [`& .${classes.tabs}`]: {
    borderRight: (props: { isMobile: boolean }) =>
      props.isMobile ? "none" : `1px solid ${theme.palette.secondary.main}`,
    borderBottom: (props: { isMobile: boolean }) =>
      !props.isMobile ? "none" : `1px solid ${theme.palette.secondary.main}`,
    width: (props: { isMobile: boolean }) =>
      props.isMobile ? "inherit" : "200px",
    maxWidth: (props: { isMobile: boolean }) =>
      props.isMobile ? "inherit" : "200px",
    minWidth: (props: { isMobile: boolean }) =>
      props.isMobile ? "inherit" : "200px",
  },

  [`& .${classes.indicator}`]: {
    backgroundColor: "red",
  },
}));

interface TabPanelProps {
  index: number;
  value: number | boolean;
  [x: string]: any;
}
const TabPanel: React.FC<React.PropsWithChildren<TabPanelProps>> = (props) => {
  const { children, value, index, ...other } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} minHeight={isMobile ? 0 : "350px"}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
};

const StyledTabs: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState<number | boolean>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: boolean) => {
    setValue(newValue);
  };

  return (
    <Root
      className={classes.root}
      sx={{
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <Tabs
        orientation={isMobile ? "horizontal" : "vertical"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
        sx={{
          borderRight: isMobile
            ? "none"
            : `1px solid ${theme.palette.secondary.main}`,
          borderBottom: !isMobile
            ? "none"
            : `1px solid ${theme.palette.secondary.main}`,
          width: isMobile ? "inherit" : "200px",
          maxWidth: isMobile ? "inherit" : "200px",
          minWidth: isMobile ? "inherit" : "200px",
        }}
        classes={{ indicator: classes.indicator }}
        centered
      >
        {experienceList.map((elem) => (
          <Tab label={elem.company} key={elem.id} />
        ))}
      </Tabs>
      {experienceList.map((elem) => (
        <TabPanel value={value} index={elem.id} key={elem.id}>
          <Box mb={4}>
            <Typography variant="h5">
              {t.experience[elem.id].job} @{" "}
              <Link
                href={
                  elem.links.website ||
                  elem.links.facebook ||
                  elem.links.instagram
                }
                color="primary"
                underline="hover"
              >
                {elem.company}
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" fontSize="14">
              {t.experience[elem.id].duration}
            </Typography>
          </Box>
          <Box mb={4}>
            <Typography variant="body1" color="textPrimary">
              {t.experience[elem.id].overview}
            </Typography>
          </Box>
          <Box>
            {elem.links.website && (
              <IconBtn
                icon={Language}
                fontSize={28}
                m={1}
                href={elem.links.website}
              />
            )}
            {elem.links.facebook && (
              <IconBtn
                icon={Facebook}
                fontSize={28}
                m={1}
                href={elem.links.facebook}
              />
            )}
            {elem.links.instagram && (
              <IconBtn
                icon={Instagram}
                fontSize={28}
                m={1}
                href={elem.links.instagram}
              />
            )}
          </Box>
        </TabPanel>
      ))}
    </Root>
  );
};

export default StyledTabs;
