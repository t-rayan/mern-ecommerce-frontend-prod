import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import payment_services from "./paymentServices";

const initialState = {
  stripe_url: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// create payment
export const createPayment = createAsyncThunk(
  "payment/create",
  async (paymentInfo, thunkAPI) => {
    try {
      const res = await payment_services.createPaymentService(paymentInfo);
      if (res) {
        window.location.href = res.url;
        return res.url;
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

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    resetCategory: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: {
    // add category reducers
    [createPayment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [createPayment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.url = action.payload;
      state.message = action.payload?.msg;
    },
    [createPayment.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});
// export const { } = paymentSlice.actions;
export default paymentSlice.reducer;
