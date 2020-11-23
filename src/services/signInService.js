import axios from 'axios';
import getToken from '../utils/token';
const baseUrl = 'http://localhost:3001/api/users';

export const signin = async (body) => {
  const { data } = await axios.post(`${baseUrl}/signin`, body);
  return data;
};

export const signup = async (body) => {
  const { data } = await axios.post(`${baseUrl}/signup`, body);
  return data;
};

export const changeRole = async () => {
  try {
    const token = getToken();
    console.log(token);
    const { data } = await axios.put(`${baseUrl}/role`, null, {
      headers: { 'x-access-token': token },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
