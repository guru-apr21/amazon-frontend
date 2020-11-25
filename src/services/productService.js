import axios from '../axios/index';

const getToken = () => {
  let user = window.localStorage.getItem('loggedInUser');
  if (user) {
    user = JSON.parse(user);
    return { token: user.accessToken, id: user._id };
  }
};

export const getAllProducts = async () => {
  const { data } = await axios.get('products');
  return data;
};

export const getUserProducts = async () => {
  try {
    const { token, id } = getToken();
    const { data } = await axios.get(`products/user/${id}`, {
      headers: { 'x-access-token': token },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createNewProduct = async (body) => {
  const { token } = getToken();
  const { data } = await axios.post(`products`, body, {
    headers: { 'x-access-token': token },
  });
  return data;
};

export const deleteProduct = async (id) => {
  try {
    const { token } = getToken();
    await axios.delete(`products/${id}`, {
      headers: { 'x-access-token': token },
    });
  } catch (err) {
    console.log(err);
  }
};
