import { instance } from "../../utils/Axios";
import { setToken } from "../../utils/SetToken";

const token = setToken();

// service to get all Orders
export const getAllOrders = async () => {
  const res = await instance.get("/order", token);
  return res;
};

// service to create new order
export const createOrder = async (cartItems) => {
  const res = await instance.post("/order", cartItems, token);
  return res;
};

// service to get all orders of user
export const getUserOrders = async (userId) => {
  const res = await instance.get(`order/orders/${userId}`, token);
  return res;
};

export const getOrderDetail = async (orderId) => {
  const res = await instance.get(`/order/${orderId}`, token);
  return res.data;
};

export const deleteOrderService = async (orderId) => {
  const res = await instance.delete(`/order/${orderId}`, token);
  console.log(res);
  return res;
};

const order_services = {
  getUserOrders,
  getOrderDetail,
  getAllOrders,
  deleteOrderService,
};
export default order_services;
