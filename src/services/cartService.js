import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/cart';

let token;
const getToken = () => {
  let user = window.localStorage.getItem('loggedInUser');
  if (user) {
    user = JSON.parse(user);
    return user.accessToken;
  }
};

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
