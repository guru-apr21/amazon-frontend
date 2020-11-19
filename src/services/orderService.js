import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/orders';

let token;
const getToken = () => {
  let user = window.localStorage.getItem('loggedInUser');
  if (user) {
    user = JSON.parse(user);
    return user.accessToken;
  }
};

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