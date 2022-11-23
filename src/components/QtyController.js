import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decQty, incQty } from "../features/cart/cartSlice";

const QtyController = ({ id, qty }) => {
  const dispatch = useDispatch();

  return (
    <Box display="flex" alignItems="center" gap={3}>
      <Button
        size="sm"
        fontWeight="semibold"
        disabled={qty === 1 ? true : false}
        onClick={() => dispatch(decQty({ id }))}
      >
        {" "}
        -{" "}
      </Button>
      <Text fontWeight="semibold">{qty}</Text>
      <Button
        size="sm"
        fontWeight="semibold"
        onClick={() => dispatch(incQty({ id }))}
      >
        {" "}
        +{" "}
      </Button>
    </Box>
  );
};

export default QtyController;
