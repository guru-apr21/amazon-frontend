import axios from '../axios/index';
import getToken from '../utils/token';

let token;

export const createOrder = async (orderItems, paymentIntentId, totalPrice) => {
  try {
    token = getToken();
    const { data } = await axios.post(
      'orders',
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
    const { data } = await axios.get('orders', {
      headers: { 'x-access-token': token },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
