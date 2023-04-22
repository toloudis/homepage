import { styled } from "@mui/material/styles";
import { Link } from "react-scroll";
import LogoSVG from "../../assets/images/Logo";

const PREFIX = "Logo";

const classes = {
  root: `${PREFIX}-root`,
};

const StyledLink = styled(Link)(({ theme: _theme }) => ({
  [`&.${classes.root}`]: {
    cursor: "pointer",
  },
}));

const Logo: React.FC<{
  setHomeIsActive: (x: boolean) => void;
  [x: string]: any;
}> = ({ setHomeIsActive, ...rest }) => {
  return (
    <StyledLink
      spy
      smooth
      duration={500}
      offset={-70}
      to="home"
      onSetActive={() => setHomeIsActive(true)}
      onSetInactive={() => setHomeIsActive(false)}
      className={classes.root}
    >
      <LogoSVG {...rest} />
    </StyledLink>
  );
};

export default Logo;
