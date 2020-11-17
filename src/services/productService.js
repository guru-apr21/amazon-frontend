import axios from 'axios';
const baseUrl = 'http://localhost:3001/api';

export const getAllProducts = async () => {
  const { data } = await axios.get(`${baseUrl}/products`);
  return data;
};
