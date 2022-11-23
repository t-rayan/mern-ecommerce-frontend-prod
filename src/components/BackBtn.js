import { Flex, Heading, Icon } from "@chakra-ui/react";
import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const BackBtn = ({ btnTitle }) => {
  const navigate = useNavigate();
  return (
    <Flex justifyContent="start" alignItems="center" gap={1}>
      {/* <Button
        variant="ghost"
        display="grid"
        placeItems="center"
        w="8px"
        h="35px"
        pl="6"
        leftIcon={<FaArrowLeft />}
        _hover={{ outline: "none" }}
        _focus={{ outline: "none" }}
        onClick={() => {
          navigate(-1);
        }}
      /> */}
      <Icon
        onClick={() => {
          navigate(-1);
        }}
        cursor="pointer"
        as={RiArrowLeftSLine}
        h={6}
        w="6"
      />
      <Heading fontSize="1rem"> {btnTitle}</Heading>
    </Flex>
  );
};

export default BackBtn;
