import { instance } from "../../utils/Axios";
import { setToken } from "../../utils/SetToken";

const token = setToken();
// service to get all categories
export const createPaymentService = async ({ paymentInfo }) => {
  const { cartItems, userId } = paymentInfo;
  const res = await instance.post(
    "/order/payment",
    { cartItems, userId },
    token
  );
  return res.data;
};

const payment_services = {
  createPaymentService,
};
export default payment_services;
