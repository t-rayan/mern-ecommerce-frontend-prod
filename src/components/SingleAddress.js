import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SingleAddress = ({ nextStep }) => {
  return (
    <>
      <Box
        display="grid"
        alignItems="center"
        shadow="lg"
        borderRadius="10px"
        p={"1.8rem"}
      >
        <Flex justifyContent="space-between" alignItems="end">
          <Grid fontSize=".85rem" gap={"10px"}>
            <GridItem display="flex" gap={2} alignItems="center">
              <Text fontSize=".9rem" fontWeight="medium">
                Narayan Thapa{" "}
              </Text>
              <Badge colorScheme="purple"> Default </Badge>
            </GridItem>
            <GridItem> 4, 34 Mansfield Street</GridItem>
            <GridItem>Brisbane City, Queensland,Australia,4151</GridItem>
            <GridItem>
              <Text color="gray.400">+61-490916558</Text>
            </GridItem>
          </Grid>
          <Flex gap={3}>
            <Button _focus={{ outline: "none" }} variant="outline" size="sm">
              Delete
            </Button>
            <Button
              _focus={{ outline: "none" }}
              variant="outline"
              colorScheme="green"
              size="sm"
              onClick={nextStep}
            >
              Deliver To This Address
            </Button>
          </Flex>
        </Flex>
      </Box>

      <Box
        display="grid"
        alignItems="center"
        shadow="lg"
        borderRadius="10px"
        p={"1.8rem"}
      >
        <Flex justifyContent="space-between" alignItems="stretch">
          <Grid fontSize=".85rem" gap={"10px"}>
            <GridItem display="flex">
              <Text fontSize=".9rem" fontWeight="medium">
                Narayan Thapa{" "}
              </Text>
            </GridItem>
            <GridItem> 4, 34 Mansfield Street</GridItem>
            <GridItem>Brisbane City, Queensland,Australia,4151</GridItem>
            <GridItem>
              <Text color="gray.400">+61-490916558</Text>
            </GridItem>
          </Grid>
          <Flex
            flexDir="column"
            alignItems="flex-end"
            justifyContent="space-between"
          >
            <Button size="s" colorScheme="purple" variant="link">
              Set as default
            </Button>
            <Flex gap={3}>
              <Button _focus={{ outline: "none" }} variant="outline" size="sm">
                Delete
              </Button>
              <Button
                _focus={{ outline: "none" }}
                variant="outline"
                colorScheme="green"
                size="sm"
                onClick={nextStep}
              >
                Deliver To This Address
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default SingleAddress;
