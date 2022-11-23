import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RiAddFill, RiArrowLeftSLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { showPaymentScreen, showCartScreen } from "../features/ui/uiSlice";
import NewAddrModal from "./NewAddrModal";
import SingleAddress from "./SingleAddress";

const BillandAddForm = () => {
  const [isModal, setIsModal] = useState(false);

  const dispatch = useDispatch();
  return (
    <>
      <Box h="100%" display="grid" gap={"1.5rem"}>
        {/* list of address */}

        <SingleAddress nextStep={() => dispatch(showPaymentScreen())} />
        {/* footer */}
        <Flex justifyContent="space-between" alignItems="center">
          {/* back button */}
          <Flex
            color="black"
            fontWeight="medium"
            gap={1}
            alignItems={"center"}
            cursor="pointer"
            onClick={() => dispatch(showCartScreen())}
          >
            <Icon as={RiArrowLeftSLine} h={5} w={5} />
            <Text fontSize=".92rem"> Back </Text>
          </Flex>

          {/* add new address btn */}
          <Flex
            color="green.500"
            fontWeight="medium"
            gap={1}
            alignItems={"center"}
            cursor="pointer"
            onClick={() => setIsModal(true)}
          >
            <Icon as={RiAddFill} h={5} w={5} />
            <Text fontSize=".92rem"> Add New Address </Text>
          </Flex>
        </Flex>
      </Box>

      {/* modal */}

      {isModal && <NewAddrModal closeModal={() => setIsModal(false)} />}
    </>
  );
};

export default BillandAddForm;
