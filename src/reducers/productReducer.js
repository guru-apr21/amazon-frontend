import { getAllProducts, getUserProducts } from '../services/productService';

const initialState = {
  all: [],
  userProducts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, all: action.payload };
    case 'SET_USER_PRODUCTS':
      return { ...state, userProducts: action.payload };
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

export const setUserProducts = () => {
  return async (dispatch) => {
    const products = await getUserProducts();
    dispatch({ type: 'SET_USER_PRODUCTS', payload: products });
  };
};

export default productReducer;
