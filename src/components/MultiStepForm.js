import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import {
  RiCheckFill,
  RiCheckboxBlankCircleFill,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { useSelector } from "react-redux";
import BillandAddForm from "./BillandAddForm";
import MyCart from "./MyCart";
import PaymentForm from "./PaymentForm";

const MultiStepForm = () => {
  const {
    isCartScreen,
    isAddandBillingScreen,
    isPaymentScreen,
    isCartComplete,
    isBillComplete,
    isPaymentComplete,
  } = useSelector((state) => state.ui);
  return (
    <Box display="grid" h="100%" gridTemplateRows=".5fr auto">
      {/* form controllers ui */}

      {/* <Box
        display="grid"
        gridTemplateColumns="auto auto auto auto auto"
        h="100px"
        alignItems="baseline"
        justifyContent="center"
        gap={5}
      >
        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          gap={3}
        >
          <Icon
            as={
              !isCartComplete ? RiCheckboxBlankCircleFill : RiCheckboxCircleFill
            }
            h={3}
            w={3}
            color={isCartComplete || isCartScreen ? "green.400" : "gray.400"}
          />

          <Text
            fontSize=".8rem"
            fontWeight="medium"
            color={isCartScreen || isCartComplete ? "black" : "gray.400"}
          >
            Cart
          </Text>
        </Box>
        <Box
          h="2px"
          borderRadius="10px"
          w="200px"
          mt={2}
          bg={isCartComplete ? "green.300" : "gray.300"}
        ></Box>

        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          gap={3}
        >
          <Icon
            as={
              !isBillComplete ? RiCheckboxBlankCircleFill : RiCheckboxCircleFill
            }
            h={3}
            w={3}
            color={isCartComplete ? "green.400" : "gray.400"}
          />

          <Text
            fontSize=".8rem"
            fontWeight="medium"
            color={
              isAddandBillingScreen || isBillComplete ? "black" : "gray.400"
            }
          >
            Billing & Address
          </Text>
        </Box>
        <Box
          h={"2px"}
          mt={2}
          borderRadius="10px"
          w="200px"
          bg={isCartComplete && isBillComplete ? "green.400" : "gray.300"}
        ></Box>
        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          gap={3}
        >
          <Icon
            as={
              !isPaymentComplete
                ? RiCheckboxBlankCircleFill
                : RiCheckboxCircleFill
            }
            h={3}
            w={3}
            color={isPaymentScreen ? "green.400" : "gray.400"}
          />

          <Text
            fontSize=".8rem"
            fontWeight="medium"
            color={isPaymentScreen ? "black" : "gray.400"}
          >
            Payment
          </Text>
        </Box>
      </Box> */}

      {/* main forms */}

      {isCartScreen && <MyCart />}
      {isAddandBillingScreen && <BillandAddForm />}
      {isPaymentScreen && <PaymentForm />}
      {}
    </Box>
  );
};

export default MultiStepForm;
