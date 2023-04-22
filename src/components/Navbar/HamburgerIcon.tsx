import React, { useEffect } from "react";
import { styled } from '@mui/material/styles';
import { motion, useAnimation } from "framer-motion";

const PREFIX = 'HamburgerIcon';

const classes = {
    container: `${PREFIX}-container`,
    line: `${PREFIX}-line`,
    line1: `${PREFIX}-line1`,
    line2: `${PREFIX}-line2`,
    line3: `${PREFIX}-line3`
};

const Root = styled(motion.div)((
    {
        theme
    }
) => ({
    [`& .${classes.container}`]: {
        overflow:'hidden',
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-end",
        cursor:"pointer",
        padding:"2px"
    },

    [`& .${classes.line}`]: {
        height: "3px",
        backgroundColor: theme.palette.text.secondary,
    },

    [`& .${classes.line1}`]: {
        width: "35px",
        marginBottom: "7px",
    },

    [`& .${classes.line2}`]: {
        width: "25px",
        marginBottom: "7px",
    },

    [`& .${classes.line3}`]: {
        width: "35px",
    }
}));

const HamburgerIcon:React.FC<{isOpen:boolean, [x:string]: any}> = ({isOpen,...rest}) => {
    const controls = useAnimation()

    useEffect(() => {
        if (isOpen) {
            controls.start("animate")
        } else {
            controls.start("initial")
        }
    }, [isOpen,controls]);
    return (
        <Root className={classes.container} {...rest}>
            <motion.div className={`${classes.line} ${classes.line1}`} variants={{initial:{rotate:0,y:0}, animate:{rotate:45,y:9}}} animate={controls}></motion.div>
            <motion.div className={`${classes.line} ${classes.line2}`} variants={{initial:{x:0,opacity:1}, animate:{x:250,opacity:0}}} animate={controls}></motion.div>
            <motion.div className={`${classes.line} ${classes.line3}`} variants={{initial:{rotate:0,y:0}, animate:{rotate:-45,y:-9}}} animate={controls}></motion.div>
        </Root>
    );
};

export default HamburgerIcon;
