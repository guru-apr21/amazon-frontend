import axios from 'axios';
const baseUrl = 'http://localhost:3001/api';

export const signin = async (body) => {
  const { data } = await axios.post(`${baseUrl}/users/signin`, body);
  return data;
};

export const signup = async (body) => {
  const { data } = await axios.post(`${baseUrl}/users/signup`, body);
  return data;
};
