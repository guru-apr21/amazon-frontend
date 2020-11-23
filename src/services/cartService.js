import axios from 'axios';
import getToken from '../utils/token';
const baseUrl = 'http://localhost:3001/api/cart';

let token;

export const getCartItems = async () => {
  token = getToken();
  if (token) {
    const { data } = await axios.get(baseUrl, {
      headers: { 'x-access-token': token },
    });
    return data;
  }
  return [];
};

export const addToCart = async (id) => {
  try {
    token = getToken();
    const { data } = await axios.post(
      baseUrl,
      { productId: id },
      { headers: { 'x-access-token': token } }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const emptyCart = async () => {
  try {
    token = getToken();
    const { data } = await axios.delete(baseUrl, {
      headers: { 'x-access-token': token },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = async (id) => {
  try {
    token = getToken();
    const { data } = await axios.put(`${baseUrl}/${id}`, null, {
      headers: { 'x-access-token': token },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateQuantity = async (id, quantity) => {
  try {
    token = getToken();
    const { data } = await axios.post(
      baseUrl,
      { productId: id, quantity },
      { headers: { 'x-access-token': token } }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
