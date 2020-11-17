import { getAllProducts } from '../services/productService';

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return [...action.payload];
    default:
      return state;
  }
};

export const setProducts = () => {
  return async (dispatch) => {
    const products = await getAllProducts();
    dispatch({ type: 'SET_PRODUCTS', payload: products });
  };
};

export default productReducer;
