import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/products';

const getToken = () => {
  let user = window.localStorage.getItem('loggedInUser');
  if (user) {
    user = JSON.parse(user);
    return { token: user.accessToken, id: user._id };
  }
};

export const getAllProducts = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
};

export const getUserProducts = async () => {
  try {
    const { token, id } = getToken();
    const { data } = await axios.get(`${baseUrl}/user/${id}`, {
      headers: { 'x-access-token': token },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createNewProduct = async (body) => {
  const { token } = getToken();
  const data = await axios.post(`${baseUrl}`, body, {
    headers: { 'x-access-token': token },
  });
  return data;
};
