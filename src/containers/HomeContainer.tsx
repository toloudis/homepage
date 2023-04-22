import React from "react";
//import { styled } from "@mui/material/styles";
import { Container, useTheme } from "@mui/material";
//const PREFIX = "HomeContainer";

// const classes = {
//   container: `${PREFIX}-container`,
// };

// const StyledContainer = styled(Container)(({ theme }) => ({
//   [`&.${classes.container}`]: {
//     minHeight: "100vh",
//     display: "flex",
//     alignItems: "center",
//     paddingTop: `calc( ${theme.spacing(4)} + ${theme.navbarHeight} ) `,
//     paddingBottom: theme.spacing(4),
//     [theme.breakpoints.down("md")]: {
//       paddingTop: theme.navbarHeight,
//     },
//   },
// }));

interface HomeContainerProps {
  id: string;
  [x: string]: any;
}
const HomeContainer: React.FC<React.PropsWithChildren<HomeContainerProps>> = ({
  children,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: `calc( ${theme.spacing(4)} + ${theme.navbarHeight} ) `,
        paddingBottom: theme.spacing(4),
        [theme.breakpoints.down("md")]: {
          paddingTop: theme.navbarHeight,
        },
      }}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default HomeContainer;
