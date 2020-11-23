import { getAllCategories } from '../services/categoryService';
const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return action.payload;
    default:
      return state;
  }
};

export const setCategory = () => {
  return async (dispatch) => {
    const category = await getAllCategories();
    dispatch({ type: 'SET_CATEGORY', payload: category });
  };
};

export default categoryReducer;
