import { Box, Grid, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackBtn from "../components/BackBtn";
import MultiStepForm from "../components/MultiStepForm";
import OrderSummary from "../components/OrderSummary";
import { showCartScreen } from "../features/ui/uiSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(showCartScreen("apple"));
  }, [dispatch]);

  return (
    <Box h="100%">
      <BackBtn btnTitle={"Checkout"} />
      <Grid templateColumns="1fr .5fr" mt={"4rem"} gap={5} h="100%">
        <Box>
          <MultiStepForm />
        </Box>
        <Box>{cartItems?.length > 0 && <OrderSummary />}</Box>
      </Grid>
    </Box>
  );
};

export default Checkout;
