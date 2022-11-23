import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  useRadioGroup,
} from "@chakra-ui/react";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import {
  RiArrowLeftSLine,
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { useDispatch } from "react-redux";
import { showAddandBillingScreen } from "../features/ui/uiSlice";
import { Elements } from "@stripe/react-stripe-js";

import CustomRadio from "./CustomRadio";
import CheckoutForm from "./CheckoutForm";

// loading stripe outside of component function

const PaymentForm = () => {
  const dispatch = useDispatch();
  const [clientSecret, setClientSecret] = useState("");
  const [deliveryType, setDeliveryType] = useState("standard");

  const deliveryOptions = [
    {
      id: "1",
      value: "standard",
      option: "Standard Delivery(Free)",
      deliveredOn: "Delivered on Monday, August 12",
    },
    {
      id: "2",
      value: "fast",
      option: "Fast Delivery($2)",
      deliveredOn: "Delivered on Monday, August 1",
    },
  ];

  const handleDeliveryType = (value) => {
    if (deliveryType === value) {
      return;
    } else {
      setDeliveryType(value);
    }
  };

  return (
    <Box display="grid" gap={5}>
      {/* main contents */}
      <Box shadow="xl" p="1.5rem" borderRadius="10px">
        <Heading size="md">Delivery Options</Heading>
        {/* delivery options */}
        <Grid
          templateColumns="1fr 1fr"
          mt={"2rem"}
          justifyContent="space-between"
          alignItems="center"
          gap={5}
        >
          {deliveryOptions.map((opt) => (
            <Flex
              gap={3}
              px={5}
              py={"2rem"}
              borderRadius={"10px"}
              border="1px solid"
              borderColor="gray.200"
              alignItems="center"
              cursor="pointer"
              onClick={() => handleDeliveryType(opt.value)}
              key={opt.id}
            >
              <Icon
                color={deliveryType === opt.value ? "green.500" : "gray.500"}
                as={
                  deliveryType === opt.value
                    ? RiCheckboxCircleFill
                    : RiCheckboxBlankCircleLine
                }
                h={6}
                w={6}
              />
              <Box>
                <Text fontSize="1rem" fontWeight="medium">
                  {opt.option}
                </Text>
                <Text color="gray.400" fontSize=".9rem">
                  {opt.deliveredOn}
                </Text>
              </Box>
            </Flex>
          ))}
        </Grid>
      </Box>
      <Box shadow="xl" p="1.5rem" borderRadius="10px">
        <Heading mb={"2rem"} size="md">
          Payment Options
        </Heading>

        {/* checkout form */}
      </Box>

      {/* footer */}
      <Flex justifyContent="space-between" alignItems="center">
        {/* back button */}
        <Flex
          color="black"
          fontWeight="medium"
          gap={1}
          alignItems={"center"}
          cursor="pointer"
          onClick={() => dispatch(showAddandBillingScreen())}
        >
          <Icon as={RiArrowLeftSLine} h={5} w={5} />
          <Text fontSize=".92rem"> Back </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PaymentForm;
