import React from 'react';
import '../css/Order.css';
import CartProduct from './CartProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{order.createdAt}</p>
      <p className="order__id">
        <small>{order._id}</small>
      </p>
      {order.orderItems.map((item) => (
        <CartProduct
          hideButtons={true}
          key={item.productId._id}
          price={item.productId.price}
          id={item.productId._id}
          title={item.productId.title}
          image={`http://${item.productId.images[0]}`}
          rating={5}
        ></CartProduct>
      ))}
      <CurrencyFormat
        thousandSpacing={'2s'}
        decimalScale={2}
        value={order.totalPrice}
        displayType={'text'}
        thousandSeparator={true}
        renderText={(value) => (
          <h3 className="order__total">Order Total: ₹{value}</h3>
        )}
      ></CurrencyFormat>
    </div>
  );
}

export default Order;
