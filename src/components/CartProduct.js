import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProductFromCart } from '../reducers/cartReducer';
import '../css/cartProduct.css';

function CartProduct({ image, title, price, id, rating = 5 }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeProductFromCart(id));
  };

  return (
    <div className="cartProduct">
      <img src={image} alt=""></img>
      <div className="cartProduct__info">
        <p className="cartProduct__title">{title}</p>
        <p>
          ₹ <strong>{price}</strong>
        </p>
        <div className="cartProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button onClick={handleRemove}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CartProduct;
