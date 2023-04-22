import React from "react";

export default React.createContext({
  isLoading: false,
  setIsLoading: (_isLoading: boolean) => {},
});
