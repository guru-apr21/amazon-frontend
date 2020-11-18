import React from 'react';
import { useDispatch } from 'react-redux';
import {
  removeProductFromCart,
  updateProductQuantity,
} from '../reducers/cartReducer';
import '../css/cartProduct.css';

function CartProduct({ image, title, price, id, rating = 5, quantity }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeProductFromCart(id));
  };

  const handleIncrement = () => {
    const updatedQuantity = quantity + 1;
    dispatch(updateProductQuantity(id, updatedQuantity));
  };

  const handleDecrement = () => {
    const updatedQuantity = quantity - 1;
    dispatch(updateProductQuantity(id, updatedQuantity));
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
        <div className="cartProduct__quantity">
          <button disabled={quantity > 9} onClick={handleIncrement}>
            +
          </button>
          <span>{quantity}</span>
          <button disabled={quantity < 2} onClick={handleDecrement}>
            -
          </button>
        </div>
        <button className="cartProduct__removeButton" onClick={handleRemove}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
