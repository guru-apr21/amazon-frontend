import axios from '../axios/index';
import getToken from '../utils/token';

export const signin = async (body) => {
  const { data } = await axios.post(`users/signin`, body);
  return data;
};

export const signup = async (body) => {
  const { data } = await axios.post(`users/signup`, body);
  return data;
};

export const changeRole = async () => {
  try {
    const token = getToken();
    console.log(token);
    const { data } = await axios.put(`users/role`, null, {
      headers: { 'x-access-token': token },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const validateEmailId = async (email) => {
  const { data } = await axios.post(`users/email`, { email });
  return data;
};
