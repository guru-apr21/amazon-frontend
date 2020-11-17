import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/Cart.css';
import CartProduct from './CartProduct';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <div className="cart">
      <div className="cart__left">
        <img
          className="cart__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        ></img>
        {cart.length < 1 ? (
          <div className="cart__empty">
            <img
              src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
              alt=""
            />
            <h2>Your Amazon basket is empty</h2>
          </div>
        ) : (
          <>
            {cart.map((product) => (
              <CartProduct
                key={product.productId._id}
                id={product.productId._id}
                image={`https://${product.productId.images[0]}`}
                title={product.productId.title}
                price={product.productId.price}
                rating={product.productId.rating}
              ></CartProduct>
            ))}
          </>
        )}
      </div>
      <div className="cart__right">
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default Cart;
