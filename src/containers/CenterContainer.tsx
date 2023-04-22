import { styled } from "@mui/material/styles";
const PREFIX = "CenterContainer";

const classes = {
  container: `${PREFIX}-container`,
  content: `${PREFIX}-content`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.container}`]: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
  },

  [`& .${classes.content}`]: {
    margin: "0 auto",
  },
}));

const CenterContainer: React.FC<React.PropsWithChildren> = (_props) => {
  return (
    <Root className={classes.container}>
      {/* <div className={classes.content}> {children}</div> */}
    </Root>
  );
};

export default CenterContainer;
