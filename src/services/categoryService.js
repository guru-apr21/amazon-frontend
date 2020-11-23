import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/category';

export const getAllCategories = async () => {
  try {
    const { data } = await axios.get(baseUrl);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
