import { Box } from "@chakra-ui/react";
import React from "react";
import {
  RiDashboardLine,
  RiFolder3Line,
  RiGroupLine,
  RiSettings2Line,
  RiShoppingCartLine,
  RiStore3Line,
} from "react-icons/ri";
import useMedia from "../hooks/useMedia";
import SideMenu from "./SideMenu";
import SidemenuItem from "./SidemenuItem";

const AdminSideMenu = () => {
  const { isTablet } = useMedia();

  return (
    <SideMenu>
      <Box
        display="flex"
        flexDir="column"
        alignItems={isTablet ? "center" : "start"}
        gap={4}
        px={5}
        py={10}
      >
        <SidemenuItem
          menuTitle="Dashboard"
          linkIcon={RiDashboardLine}
          place="/admin"
        />
        <SidemenuItem
          menuTitle="Categories"
          linkIcon={RiFolder3Line}
          place="categories"
        />
        <SidemenuItem
          menuTitle="Products"
          linkIcon={RiStore3Line}
          place="products"
        />
        <SidemenuItem
          menuTitle="Orders"
          linkIcon={RiShoppingCartLine}
          place="orders"
        />
        <SidemenuItem
          menuTitle="Customers"
          linkIcon={RiGroupLine}
          place="customers"
        />

        <SidemenuItem
          menuTitle="Settings"
          linkIcon={RiSettings2Line}
          place="settings"
        />
      </Box>
    </SideMenu>
  );
};

export default AdminSideMenu;
