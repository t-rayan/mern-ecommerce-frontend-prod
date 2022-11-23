import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAddandBillingScreen } from "../features/ui/uiSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createPayment } from "../features/payment/paymentSlice";
import { createOrder } from "../features/order/orderServices";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isCartScreen } = useSelector((state) => state.ui);
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.payment);

  function getSubTotal() {
    let subTotal;
    let items = [...cartItems];

    if (items.length > 0) {
      subTotal = items.map((b) => b.total).reduce((a, b) => a + b);
      return subTotal;
    } else {
      return 0;
    }
  }

  const handleCheckout = () => {
    let paymentInfo = {
      cartItems,
      userId: userInfo?.id,
      // userId: userInfo?.id,
    };
    if (userInfo === null) {
      navigate("/login");
    }

    dispatch(createPayment({ paymentInfo }));
    // createOrder(cartItems);
  };

  return (
    <Box display="grid" gap={"1.5rem"}>
      <Box p={5} shadow="lg" borderRadius="10px">
        <Heading size="md">Order Summary</Heading>
        <Box mt={10} display="grid" gap={4}>
          <Flex
            color="gray.400"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>Amount</Text>
            <Text> $2400 </Text>
          </Flex>
          <Flex
            color="gray.400"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>Discounts</Text>
            <Text> 0 </Text>
          </Flex>
        </Box>
        <Divider my={5} />
        <Flex
          color="black"
          justifyContent="space-between"
          alignItems="center"
          fontWeight="medium"
          fontSize="1.1rem"
        >
          <Text>Sub Total</Text>
          <Box>
            <Text color="red.300">
              {getSubTotal()}
              {/* {cartItems.length > 0 && getCartSubtotal()}{" "} */}
            </Text>
          </Box>
        </Flex>
      </Box>
      {isCartScreen && (
        <Button
          disabled={isLoading}
          colorScheme="orange"
          size="lg"
          onClick={handleCheckout}
        >
          {isLoading ? "Please Wait..." : "Checkout"}
        </Button>
      )}
    </Box>
  );
};

export default OrderSummary;
