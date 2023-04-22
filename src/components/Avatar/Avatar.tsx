import { styled } from "@mui/material/styles";
import AvatarImg from "../../assets/images/Bobdobbs.png";

const PREFIX = "Avatar";

const classes = {
  avatarImg: `${PREFIX}-avatarImg`,
};

const Root = styled("img")(({ theme }) => ({
  [`&.${classes.avatarImg}`]: {
    backgroundColor: "white", // to match the dobbshead background
    borderRadius: "50%",
    width: "270px",
    height: "270px",
    objectFit: "contain", //"cover",
    objectPosition: "50% 0", //"0 -60px",
    boxShadow: theme.shadows[10],
  },
}));

const Avatar = () => {
  return (
    <Root
      src={AvatarImg}
      alt="Completely Different"
      className={classes.avatarImg}
    />
  );
};

export default Avatar;
