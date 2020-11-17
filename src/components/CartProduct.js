import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProductFromCart } from '../reducers/cartReducer';

function CartProduct({ image, title, price, id, rating }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeProductFromCart(id));
  };

  return (
    <div className="cartProduct">
      <img src={image} alt=""></img>
      <div className="cartProduct__info">
        <p>{title}</p>
        <p>{price}</p>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>⭐</p>
          ))}
        <button onClick={handleRemove}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CartProduct;
