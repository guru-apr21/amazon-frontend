const { createOrder, getOrders } = require('../services/orderService');

const orderReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_ORDER':
      return [...state, action.payload];
    case 'SET_ORDERS':
      return action.payload;
    case 'CLEAR_ORDERS':
      return [];
    default:
      return state;
  }
};

export const newOrder = (orderItems, paymentIntentId, totalPrice) => {
  return async (dispatch) => {
    const { order } = await createOrder(
      orderItems,
      paymentIntentId,
      totalPrice
    );
    dispatch({ type: 'NEW_ORDER', payload: order });
  };
};

export const setOrders = () => {
  return async (dispatch) => {
    const { orders } = await getOrders();
    dispatch({ type: 'SET_ORDERS', payload: orders });
  };
};

export const clearOrders = () => {
  return {
    type: 'CLEAR_ORDERS',
  };
};

export default orderReducer;
