import {
  addToCart,
  emptyCart,
  getCartItems,
  removeFromCart,
  updateQuantity,
} from '../services/cartService';

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART':
      return action.payload;
    case 'CLEAR_CART':
      return [];
    case 'ADD_TO_CART':
      return action.payload;
    case 'REMOVE_FROM_CART':
      return action.payload;
    default:
      return state;
  }
};

export const setCart = () => {
  return async (dispatch) => {
    const cart = await getCartItems();
    dispatch({ type: 'SET_CART', payload: cart });
  };
};

export const clearCart = () => {
  return {
    type: 'CLEAR_CART',
  };
};

export const deleteCartItems = () => {
  return async (dispatch) => {
    const cart = await emptyCart();
    dispatch({ type: 'SET_CART', payload: cart });
  };
};

export const addProductToCart = (productId) => {
  return async (dispatch) => {
    const cart = await addToCart(productId);
    dispatch({ type: 'ADD_TO_CART', payload: cart });
  };
};

export const removeProductFromCart = (id) => {
  return async (dispatch) => {
    const cart = await removeFromCart(id);
    dispatch({ type: 'REMOVE_FROM_CART', payload: cart });
  };
};

export const updateProductQuantity = (id, quantity) => {
  return async (dispatch) => {
    const cart = await updateQuantity(id, quantity);
    dispatch({ type: 'SET_CART', payload: cart });
  };
};

export const getTotalItemsInCart = (cart) => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return totalItems;
};

export const getCartTotal = (cart) => {
  const total = cart.reduce(
    (amount, item) => amount + item.productId.price * item.quantity,
    0
  );
  return total;
};

export default cartReducer;
