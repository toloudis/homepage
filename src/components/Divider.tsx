import { styled } from "@mui/material/styles";
//const PREFIX = "Divider";

// const classes = {
//   root: `${PREFIX}-root`,
// };

const Root = styled("div")(({ theme: _theme }) => ({
  //   [`&.${classes.root}`]: {
  //     display: "inline",
  //     width: (props: { fullWidth: boolean; width: string }) =>
  //       props.fullWidth ? "100%" : props.width,
  //     height: "1px",
  //     backgroundColor: "red",
  //   },
}));

interface DividerProps {
  fullWidth?: boolean;
  width?: string;
  [x: string]: any;
}
const Divider: React.FC<DividerProps> = ({ fullWidth, width, ...rest }) => {
  return (
    <Root
      //className={classes.root}
      sx={{
        display: "inline",
        width: fullWidth ? "100%" : width,
        height: "1px",
        backgroundColor: "red",
      }}
      {...rest}
    ></Root>
  );
};

export default Divider;
