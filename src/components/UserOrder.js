import React from "react";
import { Badge, Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { displayModal } from "../features/ui/uiSlice";
import { fetchSingleOrder } from "../features/order/orderSlice";
import useMedia from "../hooks/useMedia";

const UserOrder = ({ currentOrder, isCustom }) => {
  const dispatch = useDispatch();
  const { isLargeDevice } = useMedia();
  const { order } = useSelector((state) => state.order);

  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr .2fr"
      shadow={currentOrder?._id === order?._id && !isCustom && "lg"}
      fontSize=".9rem"
      p={"2rem"}
      border="1px solid"
      // bg={currentOrder?._id === order?._id && !isCustom && "gray.100"}
      borderColor="gray.300"
      borderRadius="10px"
      gap={5}
      my={5}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid
        fontSize=".9rem"
        borderRadius="10px"
        gap={5}
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
      >
        <Box display="flex" gap={2} flexDir="column">
          <Text fontWeight="medium">#ID: </Text>
          <Text color="gray.500">{currentOrder._id}</Text>
          <Text color="gray.500">{currentOrder.userId}</Text>
        </Box>
        <Box display="flex" gap={2} flexDir="column">
          <Text fontWeight="medium">Total Items: </Text>
          <Text color="gray.500"> {currentOrder?.products.length}</Text>
        </Box>
        <Box display="flex" gap={2} alignItems="start" flexDir="column">
          <Text fontWeight="medium">Payment Status: </Text>
          <Badge colorScheme="green">{currentOrder?.paymentStatus} </Badge>
        </Box>
        <Box display="flex" gap={2} flexDir="column">
          <Text fontWeight="medium">Order Date: </Text>
          <Text color="gray.500">{currentOrder.createdAt}</Text>
        </Box>
      </Grid>
      <Grid h="100%" templateRows="1fr 1fr" justifyContent="space-between">
        <GridItem alignSelf="start">
          {" "}
          <Badge colorScheme="orange">Pending</Badge>
        </GridItem>
        <GridItem alignSelf="end">
          {" "}
          {!isCustom && (
            <Button
              variant="outline"
              size="xs"
              colorScheme="blue"
              onClick={() => {
                dispatch(fetchSingleOrder(currentOrder._id));
                dispatch(displayModal());
              }}
            >
              View
            </Button>
          )}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default UserOrder;
