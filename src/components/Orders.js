import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrders } from '../reducers/orderReducer';
import Order from './Order';
import '../css/orders.css';

function Orders() {
  const user = useSelector((state) => state.user);
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setOrders());
    }
  }, [user, dispatch]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order key={order._id} order={order}></Order>
        ))}
      </div>
    </div>
  );
}

export default Orders;
