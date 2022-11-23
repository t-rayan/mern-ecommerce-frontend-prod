import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../features/product/productSlice";

const Searchbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Box display="flex" gap={2}>
      <Input
        size="lg"
        _focus={{ border: "2px solid", borderColor: "orange.400" }}
        type="text"
        placeholder="Search producsts ...."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button
        size="lg"
        colorScheme="orange"
        disabled={searchQuery ? false : true}
        onClick={() =>
          navigate({
            pathname: "products/search/",
            search: `?query=${searchQuery}`,
          })
        }
      >
        Search
      </Button>
    </Box>
  );
};

export default Searchbar;
