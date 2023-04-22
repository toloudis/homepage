import { styled } from '@mui/material/styles';
import { motion } from "framer-motion";
import React from "react";

const PREFIX = 'ProgressBar';

const classes = {
    container: `${PREFIX}-container`,
    progress: `${PREFIX}-progress`
};

const Root = styled('div')((
    {
        theme
    }
) => ({
    [`&.${classes.container}`]: {
        width: "100%",
        height: "1px",
        backgroundColor: "rgb(60,60,60)",
    },

    [`& .${classes.progress}`]: {
        // width:"50%",
        height: "1px",
        backgroundColor: theme.palette.primary.main,
    }
}));

const ProgressBar:React.FC<{value:number}> = ({ value }) => {

    return (
        <Root className={classes.container}>
            <motion.div initial={{width:"0%"}} animate={{width:`${value}%`}} className={classes.progress}></motion.div>
        </Root>
    );
};

export default ProgressBar;
