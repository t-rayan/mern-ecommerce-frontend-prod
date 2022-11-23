import { Box, calc, Grid, GridItem, useMediaQuery } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import useMedia from "../hooks/useMedia";
import UserSideMenu from "../components/UserSideMenu";
import { widthAdjuster } from "../utils/Responsive";
import { useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const { isMobile, isTablet, isMedium, isLargeDevice } = useMedia();
  const { isSidebar, currentDevice } = useSelector((state) => state.ui);

  const dynamicWidth = widthAdjuster(currentDevice, isSidebar);
  return (
    <Box>
      <Box>
        <UserSideMenu />
      </Box>
      <Navbar />
      <Box
        minH="100vh"
        w={dynamicWidth?.navbar}
        ml="auto"
        mt="5rem"
        px={isLargeDevice ? "2rem" : "1rem"}
        py={10}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
