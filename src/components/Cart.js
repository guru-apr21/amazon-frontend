import React, { useEffect } from 'react';
import '../css/Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../reducers/cartReducer';
import CartProduct from './CartProduct';
import SubTotal from './SubTotal';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(setCart());
  }, [dispatch]);

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
                quantity={product.quantity}
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
        {cart.length > 0 && <SubTotal></SubTotal>}
      </div>
    </div>
  );
}

export default Cart;
