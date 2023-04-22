import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, useTheme, Paper } from "@mui/material";
//import ProgressBar from "./ProgressBar";
import { skillsList } from "../../data";

const PREFIX = "Skills";

const classes = {
  container: `${PREFIX}-container`,
  skillWrapper: `${PREFIX}-skillWrapper`,
  skillTitle: `${PREFIX}-skillTitle`,
  paper: `${PREFIX}-paper`,
};

const Root = styled("div")(({ theme }) => ({
  [`& .${classes.container}`]: {
    maxWidth: "600px",
    display: "flex",
    flexWrap: "wrap",
  },

  [`&.${classes.skillWrapper}`]: {
    width: "100%",
  },

  [`& .${classes.skillTitle}`]: {
    whiteSpace: "nowrap",
    marginRight: theme.spacing(1),
  },

  [`& .${classes.paper}`]: {
    marginRight: "10px",
    marginBottom: "10px",
    minWidth: "50px",
    padding: "10px",
  },
}));

// function LinearProgressWithLabel({ title, value }) {

//     return (
//         <Root className={classes.skillWrapper}>
//             <Typography variant="body2" display="inline" component="span" className={classes.skillTitle}>
//                 {title}
//             </Typography>
//             <Box display="flex" alignItems="center" mb={2}>
//                 <Box width="100%" mr={1}>
//                     <ProgressBar value={value} />
//                 </Box>
//             </Box>
//         </Root>
//     );
// }

const Skills: React.FC = () => {
  useTheme();
  return (
    <Root
      //className={classes.container}
      sx={{
        maxWidth: "600px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {skillsList.map((elem, k) => (
        <Paper
          elevation={10}
          key={k}
          //className={classes.paper}
          sx={{
            marginRight: "10px",
            marginBottom: "10px",
            minWidth: "50px",
            padding: "10px",
          }}
        >
          <Typography align="center">{elem.title}</Typography>
        </Paper>
      ))}
    </Root>
  );
};

export default Skills;
