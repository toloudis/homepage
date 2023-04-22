import { styled } from "@mui/material/styles";
import {
  Container,
  Typography,
  Divider,
  useTheme,
  Box,
  useMediaQuery,
} from "@mui/material";
import Social from "../Social";

const PREFIX = "Footer";

const classes = {
  footer: `${PREFIX}-footer`,
};

const StyledContainer = styled(Container)(({ theme }) => ({
  [`& .${classes.footer}`]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
  },
}));

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <StyledContainer>
      <Divider style={{ backgroundColor: theme.palette.primary.main }} />
      <Box className={classes.footer}>
        {isMobile && <Social mobile />}
        <Typography variant="body2" color="initial">
          © 2023 Completely Different Productions
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default Footer;
