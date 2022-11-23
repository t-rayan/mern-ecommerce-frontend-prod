import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

export const categorySlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCategory: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
      state.category = null;
      state.isEdit = false;
    },
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1;
        toast.info("Product Qty Increased", {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, qty: 1 };
        const finalProduct = {
          ...tempProduct,
          total: tempProduct.qty * tempProduct.price,
        };
        state.cartItems.push(finalProduct);
        toast.success(`${action.payload.name} added to the cart.`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    incQty: (state, action) => {
      let itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1;
        state.cartItems[itemIndex].total =
          state.cartItems[itemIndex].price * state.cartItems[itemIndex].qty;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decQty: (state, action) => {
      let itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].qty > 1) {
        state.cartItems[itemIndex].qty -= 1;
        state.cartItems[itemIndex].total =
          state.cartItems[itemIndex].price * state.cartItems[itemIndex].qty;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeAll: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
    extraReducers: {},
  },
});
export const { addToCart, removeFromCart, incQty, decQty, removeAll } =
  categorySlice.actions;
export default categorySlice.reducer;
