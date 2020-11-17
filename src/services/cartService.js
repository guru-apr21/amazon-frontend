import axios from 'axios';
const baseUrl = 'http://localhost:3001/api';

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
    const { data } = await axios.get(`${baseUrl}/cart`, {
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
      `${baseUrl}/cart`,
      { productId: id },
      { headers: { 'x-access-token': token } }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
