import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/products';

let token;
const getToken = () => {
  let user = window.localStorage.getItem('loggedInUser');
  if (user) {
    user = JSON.parse(user);
    return user.accessToken;
  }
};

export const getAllProducts = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
};

export const getUserProducts = async (userId) => {
  try {
    token = getToken();
    const { data } = await axios.get(`${baseUrl}/${userId}`, {
      headers: { 'x-access-token': token },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
