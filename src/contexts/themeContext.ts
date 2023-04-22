import React from "react";

export default React.createContext({
  isDarkMode: true,
  setIsDarkMode: (_: boolean) => {},
});
