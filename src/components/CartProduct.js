import React from 'react';
import { useDispatch } from 'react-redux';
import {
  removeProductFromCart,
  updateProductQuantity,
} from '../reducers/cartReducer';
import '../css/cartProduct.css';
import CurrencyFormat from 'react-currency-format';

function CartProduct({
  image,
  title,
  price,
  id,
  rating = 5,
  quantity,
  hideButtons,
}) {
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
        <CurrencyFormat
          thousandSpacing={'2s'}
          decimalScale={2}
          value={price}
          displayType={'text'}
          thousandSeparator={true}
          renderText={(value) => (
            <p>
              ₹ <strong>{value}</strong>
            </p>
          )}
        ></CurrencyFormat>
        <div className="cartProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>

        {!hideButtons && (
          <div className="cartProduct__quantity">
            <button
              disabled={price > 50000 || quantity > 9}
              onClick={handleIncrement}
            >
              +
            </button>
            <span>{quantity}</span>
            <button
              disabled={price > 50000 || quantity < 2}
              onClick={handleDecrement}
            >
              -
            </button>
          </div>
        )}
        {!hideButtons && (
          <button className="cartProduct__removeButton" onClick={handleRemove}>
            Remove from basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CartProduct;
