import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getAllCategories } from "../features/category/categorySlice";
import { hideSidebar } from "../features/ui/uiSlice";
import useMedia from "../hooks/useMedia";
import SideMenu from "./SideMenu";

const UserSideMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLargeDevice } = useMedia();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <SideMenu>
      <Box display="flex" flexDir="column" alignItems={"start"} px={5} py={10}>
        <Text
          mb={3}
          fontWeight="bold"
          fontSize="1.1rem"
          cursor="pointer"
          color="gray.600"
          px={3}
          onClick={() => navigate("/")}
        >
          All Categories
        </Text>
        <Box display="grid" gap={2} w="100%">
          {categories?.map((cat) => (
            <Box key={cat._id}>
              <NavLink
                to={`/${cat?.name.replace(/\s/g, "")}/products`}
                cursor={"pointer"}
                fontWeight="medium"
                key={cat?._id}
                onClick={() => {
                  !isLargeDevice && dispatch(hideSidebar());
                }}
              >
                {({ isActive }) => (
                  <Box
                    p={3}
                    borderRadius="5px"
                    bg={isActive && "orange.100"}
                    _hover={{ bg: "gray.100" }}
                    shadow={isActive && "sm"}
                  >
                    <Text
                      fontWeight={isActive && "medium"}
                      color={isActive ? "orange.600" : "gray.500"}
                    >
                      {cat?.name}
                    </Text>
                  </Box>
                )}
              </NavLink>
            </Box>
          ))}
        </Box>
      </Box>
    </SideMenu>
  );
};

export default UserSideMenu;
