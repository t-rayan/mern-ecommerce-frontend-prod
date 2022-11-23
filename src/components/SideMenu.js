import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { RiMenu2Line } from "react-icons/ri";
import useMedia from "../hooks/useMedia";
import { useSelector, useDispatch } from "react-redux";
import { hideSidebar, toggleSidebar } from "../features/ui/uiSlice";
import { widthAdjuster } from "../utils/Responsive";

const SideMenu = ({ children }) => {
  const dispatch = useDispatch();
  const { isMobile, isTablet, isLargeDevice } = useMedia();
  const { isSidebar, currentDevice } = useSelector((state) => state.ui);

  const dynamicWidth = widthAdjuster(currentDevice, isSidebar);

  useEffect(() => {
    if (!isLargeDevice) {
      dispatch(hideSidebar());
    }

    return () => {
      dispatch(toggleSidebar());
    };
  }, [dispatch, isMobile, isTablet, isLargeDevice]);

  return (
    isSidebar && (
      <Box
        h="100vh"
        borderRight="2px"
        borderRightColor="gray.200"
        pos="fixed"
        top={0}
        left={0}
        bg="white"
        zIndex="111"
        w={dynamicWidth.sidebar}
        backdropBlur={20}
        // display={isSidebar ? "grid" : "none"}
        // justifyContent={isTablet && "center"}
      >
        <Box display="grid" gridTemplateRows="5rem 1fr">
          <Box
            bg="white"
            w="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom="2px"
            borderBottomColor="gray.200"
            px={5}
          >
            <Heading color="orange.500" size="md">
              {" "}
              MobileHub{" "}
            </Heading>
            <Icon
              as={RiMenu2Line}
              w={"20px"}
              h={"20px"}
              color="gray.400"
              cursor="pointer"
              _hover={{ color: "black" }}
              visibility={isMobile || isTablet ? "visible" : "hidden"}
              onClick={() => dispatch(hideSidebar())}
            />
          </Box>

          {children}
        </Box>
      </Box>
    )
  );
};

export default SideMenu;
