import { styled } from "@mui/material/styles";
import { useTheme, Grid, Typography, Box, useMediaQuery } from "@mui/material";
import SectionContainer from "../../containers/SectionContainer";
import Skills from "../../components/Skills";
import Avatar from "../../components/Avatar";
import t from "../../i18n";

//const PREFIX = "About";

// const classes = {
//   gridItemWrapper: `${PREFIX}-gridItemWrapper`,
// };

const StyledSectionContainer = styled(SectionContainer)(
  ({ theme: _theme }) => ({
    // [`& .${classes.gridItemWrapper}`]: {
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    // },
  })
);

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <StyledSectionContainer id="about" title={t["menu_about"]} maxWidth="md">
      <Grid container spacing={0} alignItems="center" style={{ width: "100%" }}>
        {isMobile && (
          <Grid
            item
            xs={12}
            md={5}
            //className={classes.gridItemWrapper}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box mb={6}>
              <Avatar />
            </Box>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={7}
          //className={classes.gridItemWrapper}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          style={{ flexDirection: "column", alignItems: "space-around" }}
        >
          <Box mb={4}>
            <Typography variant="body1">{t["about_desc"]}</Typography>
          </Box>
          <Skills />
        </Grid>
        {!isMobile && (
          <Grid
            item
            xs={12}
            md={5}
            //className={classes.gridItemWrapper}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar />
          </Grid>
        )}
      </Grid>
    </StyledSectionContainer>
  );
};

export default About;
