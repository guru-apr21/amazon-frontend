import axios from '../axios/index';

export const getAllCategories = async () => {
  try {
    const { data } = await axios.get('category');
    return data;
  } catch (error) {
    console.log(error);
  }
};
