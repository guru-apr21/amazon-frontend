import axios from 'axios';
import getToken from '../utils/token';
const baseUrl = 'http://localhost:3001/api/orders';

let token;

export const createOrder = async (orderItems, paymentIntentId, totalPrice) => {
  try {
    token = getToken();
    const { data } = await axios.post(
      baseUrl,
      { orderItems, paymentIntentId, totalPrice },
      {
        headers: { 'x-access-token': token },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = async () => {
  try {
    token = getToken();
    const { data } = await axios.get(baseUrl, {
      headers: { 'x-access-token': token },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
