import { lazy } from "react";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
const MainHome = lazy(() => import("./pages/MainHome"));
const Navbar = lazy(() => import("./components/Navbar"));
const Social = lazy(() => import("./components/Social"));
const Footer = lazy(() => import("./components/Footer"));
//const Loader = lazy(() => import("./components/Loader"));

const TheRoutes: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      {/* <Loader /> */}
      <Navbar />
      {!isMobile && <Social mobile={isMobile} />}
      <Routes>
        <Route path="/" element={<MainHome />} />
      </Routes>
      <Footer />
    </>
  );
};

export default TheRoutes;
