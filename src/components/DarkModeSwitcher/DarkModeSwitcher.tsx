import React, { useContext } from "react";
import { Switch, FormControlLabel } from "@mui/material";
import ThemeContext from "../../contexts/themeContext";
import t from "../../i18n";

const DarkModeSwitcher:React.FC<{onClose?:()=>void}> = ({ onClose }) => {
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
    return (
        <FormControlLabel
            control={
                <Switch
                    checked={isDarkMode}
                    name="checkedDarkMode"
                    color="primary"
                    onChange={() => {
                        if (onClose) {
                            onClose();
                        }
                        setIsDarkMode(!isDarkMode);
                    }}
                />
            }
            label={t['dark_mode']}
        />
    );
};

export default DarkModeSwitcher;
