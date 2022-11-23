import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import order_services from "./orderServices";

const initialState = {
  orders: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
// fetch all orders
export const fetchAllOrders = createAsyncThunk(
  "order/all",
  async (userId, thunkAPI) => {
    try {
      const { status, data } = await order_services.getAllOrders();

      if (status === 200) {
        return data.orders;
      }
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get all orders for current user
export const fetchUserOrders = createAsyncThunk(
  "order/getAll",
  async (userId, thunkAPI) => {
    try {
      const { status, data } = await order_services.getUserOrders(userId);
      if (status === 200) {
        return data.orders;
      }
    } catch (error) {
      const { status } = error.response;
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      // if (status === 401) {
      //   localStorage.removeItem("userInfo");
      //   window.location.replace("http://localhost:3000/login");
      // }
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// get single order
export const fetchSingleOrder = createAsyncThunk(
  "order/get",
  async (orderId, thunkAPI) => {
    try {
      const res = await order_services.getOrderDetail(orderId);
      // if (res) {
      //   return res.url;
      // }

      return res.details;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get single order
export const removeSingleOrder = createAsyncThunk(
  "order/remove",
  async (orderId, thunkAPI) => {
    try {
      const res = await order_services.deleteOrderService(orderId);

      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrder: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
      state.orders = [];
    },
    resetSingleOrder: (state) => {
      state.order = null;
    },
  },
  extraReducers: {
    // get all orders for ciurrent user
    [fetchAllOrders.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchAllOrders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.orders = action.payload;
    },
    [fetchAllOrders.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    },

    // get all orders for ciurrent user
    [fetchUserOrders.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchUserOrders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.orders = action.payload;
    },
    [fetchUserOrders.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    },

    //get single order details
    [fetchSingleOrder.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchSingleOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.order = action.payload;
    },
    [fetchSingleOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    },

    //remove single order
    [removeSingleOrder.pending]: (state, action) => {
      state.isLoading = true;
    },
    [removeSingleOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.orders = state.orders.filter(
        (order) => order._id !== action.payload.deleted?._id
      );
      state.message = action.payload.msg;
    },
    [removeSingleOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});
export const { resetSingleOrder, resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
