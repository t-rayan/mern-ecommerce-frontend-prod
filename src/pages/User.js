import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppModal from "../components/AppModal";
import OrderDetails from "../components/OrderDetails";
import UserOrder from "../components/UserOrder";
import { getOrderDetail } from "../features/order/orderServices";
import {
  fetchUserOrders,
  resetOrder,
  resetSingleOrder,
} from "../features/order/orderSlice";
import useMedia from "../hooks/useMedia";

const User = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const { fullname, id } = userInfo;

  const { isModal } = useSelector((state) => state.ui);

  const { isMobile, isTablet, isLargeDevice } = useMedia();

  const { orders, order } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchUserOrders(id));
    return () => {
      dispatch(resetOrder());
    };
  }, [dispatch, id]);

  return (
    <Box display="grid" gridTemplateColumns={"1fr"} gap={10} alignItems="start">
      <Box display="grid" gap={10}>
        <Box borderRadius="10px">
          <Heading color="green.400" size="md">
            Hello
          </Heading>
          <Heading size="md" my={2} textTransform="capitalize">
            {fullname}
          </Heading>
          <Text color="gray.500">{id}</Text>
        </Box>
        {!order && (
          <Box>
            <Heading mb="2rem" size="md">
              Your Orders
            </Heading>

            <Grid
              gridTemplateColumns="repeat( auto-fill, minmax(350px, 1fr) );"
              gap="2rem"
            >
              {orders?.map((order) => (
                <UserOrder key={order._id} currentOrder={order} />
              ))}
            </Grid>
          </Box>
        )}
      </Box>
      {order && <OrderDetails order={order} />}
    </Box>
  );
};

export default User;
