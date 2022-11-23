import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import QtyController from "../components/QtyController";
import { removeFromCart } from "../features/cart/cartSlice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Grid
      p=".9rem"
      borderRadius="10px"
      templateColumns="1fr 5.5rem 8rem 5.5rem .2fr"
      alignItems="center"
      justifyContent="space-between"
      my={3}
    >
      <GridItem>
        <Flex alignItems="center" gap={3}>
          <Box>
            <Image boxSize="40px" src={product?.thumbnail} />
          </Box>
          <Box>
            <Heading size="sm">{product?.name}</Heading>
            <Flex mt={1}>
              <Text fontWeight="medium" fontSize=".8rem" color="gray.500">
                storage: {product?.size} |
              </Text>
              &nbsp;
              <Text fontWeight="medium" fontSize=".8rem" color="gray.500">
                {" "}
                color: {product.color}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </GridItem>
      <GridItem>
        <Text fontSize=".9rem">${product.price}</Text>
      </GridItem>
      <GridItem>
        <QtyController qty={product.qty} id={product.id} />
      </GridItem>
      <GridItem>
        <Text fontSize=".9rem">{product.total}</Text>
      </GridItem>
      <GridItem>
        <Icon
          cursor="pointer"
          color="gray.500"
          as={RiDeleteBin5Line}
          h={10}
          w={10}
          borderRadius="100%"
          _hover={{ bg: "gray.100", color: "red.400" }}
          p="10px"
          onClick={() => dispatch(removeFromCart({ id: product.id }))}
        />
      </GridItem>
    </Grid>
  );
};

export default CartItem;
