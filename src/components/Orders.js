import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setOrders } from '../reducers/orderReducer';

function Orders() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOrders());
  }, [dispatch]);

  return (
    <div>
      <h1>Orders</h1>
    </div>
  );
}

export default Orders;
