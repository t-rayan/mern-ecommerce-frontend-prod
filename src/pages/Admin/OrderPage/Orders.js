import React from "react";
import { useEffect } from "react";
import EmptyState from "../../../components/EmptyState";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Image,
  Text,
  Badge,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  removeProduct,
  reset,
} from "../../../features/product/productSlice";
import LoadingState from "../../../components/LoadingState";
import { RiAddFill } from "react-icons/ri";
import { SearchIcon } from "@chakra-ui/icons";
import PopMenu from "../../../components/PopMenu";
import useMedia from "../../../hooks/useMedia";
import {
  deleteOrderService,
  getAllOrders,
} from "../../../features/order/orderServices";
import {
  fetchAllOrders,
  removeSingleOrder,
} from "../../../features/order/orderSlice";
import authServices from "../../../features/auth/authServices";
import { convertDate } from "../../../utils/DateModifiers";

const Orders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, orders } = useSelector((state) => state.order);
  const { isMobile } = useMedia();
  const { getUserById } = authServices;

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <LoadingState />
      ) : orders?.length === 0 ? (
        <EmptyState title="Products" goto={() => navigate("add")} />
      ) : (
        <Stack spacing="10">
          {/* header */}
          <Flex justifyContent="space-between" alignItems="flex-end">
            <Heading size="md" color="gray.800">
              Orders
            </Heading>
            {/* <Button
              bg="gray.800"
              color="gray.200"
              fontSize=".8rem"
              fontWeight="bold"
              leftIcon={<RiAddFill size="1.1rem" />}
              _hover={{ bg: "gray.700" }}
              _active={{ bg: "gray.700" }}
              borderRadius="md"
              onClick={() => navigate("add")}
            >
              Add
            </Button> */}
          </Flex>
          {/* search input */}
          <Box>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input type="text" placeholder="Search" borderColor="gray.300" />
            </InputGroup>
          </Box>

          {/* content table */}
          <Table
            variant="simple"
            size="md"
            color="gray.400"
            fontWeight="medium"
          >
            <Thead fontSize=".8rem">
              <Tr>
                <Th>
                  <Text>Customer </Text>
                </Th>
                <Th>Order Date</Th>
                <Th>Total Items</Th>
                <Th>Total Price</Th>
                <Th>Payment</Th>
                <Th>Delivery</Th>
                <Th>Options</Th>
              </Tr>
            </Thead>
            <Tbody fontSize=".85rem">
              {orders?.map((order) => (
                <Tr key={order._id}>
                  <Td textAlign={"left"}>
                    <Text>
                      {order?.userId?.firstname}
                      {/* {order?.userId?._id} */}
                    </Text>
                  </Td>
                  <Td textAlign={"left"}>
                    <Text>{convertDate(order.createdAt)}</Text>
                  </Td>
                  <Td textAlign={"left"}>
                    <Text>{order?.products?.length}</Text>
                  </Td>
                  <Td textAlign={"left"}>
                    <Text>{order?.total / 100}</Text>
                  </Td>
                  <Td textAlign={"left"}>
                    <Badge fontSize=".7rem" colorScheme="green">
                      {order?.paymentStatus}
                    </Badge>
                  </Td>
                  <Td textAlign={"left"}>
                    <Badge fontSize=".7rem" colorScheme="orange">
                      {order?.deliveryStatus}
                    </Badge>
                  </Td>
                  <Td textAlign={"left"}>
                    <Button
                      size="xs"
                      colorScheme="red"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(removeSingleOrder(order?._id));
                      }}
                    >
                      {" "}
                      Delete{" "}
                    </Button>
                  </Td>
                  {/* <Td
                    display="flex"
                    flexDir={isMobile ? "column" : "row"}
                    alignItems="start"
                    gap="3"
                  >
                    <Box>
                      <Image
                        src={product?.images[0]?.img_url}
                        alt="pimg"
                        borderRadius="md"
                        w="100%"
                        boxSize="40px"
                      />
                    </Box>
                    <Text
                      textAlign="center"
                      fontSize={isMobile ? ".7rem" : "1rem"}
                    >
                      {product.name}
                    </Text>
                  </Td>
                  <Td>
                    <Text fontSize={isMobile ? ".7rem" : "1rem"}>
                      {product.inventory}
                    </Text>
                  </Td>
                  <Td textAlign={"left"}>
                    <Text fontSize={isMobile ? ".7rem" : "1rem"}>
                      {product.price}
                    </Text>
                  </Td>
                  <Td textAlign={"left"}>
                    <PopMenu
                      deleteFunc={() => dispatch(removeProduct(product._id))}
                      editFunc={() => {
                        navigate(product._id);
                        dispatch(reset());
                      }}
                    />
                  </Td> */}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Stack>
      )}
    </>
  );
};

export default Orders;
