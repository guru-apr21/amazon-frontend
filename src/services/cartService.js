import axios from '../axios/index';
import getToken from '../utils/token';

let token;

export const getCartItems = async () => {
  token = getToken();
  if (token) {
    const { data } = await axios.get('cart', {
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
      'cart',
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
    const { data } = await axios.delete('cart', {
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
    const { data } = await axios.put(`cart/${id}`, null, {
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
      'cart',
      { productId: id, quantity },
      { headers: { 'x-access-token': token } }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
