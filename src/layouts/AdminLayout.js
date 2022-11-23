import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import AdminSideMenu from "../components/AdminSideMenu";
import { useSelector } from "react-redux";
import { widthAdjuster } from "../utils/Responsive";

const AdminLayout = ({ children }) => {
  const { isSidebar, currentDevice } = useSelector((state) => state.ui);

  const dynamicWidth = widthAdjuster(currentDevice, isSidebar);
  return (
    <Box>
      <Box>
        <AdminSideMenu />
      </Box>
      <Navbar />
      <Box
        minH="100vh"
        w={dynamicWidth?.navbar}
        ml={"auto"}
        mt="5rem"
        p={5}
        // px={isMobile ? 10 : 20}
        // py={10}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
