const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART':
      return [...action.payload];
    case 'CLEAR_CART':
      return [];
    case 'ADD_TO_CART':
      return state;
    default:
      return state;
  }
};

export const setCart = (cart) => {
  return {
    type: 'SET_CART',
    payload: cart,
  };
};

export const clearCart = () => {
  return {
    type: 'CLEAR_CART',
  };
};

export const addProductToCart = (id) => {
  return {
    type: 'ADD_TO_CART',
  };
};

export default cartReducer;
