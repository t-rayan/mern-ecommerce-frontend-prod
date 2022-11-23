import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAll } from "../features/cart/cartSlice";
import { showAddandBillingScreen } from "../features/ui/uiSlice";
import CartItem from "./CartItem";

const MyCart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Box shadow="lg" p={4} borderRadius="10px">
      <Flex gap={2} justifyContent="space-between" alignItems="center">
        <Box display="flex">
          <Heading size="md">Cart </Heading>{" "}
          <Text>({cartItems?.length} items)</Text>{" "}
        </Box>
        {cartItems?.length > 0 && (
          <Button
            size="sm"
            variant="ghost"
            colorScheme="red"
            onClick={() => dispatch(removeAll())}
          >
            Clear all
          </Button>
        )}
      </Flex>
      {/* cart table */}
      <Grid mt={4} gap={5}>
        <Grid
          bg="gray.200"
          p=".9rem"
          borderRadius="10px"
          templateColumns="1fr 5.5rem 8rem 5.5rem .2fr"
          color="gray.500"
          fontWeight="medium"
          fontSize=".9rem"
        >
          <GridItem>Product</GridItem>
          <GridItem>Price</GridItem>
          <GridItem>Quantity</GridItem>
          <GridItem>Total Price</GridItem>
          <GridItem></GridItem>
        </Grid>

        {/* list of cart items */}
        {cartItems?.length > 0 ? (
          <Box>
            {cartItems?.map((i) => (
              <CartItem key={i.id} product={i} />
            ))}
          </Box>
        ) : (
          <Box display="grid" placeItems="center">
            <Heading size="md" color="gray.400">
              Cart is empty
            </Heading>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default MyCart;
